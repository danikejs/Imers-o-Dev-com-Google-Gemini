let dados = [
  {
    titulo: "Mitsubishi Lancer Evolution (1992)",
    descricao: "O Mitsubishi Lancer Evolution marcou época nos ralis, com sua tração integral e motor 2.0 turbo. Seu design agressivo e desempenho excepcional o tornaram um ícone entre os entusiastas de carros esportivos. O Lancer Evolution é famoso por sua agilidade e capacidade de acelerar rapidamente.",
    vmax: "Velocidade máxima: 250 km/h",
    motor: "2.0 Turbo, a gasolina, 250 cv",
    cambio: "Manual de 5 marchas",
    curiosidades: "O Evo I, como era conhecido, era equipado com o sistema de tração integral ATTES. Sua produção foi limitada, o que o torna um carro bastante cobiçado pelos colecionadores.",
    link: "https://pt.wikipedia.org/wiki/Mitsubishi_Lancer_Evolution",
    tags: "carro esportivo rally turbo japonês performance",
  },
  {
    titulo: "Ford Escort XR3 (1990)",
    descricao: "O Ford Escort XR3 foi um dos esportivos mais populares do Brasil nos anos 90. Com seu design moderno e motor 2.0, ele era a escolha perfeita para quem buscava um carro divertido e com bom desempenho. O XR3 era conhecido por sua suspensão firme e direção precisa.",
    vmax: "Velocidade máxima: 205 km/h",
    motor: "2.0, a gasolina, 115 cv",
    cambio: "Manual de 5 marchas",
    curiosidades: "Conhecido por sua suspensão firme e direção precisa, o XR3 era um dos favoritos para competições de rali. Sua versão conversível era muito desejada.",
    link: "https://pt.wikipedia.org/wiki/Ford_Escort_(Brasil)",
    tags: "carro esportivo 90 brasilpopular",
  },
      {
        titulo: "Mercedes-Benz Classe E (1995)",
        descricao: "A Mercedes-Benz Classe E dos anos 90 era sinônimo de luxo e conforto. Seu interior sofisticado e motor potente proporcionavam uma experiência de condução única. A Classe E era a escolha ideal para quem buscava um carro elegante e confiável.",
        vmax: "Velocidade máxima: 220 km/h ",
        motor: "V6 3.0, a gasolina, 220 cv ", // Pode variar dependendo da versão
        cambio: "Automático de 4 marchas ou manual de 5 marchas",
        curiosidades: "A Classe E era conhecida por sua durabilidade e segurança. Algumas versões vinham equipadas com ar condicionado automático, bancos de couro e teto solar.",
        link: "https://pt.wikipedia.org/wiki/Mercedes-Benz_Classe_E",
        tags: "luxo, alemão, anos 90, sedan, conforto",

    },
    {
      titulo: "Chevrolet Kadett GL (1994)",
      descricao: "O Chevrolet Kadett GL 2.0 era um dos sedãs mais populares do Brasil nos anos 90. Com seu design clássico e motor 2.0, ele oferecia um bom equilíbrio entre conforto e desempenho. O Kadett GL era conhecido por sua durabilidade e baixo custo de manutenção.",
      vmax: "Velocidade máxima: 180 km/h ",
      motor: "2.0 efi, a gasolina, 101 cv",
      cambio: "Manual de 5 marchas",
      curiosidades: "O Kadett GL era uma opção popular para taxistas devido à sua robustez e baixo custo de manutenção. Havia também uma versão com motor a álcool.",
      link: "https://pt.wikipedia.org/wiki/Chevrolet_Kadett",
      tags: "sedan, popular, brasil, anos 90, durabilidade",
      ano: 1994
    },
    {
      titulo: "Chevrolet Opala Diplomata (1992)",
      descricao: "Uma das opções mais luxuosas dos anos 90, o Opala já era um modelo consagrado desde a década de 1960 e contou com diversas versões ao longo de sua trajetória. O Chevrolet Opala Diplomata foi uma delas.",
      vmax: "Velocidade máxima: 182 km/h",
      motor: "6 cilindros em linha, a gasolina ou álcool, 141 cv",
      cambio: "Automático de 3 marchas ou manual de 4 marchas",
      curiosidades: "O Opala Diplomata era conhecido por seu conforto e espaço interno. Algumas versões vinham equipadas com ar-condicionado, direção hidráulica e bancos de couro.",
      link: "https://pt.wikipedia.org/wiki/Chevrolet_Opala",
      tags: "sedan, luxo, brasil, anos 90, clássico",

    },
    {
      titulo: "Chevrolet Omega (1992)",
      descricao: "O Chevrolet Omega era um sedã grande e luxuoso, conhecido por seu conforto e desempenho. Com um design elegante e motor V6 potente, ele era uma opção popular para quem buscava um carro espaçoso e sofisticado.",
      vmax: "Velocidade máxima: 210 km/h",
      motor: "V6 3.0, a gasolina, 185 cv",
      cambio: "Automático de 4 marchas",
      curiosidades: "O Omega era conhecido por seu silêncio a bordo e por oferecer um nível de conforto comparável a carros europeus.",
      link: "https://pt.wikipedia.org/wiki/Chevrolet_Omega",
      tags: "chevrolet, sedan, luxo, anos 90, brasil",
    },
    {
      titulo: "Volkswagen Santana (1991)",
      descricao: "O Santana passou por uma grande reestilização em 1991, ganhando um visual mais moderno e equipamentos mais sofisticados. Ele era conhecido por sua robustez e confiabilidade.",
      vmax: "Velocidade máxima: 180 km/h ",
      motor: "1.8 AP, a gasolina ou álcool, potência variável dependendo da versão",
      cambio: "Manual de 5 marchas ou automático",
      curiosidades: "O Santana era conhecido por sua durabilidade e mecânica simples. Algumas versões vinham equipadas com ar-condicionado e direção hidráulica.",
      link: "https://pt.wikipedia.org/wiki/Volkswagen_Santana",
      tags: "volkswagen, sedan, familiar, anos 90, brasil",
      ano: 1991
  },
    {
      titulo: "Chevrolet Monza (1991)",
      descricao: "O Monza foi um dos carros mais populares do Brasil nos anos 80 e 90. Em 1991, recebeu uma atualização visual e mecânica, mantendo seu sucesso entre os consumidores.",
      vmax: "Velocidade máxima: 190 km/h ",
      motor: "2.0, a gasolina ou álcool, potência variável dependendo da versão",
      cambio: "Manual de 5 marchas ou automático",
      curiosidades: "O Monza era conhecido por seu design esportivo e desempenho. Havia versões com motor a álcool e turbo, oferecendo um desempenho mais esportivo.",
      link: "https://pt.wikipedia.org/wiki/Chevrolet_Monza",
      tags: "chevrolet, sedan, popular, anos 90, brasil",
      ano: 1991
  },
  {
    titulo: "Fiat Tempra (1991)",
    descricao: "O Fiat Tempra era um sedã italiano que chegou ao Brasil nos anos 90, oferecendo um bom equilíbrio entre conforto e desempenho. Ele era conhecido por seu design elegante e motor 1.8.",
    vmax: "Velocidade máxima: 195 km/h ",
    motor: "1.8, a gasolina, potência variável dependendo da versão",
    cambio: "Manual de 5 marchas ou automático",
    curiosidades: "O Tempra era conhecido por seu design moderno e acabamento interno de qualidade. Havia versões com ar-condicionado, direção hidráulica e vidros elétricos.",
    link: "https://pt.wikipedia.org/wiki/Fiat_Tempra",
    tags: "fiat, sedan, italiano, anos 90, brasil",
},
{
  titulo: "Renault Twigo (1993)",
  descricao: "O Renault Twigo foi um compacto europeu que chegou ao Brasil em 1993, oferecendo um design divertido e economia de combustível. Ele era uma opção ideal para o dia a dia na cidade.",
  vmax: "Velocidade máxima: 150 km/h",
  motor: "1.0, a gasolina, potência variável dependendo da versão",
  cambio: "Manual de 5 marchas",
  curiosidades: "O Twigo era conhecido por seu design compacto e divertido. Era uma ótima opção para quem buscava um carro econômico para uso urbano.",
  link: "https://pt.wikipedia.org/wiki/Renault_Twigo",
  tags: "renault, hatch, compacto, anos 90, brasil",
  ano: 1993
},
      {
        titulo: "Chevrolet Corsa (1994)",
        descricao: "O Chevrolet Corsa foi um dos carros mais populares do Brasil nos anos 90. Conhecido por sua versatilidade e economia de combustível, ele conquistou o público brasileiro.",
        vmax: "Velocidade máxima: 180 km/h",
        motor: "1.0 8V, a gasolina, 58 cv", 
        cambio: "Manual de 5 marchas",
        curiosidades: "O Corsa foi um dos primeiros carros nacionais a oferecer a opção de ar-condicionado de fábrica. Sua versão hatch era muito popular entre os jovens.",
        link: "https://pt.wikipedia.org/wiki/Chevrolet_Corsa",
        tags: "chevrolet, hatch, popular, anos 90, brasil",

    },
    {
        titulo: "Fiat Palio (1996)",
        descricao: "O Fiat Palio revolucionou o mercado brasileiro com seu design moderno e motor 1.0. Ele se tornou um dos carros mais vendidos do país.",
        vmax: "Velocidade máxima: 175 km/h",
        motor: "1.0 8V, a gasolina, 60 cv",
        cambio: "Manual de 5 marchas",
        curiosidades: "O Palio foi o primeiro carro brasileiro a receber o prêmio de Carro do Ano. Sua versão Weekend era muito popular entre as famílias.",
        link: "https://pt.wikipedia.org/wiki/Fiat_Palio",
        tags: "fiat, hatch, popular, anos 90, brasil",
    },
    {
      titulo: "Dodge Dakota (1997)",
      descricao: "A Dodge Dakota era uma picape média que oferecia um bom equilíbrio entre trabalho e lazer. Com seu design robusto e motor V6, ela era uma opção popular para quem buscava um veículo versátil.",
      vmax: "Velocidade máxima: 185 km/h ",
      motor: "V6, a gasolina, potência variável dependendo da versão",
      cambio: "Automático ou manual",
      curiosidades: "A Dakota era conhecida por sua capacidade de carga e robustez. Algumas versões vinham com tração nas quatro rodas.",
      link: "https://pt.wikipedia.org/wiki/Dodge_Dakota",
      tags: "dodge, picape, americana, anos 90, brasil",
      ano: 1997
  },
  {
    titulo: "Ford Fiesta CLX (1996)",
    descricao: "O Ford Fiesta CLX era um hatch compacto e econômico, ideal para o uso urbano. Ele era conhecido por seu design moderno e bom acabamento.",
    vmax: "Velocidade máxima: 170 km/h",
    motor: "1.0 ou 1.3, a gasolina, 88cv",
    cambio: "Manual de 5 marchas",
    curiosidades: "O Fiesta CLX era uma opção popular para quem buscava um carro compacto e fácil de dirigir. Algumas versões vinham com ar-condicionado e direção hidráulica.",
    link: "https://pt.wikipedia.org/wiki/Ford_Fiesta",
    tags: "ford, hatch, compacto, anos 90, brasil",
    ano: 1996
},
{
  titulo: "Honda Civic (1997)",
  descricao: "O Honda Civic era um dos hatches mais desejados da época, com seu design esportivo e motor 1.6. Ele era conhecido por sua confiabilidade e desempenho.",
  vmax: "Velocidade máxima: 190 km/h ()",
  motor: "1.6, a gasolina, potência variável dependendo da versão",
  cambio: "Manual de 5 marchas ou automático",
  curiosidades: "O Civic era conhecido por sua boa dirigibilidade e baixo custo de manutenção. Algumas versões vinham com motor 16 válvulas e eram bastante esportivas.",
  link: "https://pt.wikipedia.org/wiki/Honda_Civic",
  tags: "honda, hatch, esportivo, anos 90, japonês",
  ano: 1997
},
{
  titulo: "Fiat Uno Mille EP (1990)",
  descricao: "O Fiat Uno Mille EP era uma versão mais equipada do popular Uno, conhecido por sua economia de combustível e design compacto. Era uma ótima opção para o dia a dia na cidade.",
  vmax: "Velocidade máxima: 160 km/h ()",
  motor: "1.0, a gasolina, 50 cv",
  cambio: "Manual de 5 marchas",
  curiosidades: "Conhecido por sua robustez e baixo custo de manutenção.",
  link: "https://pt.wikipedia.org/wiki/Fiat_Uno",
  tags: "fiat, hatch, popular, anos 90, brasil, economico",
  ano: 1990
},
{
  titulo: "Volkswagen Passat (1990)",
  descricao: "O Passat era um sedã médio espaçoso e confortável, ideal para famílias. Sua versão 1990 era conhecida pela sua robustez e confiabilidade.",
  vmax: "Velocidade máxima: 195 km/h ()",
  motor: "1.8 AP, a gasolina ou álcool, 90 cv",
  cambio: "Manual de 5 marchas ou automático",
  curiosidades: "Oferecia um bom espaço interno e porta-malas.",
  link: "https://pt.wikipedia.org/wiki/Volkswagen_Santana",
  tags: "volkswagen, sedan, familiar, anos 90, brasil, espaçoso",
  ano: 1990
},
{
  titulo: "Ford Ka (1996)",
  descricao: "O Ford Ka chegou ao Brasil em 1996, conquistando o público com seu design moderno e compacto. Era um carro ideal para a cidade.",
  vmax: "Velocidade máxima: 165 km/h ()",
  motor: "1.0, a gasolina, 60 cv",
  cambio: "Manual de 5 marchas",
  curiosidades: "Conhecido por seu design divertido e compacto.",
  link: "https://pt.wikipedia.org/wiki/Ford_Ka",
  tags: "ford, hatch, compacto, anos 90, brasil",
  ano: 1996
},
{
  titulo: "Chevrolet Astra (1994)",
  descricao: "O Chevrolet Astra era um hatch médio que chegou ao Brasil para competir com o Golf. Ele oferecia um bom desempenho e um design esportivo.",
  vmax: "Velocidade máxima: 190 km/h ()",
  motor: "2.0, a gasolina, 110 cv",
  cambio: "Manual de 5 marchas ou automático",
  curiosidades: "Conhecido por sua boa dirigibilidade e design esportivo.",
  link: "https://pt.wikipedia.org/wiki/Chevrolet_Astra",
  tags: "chevrolet, hatch, médio, anos 90, brasil, esportivo",
  ano: 1994
},
{
  titulo: "Peugeot 206 (1998)",
  descricao: "O Peugeot 206 chegou ao Brasil em 1998, com um design moderno e esportivo. Ele conquistou o público jovem com suas diversas versões e motorizações.",
  vmax: "Velocidade máxima: 185 km/h ()",
  motor: "1.6, a gasolina, 110 cv",
  cambio: "Manual de 5 marchas ou automático",
  curiosidades: "Conhecido por seu design elegante e boa dirigibilidade.",
  link: "https://pt.wikipedia.org/wiki/Peugeot_206",
  tags: "peugeot, hatch, europeu, anos 90, brasil, estiloso",
  ano: 1998
},
{
  titulo: "Citroën Xsara (1997)",
  descricao: "O Citroën Xsara era um hatch médio que se destacava pelo seu conforto e design inovador. Ele oferecia um bom espaço interno e um porta-malas generoso.",
  vmax: "Velocidade máxima: 180 km/h ()",
  motor: "1.6, a gasolina, 110 cv",
  cambio: "Manual de 5 marchas ou automático",
  curiosidades: "Conhecido por seu conforto e suspensão macia.",
  link: "https://pt.wikipedia.org/wiki/Citroën_Xsara",
  tags: "citroen, hatch, francês, anos 90, brasil, confortável",
  ano: 1997
},
{
  titulo: "Renault Clio (1991)",
  descricao: "O Renault Clio chegou ao Brasil em 1991, oferecendo um design moderno e um bom desempenho. Ele era um dos hatches mais populares da época.",
  vmax: "Velocidade máxima: 175 km/h ()",
  motor: "1.0 ou 1.6, a gasolina, 60 cv a 90 cv",
  cambio: "Manual de 5 marchas",
  curiosidades: "Conhecido por seu design moderno e boa dirigibilidade.",
  link: "https://pt.wikipedia.org/wiki/Renault_Clio",
  tags: "renault, hatch, europeu, anos 90, brasil",
  ano: 1991
},
    {
      titulo: "Volkswagen Gol GTI (1989)",
      descricao: "O Gol GTI foi um dos primeiros carros nacionais com injeção eletrônica de combustível. Com seu motor 1.8 8V, suspensão esportiva e visual agressivo, ele oferecia um desempenho emocionante e se tornou um ícone entre os entusiastas de carros esportivos.",
      vmax: "Velocidade máxima: 220 km/h",
      motor: "1.8 8V, a gasolina, 110 cv",
      cambio: "Manual de 5 marchas",
      curiosidades: "O Gol GTI foi o primeiro carro nacional a ultrapassar a marca dos 200 km/h em testes de fábrica.",
      link: "https://pt.wikipedia.org/wiki/Volkswagen_Gol",
      tags: "volkswagen, hatch, esportivo, anos 90, brasil, gti",
      ano: 1989
  }
  ];
