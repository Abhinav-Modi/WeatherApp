import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
