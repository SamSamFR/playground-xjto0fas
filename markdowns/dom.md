# Document Object Model

Le cours de Jean-Marc Lecarpentier et Alexandre Niveau disponible à l'[`Université de Caen`](https://ensweb.users.info.unicaen.fr/pres/jml/dom/index.php) présente très bien les concepts du DOM qui vont nous intéresser ici.
Ce support est largement inspiré du contenu de ce cous.

Pour manipuler le DOM, nous écrirons des programmes en JavaScript qui seront exécutés par le navigateur
- Leur but : modifier la page HTML/CSS en fonction des actions de l'internaute
- Il faut donc avoir un modèle de la page et de sa structure, ainsi que des fonctions permettant de manipuler ce modèle : une API (Application Programming Interface)

Cette API nous permettra de :
- Disposer en mémoire vive d'une représentation en arbre d'un document
- Définir comment modifier cet arbre de façon unifiée pour tous les navigateurs
- Page web vue = Représentation graphique de l'arbre
- Changement de l'arbre => changement de la vue - Réagir aux actions de l'utilisateur (clic, déplacement de la souris, actions au clavier, ...)
- Modifier le contenu de la page web de manière interactive
- D'effectuer toutes les modifications en local (pas d'échanges avec un serveur)

## Modification du DOM

Le langage JavaScript implémente l'API DOM et nous offre donc la possibilité de transformer l'arbre
- Toute modification de l'arbre DOM est immédiatement répercutée dans la représentation graphique
- Attention : l'arbre DOM est modifié dans la mémoire du navigateur, mais « afficher le code source » montre toujours le code de départ !
- Pour voir le code HTML correspondant à l'état réel du DOM à tout instant, utiliser l'inspecteur de Firefox ou Chrome
- Les objets du DOM sont implémentés par des objets en JavaScript
- On peut accéder aux propriétés des divers objets (document, nœud, élément, etc)
- Des fonctions ou méthodes permettent d'agir sur ces objets

## Les types de noeuds

- Nœuds de type élément : représente un élément HTML
    - Possibilité de changer les nœuds éléments, par ex. changer ses attributs
- Nœuds de type texte : représente du texte
    - Possibilité de changer le texte seulement
- Cas particuliers :
    - Nœud de texte est forcément une feuille de l'arbre
    - Nœud de type élément a des fils de type élément et/ou texte
    - Nœud de type élément est une feuille de l'arbre si c'est un élément vide

## Les principaux objets du DOM

Voir la référence sur [`MDN`](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

- Window : la fenêtre contenant le document
- Document : le document (élément racine) duquel on a construit le DOM
- Node : les nœuds, qui peuvent être de différents types :
    - Element : nœuds éléments HTML
    - CharacterData : nœuds de texte

## L'objet document

L'object document modélise le document manipulé :

- pour accéder à l'élément racine du document : `document.documentElement`
- L'élément <body> du document : `document.body`
- Obtenir un élément par son identifiant : `document.getElementById('myId')`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <p id='demo'>démo</p>
    <script>
    document.getElementById('demo').innerHTML = 'Simple demo of DOM manipulation';
    </script>
  </body>
</html>
```

## Objets de de type Node
Modélise tous les types de nœuds, que ce soit des élements ou non

Principales fonctionnalités des objets Node, voir le site [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Node) pour une liste plus complète :

- Liste des fils : `n.childNodes`
- Nombre de fils : `n.childNodes.length`
- Premier fils : `n.firstChild`
- Dernier fils : `n.lastChild`
- Nœud parent : `n.parentNode`
- Frère suivant : `n.nextSibling`
- Frère précédent : `n.previousSibling`

**Attention** aux nœuds de texte vides !

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Objets DOM</title>
</head>
<body>

<h1>Titre de la page</h1>

<ul>
    <li>Un item</li>
    <li>Un <a href="https://moodle.didex.fr/">lien</a> dans le texte</li>
    <li id="test"><em>Emphase</em> dans le texte <span>et un span</span></li>
</ul>

<script>
    // Objet Node
    console.log(document.body.childNodes);
    console.log(document.body.firstChild);
    console.log(document.body.lastChild);

    // attraper un élément par son id
    let liElement = document.getElementById('test');
    console.log(liElement);
    console.log(liElement.firstChild);
    console.log(liElement.lastChild);
    console.log(liElement.previousSibling);
    console.log(liElement.nextSibling);
</script>
</body>
</html>
```