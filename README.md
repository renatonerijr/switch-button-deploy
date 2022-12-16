# Switch Button - Toggle

<div align="center">
<img src="https://i.imgur.com/2Vz7bni.gif" alt="Preview do projeto" width="40%"/>
</div>

```
Com TypeScript o/
```

### <p align="center"> 🧪 Veja a <a href="https://switch-button-phi.vercel.app/" target="_blank">demonstração aqui</a></p>

## 🚀 Começando

- É só dar um fork no repo e usar ♡

### 📋 Pré-requisitos

- Instalar styled-components

```
yarn add styled-components
```

### 🔧 Como implementar

Parâmetros

```ts
  // Não obrigatório
  disabled?: boolean; // default false
  variant: 'vertical' | 'horizontal'; // default horizontal
  isActive: boolean; // default false
  onClick?: () => void;
```

```jsx
<SwitchButton
  variant="vertical"
  isActive={valueState}
  disabled
  onClick={() => stateHook((old) => !old)}
/>
```

### 🔧 Alterar cores

- Acessar arquivo styles.ts
  - linha 17 e 18 é responsável pela cor do fundo do botão inativo
  - linha 43 e 44 é responsável pela cor do círculo inativo
  - linha 56 e 57 é responsável pela cor do círculo ativo
  - linha 59 e 60 é responsável pela cor do fundo do botão ativo

## ✒️ Suporte

- **Wesley Souza** - _Full Stack Dev_ - [iwsouza](https://github.com/iwsouza)
