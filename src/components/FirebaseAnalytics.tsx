'use client';

import { useEffect } from 'react';
import { analytics } from '../../lib/firebase';

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Analytics is already initialized in firebase.ts
    // This component ensures it's loaded on the client side
    if (analytics) {
      console.log('Firebase Analytics initialized');
    }
  }, []);

  return null; // This component doesn't render anything
}