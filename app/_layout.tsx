import { Slot } from "expo-router";
import { SubscriptionsProvider } from "../src/features/subscriptions/context/SubscriptionsContext";

export default function RootLayout() {
  return (
    <SubscriptionsProvider>
      <Slot />
    </SubscriptionsProvider>
  );
}
