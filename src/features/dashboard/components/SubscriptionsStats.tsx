import { Card, Text } from "../../../design-system/components";
import { useSubscriptionsContext } from "../../subscriptions/context/SubscriptionsContext";

export function SubscriptionsStats() {
  const { subscriptions } = useSubscriptionsContext();

  return (
    <Card>
      <Text variant="caption">Assinaturas ativas</Text>
      <Text variant="title">{subscriptions.length}</Text>
    </Card>
  );
}
