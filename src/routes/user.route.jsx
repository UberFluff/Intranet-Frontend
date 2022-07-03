import { Outlet } from "react-router-dom";

export default function UserController() {
    return (
        <main>
            <h2>User App</h2>
            <Outlet />
        </main>
    )
}