import axios from "axios";
const API_URL = "https://intranet-api.lulusworld.art/api/auth/"
const login = (email, password) => {
    return axios
        .post(API_URL + "signin", {
            email,
            password
        })
        .then((response) => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    let user = localStorage.getItem("user")
    if(user == null) {
        window.location.href = "/login"
        return
    }
    return JSON.parse(user)
}

const AuthService = {
    login,
    logout,
    getCurrentUser
}
export default AuthService