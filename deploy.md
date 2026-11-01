# Deploy — Netlify

## Opção 1: Drag & Drop (30 segundos)
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `portfolio-claudi` inteira
3. Pronto. Site no ar.

## Opção 2: Git (recomendado para atualizações)
1. Crie um repositório no GitHub com estes arquivos
2. No Netlify: Add new site → Import an existing project
3. Build command: **deixe vazio**
4. Publish directory: `.`
5. Deploy automático a cada push

## Links por frente (chave seletora na URL)
- Artes PT: `seusite.netlify.app/?area=artes&lang=pt`
- Artes EN: `seusite.netlify.app/?area=artes&lang=en`
- Tech PT:  `seusite.netlify.app/?area=tech&lang=pt`
- Tech EN:  `seusite.netlify.app/?area=tech&lang=en`

## Imagens
Crie a pasta `assets/img/` e adicione imagens nomeadas:
`reality-show.jpg`, `fossil.jpg`, `vera.jpg`, etc.
Depois atualize o campo `img` no `data.js` de cada projeto.

## Atualizar dados
Edite `data.js` → push → Netlify faz redeploy automático.