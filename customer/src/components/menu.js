import React, { useEffect, useState } from "react";
import axios from "axios";
import Viewdetail from "./viewdetail";
import {Link} from 'react-router-dom';

function Menu() {
    const [list, setList] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [view1,setview1]=useState([]);
    const [displayStyles, setDisplayStyles] = useState({});
    const [activeIndex, setActiveIndex] = useState(null);

    function hello(mid){
        let user = JSON.parse(sessionStorage.getItem("citizendata"));
        const f_id=user.Id;
        
        alert(f_id)
alert(mid)

axios.post("http://localhost:1334/api/addcart",{f_id:f_id,mid:mid}).then((response) => {
    if( response.data.msg){
        alert(response.data.msg);
    }
    else{
    alert("cart added sucessfully")
        window.location.reload()
    }
        });
    }

    useEffect(() => {
        axios.get("http://localhost:1334/api/getmenu").then((response) => {
            setList(response.data);
        });

        axios.get("http://localhost:1334/api/menulist").then((response) => {
            setMenuItems(response.data);
        });

        
    }, []);

    const toggleDisplay = (index) => {
        setActiveIndex(activeIndex === index ? null : index);

        setDisplayStyles((prevStyles) => {
            return {
                ...prevStyles,
                [index]: activeIndex === index ? "none" : "block",
            };
        });
    };

    return (
        <div>
            <div class="agile_menu" id="menu">
                <div class="container">
                    <h3 class="w3_heade_tittle_agile">Spicy Menu</h3>
                    <p class="sub_t_agileits">It's time to eat...</p>
                    <div class="menu_w3ls_agile_top_section">
                        <div class="w3l_chill">
                            <img src="assets/images/ab1.jpg" alt=" " class="img-responsive" />
                        </div>
                        <div className="ziehharmonika">
                            {list.map((item, index) => {
                                var it = item.cat_name;
                                return (
                                    <>
                                        <h3 key={index} onClick={() => toggleDisplay(index)}>
                                            {it}
                                            <div class="arrowDown"></div>
                                            <div class="collapseIcon">+</div>
                                        </h3>
                                        {activeIndex === index && (
                                            <div style={{ display: displayStyles[index] }}>
                                                <div class="w3_agile_recipe-grid">
                                                    <div class="col-md-12 menu-grids">
                                                        <div class="menu-text">
                                                            {menuItems.map((item1) => {
                                                                if (item.cat_name === item1.choose_category) {
                                                                    return (
                                                                        <>
                                                                            <div class="menu-text-left">
                                                                                <div class="rep-w3l-img">
                                                                                 
                                                                                        <img src={"http://localhost:1334/public/"+item1.rec_image } style={{height:"120px" ,width:"120px"}}     class="img-responsive" width="150" height="150" />
                                                                                      
                                                                                    
                                                                                </div>
                                                                                <div class="rep-w3l-text">
                                                                                    <h4>{item1.rec_name}</h4>
                                                                                </div>

                                                                                <div class="clearfix"> </div>
                                                                            </div>
                                                                            <div class="menu-text-right">
                                                                            <div class="rep-tt-text">
                                                                                <h4>{item1.rec_price}/-</h4>
                                                                                <h4> < Link to='/moredetail'  state={{m_id:item1.m_id}} >View more details</Link></h4>
                                                                                <button onClick={()=>hello(item1.m_id)}>Add to Cart</button>
                                                                                </div>
                                                                                
                                                                                

                                                                               
                                                                            </div>
                                                                    
                                                                            
                                                                        </>
                                                                    );
                                                                }
                                                            })}
                                                            <div class="clearfix"> </div>
                                                        </div>
                                                    </div>

                                                    <div class="clearfix"> </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;





// import React from "react";

// function Menu() {
// 	return (
// 		<div>
// <div class="agile_menu" id="menu">
// 		<div class="container">
// 		<h3 class="w3_heade_tittle_agile">Spicy Menu</h3>
// 		<p class="sub_t_agileits">It's time to eat...</p>
// 		<div class="menu_w3ls_agile_top_section">
// 		<div class="w3l_chill"> 
// 					  <img src="images/ab1.jpg" alt=" " class="img-responsive"/>
// 				</div> 
// 			<div class="ziehharmonika">
// 			<h3>BREAKFAST</h3>
// 			<div>
// 				  <div class="w3_agile_recipe-grid">
//                                     <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m1.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m2.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m3.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								   <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m4.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m5.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m6.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								<div class="clearfix"> </div>
// 					    </div>

// 			</div>
// 			<h3>LUNCH</h3>
// 			<div>
// 			   <div class="w3_agile_recipe-grid">
//                                     <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/f1.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/f2.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/f3.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								   <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/f4.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/f5.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/f6.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								<div class="clearfix"> </div>
// 					    </div>

// 			</div>
// 			<h3>TO DAY SPECIALS</h3>
// 			<div>
// 				  <div class="w3_agile_recipe-grid">
//                                     <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m1.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m2.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m3.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								   <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m4.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m5.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/m6.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>with wild mushrooms and asparagus</h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								<div class="clearfix"> </div>
// 					    </div>

// 			</div>
// 			<h3>DRINKS</h3>
// 			<div>
// 				 <div class="w3_agile_recipe-grid">
//                                     <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/dd1.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>Itaque earum rerum hic tenetur </h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/dd2.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>Itaque earum rerum hic tenetur </h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/dd3.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>Itaque earum rerum hic tenetur </h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								   <div class="col-md-6 menu-grids">
// 										<div class="menu-text">
										      
// 											<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/dd4.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											     <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>Itaque earum rerum hic tenetur </h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>
// 											<div class="menu-text-right">
// 												<h4>$ 50</h4>
// 											</div>
// 											<div class="clearfix"> </div>
// 										</div>	

// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/dd6.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												   <h4>Lorem ipsum dolor............</h4>
// 												  <h6>Itaque earum rerum hic tenetur </h6>
// 												</div>
												
// 												<div class="clearfix"> </div>
// 											</div>

// 										<div class="menu-text-right">
// 											<h4>$25</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 									<div class="menu-text">
// 										<div class="menu-text-left">
// 												<div class="rep-w3l-img">
// 												  <img src="images/dd5.jpg" alt=" " class="img-responsive"/>
// 												</div>
// 											   <div class="rep-w3l-text">
// 												  <h4>Lorem ipsum dolor............</h4>
// 												  <h6>Itaque earum rerum hic tenetur </h6>
// 												</div>
											
// 												<div class="clearfix"> </div>
// 											</div>
// 										<div class="menu-text-right">
// 											<h4>$30</h4>
// 										</div>
// 										<div class="clearfix"> </div>
// 									</div>
// 								</div>
// 								<div class="clearfix"> </div>
// 					    </div>

// 			</div>
// 		</div>
// 		</div>
// 	</div>
// </div>
// </div>
// )
// }
// export default Menu