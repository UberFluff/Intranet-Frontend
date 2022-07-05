import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

function PasswordField(props) {

    const [showPass, setShowPass] = useState(false)

    function switchPass() {
        setShowPass(!showPass)
    }

    return (
        <div className='textFieldIconContainer'>
            <input type={showPass ? 'text' : 'password'} onChange={props.onChange} placeholder={props.placeholder} name={props.name} className="grey-textField"/>
            { showPass ? <FaEyeSlash size="25px" className="textFieldIcon" onClick={switchPass}/> : <FaEye size="25px" className="textFieldIcon" onClick={switchPass}/> }
        </div>
    )
}

export default PasswordField