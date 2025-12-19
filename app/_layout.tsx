import { Slot } from "expo-router";
import { ToastProvider } from "../src/design-system/feedback/ToastProvider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <Slot />
    </ToastProvider>
  );
}
