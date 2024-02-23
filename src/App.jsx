import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import Speakers from "./pages/speakers/Speakers";
import Headphones from "./pages/headphones/Headphones";
import Earphones from "./pages/earphones/Earphones";
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="earphones" element={<Earphones />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
