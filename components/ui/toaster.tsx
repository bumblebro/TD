"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Default options for all toasts
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        // Default options for success toasts
        success: {
          duration: 3000,
          theme: {
            primary: "#4aed88",
          },
        },
        // Default options for error toasts
        error: {
          duration: 4000,
          theme: {
            primary: "#ff4b4b",
          },
        },
      }}
    />
  );
}
