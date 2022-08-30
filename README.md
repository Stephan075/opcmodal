# Opcmodal

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Plugin modal pour le projet 14 :

Un modal react simple

1. [Installation](#Installation)
2. [Exemples d'utilisation](#Example)

## Installation

Vous pouvez installer Opcmodal avec npm :
`npm i Opcmodal`

Pour importer le modal :
`import { Modal } from "opcmodal";`

<div id='Example'>

## Exemples d'utilisation

```js
<Modal closeModal={closeModal} />
```

### Type par défaut

```js
Modal.propTypes = {
  currentData: PropTypes.object,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
```
