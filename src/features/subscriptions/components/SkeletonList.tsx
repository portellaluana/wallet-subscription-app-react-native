import { View } from "react-native";
import { Card, Skeleton } from "../../../design-system/components";

export default function SkeletonList() {
  return (
    <View style={{ gap: 12, marginTop: 16 }}>
      {[1, 2, 3].map((item) => (
        <Card key={item}>
          <Skeleton style={{ height: 20, marginBottom: 8 }} />
          <Skeleton style={{ height: 14, width: "40%" }} />
        </Card>
      ))}
    </View>
  );
}
