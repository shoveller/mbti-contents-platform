import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "@/page/RootLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index lazy={() => import("@/page/Main/Main.tsx")} />
      <Route
        path=":testParam"
        id="testLoader"
        lazy={() => import("@/page/Test/Test")}
      >
        <Route index lazy={() => import("@/page/Test/Intro")} />
        <Route path="quiz/:step?" lazy={() => import("@/page/Test/Quiz")} />
        <Route
          Component={() => {
            return (
              <Suspense fallback="로딩중!!">
                <Outlet />
              </Suspense>
            );
          }}
          HydrateFallback={() => {
            return <h1>fheldwn</h1>;
          }}
        >
          <Route
            path="result/:mbti?"
            lazy={() => import("@/page/Test/Result")}
          />
        </Route>
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
