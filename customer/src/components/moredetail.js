import React, {useState ,useEffect} from "react";

import Axios from "axios";
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

function Moredetail(){
	const navigate = useNavigate();
	const [view1,setview1]=useState([]);
	//  const [view,setview]=useState([]);
	const location=useLocation();
	const m_id=location.state.m_id;
	const [p_mob,mobile]=useState('');
	const [sum,setmainnum]=useState();
	const [num , setnum]=useState("1");
	const [initval,orignalpriceproduct]=useState();
 	// const r_id=location.state.r_id;
	//alert(m_id);

	let usr = JSON.parse(sessionStorage.getItem('citizendata'));
	var f_id=usr?usr.Id:null;
	

	useEffect(()=>{
		Axios.post('http://localhost:1334/api/moredetail',{m_id:m_id}).then((response)=>{
	   // alert(response.data);
	   setview1(response.data);
		})
		

	// 	Axios.post('http://localhost:1334/api/plan',{r_id:r_id}).then((response)=>{

	//    setview(response.data);
	// 	})
		
	},[]);


	const handlechange=(e)=>{
		var newnum = e.target.value;
		setnum={newnum};

		const b=initval;
		const  sum=b * newnum; 
		setmainnum(Number(sum));
	}

	const mainpriceproduct=(e)=>{
	setmainnum(e.target.value)	
	}
	

	const submitpayment=(e,rid,amt,mid,pt)=>{
		//e.preventDefault();
		
		// alert(rid);
		// alert(amt);
		// alert(mid);
		if(sessionStorage.getItem('citizendata')==null){
			
			alert("Login First");
			window.location="/login"
			
		}else{

		

		{
		var merchant_order_id = Math.floor(Math.random() * 100);  	
	  var opt = {  
	  "key": "rzp_test_pprT1hILYYjDI7",
	  "amount": amt * 100, // 2000 paise = INR 20
	  "name": "Quick Recipe",
	  "description": "quick recipe",
	  "currency" : "INR", 
	  "netbanking" :true,
	  prefill: {
				 name: "Janvi",
				 email: "aminvarun3112@gmail.com",
				 contact: 9664778204,
			   },
	  notes:{
			  soolegal_order_id: merchant_order_id,
			},
			
	  "handler": function (response){
	  
	  
	  Axios.post('http://localhost:1334/api/checkout',{f_id:f_id,rid:rid,amt:amt,mid:mid,pt:pt}).then((response) => {
		
		  
			alert("SUCCESS");
			//window.location="";
		navigate("/viewdetail" , {state:{m_id:m_id}})
	  });
	  
	  
	  },
	  
	  "theme": {
	  "color": "#528FF0"
	  
	  }
	  };
	  
	  var rzp1 = new window.Razorpay(opt);
	  rzp1.open();
	  
	  
	  }
	}


	 }



    return(
        <div>

{view1.map((val) => {

 return (
	 <>

{/* <div class="services-bottom">
	 <div class="col-md-5 wthree_services_bottom_right"> 
	<img src="assets/images/back3.jpg" alt=" " class="img-responsive" width="900" height="315" /> 
	{/* <img src={"http://localhost:1334/public/"+val.rec_image } width="615" height="630" /> */}
	{/* <div class="w3_agile_services_bottom_right_grid"></div>	 */}
			
		 {/* </div>   */}
		{/* </div> */} 
		<div class="container-fluid">
<div class="row">
<div class="col-sm-6">
		 {/* <div class="col-md-7 wthree_services_bottom_left"> */}
			<div class="wthree_services_bottom_left_grid">
				<div class="col-md-12 w3_agileits_services_bottom_l_grid">
					 <div class="agile_services_bottom_l_grid1"> 
					 <img src="assets/images/back2.jpg"  width="768" height="630" /> 
					 <div class="col-md-12 w3_agileits_services_bottom_l_grid"></div>
						 {/* <img src="assets/images/d11.jpg" alt=" " class="img-responsive" />  */}
						  <div class="w3_service_bottom_grid_pos"> 
							<h3>Ready to Eat</h3>
							<br/><br/><br/><br/>
							<h1 style={{color:"#fff"}}>{val.rec_name}</h1>
						 
					</div> 
				</div> 
				</div>
				 {/* <div class="col-md-12 w3_agileits_services_bottom_r_grid">
					
					
				</div> */}
				<div class="clearfix"> </div>
				
				</div>
				{/* </div> */}
			
			</div>
			
			
<div class="col-sm-6">
			<div class="wthree_services_bottom_left_grid">
				 <div class="col-md-12 w3_agileits_services_bottom_l_grid">
					<div class="agile_services_bottom_l_grid1">
					<img src="assets/images/back3.jpg"  width="767" height="630" />
					<div class="col-md-12 w3_agileits_services_bottom_l_grid"></div>
						<div class="w3_service_bottom_grid_pos">
						<h3>Subscription Price</h3>
						<h3>{val.w_price}/-
					
						<button class="btn btn-raised btn-primary waves-effect" onClick={(e)=>submitpayment(e,val.r_id,val.w_price,val.m_id,"w")}>Weekly Price</button></h3>
								<h3>{val. m_price}/-<button class="btn btn-raised btn-primary waves-effect" onClick={(e)=>submitpayment(e,val.r_id,val.m_price,val.m_id,"m")}>Monthly Price</button></h3>
								<h3>{val. y_price}/-<button class="btn btn-raised btn-primary waves-effect" onClick={(e)=>submitpayment(e,val.r_id,val.y_price,val.m_id,"y")}>yearly Price</button></h3>
								
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
				</div>
				
				</div>
			</div>
		</div> 

				








					






		
		<div class="clearfix"> </div>
	
	
	</>)
}
)}
    </div>
)
}export default Moredetail