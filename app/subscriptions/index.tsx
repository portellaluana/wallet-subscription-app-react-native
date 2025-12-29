import { router } from "expo-router";
import { View } from "react-native";
import { Button, Screen, Text } from "../../src/design-system/components";
import {
  SubscriptionItem,
  SubscriptionsSummary,
} from "../../src/features/subscriptions/components";
import { useSubscriptionsContext } from "../../src/features/subscriptions/context/SubscriptionsContext";

export default function SubscriptionsScreen() {
  const { subscriptions, total } = useSubscriptionsContext();

  const activeSubscriptions = subscriptions.filter(
    (item) => item.status === "active"
  );

  return (
    <Screen scroll>
      <View style={{ gap: 12 }}>
        <Text variant="title">Assinaturas</Text>

        {activeSubscriptions.length > 0 && (
          <SubscriptionsSummary total={total} />
        )}

        <View>
          {subscriptions.map((item) => (
            <SubscriptionItem key={item.id} data={item} />
          ))}
        </View>

        <Button
          label="Adicionar assinatura"
          onPress={() => router.push("/subscriptions/new")}
        />
      </View>
    </Screen>
  );
}
