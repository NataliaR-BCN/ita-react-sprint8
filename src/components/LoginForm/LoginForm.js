import { useState, useRef } from "react";
import { TxtHighlighted, CenteredForm, FormInput, FormLabel, FormButton, FormFeedback, TxtLink } from "../../styles/styles";


function LoginForm(props) {

  const accountsCreated = JSON.parse(localStorage.getItem('accounts'));

  const [isCorrect, setIsCorrect] = useState(true);
  const [feedbackTxt, setFeedbackTxt] = useState("");

  const userEmail = useRef();
  const userPwd = useRef();

  function validateUser(e) {
    e.preventDefault();

    const accountLogginIn = accountsCreated.filter(account =>
                            account.userEmail === userEmail.current.value &&
                            account.userPwd === userPwd.current.value);

    if (accountLogginIn.length > 0) {
      props.handleIsAuthenticated();
      props.handleUserLoggedIn(accountLogginIn[0].userEmail);
      
      //Nivell 1 - Exercici 6: ->
      console.log("User logged in successfully with account:", accountLogginIn[0].userEmail);
    } else {
      setFeedbackTxt("Failed to log in. Please, try again.");
      setIsCorrect(false);
    }
  }

  const logout = () => {
    props.handleIsAuthenticated();
    props.handleUserLoggedIn('');
    //Nivell 1 - Exercici 6: ->
    console.log("The user logged out");
  }


  return (
    <>
      {!props.isAuthenticated ?  
        <>   
          <TxtHighlighted>You have to be logged in to see the information!</TxtHighlighted>
          <h2>Please, log in to your account:</h2> 

            <CenteredForm onSubmit={validateUser}>
              <FormLabel htmlFor="userEmail">ENTER YOUR EMAIL ADDRESS</FormLabel>
              <FormInput placeholder="Email Address" ref={userEmail} id="userEmail" type="email" isCorrect={isCorrect} />
      
              <FormLabel htmlFor="userPwd">ENTER YOUR PASSWORD</FormLabel>
              <FormInput placeholder="Password" ref={userPwd} id="userPwd" type="password" isCorrect={isCorrect} />
          
              <FormButton type="submit">Continue</FormButton>
            </CenteredForm>
        
            <FormFeedback isCorrect={isCorrect}>{feedbackTxt}</FormFeedback>
        
            <p>Don't have an account yet? Then, create your own: <TxtLink to="/signup">Sign up</TxtLink></p>
        </> :      
        <>
          <TxtHighlighted>You are successfully logged in!</TxtHighlighted>
          <br/><br/>
          <h2>Your user is {props.userLoggedIn}</h2>
          <p>You are now authorized to visit the <TxtLink to="/starships">Starships</TxtLink> section.</p>
          <br/><br/><br/><br/>
          <CenteredForm>
            <FormFeedback isCorrect={true}>Do you want to log out?</FormFeedback>
            <FormButton onClick={logout}>Log out</FormButton>
          </CenteredForm>
        </>
      }
    </>
  )
};

export default LoginForm;