var cartIds = '';
var prodTable = "<thead> <tr><th scope='col'>#Id</th>" +
				"<th scope='col'> Name</th>" +
				"<th scope='col'>Price</th>" +
				"<th scope='col'>Quantity</th>" +
				"<th scope='col'>Category</th>" +
				"</tr></thead><tbody>replaceProductRow</tbody>";

var prodRow ="<tr><th scope='row'><input type='checkbox' class='chkBox' id='prodId' value='pId'> pId</th><td>pName</td><td>pPrice</td><td>pQuantity</td><td>pCategory</td></tr>";

var cartTable = "<thead> <tr><th scope='col'> Name</th>" +
				"<th scope='col'>Price</th>" +
				"<th scope='col'>Quantity</th>" +
				"<th scope='col'>Remove</th>" +
				"</tr></thead><tbody>replaceCartRow</tbody>";

var cartRow ="<tr><th scope='row'> pName</th>" +
				 "<td>pPrice</td>" +
				 "<td>pQuantity</td>" +
				 "<td> X </td></tr>";


$(document).ready(function()
{
	console.log("onload function working:");
	//reload data for
	showProducTabletDiv();
});


function showProducTabletDiv()
{
	console.log("showProducTabletDiv working:");
    //$(addNewProductDiv).hide();
    $(categoryFilterDiv).show();
    $(productListDiv).show();

	var categoryValue =$('#categoryFilterDiv').children(':selected').attr('id');
	console.log('categoryVlaue: ', categoryValue);
	getProductData(categoryValue);
}


function getProductData(categoryValue)
{
	console.log('categoryVlaue: ', categoryValue);

	document.getElementById('productListMsg').innerHTML="<div class=\"spinner\"><div></div><div></div><div></div><div></div></div>";

	if( categoryValue != '')
	{
	 $.ajax({
			url : "getProductList",
			type : "Post",
			data : {
					categoryValue : categoryValue,
					},
			dataType : "text",
			async: false,
			success : function(data) {
				var list = JSON.parse(data);
			console.log(list);
			if(list !='')
			{
				var finalRow = '';
				for(var i = 0, size = list.length; i < size ; i++)
				{
					   var product = list[i];

						  var tepProdRow = prodRow;
						  tepProdRow = tepProdRow.replace("pId", product.id);
						  tepProdRow = tepProdRow.replace("pId", product.id);
						  tepProdRow = tepProdRow.replace("pName", product.name);
						  tepProdRow = tepProdRow.replace("pPrice", product.price);
						  tepProdRow = tepProdRow.replace("pQuantity", product.quntity);
						  tepProdRow = tepProdRow.replace("pCategory", product.category);
						  finalRow = finalRow + tepProdRow;
				}

				  var finalprodTable = prodTable;
				  finalprodTable = finalprodTable.replace("replaceProductRow", finalRow);
				//console.log(finalprodTable);
				$(productListDiv).show();
				$(productListMsg).hide();
				document.getElementById('prod_TableData').innerHTML=finalprodTable;
				
			}
			else
			{

			    $(productListDiv).hide();
			    $(productListMsg).show();
				document.getElementById('productListMsg').innerHTML = "Opps! 'No data found' for this category. Please add first";
				bootstarpAlert('', "No data found!!", true, 'danger');
			}
					
		},
		error : function(request, status, error) 
		{
			//console.log(error + request.responseText);
		}
	});
  }
}

//Function get value of filter dropdown
function setCurrunDopDownValue(SelectedValue)
{
	console.log('setCurrunDopDownValue: ', SelectedValue);
	var filterType =$('#categoryFilterDiv').children(':selected').attr('id');
	console.log("filterType: ", filterType);
	getProductData(filterType);
}

function addToCart()
{
	console.log("addToCart2: ", $('.chkBox:checked').parent().find('#prodId').val());
	
	var checkedValue = null; 
	var inputElements = document.getElementsByClassName('chkBox');
	var idList = "";
	for(var i=0; inputElements[i]; ++i)
	{
	      if((inputElements[i].checked) == true)
	      {
	    	  checkedValue = inputElements[i].value;
	    	  idList = idList + checkedValue +'#'
	      }
	}
	console.log('List', idList);
	cartIds = idList;
	bootstarpAlert('', "Product added to your cart!!", true, 'success');
}

function showCartTableDiv()
{
	console.log("showCartTableDiv working:");   
	if(cartIds == '')
	{
		bootstarpAlert('', "Please add Product to your cart", true, 'success');
	}else{
		//$(addProductMsg).hide();
	   // $(addNewProductDiv).hide();
	   // $(categoryFilterDiv).show();
		getCartList(cartIds);
	    $(cartListDiv).show();
	    
	}
}


function getCartList(cartIds)
{
	console.log('getCartList: ', cartIds);

	//document.getElementById('productListMsg').innerHTML="<div class=\"spinner\"><div></div><div></div><div></div><div></div></div>";

	if( cartIds != '')
	{
	 $.ajax({
			url : "getCartList",
			type : "Post",
			data : {
						cartIds : cartIds,
					},
			dataType : "text",
			async: false,
			success : function(data) {
				var list = JSON.parse(data);
			console.log(list);
			if(list !='')
			{
				var finalRow = '';
				for(var i = 0, size = list.length; i < size ; i++)
				{
					   var product = list[i];

						  var tempCartRow = cartRow;
						  tempCartRow = tempCartRow.replace("pName", product.name);
						  tempCartRow = tempCartRow.replace("pPrice", product.price);
						  tempCartRow = tempCartRow.replace("pQuantity", product.quntity);
						  tempCartRow = tempCartRow.replace("pCategory", product.category);
						  finalRow = finalRow + tempCartRow;
				}

				  var finalCartTable = cartTable;
				  finalCartTable = finalCartTable.replace("replaceCartRow", finalRow);
				console.log(finalCartTable);
				$(cartListDiv).show();
				$(productListMsg).hide();
				document.getElementById('cart_TableData').innerHTML=finalCartTable;
				
			}
			else
			{

			    $(productListDiv).hide();
			    $(productListMsg).show();
				document.getElementById('productListMsg').innerHTML = "Opps! 'No data found' for this category. Please add first";
				bootstarpAlert('', "No data found!!", true, 'danger');
			}
					
		},
		error : function(request, status, error) 
		{
			//console.log(error + request.responseText);
		}
	});
  }
}

function buyItem()
{
	bootstarpAlert('', "This functionality not implemented", true, 'danger');	
}
	
/**
 * function to show bootstrap alerts for 3 second
 * @param String
 * 			title like "warning:"
 * @param String
 * 			msg like "data inserted successfully"
 * @param boolean
 * 				boolean value "true" for dismiss pop up
 * @param String
 * 				msgtype it takes pop up type like "warning\danger\success" 
 * 
 * @author Ankit Rathore
 * @since 11-sep-2017
 */
function bootstarpAlert(ttl, msg, dismiss, msgtype) {
	$.notify({
		title : '<strong>' + ttl + '</strong>',
		message : msg
	}, {
		allow_dismiss : dismiss,
		type : msgtype,
		delay : 3000,
		offset : {
			x : 450,
			y : 65
		}
	}

	);
}
