import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./nav.js";
import Hooks from "./Hooks/hooks.js";
import Todo from "./project/Todolist.jsx";
import Car from "./project/cal.jsx";
import Tictac from "./project/tictac.jsx";
import LoginForm from "./aut.js";
import  Email from "./emailpasword"
import Contexthook from "./Hooks/Contexthook.js";
import Database from "./db.js";

function App() {

    const router = createBrowserRouter([
      { path: "/", element: <Navbar /> },
      { path: "/project/Todolist.jsx", element: <Todo /> },
      { path: "/project/cal.jsx", element: <Car /> },
      { path: "/project/fetch.jsx", element: <Hooks /> },
      { path: "/project/tictac.jsx", element: <Tictac /> },
      { path: "/Hooks/Contexthook.js", element: <Contexthook /> },
      { path: "/src/aut.js", element: <LoginForm /> }, 
      { path: "/emailpasword.js", element: <Email /> }, // Corrected route
      { path: "/db.js", element: <Database /> }, // Corrected route
      // Corrected route
      // Corrected route
    ]);
    

  return (
    <>  
      <RouterProvider router={router} />
    

   </>
  );
}

export default App;
