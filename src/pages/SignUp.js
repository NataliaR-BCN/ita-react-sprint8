import SignUpForm from "../components/SignUpForm/SignUpForm";
import { BgBackContent, BackContentShadow } from "../styles/styles";


const SignUp = () => 
    <BgBackContent >
        <BackContentShadow> 
           <SignUpForm />
        </BackContentShadow>
    </BgBackContent> ;


export default SignUp;