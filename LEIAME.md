# DDS Diário

Site/app (PWA) com um **DDS pronto para cada dia**: texto para leitura, caso para reflexão, perguntas para a turma, impressão com lista de presença e histórico. Funciona no celular e no computador e, depois de aberto uma vez, também sem internet.

Não tem servidor nem login. Os dados (histórico, favoritos, seus DDS) ficam salvos no próprio aparelho. Para levá-los para outro aparelho, use **Ajustes → Baixar backup**.

## Testar no computador

```bash
node servidor.js
```

Depois abra http://localhost:5180

## Publicar na internet (grátis)

O app é composto só de arquivos estáticos. Qualquer uma destas opções funciona:

- **Netlify Drop**: arraste a pasta `DDS-Diario` em https://app.netlify.com/drop
- **GitHub Pages**: suba a pasta para um repositório e ative o Pages
- **Vercel / Cloudflare Pages**: importe a pasta como site estático

Com o link publicado, abra no celular e use "Adicionar à tela inicial" para instalar.

## Adicionar ou editar DDS da biblioteca

Os 150 temas prontos ficam em `data/dds-1.js` a `data/dds-7.js`. Para criar um novo, copie um bloco existente e troque o `id` por um nome único. Se criar um arquivo novo, inclua-o no `index.html` e na lista `ARQUIVOS` do `sw.js`. Depois de publicar uma nova versão, aumente o número `VERSAO` em `sw.js` para os celulares baixarem a atualização.

As campanhas do mês (Abril Verde, Maio Amarelo, Novembro Azul...) ficam em `data/calendario.js`. As `tags` de cada campanha dão prioridade aos DDS com as mesmas tags.

> Conteúdo de apoio. Adapte à realidade da obra e valide com o profissional de SST responsável.
