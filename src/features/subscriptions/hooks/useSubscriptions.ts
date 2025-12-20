import { useMemo, useState } from "react";

export type Subscription = {
  id: string;
  name: string;
  price: number;
};

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(false);

  function addSubscription(data: Omit<Subscription, "id">) {
    setSubscriptions((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        ...data,
      },
    ]);
  }

  const total = useMemo(() => {
    return subscriptions.reduce((acc, item) => acc + item.price, 0);
  }, [subscriptions]);

  return {
    subscriptions,
    loading,
    total,
    addSubscription,
  };
}
