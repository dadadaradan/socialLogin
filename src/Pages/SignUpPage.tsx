import React, {useState} from 'react';
import { Auth } from 'aws-amplify';

const initialFormData = {
    username: '',
    password: ''
}

type Props = {
    onChangeViewMode(): void;
}

const SignUpPage: React.FC<Props> = ({onChangeViewMode}) => {

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange=  (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((formData) => ({...formData, [e.target.name]: e.target.value}));
    };

    console.log(Auth.Credentials);

    const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const { username, password } = formData;

        const response = await Auth.signUp({username, password, attributes: {
            email: username
        }});
        
        onChangeViewMode?.();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='email'>Email</label>
                <input name='username' value={formData.username} onChange={handleInputChange}  />
                <label htmlFor='password'>Password</label>
                <input name='password' value={formData.password} onChange={handleInputChange}  type='password' />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpPage;