const express = require("express");
const app = express();
const PORT = 5000;

//parse application/json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//import routes
const router = require("./router");

app.use("/forecasts/", router);
app.use(express.static("public"));

app.get("/", (req, res) => {
	const d = new Date();
	res.send(`Server is up and running on ${d}`);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
