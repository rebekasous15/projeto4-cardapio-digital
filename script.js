
let nome = prompt("Bem-vindo, qual seu nome?")
let preçoItem1 = 0
let preçoItem2 = 0
let preçoItem3 = 0

alert(` Menu
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) sair
    voce pode escolher 3 pratos
    `)
let item1 = parseInt(prompt(`
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) sair

    qual será seu primeiro prato?
    `))
if (item1 === 5) {
    alert("muito obrigado! volte sempre")
} else {
    switch (item1) {
        case 1:
            item1 = "Hambúrguer"
            preçoItem1 = +20
            break
        case 2:
            item1 = "Pizza"
            preçoItem1 = +35
            break
        case 3:
            item1 = "Refrigerante"
            preçoItem1 = +5
            break
        case 4:
            item1 = "Batata"
            preçoItem1 = +12
            break
        case 5:
            alert("saindo..")
            break
        default:
            alert("valor invalido")
    }

    let item2 = parseInt(prompt(`
    (1) Hambúrguer – R$ 20
    (2) Pizza – R$ 35
    (3) Refrigerante – R$ 5
    (4) Batata Frita – R$ 12
    (5) sair

    qual será seu segundo prato?
    `))
    if (item2 === 5) {
        alert("muito obrigado! volte sempre")
    } else {
        switch (item2) {
            case 1:
                item2 = "Hambúrguer"
                preçoItem2 = +20
                break
            case 2:
                item2 = "Pizza"
                preçoItem2 = +35
                break
            case 3:
                item2 = "Refrigerante"
                preçoItem2 = +5
                break
            case 4:
                item2 = "Batata"
                preçoItem2 = +12
        }

        let item3 = parseInt(prompt(`
        (1) Hambúrguer – R$ 20
        (2) Pizza – R$ 35
        (3) Refrigerante – R$ 5
        (4) Batata Frita – R$ 12
        (5) sair

        qual será seu ultimo prato?
        `))
        if (item3 === 5) {
            alert("muito obrigado! volte sempre")
        } else {
            switch (item3) {
                case 1:
                    item3 = "Hambúrguer"
                    preçoItem3 = +20
                    break
                case 2:
                    item3 = "Pizza"
                    preçoItem3 = +35
                    break
                case 3:
                    item3 = "Refrigerante"
                    preçoItem3 = +5
                    break
                case 4:
                    item3 = "Batata"
                    preçoItem3 = +12
            }

            
            let totalBruto = parseFloat(preçoItem1 + preçoItem2 + preçoItem3)
          
            let perguntaEstudante = prompt("você é estudante? (s/n)").toLowerCase()
            if (perguntaEstudante == "s" && totalBruto > 50) {
                let desconto = parseFloat(((totalBruto * 10) / 100) + ((totalBruto * 5) / 100))
                let total = parseFloat(totalBruto - desconto)
              
                alert(`
                Obrigado ${nome}!
                Pratos escolhidos:
                - ${item1} de R$${preçoItem1.toFixed(2)}
                - ${item2} de R$${preçoItem2.toFixed(2)}
                - ${item3} de R$${preçoItem3.toFixed(2)}
                total sem desconto: R$${totalBruto.toFixed(2)}
                total com desconto: R$${total.toFixed(2)}
                `)
            } else if (perguntaEstudante == "s" && totalBruto <= 50) {
                let desconto = parseFloat((totalBruto * 10) / 100)
                let total = parseFloat(totalBruto - desconto)
                alert(`
                Obrigado ${nome}!
                Pratos escolhidos:
                - ${item1} de R$${preçoItem1.toFixed(2)}
                - ${item2} de R$${preçoItem2.toFixed(2)}
                - ${item3} de R$${preçoItem3.toFixed(2)}
                total sem desconto: R$${totalBruto.toFixed(2)}
                total com desconto: R$${total.toFixed(2)}
                `)
            } else if (perguntaEstudante == "n" && totalBruto > 50) {
                let desconto = parseFloat((totalBruto * 5) / 100)
                let total = parseFloat(totalBruto - desconto)
                alert(`
                Obrigado ${nome}!
                Pratos escolhidos:
                - ${item1} de R$${preçoItem1.toFixed(2)}
                - ${item2} de R$${preçoItem2.toFixed(2)}
                - ${item3} de R$${preçoItem3.toFixed(2)}
                total sem desconto: R$${totalBruto.toFixed(2)}
                total com desconto: R$${total.toFixed(2)}
                `)
            } else if(perguntaEstudante == "n" && totalBruto <= 50){
                let desconto = 0
                let total = parseFloat(totalBruto - desconto)
                alert(`
                Obrigado ${nome}!
                Pratos escolhidos:
                - ${item1} de R$${preçoItem1.toFixed(2)}
                - ${item2} de R$${preçoItem2.toFixed(2)}
                - ${item3} de R$${preçoItem3.toFixed(2)}
                total sem desconto: R$${totalBruto.toFixed(2)}
                total com desconto: R$${total.toFixed(2)}
                `)
            } else{
                alert("alguma coisa deu errado! porfavor reinicie a pagina.")
            }
        }
    }
}        