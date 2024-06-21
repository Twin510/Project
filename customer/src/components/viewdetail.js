import React, {useState ,useEffect} from "react";

import Axios from "axios";
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";

function Viewdetail(){
	const [view1,setview1]=useState([]);
	//  const [view,setview]=useState([]);
	const location=useLocation();
	const m_id=location.state.m_id;
	// const r_id=location.state.r_id;
	//alert(m_id);


	useEffect(()=>{
		Axios.post('http://localhost:1334/api/viewdetail',{m_id:m_id}).then((response)=>{
	   // alert(response.data);
	   setview1(response.data);
		})
		

	// 	Axios.post('http://localhost:1334/api/plan',{r_id:r_id}).then((response)=>{

	//    setview(response.data);
	// 	})
		
	},[]);
	


    return(
        <div>

{view1.map((val) => {

 return (
	 <>


	 
<div class="container-fluid">
<div class="row">
<div class="col-sm-5">
<div class="services-bottom">
	<div class="col-md-5 wthree_services_bottom_right">
	<img src={"http://localhost:1334/public/"+val.rec_image } width="615" height="630" />
	{/* <div class="w3_agile_services_bottom_right_grid"></div>	 */}
			
		</div> 
		</div>
		</div>
		




  <div class="col-sm-7">

  <div class="row">
<div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title navbar-brand"><span>R</span>ecipe Name:</h5>
        <p class="card-text navbar-brand">{val.rec_name}</p>
    
      </div>
    </div>
  </div>
  


  
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        
        <Link to='/feedback'class="btn btn-raised btn-primary waves-effect" state={{m_id:val.m_id}} >Feedback</Link>
      </div>
    </div>
  </div>
  
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        
        <Link to='/Viewreview'class="btn btn-raised btn-primary waves-effect" state={{m_id:val.m_id}} >View Review</Link>
      </div>
    </div>
  
  </div>
  </div>












  <div class="row">
  <div class="col-sm-12">
    <div class="card" style={{height:"350px"}}>
      <div class="card-body">
        <h5 class="card-title navbar-brand"><span>I</span>ngredients:</h5>
        <p class="card-title navbar-brand" >{val.rec_ingredients}</p>
		</div>
    </div>
  </div>
  </div>
  
  <div class="row">
  <div class="col-sm-12">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title navbar-brand"><span>D</span>escription:</h5>
        <p class="card-title navbar-brand" >{val.rec_description}</p>
       
      </div>
    </div>
  </div>
  </div>
  

</div>

</div>

		
		<div class="clearfix"> </div>
	</div>
	
	</>)
}
)}
    </div>
)
}export default Viewdetail