import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey:process.env. ApiKey,
	authDomain:process.env.AuthDomain,
	projectId:process.env. ProjectId,
	storageBucket:process.env. StorageBucket,
	messagingSenderId:process.env.MessagingSenderId,
	appId:process.env.AppId,
	measurementId:process.env.MeasurementId,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
