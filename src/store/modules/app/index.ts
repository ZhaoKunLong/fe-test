import { defineStore } from 'pinia';
import { store } from '@/store';
import { promises } from 'node:dns';

interface nameList {
  name: string;
  address: string;
  phone: number;
}

interface AppStore {
  name: string;
  age: number;
  infoList: nameList[];
}

/**
 * @description: 选项式 API
 * @return {*}
 */
const useAppStore = defineStore('app-store', {
  state: (): AppStore => ({
    name: 'hxj1',
    age: 1,
    infoList: [],
  }),
  getters: {
    doubleAge: state => state.age * 2,
  },
  actions: {
    changeName() {
      this.name = 'hxj12';
    },
    async changeAge() {
      let promise = new Promise<number>((resolve, reject) => {
        resolve(18);
      });
      this.age = await promise;
    },
  },
});

export default useAppStore;
