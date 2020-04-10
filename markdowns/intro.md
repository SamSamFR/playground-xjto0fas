# Bienvenue sur ce cours de découverte de Javascript

JavaScript (JS) est un langage de programmation de scripts principalement employé dans les pages web interactives [Wikipedia](https://fr.wikipedia.org/wiki/JavaScript).

Nous allons voir comment créer de simples programmes JS permettant de réagir aux actions de l'utilisateur.

# Premier programme

La première chose a faire est de créer un fichier HTML avec votre éditeur préféré, par exemple Visual Studio Code, et de créer une page web minimaliste.
Puis d'ajouter la ligne si dessous entre les balises `<script>` et `</script>`.
Il ne reste plus qu'à ouvrir ce fichier sur votre navigateur préféré (Firefox, Chrome, Chromium, Brave, ...). Nous éviterons de travailler avec IE pendant ce cours.

```javascript runnable
console.log('Hello world!'); // affiche "Hello world!" dans la console du navigateur Web
```

Vous obtiendrez une page web vierge de tout contenu.
Par contre, si vous ouvrez la console du navigateur, vous obtiendrez alors le message `Hello world!`

Pour ouvrir la console du navigateur, voici les principaux raccourcis :

- Firefox : <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>K</kbd>
- Chrome, Chromium, Brave : <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>I</kbd>

Le fichier HTML peut ressembler à ceci :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log('Hello world!');
    </script>
  </body>
</html>
```
