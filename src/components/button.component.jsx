function Button(props) {
    return (
        <div className="textFieldContainer">
            <button style={props.style} onClick={props.callback} className="button">{props.text}</button>
        </div>
    )
}

export default Button