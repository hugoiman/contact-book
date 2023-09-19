import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from './components/templates/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Content from "./components/templates/Content";
import DetailContact from "./components/pages/DetailContact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Content><Home/></Content>
    },
    {
      path: "/view/:id",
      element: <Content><DetailContact /></Content>
    }
  ])
  return (
    <main>
      <Header></Header>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
