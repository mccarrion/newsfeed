import { create } from 'zustand'

const getAuthToken = () => {
  const authToken = localStorage.getItem('authToken') || null;
  return authToken;
} 

const useStore = create((set) => ({
  authToken: getAuthToken(),
  setAuthToken: (data) => set(() => {
    localStorage.setItem('authToken', data)
    return {
      authToken: data
    }
  }),
  removeAuthToken: () => set(() => {
    localStorage.removeItem('authToken')
    return {
      authToken: null
    }
  })
}))

export { useStore }