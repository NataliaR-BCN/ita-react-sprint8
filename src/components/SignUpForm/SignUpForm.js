import { useState, useRef, useEffect } from "react";
import { TxtHighlighted, CenteredForm, FormInput, FormLabel, FormButton, FormFeedback, TxtLink } from "../../styles/styles";

const SignUpForm = () => {

  const [isCorrect, setIsCorrect] = useState(true);

  const accountForm = useRef();
  const userEmail = useRef();
  const userPwd = useRef();

  const [feedbackTxt, setFeedbackTxt] = useState("");
  const [usersRegistered, setUsersRegistered] = useState(JSON.parse(localStorage.getItem('accounts')) || []);

  useEffect(()=> {
    localStorage.setItem('accounts', JSON.stringify(usersRegistered))
  }, [usersRegistered]);


  function createUser(e) {
    e.preventDefault();
    
    const newUserEmail = userEmail.current.value;
    const newUserPwd = userPwd.current.value;

    if (newUserEmail !== "" && newUserPwd !== "") {
      const newUser = {
        userEmail: newUserEmail,
        userPwd: newUserPwd
      };
      setUsersRegistered(prevUsersRegistered => [...prevUsersRegistered, newUser])
      setIsCorrect(true);
      setFeedbackTxt("Thank you! Your account has been successfully created.");
      //Nivell 1 - Exercici 6: ->
      console.log("Registered user successfully");

      accountForm.current.reset();

    } else {
      setIsCorrect(false);
      setFeedbackTxt("Please, fill in the inputs with your email and password.");
    }
  }


  return ( 

      <>        
        <TxtHighlighted>You need to be registered to enjoy this site!</TxtHighlighted>
        <h2>Please, create your account:</h2> 

        <CenteredForm onSubmit={createUser} ref={accountForm}>
        
            <FormLabel htmlFor="userEmail">ENTER YOUR EMAIL ADDRESS</FormLabel>
            <FormInput placeholder="Email Address" ref={userEmail} id="userEmail" type="email" isCorrect={isCorrect} />
        
            <FormLabel htmlFor="userPwd">ENTER YOUR PASSWORD</FormLabel>
            <FormInput placeholder="Password" ref={userPwd} id="userPwd" type="password" isCorrect={isCorrect} />
       
          <FormButton type="submit">Continue</FormButton>
        </CenteredForm>
        <FormFeedback isCorrect={isCorrect}>{feedbackTxt}</FormFeedback>

        <p>Already registered? Then just <TxtLink to="/Login">Log in</TxtLink></p>
      </>
  )

};

export default SignUpForm;