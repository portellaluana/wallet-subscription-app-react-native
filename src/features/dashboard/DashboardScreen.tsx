import { StyleSheet, View } from "react-native";
import { Screen, Text } from "../../design-system/components";
import { spacing } from "../../design-system/theme";
import { useSubscriptionsContext } from "../subscriptions/context/SubscriptionsContext";
import { DashboardCard } from "./components/DashboardCard";
import { LastTransactions } from "./components/LastTransactions";

export function DashboardScreen() {
  const { subscriptions, total } = useSubscriptionsContext();

  const activeCount = subscriptions.length;

  return (
    <Screen scroll>
      <Text variant="title">Dashboard</Text>

      <View style={styles.grid}>
        <DashboardCard label="Saldo" value="R$ 1.250,00" />
        <DashboardCard label="Assinaturas ativas" value={String(activeCount)} />
        <DashboardCard label="Próxima cobrança" value="R$ 39,90 • 25/06" />
        <DashboardCard label="Total mensal" value={`R$ ${total.toFixed(2)}`} />
      </View>

      <LastTransactions />
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
});
