import { View } from "react-native";
import { Card, Screen, Skeleton, Text } from "../src/design-system/components";
import { SubscriptionItem } from "../src/features/subscriptions/components/SubscriptionItem";
import { useSubscriptionsContext } from "../src/features/subscriptions/context/SubscriptionsContext";

export default function SubscriptionsScreen() {
  const { subscriptions, total, loading } = useSubscriptionsContext();

  return (
    <Screen>
      <Text variant="title">Assinaturas</Text>
      <Text variant="caption" style={{ marginTop: 4 }}>
        Total mensal: R$ {total.toFixed(2)}
      </Text>

      {loading ? (
        <View style={{ gap: 12, marginTop: 16 }}>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <Skeleton style={{ height: 20, marginBottom: 8 }} />
              <Skeleton style={{ height: 14, width: "40%" }} />
            </Card>
          ))}
        </View>
      ) : subscriptions.length === 0 ? (
        <View style={{ marginTop: 24 }}>
          <Text variant="body">
            Você ainda não possui assinaturas cadastradas.
          </Text>
        </View>
      ) : (
        <View style={{ gap: 12, marginTop: 16 }}>
          {subscriptions.map((item) => (
            <SubscriptionItem
              key={item.id}
              name={item.name}
              price={item.price}
            />
          ))}
        </View>
      )}
    </Screen>
  );
}
