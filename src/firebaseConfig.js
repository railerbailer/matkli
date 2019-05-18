import {climateData} from "./data/foodClimate.js";
// import {foodNutrition} from "./data/foodNutrition.js";
const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC_8Y4V20Vnpk9e7nVx_enpD5Z69yJ6J3w",
  authDomain: "matkli.firebaseapp.com",
  databaseURL: "https://matkli.firebaseio.com",
  projectId: "matkli",
  storageBucket: "matkli.appspot.com",
  messagingSenderId: "986922063422",
  appId: "1:986922063422:web:4acfac35bb47bdaa"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// console.log(foodNutrition)
export const addData = () => {
  db.collection("climateData")
    .doc("lol")
    .set({
      ...climateData["Öppna listan – ett utdrag från RISE klimatdatabas för livsmedel v 1.5"]
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};
export const getData = () => {
  const climateDataInFirestore = db.collection("climateData").doc();
  climateDataInFirestore
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
