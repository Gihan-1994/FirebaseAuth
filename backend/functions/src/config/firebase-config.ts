import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";


export abstract class FirebaseConfig {
    public static webFirebaseConfig:{apiKey: string, authDomain: string, projectId: string , messagingSenderId: string, appId: string} = {
        apiKey: "AIzaSyDj95U7PfpWm6QfVR0hGimyqLrDa8IHrDY",
        authDomain: "fir-authentication-efa08.firebaseapp.com",
        projectId: "fir-authentication-efa08",
        //storageBucket: "http://127.0.0.1:4000/storage/fir-authentication-efa08.firebasestorage.app",
        messagingSenderId: "108247046362",
        appId: "1:108247046362:web:606dab3aeddc10ee2a6de3"

    }
}
export const firebaseApp = initializeApp(FirebaseConfig.webFirebaseConfig);


export const storage = getStorage(firebaseApp, "gs://fir-authentication-efa08.appspot.com");
const { connectStorageEmulator } = require("firebase/storage");
connectStorageEmulator(storage, "localhost", 9199);