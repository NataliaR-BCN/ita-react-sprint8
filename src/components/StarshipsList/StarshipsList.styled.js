import styled from "styled-components";

export const ShipItem = styled.ul`
    list-style: none;
    background-color: #151515;
    color: #AAAAAA;
    margin: 1rem auto;
    padding: 1.2rem;
    border-radius: 5px;

        &:hover {
            background-color: #2c2c2c;
            color: #FEFEFE;
        }
`; 

export const ShipItemName = styled.li`    
    height: 1.7rem;
    font-weight: 700;
`;
