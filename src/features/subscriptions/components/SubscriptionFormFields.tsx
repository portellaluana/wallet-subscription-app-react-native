import { StyleSheet, View } from "react-native";
import { TextInput } from "../../../design-system/components/TextInput";
import { spacing } from "../../../design-system/theme";

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
        label="Nome do serviço"
        placeholder="Ex: Netflix"
        value={name}
        onChangeText={onChangeName}
      />

      <TextInput
        label="Valor mensal"
        placeholder="R$ 0,00"
        keyboardType="numeric"
        value={price}
        onChangeText={onChangePrice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
    gap: spacing.md,
  },
});
