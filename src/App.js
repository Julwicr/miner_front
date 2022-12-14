import { Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import { About } from "./pages/About"
import { Footer } from "./components/Footer"
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import ProtectedRoutes from "./ProtectedRoutes";
import { UserRegister } from "./pages/UserRegister";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<UserRegister />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>


      <Footer />
    </>
  );
}

export default App;
