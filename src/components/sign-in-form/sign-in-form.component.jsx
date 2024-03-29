import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithemailandPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // eslint-disable-next-line no-unused-vars
            const {user} = await signInAuthUserWithemailandPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('invalid password');
                    break;
                case 'auth/user-not-found':
                    alert('user not found');
                    break;
                default:
                    alert('Encountered an error while Authenticating user', error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In using Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Continue with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;