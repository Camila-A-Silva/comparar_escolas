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


/* ===== OBTER ELEMENTOS ===== */

// Captura dos elementos da unidade A e B
const cidade = document.querySelector('unidade__input unidadeA__cidade', 'unidade__input unidadeB__cidade');
const codigo = document.querySelector('unidade__input unidadeA__codigo','unidade__input unidadeB__codigo');
const anoConstrucao = document.querySelector('unidade__input unidadeA__ano', 'unidade__input unidadeB__ano');
const qtdeCursos = document.querySelector('unidade__input unidadeA__cursos', 'unidade__input unidadeB__cursos');
const formulario = document.querySelector('sistema__unidades')



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA A ===== */


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */

function limpar() {
  resultado.style.display = 'none';

  formulario.reset();

};


