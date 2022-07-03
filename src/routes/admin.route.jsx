import { Outlet } from "react-router-dom";

export default function AdminController() {
    return (
        <main>
            <h2>Admin App</h2>
            <Outlet />
        </main>
    )
}