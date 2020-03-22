import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD6_ZJewr-874PhZLCUFK7ZGHlrcIfO5Q0",
  authDomain: "todoist-react-b1f83.firebaseapp.com",
  databaseURL: "https://todoist-react-b1f83.firebaseio.com",
  projectId: "todoist-react-b1f83",
  storageBucket: "todoist-react-b1f83.appspot.com",
  messagingSenderId: "234664665926",
  appId: "1:234664665926:web:edfab1e360a10ab71d3b47"
});

export { firebaseConfig as firebase };
