import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";


export const BgBackContent = styled.div`
    padding: 3rem;
    height: calc(100vh - 19.5rem);
    display: flex;
    justify-content: center;
`;


export const BackContent = styled.div`
    margin: auto;
    padding: 3.5rem 2rem;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 50%;
    background-color: rgba(21, 21, 21, 0.9);
    border-radius: 15px;

        @media (max-width: 600px) {
            width: 96%;
        }
        
`;


export const BackContentShadow = styled(BackContent)`
    padding: 2.5rem;
    text-align: center;
    box-shadow: 1px 1px 15px rgba(254, 254, 254, 0.4),
                -1px -1px 15px rgba(254, 254, 254, 0.4),
                1px 1px 60px rgba(170, 170, 170, 0.4);
`;


export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;


export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 90%;

`;


export const HalfDiv = styled.div`
    width: 50%;
`;


export const CenteredForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;

        @media (max-width: 600px) {
            width: 90%;
        }
`;


export const FormInput = styled.input`
    background-color: #333333;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 95%;
    height: 1.5rem;
    border: 1px solid;
    border-color: ${({isCorrect}) => isCorrect ? '#D8C907' : '#880000'};
    border-radius: 4px;
    align-self: center;

`;


export const FormLabel = styled.label`
    font-size: 1.5rem;
    margin: 0.8rem 0 0.3rem 0;
    color: #D8C907;

`;


export const FormFeedback = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    color: ${({isCorrect}) => isCorrect ? '#D8C907' : '#880000'};

`;


export const FormButton = styled.button`
    background-color: #333333;
    color: #FEFEFE;
    font-size: 1rem;
    margin: 1.5rem 0;
    padding: 0.8rem;
    width: 100%;
    border: none;
    border-radius: 4px;

        &:hover {
            background-color: #106BE0;
        }

        &.active {
            background-color: #106BE0;
        }

`;


export const TxtLink = styled(Link)`
    color: #AAAAAA;   
    font-weight: 700;
    text-decoration: underline;
    
        &:hover {
            color: #FEFEFE;
            text-shadow: 0 0 3px #AAAAAA, 0 0 5px #FEFEFE;
        }

`;


export const TxtHighlighted = styled.span`
    color: #FEFEFE;   
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0.5rem 0;
`;


export const TxtNormal = styled.p`
  line-height: 1.5rem;
`;


export const TxtName = styled.p`
    color: #FEFEFE;   
`;


export const TxtWhite = styled.span`
    color: #FEFEFE;  
`;


export const TxtDescription = styled.span`
    color: #AAAAAA;   
`;


export const ListTxt = styled.span`
    line-height: 1.3rem;
`;


const blink = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1};
`; 

export const LoadingTxt = styled.span`
    animation-name: ${blink};
    animation-duration: 1.5s;
    animation-delay: 0.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;


export const Message = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;


export const CardEmpty = styled.div`
    margin: 1rem auto;
    padding: 2rem 3rem;
    border: 1px solid #ccc;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    text-align: center;

        @media (max-width: 768px) {
            padding: 1rem 2rem;
        }

`;