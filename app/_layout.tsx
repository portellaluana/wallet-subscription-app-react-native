import { Stack } from "expo-router";
import { SubscriptionsProvider } from "../src/features/subscriptions/context/SubscriptionsContext";

export default function Layout() {
  return (
    <SubscriptionsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SubscriptionsProvider>
  );
}
