import type { Veiculo } from "@/interfaces";
import { defineStore } from "pinia";

export const useVeiculosStore = defineStore('veiculos', {
  state: () => {
    return {
      veiculos: [] as Veiculo[]
    }
  },
  getters: {
    isVeiculosVazio: state => state.veiculos.length == 0
  },
  actions: {
    atualizaVeiculos(veiculos: Veiculo[]) {
      this.veiculos = veiculos
    }
  }
})