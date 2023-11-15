import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

styled
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({children}) {

    const navigate = useNavigate();

    //1. Load the authenticated user 
    const {isLoading, isAuthenticated} = useUser();

    //2. Redirect to login page if user is not authenticated
    
    useEffect(function() {
        if(!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate]);

    //3. While loading, show a spinner
    if(isLoading) 
        return (
            <FullPage>
                <Spinner />
            </FullPage>
    );

    //4. If authenticated, render the app

  if(isAuthenticated) return children;
}

export default ProtectedRoute;
