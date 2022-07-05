function Title(props) {
    return (
        <div className="textFieldContainer">
            <div>
                <span className="bigTitle">Intranet</span><br />
                <span className="titleSubtitle">{props.subtitle ? props.subtitle : "Le site de vie associative de Boquette"}</span>
            </div>
        </div>
    )
}

export default Title