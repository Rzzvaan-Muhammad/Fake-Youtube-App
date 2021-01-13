import axios from "axios";
const KEY = "AIzaSyBcUYOEmz0tFTQ7Zmxj_A3Vwj5lZkZQjoQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
