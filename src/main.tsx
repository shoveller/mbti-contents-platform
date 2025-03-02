import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "@/page/RootLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index lazy={() => import("@/page/Main/Main.tsx")} />
      <Route
        path=":testParam/:mode"
        id="testLoader"
        lazy={() => import("@/page/Test/Test")}
      >
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
