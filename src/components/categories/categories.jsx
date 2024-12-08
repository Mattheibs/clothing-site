import React from "react";
import "./categories.scss";

// Images
import categoriesOne from "../../images/categories/category-1.webp";
import categoriesTwo from "../../images/categories/category-2.webp";
import categoriesThree from "../../images/categories/category-3.webp";
import categoriesFour from "../../images/categories/category-4.webp";

const categoryImages = [
	categoriesOne,
	categoriesTwo,
	categoriesThree,
	categoriesFour,
];

function Categories() {
	return (
		<div className="container">
			<div className="categories">
				<h2>Categories</h2>
				<div className="categories__grid">
					{categoryImages.map((image, index) => (
						<div
							key={index}
							className="categories__grid__item"
							style={{ backgroundImage: `url(${image})` }}
						>
							<button className="button-dark">
								Category
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Categories;
