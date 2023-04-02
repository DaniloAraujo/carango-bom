import type { Veiculo, VeiculoForm } from '@/interfaces'
import axios from 'axios'
import { BASE } from '@/utils'

export function cadastraVeiculo(dadosVeiculos: VeiculoForm): Promise<Veiculo> {
  return axios.post(BASE + "/api/veiculos", dadosVeiculos)
    .then(resp => resp.data.dados)
}

export function buscaVeiculos(): Promise<Veiculo[]> {
  return axios.get(BASE + "/api/veiculos")
    .then(resp => resp.data.dados)
}