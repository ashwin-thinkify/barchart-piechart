import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorPublicationHome from "./routes/AuthorPublicationHome";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AuthorPublication" element={<AuthorPublicationHome />} />
         </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
