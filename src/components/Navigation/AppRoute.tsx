import { Routes, Route } from "react-router-dom";


import { publicRoutes } from "../../site/config/publicRoutes";
import { NotFound } from "@site";

const AppRoutes = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, component: Component}) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}
            

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;