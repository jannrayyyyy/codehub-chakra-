// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCr5CR_MSluFjJWLjtYgHw82ZUL5CIYh2g',
  authDomain: 'codehub-4951e.firebaseapp.com',
  projectId: 'codehub-4951e',
  storageBucket: 'codehub-4951e.appspot.com',
  messagingSenderId: '962206035343',
  appId: '1:962206035343:web:7c828a375d8db40c1eaffa',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
