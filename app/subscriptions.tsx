import { router } from "expo-router";
import {
  EmptyState,
  Screen,
  SkeletonList,
  SubscriptionItem,
  SubscriptionsSummary,
  Text,
} from "../src/design-system/components";
import { useSubscriptionsContext } from "../src/features/subscriptions/context/SubscriptionsContext";

export default function SubscriptionsScreen() {
  const { subscriptions, loading, total } = useSubscriptionsContext();

  if (loading) {
    return (
      <Screen>
        <Text variant="title">Assinaturas</Text>
        <SkeletonList />
      </Screen>
    );
  }

  if (subscriptions.length === 0) {
    return (
      <Screen>
        <Text variant="title">Assinaturas</Text>

        <EmptyState
          title="Nenhuma assinatura cadastrada"
          description="Adicione suas assinaturas para acompanhar seus gastos mensais."
          actionLabel="Adicionar assinatura"
          onAction={() => router.push("/subscriptions/new")}
        />
      </Screen>
    );
  }

  return (
    <Screen scroll>
      <Text variant="title">Assinaturas</Text>

      <SubscriptionsSummary total={total} />

      {subscriptions.map((item) => (
        <SubscriptionItem key={item.id} data={item} />
      ))}
    </Screen>
  );
}
