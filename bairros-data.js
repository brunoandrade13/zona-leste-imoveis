// Shared editorial content for the Bairros pages. Text and photo credits
// sourced from the neighborhood research guide; photo credits are required
// (Wikimedia Commons CC BY / CC BY-SA licenses) and shown under each image.
const BAIRROS_DATA = [
  { id:'mooca', nome:'Mooca', tier:1,
    mob:'Tradição italiana', desc:'O bairro mais italiano fora da Itália, hoje um dos endereços mais procurados da Zona Leste.',
    texto:[
      'A Mooca é conhecida como "o bairro mais italiano fora da Itália". Sua identidade nasceu no fim do século XIX, quando milhares de imigrantes italianos se instalaram na região para trabalhar nas fábricas que surgiam ao longo da antiga Estrada de Ferro — como a Cotonifício Crespi e a Fábrica Antarctica, fundadora do Clube Atlético Juventus em 1924. O nome "Mooca" vem do tupi-guarani e significa "fazer casa" — segue sendo, mais de um século depois, um símbolo de acolhimento.',
      'O que torna a Mooca especial não é só a herança italiana, mas como ela continua viva: a Rua da Mooca guarda arquitetura de vilas operárias, a Festa de San Gennaro acontece desde 1973, e o Museu da Imigração (na antiga Hospedaria dos Imigrantes) recebe visitantes que querem entender a formação de São Paulo. É um bairro tradicional, mas em plena renovação urbana.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Mooca - rua típica do bairro', credit:'Pedro Mendonça', licenca:'CC BY-SA 2.0', url:'https://commons.wikimedia.org/wiki/File:Mooca_-_0473_(16336007263).jpg'},
      {file:'2.jpg', alt:'Museu da Imigração de São Paulo', credit:'José Pedro Viviani', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Fachada_do_Museu_da_Imigra%C3%A7%C3%A3o_de_S%C3%A3o_Paulo.JPG'},
      {file:'3.jpg', alt:'Estádio Conde Rodolfo Crespi (Clube Atlético Juventus)', credit:'Marcelo Baseggio', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Faixada_do_est%C3%A1dio_Conde_Rodolfo_Crespi.jpg'},
    ] },

  { id:'tatuape', nome:'Tatuapé', tier:1,
    mob:'Metrô + 4 parques', desc:'O endereço mais consolidado da Zona Leste, com metrô, trem e forte comércio.',
    texto:[
      'A história do Tatuapé remonta a 1560, quando Brás Cubas atravessou a Serra do Mar em busca de ouro e encontrou o ribeirão que batizou o bairro — "Tatuapé" vem do tupi e significa "caminho dos tatus". Por séculos foi uma região agrícola, e no início do século XX virou polo de olarias — os tijolos feitos ali ajudaram a construir boa parte de São Paulo.',
      'Hoje o Tatuapé é o endereço mais consolidado da Zona Leste: a chegada do metrô e do trem transformou o bairro de "passagem" em "destino", puxando um dos maiores booms imobiliários da região desde os anos 90. É essencialmente residencial e extremamente bem servido — quatro parques na região (Piqueri, CERET, Municipal do Tatuapé e Estadual do Belém), shoppings, e comércio que atende toda a Zona Leste.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Tatuapé do Metrô', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Tatuap%C3%A9_station_(Linha_3-Vermelha),_SP,_2026-02-27_(2).jpg'},
      {file:'2.jpg', alt:'Casa do Sítio Tatuapé', credit:'Leandro Criscuolo', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Casa_do_S%C3%ADtio_Tatuap%C3%A9_01.jpg'},
      {file:'3.jpg', alt:'Parque do Piqueri', credit:'Gean Bilch', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Parque-Piqueri-1.jpg'},
    ] },

  { id:'vila_prudente', nome:'Vila Prudente', tier:1,
    mob:'Metrô + monotrilho', desc:'Zona industrial que virou hub de mobilidade da Zona Leste.',
    texto:[
      'Fundada em 4 de outubro de 1890 por três irmãos imigrantes italianos — Emídio, Panfílio e Bernardino Falchi — que compraram terras e instalaram ali a Fábrica de Chocolates e Confeitos Falchi, com vilas operárias para os trabalhadores. O nome é uma homenagem a Prudente de Morais, então presidente da província de São Paulo.',
      'Depois de décadas como zona industrial, a Vila Prudente vive hoje uma transformação puxada pela mobilidade: a estação de metrô (Linha 2-Verde, inaugurada em 2010) e o Monotrilho conectam o bairro rapidamente ao centro, ao Ipiranga e ao ABC. Tem áreas verdes como o Parque Ecológico Vila Prudente, acessível para cadeirantes, com wi-fi gratuito e espaço para piquenique.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Igreja da Graça, Vila Prudente', credit:'Eugenio Hansen, OFS', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_da_Gra%C3%A7a_(Bairro_Vila_Prudente,_S%C3%A3o_Paulo_(SP),_Brasil).jpg'},
      {file:'2.jpg', alt:'Parque Vila Prudente', credit:'Fernando Salvio', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Parque_Vila_Prudente.jpg'},
      {file:'3.jpg', alt:'Estação Vila Prudente (Linha 2-Verde)', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Prudente_metro_station_(Linha_2-Verde),_SP,_2025-07-09_(1).jpg'},
    ] },

  { id:'vila_carrao', nome:'Vila Carrão', tier:1,
    mob:'Comunidade nipo-brasileira', desc:'Bairro "5 estrelas" com forte comunidade japonesa e o Okinawa Festival.',
    texto:[
      'O nome do bairro homenageia João da Silva Carrão, o "Conselheiro Carrão", ex-presidente da província de São Paulo. Fundada oficialmente em 1917, a Vila Carrão foi apontada pelo Censo de 2010 como "o bairro mais paulista de São Paulo" e hoje é considerada um bairro "5 estrelas" do mercado imobiliário da Zona Leste.',
      'Um traço muito particular do bairro é sua forte comunidade nipo-brasileira, majoritariamente de Okinawa — todos os anos acontece o tradicional Okinawa Festival, um dos eventos mais importantes do calendário oficial da cidade. A Avenida Conselheiro Carrão concentra um comércio tão intenso que já chegou a superar avenidas nobres como a Rebouças em fluxo. A microrregião de Chácara Califórnia, dentro do território do Carrão, mantém esse mesmo perfil residencial tranquilo.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vila Carrão', credit:'FernandoSantos', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Carr%C3%A3o_-_S%C3%A3o_Paulo_-_SP_-_panoramio.jpg'},
      {file:'2.jpg', alt:'Okinawa Festival, Vila Carrão', credit:'Tet', licenca:'CC BY 4.0', url:'https://commons.wikimedia.org/wiki/File:20240804_Ryuka_Sousako_Eisa_Daiko_-_20%C2%BA_Okinawa_Festival_-_2024_08_09_006.jpg'},
      {file:'3.jpg', alt:'Estação Carrão (Linha 3-Vermelha)', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Carr%C3%A3o_station_(Linha_3-Vermelha),_SP,_2026-03-01_(2).jpg'},
    ] },

  { id:'vila_ema', nome:'Vila Ema', tier:1,
    mob:'Residencial arborizado', desc:'Bairro mais antigo do distrito de São Lucas, tranquilo e bem conectado.',
    texto:[
      'Fundada em 1893 por Victor Nothmann, que loteou a área e batizou o bairro em homenagem à própria esposa, Emma Nothmann — é o bairro mais antigo do distrito de São Lucas, com forte ligação histórica com a vizinha Vila Prudente. Predominantemente residencial, com casas térreas e sobrados convivendo com a verticalização mais recente.',
      'É cortada por três avenidas importantes (Vila Ema, Prof. Luiz Inácio de Anhaia Mello e Sapopemba), o que garante boa conectividade com o restante da Zona Leste sem abrir mão do clima de bairro residencial.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vila Ema', credit:'Ricardo Domingues Pôssas', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Ema.jpg'},
      {file:'2.jpg', alt:'Centenário de Vila Ema', credit:'Lucas De León', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:3_%22Centen%C3%A1rio_de_Vila_Ema%22.jpg'},
      {file:'3.jpg', alt:'Parque Vila Ema', credit:'Fernandosalvio', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Protesto-ParqueVilaEma.jpg'},
    ] },

  { id:'itaquera', nome:'Itaquera', tier:1,
    mob:'Arena + Parque do Carmo', desc:'Projeção nacional com a Neo Química Arena e o 3º maior parque municipal de SP.',
    texto:[
      'O registro mais antigo de Itaquera é de 1686, mas a ocupação de fato só ganhou força com a chegada da estrada de ferro em 1875 e, depois, da imigração japonesa a partir de 1920. Durante décadas foi polo de olarias e pedreiras — a Pedreira Itaquera, fundada em 1957, forneceu granito até para a Catedral da Sé.',
      'O grande marco recente é a Neo Química Arena, construída para a Copa do Mundo de 2014 e sede olímpica no Rio 2016 — deu ao bairro uma projeção nacional inédita. Itaquera também abriga o Parque do Carmo, o terceiro maior parque municipal de São Paulo, com 1,5 milhão de m², incluindo a tradicional Festa das Cerejeiras.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Poupatempo Itaquera', credit:'Governo do Estado de São Paulo', licenca:'CC BY 2.0', url:'https://commons.wikimedia.org/wiki/File:Poupatempo_Itaquera_(28569187817).jpg'},
      {file:'2.jpg', alt:'Arena Corinthians (Neo Química Arena)', credit:'Anderson Bueno Pereira', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Arena_Corinthians_-_Pr%C3%A9dio_Oeste.jpg'},
      {file:'3.jpg', alt:'Bosque das Cerejeiras, Parque do Carmo', credit:'Adriano Makoto Suzuki', licenca:'CC BY 2.0', url:'https://commons.wikimedia.org/wiki/File:Bosque_das_Cerejeiras,_Parque_do_Carmo,_S%C3%A3o_Paulo_-_SP.jpg'},
    ] },

  { id:'penha', nome:'Penha', tier:1,
    mob:'Tradição religiosa', desc:'Um dos bairros mais antigos de São Paulo, com a Basílica de N. Sra. da Penha.',
    texto:[
      'Um dos bairros mais antigos de São Paulo, fundado em 1667 por padres que ergueram uma ermida em devoção a Nossa Senhora da Penha — hoje padroeira oficial da cidade. Durante a Revolução Tenentista de 1924, a Penha chegou a ser, por três meses, a capital provisória do estado de São Paulo.',
      'Todo dia 8 de setembro, o bairro celebra seu aniversário e a festa da padroeira com procissão, quermesse e shows na Basílica de Nossa Senhora da Penha — uma das maiores festas religiosas tradicionais da cidade. Hoje é bem servido por metrô, comércio e o Shopping Penha.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vista da Colina da Penha', credit:'Josué Alves Vicente', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:ColinaPenhaSP.jpg'},
      {file:'2.jpg', alt:'Basílica de Nossa Senhora da Penha', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_da_Penha_-_by_Lucas.JPG'},
      {file:'3.jpg', alt:'Igreja de Nossa Senhora da Penha de França', credit:'Túllio M Franca', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_de_Nossa_Senhora_da_Penha_de_Fran%C3%A7a.jpg'},
    ] },

  { id:'jardim_analia_franco', nome:'Jardim Anália Franco', tier:1,
    mob:'Arborizado e valorizado', desc:'Nome de homenagem a uma pioneira da educação social no início do século XX.',
    texto:[
      'O bairro leva o nome de Anália Franco, professora e jornalista que, no início do século XX, ajudou a fundar mais de 100 escolas voltadas a crianças órfãs e ex-escravizadas. Em 1911, ela comprou um terreno na região — que décadas depois viraria loteamento residencial e daria origem ao bairro que leva seu nome.',
      'Hoje é um dos endereços mais valorizados da Zona Leste: arborizado, residencial, com boa oferta de comércio, escolas e serviços — carrega até hoje o espírito de legado social de sua fundadora.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Skyline do Jardim Anália Franco', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Novo_skyline_do_Jardim_An%C3%A1lia_Franco_-_by_Lucas.JPG'},
      {file:'2.jpg', alt:'Parque Anália Franco', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Vista_do_Parque_An%C3%A1lia_Franco_%C2%B9_-_by_Lucas.JPG'},
      {file:'3.jpg', alt:'Shopping Anália Franco', credit:'Lukaaz', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Shopping_An%C3%A1lia_Franco_01_-_by_Lucas.JPG'},
    ] },

  { id:'bras', nome:'Brás', tier:1,
    mob:'Maior polo de confecção do país', desc:'Bairro histórico, hoje o maior polo de comércio popular do Brasil.',
    texto:[
      'Um dos bairros mais históricos da cidade, o Brás começou a crescer no fim do século XIX com a chegada de imigrantes italianos, que o transformaram num polo industrial e cultural. A partir dos anos 1940 recebeu um grande fluxo de migrantes nordestinos, que mudaram o perfil cultural e comercial da região.',
      'Hoje o Brás é conhecido nacionalmente como o maior polo de comércio popular e confecção do Brasil, com a icônica Feira da Madrugada atraindo dezenas de milhares de compradores diariamente. O vizinho Belenzinho, antiga área industrial, hoje abriga o SESC Belenzinho, um dos centros culturais mais ativos da cidade.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Brás', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Br%C3%A1s_train_station,_S%C3%A3o_Paulo,_2026-02-25.jpg'},
      {file:'2.jpg', alt:'Rua 25 de Março', credit:'Rag2.Brazil', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:25_de_Mar%C3%A7o,_S%C3%A3o_Paulo_SP.jpg'},
      {file:'3.jpg', alt:'SESC Belenzinho', credit:'Victor Lopes', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:SESC_Belenzinho.jpg'},
    ] },

  { id:'vila_matilde', nome:'Vila Matilde', tier:2,
    mob:'Metrô Linha 3', desc:'Bairro tradicional e residencial, com estação própria de metrô.',
    texto:[
      'Bairro tradicional e essencialmente residencial da Zona Leste, servido por estação própria de metrô (Linha 3-Vermelha). Mantém um comércio de bairro consolidado e é vizinho direto da Vila Carrão e Penha, se beneficiando da boa infraestrutura de toda a região.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Vila Matilde', credit:'FernandoSantos', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Matilde,_S%C3%A3o_Paulo,_Brasil_-_panoramio_(350).jpg'},
      {file:'2.jpg', alt:'Estação Vila Matilde (Linha 3-Vermelha)', credit:'Jcornelius', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Vila_Matilde_station_(Linha_3-Vermelha),_SP,_2026-03-01_(12).jpg'},
      {file:'3.jpg', alt:'Planta histórica de terrenos da Vila Matilde', credit:'Acervo Museu Paulista/USP', licenca:'Domínio público', url:null},
    ] },

  { id:'alto_da_mooca', nome:'Alto da Mooca', tier:2,
    mob:'Parte alta da Mooca', desc:'Área mais residencial e valorizada da Mooca, com ruas arborizadas.',
    texto:[
      'Parte alta e mais residencial da Mooca, com ruas arborizadas e vista privilegiada. Compartilha toda a herança italiana do bairro-mãe, com um perfil ainda mais tranquilo e valorizado.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Rua Jaboticabal, Alto da Mooca', credit:'CORRETOR-CARVALHO', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Rua_Jaboticabal_%E2%80%93_Alto_da_Mooca_-_panoramio.jpg'},
      {file:'2.jpg', alt:'Rua Piraçununga, Alto da Mooca', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
      {file:'3.jpg', alt:'Boulevard Perez, Alto da Mooca', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
    ] },

  { id:'vila_esperanca', nome:'Vila Esperança', tier:2,
    mob:'Residencial tranquilo', desc:'Bairro residencial próximo a Itaquera e Vila Matilde.',
    texto:[
      'Bairro residencial tranquilo na Zona Leste, próximo a Itaquera e Vila Matilde, com boa oferta de comércio de bairro e proximidade a áreas verdes da região.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Mezanino da Estação Guilhermina-Esperança', credit:'LuanCampSouza93', licenca:'CC0', url:'https://commons.wikimedia.org/wiki/File:Mezanino_Esta%C3%A7%C3%A3o_Guilhermina-Esperan%C3%A7a.jpg'},
      {file:'2.jpg', alt:'Avenida próxima à Estação Guilhermina-Esperança', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
      {file:'3.jpg', alt:'Plataforma da Estação Guilhermina-Esperança', credit:'Wikimedia Commons', licenca:'CC BY-SA 4.0', url:null},
    ] },

  { id:'vila_zilda', nome:'Vila Zilda', tier:2,
    mob:'Perto da Radial Leste', desc:'Bairro residencial na região da Penha/Vila Matilde.',
    texto:[
      'Bairro predominantemente residencial na região da Penha/Vila Matilde, com forte presença de infraestrutura de vizinhança e fácil acesso ao eixo da Radial Leste.',
    ],
    fotos:[] },

  { id:'vila_carmosina', nome:'Vila Carmosina', tier:2,
    mob:'Perto do Parque do Carmo', desc:'Bairro beneficiado pela proximidade ao 3º maior parque municipal de SP.',
    texto:[
      'Bairro na região de Itaquera/Parque do Carmo, beneficiado pela proximidade ao terceiro maior parque municipal de São Paulo e por uma malha residencial em expansão.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Jardim Marabá (região do Parque do Carmo)', credit:'Raphael Igor', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Jardim_Marab%C3%A1.jpg'},
      {file:'2.jpg', alt:'Brasão da Vila Carmosina', credit:'Wikimedia Commons', licenca:'CC BY-SA 4.0', url:null},
    ] },

  { id:'itaim_paulista', nome:'Itaim Paulista', tier:2,
    mob:'Forte crescimento populacional', desc:'Distrito extremo da Zona Leste, um dos que mais cresceram em SP.',
    texto:[
      'Distrito extremo da Zona Leste, uma das regiões que mais cresceram em população nas últimas décadas em São Paulo. Nome de origem tupi, ligado à antiga aldeia de Biacica/Imbiacica.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Chácara dos Fontoura (Chácara Biacica)', credit:'ExAstra', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Ch%C3%A1cara_dos_Fontoura_(ou_Ch%C3%A1cara_Biacica),_S%C3%A3o_Paulo_-_SP,_Brasil._Casar%C3%A3o,_entrada,_setembro_de_2024.jpg'},
      {file:'2.jpg', alt:'Casa de Cultura do Itaim', credit:'Bruno P. Ramos', licenca:'Domínio público', url:'https://commons.wikimedia.org/wiki/File:Casa_de_Cultura_do_Itaim.png'},
      {file:'3.jpg', alt:'Monumento em Itaim Paulista', credit:'SPimages', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:ItaimMonumento.jpg'},
    ] },

  { id:'cidade_patriarca', nome:'Cidade Patriarca', tier:2,
    mob:'Metrô Linha 3', desc:'Bairro residencial com crescimento imobiliário recente.',
    texto:[
      'Bairro residencial na Zona Leste, com crescimento imobiliário recente e boa conexão viária com Itaquera e São Mateus.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Bairro Cidade Patriarca', credit:'Luansda', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Bairro_Cidade_Patriarca,_S%C3%A3o_Paulo-SP.jpg'},
      {file:'2.jpg', alt:'Cidade Patriarca, próximo à Estação Patriarca-Vila Ré', credit:'Wikimedia Commons', licenca:'CC0', url:null},
      {file:'3.jpg', alt:'Estação Patriarca', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
    ] },

  { id:'guaianases', nome:'Guaianases', tier:2,
    mob:'Distrito mais distante', desc:'Um dos distritos mais populosos, ligado à antiga estrada de ferro.',
    texto:[
      'Distrito mais distante da Zona Leste, um dos mais populosos da cidade, com identidade forte ligada à estação de trem que leva seu nome (uma das mais antigas linhas ferroviárias de SP).',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Guaianases (CPTM)', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_Guaianazez_da_CPTM.jpg'},
      {file:'2.jpg', alt:'Colégio Palmerino Calabrez, Guaianases', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Col%C3%A9gio_Palmerino_Calabrez.JPG'},
      {file:'3.jpg', alt:'Igreja em Guaianases', credit:'São Benedito', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Fotoigreja.jpg'},
    ] },

  { id:'vila_re', nome:'Vila Ré', tier:2,
    mob:'Perto da Radial Leste', desc:'Bairro residencial com comércio consolidado.',
    texto:[
      'Bairro residencial na região de Penha/Vila Matilde, com comércio de bairro consolidado e proximidade à Radial Leste.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Patriarca-Vila Ré', credit:'Luansda', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_Patriarca_-_Vila_R%C3%A9.jpg'},
      {file:'2.jpg', alt:'Letreiro da Estação Patriarca-Vila Ré', credit:'Wikimedia Commons', licenca:'CC0', url:null},
      {file:'3.jpg', alt:'Plataforma da Estação Patriarca-Vila Ré', credit:'Wikimedia Commons', licenca:'CC BY-SA 4.0', url:null},
    ] },

  { id:'sapopemba', nome:'Sapopemba', tier:2,
    mob:'Um dos mais populosos', desc:'Distrito populoso com origem em antigas fazendas.',
    texto:[
      'Um dos distritos mais populosos da Zona Leste, com origem em antigas fazendas e forte crescimento habitacional a partir da segunda metade do século XX.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Sapopemba (Linha 15-Prata)', credit:'Geogast', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_Sapopemba_%E2%80%A2_Linha_15_Prata,_Metr%C3%B4_S%C3%A3o_Paulo_%E2%80%A2_Entrada_Sul_com_Totem.jpg'},
      {file:'2.jpg', alt:'Mercado do Sapopemba', credit:'FABIANO LUCIANO BASSETTI', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Mercado_do_Sapopemba.jpg'},
      {file:'3.jpg', alt:'Igreja em Sapopemba', credit:'Lukaaz', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Igreja_em_Sapopemba.JPG'},
    ] },

  { id:'sao_mateus', nome:'São Mateus', tier:2,
    mob:'Investimento em mobilidade', desc:'Distrito extremo-leste com identidade ligada à antiga estrada de ferro.',
    texto:[
      'Distrito extremo-leste, com identidade histórica ligada à antiga Estrada de Ferro e forte presença de comunidades tradicionais. Um dos bairros que mais recebeu investimento em mobilidade nos últimos anos.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Edifício do Grupo Escolar São José', credit:'Mateus Carreira', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio_do_Grupo_Escolar_S%C3%A3o_Jos%C3%A9_1.jpg'},
      {file:'2.jpg', alt:'Terminal São Mateus', credit:'Sorocabano 32', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Terminal_S%C3%A3o_Mateus_(2020).jpg'},
      {file:'3.jpg', alt:'Área do Terminal São Mateus', credit:'MacGyver Santista', licenca:'CC0', url:'https://commons.wikimedia.org/wiki/File:Area_5_-_Term._S%C3%A3o_Mateus.jpg'},
    ] },

  { id:'agua_rasa', nome:'Água Rasa', tier:2,
    mob:'Entre Tatuapé e Mooca', desc:'Bairro pequeno e residencial, cercado por vizinhos consolidados.',
    texto:[
      'Bairro pequeno e essencialmente residencial, encravado entre Tatuapé, Vila Formosa e Mooca — se beneficia da infraestrutura de todos os vizinhos mais consolidados.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Paróquia Nossa Senhora de Lourdes, Água Rasa', credit:'CORRETOR-CARVALHO', licenca:'CC BY-SA 3.0', url:'https://commons.wikimedia.org/wiki/File:Par%C3%B3quia_Nossa_Senhora_Loudes_-_Rua_Jo%C3%A3o_Soares,_13_-_%C3%81gua_Rasa_-_panoramio.jpg'},
      {file:'2.jpg', alt:'Ciclovia da Avenida Vereador Abel Ferreira, Água Rasa', credit:'Wikimedia Commons', licenca:'CC BY-SA 3.0', url:null},
    ] },

  { id:'ermelino_matarazzo', nome:'Ermelino Matarazzo', tier:2,
    mob:'Herança industrial', desc:'Nome de homenagem ao industrial ítalo-brasileiro Conde Matarazzo.',
    texto:[
      'Bairro que leva o nome do imigrante e industrial ítalo-brasileiro Francesco Matarazzo (o "Conde Matarazzo"), um dos maiores empresários da história paulista. Região com forte presença industrial no passado e hoje em transformação residencial.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Estação Ermelino Matarazzo', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3oErmelinoMatarazzo.jpg'},
      {file:'2.jpg', alt:'Estátua do Conde Francisco Matarazzo', credit:'Albert Carlos S Domingos', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:Est%C3%A1tua_do_Conde_Francisco_Matarazzo.jpg'},
    ] },

  { id:'cidade_tiradentes', nome:'Cidade Tiradentes', tier:2,
    mob:'Grande conjunto habitacional', desc:'Um dos maiores conjuntos habitacionais da América Latina.',
    texto:[
      'Um dos maiores conjuntos habitacionais da América Latina, planejado a partir dos anos 1980 para abrigar populações removidas de áreas de risco de toda a cidade. Hoje é um distrito populoso com identidade comunitária própria e projetos culturais relevantes, como o Complexo Cultural Cidade Tiradentes.',
    ],
    fotos:[
      {file:'1.jpg', alt:'Terminal Cidade Tiradentes', credit:'MacGyver Santista', licenca:'CC0', url:'https://commons.wikimedia.org/wiki/File:Area_4_-_Term._Cidade_Tiradentes.jpg'},
      {file:'2.jpg', alt:'CEU Cidade Tiradentes', credit:'Jatobb', licenca:'CC BY-SA 4.0', url:'https://commons.wikimedia.org/wiki/File:CEUcidade_tiradentes.jpg'},
      {file:'3.jpg', alt:'Vista geral de Cidade Tiradentes', credit:'André Bonacin', licenca:'CC BY 3.0', url:'https://commons.wikimedia.org/wiki/File:Cidade_Tiradentes_-_S%C3%A3o_Paulo_City.jpg'},
    ] },

  { id:'aricanduva', nome:'Aricanduva', tier:2,
    mob:'Shopping Aricanduva', desc:'Sedia um dos maiores shoppings da América Latina.',
    texto:[
      'Bairro conhecido nacionalmente por sediar o Shopping Aricanduva, um dos maiores shoppings da América Latina — um símbolo de comércio e lazer para toda a Zona Leste.',
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
