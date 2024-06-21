var mysql=require("mysql");
var express=require("express");
var body_parser=require("body-parser");
var cors=require("cors");
var app=express();
const multer=require('multer');
const path=require('path');
const { request } = require("http");
const nodemailer  = require("nodemailer");




app.use(cors());
app.use("/public",express.static("public"));

app.use(express.json());
app.listen("1334");
//const axios=require('axios');
app.use(body_parser.urlencoded({extended:true}));
const con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"quick_recipe"
})

con.connect(function(err){
    if(err)
    throw err;
    console.log("connected")
});

const storage=multer.diskStorage({
    destination:path.join(__dirname,'./public/'),
    filename:function(request,file,callback){

        callback(null,Date.now()+ '-'+ path.extname(file.originalname))
    }
})





app.post("/api/registration",(req,res)=>{
   // console.log("i m here");

var username=req.body.username;
console.log(username)
var Ename=req.body.Ename;
console.log(Ename)
var Pnumber=req.body.Pnumber;
var Address=req.body.Address;
var Dob=req.body.Dob;
var pass=req.body.upassword;
console.log(pass);
//console.log("my name is ",username);
const query="insert into reg_foodies (f_phone ,f_email, f_password , f_dob, f_address, f_name) values(?,?,?,?,?,?)";
con.query(query,[Pnumber,Ename,pass,Dob,Address,username]);
res.send({msg:"Registration Sucessfully"});
});




app.post("/api/contactus",(req,res)=>{
    // console.log("i m here");
 
 var username=req.body.username;
 console.log(username)
 var Email=req.body.Email;
 console.log(Email)
 var Pnumber=req.body.Pnumber;

 var Address=req.body.Address;
 var Date=req.body.Date;
 
 //console.log("my name is ",username);
 const query="insert into contact_us (f_phone ,f_email , f_dob, f_address, f_name) values(?,?,?,?,?)";
 con.query(query,[Pnumber,Email,Date,Address,username]);
 res.send({msg:"Thank You"});
});

app.post("/api/login",(req,res)=>{
    // console.log("i m here");
 
 
 var Pnumber=req.body.Pnumber;

 var Password=req.body.Password;
 
 //console.log("my name is ",username);
 const sel=" select * from reg_foodies where f_phone =? and f_password=?";

 con.query(sel,[Pnumber,Password],(err , result)=>{
    if(result.length>0){
        console.log(result)
        res.send(result)
    }
    else{
        res.send({msg:"id password not matched"})
    }
 });

});


app.post("/api/addrecipe",(req,res)=>{
    // console.log("i m here");
 let upload=multer({storage:storage}).single('Rimage');
 upload(req,res,function(err)
 {
 var Rname=req.body.Rname;
 //console.log(Rname)
 var Cname=req.body.Cname;
 var Rprice=req.body.Rprice;
 //console.log(Rprice)
 var Rimage=req.file.filename;
 var Rdescription=req.body.Rdescription;
 var Ringredients=req.body.Ringredients;
 var Wprice=req.body.Wprice;
 var Mprice=req.body.Mprice;
 var Yprice=req.body.Yprice;
 
 //console.log("my name is ",username);
 const query="insert into manage_recipe (rec_name ,choose_category,rec_price, rec_ingredients , rec_description  , rec_image) values(?,?,?,?,?,?)";
 con.query(query,[Rname,Cname, Rprice,Ringredients,Rdescription,Rimage] , (err , result) =>{
if(err){
    console.log(err)
}
 let dataId= result.insertId;
 console.log(dataId)
 const ins = "insert into rec_plan(m_id,w_price , m_price , y_price ) values(?,?,?,?)";
 con.query(ins,[dataId,Wprice,Mprice,Yprice])

 res.send({msg:"Recipe Added Successfully"});
 
});
 


 });
 });




app.get("/api/getrecipe",(req,res)=>{

const query="select * from manage_recipe inner join rec_plan on manage_recipe.m_id=rec_plan.m_id;";

con.query(query,(err,result)=>{
console.log(result);
    res.send(result);
}
)

 }
 );


 app.post("/api/delrec",(req,res)=>{
    // console.log("i m here");
 
 var mid=req.body.mid;
 console.log(mid);

 const query="delete  from manage_recipe where m_id=?";
 con.query(query,[mid]);
 res.send({msg:"Recipe Deleted Successfully"});
}
);

 
app.post("/api/addcategory",(req,res)=>{
    // console.log("i m here");
 
 var Cname=req.body.Cname;
 console.log(Cname)

 const query="insert into manage_category (cat_name) values(?)";
 con.query(query,[Cname]);
 res.send({msg:"Add category successufully"});
 });


 app.get("/api/getcategory",(req,res)=>{

    const query="select * from manage_category ";
    
    con.query(query,(err,result)=>{
    console.log(result);
        res.send(result);
    }
    )
    
     }
     );
    
    
     app.post("/api/delcat",(req,res)=>{
        // console.log("i m here");
     
     var mid=req.body.mid;
     console.log(mid);
    
     const query="delete  from manage_category where cat_id=?";
     con.query(query,[mid]);
     res.send({msg:"Category Deleted Successfully"});
    }
    );



    
    app.post("/api/adminlogin",(req,res)=>{
        // console.log("i m here"); 
     var Ename=req.body.Ename
    
     var Pname=req.body.Pname;
     
     //console.log("my name is ",username);
     const sel=" select * from admin_login where a_email =? and a_password=?";
    
     con.query(sel,[Ename,Pname],(err , result)=>{
        if(result.length>0){
            console.log(result)
            res.send(result)
        }
        else{
            res.send({msg:"id password not matched"})
        }
     });
    
    });




    app.get("/api/getuserdata",(req,res)=>{

        const query="select * from reg_foodies";
        
        con.query(query,(err,result)=>{
        console.log(result);
            res.send(result);
        }
        )
        
         }
         );
        
        
         app.post("/api/deluser",(req,res)=>{
            // console.log("i m here");
         
         var mid=req.body.mid;
         console.log(mid);
        
         const query="delete  from reg_foodies where f_id=?";
         con.query(query,[mid]);
         res.send({msg:"User Deleted Successfully"});
        }
        );




     app.get("/api/getmenu",(request,response)=>{
    const sel ="select * from manage_category"
    con.query(sel,(err, result)=>{
        console.log(result)
        response.send(result)
    })
})

app.get("/api/menulist",(request,response)=>{
    const sel ="select * from manage_recipe"
    con.query(sel,(err, result)=>{
        console.log(result)
        response.send(result)
    })
})





app.post("/api/viewdetail",(req,res)=>{
    var m_id=req.body.m_id;
    
    //const sel ="select * from manage_recipe inner join rec_plan on manage_recipe.m_id=rec_plan.m_id;";
    const sel ="SELECT a.*,b.* from manage_recipe as a,rec_plan as b where a.m_id=b.m_id and a.m_id=?";
    
    con.query(sel,[m_id],(err, result)=>{
        console.log(result);
        res.send(result);
    });
});



app.post("/api/moredetail",(req,res)=>{
    var m_id=req.body.m_id;
    // var p_id=req.body.p_id;
    
    //const sel ="select * from manage_recipe inner join rec_plan on manage_recipe.m_id=rec_plan.m_id;";
    const sel ="SELECT a.*,b.* from manage_recipe as a,rec_plan as b where a.m_id=b.m_id and a.m_id=?";
    
    con.query(sel,[m_id],(err, result)=>{
        console.log(result);
        res.send(result);
    });
});

// app.post("/api/viewdetail",(req,res)=>{
    
//     const sel ="select * from manage_recipe inner join rec_plan on manage_recipe.m_id=rec_plan.m_id;";
//     con.query(sel,[m_id],(err, result)=>{
//         console.log(result)
//         res.send(result)
//     });
// });




app.post("/api/checkout",(req,res)=>{
    // console.log("i m here");
 
 var f_id=req.body.f_id;
 console.log(f_id)
 var rid=req.body.rid;
 console.log(rid)
 var mid=req.body.mid;
 console.log(mid)
 var amt=req.body.amt;
 var pt=req.body.pt;
 console.log(amt)
 
 //console.log("my name is ",username);
 const query="insert into payment (f_id,r_id,m_id,p_amount,pt) values(?,?,?,?,?)";
 con.query(query,[f_id,rid,mid,amt,pt]);
 res.send({msg:"Payment Sucessfully"});
 });



 app.get("/api/getusrrecipe",(req,res)=>{
    let id = req.query.uid
       // const query="select * from payment inner join manage_recipe on payment.m_id=manage_recipe.m_id where f_id=?";
      // const query="select a.* ,b.* from payment as a , inner join manage_recipe on payment.m_id=manage_recipe.m_id where f_id=?";
    
        const query ="SELECT mr.*, pt.* FROM manage_recipe AS mr INNER JOIN payment AS pt ON mr.m_id = pt.m_id WHERE (pt.pt = 'w' AND DATE_ADD(pt.p_date, INTERVAL 7 DAY) > NOW()) OR(pt.pt = 'm' AND DATE_ADD(pt.p_date, INTERVAL 1 MONTH) > NOW()) OR(pt.pt = 'y' AND DATE_ADD(pt.p_date, INTERVAL 1 YEAR) > NOW()); "
        con.query(query,[id],(err,result)=>{
        console.log(result);
            res.send(result);
        }
        )
        
         }
         );
    
    
    
    app.get("/api/getsubscription",(req,res)=>{
            
               
         const query="select distinct f_name ,payment.f_id,count(payment.m_id) as rec_count from manage_recipe inner join payment on manage_recipe.m_id=payment.m_id inner join rec_plan on payment.m_id=rec_plan.m_id inner join reg_foodies on payment.f_id=reg_foodies.f_id Group By f_name,f_id";
            
                con.query(query,(err,result)=>{
                console.log(result);
                    res.send(result);
                }
                )
                
                 }
                 );


     app.get("/api/getsubscription",(req,res)=>{
       
             const query="select distinct f_name, payment.f_id,count(payment.m_id) as rec_count from manage_recipe inner join payment on manage_recipe.m_id=payment.m_id inner join rec_plan on payment.m_id=rec_plan.m_id inner join reg_foodies on payment.f_id=reg_foodies.f_id Group By f_name,f_id";
          // const query="select a.* ,b.* from payment as a , inner join manage_recipe on payment.m_id=manage_recipe.m_id where f_id=?";
           
            con.query(query,(err,result)=>{
            console.log(result);
                res.send(result);
            }
            )
            
             }
             );



             app.get("/api/getuserdetail",(req,res)=>{
                let fid= req.query.f_id
                console.log(fid)
                              // const query="select * from manage_recipe inner join payment on manage_recipe._id=payment.m_id inner join rec_plan on payment.m_id=rec_plan.m_id";
                             
                            //const query="select distinct f_name,p_date,payment.f_id,count(payment.m_id) as rec_count from manage_recipe inner join payment on manage_recipe.m_id=payment.m_id inner join rec_plan on payment.m_id=rec_plan.m_id inner join reg_foodies on payment.f_id=reg_foodies.f_id Group By f_name, p_date,f_id";
                            const query="select * from manage_recipe inner join payment on manage_recipe.m_id=payment.m_id inner join rec_plan on payment.m_id=rec_plan.m_id WHERE payment.f_id=?";
                              
                               
                               con.query(query,[fid],(err,result)=>{
                               console.log(result);
                                   res.send(result);
                               }
                               )
                               
                                }
                                );
               
               
               
               
                app.post("/api/feedback",(req,res)=>{
                                          
                   var m_id=req.body.m_id;
                   console.log(m_id)    
                   var f_id=req.body.f_id;
                   console.log(f_id)  
                   var f_name=req.body.f_name;
                   console.log(f_name)    
                   var f_email=req.body.f_email;
                   console.log(f_email)                       
                var feedback=req.body.feedback;
                console.log(feedback)
                                       
                           const query="insert into feedback (feed_description,m_id,f_id,f_name,f_email) values(?,?,?,?,?)";
                           con.query(query,[feedback,m_id,f_id,f_name,f_email]);
                           res.send({msg:"Feedback added Successfully"});
                            });
               
               
                           
                app.get("/api/getreview",(req,res)=>{
                   var m_id=req.query.mm_id;
               console.log(m_id)
                    const sel= "select * from reg_foodies inner join feedback on reg_foodies.f_id=feedback.f_id inner join manage_recipe on feedback.m_id=manage_recipe.m_id  where feedback.m_id=?";
                       con.query(sel,[m_id],(err, result)=>{
                        console.log(result)
                        res.send(result)
                               });
                               
                                })        
                
               
               
               app.get("/api/getfeedback",(req,res)=>{
               // let f_id= req.query.f_id
               //  var m_id=req.query.m_id;
               //      console.log(m_id)
                  const sel= "select * from reg_foodies inner join feedback on reg_foodies.f_id=feedback.f_id inner join manage_recipe on feedback.m_id=manage_recipe.m_id";
                     con.query(sel,[],(err, result)=>{
                     console.log(result)
                     res.send(result)
                      });
                                               
                         })  
                         
                         
               
                         app.post("/api/editrec",(req,res)=>{
            var mid=req.body.mid;
            console.log(mid);
        
            const query="select *from manage_recipe inner join rec_plan on manage_recipe.m_id=rec_plan.m_id where manage_recipe.m_id=?";
            con.query(query,[mid],(err, result)=>{
                res.send(result)
            });
        
        });
        app.post("/api/edit",(req,res)=>{
            var Rname=req.body.Rname;
            var Rprice=req.body.Rprice;
            var Wprice=req.body.Wprice;
            var Mprice=req.body.Mprice;
            var Yprice=req.body.Yprice;
            var Ringredients=req.body.Ringredients;
 var Rdescription=req.body.Rdescription;
            var m_id=req.body.m_id;
            console.log(m_id);
            console.log(Rname)
            console.log(Rprice)
            console.log(Wprice)
            console.log(Mprice)
            console.log(Yprice)
            console.log(Ringredients)
            console.log(Rdescription)
        
            const query="update  manage_recipe set rec_name=? ,rec_price=?  ,rec_ingredients=? ,rec_description=? where m_id=?";
            con.query(query,[Rname,Rprice,Ringredients,Rdescription,m_id],(err, result)=>{
                
            });
        
            const upd="update  rec_plan set w_price=? ,m_price=?  ,y_price=? where m_id=?";
            con.query(upd,[Wprice,Mprice,Yprice,m_id],(err, result)=>{
                res.send({msg:"Recipe Updated Successfully"});
                
            });
        
        });
          
        
        app.get("/api/profile",(request,response)=>{
            var f_id=request.query.f_id;
console.log(f_id)
            const sel ="select * from reg_foodies where f_id=?";
            con.query(sel,[f_id],(err, result)=>{
                console.log(result)
                response.send(result)
            })
        })


        app.post("/api/changepw",(req,res)=>{
            var currentpass=req.body.currentpass;
            var newpass=req.body.newpass;
         
            var f_id=req.body.f_id;
            console.log(f_id);
            console.log(newpass)
            console.log(currentpass)
            
            const query=" select * from reg_foodies where f_id=? and  f_password=?";
            con.query(query,[f_id,currentpass],(err , result)=>{
                if(result.length>0){
                    console.log(result)
                    const query="update  reg_foodies set f_password=?  where f_id=?";
                    con.query(query,[newpass,f_id],(err, result)=>{
                     res.send(result)
                    });
                }
                else{
                    console.log("wrong")
                    
                    res.send({msg:"id password not matched"})
                }
             });
          
        });


        app.get("/api/dashboard",(request,response)=>{
            console.log("api calls")
                        const query ="SELECT (SELECT COUNT(f_name) FROM reg_foodies) AS citizencount, (SELECT COUNT(rec_name) FROM manage_recipe) AS recipecount,(SELECT COUNT(cat_name) FROM manage_category) AS categorycount,(SELECT COUNT(feed_id) FROM feedback) AS feedbackCount;";
            
                        con.query(query, (err, result)=>{
                            if(err){
                                console.error(err);
                                response.status(500).send("Internal server Error");
            
                            }
                            else{
                                console.log(result);
                                response.send(result);
                            }
                        });
                    });
            
            
                    app.post("/api/report",(req,res)=>{
                        var start_date=req.body.start_date;
                        // console.log(start_date)
                        var end_date=req.body.end_date;
                    // console.log(end_date)
                    const query="SELECT * FROM manage_recipe  JOIN payment ON manage_recipe.m_id = payment.m_id WHERE payment.p_date BETWEEN ? AND ?"
                    
                                con.query(query,[start_date,end_date],(err,result)=>{
                                console.log(result);
                                res.send(result);
                                    
                                }
                                )
                            
                                
                                 }
                                 );

                                 
                     app.post('/api/forgotadminlogin',(req,resp)=>{
                        var ename= req.body.Ename;
                       console.log(ename);
          
                    
                        const sel= "Select * From admin_login where a_email=? ";
                        con.query(sel,[ename],(err,result)=>
                        {
                            console.log(result);
                            if (result.length > 0) {
                                console.log(result);
                               
                                var pass=result[0].a_password;
                                console.log(pass)
                                 var name=result[0].a_name;
                                 console.log(name)
                                 resp.send(result);
                                 const transporter = nodemailer.createTransport({
                                    host: "smtp.gmail.com",
                                     port: 587,
                                     secure: false,
                                     auth: {
                                       user: "pateljanvi102.pj@gmail.com",
                                       pass: "tootmdxprdpyyzye",
                                     },
                                   });
                                   
                                   
                               const message = {
                                 from: "pateljanvi102.pj@gmail.com",
                                 to: ename,
                               
                                 subject: "Quick Recipe",
                                 text: "Hello , "  + name +"!"+ "\n" +" Your Password is --->>" + pass + "<<--- .",
                               };
                     
                               transporter.sendMail(message, (error, info) => {
                                 if (error) {
                                   console.error(error);
                                 } else {
                                   resp.send(result);
                                   console.log("Email sent:", info.response);
                                 }
                              
                               });
                     
                            } else {
                                resp.send({ message: "Please enter correct email id " });
                            }   }
                        ) });
 




                        app.post('/api/forgotuserlogin',(req,resp)=>{
                            var ename= req.body.Ename;
                           console.log(ename);
              
                        
                            const sel= "Select * From reg_foodies where f_email=? ";
                            con.query(sel,[ename],(err,result)=>
                            {
                                console.log(result);
                                if (result.length > 0) {
                                    console.log(result);
                                   
                                    var pass=result[0].f_password;
                                    console.log(pass)
                                     var name=result[0].f_name;
                                     console.log(name)
                                     resp.send(result);
                                     const transporter = nodemailer.createTransport({
                                        host: "smtp.gmail.com",
                                         port: 587,
                                         secure: false,
                                         auth: {
                                           user: "pateljanvi102.pj@gmail.com",
                                           pass: "tootmdxprdpyyzye",
                                         },
                                       });
                                       
                                       
                                   const message = {
                                     from: "pateljanvi102.pj@gmail.com",
                                     to: ename,
                                   
                                     subject: "Quick Recipe",
                                     text: "Hello , "  + name +"!"+ "\n" +" Your Password is --->>" + pass + "<<--- .",
                                   };
                         
                                   transporter.sendMail(message, (error, info) => {
                                     if (error) {
                                       console.error(error);
                                     } else {
                                       resp.send(result);
                                       console.log("Email sent:", info.response);
                                     }
                                  
                                   });
                         
                                } else {
                                    resp.send({ message: "Please enter correct email id " });
                                }   }
                            ) });



    app.post("/api/delcartitems",(req,res)=>{
     var mid=req.body.mid;
     console.log(mid);
                            
    const query="delete from cart_item where cart_id=?";
     con.query(query,[mid]);
     res.send({msg:"Cart Item Deleted Successfully"});
        });
     


        
       
             app.post("/api/addcart",(req,res)=>{
                // console.log("i m here");
                var f_id=req.body.f_id;
                var m_id=req.body.mid;
             
             console.log(f_id)
             console.log(m_id)
             const sel=" select * from cart_item where f_id =? and m_id=?";
            
             con.query(sel,[f_id,m_id],(err , result)=>{
                if(result.length>0){
                    console.log(result)
                    res.send({msg:"All raedy in cart"})
                    
                }
                else{
                    const query="insert into cart_item (f_id,m_id) values(?,?)";
                    con.query(query,[f_id,m_id],(err, result)=>{
                        res.send(result)
                    });
                }

             //console.log("my name is ",username);
            
             });
             });
             
            


            
        app.get("/api/getcartitem",(req,res)=>{
            var mid=req.query.uid;
            console.log(mid);
            const sel= "select *from cart_item inner join manage_recipe on cart_item.m_id=manage_recipe.m_id where cart_item.f_id=?"; 
            con.query(sel,[mid],(err, result)=>{
                console.log(result)
                res.send(result)
            });
            
             })


             app.post("/api/login",(req,res)=>{
                // console.log("i m here");
             
             
             var Pnumber=req.body.Pnumber;
            
             var Password=req.body.Password;
             
             //console.log("my name is ",username);
             const sel=" select * from reg_foodies where f_phone =? and f_password=?";
            
             con.query(sel,[Pnumber,Password],(err , result)=>{
                if(result.length>0){
                    console.log(result)
                    res.send(result)
                }
                else{
                    res.send({msg:"id password not matched"})
                }
             });
            
            });
             

                                