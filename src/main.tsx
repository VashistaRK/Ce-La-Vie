import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu.tsx";
import CafeIntro from "./pages/IntroPage.tsx";
import Contact from "./pages/Contact.tsx";
import OrderPage from "./pages/OrderPage.tsx";

const route = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <CafeIntro />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
