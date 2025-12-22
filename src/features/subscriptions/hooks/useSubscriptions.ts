import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Subscription } from "../types";

const STORAGE_KEY = "@wallet:subscriptions";

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubscriptions();
  }, []);

  async function loadSubscriptions() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSubscriptions(JSON.parse(stored));
      }
    } finally {
      setLoading(false);
    }
  }

  async function persist(data: Subscription[]) {
    setSubscriptions(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  async function addSubscription(data: Omit<Subscription, "id">) {
    const newSubscription: Subscription = {
      id: crypto.randomUUID(),
      ...data,
    };

    const updated = [...subscriptions, newSubscription];
    await persist(updated);
  }

  async function removeSubscription(id: string) {
    const updated = subscriptions.filter((item) => item.id !== id);
    await persist(updated);
  }

  function updateSubscription(id: string, data: Omit<Subscription, "id">) {
    const updated = subscriptions.map((item) =>
      item.id === id ? { ...item, ...data } : item
    );

    persist(updated);
  }

  const total = subscriptions.reduce((acc, item) => acc + item.price, 0);

  return {
    subscriptions,
    loading,
    total,
    addSubscription,
    removeSubscription,
    updateSubscription,
  };
}
