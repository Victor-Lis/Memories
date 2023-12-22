const img = document.querySelector("#mail")

const mailBox = document.querySelector(".mail")
const by = document.querySelector("#mail-by")
const to = document.querySelector("#mail-to")
const content = document.querySelector("#mail-content")
const bye = document.querySelector("#mail-bye")
const audio = document.querySelector("audio");

const url = new URL(window.location.href);

let id = url.searchParams.get("id")

if (!!!id) {

    document.querySelector(".form").style.display = "none"

}

let mails = [
    {
        name: "Redes",
        id: 9312,
        myName: "Victor",
        mail: `
        Essa é apenas uma carta teste!
        <br><br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur facilis, at, non nemo sequi harum voluptatibus necessitatibus deserunt aliquam accusantium iste assumenda voluptates repellat pariatur suscipit reprehenderit id esse debitis.
        <br><br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur facilis, at, non nemo sequi harum voluptatibus necessitatibus deserunt aliquam accusantium iste assumenda voluptates repellat pariatur suscipit reprehenderit id esse debitis.
        <br><br>`,
        bye: "Obrigado!"
    },
]

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
