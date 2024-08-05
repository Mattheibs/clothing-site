import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import data from "../../data.json";

// Css
import "swiper/css/bundle";
import "./featured.scss";

//Images
import featuredOne from "../../images/featured/featured-1.png";
import featuredTwo from "../../images/featured/featured-2.png";
import featuredThree from "../../images/featured/featured-3.png";
import featuredFour from "../../images/featured/featured-4.png";
import star from "../../images/featured/star.png";

function Featured() {
	const [selectedCategory, setSelectedCategory] = useState(
		Object.keys(data.products)[0]
	);
	const swiperRef = useRef(null);

	const handleCategoryChange = (item) => {
		setSelectedCategory(item);
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideToLoop(0, 0, false);
		}
	};
	const imageMap = {
		featuredOne: featuredOne,
		featuredTwo: featuredTwo,
		featuredThree: featuredThree,
		featuredFour: featuredFour,
	};

	const stars = (amount) => {
		const allStars = [];
		for (let i = 0; i < amount; i++) {
			allStars.push(<img src={star} key={i} alt="" />);
		}
		return allStars;
	};

	return (
		<div className="container">
			<div className="featured">
				<h2>Featured Products</h2>
				<div className="featured__categories">
					{Object.entries(data.products).map(([item], index) => {
						return (
							<button
								key={index}
								onClick={() =>
									handleCategoryChange(item)
								}
								className={`${
									selectedCategory === item
										? "active"
										: "null"
								} featured__categories__category`}
							>
								{item.slice(0, 1).toUpperCase() +
									item.slice(1)}
							</button>
						);
					})}
				</div>

				<Swiper
					ref={swiperRef}
					spaceBetween={40}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1100: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{/*  */}
					{data.products[selectedCategory].map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="featured__slider-top">
									<img
										className="featured__slider-top__person"
										src={imageMap[item.img]}
										alt=""
									/>
									<div>
										{stars(item.amountOfStars)}
									</div>
								</div>

								<h4>{item.header}</h4>
								<p className="explanation">
									{item.explanation}
								</p>
								<h4>{item.cost}</h4>
								<div className="color-options">
									{item.colorOptions.map(
										(item, index) => {
											return (
												<div
													key={index}
													style={{
														backgroundColor: `${item}`,
													}}
													className="color-options__option"
												></div>
											);
										}
									)}
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="button-dark-container">
					<button className="button-dark">Lorem Ipsum</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;
