import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Orders = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is order {user.displayName}</h1>
            <h1>This is order {user.email}</h1>
        </div>
    );
};

export default Orders;