import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false); // Add new state variable

	const getWeather = async (e) => {
		e.preventDefault();
		const location = e.target.elements.city.value;
		const url = `http://localhost:5000/forecasts/${location}`;
		setIsLoading(true); // Set isLoading to true
		try {
			const res = await axios.get(url);

			setData(res.data);
			setIsLoading(false); // Set isLoading to false when the response is received
		} catch (error) {
			setData(null);
			setIsLoading(false); // Set isLoading to false when an error occurs
		}
	};

	return (
		<>
			<div>
				<form className="form" onSubmit={getWeather}>
					<div className="input-container">
						<input type="text" name="city" placeholder="Enter City" />
					</div>
					<button type="submit">Search</button>
				</form>
			</div>

			{/* Show loading spinner if isLoading is true
			{isLoading && <h1 className="city">Loading...</h1>} */}
			{data && (
				<div className="weather-card">
					{isLoading ? (
						<h1 className="city">Working On it</h1>
					) : (
						<>
							{data.main ? (
								<>
									<h3 className="city">{`${data.name}`}</h3>
									<div className="details-container">
										<div className="details1">
											<h3 className="temp">
												<span className="detail-title">Temperature: </span>
												{`${Math.round((data.main.temp - 273.15) * 10) / 10}°C`}
											</h3>
											<h3 className="feels-like">
												<span className="detail-title">Feels Like: </span>
												{`${
													Math.round((data.main.feels_like - 273.15) * 10) / 10
												}°C`}
											</h3>
											<h3 className="temp-min">
												<span className="detail-title">Min Temperature: </span>
												{`${
													Math.round((data.main.temp_min - 273.15) * 10) / 10
												}°C`}
											</h3>
											<h3 className="temp-max">
												<span className="detail-title">Max Temperature: </span>
												{`${
													Math.round((data.main.temp_max - 273.15) * 10) / 10
												}°C`}
											</h3>
										</div>
										<div className="details2">
											<h3 className="humidity">
												<span className="detail-title">Humidity: </span>
												{`${data.main.humidity}%`}
											</h3>
											<h3 className="pressure">
												<span className="detail-title">Pressure: </span>
												{`${data.main.pressure} hPa`}
											</h3>
											<h3 className="wind-speed">
												<span className="detail-title">Wind Speed: </span>
												{`${data.wind.speed} m/s`}
											</h3>
											<h3 className="wind-direction">
												<span className="detail-title">Wind Direction: </span>
												{`${data.wind.deg}°`}
											</h3>
										</div>
									</div>
								</>
							) : (
								<p>No weather data available</p>
							)}
						</>
					)}
				</div>
			)}
		</>
	);
};

export default Home;
