import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cv from "./pages/Cv";
import Theme from "./pages/Theme";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

