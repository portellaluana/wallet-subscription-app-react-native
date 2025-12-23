import { router } from "expo-router";
import { View } from "react-native";
import {
  Button,
  Screen,
  SubscriptionItem,
  SubscriptionsSummary,
  Text,
} from "../../src/design-system/components";
import { SubscriptionsEmpty } from "../../src/features/subscriptions/components/SubscriptionsEmptyState";
import { useSubscriptionsContext } from "../../src/features/subscriptions/context/SubscriptionsContext";

export default function SubscriptionsScreen() {
  const { subscriptions, total } = useSubscriptionsContext();

  return (
    <Screen scroll>
      <View style={{ gap: 12 }}>
        <Text variant="title">Assinaturas</Text>
        {subscriptions.length > 0 && <SubscriptionsSummary total={total} />}

        {subscriptions.length === 0 ? (
          <SubscriptionsEmpty />
        ) : (
          <View style={{ gap: 12 }}>
            {subscriptions.map((item) => (
              <SubscriptionItem key={item.id} data={item} />
            ))}
          </View>
        )}

        <Button
          label="Adicionar assinatura"
          onPress={() => router.push("/subscriptions/new")}
        />
      </View>
    </Screen>
  );
}
