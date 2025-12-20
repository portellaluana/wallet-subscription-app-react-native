import { Screen, Text } from "../../src/design-system/components";
import { SubscriptionForm } from "../../src/features/subscriptions/components/SubscriptionForm";

export default function NewSubscriptionScreen() {
  return (
    <Screen scroll>
      <Text variant="title">Nova assinatura</Text>

      <SubscriptionForm />
    </Screen>
  );
}
