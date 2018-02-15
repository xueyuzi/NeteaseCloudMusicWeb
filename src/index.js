import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./static/init.css";
import "./static/main.css";

ReactDom.render(
	<App/>,
	document.getElementById("app")
)