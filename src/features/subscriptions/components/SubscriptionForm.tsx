import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "../../../design-system/components";
import { spacing } from "../../../design-system/theme";
import { colors } from "../../../design-system/theme/colors";
import { useSubscriptionsContext } from "../context/SubscriptionsContext";
import { Subscription } from "../types";
import { SubscriptionFormFields } from "./SubscriptionFormFields";

type Props = {
  subscription?: Subscription;
};

export function SubscriptionForm({ subscription }: Props) {
  const { addSubscription, updateSubscription } = useSubscriptionsContext();

  const isEdit = !!subscription;

  const [name, setName] = useState(subscription?.name ?? "");
  const [price, setPrice] = useState(
    subscription ? String(subscription.price) : ""
  );

  const isValid = name.trim().length > 0 && Number(price) > 0;

  function handleSubmit() {
    if (!isValid) return;

    if (isEdit && subscription) {
      updateSubscription(subscription.id, {
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
        <Text variant="caption" style={{ color: colors.warning }}>
          Preencha nome e valor corretamente
        </Text>
      )}

      <View style={styles.actions}>
        <Button
          label={isEdit ? "Salvar alterações" : "Criar assinatura"}
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
  error: {
    marginTop: spacing.sm,
    color: "#F59E0B",
  },
});
