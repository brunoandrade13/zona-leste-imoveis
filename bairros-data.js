// Shared editorial content for the Bairros pages. Text and photo credits
// sourced from the neighborhood research guide; photo credits are required
// (Wikimedia Commons CC BY / CC BY-SA licenses) and shown under each image.
const BAIRROS_DATA = [
  { id:'mooca', nome:'Mooca', tier:1,
    mob:'Tradição italiana', desc:'O bairro mais italiano fora da Itália, hoje um dos endereços mais procurados da Zona Leste.',
    populacao:'80.880 habitantes (distrito, Censo IBGE 2022)',
    texto:[
      'A Mooca é conhecida como "o bairro mais italiano fora da Itália". Sua identidade nasceu no fim do século XIX, quando milhares de imigrantes italianos se instalaram na região para trabalhar nas fábricas que surgiam ao longo da antiga Estrada de Ferro — como a Cotonifício Crespi e a Fábrica Antarctica, fundadora do Clube Atlético Juventus em 1924. O nome "Mooca" vem do tupi-guarani e significa "fazer casa" — segue sendo, mais de um século depois, um símbolo de acolhimento. O aniversário do bairro é celebrado em 17 de agosto.',
      'Segundo o Censo IBGE 2022, o distrito da Mooca tem 80.880 habitantes e densidade de cerca de 10.200 hab/km² — número intermediário para os padrões da cidade, reflexo da mistura de torres residenciais recentes com vilas operárias e antigos quarteirões industriais convertidos. O perfil etário é predominantemente adulto (35 a 59 anos), com apenas 18% de crianças e adolescentes, sinal de um bairro consolidado e envelhecendo. O perfil socioeconômico é elevado e a urbanização, plenamente consolidada — um dos distritos de referência histórica e demográfica da capital.',
      'O que torna a Mooca especial não é só a herança italiana, mas como ela continua viva no dia a dia: a Rua da Mooca guarda arquitetura de vilas operárias preservadas, a Festa de San Gennaro acontece desde 1973 reunindo milhares de pessoas, e o Museu da Imigração (instalado na antiga Hospedaria dos Imigrantes, que recebeu mais de 2,5 milhões de estrangeiros entre 1887 e 1978) recebe visitantes que querem entender a formação de São Paulo. O Estádio Conde Rodolfo Crespi, do Clube Atlético Juventus, e um comércio gastronômico intenso — de cantinas tradicionais a bares descolados — completam um bairro tradicional, mas em plena renovação urbana e verticalização.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Mooca - rua típica do bairro', credit:'Pedro Mendonça', licenca:'CC BY-SA 2.0', url:'https://commons.wikimedia.org/wiki/File:Mooca_-_0473_(16336007263).jpg'},
      {file:'2.jpg', alt:'Museu da Imigração de São Paulo', credit:'José Pedro Viviani', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Fachada_do_Museu_da_Imigra%C3%A7%C3%A3o_de_S%C3%A3o_Paulo.JPG'},
      {file:'3.jpg', alt:'Estádio Conde Rodolfo Crespi (Clube Atlético Juventus)', credit:'Marcelo Baseggio', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Faixada_do_est%C3%A1dio_Conde_Rodolfo_Crespi.jpg'},
    ] },

  { id:'tatuape', nome:'Tatuapé', tier:1,
    mob:'Metrô + 4 parques', desc:'O endereço mais consolidado da Zona Leste, com metrô, trem e forte comércio.',
    populacao:'98.601 habitantes (distrito, Censo IBGE 2022)',
    texto:[
      'A história do Tatuapé remonta a 1560, quando Brás Cubas — fundador de Santos — atravessou a Serra do Mar em busca de ouro e encontrou o ribeirão que batizou o bairro; "Tatuapé" vem do tupi-guarani e significa "caminho dos tatus". Por séculos foi uma região agrícola: o imigrante italiano Benedito Marengo chegou a plantar parreirais de uva tão produtivos que deram origem às famosas "Uvas Marengo". Até 1930 era pouco mais que um amontoado de casas; em 1934 passou a se chamar Distrito da Paz, e no início do século XX virou polo de olarias — os tijolos feitos ali ajudaram a construir boa parte de São Paulo. O aniversário do bairro é em 5 de setembro.',
      'Com 98.601 habitantes e 8,0 km² (Censo IBGE 2022), o Tatuapé tem densidade de mais de 12 mil hab/km² e um Índice de Desenvolvimento Humano de 0,936 — o 14º mais alto entre os 96 distritos de São Paulo, "muito alto" segundo o Mapa da Desigualdade. É hoje o endereço mais consolidado da Zona Leste: a chegada do metrô e do trem transformou o bairro de "passagem" em "destino", puxando um dos maiores booms imobiliários da região desde os anos 90.',
      'É essencialmente residencial e extremamente bem servido: quatro parques na região (Piqueri, CERET, Municipal do Tatuapé e Estadual do Belém), o Parque São Jorge — sede histórica do Sport Club Corinthians Paulista e de seu memorial —, shoppings como o Metrô Tatuapé e o Metrô Boulevard Tatuapé, a Biblioteca Cassiano Ricardo, e a Casa do Tatuapé, construção do século XVII aberta à visitação. Vias estruturais como a Avenida Celso Garcia, a Radial Leste e a Avenida Salim Farah Maluf garantem comércio e serviços que atendem toda a Zona Leste.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Tatuapé do Metrô', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Tatuap%C3%A9_station_(Linha_3-Vermelha),_SP,_2026-02-27_(2).jpg'},
      {file:'2.jpg', alt:'Casa do Sítio Tatuapé', credit:'Leandro Criscuolo', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Casa_do_S%C3%ADtio_Tatuap%C3%A9_01.jpg'},
      {file:'3.jpg', alt:'Parque do Piqueri', credit:'Gean Bilch', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Parque-Piqueri-1.jpg'},
    ] },

  { id:'vila_prudente', nome:'Vila Prudente', tier:1,
    mob:'Metrô + monotrilho', desc:'Zona industrial que virou hub de mobilidade da Zona Leste.',
    populacao:'mais de 100 mil habitantes no distrito; ~243 mil na subprefeitura (IBGE 2022)',
    texto:[
      'Fundada em 4 de outubro de 1890 por três irmãos imigrantes italianos — Emídio, Panfílio e Bernardino Falchi — que compraram terras e instalaram ali a Fábrica de Chocolates e Confeitos Falchi, com vilas operárias para os trabalhadores. Essas vilas, segundo registros históricos, chegaram a ser consideradas a primeira favela de São Paulo. O nome do bairro é uma homenagem a Prudente de Morais, então presidente da província de São Paulo, que apoiou o projeto.',
      'O distrito passa de 100 mil habitantes (mais de 243 mil somando toda a subprefeitura, segundo o IBGE 2022) e preserva um forte senso de comunidade — tem até jornal de bairro próprio, a Folha de Vila Prudente. Depois de décadas como zona industrial, vive hoje uma transformação puxada pela mobilidade: a estação de metrô (Linha 2-Verde, inaugurada em 2010) e o Monotrilho (Linha 15-Prata) conectam o bairro rapidamente ao centro, ao Ipiranga e ao ABC, com fácil acesso também pela Avenida do Estado e pela Avenida Professor Luís Ignácio de Anhaia Melo.',
      'Tem áreas verdes como o Parque Ecológico Vila Prudente, acessível para cadeirantes, com wi-fi gratuito e espaço para piquenique — um contraponto de natureza num bairro em plena verticalização. Fica a poucos minutos a pé do Museu do Ipiranga e entre dois grandes shoppings, o que garante fácil acesso a comércio, lazer e educação para quem mora na região.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Igreja da Graça, Vila Prudente', credit:'Eugenio Hansen, OFS', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_da_Gra%C3%A7a_(Bairro_Vila_Prudente,_S%C3%A3o_Paulo_(SP),_Brasil).jpg'},
      {file:'2.jpg', alt:'Parque Vila Prudente', credit:'Fernando Salvio', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Parque_Vila_Prudente.jpg'},
      {file:'3.jpg', alt:'Estação Vila Prudente (Linha 2-Verde)', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Prudente_metro_station_(Linha_2-Verde),_SP,_2025-07-09_(1).jpg'},
    ] },

  { id:'vila_carrao', nome:'Vila Carrão', tier:1,
    mob:'Comunidade nipo-brasileira', desc:'Bairro "5 estrelas" com forte comunidade japonesa e o Okinawa Festival.',
    populacao:'~75 mil no bairro; distrito faz parte de subprefeitura com 266 mil (IBGE 2022)',
    texto:[
      'O nome do bairro homenageia João da Silva Carrão, o "Conselheiro Carrão", ex-presidente da província de São Paulo. Os primeiros registros da região datam de 1570, ligados a uma trilha usada por bandeirantes; a antiga Estrada de Itaquera deu lugar à atual Avenida Conselheiro Carrão. Os lotes residenciais foram colocados à venda em 1917 — data oficial de fundação —, mas até a década de 1920 havia só 10 a 20 casas, com a maior parte da área ocupada por pequenos sítios de família. O bairro chegou a ser atingido pela Revolução Constitucionalista de 1932, com relatos de tiros de fuzil e artilharia nas ruas.',
      'A Vila Carrão foi apontada pelo Censo de 2010 como "o bairro mais paulista de São Paulo" e hoje é considerada um bairro "5 estrelas" do mercado imobiliário da Zona Leste. Já teve cerca de 75 mil moradores (estimativa de 2005); o distrito do Carrão integra, junto com Aricanduva e Vila Formosa, uma subprefeitura de 21,5 km² com 266.157 habitantes segundo o IBGE 2022.',
      'Um traço muito particular do bairro é sua forte comunidade nipo-brasileira, majoritariamente de Okinawa — todos os anos acontece o tradicional Okinawa Festival, um dos eventos mais importantes do calendário oficial da cidade. A Avenida Conselheiro Carrão concentra um comércio tão intenso que já chegou a superar avenidas nobres como a Rebouças em fluxo. A microrregião de Chácara Califórnia, dentro do território do Carrão, mantém esse mesmo perfil residencial tranquilo, com proximidade direta ao Tatuapé.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vila Carrão', credit:'FernandoSantos', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Carr%C3%A3o_-_S%C3%A3o_Paulo_-_SP_-_panoramio.jpg'},
      {file:'2.jpg', alt:'Okinawa Festival, Vila Carrão', credit:'Tet', licenca:'CC BY 4.0', url:'https://commons.wikimedia.org/wiki/File:20240804_Ryuka_Sousako_Eisa_Daiko_-_20%C2%BA_Okinawa_Festival_-_2024_08_09_006.jpg'},
      {file:'3.jpg', alt:'Estação Carrão (Linha 3-Vermelha)', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Carr%C3%A3o_station_(Linha_3-Vermelha),_SP,_2026-03-01_(2).jpg'},
    ] },

  { id:'vila_ema', nome:'Vila Ema', tier:1,
    mob:'Residencial arborizado', desc:'Bairro mais antigo do distrito de São Lucas, tranquilo e bem conectado.',
    populacao:'parte do distrito de São Lucas (~100 mil habitantes)',
    texto:[
      'Fundada em 1893 por Victor Nothmann, que loteou a área e batizou o bairro em homenagem à própria esposa, Emma Nothmann — é o bairro mais antigo do distrito de São Lucas, com forte ligação histórica com a vizinha Vila Prudente. É predominantemente residencial, com casas térreas e sobrados de décadas passadas convivendo com a verticalização mais recente, e mantém um perfil de bairro tradicional que resistiu bem ao adensamento acelerado de outras partes da Zona Leste.',
      'Sendo parte do distrito de São Lucas, soma população à casa das seis dígitos da região; é cortada por três avenidas importantes (Vila Ema, Prof. Luiz Inácio de Anhaia Mello e Sapopemba), o que garante boa conectividade com o restante da Zona Leste sem abrir mão do clima de bairro residencial e arborizado — um perfil valorizado por quem busca tranquilidade perto do centro expandido da cidade.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vila Ema', credit:'Ricardo Domingues Pôssas', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Ema.jpg'},
      {file:'2.jpg', alt:'Centenário de Vila Ema', credit:'Lucas De León', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:3_%22Centen%C3%A1rio_de_Vila_Ema%22.jpg'},
      {file:'3.jpg', alt:'Parque Vila Ema', credit:'Fernandosalvio', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Protesto-ParqueVilaEma.jpg'},
    ] },

  { id:'itaquera', nome:'Itaquera', tier:1,
    mob:'Arena + Parque do Carmo', desc:'Projeção nacional com a Neo Química Arena e o 3º maior parque municipal de SP.',
    populacao:'210.960 habitantes (distrito, IBGE 2022) — o mais populoso da Zona Leste 2',
    texto:[
      'O registro mais antigo de Itaquera é de 1686, mas a ocupação de fato só ganhou força com a chegada da estrada de ferro em 1875 e, depois, da imigração japonesa a partir de 1920. Durante décadas foi polo de olarias e pedreiras — a Pedreira Itaquera, fundada em 1957, forneceu granito até para a Catedral da Sé. Até 1930 a região seguia rural; a transformação em bairro urbano veio com o crescimento acelerado de São Paulo a partir da segunda metade do século XX.',
      'Com 210.960 habitantes segundo o Censo IBGE 2022, é o distrito mais populoso da chamada Zona Leste 2 (que reúne Cidade Tiradentes, Ermelino Matarazzo, Guaianases, Itaim Paulista, São Mateus e outros) — e um dos poucos da região que cresceu em população entre 2010 e 2022, puxado pela expansão de bairros vizinhos como o Iguatemi.',
      'O grande marco recente é a Neo Química Arena, construída para a Copa do Mundo de 2014 e sede olímpica no Rio 2016 — deu ao bairro uma projeção nacional inédita e impulsionou investimentos em mobilidade e infraestrutura. Itaquera também abriga o Parque do Carmo, o terceiro maior parque municipal de São Paulo, com 1,5 milhão de m² sobre a antiga Fazenda do Carmo, incluindo a tradicional Festa das Cerejeiras.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Poupatempo Itaquera', credit:'Governo do Estado de São Paulo', licenca:'CC BY 2.0', url:'https://commons.wikimedia.org/wiki/File:Poupatempo_Itaquera_(28569187817).jpg'},
      {file:'2.jpg', alt:'Arena Corinthians (Neo Química Arena)', credit:'Anderson Bueno Pereira', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Arena_Corinthians_-_Pr%C3%A9dio_Oeste.jpg'},
      {file:'3.jpg', alt:'Bosque das Cerejeiras, Parque do Carmo', credit:'Adriano Makoto Suzuki', licenca:'CC BY 2.0', url:'https://commons.wikimedia.org/wiki/File:Bosque_das_Cerejeiras,_Parque_do_Carmo,_S%C3%A3o_Paulo_-_SP.jpg'},
    ] },

  { id:'penha', nome:'Penha', tier:1,
    mob:'Tradição religiosa', desc:'Um dos bairros mais antigos de São Paulo, com a Basílica de N. Sra. da Penha.',
    populacao:'mais de 177 mil habitantes (distrito)',
    texto:[
      'Um dos bairros mais antigos de São Paulo, fundado em 1667 por padres que ergueram uma ermida no alto de uma colina em devoção a Nossa Senhora da Penha — hoje padroeira oficial da cidade. A lenda local conta que um viajante francês esqueceu duas vezes uma imagem sacra no local e concluiu: "ela quer ficar aqui". Durante a Revolução Tenentista de 1924, a Penha chegou a ser, por três meses, a capital provisória do estado de São Paulo.',
      'O século XX trouxe uma explosão demográfica sem precedentes: entre 1920 e os anos 1940 a população saltou de 6.080 para 56.709 habitantes — mais que nove vezes em pouco mais de duas décadas — puxada por levas de imigrantes italianos, portugueses, sírio-libaneses, japoneses, judeus e migrantes nordestinos. Hoje o distrito soma mais de 177 mil habitantes e integra, com Tatuapé, Jardim Anália Franco, Vila Carrão, Mooca e Vila Prudente, o grupo de bairros de IDH muito elevado da Zona Leste.',
      'Todo dia 8 de setembro, o bairro celebra seu aniversário e a festa da padroeira com procissão, quermesse e shows na Basílica de Nossa Senhora da Penha — uma das maiores festas religiosas tradicionais da cidade. A arquitetura mistura construções do século XIX a prédios modernos, e hoje é bem servido por metrô, trem, comércio de rua vibrante e o Shopping Penha.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vista da Colina da Penha', credit:'Josué Alves Vicente', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:ColinaPenhaSP.jpg'},
      {file:'2.jpg', alt:'Basílica de Nossa Senhora da Penha', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_da_Penha_-_by_Lucas.JPG'},
      {file:'3.jpg', alt:'Igreja de Nossa Senhora da Penha de França', credit:'Túllio M Franca', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_de_Nossa_Senhora_da_Penha_de_Fran%C3%A7a.jpg'},
    ] },

  { id:'jardim_analia_franco', nome:'Jardim Anália Franco', tier:1,
    mob:'Arborizado e valorizado', desc:'Nome de homenagem a uma pioneira da educação social no início do século XX.',
    populacao:'bairro dentro dos distritos de Tatuapé e Vila Formosa',
    texto:[
      'O bairro leva o nome de Anália Franco, professora e jornalista que, no início do século XX, ajudou a fundar mais de 100 escolas voltadas a crianças órfãs e ex-escravizadas — numa época de pouquíssima infraestrutura social para essa população. Em 1911, ela comprou um terreno na região, que décadas depois viraria loteamento residencial e daria origem ao bairro que leva seu nome. A área ficava, até então, na fronteira entre o Carrão e a futura Vila Formosa, antes de ganhar identidade própria.',
      'Hoje é um dos endereços mais valorizados da Zona Leste: arborizado, majoritariamente residencial, com boa oferta de comércio, escolas e serviços, além do Parque Anália Franco e do Shopping Anália Franco como âncoras de convivência e lazer para os moradores. Carrega até hoje o espírito de legado social de sua fundadora, num contraste que marca a Zona Leste — um bairro de alto padrão nascido do trabalho social de uma educadora voltada às populações mais vulneráveis de sua época.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Skyline do Jardim Anália Franco', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Novo_skyline_do_Jardim_An%C3%A1lia_Franco_-_by_Lucas.JPG'},
      {file:'2.jpg', alt:'Parque Anália Franco', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Vista_do_Parque_An%C3%A1lia_Franco_%C2%B9_-_by_Lucas.JPG'},
      {file:'3.jpg', alt:'Shopping Anália Franco', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Shopping_An%C3%A1lia_Franco_01_-_by_Lucas.JPG'},
    ] },

  { id:'bras', nome:'Brás', tier:1,
    mob:'Maior polo de confecção do país', desc:'Bairro histórico, hoje o maior polo de comércio popular do Brasil.',
    populacao:'distrito integrado à Subprefeitura da Mooca (~377 mil na subprefeitura, IBGE)',
    texto:[
      'Um dos bairros mais históricos da cidade, o Brás começou a crescer no fim do século XIX com a chegada de imigrantes italianos, que o transformaram num polo industrial e cultural. A partir dos anos 1940 — intensificado pela seca de 1952 — recebeu um grande fluxo de migrantes nordestinos, que mudaram o perfil cultural e comercial da região. Uma curiosidade histórica: o bairro sediou o primeiro jogo oficial de futebol do país, organizado por Charles Miller.',
      'Diferente da maioria dos bairros deste guia, o Brás não é hoje predominantemente residencial — sua força está no fluxo diário de trabalhadores e compradores. É conhecido nacionalmente como o maior polo de comércio popular e confecção do Brasil, com a icônica Feira da Madrugada atraindo dezenas de milhares de compradores todos os dias. Desde 2002 integra, junto com o Pari, a Subprefeitura da Mooca.',
      'O vizinho Belenzinho, antiga área industrial que hoje faz parte da identidade do Brás, abriga o SESC Belenzinho — instalado num antigo galpão fabril reconvertido e um dos centros culturais mais ativos da cidade, com teatro, piscina, biblioteca e programação constante.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Brás', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Br%C3%A1s_train_station,_S%C3%A3o_Paulo,_2026-02-25.jpg'},
      {file:'2.jpg', alt:'Rua 25 de Março', credit:'Rag2.Brazil', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:25_de_Mar%C3%A7o,_S%C3%A3o_Paulo_SP.jpg'},
      {file:'3.jpg', alt:'SESC Belenzinho', credit:'Victor Lopes', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:SESC_Belenzinho.jpg'},
    ] },

  { id:'vila_matilde', nome:'Vila Matilde', tier:2,
    mob:'Metrô Linha 3', desc:'Bairro tradicional e residencial, com estação própria de metrô.',
    populacao:'distrito administrativo que também engloba Cidade Patriarca e Vila Ré',
    texto:[
      'Bairro tradicional e essencialmente residencial da Zona Leste, servido por estação própria de metrô (Linha 3-Vermelha). Mantém um comércio de bairro consolidado e é vizinho direto da Vila Carrão e da Penha, se beneficiando da boa infraestrutura de toda a região. Dá nome ao distrito administrativo que também engloba Cidade Patriarca e Vila Ré, e concentra uma mistura de casas antigas e prédios residenciais de médio padrão.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vila Matilde', credit:'FernandoSantos', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Matilde,_S%C3%A3o_Paulo,_Brasil_-_panoramio_(350).jpg'},
      {file:'2.jpg', alt:'Estação Vila Matilde (Linha 3-Vermelha)', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Matilde_station_(Linha_3-Vermelha),_SP,_2026-03-01_(12).jpg'},
      {file:'3.jpg', alt:'Planta histórica de terrenos da Vila Matilde', credit:'Acervo Museu Paulista/USP', licenca:'Domínio público', url:null},
    ] },

  { id:'alto_da_mooca', nome:'Alto da Mooca', tier:2,
    mob:'Parte alta da Mooca', desc:'Área mais residencial e valorizada da Mooca, com ruas arborizadas.',
    populacao:'sub-bairro do distrito da Mooca (80.880 hab.)',
    texto:[
      'Parte alta e mais residencial da Mooca, com ruas arborizadas e vista privilegiada sobre o vale onde corre o rio Tamanduateí. Compartilha toda a herança italiana do bairro-mãe — mesma origem imigrante, mesma tradição gastronômica —, mas com um perfil ainda mais tranquilo, familiar e valorizado, puxado por ruas como a Jaboticabal, um dos points de comércio e lazer local.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Rua Jaboticabal, Alto da Mooca', credit:'CORRETOR-CARVALHO', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Rua_Jaboticabal_%E2%80%93_Alto_da_Mooca_-_panoramio.jpg'},
      {file:'2.jpg', alt:'Rua Piraçununga, Alto da Mooca', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
      {file:'3.jpg', alt:'Boulevard Perez, Alto da Mooca', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
    ] },

  { id:'vila_esperanca', nome:'Vila Esperança', tier:2,
    mob:'Residencial tranquilo', desc:'Bairro residencial próximo a Itaquera e Vila Matilde.',
    populacao:'bairro residencial de pequeno porte, entre Penha e Vila Matilde',
    texto:[
      'Com histórico que remonta ao início do século XX, a Vila Esperança era originalmente uma área de chácaras e fazendas. A chegada da Estrada de Ferro Central do Brasil foi um marco que conectou o bairro a outras partes da cidade e puxou seu desenvolvimento urbano.',
      'Hoje é um bairro predominantemente residencial, tranquilo e arborizado, entre Penha e Vila Matilde, com ampla oferta de comércio e serviços de bairro. Mantém um ambiente familiar valorizado por quem busca sossego sem abrir mão de fácil acesso ao restante da Zona Leste.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Mezanino da Estação Guilhermina-Esperança', credit:'LuanCampSouza93', licenca:'CC0', url:'https://commons.wikimedia.org/wiki/File:Mezanino_Esta%C3%A7%C3%A3o_Guilhermina-Esperan%C3%A7a.jpg'},
      {file:'2.jpg', alt:'Avenida próxima à Estação Guilhermina-Esperança', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
      {file:'3.jpg', alt:'Plataforma da Estação Guilhermina-Esperança', credit:'Wikimedia Commons', licenca:'CC BY-SA 4.0', url:null},
    ] },

  { id:'vila_zilda', nome:'Vila Zilda', tier:2,
    mob:'Perto da Radial Leste', desc:'Bairro residencial dentro do distrito do Tatuapé.',
    populacao:'sub-bairro do distrito do Tatuapé (98.601 hab.)',
    texto:[
      'Bairro predominantemente residencial dentro do distrito do Tatuapé, com forte presença de infraestrutura de vizinhança e fácil acesso ao eixo da Radial Leste. Por estar dentro de um dos distritos de maior IDH da Zona Leste, se beneficia de toda a rede de serviços, comércio e mobilidade consolidada do Tatuapé, mantendo ao mesmo tempo um perfil de ruas mais calmas e essencialmente residenciais.',
    ],
    fotos:[] },

  { id:'vila_carmosina', nome:'Vila Carmosina', tier:2,
    mob:'Perto do Parque do Carmo', desc:'Bairro beneficiado pela proximidade ao 3º maior parque municipal de SP.',
    populacao:'sub-bairro do distrito de Itaquera (210.960 hab.)',
    texto:[
      'Bairro dentro do distrito de Itaquera, na região do Parque do Carmo, beneficiado pela proximidade ao terceiro maior parque municipal de São Paulo — 1,5 milhão de m² de área verde — e por uma malha residencial em expansão. Compartilha a infraestrutura de mobilidade e comércio que fez de Itaquera o distrito mais populoso da Zona Leste 2, com um perfil ainda mais tranquilo e menos adensado que o núcleo central do bairro vizinho.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Jardim Marabá (região do Parque do Carmo)', credit:'Raphael Igor', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Jardim_Marab%C3%A1.jpg'},
      {file:'2.jpg', alt:'Brasão da Vila Carmosina', credit:'Wikimedia Commons', licenca:'CC BY-SA 4.0', url:null},
    ] },

  { id:'itaim_paulista', nome:'Itaim Paulista', tier:2,
    mob:'Forte presença nordestina', desc:'Distrito extremo da Zona Leste, com forte presença de migrantes nordestinos.',
    populacao:'subprefeitura (com Vila Curuçá) soma cerca de 400 mil habitantes',
    texto:[
      'Distrito extremo-leste de São Paulo, de nome tupi ligado à antiga aldeia de Biacica/Imbiacica — mesma origem que aparece na história da vizinha Vila Carrão. Foi uma das regiões que mais recebeu migrantes ao longo do século XX: os primeiros vieram da Itália, do Japão e da Hungria, mas a partir de meados do século o fluxo predominante passou a vir do Nordeste brasileiro, sobretudo da Bahia e de Pernambuco, moldando fortemente a cultura e o comércio local.',
      'A subprefeitura de Itaim Paulista, que engloba também o distrito vizinho de Vila Curuçá, soma cerca de 400 mil habitantes — uma das regiões mais populosas da Zona Leste, ainda que o Censo 2022 tenha registrado queda de moradores em relação a 2010, movimento observado em vários distritos do extremo-leste paulistano.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Chácara dos Fontoura (Chácara Biacica)', credit:'ExAstra', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Ch%C3%A1cara_dos_Fontoura_(ou_Ch%C3%A1cara_Biacica),_S%C3%A3o_Paulo_-_SP,_Brasil._Casar%C3%A3o,_entrada,_setembro_de_2024.jpg'},
      {file:'2.jpg', alt:'Casa de Cultura do Itaim', credit:'Bruno P. Ramos', licenca:'Domínio público', url:'https://commons.wikimedia.org/wiki/File:Casa_de_Cultura_do_Itaim.png'},
      {file:'3.jpg', alt:'Monumento em Itaim Paulista', credit:'SPimages', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:ItaimMonumento.jpg'},
    ] },

  { id:'cidade_patriarca', nome:'Cidade Patriarca', tier:2,
    mob:'Metrô Linha 3', desc:'Um dos poucos bairros planejados da Zona Leste, com ruas largas e praças.',
    populacao:'sub-bairro do distrito de Vila Matilde',
    texto:[
      'O nome do bairro é uma homenagem a José Bonifácio de Andrade e Silva, o "Patriarca da Independência". É um dos poucos bairros da Zona Leste construídos de forma planejada, com ruas largas e praças — idealizado por Antônio Estêvão de Carvalho seguindo padrões próximos aos de bairros como os Jardins, o que hoje o torna um dos mais arborizados do município. Fundado em meados do século XX, cresceu a partir da chegada da linha de trem e, depois, do metrô.',
      'Faz parte do distrito de Vila Matilde e tem a Estação Patriarca-Vila Ré (Linha 3-Vermelha), na Radial Leste, como uma de suas principais portas de mobilidade — dando acesso rápido a shoppings como Itaquera, Penha e Aricanduva (este último, um dos maiores da América Latina). É considerado um dos bairros de melhor qualidade de vida da Zona Leste, voltado à classe média e em constante desenvolvimento.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Bairro Cidade Patriarca', credit:'Luansda', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Bairro_Cidade_Patriarca,_S%C3%A3o_Paulo-SP.jpg'},
      {file:'2.jpg', alt:'Cidade Patriarca, próximo à Estação Patriarca-Vila Ré', credit:'Wikimedia Commons', licenca:'CC0', url:null},
      {file:'3.jpg', alt:'Estação Patriarca', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
    ] },

  { id:'guaianases', nome:'Guaianases', tier:2,
    mob:'Distrito mais distante', desc:'Um dos distritos mais populosos, ligado à antiga estrada de ferro.',
    populacao:'um dos distritos mais populosos da Zona Leste 2',
    texto:[
      'Distrito mais distante da Zona Leste em relação ao centro de São Paulo, um dos mais populosos da cidade, com identidade forte ligada à estação de trem que leva seu nome — uma das linhas ferroviárias mais antigas do estado, remontando à expansão da malha da Companhia São Paulo Railway no século XIX. O nome vem do povo indígena guaianá, que teria formado a Aldeia Ururaí na região em 1580, um dos primeiros registros de ocupação de toda a Zona Leste.',
      'É um distrito predominantemente residencial e popular, com forte identidade de subúrbio ferroviário e comércio concentrado ao redor da estação. Integra, junto com Itaim Paulista, Cidade Tiradentes e São Mateus, o grupo de distritos do extremo-leste que registrou queda populacional entre os censos de 2010 e 2022.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Guaianases (CPTM)', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_Guaianazez_da_CPTM.jpg'},
      {file:'2.jpg', alt:'Colégio Palmerino Calabrez, Guaianases', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Col%C3%A9gio_Palmerino_Calabrez.JPG'},
      {file:'3.jpg', alt:'Igreja em Guaianases', credit:'São Benedito', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Fotoigreja.jpg'},
    ] },

  { id:'vila_re', nome:'Vila Ré', tier:2,
    mob:'Perto da Radial Leste', desc:'Bairro com cerca de 50 mil habitantes e forte comércio local.',
    populacao:'cerca de 50 mil habitantes',
    texto:[
      'Fundado no início do século XX — em 1912, João Ré Filho comprou 90 alqueires de terra na região e começou a vender lotes em prestações —, o bairro nasceu rural e foi se urbanizando ao longo das décadas seguintes, recebendo imigrantes italianos vindos de antigos bairros industriais e depois migrantes de outros estados. Já em 1930 tinha escolas, comércio e serviços; em 1948 ganhou estação ferroviária própria.',
      'Hoje soma cerca de 50 mil habitantes e pertence ao distrito da Vila Matilde. É um bairro residencial em constante crescimento, com casas antigas dando espaço a prédios mais modernos, e um comércio de rua amplo — inclusive o tradicional Circo-Escola, ao lado do metrô — que atende bem quem mora na região.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Patriarca-Vila Ré', credit:'Luansda', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_Patriarca_-_Vila_R%C3%A9.jpg'},
      {file:'2.jpg', alt:'Letreiro da Estação Patriarca-Vila Ré', credit:'Wikimedia Commons', licenca:'CC0', url:null},
      {file:'3.jpg', alt:'Plataforma da Estação Patriarca-Vila Ré', credit:'Wikimedia Commons', licenca:'CC BY-SA 4.0', url:null},
    ] },

  { id:'sapopemba', nome:'Sapopemba', tier:2,
    mob:'Um dos mais populosos', desc:'Distrito bastante populoso, com origem em antigas fazendas.',
    populacao:'um dos distritos mais populosos de São Paulo (bem acima de 100 mil hab.)',
    texto:[
      'Um dos distritos mais populosos da cidade de São Paulo, criado oficialmente pela Lei Estadual nº 4.954 de 1985, com origem em antigas fazendas e forte crescimento habitacional a partir da segunda metade do século XX, quando a expansão da mancha urbana paulistana absorveu a região.',
      'É hoje um bairro essencialmente residencial e popular, com comércio de bairro consolidado — mercados, igrejas e escolas particulares como o Colégio Marco Paulista e o Colégio São Paulo Futuro — e acesso à Estação Sapopemba da Linha 15-Prata do metrô. Registrou queda populacional entre os censos de 2010 e 2022, movimento comum a vários distritos do extremo-leste da cidade.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Sapopemba (Linha 15-Prata)', credit:'Geogast', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_Sapopemba_%E2%80%A2_Linha_15_Prata,_Metr%C3%B4_S%C3%A3o_Paulo_%E2%80%A2_Entrada_Sul_com_Totem.jpg'},
      {file:'2.jpg', alt:'Mercado do Sapopemba', credit:'FABIANO LUCIANO BASSETTI', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Mercado_do_Sapopemba.jpg'},
      {file:'3.jpg', alt:'Igreja em Sapopemba', credit:'Lukaaz', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_em_Sapopemba.JPG'},
    ] },

  { id:'sao_mateus', nome:'São Mateus', tier:2,
    mob:'Investimento em mobilidade', desc:'Distrito extremo-leste com cerca de 160 mil habitantes.',
    populacao:'aproximadamente 160 mil habitantes',
    texto:[
      'Distrito extremo-leste a cerca de 20 km da região central de São Paulo, criado oficialmente pela Lei Estadual nº 4.954 de 1985. Foi loteado a partir de 1948, mas só teve desenvolvimento acelerado a partir de 1956, puxado pelo crescimento econômico do ABC Paulista e por forte migração — sobretudo de mineiros, portugueses, japoneses e nordestinos.',
      'Hoje tem aproximadamente 160 mil habitantes e foi um dos poucos distritos da Zona Leste que cresceu em população entre 2010 e 2022 — em especial pela expansão do bairro do Iguatemi, que sozinho ganhou cerca de 22 mil novos moradores no período. Mantém identidade histórica ligada à antiga Estrada de Ferro e forte presença de comunidades tradicionais.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Edifício do Grupo Escolar São José', credit:'Mateus Carreira', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio_do_Grupo_Escolar_S%C3%A3o_Jos%C3%A9_1.jpg'},
      {file:'2.jpg', alt:'Terminal São Mateus', credit:'Sorocabano 32', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Terminal_S%C3%A3o_Mateus_(2020).jpg'},
      {file:'3.jpg', alt:'Área do Terminal São Mateus', credit:'MacGyver Santista', licenca:'CC0', url:'https://commons.wikimedia.org/wiki/File:Area_5_-_Term._S%C3%A3o_Mateus.jpg'},
    ] },

  { id:'agua_rasa', nome:'Água Rasa', tier:2,
    mob:'Entre Tatuapé e Mooca', desc:'Distrito pequeno e residencial, com cerca de 80 mil habitantes.',
    populacao:'cerca de 80 mil habitantes (distrito)',
    texto:[
      'Distrito pequeno e essencialmente residencial, parte da Subprefeitura da Mooca, encravado entre Tatuapé, Vila Formosa e Mooca — se beneficia da infraestrutura de todos os vizinhos mais consolidados sem ter, por si só, um grande polo comercial próprio.',
      'Tem cerca de 80 mil habitantes e densidade de mais de 11 mil hab/km², uma das mais altas da Zona Leste, reflexo de um território pequeno (pouco mais de 7 km²) já bastante ocupado. É majoritariamente residencial, com ruas tranquilas e fácil acesso à infraestrutura de comércio, saúde e educação dos distritos vizinhos.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Paróquia Nossa Senhora de Lourdes, Água Rasa', credit:'CORRETOR-CARVALHO', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Par%C3%B3quia_Nossa_Senhora_Loudes_-_Rua_Jo%C3%A3o_Soares,_13_-_%C3%81gua_Rasa_-_panoramio.jpg'},
      {file:'2.jpg', alt:'Ciclovia da Avenida Vereador Abel Ferreira, Água Rasa', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
    ] },

  { id:'ermelino_matarazzo', nome:'Ermelino Matarazzo', tier:2,
    mob:'Herança industrial', desc:'Distrito com 112 mil habitantes, nome em homenagem ao Conde Matarazzo.',
    populacao:'112.333 habitantes (distrito, IBGE 2022)',
    texto:[
      'O bairro leva o nome de Ermelino Matarazzo, filho do imigrante e industrial ítalo-brasileiro Francesco Matarazzo (o "Conde Matarazzo"), um dos maiores empresários da história paulista — o herdeiro faleceu precocemente num acidente automobilístico. A região teve forte presença industrial no passado, junto ao Rio Tietê, e vive hoje uma transformação predominantemente residencial.',
      'Segundo o Censo IBGE 2022, o distrito tem 112.333 habitantes, dos quais 97,3% trabalham fora da região — um indicativo de bairro-dormitório, fortemente conectado ao restante da cidade para emprego e renda. Faz divisa com o município de Guarulhos e abriga o segundo maior campus da USP na capital, na vizinha Ponte Rasa.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Ermelino Matarazzo', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3oErmelinoMatarazzo.jpg'},
      {file:'2.jpg', alt:'Estátua do Conde Francisco Matarazzo', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Est%C3%A1tua_do_Conde_Francisco_Matarazzo.jpg'},
    ] },

  { id:'cidade_tiradentes', nome:'Cidade Tiradentes', tier:2,
    mob:'Grande conjunto habitacional', desc:'Um dos maiores conjuntos habitacionais da América Latina, ~194 mil habitantes.',
    populacao:'194 mil habitantes (distrito, IBGE 2022; eram 211 mil em 2010)',
    texto:[
      'Um dos maiores conjuntos habitacionais da América Latina, planejado a partir dos anos 1980 para abrigar populações removidas de áreas de risco de toda a cidade de São Paulo. É o distrito mais distante da região central e um dos que mais concentram empreendimentos de habitação popular do país.',
      'Segundo o Censo IBGE 2022, tem 194 mil habitantes — uma queda em relação aos 211 mil registrados em 2010, movimento que acompanhou outros distritos do extremo-leste. Ainda assim, segue um distrito populoso com identidade comunitária própria e projetos culturais relevantes, como o Complexo Cultural Cidade Tiradentes, além de um comércio local que atende integralmente a região.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Terminal Cidade Tiradentes', credit:'MacGyver Santista', licenca:'CC0', url:'https://commons.wikimedia.org/wiki/File:Area_4_-_Term._Cidade_Tiradentes.jpg'},
      {file:'2.jpg', alt:'CEU Cidade Tiradentes', credit:'Jatobb', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:CEUcidade_tiradentes.jpg'},
      {file:'3.jpg', alt:'Vista geral de Cidade Tiradentes', credit:'André Bonacin', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Cidade_Tiradentes_-_S%C3%A3o_Paulo_City.jpg'},
    ] },

  { id:'aricanduva', nome:'Aricanduva', tier:2,
    mob:'Shopping Aricanduva', desc:'Sedia um dos maiores shoppings da América Latina; ~90 mil habitantes.',
    populacao:'89.574 habitantes (distrito, IBGE 2022)',
    texto:[
      'O nome vem do tupi e significa "lugar onde há muitas palmeiras da espécie airi" — já mencionado desde o século XVII como nome de riacho e arrabalde. A ocupação urbana da região data de 1902-1905, mas foi desenvolvida principalmente por imigrantes portugueses a partir da década de 1940, quando a área ainda era predominantemente rural.',
      'Com 89.574 habitantes em 6,6 km² (Censo IBGE 2022), o distrito é conhecido nacionalmente por sediar o Shopping Aricanduva, um dos maiores da América Latina — símbolo de comércio e lazer para toda a Zona Leste. O perfil do casario é misto: classe baixa perto da divisa com Sapopemba, e médio/médio-alto nos bairros de Jardim Aricanduva, Vila Antonieta e Vila Carrão, num distrito em processo de verticalização desde 2011.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Aricanduva', credit:'Raphael Igor', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Aricanduva.JPG'},
      {file:'2.jpg', alt:'Aricanduva, sentido bairro', credit:'Boris Karpuk', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Aricanduva_sentido_bairro_-_panoramio.jpg'},
      {file:'3.jpg', alt:'Avenida Aricanduva', credit:'Raphael Igor', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Avenida_Aricanduva.JPG'},
    ] },
];

// Maps each canonical bairro to the raw `bairro` / `bairro_comercial` values
// used in the Supabase catalog, so live counts/prices can be computed
// per-neighborhood. Raw `bairro` is checked first, `bairro_comercial` as a
// fallback (this mirrors how the guide consolidated ~87 raw name variants
// into these 24 neighborhoods).
const BAIRRO_DB_NAMES = {
  mooca:['Mooca'], tatuape:['Tatuapé'], vila_prudente:['Vila Prudente'],
  vila_carrao:['Vila Carrão','Chácara Califórnia','Chácara Califórnia (Tatuapé)','Vila Fernandes','Vila Nova Manchester'],
  vila_ema:['Vila Ema'], itaquera:['Itaquera'], penha:['Penha','Penha de França'],
  jardim_analia_franco:['Jardim Anália Franco'], bras:['Brás','Belenzinho'],
  vila_matilde:['Vila Matilde'], alto_da_mooca:['Alto da Mooca'], vila_esperanca:['Vila Esperança'],
  vila_zilda:['Vila Zilda'], vila_carmosina:['Vila Carmosina'], itaim_paulista:['Itaim Paulista'],
  cidade_patriarca:['Cidade Patriarca','Patriarca'], guaianases:['Guaianases'], vila_re:['Vila Ré'],
  sapopemba:['Sapopemba'], sao_mateus:['São Mateus'], agua_rasa:['Água Rasa'],
  ermelino_matarazzo:['Ermelino Matarazzo'], cidade_tiradentes:['Cidade Tiradentes'], aricanduva:['Aricanduva'],
};
