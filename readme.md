# librairi_modale

Un composant de modal simple pour React, facile à intégrer dans vos projets. Ce composant de modal prend en charge l'affichage d'un titre, du contenu, et d'un bouton de fermeture.

## Fonctionnalités

- Simple à intégrer dans n'importe quelle application React
- Titre et contenu personnalisables
- Bouton de fermeture cliquable
- Fond avec styles personnalisables

## Installation

Pour installer le composant dans votre projet, utilisez npm ou yarn :

```bash
npm install librairi_modale
# ou
yarn add librairi_modale
```
## Utilisation
```javascript
 import React, { useState } from 'react';
 import Modal from 'librairi_modale';

 function exemple() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleCloseConfirmation = () => setShowConfirmation(false);
    return (
        <Modal isOpen={showConfirmation} onClose={handleCloseConfirmation} title="Employee Created">
        <p>contenu</p>
    </Modal>
    );
}

export default exemple;
```
## Paramètres

- isOpen: boolean.
- onClose: callback.
- title : string : titre de la modale (optionnel).
- children : node : contenu de la modale.
