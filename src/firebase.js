  import firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrjX-LpQEhzFQtxcSReksfeG5kryLzMHg",
    authDomain: "vue-shop-2d38f.firebaseapp.com",
    databaseURL: "https://vue-shop-2d38f.firebaseio.com",
    projectId: "vue-shop-2d38f",
    storageBucket: "vue-shop-2d38f.appspot.com",
    messagingSenderId: "803356185095"
  };
  export const fb = firebase.initializeApp(config);