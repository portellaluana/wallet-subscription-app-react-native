import { ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { colors, spacing } from "../theme";
import { Text } from "./Text";

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export function Button({
  label,
  onPress,
  loading = false,
  variant = "primary",
  disabled = false,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.base,
        variant === "primary" ? styles.primary : styles.secondary,
        disabled && styles.disabled,
      ]}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 16,
    padding: spacing.md,
    alignItems: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});
