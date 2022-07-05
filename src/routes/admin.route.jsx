import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AuthService from "../services/auth.service";
import Title from "../components/title.component";
import '../style/adminspace.css'
import Tab from "../components/tab.component";
import SearchBar from "../components/search.component";

import { MdGroups, MdExitToApp, MdOutlineList, MdPerson, MdAdminPanelSettings, MdAccountCircle, MdGroupWork } from 'react-icons/md'


export default function AdminController() {
    const [user, setUser] = useState({})
    const [selectedTab, setSelectedTab] = useState("user")

    let navigate = useNavigate()

    const handleTabClick = (tab) => {
        setSelectedTab(tab)
    }

    useEffect(() => {
        let user = AuthService.getCurrentUser();
        console.log(user)
        setUser(user);
    },[])
    return (
        <main id="userspaceContainer">
            <div id="userspaceHeaderBG">
                <div id="userspaceHeader">
                    <Title subtitle="Console d'administration de Boquette" />
                    <SearchBar style={{backgroundColor: '#FFFFFF'}} containerStyle={{position:"relative", left: 100}} placeholder="Recherchez l'intranet..."/>
                    <div id="avatarList">
                        <MdOutlineList style={{cursor: "pointer"}} size="30px" />
                        {user.isAdmin && <MdAdminPanelSettings size="30px" style={{cursor: "pointer"}} onClick={() => navigate('/admin/users')} />}
                        <MdAccountCircle style={{cursor: "pointer"}} size="55px" />
                    </div>
                </div>
            </div>
            <div id="rowDisplay">
            <div id="userspaceNavigation">
                <Tab text="Quitter" icon={<MdExitToApp />} onClick={() => navigate('/user')} active={selectedTab == "leave" ? true : false}/>
                <Tab text="Utilisateurs" icon={<MdPerson />} onClick={() => {handleTabClick("user"); navigate('/admin/users')}} active={selectedTab == "user" ? true : false}/>
                <Tab text="Strass" icon={<MdGroups />} onClick={() => handleTabClick("asso")} active={selectedTab == "asso" ? true : false}/>
                <Tab text="Promss" icon={<MdGroupWork />} onClick={() => handleTabClick("promo")} active={selectedTab == "promo" ? true : false}/>
            </div>
            <div id="userspaceContent"><Outlet /></div>
            </div>
        </main>
    )
}