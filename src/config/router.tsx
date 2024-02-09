import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, SignUp, Login, Compliance, Otp,Orders,ProductsPage } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="compliance" element={<Compliance />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
