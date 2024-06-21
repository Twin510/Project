import React ,{useEffect} from "react";

function Home(){
	useEffect(()=>{
const JiSlider='#JiSlider';
window.intialslider(JiSlider);
	


	},[]);
    return(
<div>

<div class="banner-silder">   
		<div id="JiSlider" class="jislider">
			<ul>
				<li>
					<div class="w3layouts-banner-top">

							<div class="container">
									<div class="agileits-banner-info">
									<span>Flavorful</span>
									<h3>Fresh Food</h3>
									 {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p> */}
									
								</div>	
							</div>
						</div>
				</li>
				<li>
						<div class="w3layouts-banner-top w3layouts-banner-top1">
						<div class="container">
								<div class="agileits-banner-info">
								 <span>Real</span>
									<h3>Cooking food</h3>
									 {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p> */}
									
								</div>	
							</div>
						</div>
				</li>
				<li>
						<div class="w3layouts-banner-top w3layouts-banner-top2">
							<div class="container">
								<div class="agileits-banner-info">
								     <span>Amazing</span>
									<h3>chefs</h3>
									 {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p> */}
									
								</div>
								
							</div>
						</div>
					</li>
				
			</ul>
		</div>
      </div>



</div>
)
}export default Home