import axios from "axios"
import authHeader from "./header.service"
const API_URL = "https://intranet-api.lulusworld.art/api/"
const getPromotionList = () => {
    return axios.get(API_URL + "promss/list", {headers: authHeader()})
}
const UserService = {
    getPromotionList
}
export default UserService