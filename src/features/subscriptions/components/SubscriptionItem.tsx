import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Pressable, StyleSheet, View } from "react-native";

import { Card, Text } from "../../../design-system/components";
import { colors, spacing } from "../../../design-system/theme";
import { useSubscriptionsContext } from "../context/SubscriptionsContext";
import { Subscription } from "../types";

type Props = {
  data: Subscription;
};

export function SubscriptionItem({ data }: Props) {
  const { removeSubscription } = useSubscriptionsContext();

  function handleEdit() {
    router.push({
      pathname: "/subscriptions/new",
      params: { id: data.id },
    });
  }

  function confirmRemove() {
    Alert.alert("Remover assinatura", "Tem certeza que deseja remover?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => removeSubscription(data.id),
      },
    ]);
  }

  return (
    <Card>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text variant="subtitle">{data.name}</Text>
          <Text variant="caption">R$ {data.price.toFixed(2)} / mês</Text>
        </View>

        <View style={styles.actions}>
          <Pressable onPress={handleEdit} hitSlop={10}>
            <Feather name="edit-2" size={18} color={colors.primarySoft} />
          </Pressable>

          <Pressable onPress={confirmRemove} hitSlop={10}>
            <Feather name="trash-2" size={18} color={colors.error} />
          </Pressable>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.md,
  },
});
