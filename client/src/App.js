import React from "react";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<div className="container">
				<h1 className="heading">Weather APP </h1>
				<div className="wrapper">
					<Home />
				</div>
			</div>
		</>
	);
};

export default App;
