import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "../../../design-system/components";
import { spacing } from "../../../design-system/theme";

export function SubscriptionsEmpty() {
  return (
    <View style={styles.container}>
      <Text variant="subtitle">Nenhuma assinatura ainda</Text>
      <Text variant="caption">
        Adicione suas assinaturas para acompanhar seus gastos mensais
      </Text>

      <Button
        label="Adicionar assinatura"
        onPress={() => router.push("/subscriptions/new")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
    alignItems: "center",
    gap: spacing.md,
  },
});
