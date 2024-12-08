import React from "react";
import "./callToAction.scss";

//Images
import callToActionBackground from "../../images/call-to-action.webp";

function CallToAction() {
	return (
		<div className="call-to-action">
			<img src={callToActionBackground} alt="" loading="lazy"/>
			<div className="container">
				<div className="call-to-action__text">
					<h2>Lorem ipsum dolor sit.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit urna.v
					</p>
					<button className="button-light">Lorem Ipsum</button>
				</div>
			</div>
		</div>
	);
}

export default CallToAction;
