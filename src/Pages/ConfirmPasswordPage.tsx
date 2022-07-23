import React, { useContext, useState } from 'react';
import { Auth } from 'aws-amplify';
import { UserContext } from '../context/UserContext';

type Props = {
    onViewModeChange(): void;
}

const ConfirmPasswordPage: React.FC<Props> = ({onViewModeChange}) => {
    const {user} = useContext(UserContext);
    console.log(user);
    const [inputValue, setInputValue] = useState('');

    const handleConfirmEmail = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const response = await Auth.confirmSignUp('vacaridan@yahoo.com',inputValue);


        console.log(response);
        onViewModeChange?.();
    }

    return (
        <div>
            <form onSubmit={handleConfirmEmail} >
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input name='confirmPassword' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default ConfirmPasswordPage;