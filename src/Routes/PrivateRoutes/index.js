import { Navigate } from "react-router-dom";
import { getCookie } from "services/session/cookies";

const useAuth = () => {
  const accessToken = getCookie("accessToken");
  return accessToken ? true : false;
};

export const PrivateRoute = ({ component: Component, layout: Layout, isFooter = true, navbar = false }) => {
  const isAuthenticated = useAuth();
  // debugger
  if (true) {
    return (
      <Layout isFooter={isFooter} navbar={navbar} >
        <Component /> 
      </Layout>
    );
  }
  return <Navigate to="/" />;
};
