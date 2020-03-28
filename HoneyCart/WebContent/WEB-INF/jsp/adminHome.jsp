<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859- 1">
<title>Admin Home Page</title>
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
<script type="text/javascript" src="./resources/js/adminHome.js"></script>
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
						<div class="col-md-3">
							<button type="button" id="addbtn" class="btn btn-success fnt16" onclick="showAddProductDiv()" >
								<span id="checkboxText">Add Product</span>
							</button>
							<button type="button" id="showbtn" class="btn btn-success fnt16" onclick="showProducTabletDiv()" >
								<span id="checkboxText">Show Product</span>
							</button> 
						</div>
						<div class="col-md-2" > 
							<select class="form-control"  value="Electronics" onchange="setCurrunDopDownValue(this.value)"
														id="categoryFilterDiv" style="display: none;">
														<option id="0" value="0"  disabled >---Select Category---</option>
														<option id="Electronics" value="101" selected>Electronics</option>
														<option id="Furniture" value="102"  >Furniture</option>
														<option id="Fashion" value="103" >Fashion</option>
														<option id="Sports" value="104" >Sports</option>
														<option id="beauty " value="105" >beauty </option>
													</select>
						</div> 
						<div class="col-md-3">
							<h3><label><b>Admin Home Page</b></label></h3>
						</div>
						<div class="col-md-3">
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
							<div id="productListMsg" class="Msg" style="display: none;"><br>
								</div>
								<div id="productListDiv" class="docketList" style="display: none;">
									<div class="row marginAuto">
										<div class="col-md-6 ">
										<div class="row" name="msg_row1">
											<h5><b>Showing product list......</b></h5>
										</div>
										<div class="row" name="prod_table">
										<table class="table table-bordered" id="prod_TableData" >
										  <thead>
										    <tr>
										      <th scope="col">#Id</th>
										      <th scope="col">Product Name</th>
										      <th scope="col">Price</th>
										      <th scope="col">Quantity</th>
										      <th scope="col">Category</th>
										    </tr>
										  </thead>
										  <tbody>
										    <tr>
										      <th scope="row">1</th>
										      <td>Mark</td>
										      <td>Otto</td>
										      <td>@mdo</td>
										      <td>Otto</td>
										    </tr>
										    <tr>
										      <th scope="row">2</th>
										      <td>Jacob</td>
										      <td>Thornton</td>
										      <td>@fat</td>
										      <td>Otto</td>
										    </tr>
										    <tr>
										      <th scope="row">3</th>
										      <td>Jacob</td>
										      <td>Thornton</td>
										      <td>@fat</td>
										      <td>Otto</td>
										    </tr>
										    <tr>
										      <th scope="row">4</th>
										      <td>Jacob</td>
										      <td>Thornton</td>
										      <td>@fat</td>
										      <td>Otto</td>
										    </tr>
										  </tbody>
										</table>
										</div>
									</div>
										<div class="col-md-6 ">
										</div>
									</div>
								</div>
								
							</div>
							<div class="col-sm-12  border_rounded">
								<div id="addProductMsg" class="Msg" style="display: none;"><br>
								</div>
								<div id="addNewProductDiv" class="docketList " style="display: none;">
									<div class="row marginAuto">
										<div class="col-md-6 border_rounded">
											<div class="row" name="msg_row1">
												<h5><b>Please Provide product details</b></h5>
											</div>
											<div class="row" name="prod_row1">
												<div class="col-sm-4">
											      <lable class="form-control">Product Category:</lable>
											    </div>
											    <div class="col-sm-8">
													<select class="form-control " id="categoryValue" value="Electronics" >
														<option id="0" value="0"  disabled >-----Select Product Category-----</option>
														<option id="Electronics" value="101" selected>Electronics</option>
														<option id="Furniture" value="102"  >Furniture</option>
														<option id="Fashion" value="103" >Fashion</option>
														<option id="Sports" value="104" >Sports</option>
														<option id="beauty " value="105" >beauty </option>
													</select>
											    </div>
											</div>
											<div class="row" name="prod_row2">
												<div class="col-sm-4">
											      <lable class="form-control">Product Name:</lable>
											    </div>
											    <div class="col-sm-8">
											      <input type="text"  class="form-control" id="productName" placeholder="Mobile">
											    </div>
											</div>
											<div class="row" name="prod_row3">
												<div class="col-sm-4">
											      <lable class="form-control" >Product Price:</lable>
											    </div>
											    <div class="col-sm-8">
											      <input type="text"  class="form-control" id="productPrice" placeholder="1,0000">
											    </div>
											</div>
											<div class="row" name="prod_row4">
												<div class="col-sm-4">
											      <lable class="form-control" >Product Quantity:</lable>
											    </div>
											    <div class="col-sm-8">
											      <input type="text"  class="form-control" id="productQuantity" placeholder="10">
											    </div>
											</div>
											<div class="row" name="prod_row5">
												<div class="col-sm-4">
											      <lable> </lable>
											    </div>
											    <div class="col-sm-8">
											    <button type="button" id="orderBycheckbox" class="btn btn-success fnt16" onclick="addNewProduct(this.value)" value="addButton">
													<span id="checkboxText">Add Product</span>
												</button> 
												<button type="button" id="orderBycheckbox" class="btn btn-danger fnt16" onclick="cancelAddProduct()" >
													<span id="checkboxText">cancel</span>
												</button> 
											    </div>
											</div>
										</div>
										<div class="col-md-6">
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