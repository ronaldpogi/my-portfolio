import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: '',
    status: '',
  }),
  actions: {
    setMessage(message: string, status = '', duration = 9000) {
      this.message = message
      this.status = status

      setTimeout(() => {
        this.clearMessage()
      }, duration)
    },
    clearMessage() {
      this.message = ''
      this.status = ''
    },
  },
})
