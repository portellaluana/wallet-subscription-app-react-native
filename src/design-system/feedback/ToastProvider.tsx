import { createContext, useCallback, useContext, useState } from "react";
import { View } from "react-native";
import { Toast } from "./Toast";

type ToastData = {
  message: string;
  type: "success" | "error" | "warning";
};

type ToastContextType = {
  showToast: (data: ToastData) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = useCallback((data: ToastData) => {
    setToast(data);
    setTimeout(() => setToast(null), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <View
          style={{
            position: "absolute",
            bottom: 40,
            left: 16,
            right: 16,
          }}
        >
          <Toast message={toast.message} type={toast.type} />
        </View>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
