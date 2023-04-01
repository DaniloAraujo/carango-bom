export function autentica(email: string, senha: string, store: any): Promise<any> {
  const credenciais = { email, senha }

  return fetch(import.meta.env.VITE_BASE + "/api/login", {
    method: "POST", 
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(credenciais)
  })
  .then(resp => resp.json())
  .then(resp => {
    sessionStorage.setItem("token", resp.dados.token)
    store.usuario = resp.dados.usuario

    return resp.dados.usuario
  })
  .catch(e => Promise.reject(e.message))
}

export function recuperaToken(): string | null {
  return sessionStorage.getItem("token")
}

export function logOff(): void {
  sessionStorage.removeItem("token")
}

export function getPapeis(): Array<string> {
  const token = recuperaToken()
  if (token) {
    const payload = token.split(".")[1]
    const stringDecodificada = atob(payload)

    const dados = JSON.parse(stringDecodificada)
    return dados.roles
  }
  return []
}