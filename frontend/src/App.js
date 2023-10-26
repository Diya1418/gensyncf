import Nav from "./components/navbar/nav";
import Login from "./components/logReg/login/login";
import Register from "./components/logReg/Register/register";
import Notices from "./components/Notices/notices";
import Events from "./components/Events/events";
import Alumni from "./components/Alumni/alumni";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import Axios from "axios"; //used to send and rev=ceive req from backend
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { useState,useEffect } from "react";

function App() {

  const [data,setData]=useState("")

  const getData= async()=>{
    const response = await Axios.get("http://localhost:4000/getData");
    setData(response.data);
  }
  useEffect(()=>{
    getData()
  },[]);

  const router = createBrowserRouter([
    {path:'/', element:<Nav/>, children:[
      {index:true , element:<Home/>},
      {path:'/alumni', element:<Alumni/>},
      {path:'/login', element:<Login/>},
      {path:'/Register', element:<Register/>},
      {path:'/notices', element:<Notices/>},
      {path:'/events', element:<Events/>},
      {path:'/profile', element:<Profile/>},

    ],
  },
  ]);

  return (
    <>
     <RouterProvider router={router}/>
       {console.log(data)} 
    </>
  );
}

export default App;
