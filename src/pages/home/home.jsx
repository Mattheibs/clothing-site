import React from "react";
import Hero from "../../components/hero/hero";
import Featured from "../../components/featured/featured";
import CallToAction from "../../components/callToAction/callToAction";
import Categories from "../../components/categories/categories";

function Home() {
	return (
		<div className="home">
			<Hero />
			<Featured />
			<CallToAction />
			<Categories />
		</div>
	);
}

export default Home;
