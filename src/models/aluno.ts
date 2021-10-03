export type Aluno {
    id?: string;
    nome: string;
    telefone: string;
    celular: string;
    sexo: 'masculino'|'feminino';
    profissao?: string;
    formacao: string;
    treinado: boolean;
    endereco: string;
    data_nascimento: string;
    data_avaliacao: string;
    objetivo?: string;
}