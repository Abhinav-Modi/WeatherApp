const express = require("express");
const axios = require("axios");
let router = express.Router();
API_KEY = "828edfceef460840683c7c1425fc557f";
router.get("/:location", (req, res) => {
	const location = req.params.location;
	console.log(location);
	const url =
		"http://api.openweathermap.org/data/2.5/weather?q=" +
		location +
		"&appid=" +
		API_KEY;
	axios({
		method: "get",
		url: url,
		responseType: "json",
	})
		.then((response) => {
			console.log(response.data);
			res.send(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
});

module.exports = router;
