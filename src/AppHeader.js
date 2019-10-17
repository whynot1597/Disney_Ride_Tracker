import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './AppHeader.css';
const {
  user,
  signOut,
  signInWithGoogle,
} = this.props;
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Note how functional components that don’t have additional logic simply return their markup.
const AppHeader = () => (

  <div className="AppHeader">
          {
            user
              ? <p>Hello, {user.displayName}</p> //Go to Home.js
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
  </div>
)

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AppHeader);
