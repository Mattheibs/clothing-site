import { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

//Images
import logo from "../../images/logo.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";

function Navbar() {
	const dropdownRef = useRef(null);
	const [dropdownActive, setDropdownActive] = useState(false);
	const dropdownClick = () => {
		setDropdownActive(!dropdownActive);
	};
	const handleClickOutside = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setDropdownActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="navbar">
			<a href="/">
				<img src={logo} alt="" className="navbar__logo" />
			</a>
			<ul className="navbar__menu">
				<li
					className="navbar__menu__dropdown"
					onClick={dropdownClick}
					ref={dropdownRef}
				>
					Categories{" "}
					<span>
						{dropdownActive ? (
							<svg
								width="8"
								height="7"
								viewBox="0 0 8 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.09062 6.04559L4 3.13622L6.90937 6.04559L8 4.95497L4 0.954968L0 4.95497L1.09062 6.04559Z"
									fill="black"
								/>
							</svg>
						) : (
							<svg
								width="8"
								height="7"
								viewBox="0 0 8 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.90938 0.954956L4 3.86433L1.09063 0.954956L0 2.04558L4 6.04558L8 2.04558L6.90938 0.954956Z"
									fill="black"
								/>
							</svg>
						)}
					</span>
					{dropdownActive ? (
						<ul className="navbar__menu__dropdown__hidden">
							<li>Shirts</li>
							<li>Socks</li>
							<li>Jeans</li>
							<li>Shorts</li>
							<li>Jerseys</li>
							<li>Hoodies</li>
							<li>Shoes</li>
						</ul>
					) : null}
				</li>
				<li>
					<a href="#"></a>Women
				</li>
				<li>
					<a href="#"></a>Men
				</li>
				<li>
					<a href="#"></a>Sales
				</li>
			</ul>
			<ul className="navbar__socials">
				<li>
					<a href="#">
						<img src={facebook} alt="" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={twitter} alt="" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={linkedin} alt="" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={instagram} alt="" />
					</a>
				</li>
				<li>
					<NavLink to="/sign-up">
						<button className="button-dark">Sign Up</button>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
