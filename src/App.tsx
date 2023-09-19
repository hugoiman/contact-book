import {Route,Routes, HashRouter} from "react-router-dom"
import Header from './components/templates/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Content from "./components/templates/Content";
import DetailContact from "./components/pages/DetailContact";

function App() {
  return (
    <HashRouter>
      <main>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Content><Home/></Content>} />
          <Route path= "/view/:id" element={<Content><DetailContact /></Content>} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
