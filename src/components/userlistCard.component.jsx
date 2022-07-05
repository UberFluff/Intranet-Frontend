import {MdAccountCircle, MdEdit, MdRemoveRedEye, MdDelete} from 'react-icons/md'

function UserlistCard(props) {
    return (
        <div className="userlistCardContainer">
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                {props.avatarURL != undefined ?  <img src={props.avatarURL} /> : <MdAccountCircle size="50px" />}
                <p style={{position: "relative", marginLeft: 10}}><span className="userlistCardBucque">{props.surnss} {props.famss} {props.TBK} {props.promss}</span><br /><span className='userlistCardNom'>{props.nom} {props.prenom}</span></p>
            </div>
            <div className="userlistActionContainer">
                <MdDelete className='userlistActionIcon' size="25px" />
                <MdRemoveRedEye className='userlistActionIcon' size="25px" />
                <MdEdit className='userlistActionIcon' size="25px"/>
            </div>
        </div>
    )
}

export default UserlistCard