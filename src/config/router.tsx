import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, SignUp, Login, Compliance } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="compliance" element={<Compliance />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
