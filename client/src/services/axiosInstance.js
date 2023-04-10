import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:500/",
	timeout: 6000,
});

export default axiosInstance;
