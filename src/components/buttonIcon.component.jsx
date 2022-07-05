function ButtonIcon(props) {
    return (
        <div className="textFieldContainer">
            <span class="leftIconButton">{props.icon}</span>
            <button style={props.style} onClick={props.callback} className="button buttonIcon">{props.text}</button>
        </div>
    )
}

export default ButtonIcon