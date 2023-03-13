import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn  = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser} >Sign in with google</button>
        </div>
    );
}

export default SignIn;