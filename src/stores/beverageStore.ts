import { defineStore } from "pinia";
import temperatures from "../data/tempretures.json";
import bases from "../data/bases.json";
import syrups from "../data/syrups.json";
import creamers from "../data/creamers.json";
import { BaseBeverageType, CreamerType, SyrupType, BeverageType} from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures as string[],
    currentTemp: temperatures[0],
    bases: bases as BaseBeverageType[],
    currentBase: bases[0] as BaseBeverageType,
    syrups: syrups as SyrupType[],
    currentSyrup: syrups[0] as SyrupType,
    creamers: creamers as CreamerType[],
    currentCreamer: creamers[0] as CreamerType,
    customBeverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    nextId:1
  }),

  actions: {
    makeBeverage(name: string) {
      const trimmedName = name.trim();
      if(!trimmedName) return;

      const newBeverage: BeverageType = {
        id: this.nextId.toString(),
        name: trimmedName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      }
      this.customBeverages.push(newBeverage);
      this.currentBeverage = newBeverage;

      this.nextId++;
    },

    showBeverage(id: string) {
      const beverage = this.customBeverages.find((bev) => bev.id === id);
      if(!beverage) return;

      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
      this.currentBeverage = beverage;
    },
  },


  persist: true,
});