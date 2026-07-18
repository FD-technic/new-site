import type { ComponentType } from "react";

export type AppRoute = {
    path: string;
    label: string;
    component: ComponentType;
};