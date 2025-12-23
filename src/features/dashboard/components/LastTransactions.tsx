import { View } from "react-native";
import { Card, Text } from "../../../design-system/components";
import { transactions } from "../mocks/transactions";

export function LastTransactions() {
  return (
    <Card>
      <Text variant="caption">Últimas transações</Text>

      <View style={{ gap: 8, marginTop: 8 }}>
        {transactions.map((item) => (
          <Text key={item.id} variant="caption">
            {item.title} • R$ {item.amount.toFixed(2)}
          </Text>
        ))}
      </View>
    </Card>
  );
}
