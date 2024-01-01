import './App.css';
import SignIn from './components/SignIn.js';
// import {getDatabase,ref,set} from 'firebase/database';
import SignUp from './components/SignUp.js';
import { Box, Typography } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
]);

function App() {

  return (
<RouterProvider router={router} />
  );
}

export default App;
