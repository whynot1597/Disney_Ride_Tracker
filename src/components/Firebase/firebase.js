import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCLsfpFpk2e2V-eDHuGfBbkAFuKHjzlJZI",
    authDomain: "disney-ride-tracker.firebaseapp.com",
    databaseURL: "https://disney-ride-tracker.firebaseio.com",
    projectId: "disney-ride-tracker",
    storageBucket: "disney-ride-tracker.appspot.com",
    messagingSenderId: "536005158115",
    appId: "1:536005158115:web:8d32ae833951cfe07fd1d6",
    measurementId: "G-JY2KGR8MYF"
}

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
  
  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  
  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  
  users = () => this.db.ref('users');
}

export default Firebase