<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859- 1">
<title>User Home Page</title>
<link rel="shortcut icon" type="image/x-icon"	href="./resources/images/favicon.ico" />
<link rel="stylesheet" type="text/css"	href="./resources/css/bootstrap.css">
<link rel="stylesheet" type="text/css"	href="./resources/css/custom_css/custom_style.css">
<link rel="stylesheet" type="text/css"	href="./resources/css/custom_css/monthlyBilling.css">
<link rel="stylesheet" type="text/css"	href="./resources/css/custom_css/animate.css">
<script src="https://use.fontawesome.com/84b53a1953.js"></script>

<!-- add this for new Munu -->
<link href="./resources/menu_bar/css/menu.css" rel="stylesheet">
<script src="./resources/menu_bar/js/jquery-1.js"></script>
<script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
<script type="text/javascript" src="./resources/js/emizaCommon.js"></script>
<script type="text/javascript" src="./resources/js/userHome.js"></script>
<script type="text/javascript"	src="https://code.jquery.com/jquery-3.2.1.js"></script>
<script type="text/javascript"	src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="./resources/js/notify.js"></script>
<script type="text/javascript" src="./resources/js/notify.min.js"></script>
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

</head>
<body style="overflow-x: hidden;">

	<!-- Header -->
	<div style="width: 100%; background: #fff !important;">
		<div class="col-xl-12">
			
		</div>
	</div>
	<div class="cls"></div>
	
	<!-- Page Starts from here -->
	<div class="container-fluid">
		<div class="row">
			<div class="page_body rounded page_width_fix bottom_margin_fix">
				<div class="col-sm-12 page_title_border ">
					<div class="row">
						<div class="col-md-2">
							<button type="button" id="showbtn" class="btn btn-success fnt16" onclick="showProducTabletDiv()" >
								<span id="checkboxText">Show Product</span>
							</button> 
						</div>
						<div class="col-md-2" > 
							<select class="form-control"  value="Electronics" onchange="setCurrunDopDownValue(this.value)"
														id="categoryFilterDiv" style="display: block;">
														<option id="0" value="0"  disabled >---Select Category---</option>
														<option id="Electronics" value="101" selected>Electronics</option>
														<option id="Furniture" value="102"  >Furniture</option>
														<option id="Fashion" value="103" >Fashion</option>
														<option id="Sports" value="104" >Sports</option>
														<option id="beauty " value="105" >beauty </option>
													</select>
						</div>
						 <div class="col-md-1">
						</div>
						<div class="col-md-3">
							<h3><label><b>Admin Home Page</b></label></h3>
						</div>
						<div class="col-md-3">
							<button type="button" id="showbtn" class="btn btn-success fnt16" onclick="showCartTableDiv()" >
								<span id="checkboxText">Show my Cart</span>
							</button> 
						</div>
						<div class="col-md-1">
							<button type="button" class="btn btn-danger fnt16" onclick="logout(this.value)" >
								<span onclick="redirectToHome()">Logout </span>
							</button> 
						</div>
					</div>
				</div>	
				<div class="cls"></div>
				<div class="col-sm-12 page_content padding-0per">
					<div class="container-fluid">
						<div class="row">
						
							<div class="col-sm-12  border_rounded">
								<div id="dataList" class="docketList" style="display: Block;">
									<div class="row marginAuto">
										<div id="productListMsg" class="Msg" style="width: 50%; display: none;"><br>
										</div>
										<div id="productListDiv" class="col-md-6 rightBorder" style="display: none;">
										<div class="row" name="msg_row1">
											<h5 ><b>Showing product list......</b></h5>
										</div>
										<div class="row" name="prod_table">
											<table class="table table-bordered" id="prod_TableData">
											  <thead>
											    <tr>
											      <th scope="col">#Cart</th>
											      <th scope="col">Product</th>
											      <th scope="col">Price</th>
											      <th scope="col">Quantity</th>
											      <th scope="col">Category</th>
											    </tr>
											  </thead>
											  <tbody>
											    <tr>
											      <th scope="row"><input class="chkBox" type="checkbox" id="prodId_1" value="1"> 1</th>
											      <td>Mark</td>
											      <td>Otto</td>
											      <td>@mdo</td>
											      <td>Otto</td>
											    </tr>
											    <tr>
											      <th scope="row"><input class="chkBox" type="checkbox" id="prodId_2" value="2"> 2</th>
											      <td>Mark</td>
											      <td>Otto</td>
											      <td>@mdo</td>
											      <td>Otto</td>
											    </tr>
											  </tbody>
											</table>
											<div class="col-md-12">
													<button type="button" id="showbtn" class="btn btn-success fnt16" onclick="addToCart()" >
														<span id="checkboxText">Add to cart</span>
													</button> 
											</div>
										</div>
									</div>
										<div id="cartListDiv" class="col-md-6 " style="display: none;">
											<div class="row" name="msg_row1">
												<h5 class="padleft15px"><b>Cart Details</b></h5>
											</div>
										   <div id="oneDiv" class="border_rounded">
											<div class="row pad15px" name="cart_table">
												<table class="table table-bordered" id="cart_TableData">
												  <thead>
												    <tr>
												      <th scope="col">Product Name</th>
												      <th scope="col">Price</th>
												      <th scope="col">Quantity</th>
												      <th scope="col">Remove</th>
												    </tr>
												  </thead>
												  <tbody>
												    <tr>
												      <th scope="row">Mobile</th>
												      <td>10000</td>
												      <td>1</td>
												      <td>X</td>
												    </tr>
												    <tr>
												      <th scope="row">shirt</th>
												      <td>550</td>
												      <td>2</td>
												      <td>X</td>
												    </tr>
												    <tr>
												      <th scope="row">shirt</th>
												      <td>550</td>
												      <td>2</td>
												      <td>X</td>
												    </tr>
												    <tr>
												      <th class="totalRow" scope="row">total</th>
												      <td class="totalRow" >10550</td>
												      <td class="totalRow">3</td>
												      <td class="totalRow"></td>
												    </tr>
												  </tbody>
												</table>
											</div>
											<div class="row" name="prod_row5">
												<div class="col-sm-4">
											      <lable> </lable>
											    </div>
											    <div class="col-sm-8">
											    <button type="button" id="orderBycheckbox" class="btn btn-success fnt16" onclick="buyItem()" >
													<span id="checkboxText">Buy Items</span>
												</button> 
												<button type="button" id="orderBycheckbox" class="btn btn-danger fnt16" onclick="buyItem()" >
													<span id="checkboxText">Cancel</span>
												</button> 
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
		</div>
		</div>
	</div>
	<div class="clearfix"></div>
	
<!-- This code used for footer -->
<div class="container-fluid">
</div>

<script src="./resources/js/bootstrap.min.js"></script><script type="text/javascript">
function redirectToHome() {
	setTimeout(function(){
		window.location.replace("./");
	}, 100)
}
</script>
</body>
</html>