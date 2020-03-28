
$(document).on('click', '.btn-danger', function() {
	back = true;
	
	$(this).closest(".container").remove();
});

// function to display logout confirmation model
function logout() {
	$('#logoutUser').modal('show');
}

var back = false;
// if data is not saved then popup message before leaving current window
function myFunction() {
	if (back == true) {
		return "Are you sure to exit?";
	}

}
// for disabling the onbeforeunload function
function propFunction() {
	back = false;
}
$(document).on('change', 'input', function() {
	back = true;
});
$(document).on('change', 'textarea', function() {
	back = true;
});
// checking for at least one line item before submitting the form
function validateLength() {
	/*
	 * console.log('itemid length: ' +
	 * document.getElementsByName("mItemID").length);
	 */
	if (document.getElementsByName("mItemID").length <= 1) {
		if (document.getElementById('mItemIDI').value == "") {
			bootstarpAlert('', 'Please Enter Item code.', true, 'danger');
			return false;
		}
	}

	/*
	 * console.log('mQuantity length: ' +
	 * document.getElementsByName("mQuantity").length);
	 */

	if (document.getElementsByName("mQuantity").length <= 1) {
		if (document.getElementById("mQuantityI").value == ""
				|| document.getElementById("mQuantityI").value < 1
				|| isNaN(parseInt(document.getElementById("mQuantityI").value))) {
			bootstarpAlert('', 'Please Enter valid Quantity.', true, 'danger');
			return false;
		}
	}
	if (!(document.getElementById('mItemIDI').value == "")
			& document.getElementsByName("mQuantity").length > 1) {
		if (document.getElementById("mQuantityI").value == ""
				|| document.getElementById("mQuantityI").value < 1
				|| isNaN(parseInt(document.getElementById("mQuantityI").value))) {
			bootstarpAlert('', 'Please Enter valid Quantity.', true, 'danger');
			return false;
		}
	}

	return true;
}

// function to set sales order
function setSalesOrder() {

	// console.log('setSalesOrder');

	if (validateForm() == true) {
		if (validateLength() == true) {
			
			var data = saveSalesOrder();
			console.log(data);
				if (data == "") {
					bootstarpAlert('', 'Error while saving Sales order', true,
					'danger',3000);
				}
				// for data saved successfully
				else {
					bootstarpAlert('', 'Data saved successfully for Sales order Id '+data+' please use save and process button to process order at WMS', true,
					'success',6000);
				}
		}
	}

}


//function to save and process order
function setSOToProcess(){
	if (validateForm() == true) {
		if (validateLength() == true) {
			var data = saveSalesOrder();
			console.log(data);
				if (data == "") {
					document.getElementById("successMessage").innerHTML = "Error While Saving Sales order";
					$('#confirmProcess').hide();
				}
				// for data saved successfully
				else {
					
					document.getElementById("successMessage").innerHTML = "Data Saved Successfully For Sales Order Id "
							+ data;
					$("#downloadSo").show();
				}
				$('#confirmSave').modal('show');
		}
	}
}

//function to confirm order for process
function confirmSOProcess(){
	document.getElementById('processFlag').value = 'Y';
	var data = saveSalesOrder();{
		if(data!=""){
			propFunction();
			document.getElementById("processMessage").innerHTML = "Order saved and sent to process at WMS";
			$('#confirmProcessModel').modal('show');
			
			setTimeout(function() {
				window.location.replace("./SalesOrder");
			}, 5000);
		}
	}
}
/*
* Function to save purchase order and get saved result
*/
function saveSalesOrder(){
	var result = "";
	console.log('inside');
	// ajax call to controller function
	$.ajax({
			url : "setSalesOrder",
			type : "Post",
			data : $("#frmItem").serialize(),
			async : false,
			dataType : "text",
			success : function(data, Text) {
				result = data;
			},
			error : function(request, status, error) {
				//console.log(error + request.responseText);
			}
		});
	return result;
}





// function to set Purchase order
function setPurchase() {
	if (validateForm() == true) {
		if (validateLength() == true) {
			
			var data = savePurchaseOrder();
			console.log(data);
				if (data == "") {
					bootstarpAlert('', 'Error while saving Purchase order', true,
					'danger',3000);
				}
				// for data saved successfully
				else {
					bootstarpAlert('', 'Data saved successfully for purchase order Id '+data+' please use save and process button to process order at WMS', true,
					'success',6000);
				}
		}
	}

}

//function to save and process order
function setToProcess(){
	if (validateForm() == true) {
		if (validateLength() == true) {
			var data = savePurchaseOrder();
			console.log(data);
				if (data == "") {
					document.getElementById("successMessage").innerHTML = "Error While Saving Purchase order";
					$('#confirmProcess').hide();
				}
				// for data saved successfully
				else {
					
					document.getElementById("successMessage").innerHTML = "Data Saved Successfully For Purchase Order Id "
							+ data;
					if ($('#company').text().trim() != "HomeStudio") {
						$('#downloadPo').show();
					}
					else{
						//$("#btnExport").show();
						$('#downloadPo').show();
					}
				}
				$('#confirmSave').modal('show');
		}
	}
}

//function to confirm order for process
function confirmProcess(){
	document.getElementById('processFlag').value = 'Y';
	var data = savePurchaseOrder();{
		if(data!=""){
			propFunction();
			document.getElementById("processMessage").innerHTML = "Order saved and sent to process at WMS";
			$('#confirmProcessModel').modal('show');
			
			setTimeout(function() {
				window.location.replace("./PurchaseOrder");
			}, 5000);
		}
	}
}
/*
 * Function to save purchase order and get saved result
 */
function savePurchaseOrder(){
	var result = "";
	console.log('inside');
	// ajax call to controller function
	$.ajax({
			url : "setPurchaseOrder",
			type : "Post",
			data : $("#frmItem").serialize(),
			async : false,
			dataType : "text",
			success : function(data, Text) {
				console.log(data);
				result = data;
			},
			error : function(request, status, error) {
				//console.log(error + request.responseText);
			}
		});
	return result;
}


// validating all required input fields
function validateForm() {
	var form = document.getElementById('frmItem');
	for (var i = 0; i < form.elements.length; i++) {
		if (form.elements[i].value == ''
				&& form.elements[i].hasAttribute('required') && form.elements[i].id != "email") {
			// console.log(form.elements[i].placeholder);
			bootstarpAlert('', 'Please Enter ' + form.elements[i].placeholder,
					true, 'warning');

			document.getElementById(form.elements[i].id).focus();
			return false;
		} else {
			if (form.elements[i].id == "email") {
				if((form.elements[i].value).trim() != ''){

					var check = isValidEmailAddress(form.elements[i].value);
					if (!check) {
						bootstarpAlert('', 'Please Enter Valid email', true,
								'danger');
						document.getElementById(form.elements[i].id).focus();
						return false;
					}
				
				}
	
			} else if (form.elements[i].id == "contact"
					| form.elements[i].id == "s_contact") {
				// console.log(form.elements[i].id);
				
				if(form.elements[i].id == "s_contact" & form.elements[i].value == ""){
					
				}else{
					var numCheck = isValidContact(form.elements[i].value);
					if (!numCheck) {
						bootstarpAlert(
								'',
								'Please Enter Valid Phone number<br>(Example: 9878987654 or 02224356545)',
								true, 'danger');
						document.getElementById(form.elements[i].id).focus();
						return false;
						
					}
				}
			} else if (form.elements[i].id == "name"
					| form.elements[i].id == "s_company") {
				
				if(form.elements[i].id == "s_company" & form.elements[i].value == ""){
					
				}
				else{
					var nameCheck = isValidName(form.elements[i].value);
					if (!nameCheck) {
						bootstarpAlert('', 'Please Enter Valid Name', true,
								'danger');
						document.getElementById(form.elements[i].id).focus();
						return false;
					}
				}
			}
		}
	}
	return true;
}

// validating email
function isValidEmailAddress(emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};
// validating contact
function isValidContact(contact) {
	var pattern = /^[789]\d{9}$/i;
	var pattern2 = /^[022]{3}\d{8}$/i
	return (pattern.test(contact) | pattern2.test(contact));
};
// validating name
function isValidName(name) {
	var pattern = /^([a-zA-Z0-9 .']+)$/
	return pattern.test(name);
};

// function to show bootstrap alerts
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
			y : 100
		}
	}

	);
}


//function to show bootstrap alerts
function bootstarpAlert(ttl, msg, dismiss, msgtype,delay) {
	$.notify({
		title : '<strong>' + ttl + '</strong>',
		message : msg
	}, {
		allow_dismiss : dismiss,
		type : msgtype,
		delay : delay,
		offset : {
			x : 450,
			y : 100
		}
	}

	);
}
