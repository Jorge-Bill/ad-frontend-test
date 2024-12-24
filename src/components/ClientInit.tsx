'use client';

import { useEffect } from 'react';
import { startSessionStorage, getFromSession } from '@/services/session';

export default function ClientInit() {
  useEffect(() => {
    const initLocalStorage = () => {
      if (!getFromSession('cart')) {
        startSessionStorage();
      }
    };

    initLocalStorage();
  }, []);

  return null;
}
