
# Les types en Javascript

Nous distinguerons les 5 types suivants en JS :

- booléen : true, false
- numérique :
  - entier : `-10`, `12`, `42`, ...
  - flottant : `3.14`, `42.0`, `-12.5`, ...
- chaîne de caractères : `"Hello world!"`, `'Bonjour le monde!'`
- tableau : `['42', 42, 3.14, ...]`
- objet : `{module: 'M2206', nom: 'Intégration web', semestre: 2, UE: 2, coefficient: 2}`

# Les constantes et les variables

Pour manipuler des informations, nous pourrons utiliser deux types d'éléments :

- des constantes : définies par le mot clé `const`
- des variables : définies par le mot clé `let`

L'exemple ci-dessous illustre quelques utilisations des constants, variables et types vus précédemment.

```javascript runnable
const PI = 3.14;
let radius = 5;

let perimeter = 2 * PI * radius;

console.log("Le périmètre du cercle de rayon " + radius + " est égal à : " + perimeter);
```
