import { router } from "expo-router";
import { View } from "react-native";
import { Button, Screen, Text } from "../src/design-system/components";
import { spacing } from "../src/design-system/theme";
import { BalanceCard } from "../src/features/dashboard/components/BalanceCard";
import { LastTransactions } from "../src/features/dashboard/components/LastTransactions";
import { NextChargeCard } from "../src/features/dashboard/components/NextChargeCard";
import { SubscriptionsStats } from "../src/features/dashboard/components/SubscriptionsStats";

export default function DashboardScreen() {
  return (
    <Screen scroll>
      <View style={{ gap: spacing.lg }}>
        <Text variant="title">Wallet</Text>

        <BalanceCard />
        <NextChargeCard />
        <SubscriptionsStats />
        <LastTransactions />

        <Button
          label="Ver assinaturas"
          onPress={() => router.push("/subscriptions")}
        />
      </View>
    </Screen>
  );
}
