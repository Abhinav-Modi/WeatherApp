import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
const Home = () => {
	const [data, setData] = useState(null);
	const getWeather = async (e) => {
		e.preventDefault();
		const location = e.target.elements.city.value;
		const url = `http://localhost:5000/forecasts/${location}`;
		let res;
		try {
			res = await axios.get(url);
			setData(res.data);
		} catch (err) {
			console.log(err);
		}
		console.log(data);
	};
	return (
		<>
			<div>
				<form onSubmit={getWeather}>
					<div className="input-container">
						<input type="text" name="city" placeholder="City" />
					</div>
					<button type="submit">Get Weather</button>
				</form>
			</div>
			{data && (
				<div className="weather-card">
					<h3 className="city">{`City: ${data.name}`}</h3>
					<h3 className="temp">{`Temperature: ${
						Math.round((data.main.temp - 273.15) * 10) / 10
					}°C`}</h3>
					<h3 className="feels-like">{`Feels Like: ${
						Math.round((data.main.feels_like - 273.15) * 10) / 10
					}°C`}</h3>
					<h3 className="temp-min">{`Min Temperature: ${
						Math.round((data.main.temp_min - 273.15) * 10) / 10
					}°C`}</h3>
					<h3 className="temp-max">{`Max Temperature: ${
						Math.round((data.main.temp_max - 273.15) * 10) / 10
					}°C`}</h3>
					<h3 className="humidity">{`Humidity: ${data.main.humidity}%`}</h3>
					<h3 className="pressure">{`Pressure: ${data.main.pressure} hPa`}</h3>
					<h3 className="wind-speed">{`Wind Speed: ${data.wind.speed} mph`}</h3>
					<h3 className="wind-direction">{`Wind Direction: ${data.wind.deg}°`}</h3>
				</div>
			)}
		</>
	);
};

export default Home;
