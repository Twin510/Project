import React from "react";
import Axios from "axios";
import Forgotpass from "./forgotpassword";
import { useForm } from 'react-hook-form';

function Login() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	
	function sublogin(data,e){
		console.log(data)
   e.preventDefault()
		
		var pnumber=document.getElementById("pnumber").value;
		//alert(pnumber);
		var pass=document.getElementById("pass").value;
		
		
	Axios.post("http://localhost:1334/api/login",{
	Pnumber:pnumber,Password:pass

}).then((response)=>{
if(response.data.msg){
alert(response.data.msg);

window.location="/login";
}
else{
	alert("login successfully")
	let obj= {name:response.data[0]. f_name, f_email: response.data[0].
		f_email,Id:response.data[0].f_id}
		sessionStorage.setItem('citizendata',JSON.stringify(obj));
		
		window.location="/";
}
});}
	return (
		<div>
			<div class="clearfix"></div>
			<div class="col-md-6 map-grids">
				<h3>LOGIN FORM</h3>
				<div class="book-form agileits-login">
				<form onSubmit={handleSubmit(sublogin)}>

						
					<div class="span1_of_1">
							<label>PHONE NUMBER : </label>
							<div class="form-text">
								<i class="fa fa-phone" aria-hidden="true"></i>
								<input type="text" name="pnumber" placeholder="Phone no"  id="pnumber" {...register("pnumber", { required: "Phone no. is mandatory",pattern:{value:/^\d{10}$/,message:"Please enter valid Phone no."} })}  />
								<span className="error">{errors.pnumber?.message}</span>
							</div>
						</div>
						
						<div class="span1_of_1">
							<label>PASSWORD : </label>
							<div class="form-text">
								<i class="fa fa-lock" aria-hidden="true"></i>
								<input type="password" name="pass" placeholder="password"  id="pass" {...register("pass", { required: "Password is mandatory",pattern:{value:/^(?=.*[A-Z][a-z])(?=.*[!@#$%^&*])(?=.{8,})/,message:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" } })} />
								<span className="error">{errors.pass?.message}</span>
							</div>
						</div>
						<div class="signin_with mt-3">
                            <a class="link" href="/forgotpass" onClick={Forgotpass} >Forgot Password</a>
                        </div>
						<div class="clearfix"></div>
						<input type="submit" value="submit" />
						</form>
				</div>
				
				
			

		</div>
</div>




	)
}
export default Login