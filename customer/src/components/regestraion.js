import React from "react";
import Axios from "axios";
import { useForm } from 'react-hook-form';

function Registration(){
	const { register, handleSubmit, formState: { errors } } = useForm();

function subuserdata(data,e){
	console.log(data)
   e.preventDefault()

var uname=document.getElementById("uname").value;
alert(uname);
var ename=document.getElementById("ename").value;
//alert(ename);
var pnumber=document.getElementById("pnumber").value;
//alert(pnumber);
var address=document.getElementById("address").value;
//alert(address);
var dob=document.getElementById("date").value;
//alert(dob);
var password=document.getElementById("password").value;
alert(password);
Axios.post("http://localhost:1334/api/registration",{
	username:uname,Ename:ename,Pnumber:pnumber,Address:address,Dob:dob,upassword:password

}).then((response)=>{

alert(response.data.msg);
window.location="/";

});

}

    return(
<div>
<div class="clearfix"></div>
			<div class="col-md-6 map-grids">
					    <h3>REGISTRATION FORM</h3>
						<div class="book-form agileits-login">
							<form onSubmit={handleSubmit(subuserdata)}>
								<div class="phone_email">
									<label>FULL NAME : </label>
									<div class="form-text">
										<i class="fa fa-user" aria-hidden="true"></i>
										<input type="text" name="Name" placeholder="Name" required id="uname" />
									</div> 
								</div>
								<div class="phone_email phone_email1">
									<label>EMAIL : </label>
									<div class="form-text">
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
										<input type="email" name="ename" placeholder="Email" required id="ename" {...register("ename", { required: "Email is mandatory",pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"Please enter valid Email"} })}/>
										<span className="error">{errors.ename?.message}</span>
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
										<input type="text" name="address" placeholder="Your Address" required id="address" {...register("address", { required: "Address is mandatory",pattern:{value:/^[a-zA-Z0-9\s\,\''\-]*$/,message:"Please enter valid Address"} })}/>
										<span className="error">{errors.address?.message}</span>
									</div> 
								</div> 
								
									<div class="clearfix"></div>
								<div class="agileits_reservation_grid">
									<div class="span1_of_1">
										<label>DATE OF BIRTH </label> 
										<div class="book_date"> 
											<i class="fa fa-calendar" aria-hidden="true"></i>
												<input  id="date" name="date" type="date" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required/>

										</div>					
									</div>
									<div class="span1_of_1">
									<label>PASSWORD : </label>
									<div class="form-text">
										<i class="fa fa-lock" aria-hidden="true"></i>
										<input type="password" name="password" placeholder="password" required id="password" {...register("password", { required: "Password is mandatory",pattern:{value:/^(?=.*[A-Z][a-z])(?=.*[!@#$%^&*])(?=.{8,})/,message:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"} })}/>
										<span className="error">{errors.password?.message}</span>
									</div>
								</div>
									<div class="clearfix"></div>
								</div> 
												
											
												<div class="clearfix"> </div>
											
								<input type="submit" value="Submit"/>
							</form>
						</div>
					
				</div>
</div>
)
}export default Registration