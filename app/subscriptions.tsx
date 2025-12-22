import { router } from "expo-router";
import { FlatList, View } from "react-native";
import {
  Button,
  SkeletonList,
  SubscriptionItem,
  SubscriptionsSummary,
  Text,
} from "../src/design-system/components";
import { useSubscriptionsContext } from "../src/features/subscriptions/context/SubscriptionsContext";

export default function SubscriptionsScreen() {
  const { subscriptions, loading, total } = useSubscriptionsContext();

  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <SubscriptionsSummary total={total} />

      {loading && <SkeletonList />}

      {!loading && subscriptions.length === 0 && (
        <Text variant="caption">Nenhuma assinatura cadastrada ainda.</Text>
      )}

      {!loading && subscriptions.length > 0 && (
        <FlatList
          data={subscriptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SubscriptionItem data={item} />}
        />
      )}

      <Button
        label="Adicionar assinatura"
        onPress={() => router.push("/subscriptions/new")}
      />
    </View>
  );
}
