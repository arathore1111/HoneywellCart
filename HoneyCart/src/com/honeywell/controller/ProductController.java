package com.honeywell.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.honeywell.dto.Product;
import com.honeywell.utility.Utility;

@RestController
public class ProductController {

	Utility utility = new Utility();
	HttpSession session = null;
	String emailMessage = null;
	static int globalProductId = 1000;
    HashMap<Integer, Product> productTable = new HashMap<Integer, Product>(); 
    
    
    @RequestMapping(value = "login", method = RequestMethod.POST)
	public String login(@RequestParam("inputUser") String inputUser,
			@RequestHeader("inputPassword") String inputPassword, HttpServletRequest request, Model model,
			HttpServletResponse response) 
	{
		System.out.println("hello");
		if(inputUser.equalsIgnoreCase("admin")) {
			return "adminHome";
		}else if(inputUser.equalsIgnoreCase("user")) {
			return "userHome";
		}else {
			return "error";
		}
	}
	
	@RequestMapping(value = "adminHome", method = RequestMethod.GET, produces = "text/plain")
	public ModelAndView redirectAdminHome(HttpServletRequest request, Model model, HttpServletResponse response) {
		return new ModelAndView("adminHome");
	}
	
	@RequestMapping(value = "userHome", method = RequestMethod.GET, produces = "text/plain")
	public ModelAndView redirectUserHome(HttpServletRequest request, Model model, HttpServletResponse response) {
		return new ModelAndView("userHome");
	}

	@RequestMapping(value = "error", method = RequestMethod.GET, produces = "text/plain")
	public ModelAndView redirectError(HttpServletRequest request, Model model, HttpServletResponse response) {
		try {
			model.addAttribute("message", "Please contact to admin");
		} catch (Exception e) {
			// e.printStackTrace();
		}
		return new ModelAndView("error");
	}

	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public ModelAndView logout(HttpServletRequest request, HttpServletResponse response) {
		return new ModelAndView("redirect:/");
	}

	/**
	 * Function to get data for all customer invoice Amount data list.
	 * 
	 * @param columnName
	 *            String customer id for query.
	 * @param monthYear
	 *            String seleted filterTypeId.
	 * @param sortBy
	 *            String pageFlag.
	 * 
	 * @return String invoice list
	 * 
	 * @auther Ankit Rathore
	 * @version 1.2
	 * @since 11-Nov-2017
	 */
	@RequestMapping(value = "addNewProduct", method = RequestMethod.POST)
	public String addNewProduct(@RequestParam("categoryValue") String categoryValue,
											@RequestParam("productName") String productName, 
											@RequestParam("productPrice") String productPrice, 
											@RequestParam("productQuantity") String productQuantity,
											HttpServletRequest request, HttpServletResponse response)
	{

		Product product = new Product();
		product.setId(getProductId());
		product.setName(productName);
		product.setPrice(productPrice);
		product.setQuntity(productQuantity);
		product.setCategory(categoryValue);
		productTable.put(product.getId(), product);
		System.out.println("My mape size"+ productTable.size());
		return "Product added succesfully";
	}
	
	@RequestMapping(value = "getProductList", method = RequestMethod.POST)
	public List<Product> getProductList(@RequestParam("categoryValue") String categoryValue,
											HttpServletRequest request, HttpServletResponse response)
	{
		List<Product> prodList = new ArrayList<Product>();
		
		 for (Map.Entry<Integer, Product> entry : productTable.entrySet())  
		 {
			 if ( entry.getValue().getCategory().equalsIgnoreCase(categoryValue))
			 {
				 Product product = new Product();
				 product = entry.getValue();
				 prodList.add(product);
			 }
	    } 
		
		System.out.println("get data is working");
		return prodList;
	}
	
	@RequestMapping(value = "getCartList", method = RequestMethod.POST)
	public List<Product> getCartList(@RequestParam("cartIds") String cartIds,
											HttpServletRequest request, HttpServletResponse response)
	{
		List<Product> cartList = new ArrayList<Product>();
		String[] idArray = cartIds.split("#");
		 for (int i = 0; i < (idArray.length); i++)  
		 {
			 Product product = new Product();
			 product = productTable.get(Integer.parseInt(idArray[i]));
			 cartList.add(product);
	    } 
		
		//System.out.println("get cartList cartList is working");
		return cartList;
	}
	
	private static int getProductId()
	{
		return globalProductId++; 
	}
}
