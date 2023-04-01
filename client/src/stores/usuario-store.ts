import { defineStore } from "pinia";

export const useUsuarioStore = defineStore('usuario', {
    state: () => ({
        usuario: {
            email: "",
            nome: ""
        }
    }),

    getters: {
        isAutenticado: (state) => state.usuario.email != ""
    },

    actions: {
        logoff() {
            this.usuario.email = ""
            this.usuario.nome = ""
        }
    }
});