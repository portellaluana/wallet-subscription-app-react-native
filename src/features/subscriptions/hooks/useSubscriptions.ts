import { useState } from "react";
import { Subscription } from "../types";

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(false);

  const total = subscriptions.reduce((acc, item) => acc + item.price, 0);

  function addSubscription(data: Omit<Subscription, "id">) {
    const newItem: Subscription = {
      id: String(Date.now()),
      ...data,
    };

    setSubscriptions((prev) => [...prev, newItem]);
  }

  return {
    subscriptions,
    loading,
    total,
    addSubscription,
  };
}
