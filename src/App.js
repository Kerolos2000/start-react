import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


function App() {
  let routes = createBrowserRouter([
    {
      path:"", element :<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:"/portfolio" , element:<Portfolio/>},
        {path:"/about" , element:<About/>},
        {path:"/contact" , element:<Contact/>},
      ]
    }
  ]) 
  return (<RouterProvider router={routes}></RouterProvider>);
}

export default App;
