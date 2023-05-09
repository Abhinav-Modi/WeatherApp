const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const path = require("path");
//parse application/json
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//import routes
const router = require("./router");

app.use("/forecasts/", router);
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
		if (err) {
			res.status(500).send(err);
		}
	});
});

app.get("/", (req, res) => {
	const d = new Date();
	res.send(`Server is up and running on ${d}`);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
