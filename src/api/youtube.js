import axios from "axios";
const KEY = "AIzaSyD-BELoF7pOL_UJn9WBFL5RGK5F0VnH7y8";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
