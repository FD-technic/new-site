import Dashboard from "@site/pages/Dashboard";
import type { AppRoute } from "../../types/AppRoute";
import { Home } from "@site/pages";



export const adminRoutes: AppRoute[] = [
    {
        path: "/",
        label: "Home",
        component: Home,
    },
    {
        path: "/admin",
        label: "Dashboard",
        component: Dashboard,
    },
    
]