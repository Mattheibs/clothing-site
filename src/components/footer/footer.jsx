import React from "react";
import "./footer.scss";

// Images
import footerBackground from "../../images/footer.png";
import footerLogo from "../../images/footer-logo.svg";
import logo from "../../images/logo.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__top">
				<img
					className="footer__top__background"
					src={footerBackground}
					alt=""
				/>
				<div className="footer__top__text">
					<h2>Lorem ipsum dolor sit</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing
						elit.
					</p>
					<div className="footer__top__text__buttons">
						<button className="button-light">
							Lorem ipsum
						</button>
						<button className="button-dark">
							Lorem ipsum
						</button>
					</div>
				</div>
			</div>

			<div className="footer__card">
				<img
					className="footer__card__logo"
					src={footerLogo}
					alt=""
				/>
				<div className="footer__card__left">
					<img src={logo} alt="" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing
						elit Ut et massa mi. Aliquam in hendrerit urna.
					</p>
					<div className="footer__card__left__socials">
						<img src={twitter} alt="" />
						<img src={facebook} alt="" />
						<img src={linkedin} alt="" />
						<img src={instagram} alt="" />
					</div>
				</div>
				<div className="footer__card__table">
					<table>
						<tr>
							<th>Shop</th>
							<th>Company</th>
							<th>Help</th>
						</tr>
						<tr>
							<td>Women</td>
							<td>dolor sit sam</td>
							<td>consectetur</td>
						</tr>
						<tr>
							<td>Men</td>
							<td>lorem ipsum</td>
							<td>summ dolor</td>
						</tr>
						<tr>
							<td>Kids</td>
							<td>ng elit U</td>
							<td>adipscing el</td>
						</tr>
						<tr>
							<td>Sales</td>
							<td>Lorem ipsum</td>
							<td>it amet c</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Footer;
