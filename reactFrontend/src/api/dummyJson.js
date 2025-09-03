import axios from "axios";

const dummyJson = axios.create({
  baseURL: "https://first-fullstack-app-five.vercel.app/",
});

export default dummyJson;
