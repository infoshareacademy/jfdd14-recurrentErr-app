import data from "./data";
const routeData = JSON.parse(localStorage.getItem("routeData")) || data;

export default routeData;
