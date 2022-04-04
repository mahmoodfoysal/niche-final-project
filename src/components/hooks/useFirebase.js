import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizationAuth from "../Firebase/firebase.init";





// firebase initial auth 
initilizationAuth()
// firebase auth 
const auth = getAuth();

// google auth provider 
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [admin, setAdmin] = useState(false)
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');



  // custom user create account 
  const createUser = (displayName, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        history.replace('/')
        setAuthError('');
        saveUser(displayName, email, 'PUT')
        updateProfile(auth.currentUser, {
          displayName: displayName
        })
          .then(() => {
          })
      })
      .catch((error) => {
        setAuthError(error.message)
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
        console.log(user);
        setUsers(user);
        setAuthError('');

      })
      .catch((error) => {
        setAuthError(error.message)
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
        saveUser(user.displayName, user.email, 'PUT');
        console.log(user);
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

  // admin user get 
  useEffect(() => {
    fetch(`https://vast-lake-15285.herokuapp.com/users/${users?.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [users.email])

  //   logout code here 
  const logOut = () => {
    signOut(auth).then(() => {
      setUsers('')
    }).catch((error) => {
      // An error happened.
    });

  }

  // save user in database 
  const saveUser = (displayName, email, method) => {
    const user = {displayName, email};
    fetch('https://vast-lake-15285.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then()
  }

  return {
    createUser,
    admin,
    logOut,
    userLogin,
    googleSignIn,
    users,
    setIsLoading,
    isLoading,
    authError
  }

}

export default useFirebase;