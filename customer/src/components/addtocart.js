import React, {useState} from "react";
import Axios from "axios";
import { useEffect } from "react";  
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
function Addtocart(){  
    const [view1,setview1]=useState([]);
    const [modalID,setModalID]=useState(null);
    let user = JSON.parse(sessionStorage.getItem("citizendata"));
    const uid= user?user.Id:null

        useEffect(()=>{
        Axios.get('http://localhost:1334/api/getcartitem',{params:{uid:uid}}).then((response)=>{
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
       
        Axios.post("http://localhost:1334/api/delcartitems",{
            mid:id
        
        }).then((response)=>{
        
        alert(response.data.msg);
       window.location="/addtocart";
        
        });
            
           
        }
      return(
<>
    <section class="content">
    <div class="body_scroll">
        <div class="block-header">
            <div style={{marginRight:-750}} class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2 style={{textAlign:"center"}}>Cart Items</h2>
                    
                    
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
                                            <th style={{textAlign:"center"}}>Image</th>
                                             <th data-breakpoints="xs" style={{textAlign:"center"}}>Action</th> 
                                             
                                             
                                            
                                            
                                        </tr>
                                    </thead>
                                        <tbody>
                                        {view1.map((val)=>{                                                                                                                              
                                        
                                        return(
                                                                              
                                        <tr>
                                            <td>{val.rec_name}</td>
                                         <td>  <img src={"http://localhost:1334/public/"+val.rec_image } style={{height:"120px" ,width:"120px"}}  /></td>
                                            
                                            <td>
                                            
                                            <button class="btn btn-danger btn-sm" data-target="#exampleModal" data-toggle="modal"  onClick={(e)=>delprod(val.cart_id)}><RiDeleteBin2Fill  style={{}}/>
</button>
                                            </td>
                                                                                                          
                                            
                                           
                                            
                                        </tr>
                                         ) })
                                        }
                                        
                                    </tbody>
                                </table>
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <h1> Are You sure want To DELETE</h1>
                       
                            <h1>{modalID}</h1>
                               <button type="button " onClick={(e)=> delprod(modalID)} style={{width:"60px",height:"40px",backgroundColor:"royalblue",color:"white" }} >Yes</button>
                               &nbsp;&nbsp;&nbsp;
                               &nbsp;
                               <button type="button " data-dismiss="modal"style={{width:"60px",height:"40px",backgroundColor:"red",color:"white" }}>NO</button>
                         
                        </div>

                    </div>
                </div>
            </div> 
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
}export default Addtocart