import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { Card, Text } from "../../../design-system/components";
import { colors, spacing } from "../../../design-system/theme";
import { useSubscriptionsContext } from "../context/SubscriptionsContext";
import { Subscription } from "../types";

type Props = {
  data: Subscription;
};

export function SubscriptionItem({ data }: Props) {
  const { removeSubscription } = useSubscriptionsContext();

  return (
    <Card>
      <View style={styles.row}>
        <View>
          <Text variant="subtitle">{data.name}</Text>
          <Text variant="caption">R$ {data.price.toFixed(2)} / mês</Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/subscriptions/new",
                params: { id: data.id },
              })
            }
            hitSlop={10}
          >
            <Feather name="edit-2" size={20} color={colors.textSecondary} />
          </Pressable>

          <Pressable onPress={() => removeSubscription(data.id)} hitSlop={10}>
            <Feather name="trash-2" size={20} color={colors.textSecondary} />
          </Pressable>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.md,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "center",
  },
});
