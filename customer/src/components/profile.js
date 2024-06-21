import Axios from "axios";

import { useEffect, useState } from "react";

function Profile(){
    const [view1,setview1]=useState([]);
    let user = JSON.parse(sessionStorage.getItem("citizendata"));
    const f_id=user.Id;

        useEffect(()=>{
            Axios.get('http://localhost:1334/api/profile',{params:{f_id:f_id}},).then((response)=>{
           // alert(response.data);
          console.log(response.data)
            setview1(response.data);
            })
            
        },[]);

        const[currentpass ,currentpassword]=useState();
        const[newpass ,newpassword]=useState();
        const[newconfirmpass ,confirmnewpassword]=useState();
        const submitprofile=(e)=>{
e.preventDefault()
            if (newpass !== currentpass && newconfirmpass !== newpass) {

alert("please check password")
}else{
  
    Axios.post('http://localhost:1334/api/changepw',{f_id:f_id,currentpass:currentpass,newpass:newpass}).then((response)=>{
        if(response.data.msg){
          alert(response.data.msg)
          window.location.reload()
        }
        else{
            alert("password updated successfully")
        }
    });
   
}


           
            }
        

		
		
	


    return(
<div>
<div class="contact-main-agile-info jarallax" id="contact">
{view1.map((val)=>{ 
    return(
        <>
      
        <div class="container">
        <h3 class="w3_heade_tittle_agile">MY PROFILE</h3>
		<p class="sub_t_agileits">Explore Now...</p>

        
			<div class="clearfix"></div>
			<div class="col-md-6 map-grids">
					    
						<div class="book-form agileits-login">
						
								<div class="phone_email">
									<label>FULL NAME : </label>
									<div class="form-text">
										<i class="fa fa-user" aria-hidden="true"></i>
										<input type="text" name="Name" value={val.f_name} placeholder="Name" required id="uname"/>
									</div> 
								</div>
								<div class="phone_email phone_email1">
									<label>EMAIL : </label>
									<div class="form-text">
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
										<input type="email" name="email" value={val.f_email} placeholder="Email" required id="email"/>
									</div>
								</div>
								<div class="phone_email">
									<label>PHONE NUMBER : </label>
									<div class="form-text">
										<i class="fa fa-phone" aria-hidden="true"></i>
										<input type="text" name="Phone no" value={val.f_phone} placeholder="Phone no" required id="pnumber"/>
									</div> 
								</div> 
								<div class="phone_email phone_email1">
									<label>ADDRESS : </label>
									<div class="form-text">
										<i class="fa fa-map-marker" aria-hidden="true"></i>
										<input type="text" name="address" value={val.f_address} placeholder="Your Address" required id="address"/>
									</div> 
								</div> 
                                
								<div class="clearfix"></div>
								<div class="agileits_reservation_grid">
									<div class="span1_of_1">
										<label>DATE : </label> 
										<div class="book_date"> 
											<i class="fa fa-calendar" aria-hidden="true"></i>
												<input  id="date" name="Text" value={val.f_dob} type="date"  required/>

										</div>					
									</div>
									
									 
									<div class="clearfix"></div>
								</div> 
												
							
						</div>
					
				</div>
                <div class="col-md-6 map-grids">
					    
						<div class="book-form agileits-login">
						<form onSubmit={submitprofile}>
                        <div class="span1_of_1">
							<label>CURRENT PASSWORD : </label>
							<div class="form-text">
								<i class="fa fa-lock" aria-hidden="true"></i>
								<input type="password"   onChange={(e)=>currentpassword(e.target.value)} name="pass" placeholder="password" required id="currentpass" />
							</div>
						</div>
                        <div class="span1_of_1">
							<label>NEW PASSWORD : </label>
							<div class="form-text">
								<i class="fa fa-lock" aria-hidden="true"></i>
								<input type="password"   onChange={(e)=>newpassword(e.target.value)} name="pass" placeholder="password" required id="newpass" />
							</div>
						</div>
                        <div class="span1_of_1">
							<label> CONFIRM NEW PASSWORD : </label>
							<div class="form-text">
								<i class="fa fa-lock" aria-hidden="true"></i>
								<input type="password" name="pass"  onChange={(e)=>confirmnewpassword(e.target.value)} placeholder="password" required id="newconfirmpass" />
							</div>
						</div>
												
													
								<input type="submit" value="Submit"/>
							</form>
						</div>
					
				</div>
				
				<div class="clearfix"></div>
		  </div>
          </>
    )
          })

        }
</div>
</div>
)
}export default Profile