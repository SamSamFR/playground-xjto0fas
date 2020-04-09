# Bienvenu sur ce cours de découverte de Javascript

JavaScript (JS) est un langage de programmation de scripts principalement employé dans les pages web interactives [Wikipedia](https://fr.wikipedia.org/wiki/JavaScript).

Nous allons voir comment créer de simples programmes JS permettant de réagir aux actions de l'utilisateur.

# Premier programme

La première chose a faire est de créer un fichier HTML avec votre éditeur préféré, par exemple Visual Studio Code, et de créer une page web minimaliste.
Puis d'ajouter la ligne si dessous entre les balises <script> et </script>.
Il ne reste plus qu'à ouvrir ce fichier sur votre navigateur préféré (Firefox, Chrome, Chromium, Brave, ...). Nous éviterons de travailler avec IE pendant ce cours.

```javascript runnable
console.log("Hello world!"); // affiche "Hello world!" dans la console du navigateur Web
```

Vous obtiendrez une page web vierge de tout contenu.
Par contre, si vous ouvrez la console du navigateur, vous obtiendrez alors le message "Hello worl!"

Pour ouvrir la console du navigateur, voici les principaux raccourcis :

- Firefox : Ctrl+Maj+K
- Chrome, Chromium, Brave : Ctrl+Maj+I

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
      console.log("Hello world!");
    </script>
  </body>
</html>
```

# Les types en Javascript

Nous distinguerons les 5 types suivants en JS :

- booléen : true, false
- numérique :
  - entier :-10, 12, 42, ...
  - flottant : 3.14, 42.0, -12.5, ...
- chaîne de caractères : "Hello world!", 'Bonjour le monde!'
- tableau : ['42', 42, 3.14, ...]
- objet : {module: 'M2206', nom: 'Intégration web', semestre: 2, UE: 2, coefficient: 2}

# Les constantes et les variables

Pour manipuler des informations, nous pourrons utiliser deux types d'éléments :

- des constantes : définies par le mot clé _const_
- des variables : définies par le mot clé _let_

L'exemple ci-dessous illustre quelques utilisations des constants, variables et types vus précédemment.

```javascript runnable
const PI = 3.14;
let radius = 5;

let perimeter = 2 * PI * radius;

console.log("Le périmètre du cercle de rayon " + radius + " est égal à : " + perimeter);
```

# Les fonctions

JavaScript offre, comme tous les langages, la possibilité de définir ses propres fonctions.

```javascript runnable
function add(a, b) {
  return a + b;
}

const result = add(1973, 1993);
console.log(result);
```

# Les tests

Nous avons souvent besoin de conditionner l'exécution du code en fonction du résultats de tests.

```javascript runnable
function categoryAthletism(age) {
  const category = "";

  if (age <= 6) { category = "Baby Athlé"; }
  else if (age <= 9) { category = "Ecole d'athlétisme"; }
  else if (age <= 11) { category = "Poussin"; }
  else if (age <= 13) { category = "Benjamin"; }
  else if (age <= 15) { category = "Minime "; }
  else if (age <= 17) { category = "Cadet"; }
  else if (age <= 19) { category = "Junior"; }
  else if (age <= 22) { category = "Espoir"; }
  else { category = "Autre"; }

  return category;
}

console.log(categoryAthletism(15));
```

# Les opérateurs

Dans les exemples précédents, nous avons vu différents opérateurs permettant de manipuler les variables :

- opérations élémentaires : +, -, \*, /
- affectation : =
- combinaison d'opérateurs : += -= \*= /=
- incrément d'une unité (uniquement sur les entiers) : ++
- décrément d'une unité (uniquement sur les entiers) : --
- tests de comparaison de valeurs
  - égalité : ==
  - différence : !=
  - inférieur : <
  - supérieur : >
  - inférieur ou égal : <=
  - supérieur ou égal : >=
- chaîne de caractères

  - concaténation : +

# Les boucles

Comme dans la plupart des langages, nous distinguerons deux types de boucles en JavaScript :

- les boucles pour lesquelles le nombre d'itérations est connue lors de l'écriture du code : boucle _for_
- les boucles pour lesquelles le nombre d'itérations dépend d'éléments extérieurs : boucle _while_

```javascript runnable
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playOneArmBandit(monney) {
  const initialAmount = monney;
  let amountMonneyPlayed = 0;
  let amountWin = 0;

  while (monney > 0) {
    monney--;
    amountMonneyPlayed++;
    if (Math.random() > 0.95) {
      let gain = 1 + getRandomInt(10);
      amountWin += gain;
      monney += gain;
    }
  }

  return (
    "You start with " + initialAmount + " euros\n" +
    "You win " + amountWin + " euros\n" +
    "You spent " + amountMonneyPlayed + " euros\n"
  );
}
console.log(playOneArmBandit(100));
```

# Run Javascript (another test)

```javascript runnable
let add = function (harry, larry) {
  return harry + larry;
};

const result = add(1973, 1993);
console.log(result); //prints 3966
```

# Hands-on Demo

@[Luke, how many stars are there in these galaxies?]({ "stubs": ["universe.js"], "command": "node_modules/mocha/bin/mocha universe.spec.js --reporter list" })

Check out the markdown file [`welcome.md`](https://github.com/TechDotIO/nodejs-template/blob/master/markdowns/welcome.md) to see how this exercise is injected into the template.

# Template Resources

[`markdowns/welcome.md`](https://github.com/TechDotIO/nodejs-template/blob/master/markdowns/welcome.md)
What you are reading here is generated by this file. Tech.io uses the [Markdown syntax](https://tech.io/doc/reference-markdowns) to render text, media and to inject programming exercises.

[`nodejs-project`](https://github.com/TechDotIO/nodejs-template/tree/master/nodejs-project)
A simple Nodejs project dedicated to run the programming exercise above. A project relies on a Docker image to run. You can find images on the [Docker Hub](https://hub.docker.com/explore/) or you can even [build your own](https://tech.io/doc/reference-runner).

[`techio.yml`](https://github.com/TechDotIO/nodejs-template/blob/master/techio.yml)
This _mandatory_ file describes both the table of content and the programming project(s). The file path should not be changed.

# Visual and Interactive Content

Tech.io provides all the tools to embed visual and interactive content like a Web app or a Unix terminal within your contribution. Please refer to the [documentation](https://tech.io/doc) to learn more about the viewer integrations.
