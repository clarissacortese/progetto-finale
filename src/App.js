import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Recipe from "./pages/recipe";
import RootLayout from "./pages/rootLayout";
import { getRandomRecipes } from "./components/recipesApi";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={getRandomRecipes} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
