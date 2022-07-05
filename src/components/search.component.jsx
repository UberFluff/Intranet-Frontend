import { MdOutlineSearch } from 'react-icons/md'

function SearchBar(props) {
    return (
        <div className='textFieldIconContainer searchContainer' style={props.containerStyle}>
            <input type="text" onChange={props.onChange} placeholder={props.placeholder} style={props.style} name={props.name} className="grey-textField searchBar"/>
            <MdOutlineSearch size="25px" className='textFieldIcon'/>
        </div>
    )
}

export default SearchBar