import axios from 'axios';
import type { Indicador } from "@/interfaces";
import { BASE } from '@/utils';


export function recuperaIndicadoresConsolidadosDasMarcas(): Promise<Indicador[]> {
    return axios.get(BASE + '/api/dashboard')
        .then(resposta => resposta.data.dados);
}