import { create } from 'zustand'

const getAuthToken = () => {
  const authToken = localStorage.getItem('authToken') || null;
  return authToken;
} 

const getUserData = () => {
  const userData = localStorage.getItem('userData') || null;
  return JSON.parse(userData);
} 

const useStore = create((set) => ({
  authToken: getAuthToken(),
  userData: getUserData(),
  setAuthToken: (data) => set(() => {
    localStorage.setItem('authToken', data)
    localStorage.setItem('userData', atob(data.split('.')[1]))
    return {
      authToken: data,
      username: atob(data.split('.')[1])
    }
  }),
  removeAuthToken: () => set(() => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    return {
      authToken: null,
      username: null
    }
  })
}))

export { useStore }