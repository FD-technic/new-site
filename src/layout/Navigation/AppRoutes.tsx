import { Routes, Route } from "react-router-dom";

import { NotFound } from "@site/pages";
import { publicRoutes } from "@site/config/publicRoutes";
import { adminRoutes } from "@site/config/adminRoutes";

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

            {adminRoutes.map(({ path, component: Component}) => (
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