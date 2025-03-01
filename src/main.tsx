import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index lazy={() => import("@/page/Main.tsx")} />
      <Route path=":testParam" lazy={() => import("@/page/Test")}>
        <Route
          path="result/:resultParam"
          lazy={() => import("@/page/Result")}
        />
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
