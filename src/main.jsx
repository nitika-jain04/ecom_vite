import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./../store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HouseholdPage from "./categories/HouseholdPage.jsx";
import RakhiPage from "./categories/RakhiPage.jsx";
import KidsPage from "./categories/KidsPage.jsx";
import PoojaPage from "./categories/PoojaPage.jsx";
import Decorations from "./categories/Decorations.jsx";
import AccessoriesPage from "./categories/AccessoriesPage.jsx";
import BanglesPage from "./categories/BanglesPage.jsx";
import TricolorPage from "./categories/TricolorPage.jsx";
import PersonalisedPage from "./categories/PersonalisedPage.jsx";
import HariyaliPage from "./categories/HariyaliPage.jsx";
import ProductPage from "./components/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories/household",
    element: <HouseholdPage />,
  },
  {
    path: "/categories/rakhi",
    element: <RakhiPage />,
  },
  {
    path: "/categories/kids",
    element: <KidsPage />,
  },
  {
    path: "/categories/pooja",
    element: <PoojaPage />,
  },
  {
    path: "/categories/decorations",
    element: <Decorations />,
  },
  {
    path: "/categories/accessories",
    element: <AccessoriesPage />,
  },
  {
    path: "/categories/bangles",
    element: <BanglesPage />,
  },
  {
    path: "/categories/tricolor",
    element: <TricolorPage />,
  },
  {
    path: "/categories/personalised",
    element: <PersonalisedPage />,
  },
  {
    path: "/categories/hariyali",
    element: <HariyaliPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
