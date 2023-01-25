import LoginForm from "../components/LoginForm/LoginForm";
import { BgBackContent, BackContentShadow } from "../styles/styles";


const Login = (props) => { 

    return ( 
        <BgBackContent>
             <BackContentShadow> 
             <LoginForm handleIsAuthenticated = {props.handleIsAuthenticated}  
                        isAuthenticated = {props.isAuthenticated} 
                        handleUserLoggedIn = {props.handleUserLoggedIn} 
                        userLoggedIn = {props.userLoggedIn} />
            </BackContentShadow>
        </BgBackContent> 
    )
};


export default Login;

