import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>{user.email}</h3>
        </div>
    );
};

export default Products;