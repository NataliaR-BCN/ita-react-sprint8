import { TxtNormal, TxtLink } from "../../styles/styles";
import welcomeImg from "../../assets/img/welcome.png";


const Intro = () => <>

    <p><img src={welcomeImg} alt="Welcome" /></p>

    <h1>... to the Star Wars Starships website</h1>

    <TxtNormal>You are in the right place to enjoy <br />
       a lot of information about <br /> 
       <TxtLink to="/starships">Star Wars Starships </TxtLink>
    </TxtNormal>

    <h5>&copy; Web developed with React</h5>

</>;


export default Intro;