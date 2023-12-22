
# Memories

Esse site foi feito para homenager amigos meus que se formaram esse ano, mas que fizeram parte da minha vida, muitos me ajudando inclusive na área técnica. Decidi fazer a homenagem dessa forma pois representa uma parte de mim.
## Desafios

Alguns dos meus desafios foram:
- Trabalhar com searchParams
## Aprendizados

Por final aprendi algumas coisas interessantes como: 
- Utilizei um id para diferenciar a mensagem de cada pessoa.
### Função para abrir a mensagem
Ela filtra no objeto "mails" a mail com o id passado no searchParam
```js
function getValue() {

    if (img.src.includes("/Imagens/Closed%20Mail.png")) {

        let result = mails.filter(mail => mail.id == id);

        if (result.length) {
            audio.volume = 0.2
            audio.play()
            img.src = "./Imagens/Opened Mail.png"
            by.innerText = `De: ${result[0].myName}`
            to.innerText = `Para: ${result[0].name}`
            content.innerHTML = result[0].mail
            bye.innerText = result[0].bye
            mailBox.style.display = "inherit"
        }

    } else {
        by.innerText = ``
        to.innerText = ``
        content.innerHTML = ""
        bye.innerText = ""
        mailBox.style.display = ""
        img.src = "./Imagens/Closed Mail.png"
    }

}
```

# Resultado

![Screen1](https://raw.githubusercontent.com/Victor-Lis/Memories/main/Imagens/Screenshot1.png)

![Screen2](https://raw.githubusercontent.com/Victor-Lis/Memories/main/Imagens/Screenshot2.png)

## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
