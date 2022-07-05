import AdminService from "../../services/admin.service"
import UserlistCard from "../../components/userlistCard.component"
import ButtonIcon from "../../components/buttonIcon.component"
import SearchBar from "../../components/search.component"
import {useEffect, useState} from 'react'

import {MdAdd} from 'react-icons/md'

export default function AdminUsers() {

    const [userArray, setUserArray] = useState([])
    const [filteredUserArray, setFilteredUserArray] = useState([])

    useEffect(() => {
        AdminService.getUserList().then((res) => {
            if(res.status == 200) {
                setUserArray(res.data)
                setFilteredUserArray(res.data)
            }
        }, (err) => {
            console.log(err)
        })
    },[])

    function onSearch(e) {
        const search = e.target.value
        console.log(search)
        let filtered = searchUsers(search)
        setFilteredUserArray(filtered)
    }

    function searchUsers(text) {
        text = text.split(' ');
        let res = userArray.filter(user => {
            return text.every(el => {
            return user.nom.includes(el) || user.prenom.includes(el) || user.famss == el || user.surnss.includes(el)
            });
        });
        console.log(res)
        return res
    }

    return (
        <div className="userlistContainer">
            <div id="rowDisplay" style={{marginBottom: 20, marginTop: 50}}>
                <ButtonIcon style={{fontSize: 15}} icon={<MdAdd size="20px" />} text="Créer un utilisateur"/>
                <ButtonIcon style={{fontSize: 15}} icon={<MdAdd size="20px" />} text="Importer une liste"/>
            </div>
            <SearchBar style={{marginBottom: 20}} onChange={onSearch} placeholder="Filtrez les utilisateur" />
            {filteredUserArray.map((user, index)=>(
                <UserlistCard promss="220" TBK={user.TBK} nom={user.nom} prenom={user.prenom} surnss={user.surnss} famss={user.famss} />
            ))}
        </div>
    )
}