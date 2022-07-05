import axios from "axios"
import authHeader from "./header.service"
const API_URL = "https://intranet-api.lulusworld.art/api/"
const getUserList = () => {
    return axios.get(API_URL + "admin/list/users", {headers: authHeader()})
}
const AdminService = {
    getUserList
}
export default AdminService