let valor1
let valor2
let valor3

let comida1
let comida2
let comida3

alert (`Bem-vindo ao restaurante`)
let nome = prompt(`Qual seu nome?`)
let estudante = prompt("Você é estudante? (s/n)").toLowerCase()

let pedido1 = parseInt(prompt(`faça seu primeiro pedido
     Menu 
     (1) Hambúrguer - R$ 20
     (2) Pizza - R$ 35
     (3) Refrigerante - R$ 5 
     (4) Batata Frita - R$ 12
     (5) Sair do menu 

     use [1/2/3/4/5]
    `))

    if (pedido1 == 5 ) {
     alert (`saindo do menu..`)
    } else {
        switch (pedido1) {
       case 1:
        comida1 = "Hambúrguer"
        valor1 = 20
        break
      case 2:
      comida1 = "Pizza"
      valor1 = 35
      break
      case 3 :
        comida1 = "Refrigerante"
        valor1 = 5 
        break
      case 4 :
        comida1 = "Batata Frita"
        valor1 = 12
        break 
        }
    }

    let pedido2 = parseInt(prompt(`faça seu segundo pedido
     Menu 
     (1) Hambúrguer - R$ 20
     (2) Pizza - R$ 35
     (3) Refrigerante - R$ 5 
     (4) Batata Frita - R$ 12
     (5) Sair do menu 

     use [1/2/3/4/5]
    `))

    if (pedido2 == 5 ) {
     alert (`saindo do menu..`)
    } else {
        switch (pedido2) {
       case 1:
        comida2 = "Hambúrguer"
        valor2 = 20
        break
      case 2:
      comida2 = "Pizza"
      valor2 = 35
      break
      case 3 :
        comida2 = "Refrigerante"
        valor2 = 5 
        break
      case 4 :
        comida2 = "Batata Frita"
        valor2 = 12
        break 
        }
    }
       
    let pedido3 = parseInt(prompt(`faça seu terceiro pedido
     Menu 
     (1) Hambúrguer - R$ 20
     (2) Pizza - R$ 35
     (3) Refrigerante - R$ 5 
     (4) Batata Frita - R$ 12
     (5) Sair do menu 

     use [1/2/3/4/5]
    `))

    if (pedido3 == 5 ) {
     alert (`saindo do menu..`)
    } else {
        switch (pedido3) {
       case 1:
        comida3 = "Hambúrguer"
        valor3 = 20
        break
      case 2:
      comida3 = "Pizza"
      valor3 = 35
      break
      case 3 :
        comida3 = "Refrigerante"
        valor3 = 5 
        break
      case 4 :
        comida3 = "Batata Frita"
        valor3 = 12
        break 
        }
    }

    let valorTotal = valor1 + valor2 + valor3

if (estudante == "s") {
    let desconto = 0

    if (valorTotal > 50) {
        desconto = 15
    } else if (valorTotal < 50) {
        desconto = 10
    } else {  
        desconto = 5
    }

    let calculoDesconto = valorTotal * desconto / 100
    let valorComDesconto = valorTotal - calculoDesconto

    alert(`
Obrigado ${nome}!
Pratos escolhidos:
-  ${comida1} de R$ ${valor1.toFixed(2)}
-  ${comida2} de R$ ${valor2.toFixed(2)}
-  ${comida3} de R$ ${valor3.toFixed(2)}
Total sem desconto: R$ ${valorTotal.toFixed(2)}
Total com desconto: R$ ${valorComDesconto.toFixed(2)}
    `)
    alert(`Pedido feito. Volte sempre!`)

} else if (estudante == "n") {
    alert(`
Obrigado ${nome}!
Pratos escolhidos:
-  ${comida1} de R$ ${valor1.toFixed(2)}
-  ${comida2} de R$ ${valor2.toFixed(2)}
-  ${comida3} de R$ ${valor3.toFixed(2)}
Total sem desconto: R$ ${valorTotal.toFixed(2)}
Total com desconto: Você não tem desconto
    `)
    alert(`Pedido feito. Volte sempre!`)
}
