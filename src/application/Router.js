import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Starships from "../pages/Starships";
import StarshipInfo from "../pages/StarshipInfo";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = (props) => 
    <BrowserRouter>
        <Header isAuthenticated = {props.isAuthenticated} />
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path='/starships'> 
                <Route index element = {<Starships isAuthenticated = {props.isAuthenticated} />} />
                <Route path=":id" element = {<StarshipInfo isAuthenticated = {props.isAuthenticated} />} />
            </Route>
            <Route path="/Login" element = {<Login isAuthenticated = {props.isAuthenticated}
                                                handleIsAuthenticated = {props.handleIsAuthenticated} handleUserLoggedIn = {props.handleUserLoggedIn} 
                                                userLoggedIn = {props.userLoggedIn} />} />
            <Route path="/signup" element = {<SignUp/>} />
            <Route path="*" element = {<div>Error 404: Page not found :/</div> } />
        </Routes>
    </BrowserRouter>
;

export default Router;    

