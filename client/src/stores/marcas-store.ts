import type { Marca } from "@/interfaces";
import { defineStore } from "pinia";

export const useMarcasStore = defineStore('marcas', {
  state: () => {
    return {
      marcas: [] as Marca[]
    }
  },
  getters: {
    isMarcasVazio: state => state.marcas.length == 0
  },
  actions: {
    atualizaMarcas(marcas: Marca[]) {
      this.marcas = marcas
    }
  }
})