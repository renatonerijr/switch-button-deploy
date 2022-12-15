# Scroll para cima e para baixo

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

## ✒️ Suporte

- **Wesley Souza** - _Full Stack Dev_ - [iwsouza](https://github.com/iwsouza)
