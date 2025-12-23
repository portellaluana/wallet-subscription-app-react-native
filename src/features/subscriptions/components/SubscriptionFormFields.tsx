import { StyleSheet, TextInput, View } from "react-native";
import { colors, spacing } from "../../../design-system/theme";

type Props = {
  name: string;
  price: string;
  onChangeName: (value: string) => void;
  onChangePrice: (value: string) => void;
};

export function SubscriptionFormFields({
  name,
  price,
  onChangeName,
  onChangePrice,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome da assinatura"
        placeholderTextColor={colors.textSecondary}
        value={name}
        onChangeText={onChangeName}
        autoFocus
        style={styles.input}
      />

      <TextInput
        placeholder="Valor mensal"
        placeholderTextColor={colors.textSecondary}
        value={price}
        onChangeText={onChangePrice}
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    marginTop: spacing.md,
  },
  input: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    color: colors.textPrimary,
  },
});
