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
// react
import { useState } from "react";
import { Modal } from "opcmodal";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div onClick={openModal}>{isOpen && <Modal closeModal={closeModal} />}</div>
  );
};
```

### Type par défaut

```js
Modal.propTypes = {
  isOpen: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};
```
