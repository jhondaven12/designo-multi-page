import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Home, OurContent, Locations, Contact, AppDesign, WebDesign, GraphicDesign } from './Components';

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<Header/>}>

        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="page/AppDesign" element={<AppDesign/>}/>
          <Route path="page/WebDesign" element={<WebDesign/>}/>
          <Route path="page/GraphicDesign" element={<GraphicDesign/>}/>
        </Route>

        <Route path="/OurContent" element={<OurContent/>}/>
        <Route path="/Locations" element={<Locations/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default App;
