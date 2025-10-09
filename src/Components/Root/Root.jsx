import React, { Suspense } from "react";
import Navbar from "../../Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"; // Detects when navigation is happening

  return (
    <div>
      <Navbar />

      {/* Overlay spinner during navigation */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <Spinner />
        </div>
      )}

      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>

      <Footer />

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Root;
