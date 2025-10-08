import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import Spinner from "./Components/Spinner/Spinner.jsx"; // ✅ import your loader

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ✅ Wrap RouterProvider in Suspense */}
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
