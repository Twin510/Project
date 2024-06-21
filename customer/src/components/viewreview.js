import React, {useState} from "react";
import Axios from "axios";
import { useEffect } from "react"; 
import {useLocation} from 'react-router-dom'; 

function Viewreview(){  
    const [view1,setview1]=useState([]);
    const [modalID,setModalID]=useState(null);
    const location=useLocation();
	const m_id=location.state.m_id;
  
    let user = JSON.parse(sessionStorage.getItem("citizendata"));
    let f_id = user?user.Id:null
    // alert(m_id);


        useEffect(()=>{
          
        Axios.get('http://localhost:1334/api/getreview',{params:{mm_id:m_id,f_id:f_id}}).then((response)=>{
       // alert(response.data);
        setview1(response.data);
        })
        
    },[]);
    
        
   

  function delid(id){
   // e.preventDefault();
  alert(id);
  setModalID(id);
  }
        

      function delprod (id){
       
        Axios.post("http://localhost:1334/api/delcat",{
            mid:id
        
        }).then((response)=>{
        
        alert(response.data.msg);
       window.location="/";
        
        });
            
           
        }
      return(
<>
    <section class="content">
    <div class="body_scroll">
        <div class="block-header">
            <div  class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2 style={{textAlign:"center"}}>View Review</h2>
                    
                    
                </div>
               
            </div>
        </div>

        <div class="container-fluid">
            
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-striped m-b-0">
                                    <thead>
                                        <tr>
                                            <th style={{textAlign:"center"}}>Name</th>
                                            <th style={{textAlign:"center"}}>Recipe Name</th>
                                             <th style={{textAlign:"center"}} data-breakpoints="xs">Feedback</th> 
                                            
                                            
                                        </tr>
                                    </thead>
                                        <tbody>
                                       {view1.map((val)=>{ return(
                                       
                                        <tr>
                                            <td>{val.f_name}</td>
                                            <td>{val.rec_name}</td>
                                            <td>{val.feed_description}</td>                                                                                                                      
                                            
                                        </tr>
                                        ) })

                                       }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</>
)
}export default Viewreview