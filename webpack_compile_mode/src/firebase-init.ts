import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
/**
* これはわかりきった話だが、環境変数直置きはよろしくないので修正しよう。
*/
const firebaseConfig = {
    apiKey: "AIzaSyDbre0EtcsZvohXl6pP2uuc5eC-5nE1kpo",
    authDomain: "annoyingadvertisements-63b44.firebaseapp.com",
    projectId: "annoyingadvertisements-63b44",
    storageBucket: "annoyingadvertisements-63b44.appspot.com",
    messagingSenderId: "658829160909",
    appId: "1:658829160909:web:9099f8cfcebb85494e5484",
    measurementId: "G-T9E6HECD6N"
};


const app = initializeApp(firebaseConfig);
export const firestore  = getFirestore(app)
