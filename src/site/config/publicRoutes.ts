import { About, Home, Partners, Reservation, Service } from "@site/pages";
import type { AppRoute } from "../../types/AppRoute";



export const publicRoutes: AppRoute[] = [
    {
        path: "/",
        label: "Home",
        component: Home,
    },
    {
        path: "/about",
        label: "Abou me",
        component: About,
    },
    {
        path: "/partners",
        label: "Partners",
        component: Partners,
    },
    {
        path: "/service",
        label: "service",
        component: Service,
    },
    {
        path: "/reservation",
        label: "reservation",
        component: Reservation,
    },
]