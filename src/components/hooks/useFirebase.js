import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { useEffect, useState } from "react";
import initilizationAuth from "../Firebase/firebase.init";





// firebase initial auth 
initilizationAuth()
// firebase auth 
const auth = getAuth();

// google auth provider 
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)

        // custom user create account 
    const createUser = (displayName, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    updateProfile(auth.currentUser, {
        displayName: displayName
    })
    .then(() => {

    })
    setUsers(user);
    history.replace('/')

    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(() => setIsLoading(false));

    }

    // user login 
    const userLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
    const user = result.user;
    console.log(user)
    setUsers(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(() => setIsLoading(false));
    }

    // google provider 
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    const destination = location?.state?.from || '/';
    history.replace(destination);
    setUsers(user);
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }).finally(() => setIsLoading(false));

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({})
            }
            setIsLoading(false);
          });
          return () => unSubscribe;
      }, [])

    //   logout code here 
      const logOut = () => {
        signOut(auth).then(() => {
            setUsers('')
          }).catch((error) => {
            // An error happened.
          });
          
      }

    return {
        createUser,
        logOut,
        userLogin,
        googleSignIn,
        users,
        isLoading
    }

}

export default useFirebase;