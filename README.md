# Impaccto - Instituto Mineiro de Psicologia

Site institucional da Clínica Impaccto – Instituto Mineiro de Psicologia, localizada em Uberlândia. Desenvolvido com React + Vite, responsivo e com identidade visual em azul e amarelo.

## Tecnologias

- **React 19** - Biblioteca para interfaces
- **Vite 6** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Estilização utilitária
- **JavaScript** - Linguagem principal

## Como instalar

1. Clone o repositório ou acesse a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## Como rodar localmente

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

Para gerar a build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

Para visualizar a build localmente:

```bash
npm run preview
```

## Como rodar com Docker

### Build da imagem

```bash
docker build -t impaccto-site .
```

### Executar o container

```bash
docker run -p 8080:80 impaccto-site
```

O site estará disponível em `http://localhost:8080`

## Como alterar dados pelo siteData.js

Todos os textos e informações exibidas no site estão centralizados no arquivo `src/data/siteData.js`. Edite este arquivo para alterar:

- **nome** - Nome da clínica
- **nomeCompleto** - Nome completo exibido no rodapé
- **cidade** - Cidade de atuação
- **telefone** - Número formatado para exibição
- **telefoneFormatado** - Número sem formatação para links WhatsApp (ex: 5534997622080)
- **redesSociais** - URLs do Instagram e Facebook
- **hero** - Título, subtítulo, frase de impacto e texto do botão
- **sobre** - Título e texto institucional
- **servicos** - Lista de serviços com título e descrição
- **diferenciais** - Lista de diferenciais com título e descrição
- **contato** - Título, subtítulo e CTA

Após alterar o arquivo, o servidor de desenvolvimento recarrega automaticamente. Em produção, execute `npm run build` novamente.

## Estrutura do projeto

```
src/
├── components/      # Componentes React
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Differentials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
├── data/
│   └── siteData.js  # Dados editáveis do site
├── App.jsx
├── main.jsx
└── index.css
```

## Logo

Para substituir a logo, coloque o arquivo `logo.svg` na pasta `public/`. O site usa esse arquivo automaticamente na header e no hero.
