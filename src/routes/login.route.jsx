import Button from "../components/button.component";
import TextField from "../components/textfield.component";
import PasswordField from "../components/password.component";
import Title from "../components/title.component";

import React, {useState, useRef} from "react"
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'

export default function Login() {

    let navigate = useNavigate();
    const form = useRef()
    const checkBtn = useRef()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    }
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(password + username)
        if(password.length > 0 && username.length > 0) {
            AuthService.login(username, password).then(() => {
                navigate('/user')
                window.location.reload()
            }, (err) => {
                console.log(err)
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }

    return (
        <main style={{marginTop: '200px'}}>
            <Title />
            <form>
                <TextField onChange={onChangeUsername} placeholder="Email" name="email" />
                <PasswordField onChange={onChangePassword} placeholder="Mot de passe" name="pass" />
                <Button style={{width: 209}} callback={handleLogin} text="Connexion" />
            </form>
        </main>
    )
}