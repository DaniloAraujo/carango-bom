export interface Credenciais {
  email: string;
  senha: string;
}

export interface Usuario {
  email: string;
  nome: string;
}

export interface Autenticacao {
  usuario: Usuario;
  token: string;
}

export interface Marca {
  id: string;
  nome: string;
}

export interface VeiculoForm {
  id?: string
  modelo: string;
  ano: number;
  valor: number;
  imagemUrl: string;
  marcaId: string;
}

export interface Veiculo {
  id: string;
  modelo: string;
  ano: number;
  valor: number;
  imagemUrl: string;
  marca: Marca
}

export interface Indicador {
  marca: string;
  quantidade: number;
  montante: number;
}