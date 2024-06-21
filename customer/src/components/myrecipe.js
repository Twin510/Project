import React, {useState} from "react";
import Axios from "axios";
import { useEffect } from "react";  
import axios from "axios";
import { Link } from "react-router-dom";
function Myrecipe(){  
    const [view1,setview1]=useState([]);
    const [modalID,setModalID]=useState(null);
    let user = JSON.parse(sessionStorage.getItem("citizendata"));
    const uid= user?user.Id:null

        useEffect(()=>{
        Axios.get('http://localhost:1334/api/getusrrecipe',{params:{uid:uid}},).then((response)=>{
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
            <div style={{marginRight:-750}} class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2 style={{textAlign:"center"}}> My Recipe</h2>
                    
                    
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
                                        
                                            <th style={{textAlign:"center"}}>Recipe Name</th>
                                             <th data-breakpoints="xs" style={{textAlign:"center"}}>Action</th> 
                                             
                                             <th style={{textAlign:"center"}}>Current Date</th>
                                             <th style={{textAlign:"center"}}>Expiration Date</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                        <tbody>
                                       {view1.map((val)=>{ 

                                           if(val.pt=='w'){
var curr_date = new Date(val.p_date);
curr_date.setDate(curr_date.getDate() + 7);
var dateMDY = `${curr_date.getDate()}-${curr_date.getMonth() + 1}-${curr_date.getFullYear()}`;
                                            
                                           }
                                           if(val.pt=='m'){
                                            var curr_date = new Date(val.p_date);
                                            curr_date.setDate(curr_date.getDate() + 30);
                                            var dateMDY = `${curr_date.getDate()}-${curr_date.getMonth() + 1}-${curr_date.getFullYear()}`;
                                                                                        
                                                                                       }
                                                                                       if(val.pt=='y'){
                                                                                        var curr_date = new Date(val.p_date);
                                                                                        curr_date.setDate(curr_date.getDate() + 365);
                                                                                        var dateMDY = `${curr_date.getDate()}-${curr_date.getMonth() + 1}-${curr_date.getFullYear()}`;
                                                                                                                                    
                                                                                                                                   }

                                                                                                                                   const isoDate = new Date(val.p_date);
                                                                                                                                   const day = isoDate.getDate().toString().padStart(2);
                                                                                                                                   const month = (isoDate.getMonth() + 1).toString().padStart(2, );
                                                                                                                                   const year = isoDate.getFullYear().toString().slice(); // Extract the last two digits of the year
                                                                                                                                   const formattedDate = `${day}-${month}-${year}`;
                                                                                                                                                                                                                               
                                        
                                        return(
                                                                              
                                        <tr>
                                            <td>{val.rec_name}</td>
                                                                                                          
                                            <td>  
                                                
                                             <Link to='/viewdetail' state={{m_id:val.m_id}} >View more details</Link> 
                                            
                                            
                                            </td>
                                           
                                            <td>    {formattedDate}   </td>
                                            <td>
                                                {
                                                    
                                                }
                                                
                                                
                                                {dateMDY}</td>
                                            
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
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <h1> Are  You sure want To DELETE</h1>
                       
                            <h1>{modalID}</h1>
                               <button type="button " onClick={(e)=> delprod(modalID)} style={{width:"60px",height:"40px",backgroundColor:"royalblue",color:"white" }} >Yes</button>
                               &nbsp;&nbsp;&nbsp;
                               &nbsp;
                               <button type="button " data-dismiss="modal"style={{width:"60px",height:"40px",backgroundColor:"red",color:"white" }}>NO</button>
                         
                        </div>

                    </div>
                </div>
            </div>
</>
)
}export default Myrecipe