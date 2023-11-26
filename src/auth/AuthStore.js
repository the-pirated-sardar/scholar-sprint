import { create } from 'zustand';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";

import { firebaseConfig } from './config'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const useAuthStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set((currentUser) => ({ user })),
  loading: true,

  signup: async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .catch(error => console.error('Error in signup:', error))
  },
  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(console.log(useAuthStore.getState().currentUser))
      .catch(error => console.error('Error in login:', error))
  },
  logout: async () => {
    await signOut(auth)
      .then(console.log(useAuthStore.getState().currentUser))
      .catch(error => console.error('Error in signout:', error))
  },
  resetPassword: async (email) => {
    await sendPasswordResetEmail(auth, email)
      .catch(error => console.error('Error in password reset:', error))
  },
  updateEmail: async (email) => {
    await useAuthStore.getState().currentUser.updateEmail(email)
      .catch(error => console.error('Error in update email:', error))
  },
  updatePassword: async (password) => {
    await useAuthStore.getState().currentUser.updatePassword(password)
      .catch(error => console.error('Error in update password:', error))
  },
  init: async () => {
    try {
      const user = await new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          resolve(user);
          unsubscribe();
        }, reject);
      });

      set({ currentUser: user, loading: false });
    } catch (error) {
      console.error('Error in init:', error);
      set({ currentUser: null, loading: false });
    }
  },
}))