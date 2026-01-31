export interface PacienteResponseModel{
    id: string;
    nome: string;
    cpf: string;
    telefone: string;
    status: boolean;
}

export interface PacienteCriarResponseModel{
    nome: string;
    cpf: string;
    telefone: string;
    endereco: string;
    email: string;
    data_nascimento: string;
    observacoes: string;
}

export interface PacienteEditarResponseModel{
    nome: string;
    telefone: string;
    endereco: string;
    email: string;
    observacoes: string;
}

export interface PacientePesquisaResponseModel{
    id: string;
    nome: string;
    cpf: string;
    telefone: string;
    endereco: string;
    email: string;
    data_nascimento: string;
    observacoes: string;
    status: string;
}