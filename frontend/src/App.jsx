import Menubar from "./components/menubar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import {Route,Routes} from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
