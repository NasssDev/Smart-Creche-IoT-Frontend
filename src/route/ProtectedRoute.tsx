import {Navigate, Route} from "react-router-dom";

// @ts-ignore
export const ProtectedRoute = ({ element: Element, ...rest }) => {
    return <Route {...rest} element={sessionStorage.token ? <Element /> : <Navigate to="/sign-in" />} />;
}