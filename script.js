function greet() {
  //Variaveis em javascript (var, let, const)
  //
  alert(
    "Início do jogo: Escolher o nome e distribuir atributos. Distribua 20 pontos entre Vida e Dano para começar o jogo."
  );

  let nome = prompt("Digite seu nome"); 
  let vida = +prompt("Digite quantos pontos deseja colocar em vida");
  let ataque = +prompt("Digite quantos pontos deseja colocar em dano");
  while (!nome || vida + ataque != 20) {
    alert(
      "Deu errado digite novamente, lembrando que nome nao pode estar vazio, e nao pode passar vida + ataque = 20"
    );
    nome = prompt("Digite seu nome"); 
    vida = +prompt("Digite quantos pontos deseja colocar em vida");
    ataque = +prompt("Digite quantos pontos deseja colocar em dano");
  }
  let hp = vida * 100;
  let dano = ataque * 10;
  alert("Seu nome é " + nome + " sua vida é " + hp + " seu ataque é " + dano);
  alert(
    "Olá " +
      nome +
      ", Em meio às brumas da aurora, surge um intrépido aventureiro, pronto para desbravar os mais profundos mistérios e desafios que se escondem nas profundezas de Dangerous Dragons. Com a coragem como sua bússola e a determinação como sua espada, ele adentra os recantos sombrios e as cavernas sinistras, onde as feras aladas e os dragões ancestrais espreitam. Cada passo é uma dança com o perigo, cada olhar uma troca de desafio com as criaturas que guardam os segredos mais valiosos. Mas o herói avança, alimentado pela sede de aventura e pela esperança de conquistar a glória eterna. Que as chamas da coragem iluminem seu caminho e que o vento das asas de dragão o leve rumo ao desconhecido, em uma jornada épica por Dangerous Dragons. Não tenha medo da masmorra adiante!!!."
  );
  let op = prompt(
    "Digite o que voce quer fazer ? Entrar na Masmorra (A) Explorar redondezas (B)"
  );

  if (op == "A") {
    alert(
      "Com a bravura pulsando em seu peito e a determinação refletida em seu olhar, nosso herói adentra a masmorra de Dangerous Dragons. O ar úmido e impregnado de mistério envolve seus sentidos, enquanto cada passo ressoa como um eco nas paredes de pedra antiga. À medida que avança pelas sombras sinistras, o brilho fraco de sua tocha lança luz sobre os segredos ocultos que aguardam ser revelados."
    );
  } else {
    var chance = Math.random();
    if (chance >= 0.5) {
      alert(
        "Você decide explorar,cada curva e cada passagem explorada, o herói avança com coragem inabalável, desafiando os perigos que se ocultam nas sombras. Seu coração bate forte, alimentado pela adrenalina da aventura e pela promessa de descobertas grandiosas. Pois dentro desta masmorra, onde o perigo espreita a cada esquina, também reside a promessa de glória e tesouros inimagináveis, aguardando por aqueles que ousam enfrentar os perigos de Dangerous Dragons."
      );
      hp = hp + 500;
      alert("Seu novo hp é " + hp);
    } else {
      alert(
        "Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a exectativa cresce enquanto você se preara para adentrar a dungeon"
      );
    }
  }

  let ope = prompt(
    "O que vai fazer ? (A)Seguir caminhando nas profundezas da caverna (B)Avaliar o interior da caverna"
  );

  if (ope == "A") {
    var chance = Math.random();
    if (chance >= 0.5) {
      alert(
        "Ao seguir caminhando pela caverna, o tempo passa e a sua equipe de aventureiros começa a ganhar confiança a atenção vai se dispersando e quando notam, todos estão fazendo piadas em tom de voz descontraído. Tudo parece estar indo bem até que todos começam a ouvir um ruído arrepiante surgindo em meio a suas vozes, o clima alegre se dissipa repentinamente, todos ficam alertas e em silêncio tentando observar o que os espera pela frente"
      );
    } else {
      hp -= 200;
      alert("Ao seguir caminhando você tropeça...Vida atual: " + hp);
    }
  } else {
    alert(
      "Ao analiar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado..."
    );
    alert(
      "O objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao se aproximar para examiná-la, voce percebe que ainda há vestígios de óleo dentro dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar atenção ao que os espera diante"
    );
  }

  alert(
    "Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente sentindo a presença ameaçadora dos mortos-vivos. Uma batalha começa"
  );
  let opp = prompt(
    "O que vai fazer? Lutar contra o Monstro (A) ou Sair correndo (B) "
  );
  if (opp == "A") {
    luta(hp, dano);
  } else {
    alert(
      "Ao Sair correndo você bate com a cabeça num pilar de pedra e perde a consciência... "
    );
    alert("Fim de jogo...");
  }
}
