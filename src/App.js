import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import SignUp from "./pages/signUp/signUp";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
				<Route path="/*" element={<SignUp />}></Route>
			</Routes>
		</div>
	);
}

export default App;
