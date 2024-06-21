import React from "react";
import Axios from "axios";
import { useForm } from 'react-hook-form';

function Contactus(){
	const { register, handleSubmit, formState: { errors } } = useForm();

	function subcontact(data,e){
		console.log(data)
   e.preventDefault()

		var uname=document.getElementById("uname").value;
		alert(uname);
		var email=document.getElementById("email").value;
		
		var pnumber=document.getElementById("pnumber").value;
		alert(pnumber);
		var address=document.getElementById("address").value;
		alert(address);
		var date=document.getElementById("date").value;
		alert(date);
		
	Axios.post("http://localhost:1334/api/contactus",{
	username:uname,Email:email,Pnumber:pnumber,Address:address,Date:date

}).then((response)=>{

alert(response.data.msg);
window.location="/";

});}
    return(
<div>
<div class="contact-main-agile-info jarallax" id="contact">
        <div class="container">
		  <h3 class="w3_heade_tittle_agile">Contact Us</h3>
		<p class="sub_t_agileits">Get In Touch...</p>

		  <div class="contact-top-agileits">
               <div class="col-md-4 contact-grid ">
					<div class="contact-grid1 agileits-w3layouts">
						<i class="fa fa-location-arrow"></i>
						<div class="con-w3l-info">
						   <h4>Address </h4>
						  <p>12K Street<span>New York City.</span></p>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="col-md-4 contact-grid">
					<div class="contact-grid2 w3">
						<i class="fa fa-phone" aria-hidden="true"></i>
						<div class="con-w3l-info">
						  <h4>Call Us</h4>
						   <p>+1234 567 890<span>+1234 567 890</span></p>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="col-md-4 contact-grid">
					<div class="contact-grid3 w3l">
						<i class="fa fa-envelope"></i>
						<div class="con-w3l-info">
						  <h4>Email</h4>
						  <a href="mailto:info@example.com">info@example1.com</a>
						 
						  </div>
						  <div class="clearfix"></div>
					</div>
				</div>
				<div class="clearfix"></div>
				
			</div>
			<div class="clearfix"></div>
			<div class="col-md-6 map-grids">
					    <h3>Get In Touch With Us</h3>
						<div class="book-form agileits-login">
						<form onSubmit={handleSubmit(subcontact)}>
								<div class="phone_email">
									<label>FULL NAME : </label>
									<div class="form-text">
										<i class="fa fa-user" aria-hidden="true"></i>
										<input type="text" name="Name" placeholder="Name" required id="uname"/>
									</div> 
								</div>
								<div class="phone_email phone_email1">
									<label>EMAIL : </label>
									<div class="form-text">
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
										<input type="email" name="email" placeholder="Email" required id="email" {...register("email", { required: "Email is mandatory",pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"Please enter valid Email"} })}/>
										<span className="error">{errors.email?.message}</span>
									</div>
								</div>
								<div class="phone_email">
									<label>PHONE NUMBER : </label>
									<div class="form-text">
										<i class="fa fa-phone" aria-hidden="true"></i>
										<input type="text" name="pnumber" placeholder="Phone no" required id="pnumber" {...register("pnumber", { required: "Phone no. is mandatory",pattern:{value:/^\d{10}$/,message:"Please enter valid Phone no."} })}/>
										<span className="error">{errors.pnumber?.message}</span>
									</div> 
								</div> 
								<div class="phone_email phone_email1">
									<label>ADDRESS : </label>
									<div class="form-text">
										<i class="fa fa-map-marker" aria-hidden="true"></i>
										<input type="text" name="address" placeholder="Your Address" required id="address"/>
									</div> 
								</div> 
								<div class="clearfix"></div>
								<div class="agileits_reservation_grid">
									<div class="span1_of_1">
										<label>DATE : </label> 
										<div class="book_date"> 
											<i class="fa fa-calendar" aria-hidden="true"></i>
												<input  id="date" name="Text" type="date"  required/>

										</div>					
									</div>
									
									 
									<div class="clearfix"></div>
								</div> 
												
													
								<input type="submit" value="Submit"/>
							</form>
						</div>
					
				</div>
				<div class="col-md-6 map_agile">
				
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387145.86654334463!2d-74.25818682528057!3d40.70531100753592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1497241987900"  allowfullscreen></iframe>

				</div>
				<div class="clearfix"></div>
		  </div>
</div>
</div>
)
}export default Contactus