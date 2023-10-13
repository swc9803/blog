import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlbqfYaipZmKJzrt3bw_ukGD_U4q_475Y",
  authDomain: "blog-test11.firebaseapp.com",
  projectId: "blog-test11",
  storageBucket: "blog-test11.appspot.com",
  messagingSenderId: "723550974969",
  appId: "1:723550974969:web:513de636ebf64e89fec328",
  measurementId: "G-NZ68JY7HRV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
