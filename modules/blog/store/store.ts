import { defineStore } from 'pinia'

export const useBlogStore = defineStore({
  id: 'blog-store',

  state: () => ({
    value: 1
  }),

  getters: {
    valueWithName: state => `Value is ${state.value}`
  },

  actions: {
    setNewValue(newValue: number) {
      this.value = newValue
    }
  }
})