import React, { useState, useEffect } from 'react';
import { FliptContext, configureStore } from './useFliptClient';

export const FliptProvider: React.FC<{
  children: React.ReactNode;
  namespace: string;
  options: { url: string; updateInterval?: number };
}> = ({ children, namespace, options }) => {
  const [store] = useState(configureStore(namespace, options));
  useEffect(() => {
    store.attach();
    return () => {
      store.detach();
    };
  }, [store]);

  return (
    <FliptContext.Provider value={store}>{children}</FliptContext.Provider>
  );
};
