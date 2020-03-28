
var prodTable = "<thead> <tr><th scope='col'>#Id</th>" +
		"<th scope='col'> Name</th><th scope='col'>Price</th>" +
		"<th scope='col'>Quantity</th><th scope='col'>Category</th>" +
		"</tr></thead><tbody>replaceProductRow</tbody>";

var prodRow ="<tr><th scope='row'>pId</th><td>pName</td><td>pPrice</td><td>pQuantity</td><td>pCategory</td></tr>";

//Add new product
function addNewProduct(value)
{
	console.log('addNewProduct: ', value);
	var categoryValue =$('#categoryValue').children(':selected').attr('id');
	var productName = document.getElementById("productName").value;
	var productPrice = document.getElementById("productPrice").value;
	var productQuantity = document.getElementById("productQuantity").value;
/*	console.log('categoryVlaue: ', categoryValue);
	console.log('productName: ', productName);
	console.log('productPrice: ', productPrice);
	console.log('productQuantity: ', productQuantity);*/
	
	addProduct(categoryValue, productName, productPrice, productQuantity);
}

function addProduct(categoryValue, productName, productPrice, productQuantity)
{
/*	console.log('categoryVlaue: ', categoryValue);
	console.log('productName: ', productName);
	console.log('productPrice: ', productPrice);
	console.log('productQuantity: ', productQuantity);*/

	document.getElementById('addProductMsg').innerHTML="<div class=\"spinner\"><div></div><div></div><div></div><div></div></div>";

	if(productName != '' && productPrice != '' && productQuantity != '')
	{
	 $.ajax({
			url : "addNewProduct",
			type : "Post",
			data : {
					categoryValue : categoryValue,
					productName : productName,
					productPrice : productPrice,
					productQuantity: productQuantity
					},
			dataType : "text",
			async: false,
			success : function(data) {
			console.log(data);
			if(data !='')
			{

			    $(addNewProductDiv).hide();
			    $(addProductMsg).show();
				document.getElementById('addProductMsg').innerHTML = data;
				clearProductData();
				//bootstarpAlert('', data, true, 'success');
				
			}
			else
			{
			    $(addProductMsg).show();
				document.getElementById('addProductMsg').innerHTML = "Opps! Something went wrong 'No data found'";
				bootstarpAlert('', "No data found!!", true, 'danger');
			}
					
		},
		error : function(request, status, error) 
		{
			//console.log(error + request.responseText);
		}
	});
  }else{

		bootstarpAlert('', "Please provide valid value", true, 'danger');
	}
}

function showAddProductDiv()
{
	console.log("showAddProductDiv working:");
	$(productListMsg).hide();
    $(addProductMsg).hide();
    $(productListDiv).hide();
    $(categoryFilterDiv).hide();
    $(addNewProductDiv).show();
}
function showProducTabletDiv()
{
	console.log("showProducTabletDiv working:");   
	$(addProductMsg).hide();
    $(addNewProductDiv).hide();
    $(categoryFilterDiv).show();
    $(productListDiv).show();

	var categoryValue =$('#categoryFilterDiv').children(':selected').attr('id');
	console.log('categoryVlaue: ', categoryValue);
	getProductData(categoryValue);
}

//clear new product value
function clearProductData()
{
	console.log('clearProductData: ');
	document.getElementById("productName").value = '';
	document.getElementById("productPrice").value = '';
	document.getElementById("productQuantity").value = '';
}

function cancelAddProduct()
{
	clearProductData();
	$(addNewProductDiv).hide();
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
















//Function get value of filter dropdown
function getFilterByColumnName(SelectedValue)
{
	//console.log('getFilterByColumnName: ', SelectedValue);
	//var filterType =$('#filterByColumnName').children(':selected').attr('id');
	//console.log("filterType: ", filterType);
	getDataList();
}

//Function get value of month year dropdown
function getFilterByMonthYear(SelectedValue)
{
	//console.log('filterByMonthYear: ', SelectedValue);
	getDataList();
}

//Function get value of Asc/Desc checkbox.
function getOrderBycheckbox(SelectedValue)
{
	//var checkboxValue = document.getElementById("orderBycheckbox").value;
	console.log('checkboxValue: ', SelectedValue);
	if('ASC' == SelectedValue)
	{
		document.getElementById('orderBycheckbox').value = 'DESC';
		document.getElementById('checkboxText').innerHTML = 'Asc <i class="fa fa-sort-amount-asc" aria-hidden="true"></i>';
	}
	else
	{
		document.getElementById('orderBycheckbox').value = 'ASC';
		document.getElementById('checkboxText').innerHTML = 'Desc <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>';
	}
	getDataList();
}


/**
 * Function to get month and year list for Customer Invoice Amount list.
 * 
 * @author Ankit Rathore
 * @version 1.2
 * @since 01-Nov-2017
 */
function getMonthYearList()
{
	//default select option 
	var selectList = "<option id='0' value='0' disabled>--Select Month--</option>";
	//get select list for selected customer
 
		//update select list append new data
		$.ajax({
			url : "GetMonthYearForInvoiceAmount",
			type : "Post",
			data : {
					customerId : "null",
				},
			async: false,
			success : function(data)
			{
				//console.log(data);
				if(data != '')
				{
					document.getElementById('filterByMonthYear').innerHTML = selectList + data;
				}
				else
				{
					//selectList = "<option id='0' value='0' selected='selected' disabled'>--Select Month--</option>";
					document.getElementById('filterByMonthYear').innerHTML = selectList;
				}
			},
			error : function(request, status, error) 
			{
				console.log(error + request.responseText);
			}
		});
}

/**
 * Function get docket list from database accrording to customerId.
 *
 * @param ctomerId
 * 				this id for indicate.
 *  
 * @author Ankit Rathore
 * @version 1.2
 * @since 06-Oct-2017
 */
function getDataList()
{
	var columnName =$('#filterByColumnName').children(':selected').attr('id');
	var monthYear =$('#filterByMonthYear').children(':selected').attr('value');
	var checkboxValue = document.getElementById("orderBycheckbox").value;
	//console.log('columnName', columnName);
	//console.log('monthYear', monthYear);
	//console.log('checkboxValue', checkboxValue);

	document.getElementById('Msg').innerHTML="<div class=\"spinner\"><div></div><div></div><div></div><div></div></div>";

	if(columnName != 0 && monthYear != 0)
	{
	 $.ajax({
			url : "GetAmountListForCustomer",
			type : "Post",
			data : {
					columnName : columnName,
					monthYear : monthYear,
					sortBy : checkboxValue
					},
			dataType : "text",
			async: false,
			success : function(data) {
			//console.log(data);
			if(data !='')
			{
				if(data.indexOf('div')>=0)
				{
					document.getElementById('dataList').innerHTML ="";
					document.getElementById('Msg').innerHTML ="";
					var array = data.split("#split#");
					var datalist = array[0];
					var Allcount = array[1];
					document.getElementById('dataList').innerHTML = datalist;
					setData(Allcount);
				}
				else
				{
					document.getElementById('dataList').innerHTML ="";
					var array = data.split("#split#");
					var datalist = array[0];
					var Allcount = array[1];
					document.getElementById('Msg').innerHTML = datalist;
					setData(Allcount);
					//bootstarpAlert('', data, true, 'danger');
				}
			}
			else
			{
				document.getElementById('dataList').innerHTML = "Opps! Something went wrong 'No data found'";
				document.getElementById('Msg').innerHTML ="";
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

//this function for selt all fields value.
function setData(data)
{
	var array = data.split("#@#");
	var customerCount = array[0];
	var invoicedCustomerCount = array[1];
	var invoicedAmountCount = array[2];
	var receivedAmountCount = array[3];
	document.getElementById('customerCount').innerHTML = customerCount;
	document.getElementById('invoicedCustomerCount').innerHTML = invoicedCustomerCount;
	document.getElementById('invoicedAmountCount').innerHTML = '&#8377 '+ invoicedAmountCount;
	document.getElementById('receivedAmountCount').innerHTML = '&#8377 '+ receivedAmountCount;
	
}

//THIS FUNTION WILL REDIRECT TO THE INVOICWE PAGE.
function redirectToCutomer(customerName,customerId)
{
	console.log('onlcick called....');
	console.log('customerName',customerName);
	console.log('customerId',customerId);
	
	if( customerName != '' && customerId != '')
	{
		var form = $(document.createElement('form'));
		$(form).attr("action", "ViewInvoicePageForId");
		$(form).attr("method", "POST");

		var inputID = $("<input>").attr("type", "hidden").attr("name", "customerName").val(customerName);
		var inputName = $("<input>").attr("type", "hidden").attr("name", "customerId").val(customerId);
		
		$(form).append($(inputID));
		$(form).append($(inputName));
		$(document.body).append(form);
		$(form).submit();
	}
	else
	{
		var msg = "Invailid selection."
		//this line will call function and show msg into that.
		bootstarpAlert("Warning :", msg, true,'warning');
	}
}


//this Function to download xmlfile for all cstomer.
function getDownloadTallyXml()
{
	//var customerId = document.getElementById("customerId").value;
	var monthYear =$('#filterByMonthYear').children(':selected').attr('value');
	console.log("monthYear", monthYear);
	
	if(monthYear !='0')
	{
		downloadFile("downloadXmlFile?customerId=00&monthYear="+monthYear+"&allCustomerFlag=Y");
	}
}

//this function used for download the customer invoices
function downloadFile(urlToSend) 
{
	console.log("urlToSend", urlToSend);
	var monthYear =$('#filterByMonthYear').children(':selected').attr('value');
    var req = new XMLHttpRequest();
    req.open("GET", urlToSend, true);
    req.responseType = "blob";
    req.onload = function (event) 
    {
        var blob = req.response;
        var fileName = req.getResponseHeader("fileName"); 
        //console.log("file name :", fileName);
        fileName = "Tally_File_For_All_Customer_"+monthYear+".xml"
        var link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download=fileName;
        link.click();
        console.log("Tally file download successfully.");
    };
    req.send();
}


			  