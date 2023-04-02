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

export function excluiVeiculo(id: string): Promise<void> {
  return axios.delete(BASE + `/api/veiculos/${id}`);
}

export function alteraVeiculo(dadosDoVeiculo: VeiculoForm): Promise<Veiculo> {
  return axios.put(BASE + `/api/veiculos/${dadosDoVeiculo.id}`, dadosDoVeiculo)
      .then(resposta => resposta.data.dados);
}

export function buscaPorId(id: string): Promise<Veiculo> {
  return axios.get(BASE + `/api/veiculos/${id}`)
      .then(resposta => resposta.data.dados);
}