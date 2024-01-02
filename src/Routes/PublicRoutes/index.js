import { Navigate } from "react-router-dom";
// import { getCookie } from "services/session/cookies";

export const PublicRoute = ({ component: Component, layout: Layout, isFooter = true , showHeader = true }) => {
    // if (!getCookie("accessToken")) {
    return <Layout isFooter={isFooter} showHeader={showHeader} >
        <Component />
    </Layout>
    // }
    // return <Navigate to="/" />;
}
