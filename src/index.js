import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './routes/login.route';

// Assos Pages
import AssoController from './routes/asso.route';
import AssoDetails from './routes/asso/details.page';
import AssoEvents from './routes/asso/events.page';
import AssoMembers from './routes/asso/members.page';
import AssoNews from './routes/asso/news.page';

// Admin Pages
import AdminController from './routes/admin.route';
import AdminAssos from './routes/admin/assos.page';
import AdminPromotions from './routes/admin/promotions.page';
import AdminUsers from './routes/admin/users.page';

// User Pages
import UserController from './routes/user.route';
import UserLinks from './routes/user/links.page';
import UserAssoDetails from './routes/user/asso/details.page';
import UserDashboard from './routes/user/dashboard.page';
import UserCalendar from './routes/user/calendar.page';
import UserNews from './routes/user/news.page';
import UserAsso from './routes/user/asso/list.page';
import UserMembership from './routes/user/asso/membership.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="strass" element={<AssoController />}>
            <Route path="details" element={<AssoDetails />} />
            <Route path="events" element={<AssoEvents />} />
            <Route path="members" element={<AssoMembers />} />
            <Route path="news" element={<AssoNews />} />
          </Route>
          <Route path="user" element={<UserController />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="calendar" element={<UserCalendar />} />
            <Route path="my-assos" element={<UserMembership />} />
            <Route path="news" element={<UserNews />} />
            <Route path="list-assos" element={<UserAsso />} />
            <Route path="links" element={<UserLinks />} />
            <Route path="asso" element={<Outlet />}>
              <Route path=":assoId" element={<UserAssoDetails />} />
            </Route>
          </Route>
          <Route path="admin" element={<AdminController />} >
            <Route path="users" element={<AdminUsers />} />
            <Route path="assos" element={<AdminAssos />} />
            <Route path="promos" element={<AdminPromotions />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);