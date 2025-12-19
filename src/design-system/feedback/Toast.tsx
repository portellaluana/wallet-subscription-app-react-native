import { View } from "react-native";
import { Text } from "../components/Text";
import { colors, radius, spacing } from "../theme";

type ToastType = "success" | "error" | "warning";

type Props = {
  message: string;
  type?: ToastType;
};

export function Toast({ message, type = "success" }: Props) {
  const backgroundMap = {
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
  };

  return (
    <View
      style={{
        backgroundColor: backgroundMap[type],
        padding: spacing.md,
        borderRadius: radius.md,
      }}
    >
      <Text>{message}</Text>
    </View>
  );
}
