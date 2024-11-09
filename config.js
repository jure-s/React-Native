import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCI2oGmYXoDBRLeKNT29reZq62xq-VGHz8",
  authDomain: "react-native-c34b8.firebaseapp.com",
  databaseURL: "https://react-native-c34b8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-c34b8",
  storageBucket: "gs://react-native-c34b8.appspot.com",
  messagingSenderId: "877051627485",
  appId: "1:877051627485:web:a90d0da7c6b1ae92e89834",
  measurementId: "G-Z5W3H7KFLE",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
