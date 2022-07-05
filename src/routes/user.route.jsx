import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AuthService from "../services/auth.service";
import Title from "../components/title.component";
import '../style/userspace.css'
import Tab from "../components/tab.component";
import SearchBar from "../components/search.component";

import { MdHome, MdArticle, MdGroups, MdCalendarToday, MdOutlineList, MdOutlineLanguage, MdAdminPanelSettings, MdAccountCircle } from 'react-icons/md'

export default function UserController() {
    const [user, setUser] = useState({})
    const [selectedTab, setSelectedTab] = useState("accueil")

    let navigate = useNavigate()

    const handleTabClick = (tab) => {
        setSelectedTab(tab)
    }

    useEffect(() => {
        let user = AuthService.getCurrentUser();
        setUser(user);
    },[])
    return (
        <main id="userspaceContainer">
            <div id="userspaceHeader">
                <Title />
                <SearchBar containerStyle={{position:"relative", left: 100}} placeholder="Recherchez l'intranet..."/>
                <div id="avatarList">
                    <MdOutlineList style={{cursor: "pointer"}} size="30px" />
                    {user.isAdmin && <MdAdminPanelSettings size="30px" style={{cursor: "pointer"}} onClick={() => navigate('/admin/users')} />}
                    <MdAccountCircle style={{cursor: "pointer"}} size="55px" />
                </div>
            </div>
            <div id="userspaceNavigation">
                <Tab text="Accueil" icon={<MdHome />} onClick={() => handleTabClick("accueil")} active={selectedTab == "accueil" ? true : false}/>
                <Tab text="Actualités" icon={<MdArticle />} onClick={() => handleTabClick("news")} active={selectedTab == "news" ? true : false}/>
                <Tab text="Strass" icon={<MdGroups />} onClick={() => handleTabClick("asso")} active={selectedTab == "asso" ? true : false}/>
                <Tab text="Calendrier" icon={<MdCalendarToday />} onClick={() => handleTabClick("calendar")} active={selectedTab == "calendar" ? true : false}/>
                <Tab text="Liens" icon={<MdOutlineLanguage />} onClick={() => handleTabClick("link")} active={selectedTab == "link" ? true : false}/>
            </div>
            <div id="userspaceContent"><Outlet /></div>
        </main>
    )
}