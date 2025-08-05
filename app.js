/*****************************************************************
 * 
 * Objetivo: Criar um sistema que realiza calculos de médias escolares 
 *          (variáveis, condicional, funções)
 * Autor: Roger
 * Data: 01/08/2025
 * Versão: 1.0
 *
******************************************************************/

/**
 * 
 * Formas de criar uma variável
 * var -> Permite criar um espaço em memória (variável), esse método é 
 *        considerado antigo. Obs: caso precise utilizar, aconselha-se
 *        usar fora de bloco de programação
 * 
 * let -> Permite criar um espaço em memória (variável), apenas dentro de 
 *        um bloco de programação (IF, LOOP, Function, etc...). Toda varíavel
 *        como LET apenas existe dentro daquele bloco de programação
 * 
 * const -> Permite criar um espaço em memória (constante) para guardar 
 *          conteúdos que não sofrerão mudanças durante o programa. Obs: 
 *          Sempre que possível criar a const com letras MAIUSCULAS
 * 
 * Formas de conversão de tipos de dados
 * String()     -> converte uma variável em string
 * Number()     -> converte uma string para numero inteiro ou float
 * parseInt()   -> converte uma string somente para inteiro
 * parseFloat() -> converte uma string para float
 * Boolean()    -> converte uma variável para booleano (true/false)
 * Object()     -> converte uma variável para objeto (ARRAY, JSON, CLASSE)
 * 
 * toUpperCase() -> Formata o conteúdo de uma string em MAIUSCULO
 * toLowerCase() -> Formata o conteúdo de uma string em minusculo
 * 
 * toFixed()     -> Permite limitar a qtde de casas decimais em uma variável numérica
 * 
 * Operadores de comparação 
 * 
 * ==  -> Validação de igualdade de conteúdos
 * !=  -> Validação de diferença de conteúdos
 * <   -> Validação de valor menor
 * <=  -> Validação de valor menor ou igual
 * >   -> Validação de valor maior
 * >=  -> Validação de valor maior ou igual
 * === -> Validação de igualdade de contéudo e igualdade de tipos de dados
 * !== -> Validação de diferenças de conteúdos e igualdade de tipos de dados. 
 *        OBS: Verificar em cada linguagem como isso é tratado
 * !=! -> Validação de diferenças de conteúdos e diferença de tipos de dados
 *        OBS: Verificar em cada linguagem como isso é tratado
 * 
 * 
 * Operadores Lógicos
 *   E   AND   &&
 *   OU  OR    ||
 *   NÃO NOT   !
 */


//Import da biblioteca do readline para manipular entrada de dados no terminal
var readline = require('readline')

//Criando um objeto de entrada e saída de dados no terminal 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    //Recebe o argumento da função e guarda em variável local, em MAIUSCULA
    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota1:', function(valor1){
        let nota1 = valor1

        //Entrada de dados da nota2
        entradaDeDados.question('Digite a nota2:', function(valor2){
            let nota2 = valor2

            //Entrada de dados da nota3
            entradaDeDados.question('Digite a nota3:', function(valor3){
                let nota3 = valor3

                //Entrada de dados da nota4
                entradaDeDados.question('Digite a nota4:', function(valor4){
                    let nota4 = valor4

                    //validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: É obrigatório o preenchimento de todas as informações.')
                    }else if(!isNaN(nomeAluno)){
                        console.log('ERRO: Dados invalidos. A caixa deve conter apenas nome, sem números')
                    //validação para bloquear a entrada de letras
                    }else if(isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                        console.log('ERRO: Dados invalidos. As notas aceitam apenas números')
                    //validação de valores entre 0 e 10
                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || 
                             Number(nota2) < 0 || Number(nota2) > 10 || 
                             Number(nota3) < 0 || Number(nota3) > 10 || 
                             Number(nota4) < 0 || Number(nota1) > 10){
                        console.log('ERRO: Dados invalidos. Você deve entrar com valores entre 0 e 10.')
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        let statusAluno
                        if(media >= 7 && media <= 10){
                            statusAluno = 'APROVADO'    
                        }else if(media <= 7 && media >= 5){
                            statusAluno = 'EXAME'
                        }else if(media < 5 && media >= 0){
                            statusAluno = 'REPROVADO'
                        }
                        console.log(`O aluno(a) ${nomeAluno} teve a média ${media.toFixed(1)} e esta ${statusAluno}`)
                    }

                })
            })
        })
    })
})