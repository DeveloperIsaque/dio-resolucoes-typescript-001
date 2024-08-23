enum Trabalho {
    Atriz,
    Padeiro
}

type humano {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1 = {} as humano
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Trabalho.Atriz

let pessoa2 = {} as humano
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Trabalho.Padeiro

let pessoa3: humano = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}