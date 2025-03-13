
# SecurityPass - Simulador de Autômato para Validação de Senhas 🔒

Um simulador interativo de autômato finito que demonstra visualmente o processo de validação de senhas caractere por caractere.

## Funcionalidades Principais ✨
- **Dois campos de entrada**:
  - Defina a senha padrão 
  - Tente acertar a senha caractere por caractere
- **Diagrama de estados interativo**:
  - Círculos representando estados
  - Setas animadas com caracteres
  - Feedback visual imediato
- **Validação em tempo real**:
  - Cores dinâmicas (verde/acerto, vermelho/erro)
  - Estado final com círculo duplo pulsante
- **Totalmente responsivo**

## Como Executar 🚀

### Pré-requisitos
- Node.js (v16+)
- npm (v8+)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/SecurityPass.git

# Acesse a pasta
cd SecurityPass

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

## Como Usar 🖱️
1. Defina uma senha no campo **"Senha Correta"**
2. Digite caracteres no campo **"Tentativa"**
3. Observe o autômato:
   - Estados ativos ficam azuis
   - Transições válidas ficam verdes
   - Erros ficam vermelhos
   - Estado final válido pulsa em verde

## Tecnologias Utilizadas 💻
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![React Spring](https://img.shields.io/badge/React%20Spring-00C7B7?style=for-the-badge)
- CSS Modules
- JavaScript ES6+

## Estrutura do Projeto 📁
```
src/
├── components/          # Componentes reutilizáveis
├── features/            # Lógica do autômato
│   └── automaton/
│       ├── components/  # Componentes do diagrama
│       ├── hooks/       # Lógica customizada
│       └── utils/       # Funções auxiliares
├── styles/              # Estilos globais
└── App.jsx              # Componente principal
```