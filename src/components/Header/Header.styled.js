import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderRow = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    background-color: #0A0B0B;

        @media (max-width: 476px) {
            flex-direction: column;
            gap: 0.2rem;
        }
`;


export const Invisible = styled.div`
    width: 192px;
    visibility: hidden;
`;


export const Logo = styled.img`
    margin: 2rem 0;
    max-height: 6rem;
    max-width: 255px;
    align-self: center;
`;


export const AccountsNavLinks = styled.div`
    margin: 0 1rem 0 0;
    width: 12rem;
    display: flex;
    align-items: center;

        @media (max-width: 768px) {
            margin: 1rem 1rem 0 0;
            flex-direction: column;
        }

        @media (max-width: 476px) {
            margin: 0rem auto 1rem auto;
            flex-direction: row;
        }
`;


export const InvisibleText = styled.span`
    color: #6d6d6d;

        @media (min-width: 476px) and (max-width: 768px) {
           display: none;
        }
`;


export const StyledNavLinkAccount = styled(NavLink)`
    color: #AAAAAA;
    padding: 1rem 0.8rem;
    border-bottom: 2px solid transparent;

        &:hover {
            color: #FEFEFE;
            text-shadow: 0 0 3px #AAAAAA, 0 0 5px #FEFEFE;
        }

        &.active {
            color: #FEFEFE;
            font-weight: bold;
            border-bottom-color: #106BE0;
        }
`;


export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    border: 1px #6d6d6d;
    border-style: solid none;
    background-color: #0A0B0B;

`;


export const StyledNavLinkMenu = styled(NavLink)`
    color: #AAAAAA;
    padding: 1rem;
    border: 1px #6d6d6d;
    border-style: none solid;

        &:hover {
            color: #FEFEFE;
            text-shadow: 0 0 3px #AAAAAA, 0 0 5px #FEFEFE;
        }

        &.active {
            color: #FEFEFE;
            font-weight: bold;
            border-bottom: 2px solid #106BE0;
    
        }
`;

