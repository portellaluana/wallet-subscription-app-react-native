import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "../../../design-system/components";
import { spacing } from "../../../design-system/theme";
import { useSubscriptionsContext } from "../context/SubscriptionsContext";
import { SubscriptionFormFields } from "./SubscriptionFormFields";

export function SubscriptionForm() {
  const { addSubscription } = useSubscriptionsContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const isValid = name.trim().length > 0 && Number(price) > 0;

  function handleSubmit() {
    addSubscription({
      name,
      price: Number(price),
    });

    router.back();
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text variant="subtitle">Dados da assinatura</Text>

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
          label="Salvar assinatura"
          onPress={handleSubmit}
          disabled={!isValid}
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
});
