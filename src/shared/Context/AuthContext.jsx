import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

const AuthContext = createContext();

// Make useAuth
export const useAuth = () => useContext(AuthContext);

// Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [admin, setAdmin] = useState();
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  // sign up using email password
  const signUp = (displayName, email, password, history) => {
    // return auth.createUserWithEmailAndPassword(email, password);
    // console.log(displayName, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName };
        setCurrentUser(newUser);
        updateProfile(auth.currentUser, {
          displayName,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })

      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // User Logout
  const logout = () => {
    return auth.signOut();
  };

  // User login using email password
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // google SignUp
  const googleSignUp = () => {
    return auth.signInWithPopup(googleProvider);
  };

  // forget Password
  const forgetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // Get Current Login user
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  // Get admin
  useEffect(() => {
    try {
      setLoading(true);
      if (currentUser.email) {
        axios
          .get(
            `https://boiling-badlands-96357.herokuapp.com/user/${currentUser.email}`
          )
          .then((result) => {
            setLoading(true);
            setAdmin(result.data.admin);
            setLoading(false);
          });
      }
    } catch (error) {}
  }, [currentUser?.email]);

  // Context values
  const value = {
    signUp,
    authError,
    currentUser,
    admin,
    loading,
    logout,
    login,
    googleSignUp,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
