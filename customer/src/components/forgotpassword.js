import React from "react";
import Axios from "axios";
function Forgotpass(){
    function subfpass(){
		
		var ename=document.getElementById("ename").value;
		//alert(ename);
		
		
		
	Axios.post("http://localhost:1334/api/forgotuserlogin",{
	Ename:ename

}).then((response)=>{
if(response.data.msg){
alert(response.data.msg);

window.location="/";
}
else{
	//alert("login successfully")
	let obj= {name:response.data[0]. f_email,Id:response.data[0].f_id}
		sessionStorage.setItem('adminfdata',JSON.stringify(obj));
		
		window.location="/";
}
});}
    
    
    return(

        <>
       <div>
			<div class="clearfix"></div>
			<div class="col-md-6 map-grids">
				<h3>Forgot Password</h3>
				<div class="book-form agileits-login">
				<form onSubmit={subfpass}>

						
					<div class="span1_of_1">
							<label>EMAIL: </label>
							<div class="form-text">
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
								<input type="text" name="ename" placeholder="Email"  id="ename"/>
								
							</div>
						</div>
						
						
						<div class="clearfix"></div>
						<input type="submit" value="submit" />
						</form>
				</div>
				
				
			

		</div>
</div>
        </>
        );

    }
    
    export default Forgotpass;
    