import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getForm = () => {
    return axios.get(API_URL + "all");
};

const UserService = {
    getForm
};

export default UserService;