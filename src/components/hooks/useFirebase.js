import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizationAuth from "../Firebase/firebase.init";





// firebase initial auth 
initilizationAuth()
// firebase auth 
const auth = getAuth();

const useFirebase = () => {
    const [users, setUsers] = useState({})
        // custom user create account 
    const createUser = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    updateProfile(auth.currentUser, {
        displayName: displayName
    })
    .then(() => {

    })
    setUsers(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }

    // user login 
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user;
    console.log(user)
    setUsers(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            } else {

            }
          });
      }, [users])

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
        users
    }

}

export default useFirebase;