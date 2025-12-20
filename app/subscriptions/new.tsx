import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button, Screen, Text } from "../../src/design-system/components";
import { colors, spacing } from "../../src/design-system/theme";
import { useSubscriptionsContext } from "../../src/features/subscriptions/context/SubscriptionsContext";

export default function NewSubscriptionScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { addSubscription } = useSubscriptionsContext();

  function handleSubmit() {
    if (!name || !price) return;

    addSubscription({
      name,
      price: Number(price),
    });
  }

  return (
    <Screen>
      <Text variant="title">Nova assinatura</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do serviço"
          placeholderTextColor={colors.textSecondary}
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Preço mensal"
          placeholderTextColor={colors.textSecondary}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
          style={styles.input}
        />

        <Button label="Salvar" onPress={handleSubmit} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    color: colors.textPrimary,
  },
});
