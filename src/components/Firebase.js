// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDvDjsSw1vPU1HpOf_00PjOIAC_QrgL2Zc",
	authDomain: "pttkhttt-21eba.firebaseapp.com",
	projectId: "pttkhttt-21eba",
	storageBucket: "pttkhttt-21eba.appspot.com",
	messagingSenderId: "260962753476",
	appId: "1:260962753476:web:41202612d645b5742da291",
	measurementId: "G-32CGDW0R1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();
