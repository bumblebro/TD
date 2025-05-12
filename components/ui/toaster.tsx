"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName="!z-[100]"
      containerStyle={{}}
      toastOptions={{
        // Default options for all toasts
        className:
          "!bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-gray-100 !shadow-lg",
        duration: 5000,
        style: {
          background: "transparent",
          color: "inherit",
        },
        // Default options for success toasts
        success: {
          duration: 3000,
          className:
            "!bg-green-50 dark:!bg-green-900/20 !text-green-800 dark:!text-green-200 !border !border-green-200 dark:!border-green-800",
          iconTheme: {
            primary: "#059669",
            secondary: "#fff",
          },
        },
        // Default options for error toasts
        error: {
          duration: 4000,
          className:
            "!bg-red-50 dark:!bg-red-900/20 !text-red-800 dark:!text-red-200 !border !border-red-200 dark:!border-red-800",
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fff",
          },
        },
        // Default options for loading toasts
        loading: {
          className:
            "!bg-blue-50 dark:!bg-blue-900/20 !text-blue-800 dark:!text-blue-200 !border !border-blue-200 dark:!border-blue-800",
        },
        // Accessibility options
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }}
    />
  );
}
