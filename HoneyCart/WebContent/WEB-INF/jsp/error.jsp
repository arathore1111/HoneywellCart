<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>HoneyWell - Error</title>
<link rel="shortcut icon" type="image/x-icon"
	href="./resources/images/favicon.ico" />
<link rel="stylesheet" type="text/css"
	href="./resources/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="./resources/css/custom_css/custom_style.css">
<link rel="stylesheet" type="text/css"
	href="./resources/css/custom_css/login.css">
<!--<link href="https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">-->
<!--<link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet">-->
<link
	href="https://fonts.googleapis.com/css?family=Muli:200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">
<script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
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
	<div class="container-fluid" style="display:table;margin: 0 auto;">
		<div class="row">
			<div style="height: 550px; overflow: hidden">
				<div class="fadedBackground error_page align-center">
					<p class="col-12 align-center" style="font-size:25px">
					<strong style="color: red;">${message}</strong></p>
					
					<p class="col-12 align-center" style="font-size:25px">
					<a href="#" onclick="redirectToHome()">Click here to login </a>
					</p></div>
			</div>
		</div>
	</div>
	<div align='right'>
		<span id="siteseal"><script async type="text/javascript"
				src="https://seal.godaddy.com/getSeal?sealID=OjHGFs0ayjsbVLvj7r4KqzsTvj5uSmzH3dcepMFvvYlKQxYHQNGAbYHj6Ez1"></script></span>
	</div>
</body>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="./resources/js/bootstrap.min.js"></script>
<script type="text/javascript">
function redirectToHome() {
	setTimeout(function(){
		window.location.replace("./");
	}, 100)
}
</script>
</html>
