import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'xxxxx',
  authDomain: 'xxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxx.firebaseio.com',
  projectId: 'xxxxx',
  storageBucket: '',
  messagingSenderId: 'xxxxx'
}

firebase.initializeApp(config)

export default firebase
