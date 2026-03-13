/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}
/* 🚨NÃO ALTERAR A CLASSE 🚨 */

function msg(mensagem) {
  textoResultado.textContent = mensagem;
};

/* ===== OBTER ELEMENTOS ===== */

// Captura dos elementos da unidade A
const cidadeA = document.querySelector('.unidadeA__cidade');
const codigoA = document.querySelector('.unidadeA__codigo');
const anoA= document.querySelector('.unidadeA__ano');
const cursosA = document.querySelector('.unidadeA__cursos');
const btnA = document.querySelector('.unidadeA__instanciar');
const abrirA = document.querySelector('.unidadeA__abrir');
const fecharA = document.querySelector('.unidadeA__fechar');


// Captura dos elementos da unidade B
const cidadeB = document.querySelector('.unidadeB__cidade');
const codigoB = document.querySelector('.unidadeB__codigo');
const anoB = document.querySelector('.unidadeB__ano');
const cursosB = document.querySelector('.unidadeB__cursos');
const btnB = document.querySelector('.unidadeB__instanciar');
const abrirB = document.querySelector('.unidadeB__abrir');
const fecharB = document.querySelector('.unidadeB__fechar');

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */

function validacao(cidadeA, codigoA, anoA, cursosA){
  if (cidadeA.value, codigoA.value, anoA.value, cursosA.value){
    return 'Criada'
  } else {
    msg('Preencha todos os campos para criar a escola.')
  }
}


/* ===== INSTANCIAR ESCOLA A ===== */


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */

const compararUnidade = (uniA, uniB) => {
  msg(`> Veredito: ${uniA.cidade} lidera com ${uniA.qtdeCursos} cursos...`)

  if (uniA.qtdeCursos > uniB.qtdeCursos) {
      msg(`Unidade A
          Código ${uniA.codigo} - Cidade ${uniA.cidade}
          Fundação ${uniA.anoConstrucao} (${uniA.idade})
          Oferta ${uniA.qtdeCursos}`);
  } else if (uniB.qtdeCursos > uniA.qtdeCursos) {
      msg(`Unidade B
          Código ${uniB.codigo} - Cidade ${uniB.cidade}
          Fundação ${uniB.anoConstrucao} (${uniB.idade})
          Oferta ${uniB.qtdeCursos}`);
  } else {
      msg(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
  }
}


/* ===== NOVA CONSULTA ===== */

function limpar() {
  resultado.style.display = 'none';

  formulario.reset();

};


