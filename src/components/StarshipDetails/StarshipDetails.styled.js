import styled from "styled-components";

export const Fitxa = styled.div`

    margin: 2rem 0;
    padding: 3rem 1.2rem;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(21, 21, 21, 0.9);
    border-radius: 15px;

        @media (max-width: 600px) {
            width: 96%;
        }
`;


export const ShipImg = styled.img`
    width: 90%;
    border-bottom: 1px solid  #106BE0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

`;

 export const CenteredTitle = styled.h1`
    margin-top: 2.5rem;
    text-align: center;
    color: #FEFEFE; 
    
`;

export const MoreInfo = styled.div`
    border-bottom: 1px solid  #106BE0;
    margin: 1rem 0 0.2rem 0;
    padding: 1rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`;