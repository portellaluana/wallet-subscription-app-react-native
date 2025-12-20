import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";
import { colors, spacing } from "../theme";
import { Text } from "./Text";

type Props = TextInputProps & {
  label?: string;
};

export function TextInput({ label, style, ...props }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text variant="caption">{label}</Text>}

      <RNTextInput
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    color: colors.textPrimary,
  },
});
