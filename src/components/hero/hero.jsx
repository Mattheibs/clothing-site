import React from "react";
import "./hero.scss";

//Images
import hero from "../../images/hero.png";

function Hero() {
	return (
		<div className="hero">
			<img src={hero} alt="" />
			<div className="hero__center">
				<h1>Lorem ipsum dolor sit.</h1>
				<h4>
					Lorem ipsum dolor sit amet consectetur adipiscing elit
					Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
					sit amet sapien fringilla, mattis ligula.
				</h4>
				<button>Lorem ipsum</button>
			</div>
		</div>
	);
}

export default Hero;
