type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Melissa",
    curso: "Desenvolvimento de Sistemas",
    empresa: "TranquiloTech",
    cargo: "Estagiario"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);