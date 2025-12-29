import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Button, Card, Screen, Text } from "../../../design-system/components";
import { spacing } from "../../../design-system/theme";
import { useSubscriptionsContext } from "../context/SubscriptionsContext";
import { SubscriptionStatusBadge } from "./SubscriptionStatusBadge";

export default function SubscriptionDetailsScreen() {
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { getSubscriptionById, cancelSubscription } = useSubscriptionsContext();

  if (!id) {
    return (
      <Screen>
        <Text>ID inválido</Text>
      </Screen>
    );
  }

  const subscription = getSubscriptionById(id);

  if (!subscription) {
    return (
      <Screen>
        <Text>Assinatura não encontrada</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text variant="title">{subscription.name}</Text>

      <Card style={{ marginTop: spacing.lg }}>
        <Text variant="caption">Valor mensal</Text>
        <Text variant="subtitle">R$ {subscription.price.toFixed(2)}</Text>

        <View style={{ marginTop: spacing.md }}>
          <SubscriptionStatusBadge status={subscription.status} />
        </View>
      </Card>

      <View style={{ marginTop: spacing.xl }}>
        <Button
          label="Cancelar assinatura"
          variant="secondary"
          onPress={() => cancelSubscription(subscription.id)}
        />
      </View>
    </Screen>
  );
}
