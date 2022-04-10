import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});
    useEffect(() => {

    }, []);
    const singInWithGoogle = () => {
        console.log('signing in soon');
    }
    // return [user, setUser];
    return { user, singInWithGoogle }
}
export default useFirebase;