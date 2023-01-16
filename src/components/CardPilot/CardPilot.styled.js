import styled from "styled-components";


export const CardLayout = styled.div`
    margin: 1rem auto;
    padding: 0.5rem 1rem 1rem 1rem;
    width: 80%;
    min-width: 37rem;
    border: 1px solid #ccc;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    gap: 1.8rem;

        @media (max-width: 768px) {
            width: 90%;
            min-width: 30rem;
            padding: 0.8rem 1rem 1.5rem 1.2rem;
        }

        @media (max-width: 620px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 0;
            gap: 0.5rem;
            padding: 1rem 1rem 0.5rem 1.2rem;
        }

`;

export const PilotImg = styled.div`
	background-image: url(${(props) => props.bgShowImg });
    background-size: cover;
    background-position: top center;
    height: 100%;
    width: 100%;
    margin: 0.5rem 0;
    align-self: center;
    border-radius: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom: none;
    border-right: 1px solid #106BE0;
        
        @media (max-width: 620px) {
            height: 28rem;
            border-bottom-left-radius: 0;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border-right: none;
            border-bottom: 1px solid #106BE0;
        }

`;


export const CardImg = styled.div`
    text-align: left;
    width: 55%;
    min-width: 15rem;
    padding: 0 0.5rem 0.5rem 0rem;
   
        @media (max-width: 768px) {
            width: 90%;
            min-width: 0;
            padding: 0;
        }
    
`;


export const CardBox = styled.div`
    text-align: left;
    width: 45%;
    min-width: 15rem;
    padding: 0 0.5rem 0.5rem 0rem;
   
        @media (max-width: 768px) {
            width: 90%;
            min-width: 0;
        }
    
`;