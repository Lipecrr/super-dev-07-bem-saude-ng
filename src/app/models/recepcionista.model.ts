export interface RecepcionistaResponseModel{
    id: string;
    nome: string;
    status: boolean;
}

export interface RecepcionistaPesquisaResponseModel{
    id: string;
    nome: string;
    status: boolean;
}

export interface RecepcionistaCriarResponseModel{
    nome: string;
}

export interface RecepcionistaEditarResponseModel{
    nome: string;
}