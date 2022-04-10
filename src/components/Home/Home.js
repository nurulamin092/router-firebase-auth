import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Home page</h2>
            <h3>{user ? user.displayName : 'No body'}</h3>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;