import { HeaderRow, Invisible, Logo, InvisibleText, Navbar, StyledNavLinkMenu, AccountsNavLinks, StyledNavLinkAccount } from "./Header.styled";
import logoSW from "../../assets/img/sw_logo.png";


const Header = (props) => 
    <>
        <HeaderRow>
            <Invisible />
            <Logo src={logoSW} alt="Star Wars logo" /> 
            <AccountsNavLinks>
            {props.isAuthenticated ? 
                <StyledNavLinkAccount to="/Login">LOG OUT</StyledNavLinkAccount> : 
                <><StyledNavLinkAccount to="/Login">LOG IN</StyledNavLinkAccount>
                <InvisibleText>&#47;&#47;</InvisibleText>
                <StyledNavLinkAccount to="/signup">SIGN UP</StyledNavLinkAccount></>
            }
            </AccountsNavLinks>
        </HeaderRow>
        
        <Navbar>
            <StyledNavLinkMenu to="/">HOME</StyledNavLinkMenu>
            <StyledNavLinkMenu to="/starships">STARSHIPS</StyledNavLinkMenu>
        </Navbar>
    </>;

export default Header;