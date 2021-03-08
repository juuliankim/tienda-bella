import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyASfXfursWbdxpCiAJtYieaTXKRPfHJGTc",
    authDomain: "proyecto-final-react-js.firebaseapp.com",
    projectId: "proyecto-final-react-js",
    storageBucket: "proyecto-final-react-js.appspot.com",
    messagingSenderId: "647626499570",
    appId: "1:647626499570:web:04ec5a3b50469c09a4376b",
    measurementId: "G-PCLR8NYLHR"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}