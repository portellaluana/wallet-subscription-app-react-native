import { useLocalSearchParams } from "expo-router";
import { Screen, Text } from "../../src/design-system/components";

export default function SubscriptionDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen>
      <Text variant="title">Detalhe da assinatura</Text>
      <Text variant="caption">ID: {id}</Text>
    </Screen>
  );
}
