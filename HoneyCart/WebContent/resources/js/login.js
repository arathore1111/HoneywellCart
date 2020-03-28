function loginBA() {
	// if(document.getElementById('inputUser').value == ''){
	// bootstarpAlert("", 'Please enter user name', true, 'warning')
	// }
	// if(document.getElementById('inputPassword').value == ''){
	// bootstarpAlert("", 'Please enter password', true, 'warning')
	// }
	$.ajax({
		url : "login",
		type : "POST",
		async : false,
		data : { 
			inputUser : document.getElementById('inputUser').value
		},
		headers : {
			"inputPassword" : document.getElementById('inputPassword').value
		},
		dataType : 'text',
		success : function(data) {
			if (!data.includes('error')) {
				console.log(data)
				setTimeout(function() {
					window.location.replace("./"+data);
				}, 1)
			} else {
				setTimeout(function() {
					window.location.replace("./error");
				}, 1)
			}
		}
	})
}
function show_logintrouble() {
	var x = document.getElementById('login_div');
	var y = document.getElementById('login_trouble_div');
	if (x.style.display === 'none') {
		x.style.display = 'block';
		y.style.display = 'none';
	} else {
		x.style.display = 'none';
		y.style.display = 'block';
	}
}
// function to show bootstrap alerts
function bootstarpAlert(ttl, msg, dismiss, msgtype, delay) {

	// if delay parameter is not provided then
	if (typeof delay === "undefined" || delay === null) {
		delay = 3000;
	}

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
	});
}
function showResetPasswordPopUp() {
	$("#resetPassPopUp").modal("show");

}
function resetPassword() {
	console.log(document.getElementById("resetUserName").value);
	$.ajax({
		url : "resetPassword",
		type : "POST",
		async : false,
		data : {
			resetUserName : document.getElementById("resetUserName").value
		},
		dataType : 'text',
		success : function(data) {
			var status = data.split('-')[0];
			data = data.split('-')[1];
			if(status.trim() == 'SUCCESS'){
				$('#resetPassPopUp').modal('toggle');
				bootstarpAlert('', data, true, 'success');
//				document.getElementById('popupAlertMessage').innerHTML = data;
//				setTimeout(function() {
//					$('#alertPopup').modal('show');
//				}, 100);
			}else{
//				bootstarpAlert('', data, true, 'danger');
				document.getElementById('popupAlertMessage').innerHTML = data;
				setTimeout(function() {
					$('#alertPopup').modal('show');
				}, 100);
			}
		}
	})
}