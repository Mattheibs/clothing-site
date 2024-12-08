import React, {useEffect} from "react";
import "./hero.scss";

//Images
import hero from "../../images/hero.webp";


function Hero() {
	return (
		<div className="hero">
			<link rel="preload" href={hero} as="image" />
			<img src={hero} alt="" loading="eager" height="90vh" width="auto"/>
			<div className="container">
				<div className="hero__center">
					<h1>Lorem ipsum dolor sit.</h1>
					<h4>
						Lorem ipsum dolor sit amet consectetur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit urna.
						Pellentesque sit amet sapien fringilla, mattis
						ligula.
					</h4>
					<button className="button-light">Lorem ipsum</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
