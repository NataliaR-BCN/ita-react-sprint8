import Intro from '../components/Intro/Intro';
import { BgBackContent , BackContentShadow } from "../styles/styles";


const Home = () => 
    <BgBackContent >
        <BackContentShadow> 
           <Intro />
        </BackContentShadow>
    </BgBackContent> ;


export default Home;