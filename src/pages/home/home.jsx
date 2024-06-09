import React from "react";
import Hero from "../../components/hero/hero";
import Featured from "../../components/featured/featured";

function Home() {
	return (
		<div className="home">
			<Hero />
			<Featured />
		</div>
	);
}

export default Home;
