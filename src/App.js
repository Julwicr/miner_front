import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { About } from "./pages/About"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
