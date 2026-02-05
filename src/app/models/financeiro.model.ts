export interface FinanceiroResponseModel {
    id: string;
    paciente: string;
    data: string;
    valor: number;
    status: 'Paga' | 'Em Aberto' | 'Cancelada';
}