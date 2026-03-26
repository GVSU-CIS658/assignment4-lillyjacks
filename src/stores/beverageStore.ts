import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";
import bases from "../data/bases.json";
import { BaseBeverageType, CreamerType, SyrupType, BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures as string[],
    currentTemp: tempretures[0],

    syrup: syrups as SyrupType[],
    currentSyrup: syrups[0] as SyrupType,

    cream: creamers as CreamerType[],
    currentCreamer: creamers[0] as CreamerType,

    base: bases as BaseBeverageType[],
    currentBase: bases[0] as BaseBeverageType,

    customBeverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    nextId: 1
  }),

  actions: {
    makeBeverage(name: string) {
      const trimName = name.trim();
      if(!trimName) return;

      const newBev: BeverageType = {
        id: this.nextId.toString(),
        name: trimName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      }
      this.customBeverages.push(newBev);
      this.currentBeverage = newBev;

      this.nextId++;
    },

    showBeverage(id: string) {
      const beverage = this.customBeverages.find((bev) => bev.id === id);
      if(!beverage) return;

      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
    },
  },

  persist: true,
});
