import axios from "axios";

const instance = axios.create({
  baseURL: "https://ff99a318-63da-47c4-800e-1de5ef8922b5-00-j4c4yabmn8tw.pike.repl.co/api", // 🔁 Replace this with your actual backend Replit URL
});

export default instance;

