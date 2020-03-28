<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>HoneyWell - Login</title>
<link rel="shortcut icon" type="image/x-icon"
	href="./resources/images/favicon.ico" />
<link rel="stylesheet" type="text/css"
	href="./resources/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="./resources/css/custom_css/custom_style.css">
<link rel="stylesheet" type="text/css"
	href="./resources/css/custom_css/login.css">
<link
	href="https://fonts.googleapis.com/css?family=Muli:200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
<script type="text/javascript" src="./resources/js/notify.js"></script>
<script type="text/javascript" src="./resources/js/notify.min.js"></script>
<script type="text/javascript" src="./resources/js/login.js"></script>
<script src="./resources/js/bootstrap.min.js"></script>
</head>
<body>
	<nav
		class="navbar navbar-default navbar-fixed-top mtrl_shadow1 container-fluid">
		<div class="col-xl-12">
			<div class="row">
				<div class="header ">
					<div class="col-md-4">
					</div>
				</div>
			</div>
			<!--header-->
		</div>
		<!--container-->
	</nav>
	<div class="cls"></div>
	<!-- Login BOx Starts here -->
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3 push-8  logn_box mtrl_shadow1"
				style="height: 500px; overflow: hidden">
				<div id="login_div">
					<form class="form-signin">
						<div class="container">
							<div class="row">
								<div class="h4 login_box_header" style="height: 70px">
									<!-- <div class="container"> -->
									<div class="col-sm-4">
										<div class="form-group">Login!</div>
									</div>
									<!-- </div> -->
								</div>
							</div>
						</div>
						<div class="cls"></div>
						<div class="container">
							<div class="row">
								<div class="col-sm-3 ">
									<div class="form-group ">
										<label for="inputUser" class="sr-only">User</label> <input
											type="text" id="inputUser" name="inputUser"
											class="form-control col-sm-12" placeholder="User" required
											autofocus>
									</div>
									<div class="form-group">
										<label for="inputPassword" class="sr-only">Password</label> 
										<input type="password" id="inputPassword" name="inputPassword"
											class="form-control" placeholder="Password" required onkeydown="if (event.keyCode == 13) {loginBA();}">
									</div>
									<div class="form-group">
										<label 
											class="btn btn-lg btn-primary btn-block mtrl_shadow2 emiza_blue_bg"
											onclick="loginBA()">Login</label>
									</div>
<!-- 									<div class="form-group text-center"> -->
<!-- 										<p class="fnt14">If you happen to forgot your -->
<!-- 											password, please click here on  -->
<!-- 									<a href="#" class="fnt14" onclick="showResetPasswordPopUp()">Reset Password</a></p></div> -->
									<div class="form-group text-center">
										<p class="fnt14">If you happen to forgot your
											password, please send us email
									</p></div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="form-gap"></div>

	<div align='right'>
		<span id="siteseal"><script async type="text/javascript"
				src="https://seal.godaddy.com/getSeal?sealID=OjHGFs0ayjsbVLvj7r4KqzsTvj5uSmzH3dcepMFvvYlKQxYHQNGAbYHj6Ez1"></script></span>
	</div>
	<div class="modal fade bd-example-modal-lg" id="resetPassPopUp"
		tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
		aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content mtrl_shadow2"
				style="width: 450px;margin: auto;">
				<div class="modal-body" id="resetPassPopUpMsg">
					<div class="container" id="resetPassword">
						<div class="row">
							<div class="col-md-12">
							<button type="button" class="close br" data-dismiss="modal">&times;</button>
								<div class="panel panel-default">
									<div class="panel-body">
										<div class="text-center">
											<h3>
												<i class="fa fa-lock fa-4x"></i>
											</h3>
											<h2 class="text-center">Forgot Password?</h2>
											<p>You can reset your password here.</p>
										</div>
										<div class="form-group">
											<div class="input-group">
												<span class="input-group-addon"><i
													class="glyphicon glyphicon-envelope color-blue"></i></span> <input
													id="resetUserName" placeholder="User Name"
													class="form-control" type="text">
											</div>
										</div>
										<div class="form-group">
											<input name="recover-submit"
												class="btn btn-lg btn-primary btn-block mtrl_shadow2 emiza_blue_bg"
												onclick="resetPassword()" value="Reset Password"
												type="submit">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Pop up function to show popup model form validation  -->
	<div class="modal fade bd-example-modal-lg" id="alertPopup"
		tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
		aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content mtrl_shadow2 popupAltetMessage" style="width: 50%;margin: auto;">
				<div class="modal-body">
					<div id="popupAlertMessage"></div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>