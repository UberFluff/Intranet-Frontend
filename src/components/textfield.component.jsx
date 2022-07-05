function TextField(props) {
        return (
            <div className="textFieldContainer">
                <input type="text" onChange={props.onChange} placeholder={props.placeholder} name={props.name} className="grey-textField"/>
            </div>
        )
}

export default TextField