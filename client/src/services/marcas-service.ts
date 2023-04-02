import axios from 'axios'
import type { Marca } from '@/interfaces'
import * as autenticacaoService from '@/services/autenticacao-service.js'
import { BASE } from '@/utils'

export function listaMarcas(): Promise<Marca[]> {
  return axios.get(BASE + "/api/marcas")
    .then(resposta => resposta.data.dados)
    // .then((marcas: Marca[]) => marcas)
}

export function cadastraMarca(nome: string) {
  const token = autenticacaoService.recuperaToken()

  return axios.post(BASE + "/api/marcas", { nome })
    .then(resp => resp.data.dados)
    .catch(e => console.log("fetchErr::", e))
}

export function excluiMarca(id: string) {
  return axios.delete(BASE + `/api/marcas/${id}`)
    .then(resp => resp.data.dados)
}

export function editarMarca(marca: Marca): Promise<Marca> {
  return axios.put(BASE + `/api/marcas/${marca.id}`, marca)
      .then(resposta => resposta.data.dados);
}