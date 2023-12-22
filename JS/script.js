// const input = document.querySelector("#input")
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
        name: "Vini",
        id: 2102,
        myName: "Victor (Jesus)",
        mail: `
        Antes de tudo, já aviso que pra mim esse vai ser um exercicío akkakaka, faz muito tempo que não escrevo um texto pra valer, ultimamente era tudo ChatGPT. 
        <br><br> 
        Bom, eu fiz esse site muito pensando em você, pensei em outros amigos e afins, mas pensei principalmente: "O Vini merece algo a altura", cara você não ideia como vai fazer falta não ter você todos os dias.
        <br><br>
        Honestamente, eu não sei nem o que falar, é tanto tempo, tantas coisas, tantos aprendizados, tantos momentos, enfim vou tentar.
        <br><br>
        Cara especialmente nesse mundo de coding eu devo muito a você, se não fosse você me motivando sempre, falando dos seus estudos, dos seus aprendizados, eu muito provavelmente não seria quem sou hoje, muitas vezes até eu me consolidar nos estudos eu pensava em tu, tipo, se ele consegue eu consigo, ou ainda pensava "Po, não posso decepcionar o cara, ele acha que eu manjo", pra mim mesmo que a gente se afaste (coisa que não quero), vou sempre lembrar de você lá no começo, quando eu só sabia HTML / CSS e bem pouco de JS, me dando dicas e fazendo o caminho pra mim.
        <br><br>
        Eu vou sempre me orgulhar em falar que eu estudei com você e falar que foi você o cara abriu portas pra mim nesse mundo de coding, hoje especialmente na minha sala, me chamando de viciado em JS ou falam que JS é minha esposa. Eu sempre tive muita vontade de em apresentações no geral que eu conseguisse falar de código citar você, fiz isso lá no 2° BIM no transdiciplinar, mas queria ter feito mais, isso é algo que me arrependo, mas eu garanto, vou fazer isso e muito ano que vem.
        <br><br> 
        Eu não sei mensurar o quanto, mas vai fazer muita falta sair de um lab e não ter você pra trocar ideia e falar mal de uns professores ai... Ou que seja sair da sala ver você e ir falar de um bug que to passando e que nem Jesus sabe resolver akakakakak.
        <br><br>
        Sem dúvidas você é o cara que eu mais vou sentir falta, poderia somar todo o resto do pessoal dos 3°s que ainda não chegaria em tu, uma coisa que me faz te admirar mais ainda, é que não subiu pra sua cabeça, você manja muito, muito mesmo, mas nem por isso você se gaba disso ou deixa de ensinar os outros, isso pra mim sem dúvidas é uma bela lição.
        <br><br>
        No fim só fiz esse site pra mostrar <1% do quanto vai fazer falta essa troca de ideia e convivio constante, embora sejam "Só 2 anos", são pra mim sem dúvidas os 2 anos mais marcantes da minha vida, obrigado por todos os ensinamentos e momentos de descontração, meu ídolo.
        <br><br>`,
        bye: "Tamo junto sempre!"
    },
    {
        name: "Paulão",
        id: 6321,
        myName: "Victor (Jesus)",
        mail: `
        Po cara, é difícil saber por onde começar e também não sou o melhor com palavras, mas vou tentar.
        <br><br>
        Paulão, cara se eu me arrempendo de algo durante esses anos de Ensino Médio até aqui, é não ter começado a falar com você antes, eu não sei porque não falei com você antes, mas me arrependo.
        <br><br>
        Começamos a conviver bastante nesses últimos 6 meses, especialmente no período do SENAI pra cá. E eu aprendi muita coisa com você, eu sei que parece meio solto falar algo assim, ou sem sentido talvez.
        <br><br>
        Mas tem explicação, cara eu não sei explicar mais conviver com você me fez aprender muitas coisas, a levar as coisas mais na boa, a ser mais tranquilo, de código, até agora acho o Portal dos TCCs que você fez íncrivel, inclusive eu no seu lugar antes de sair, pegava amanhã pra tirar uma fotos e uns prints pra colocar no seu Linkedin, a achar diversão nas coisas simples, sempre que eu via você e ia trocar uma ideia, mesmo que eu tivesse em um dia meio mais ou menos, eu saia mais feliz.
        <br><br>
        Eu não sei explicar, mas eu tenho uma admiração muito grande por você cara, eu te vejo com uma aura muito foda. Te vejo como um cara: inteligente, bacana, divertido, calmo... Te acho um cara muito respeitoso também, sem dúvidas uma qualidade muito rara hoje em dia, tenho que melhorar isso em mim...
        <br><br>
        Saber que não vou ter você ano que vem todos os dias pra trocar uma ideia ou só dar uma risada me faz ter uma sensação estranha, uma dor no peito inexplicável, vou sem dúvidas sempre que lembrar dos meus bons momentos de Ensino Médio lembrar de você e das nossas conversas, risadas akakakakak... Vamos manter contato cara, vai ser um prazer enorme ano que vem, dias como na semana Paulo Freire convidar você pra ir falar um pouco das suas vivências pro povo do 1°, ou no próximo E.P.A, mostrar os projetos que estão sendo feitos e dentre esses projetos, vou sempre falar para os que vem do Portal dos TCCs feito por você.
        <br><br>
        Admiro muito também o jeito que você faz suas apresentações, é muito cativante ver suas apresentações, dá um interesse, é muito fácil ser convencido por você akakakak, tu manda muito de apresentar cara, fico imaginando você no mercado de trabalho, você vai ser tipo um coringa, se precisarem vender algo, vão mandar você kakakaak.
        <br><br>
        Observação: Fiquei feliz para caramba com seu gol hoje, preferia que tivesse sido ontem, mas você merece, fico menos triste por saber que foi você que fez e merecia fazer desde ontem.
        <br><br>`,
        bye: "Obrigado por tudo <3"
    },
    {
        name: "Rafael (Japa)",
        id: 4101,
        myName: "Victor (Jesus)",
        mail: `
        Po cara, é difícil saber por onde começar e também não sou o melhor com palavras, mas vou tentar.
        <br><br>
        Não me lembro bem como foi nossa primeira conversa pra ser honesto, mas desde antes de te conhecer, já te achava um cara bacana, bem na sua, o que pra mim te tornava ainda mais especial.
        <br><br>
        Pra mim, desde a nossa primeira conversa até hoje, você sempre foi muito presente, sempre da melhor forma de ser, com piadas e comentários ácidos, o que sempre me faz rir kaakakka, desde o comecinho do ano passado, quando a Etec ainda era um mundo novo pra mim e pra você já nem tanto, te admirei, sempre te achei um cara bacana e conforme fomos conversando mais, um ombro amigo, sempre presente.
        <br><br>
        Vai ser muito estranho sair da sala nos 15 minutos de fecilidade diários e não ver você ali sentado no banquinho do lado da sala pra gente jogar conversa fora ou xingar algum professor arrombado... 
        <br><br>
        Honestamente, no começo não achei que seriamos tão próximos, achava que éramos muito diferentes, embora já te admirasse. 
        <br><br>
        Por isso fico feliz de hoje em dia poder dizer que te considero muito e que vai fazer falta não ter sua presença diária, porque pra mim pelo menos, prova que valeu a pena ter te conhecido.
        <br><br>
        Você é muito especial cara, um dos poucos que de maneira honesta sei que são gente boa de coração, não perde sua essência cara, você é incrível e torna o dia a dia das pessoas a sua volta tão incrível quanto você, te amo <3.
        <br><br>
    `,
        bye: "Bora jogar mine um dia <3"
    },
    {
        name: "Lara",
        id: 5021,
        myName: "Jesus",
        mail: `
        Bom eu não sou lá o melhor com palavras, mas vou tentar deixar meu recadinho.
        <br><br>
        Cara, você é muito marcante pra mim, eu já meio que falei por cima, mas eu acho que não dá pra explicar o peso disso pra mim. Mas se hoje em dia eu me sinto "em casa" na Etec, se hoje em dia eu sinto falta de todo esse povo que vai, se no fim do ano que vem eu vou sentir falta da Etec, muito isso só aconteceu por causa de você.
        <br><br>
        Só pra tentar explicar isso, eu disse que a minha 2ª mémoria na Etec é de você, mas uma coisa eu não disse, a minha 1ª mémoria feliz é com você. A minha primeira memória na Etec é muito tensa, é de toda minha turma na sala quieta, ninguém falando, nem um barulho, eu tinha muito medo de como seria esse novo ciclo, eu fiquei 9 anos na minha antiga escola, eu não sabia como lidar com isso.
        <br><br>
        Mas naquele momento em que você foi lá na sala falar do apadrinhamento, conversando com a gente, como ou porque examente eu não sei, mas me deu um "alívio", tipo tirando uma pressão do peito, me fazendo me sentir mais confortável com tudo isso e eu sei que o que marcou foi você organizando tudo isso e falando com a gente e não o apradrinhamento em si, é que a minha madrinha é a Bina, ela é muito tímida e nunca falou comigo... Mas eu ainda si me senti mais confortável.
        <br><br>
        Esse momento de alívio foi o que me fez começar a me soltar, interagir mais, ser menos tímido, coisa que eu era bastante, quebrou uma "barreira" que eu estava sentindo entre as turmas mais velhas e a minha turma, isso me fez conversar mais com outras pessoas sem medo.
        <br><br>
        Eu poderia (fazendo alusão a uma flor) ter desabrochado mais tarde ou pior ainda nunca ter desabrochado, mas graças a esse nosso primeiro contato comecei a me soltar mais e ser quem sou hoje.
        <br><br>
        Isso é só o primeiro contato, me marcou também as inúmeras situações que do nada, sem nenhum assunto específico, começavamos a conversar mó cota akkakaka, me lembro de uma vez que paramos pra falar de corte de cabelo (porque eu queria cortar o meu) ou outra vez que você fez um App (ou site, não me lembro bem) do Stitch e você tava me mostrando super animada, essas lembranças fazem meu coração ficar quentinho.
        <br><br>`,
        bye: "Obrigado por tudo <3"
    },
    {
        name: "Lucas",
        id: 8428,
        myName: "Jesus",
        mail: `
        Bom eu não sou lá o melhor com palavras (nem de português akakakak, por favor não analise a minha gramática), mas vou tentar deixar meu recadinho.
        <br><br>
        A gente se aproximou bastante esse ano e cada dia mais fomos conversando, pra mim, desde antes de te conhecer, você me passava uma vibe de serenidade, de sensatez, de paz...
        <br><br>
        E justamente, eu estava certo, até hoje, com a gente conversando tive ainda mais essa certeza, sempre que você descreve um situação, uma pessoa, uma coisa, você acerta em cheio, todas a pessoas que você falou que não eram lá tão legais, eu vi que realmente não eram, tudo que você falou que era bom ou ruim, eu vi que você estava certo novamente... Honestamente, é um erro não te ouvir.
        <br><br>
        Você como pessoa então, não tenho palavras. Sensacional, cara você sempre anima as pessoas ao seu redor, seu senso de humor, seu jeito, suas falas, sempre são cativantes. Você sempre demonstrando preocupação com o próximo, interesse, com você ao lado é difícil se sentir "sozinho", sabe? É difícil não se sentir escutado ou relevante...
        <br><br>
        Essas pequenas coisas incríveis que você faz no dia a dia apenas sendo você vão fazer muito falta no ano que vem, justamente por não estar ali sempre. Mas de eu uma coisa eu sei, você vai continuar sendo incrível, mas de uma coisa eu tenho certeza, você sempre vai ser uma pessoa que cativa as pessoas a sua volta. Te amo Lucas <3.
        <br><br>
        `,
        bye: "Obrigado por tudo <3"
    },
    {
        name: "Ju",
        id: 2713,
        myName: "Jesus",
        mail: `
        Bom eu não sou lá o melhor com palavras, mas vou tentar deixar meu recadinho pra você, uma pessoa tão especial pra mim.
        <br><br>
        Bom, que eu me lembre a primeira vez que a gente se falou eu ainda era "amigo" da Bell, que doidera, na época eu já estava me afastando dela e ela falou com você assim super animada e vide-versa, ai tive a sensação de vocês serem super amigas, logo vocês seriam parecidas (sim minha cabeça é estranha), ai já fiquei com um certo pé atrás, pois estava me afastando dela...
        <br><br>
        E cara, que erro, você é íncrivel, muito diferente do que eu pensava, você sempre se importou comigo me perguntou como eu estava, se eu estava bem sempre pronta pra ouvir sabe?
        <br><br>
        Você é muito marcante pra mim por um motivo muito grande, eu nunca fui muito aberto em relação a minha vida pessoal, de falar dos problemas "de casa", mas com você eu senti esse espaço, de desabafar, de ter um ombro amigo, que se importava... Da mesma forma que você se abriu comigo contando de como você tava, do que você estava passando, isso me fez te achar ainda mais íncrivel, de estar ali pra me ouvir, pra ser tão transparente, de me dar esse espaço pra te ouvir também, tentar te ajudar dentro to possível, me fazer presente...
        <br><br>
        Você todas as vezes que me via perguntava como estava, se eu estava bem, esse carinho, essa preocupação, pra mim é muito marcante, eu to muito acostumado com um convivio superficial com as pessoas, mas com você é diferente, eu realmente sinto que posso confiar em você, desabafar e desabar se for o caso, que você vai estar presente e eu espero que você sinta o mesmo por mim, pois sempre que precisar estarei aqui!
        <br><br>
        Naqueles dias que a gente não acorda muito legal e ainda tem que ir pra escola, o que me acalmava era saber que você estaria ali, se alguma coisa acontecesse poderia correr pra falar com você! Você se tornou meu porto seguro <3
        <br><br>
        As coisas passam tão rápido caramba, infelizmente conversamos menos últimos tempos por conta da correria que foi, mas eu ainda te amo muito viu, te acho incrível e quero continuar falando com você pra sempre!
        <br><br>
        E mais uma vez você mostrou esse seu lado de preocupação com o próximo e em especial comigo, ontem, me entregando o convite da formatura, pois eu estava sentindo(e continuo) muito essa ida de vocês, esse fim de ciclo de vocês. Mais uma vez você, com seu jeito sempre tão especial de ser, deu um jeito de me acalmar...
        <br><br>
        `,
        bye: "Obrigado por tudo <3"
    },
    {
        name: "Juan",
        id: 9843,
        myName: "Jesus",
        mail: `
        Bom eu não sou lá o melhor com palavras, mas vou tentar deixar meu recadinho.
        <br><br>
        A gente se aproximou bastante nessa reta final de ano e especialmente nos últimos meses e embora isso seja recente, sempre te admirei, mesmo quando a gente trocava uma ideia rápido ainda sem sermos tão próximos, já te achava um cara incrível com uma vibe incrível. 
        <br><br>
        Infelizmente fico com um arrependimento em relação a isso, não ter começado a falar com você antes, talvez por medo... Você era um cara conhecido, engraçado, bonito(não eu não puxei saco aqui akakakak), pensei que fosse ser tudo talvez uma faixada e que você não seria tão legal assim, mas eu tava muito errado, a cada dia mais, a cada piada nova, a cada segundo ao seu lado, é possível ver que você é incrível, sendo você, sem forçar algo que você não é ou fingindo algo que não é você.
        <br><br>
        Você sempre faz as pessoas a sua volta rirem, se divertirem, tornarem as vezes momentos ruins em momentos mais amenos, quer uma prova? Ontem (15/12/23), você perdeu e desabou no chão e todo mundo que em algum momento você deixou o dia pelo menos um pouco mais sorridente foi te acolher e olha, foi gente pra caramba, isso contando só os que foram lá, perdi a conta de quantos me perguntaram como você tava, porque não tinham ido te ver, mas ainda si se importavam com você.
        <br><br>
        Você é um cara iluminado qualquer pessoa que não fique mais feliz só por estar do seu lado, com seu jeito, com suas piadas e brincadeiras, já morreu por dentro. Você tem esse dom de deixar o dia de qualquer um mais feliz.
        <br><br>
        Tu não tem ideia de como vai fazer falta não ver você todos os dias, pra animar aqueles dias meio ruins, sabe? Perdi as contas de quantas vezes mesmo sem a gente convesar tanto ainda, estava em um dia meio bunda, talvez triste ou cansado ou depois de uma aula chata ou de uma prova e, você apenas sendo você me fez dar um sorriso, levar o dia com mais leveza, me fez tirar felicidade daquilo. Acho que isso pra mim é o mais incrível, você tem uma vibe tão legal, tão leve, tão até feliz...
        <br><br>
        Claro também não posso deixar de falar que tu é pica em tudo né, po você é um Deus cara, estiloso, engraçado, joga 83 esportes e bem ainda, te acho inteligente... Faltam adjetivos pra descrever você, obrigado por ser quem você é!
        <br><br>
        `,
        bye: "Obrigado por tudo <3"
    },
    {
        name: "Hana",
        id: 3332,
        myName: "Vitu",
        mail: `
        Bom eu não sou lá o melhor com palavras, mas vou tentar deixar meu recadinho.
        <br><br>
        Caraca que estranho, quando te vi a primeira vez, nunca imaginei que estaria aqui, fazendo esse textinho e tendo esse carinho descomunal que tenho por você hoje, mas vamos lá tentar explicar o inexplicável, pra no fim falar menos de <1% de tudo que eu sinto.
        <br><br>
        Que doidera, mesmo a gente sendo tão diferente em tantos aspectos, a gente consegue conviver e muito bem né. Você (sabendo disso ou não) me ensinou muitas coisas, acho que a mais memorável pra mim é a falar "Te amo", antes de conhecer você eu não sei porque exatamente, mas essa palavra tinha um peso estranho, eu não usava nunca, meio que eu travava, não saia, mas comecei a ver que saía sim na verdade, mas apenas para pessoas especiais, como você!
        <br><br>
        Outra coisa muito marcante pra mim é que mais uma vez, mesmo sendo tão diferentes no dia a dia. Você ainda é uma das poucas (se não, muito provavelmente a única) pessoa que sente as mesmas dores que eu, em todas essas relações com as pessoas, amizades e afins, sempre me senti muito sozinho sabe? De ninguém entender e, quando eu tentava explicar saia com um babaca na história, sem se quer tentarem entender meu lado. 
        <br><br>
        Mas com você eu vi algo diferente, senti que não era tão sozinho assim e que mesmo que eu tivesse errado, você não iria simplesmente agir igual um idiota, mas sim iria conversar numa boa, coisa que nunca senti com ninguém antes, esse carinho sincero, não baseado em algum benefício que eu gere para a pessoa.
        <br><br>
        Você é uma das poucas pessoas que no meu convivio não passa de um contato superficial, de gritar "JESUSS!!", pedir bença e ir embora, você diferente de todas as outras pessoas que me veem como um personagem ou um robô sem sentimentos, me vê como um humano, que nem sempre está 100%, que nem sempre esta feliz e que quando esse é caso, não some, mas pelo contrário, se faz presente e me ajuda a passar por tal situação.
        <br><br>
        Eu sei que ainda temos nem que seja 1 ano pela frente, mas você é muito importante pra mim e outra coisa que aprendi com você (mesmo sem querer) é não deixar pra depois falar o que sente ou pensa em relação a alguém para depois, obrigado por ser a pessoa íncrivel que você é, que se tornou "meu porto seguro"..
        <br><br>`,
        bye: "Te amo!"
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
