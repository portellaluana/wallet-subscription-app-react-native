import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "../../../design-system/components";
import { colors, spacing } from "../../../design-system/theme";

export function SubscriptionsEmptyState() {
  return (
    <View style={styles.container}>
      <Text variant="subtitle">
        Você ainda não possui assinaturas cadastradas
      </Text>

      <Text variant="caption" style={styles.caption}>
        Comece adicionando sua primeira assinatura para acompanhar seus gastos
        mensais.
      </Text>

      <View style={styles.button}>
        <Button
          label="Adicionar assinatura"
          onPress={() => router.push("/subscriptions/new")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    alignItems: "center",
  },
  caption: {
    textAlign: "center",
    marginTop: spacing.sm,
    color: colors.textSecondary,
  },
  button: {
    marginTop: spacing.lg,
    width: "100%",
  },
});
