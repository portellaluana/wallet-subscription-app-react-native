import { StyleSheet, View } from "react-native";
import { Text } from "../../../design-system/components";
import { colors } from "../../../design-system/theme";

type Props = {
  status: "active" | "late" | "canceled";
};

const statusMap = {
  active: {
    label: "Ativa",
    color: colors.success,
  },
  late: {
    label: "Em atraso",
    color: colors.warning,
  },
  canceled: {
    label: "Cancelada",
    color: colors.error,
  },
};

export function SubscriptionStatusBadge({ status }: Props) {
  const config = statusMap[status];

  return (
    <View style={[styles.badge, { backgroundColor: config.color }]}>
      <Text variant="caption">{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
});
