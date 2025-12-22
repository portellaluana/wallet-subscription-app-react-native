import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "../../../design-system/components";
import { spacing } from "../../../design-system/theme";
import { useSubscriptionsContext } from "../context/SubscriptionsContext";
import { SubscriptionFormFields } from "./SubscriptionFormFields";

export function SubscriptionForm() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const { subscriptions, addSubscription, updateSubscription } =
    useSubscriptionsContext();

  const editingSubscription = subscriptions.find((item) => item.id === id);

  const [name, setName] = useState(editingSubscription?.name ?? "");
  const [price, setPrice] = useState(
    editingSubscription?.price?.toString() ?? ""
  );

  const isEdit = !!editingSubscription;
  const isValid = name.trim().length > 0 && Number(price) > 0;

  function handleSubmit() {
    if (!isValid) return;

    if (isEdit && editingSubscription) {
      updateSubscription(editingSubscription.id, {
        name,
        price: Number(price),
      });
    } else {
      addSubscription({
        name,
        price: Number(price),
      });
    }

    router.back();
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text variant="subtitle">
          {isEdit ? "Editar assinatura" : "Nova assinatura"}
        </Text>

        <SubscriptionFormFields
          name={name}
          onChangeName={setName}
          price={price}
          onChangePrice={setPrice}
        />
      </Card>

      {!isValid && (
        <Text variant="caption" style={{ color: "#F59E0B" }}>
          Preencha nome e valor corretamente
        </Text>
      )}

      <View style={styles.actions}>
        <Button
          label={isEdit ? "Salvar alterações" : "Criar assinatura"}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
  },
  actions: {
    marginTop: spacing.lg,
  },
  error: {
    marginTop: spacing.sm,
    color: "#F59E0B",
  },
});
