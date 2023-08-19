import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
   apiKey: "AIzaSyD1r_uHSXXpo-IKvIeQDFDD34yq44m5eD4",
   authDomain: "melicore.firebaseapp.com",
   projectId: "melicore",
   storageBucket: "melicore.appspot.com",
   messagingSenderId: "102028418399",
   appId: "1:102028418399:web:a9ae8ae568d50b4edd6aea",
   measurementId: "G-1CC422D8FJ"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const huDataCollectionRef = collection(db, "huData")
export async function getHuData() {
   const querySnapshot = await getDocs(huDataCollectionRef)
   const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
   }))

   return dataArr[0]
}

const enDataCollectionRef = collection(db, "enData")
export async function getEnData() {
   const querySnapshot = await getDocs(enDataCollectionRef)
   const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
   }))

   return dataArr[0]
}