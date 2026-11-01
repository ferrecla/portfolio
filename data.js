/* Fonte única: Banco Mestre de Currículos — Claudi Ferreira
   Nada aqui foi inferido. Fichas técnicas transcritas de fontes oficiais. */

const DATA = {
  contact: {
    email: "fferreiraclaudi@gmail.com",
    phone: "+55 11 95186-5699",
    whatsapp: "https://wa.me/5511951865699",
    city: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
    linkedin: "https://www.linkedin.com/in/claudi-ferreira-0bba31267/",
    cargo: "https://claudi.cargo.site",
    vera: "https://veracurtas.com.br",
    github: "https://github.com/ferrecla"
  },

  ui: {
    pt: {
      areas: { artes: "Artes da cena", tech: "Comunicação & Tech" },
      works: "Trabalhos selecionados", about: "Sobre", tools: "Ferramentas",
      edu: "Formação", contact: "Contato",
      shareLabel: "Link desta versão do portfólio",
      copy: "Copiar", copied: "Copiado",
      links: "Verificação e créditos", facts: "Ficha",
      footer: "Claudi Ferreira — São Paulo", email: "E-mail", phone: "Telefone",
      based: "Base"
    },
    en: {
      areas: { artes: "Performing arts", tech: "Communication & Tech" },
      works: "Selected works", about: "About", tools: "Tools",
      edu: "Education", contact: "Contact",
      shareLabel: "Link to this version of the portfolio",
      copy: "Copy", copied: "Copied",
      links: "Credits and verification", facts: "Details",
      footer: "Claudi Ferreira — São Paulo", email: "Email", phone: "Phone",
      based: "Based in"
    }
  },

  fronts: {
    artes: {
      pt: {
        eyebrow: "Artes da cena · Luz · Som · Produção",
        headline: "Luz, som e corpos em circulação.",
        lede: "Operação de iluminação e áudio para teatro, dança e performance, com circulação no Brasil e na Europa.",
        bio: [
          "Claudi Ferreira é artista da cena, técnico de iluminação e som e produtor. Pesquisa corpo, imagem e desaparecimento na performance contemporânea como bolsista de Iniciação Científica PIBIC-CEPE na PUC-SP, onde cursa o Bacharelado em Comunicação das Artes do Corpo.",
          "Opera luz e áudio em circulação nacional e internacional, com apresentações em Bruxelas, Berlim, Braunschweig, São Paulo, Belo Horizonte e Porto Alegre. Fundou a Produtora Maus Tratos, coletivo com três projetos aprovados em políticas públicas de fomento."
        ],
        stats: []
      },
      en: {
        eyebrow: "Performing arts · Light · Sound · Production",
        headline: "Light, sound and bodies in circulation.",
        lede: "Lighting and audio operation for theatre, dance and performance, touring across Brazil and Europe.",
        bio: [
          "Claudi Ferreira is a performing artist, lighting and sound technician and producer. He researches body, image and disappearance in contemporary performance as a PIBIC-CEPE undergraduate research fellow at PUC-SP, where he studies for a BA in Communication of Body Arts.",
          "He operates light and audio on national and international tours, with performances in Brussels, Berlin, Braunschweig, São Paulo, Belo Horizonte and Porto Alegre. He founded Produtora Maus Tratos, a collective with three projects granted public cultural funding."
        ],
        stats: []
      }
    },
    tech: {
      pt: {
        eyebrow: "Creative Strategist · Estratégia Digital & Produto · Full-Stack",
        headline: "Visão criativa, engenharia web e inteligência de dados.",
        lede: "Profissional híbrido articulando desenvolvimento web full-stack, estratégia de produto digital, CRM e inteligência de conteúdo — conectando código, branding e audiência.",
        bio: [
          "Claudi Ferreira atua na intersecção entre tecnologia, produto e comunicação como Creative Strategist e desenvolvedor. Sua prática híbrida une arquitetura de software moderna, estratégia de dados e narrativa de marca para viabilizar e tracionar ecossistemas digitais.",
          "Concebeu, desenhou e desenvolveu a Vera, plataforma de streaming de cinema independente construída em Next.js e Supabase. Foi analista de dados e inteligência de conteúdo na operação Kwai (IEST Group) e Especialista em Mídias Sociais na Teleperformance, operando CRM estratégico multicanal (RD Station CRM, Buzz Monitor). Certificado em Google Analytics 4 (GA4)."
        ],
        stats: []
      },
      en: {
        eyebrow: "Creative Strategist · Digital Product & Growth · Full-Stack",
        headline: "Creative strategy, web engineering and data intelligence.",
        lede: "Hybrid professional bridging full-stack web development, digital product strategy, CRM and content intelligence — connecting clean code, brand design and audience growth.",
        bio: [
          "Claudi Ferreira operates at the intersection of technology, product and communication as a Creative Strategist and developer. His multidisciplinary approach merges modern software engineering, data analytics and brand storytelling to build scalable digital ecosystems.",
          "He conceived, architected and built Vera, an independent film streaming platform on Next.js and Supabase. Former data and content strategist on the Kwai operation (IEST Group) and Social Media Specialist at Teleperformance (managing RD Station CRM, Buzz Monitor). Google Analytics 4 (GA4) certified."
        ],
        stats: []
      }
    }
  },

  tools: {
    artes: ["GrandMA2","ChamSys","DIALux","Reaper","Adobe Audition","Audacity","Ocenaudio","OBS Studio","Microfonação","Som direto","Cues","Montagem e desmontagem"],
    tech: ["Next.js","React","Supabase","Strapi","WordPress","JavaScript","HTML/CSS","REST APIs","Git","Linux","RD Station CRM","Buzz Monitor","GA4","Search Console","Meta Ads","Google Ads","TikTok Ads","Kwai Business Center","WooCommerce","Figma","Premiere Pro","CapCut","Notion"]
  },

  education: {
    artes: [
      { pt:{t:"Bacharelado em Comunicação das Artes do Corpo",s:"PUC-SP · em andamento · previsão 2027"},
        en:{t:"BA in Communication of Body Arts",s:"PUC-SP · ongoing · expected 2027"} },
      { pt:{t:"Iniciação Científica PIBIC-CEPE",s:"PUC-SP / FAFICLA · bolsa · 2026–2027"},
        en:{t:"Undergraduate Research Fellowship (PIBIC-CEPE)",s:"PUC-SP / FAFICLA · funded · 2026–2027"} },
      { pt:{t:"Percursos entre Curadoria e Exposições",s:"Assemblage · 60 h · em andamento"},
        en:{t:"Paths between Curating and Exhibitions",s:"Assemblage · 60 h · ongoing"} },
      { pt:{t:"Formação Livre em Cine/TV",s:"Centro Audiovisual de São Bernardo do Campo · 1.800 h · 2023"},
        en:{t:"Free Programme in Film/TV",s:"Centro Audiovisual de São Bernardo do Campo · 1,800 h · 2023"} },
      { pt:{t:"Técnicas de Som — PTAC",s:"Instituto Brasileiro de Teatro · 150 h + 40 h de estágio · 2023"},
        en:{t:"Sound Techniques — PTAC",s:"Instituto Brasileiro de Teatro · 150 h + 40 h internship · 2023"} },
      { pt:{t:"NOIS na Fita — som para documentários",s:"NOIS no DOC · 130 h · 2023"},
        en:{t:"NOIS na Fita — documentary sound",s:"NOIS no DOC · 130 h · 2023"} },
      { pt:{t:"Produção Cultural Contemporânea",s:"SP Escola de Teatro · 64 h · 2023"},
        en:{t:"Contemporary Cultural Production",s:"SP Escola de Teatro · 64 h · 2023"} },
      { pt:{t:"Educação Museal",s:"ENAP · 75 h · 2023"},
        en:{t:"Museum Education",s:"ENAP · 75 h · 2023"} },
      { pt:{t:"Iluminação Cênica",s:"Centro Livre de Artes Cênicas · 16 h + 80 h de estágio · 2015"},
        en:{t:"Stage Lighting",s:"Centro Livre de Artes Cênicas · 16 h + 80 h internship · 2015"} }
    ],
    tech: [
      { pt:{t:"Bacharelado em Comunicação das Artes do Corpo",s:"PUC-SP · em andamento · previsão 2027"},
        en:{t:"BA in Communication of Body Arts",s:"PUC-SP · ongoing · expected 2027"} },
      { pt:{t:"Google Analytics 4",s:"Google · certificação · 2026"},
        en:{t:"Google Analytics 4",s:"Google · certification · 2026"} },
      { pt:{t:"Formação Livre em Cine/TV",s:"Centro Audiovisual de São Bernardo do Campo · 1.800 h · 2023"},
        en:{t:"Free Programme in Film/TV",s:"Centro Audiovisual de São Bernardo do Campo · 1,800 h · 2023"} },
      { pt:{t:"Técnico em Administração",s:"ETEC Lauro Gomes · concluído · 2014"},
        en:{t:"Technical Diploma in Business Administration",s:"ETEC Lauro Gomes · completed · 2014"} },
      { pt:{t:"Inglês B2 — CEFR",s:"Avaliação de proficiência · 2019"},
        en:{t:"English B2 — CEFR",s:"Proficiency assessment · 2019"} }
    ]
  },

  projects: [
    {
      id:"reality-show", areas:["artes"], year:"2026", img:"assets/img/reality-show.png",
      title:"Reality Show",
      org:{pt:"Grupo MEXA",en:"Grupo MEXA"},
      role:{pt:"Operador de iluminação",en:"Lighting operator"},
      desc:{
        pt:["Operação de iluminação em GrandMA2 ao longo da circulação europeia do espetáculo, incluindo coordenação de montagens, reuniões técnicas, adaptação de mapa de luz e desmontagens.","Sete apresentações em três cidades: Bruxelas (28–30/05), Berlim (12–13/06) e Braunschweig (19–20/06)."],
        en:["Lighting operation on GrandMA2 throughout the European tour, including coordination of set-ups, technical meetings, adaptation of the lighting plot and strike.","Seven performances in three cities: Brussels (28–30 May), Berlin (12–13 June) and Braunschweig (19–20 June)."]
      },
      facts:{pt:[["Função","Operador de iluminação / Lichttechnik"],["Console","GrandMA2"],["Apresentações","7"],["Circulação","Bélgica e Alemanha"]],
             en:[["Role","Lighting operator / Lichttechnik"],["Console","GrandMA2"],["Performances","7"],["Tour","Belgium and Germany"]]},
      links:[
        {l:"Kunstenfestivaldesarts",u:"https://kfda.be/en/festivals/2026/programme/reality-show/"},
        {l:"Sophiensaele Berlin",u:"https://sophiensaele.com/en/stueck/reality-show"},
        {l:"Theaterformen",u:"https://www.theaterformen.de/programm-2026/reality-show"}
      ]
    },
    {
      id:"a-mon-seul-desir", areas:["artes"], year:"2025", img:"assets/img/a-mon-seul-desir.jpg",
      title:"A mon seul désir",
      org:{pt:"Gaëlle Bourges · Bienal Sesc de Dança",en:"Gaëlle Bourges · Bienal Sesc de Dança"},
      role:{pt:"Performer / residente",en:"Performer / resident"},
      desc:{
        pt:["Residência e workshop criativo seguidos de seis apresentações em Campinas e São Paulo, na obra da coreógrafa francesa Gaëlle Bourges, apresentada pela Bienal Sesc de Dança."],
        en:["Residency and creative workshop followed by six performances in Campinas and São Paulo, in the work by French choreographer Gaëlle Bourges, presented by Bienal Sesc de Dança."]
      },
      facts:{pt:[["Crédito oficial","Performer/residente"],["Apresentações","6"],["Cidades","Campinas e São Paulo"]],
             en:[["Official credit","Performer/resident"],["Performances","6"],["Cities","Campinas and São Paulo"]]},
      links:[{l:"Sesc São Paulo",u:"https://www.sescsp.org.br/editorial/a-mon-seul-desir-ao-meu-unico-desejo-bienal-sesc-de-danca/"}]
    },
    {
      id:"contra-cena", areas:["artes","tech"], year:"2026", img:"assets/img/contra-cena.jpg",
      title:"Contra Cena",
      org:{pt:"Grupo MEXA · Galeria Yehudi Hollander-Pappi",en:"Grupo MEXA · Galeria Yehudi Hollander-Pappi"},
      role:{pt:"Som e microfones",en:"Sound and microphones"},
      desc:{
        pt:["Primeira exposição do coletivo MEXA na Galeria Yehudi Hollander-Pappi, apresentada na SP-Arte.","A mostra articula dois regimes de imagem: a fotografia, que acumula e simultaneiza, e o vídeo, que introduz duração e sequência. Duas instalações de vídeo integram a exposição: Contra Cena (duas telas, 18 min) e Teste de Elenco (10 min).","Atuação no som das duas obras: captação, microfonação e operação."],
        en:["First exhibition by collective MEXA at Galeria Yehudi Hollander-Pappi, presented at SP-Arte.","The show articulates two regimes of image: photography, which accumulates and synchronises, and video, which introduces duration and sequence. Two video installations are part of the exhibition: Contra Cena (two screens, 18 min) and Teste de Elenco (10 min).","Sound work on both pieces: recording, microphones and operation."]
      },
      facts:{
        pt:[["Crédito (Contra Cena)","Som e mic: Claudi"],
            ["Crédito (Teste de Elenco)","Som e microfones: Claudi & Podeserdesligado"],
            ["Direção dos vídeos","João Turchi"],
            ["Roteiro","João Turchi & Laysa Elias"],
            ["Fotografias","Lu Mugayar"],
            ["Expografia","Vão"],
            ["Produção executiva","Francesca Tedeschi"],
            ["Apoio","Galeria Yehudi Hollander-Pappi & Casa do Povo"]],
        en:[["Credit (Contra Cena)","Sound and mic: Claudi"],
            ["Credit (Teste de Elenco)","Sound and microphones: Claudi & Podeserdesligado"],
            ["Video direction","João Turchi"],
            ["Screenplay","João Turchi & Laysa Elias"],
            ["Photographs","Lu Mugayar"],
            ["Exhibition design","Vão"],
            ["Executive production","Francesca Tedeschi"],
            ["Support","Galeria Yehudi Hollander-Pappi & Casa do Povo"]]
      },
      links:[
        {l:"SP-Arte",u:"https://www.sp-arte.com/exposicoes/contra-cena"},
        {l:"Instagram · MEXA",u:"https://www.instagram.com/p/DbD-9B_jrKw/?img_index=1"}
      ]
    },
    {
      id:"fossil", areas:["artes"], year:"2025", img:"assets/img/fossil.png",
      title:"Fóssil",
      org:{pt:"Produtora Maus Tratos",en:"Produtora Maus Tratos"},
      role:{pt:"Proposta performática, expografia e livro-objeto",en:"Performative proposal, exhibition design and artist's book"},
      desc:{
        pt:["A memória pode ser imprecisa, e guarda um certo presente como registro dinâmico do tempo. Mas nós, sujeitos contemporâneos, certamente não temos capacidade de armazenamento suficiente em nossos órgãos e ossos para seguir em frente. Então, a memória se capilariza: sai do corpo humano, vai para clouds, torna-se imagem. Ser imagem é ser informação.","A pesquisa evidenciou uma lógica contida no processo de escrita da história desses futuros fósseis: trabalho, memória, informação. A percepção não contesta a informação; assim há de ser na cidade onde a linha de montagem ditou o destino de gerações inteiras.","O 'trabalho' consistiu em seis derivas pela cidade de São Bernardo do Campo. 'FÓSSIL' é uma tentativa de revisitar o presente através das 'memórias' físicas rejeitadas pelo território que aconteceram em um passado breve. E a 'informação' é o registro dessas histórias e gestos que seriam fossilizados em concreto ou pelo metal.","Os registros das 24 horas, 12 minutos e 55 segundos de percursos, somados em 110 GB, estão disponíveis em um livro-objeto na Pinacoteca Municipal de São Bernardo do Campo."],
        en:["Memory can be imprecise, and holds a certain present as a dynamic record of time. But we, contemporary subjects, certainly do not have enough storage capacity in our organs and bones to move forward. So memory becomes capillary: it leaves the human body, goes to clouds, becomes image. To be image is to be information.","The research revealed a logic contained in the process of writing the history of these future fossils: work, memory, information. Perception does not contest information; so it must be in the city where the assembly line dictated the fate of entire generations.","The 'work' consisted of six drifts through the city of São Bernardo do Campo. 'FÓSSIL' is an attempt to revisit the present through the physical 'memories' rejected by the territory that happened in a brief past. And the 'information' is the record of those stories and gestures that would be fossilised in concrete or by metal.","The records of 24 hours, 12 minutes and 55 seconds of journeys, totalling 110 GB, are available in an artist's book at the Pinacoteca Municipal de São Bernardo do Campo."]
      },
      facts:{pt:[["Fomento","Lei Aldir Blanc"],["Local","CREC Paulicéia — São Bernardo do Campo"],["Formato","Exposição e performance de situação"],["Derivas","6 percursos pela cidade"],["Registros","24 h 12 min 55 s · 110 GB"],["Livro-objeto","Pinacoteca Municipal"],["Produção executiva","Lucas Meger"],["Registros da exposição","Yasmin Tami"]],
             en:[["Funding","Lei Aldir Blanc"],["Venue","CREC Paulicéia — São Bernardo do Campo"],["Format","Exhibition and situational performance"],["Drifts","6 journeys through the city"],["Records","24 h 12 min 55 s · 110 GB"],["Artist's book","Pinacoteca Municipal"],["Executive production","Lucas Meger"],["Exhibition records","Yasmin Tami"]]},
      links:[{l:"Instagram",u:"https://www.instagram.com/p/DRh-3I5kgHu/"}]
    },
    {
      id:"a-ultima-ceia", areas:["artes"], year:"2025", img:"assets/img/a-ultima-ceia.jpg",
      title:"A última ceia",
      org:{pt:"Grupo MEXA",en:"Grupo MEXA"},
      role:{pt:"Iluminador assistente",en:"Assistant lighting designer"},
      desc:{pt:["Quatro apresentações como substituto, incluindo a MITsp 2025."],
            en:["Four performances as a substitute, including MITsp 2025."]},
      facts:{pt:[["Crédito","Iluminador assistente"],["Apresentações","4"],["Festival","MITsp 2025"]],
             en:[["Credit","Assistant lighting designer"],["Performances","4"],["Festival","MITsp 2025"]]},
      links:[]
    },
    {
      id:"cavalo-bravo", areas:["artes"], year:"2023–2025", img:"assets/img/cavalo-bravo.jpg",
      title:"Cavalo bravo não se amansa",
      org:{pt:"Cia Teatro Documentário",en:"Cia Teatro Documentário"},
      role:{pt:"Sonoplasta",en:"Sound operator"},
      desc:{pt:["Monitoramento, microfonação e operação de áudio em ensaios e apresentações. Vinte apresentações em 2025."],
            en:["Monitoring, microphone handling and audio operation in rehearsals and performances. Twenty performances in 2025."]},
      facts:{pt:[["Função","Sonoplasta"],["Período","2023–2025"],["Apresentações","20 em 2025"]],
             en:[["Role","Sound operator"],["Period","2023–2025"],["Performances","20 in 2025"]]},
      links:[{l:"Sympla",u:"https://www.sympla.com.br/evento/cavalo-bravo-nao-se-amansa-um-experimento-cenico-documental-ou-um-sopro-de-exu/2860376"}]
    },
    {
      id:"felicidade", areas:["artes"], year:"2025", img:null,
      title:"Felicidade",
      org:{pt:"Morete e Forte Produções",en:"Morete e Forte Produções"},
      role:{pt:"Microfonista e dançarino",en:"Microphone technician and dancer"},
      desc:{pt:["Musical dirigido por Dani Angelotti, com 30 apresentações em São Paulo, Belo Horizonte e Porto Alegre entre outubro e novembro de 2025. Dupla função em cena e na operação de microfonação."],
            en:["Musical directed by Dani Angelotti, with 30 performances in São Paulo, Belo Horizonte and Porto Alegre between October and November 2025. Dual role on stage and on microphone operation."]},
      facts:{pt:[["Direção","Dani Angelotti"],["Apresentações","30"],["Cidades","São Paulo, Belo Horizonte, Porto Alegre"]],
             en:[["Direction","Dani Angelotti"],["Performances","30"],["Cities","São Paulo, Belo Horizonte, Porto Alegre"]]},
      links:[{l:"InfoTeatro",u:"https://infoteatro.com.br/peca/felicidade/"}]
    },
    {
      id:"mundareu", areas:["artes"], year:"2024", img:null,
      title:"Mundaréu de Mim",
      org:{pt:"Instituto do Teatro Brasileiro",en:"Instituto do Teatro Brasileiro"},
      role:{pt:"Monitor de áudio",en:"Audio monitor"},
      desc:{pt:["Microfonação e monitoramento de áudio em 12 apresentações no Parque da Água Branca, em outubro de 2024."],
            en:["Microphone handling and audio monitoring for 12 performances at Parque da Água Branca, October 2024."]},
      facts:{pt:[["Função","Monitor de áudio"],["Apresentações","12"],["Local","Parque da Água Branca"]],
             en:[["Role","Audio monitor"],["Performances","12"],["Venue","Parque da Água Branca"]]},
      links:[]
    },
    {
      id:"locarte", areas:["artes"], year:"2023–2025", img:null,
      title:"Espetáculos de conclusão",
      org:{pt:"Cia Locarte de Teatro",en:"Cia Locarte de Teatro"},
      role:{pt:"Iluminador",en:"Lighting operator"},
      desc:{pt:["Operação de iluminação em espetáculos de conclusão de semestre, com cerca de 30 apresentações ao longo do período."],
            en:["Lighting operation for end-of-semester productions, with around 30 performances over the period."]},
      facts:{pt:[["Função","Iluminador"],["Período","2023–2025"],["Apresentações","cerca de 30"]],
             en:[["Role","Lighting operator"],["Period","2023–2025"],["Performances","around 30"]]},
      links:[]
    },
    {
      id:"deriva", areas:["artes","tech"], year:"2023–2024", img:"assets/img/deriva.jpg",
      title:"Deriva",
      org:{pt:"NOIS no DOC",en:"NOIS no DOC"},
      role:{pt:"Som direto e edição de som",en:"Production sound and sound editing"},
      desc:{
        pt:["Vozes retratam o indivíduo à deriva na metrópole paulistana: a pressa, a escassez das relações, o desejo constante de um futuro que nunca chega.","Recebeu Menção Honrosa do Júri no Festival Ecofalante 2024. Som direto com Vitória Brigidio; edição de som com Yan Nicolas Xavier Freire."],
        en:["Voices portray the individual adrift in the São Paulo metropolis: the haste, the scarcity of relationships, the constant desire for a future that never arrives.","Received an Honourable Mention from the Jury at Festival Ecofalante 2024. Production sound with Vitória Brigidio; sound editing with Yan Nicolas Xavier Freire."]
      },
      facts:{pt:[["Direção","Hellen Nicolau"],["Roteiro","Marcio Henrique Abrante e Becca Nieves"],["Direção de fotografia","Becca Nieves"],["Som direto","Vitória Brigidio e Claudi"],["Edição de som","Claudi e Yan Nicolas Xavier Freire"],["Produção","Vitória Brigidio"],["Reconhecimento","Menção Honrosa do Júri — Ecofalante 2024"]],
             en:[["Director","Hellen Nicolau"],["Screenplay","Marcio Henrique Abrante and Becca Nieves"],["Cinematography","Becca Nieves"],["Production sound","Vitória Brigidio and Claudi"],["Sound editing","Claudi and Yan Nicolas Xavier Freire"],["Producer","Vitória Brigidio"],["Award","Jury Honourable Mention — Ecofalante 2024"]]},
      links:[
        {l:"É Nóis na Fita",u:"https://enoisnafita.com.br/curta/deriva/"},
        {l:"Festival Ecofalante",u:"https://ecofalante.org.br/filme/deriva"}
      ]
    },
    {
      id:"telas", areas:["artes","tech"], year:"2023", img:"assets/img/telas.png",
      title:"Telas",
      org:{pt:"Formação Livre em Cine/TV",en:"Free Programme in Film/TV"},
      role:{pt:"Captação e edição de som direto",en:"Production sound recording and editing"},
      desc:{pt:["Curta de 5 minutos dirigido por Rogério Martins. O cotidiano de uma criança que, devido à ausência do pai e à morte da mãe, busca refúgio nos desenhos animados que assiste na TV.","Selecionado para o 11º Festival de Cinema de Caruaru, IV Festissauro e Mostra Retomada."],
            en:["5-minute short film directed by Rogério Martins. The daily life of a child who, due to the father's absence and the mother's death, seeks refuge in the cartoons watched on TV.","Selected for the 11th Festival de Cinema de Caruaru, IV Festissauro and Mostra Retomada."]},
      facts:{pt:[["Direção","Rogério Martins"],["Duração","5 min"],["Classificação","Livre"],["Função","Captação e edição de som direto"],["Seleções","11º Festival de Cinema de Caruaru · IV Festissauro · Mostra Retomada"]],
             en:[["Director","Rogério Martins"],["Runtime","5 min"],["Rating","Livre"],["Role","Production sound recording and editing"],["Selections","11th Festival de Cinema de Caruaru · IV Festissauro · Mostra Retomada"]]},
      links:[{l:"Festival de Caruaru",u:"https://festivaldecaruaru.com.br/2024/mostra-infantil/telas/"}]
    },
    {
      id:"solucos", areas:["artes","tech"], year:"2024", img:"assets/img/solucos.png",
      title:"Soluços de Arranque",
      org:{pt:"Produtora Maus Tratos",en:"Produtora Maus Tratos"},
      role:{pt:"Produção executiva e produção",en:"Executive production and production"},
      desc:{pt:["Curta-metragem dirigido por Lucas Meger, contemplado pela Lei Paulo Gustavo em São Bernardo do Campo. Em circulação."],
            en:["Short film directed by Lucas Meger, funded by Lei Paulo Gustavo in São Bernardo do Campo. Currently on the festival circuit."]},
      facts:{pt:[["Direção","Lucas Meger"],["Fomento","Lei Paulo Gustavo — São Bernardo do Campo"],["Status","Em circulação"]],
             en:[["Direction","Lucas Meger"],["Funding","Lei Paulo Gustavo — São Bernardo do Campo"],["Status","On the circuit"]]},
      links:[]
    },
    {
      id:"maus-tratos", areas:["artes","tech"], year:"2024–", img:null,
      title:"Produtora Maus Tratos",
      org:{pt:"Coletivo de produção cultural",en:"Cultural production collective"},
      role:{pt:"Fundador, produtor executivo, designer e desenvolvedor",en:"Founder, executive producer, designer and developer"},
      desc:{pt:["Fundação e estruturação do coletivo, elaboração e execução de projetos, produção executiva, design, desenvolvimento, cronogramas, documentação, equipes e entregas.","Três projetos aprovados: Fóssil (exposição), Vera (streaming de curtas) e Soluços de Arranque (curta-metragem)."],
            en:["Founding and structuring of the collective, project writing and execution, executive production, design, development, schedules, documentation, teams and deliverables.","Three funded projects: Fóssil (exhibition), Vera (short-film streaming) and Soluços de Arranque (short film)."]},
      facts:{pt:[["Fundação","2024"],["Projetos aprovados","3"],["Frentes","Produção, design, desenvolvimento"]],
             en:[["Founded","2024"],["Funded projects","3"],["Strands","Production, design, development"]]},
      links:[{l:"Linktree",u:"https://linktr.ee/maus.tratos"}]
    },
    {
      id:"vera", areas:["tech","artes"], year:"2025–", img:"assets/img/vera.png",
      title:"Vera",
      org:{pt:"Produtora Maus Tratos",en:"Produtora Maus Tratos"},
      role:{pt:"Desenvolvimento web, curadoria e gestão de conteúdo",en:"Web development, curation and content management"},
      roleByArea:{
        artes:{pt:"Produção executiva, curadoria e identidade visual",en:"Executive production, curation and visual identity"},
        tech:{pt:"Creative Strategist & Web Developer · Next.js & Supabase",en:"Creative Strategist & Web Developer · Next.js & Supabase"}
      },
      desc:{pt:["O streaming gratuito de curtas do cinema independente brasileiro. Plataforma lançada e no ar, desenvolvida em Next.js com Supabase. Atuação integral em produção executiva, comunicação, identidade visual, social media, curadoria, gestão de conteúdo e desenvolvimento.","Nos últimos 30 dias: 513 visitantes, 1.334 page views, 65% do tráfego do Brasil. Implementação de verificação etária conforme ECA Digital (Decreto 12.880/2026)."],
            en:["The free streaming platform for Brazilian independent short films. Launched and live, built with Next.js and Supabase. Full involvement across executive production, communication, visual identity, social media, curation, content management and development.","Last 30 days: 513 visitors, 1,334 page views, 65% of traffic from Brazil. Age verification implementation in compliance with ECA Digital (Decree 12,880/2026)."]},
      facts:{pt:[["Stack","Next.js · Supabase"],["No ar","veracurtas.com.br"],["Desde","2025"],["Visitantes (30 dias)","513"],["Page views (30 dias)","1.334"],["Tráfego BR","65%"],["Dispositivos","54% desktop · 46% mobile"]],
             en:[["Stack","Next.js · Supabase"],["Live at","veracurtas.com.br"],["Since","2025"],["Visitors (30 days)","513"],["Page views (30 days)","1,334"],["BR traffic","65%"],["Devices","54% desktop · 46% mobile"]]},
      links:[{l:"veracurtas.com.br",u:"https://veracurtas.com.br"}]
    },
    {
      id:"arte-para-respirar", areas:["tech","artes"], year:"2024", img:null,
      title:"Arte Para Respirar",
      org:{pt:"Produtora Airo",en:"Produtora Airo"},
      role:{pt:"Desenvolvimento web e edição de vídeo",en:"Web development and video editing"},
      desc:{pt:["Plataforma em WordPress com uso de HTML, CSS e JavaScript, organização de conteúdos e edição audiovisual."],
            en:["WordPress platform using HTML, CSS and JavaScript, content organisation and audiovisual editing."]},
      facts:{pt:[["Stack","WordPress · HTML/CSS · JavaScript"],["Funções","Desenvolvimento e edição de vídeo"],["Ano","2024"]],
             en:[["Stack","WordPress · HTML/CSS · JavaScript"],["Roles","Development and video editing"],["Year","2024"]]},
      links:[{l:"artepararespirar.com.br",u:"https://artepararespirar.com.br/quem-somos/"}]
    },
    {
      id:"iest", areas:["tech"], year:"2022–2024", img:null,
      title:"Operação Kwai",
      org:{pt:"IEST Group",en:"IEST Group"},
      role:{pt:"Analista de Dados e Comunicação → Analista de Conteúdo e Dados",en:"Data and Communication Analyst → Content and Data Analyst"},
      desc:{pt:["Dois cargos sucessivos de um ano cada. No primeiro, suporte a influenciadores, demandas de CRM e e-commerce, organização de informações e comunicação com equipes multifuncionais.","No segundo, moderação e revisão de conteúdo, aplicação e atualização de diretrizes, análise e organização de dados e reuniões bilíngues."],
            en:["Two successive one-year roles. In the first, influencer support, CRM and e-commerce demands, information organisation and communication with cross-functional teams.","In the second, content moderation and review, enforcement and updating of guidelines, data analysis and organisation, and bilingual meetings."]},
      facts:{pt:[["Período","nov 2022 – dez 2024"],["Cargos","2 sucessivos · 1 ano cada"],["Idiomas","Reuniões bilíngues"]],
             en:[["Period","Nov 2022 – Dec 2024"],["Roles","2 successive · 1 year each"],["Languages","Bilingual meetings"]]},
      links:[]
    },
    {
      id:"teleperformance", areas:["tech"], year:"2020–2022", img:null,
      title:"Cliente bancário digital",
      org:{pt:"Teleperformance",en:"Teleperformance"},
      role:{pt:"Especialista em Mídias Sociais",en:"Social Media Specialist"},
      desc:{pt:["Atendimento e relacionamento para cliente bancário digital com RD Station CRM e Buzz Monitor: retenção, reativação, registro de demandas e comunicação multicanal."],
            en:["Support and relationship management for a digital banking client using RD Station CRM and Buzz Monitor: retention, reactivation, ticket logging and multichannel communication."]},
      facts:{pt:[["Período","jul 2020 – nov 2022"],["Ferramentas","RD Station CRM · Buzz Monitor"],["Foco","Retenção e reativação"]],
             en:[["Period","Jul 2020 – Nov 2022"],["Tools","RD Station CRM · Buzz Monitor"],["Focus","Retention and reactivation"]]},
      links:[]
    },
    {
      id:"zuca", areas:["tech"], year:"2025–2026", img:"assets/img/zuca-atelier.png",
      title:"Zuca Atelier",
      org:{pt:"Zuca Atelier",en:"Zuca Atelier"},
      role:{pt:"Gestor de Redes e Experiência do Cliente",en:"Social Media and Customer Experience Manager"},
      desc:{pt:["Coordenação de campanhas de tráfego e da criação de conteúdo para as redes sociais da marca, gestão da presença digital e da experiência do cliente.","Estúdio de design e fabricação de móveis em madeira maciça, com encaixes tradicionais, pesquisa sobre a diversidade brasileira e design simples focado nas pessoas."],
            en:["Coordination of paid traffic campaigns and content creation for the brand's social channels, managing digital presence and customer experience.","Design studio and solid-wood furniture manufacturing, with traditional joinery, research on Brazilian diversity and simple, people-focused design."]},
      facts:{pt:[["Período","jan 2025 – out 2026"],["Frentes","Tráfego, conteúdo, experiência"],["Usuários ativos (jan–nov 2026)","11 mil"],["Sessões","4,9 mil"],["Principal canal","Organic Social — 4,7 mil"],["Eventos view_item","284"],["Engajamento médio","38 s"]],
             en:[["Period","Jan 2025 – Oct 2026"],["Strands","Traffic, content, experience"],["Active users (Jan–Nov 2026)","11,000"],["Sessions","4,900"],["Top channel","Organic Social — 4,700"],["view_item events","284"],["Avg. engagement","38 s"]]},
      links:[
        {l:"Site oficial",u:"https://www.zucabr.com/"},
        {l:"Instagram",u:"https://www.instagram.com/zuca.atelier/"}
      ]
    },
    {
      id:"ic", areas:["artes"], year:"2026–2027", img:null,
      title:"A Recusa da Imagem",
      org:{pt:"PUC-SP / FAFICLA · PIBIC-CEPE",en:"PUC-SP / FAFICLA · PIBIC-CEPE"},
      role:{pt:"Pesquisador bolsista",en:"Research fellow"},
      desc:{pt:["A Recusa da Imagem: Estratégias de desaparecimento na performance contemporânea. Pesquisa com bolsa PIBIC-CEPE, sob orientação da Profa. Dra. Helena Tania Katz. Artigo previsto como resultado."],
            en:["A Recusa da Imagem: strategies of disappearance in contemporary performance. Funded PIBIC-CEPE research supervised by Prof. Helena Tania Katz, PhD. Article expected as an outcome."]},
      facts:{pt:[["Orientação","Profa. Dra. Helena Tania Katz"],["Bolsa","PIBIC-CEPE"],["Período","set 2026 – ago 2027"]],
             en:[["Supervisor","Prof. Helena Tania Katz, PhD"],["Grant","PIBIC-CEPE"],["Period","Sep 2026 – Aug 2027"]]},
      links:[]
    }
  ]
};