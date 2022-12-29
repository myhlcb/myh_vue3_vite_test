import { defineStore } from 'pinia';
export const mainStore = defineStore('main', {
  state:()=> {
    return { nav: [] };
  },
  actions: {
    setNav(data) {
      this.nav = data;
    },
  },
});
