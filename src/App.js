import './App.css';
import LoginScreen from './LoginScreen/LoginScreen';
import RegistrationScreen from './RegistrationScreen/RegistrationScreen';
import Layout from './Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from './Movies/Movies';
import Card from './Movies/Card';
import Details from './Details/Details';
import Pagination from './Pagination/Pagination';
import Favuorite from './Favourites/Favourites';
import {  LanguageProvider } from './LanguageContext/LanguageContext';


let Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "login", element: < LoginScreen/> },
      { path:"register", element: <RegistrationScreen /> },
      { path:"/detail/:id", element: <Details /> },
      { path:"/paginate", element: <Pagination /> },
      { index: true, element: <Movies /> },
      { path:"/favourite", element: <Favuorite /> },

      // { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  
  return <>

<LanguageProvider>
<RouterProvider router={Routers} />;
</LanguageProvider>
   
 
  </>
}

export default App;




