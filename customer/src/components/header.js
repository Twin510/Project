import React from "react";
import { FaCartPlus } from "react-icons/fa";


import { json, link } from "react-router-dom";

function Header(){
	function logout(){
        sessionStorage.clear()
        window.location="/"
    }
	let user = JSON.parse(sessionStorage.getItem("citizendata"));
    return(
<div>

<div class="main" id="home">

		<div class="header-bottom">
			<nav class="navbar navbar-default">
				
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
					<div class="logo">
						<h1><a class="navbar-brand" href="index.html"><span>F</span>lavorful <i class="fa fa-spoon" aria-hidden="true"></i> <p>Food...Ready to Eat</p></a></h1>
					</div>
				</div>

			
				<div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
					<nav>
						<ul class="nav navbar-nav">
							<li class="/home"><a class="scroll" href="/">Home</a></li>
							<li><a href="/aboutus" class="scroll hvr-bounce-to-bottom">About us</a></li>
							<li><a href="/menu" class="scroll hvr-bounce-to-bottom">Menu</a></li>
							<li><a href="/contactus" class="scroll hvr-bounce-to-bottom">Contact Us</a></li>
							{
								sessionStorage.getItem("citizendata")==null ?
								<>
								<li><a href="/registration" class="scroll hvr-bounce-to-bottom">Registration</a></li>
							
						    	<li><a href="/login" class="scroll hvr-bounce-to-bottom">Login</a></li>
 								</>
								:
								<>
									<li><a href="/profile" class="scroll hvr-bounce-to-bottom">{user.name}</a></li>
									<li><a href="/myrecipe" class="scroll hvr-bounce-to-bottom">My Recipe</a></li>
<li>< a class="mega-menu" title="sign out" onClick={logout}><i class="zmdi zmdi-power"></i>LOGOUT</a></li>
<li><a href="/addtocart" class="scroll hvr-bounce-to-bottom"><FaCartPlus style={{height:"20px", width:"20px"}} /></a> </li>

								</>
							}
			
							
							
						</ul>
					</nav>
				</div>
				
			</nav>
	 </div>
</div>
</div>

    )
}export default Header