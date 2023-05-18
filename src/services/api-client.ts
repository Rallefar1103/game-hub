import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9f4d28cfa75d43f5b5ce547ba9f76fc2",
    }
})