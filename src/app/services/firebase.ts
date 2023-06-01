import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSASSING_SEND_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

// Initialize Firebase
const firebaseApp = initializeApp(config)
const db = getFirestore(firebaseApp)
export { db }
