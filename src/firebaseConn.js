import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAQ_ATyk0_lhsgUwviLR3ICkvcZJh3sB1M",
    authDomain: "fir-fb0a6.firebaseapp.com",
    projectId: "fir-fb0a6",
    storageBucket: "fir-fb0a6.appspot.com",
    messagingSenderId: "710143189998",
    appId: "1:710143189998:web:8be1b954e45703119664ff",
    databseURL:"https://fir-fb0a6-default-rtdb.firebaseio.com/"};

  export const app = initializeApp(firebaseConfig);