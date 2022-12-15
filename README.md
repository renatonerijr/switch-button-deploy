# Scroll para cima e para baixo

<div align="center">
<img src="https://i.imgur.com/RAtqnDo.gif" alt="Preview do projeto" width="100%"/>
</div>

```
Com TypeScript o/
```

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
