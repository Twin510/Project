import React from "react";
import Axios from "axios";
import {useLocation} from 'react-router-dom';

function Feedback() {
	const location=useLocation();
	const m_id=location.state.m_id;
		let user = JSON.parse(sessionStorage.getItem("citizendata"));
  let f_id = user?user.Id:null
  let f_name = user?user.name:null
  let f_email = user?user.f_email:null

	
	function subfeedback(){
		
		var f_name=document.getElementById("f_name").value;
		//alert(uname);
		var f_email=document.getElementById("f_email").value;
		// alert(ename);
		var feedback=document.getElementById("feedback").value;
		alert(feedback);
		
		
	Axios.post("http://localhost:1334/api/feedback",{f_name:f_name,f_email:f_email,feedback:feedback,m_id:m_id,f_id:f_id}).then((response)=>{
		alert("Feedback Added Successfully")
	window.location="/myrecipe";
		 
		// username:uname,Ename:ename,
		

}).then((response)=>{
if(response.data.msg){
alert(response.data.msg);

window.location="/";
}


});}
	return (
		<div>
			<div class="clearfix"></div>
			<div class="col-md-6 map-grids">
				<h3>FEEDBACK FORM</h3>
				<div class="book-form agileits-login">
				<form onSubmit={subfeedback}>

				<div class="phone_email">
									<label>FULL NAME : </label>
									<div class="form-text">
										<i class="fa fa-user" aria-hidden="true"></i>
										<input type="text" name="Name" placeholder="Name" required id="f_name"/>
									</div> 
								</div>
								<div class="phone_email phone_email1">
									<label>EMAIL : </label>
									<div class="form-text">
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
										<input type="email" name="email" placeholder="Email" required id="f_email"/>
									</div>
								</div>	 
					<div class="span1_of_1">
							<label>FEEDBACK : </label>
							<div class="form-text">
								<i class="fa fa-comments-o" aria-hidden="true"></i>
								 <input type="text" name="Feedback" placeholder="Write a message" required id="feedback" /> 
                                {/* <textarea name="Feedback" cols="85" rows="4" placeholder="Write a message"  required id="feedback"></textarea> */}
							</div>
						</div>
						
						
						<div class="clearfix"></div>
						<input type="submit" value="submit" />
						</form>
				</div>
				
				
			

		</div>
</div>




	)
}
export default Feedback