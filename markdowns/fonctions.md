# Les fonctions

JavaScript offre, comme tous les langages, la possibilité de définir ses propres fonctions.

Les fonctions peuvent renvoyer une valeur grâce au mot clé `return`, mais ce n'est pas obligatoire.

```javascript runnable
// fonction sans return
function printHelloWorld() {
  console.log('Hello World');
}

printHelloWorld();

// fonction qui retourne Hello World
function getHelloWorld() {
  return 'Hello World';
}

const helloWorld = getHelloWorld();
console.log(helloWorld);
```

Elles peuvent être définis de plusieurs manières:

- En tant que fonction nommée (comme au dessus):

  ```javascript runnable
  function add(a, b) {
    return a + b;
  }

  console.log(add(12, 56));
  ```

- En tant qu'_expression de fonction_[<sup>ref</sup>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function) :

  ```javascript runnable
  const sub = function (a, b) {
    return a - b;
  };

  let mult = function (a, b) {
    return a * b;
  };

  const factorielle = function fac(n) {
    if (n < 2) {
      return 1;
    } else {
      return n * fac(n - 1);
    }
  };

  console.log(sub(15, 26));
  console.log(mult(15, 53));
  console.log(factorielle(3));
  ```

> **Attention**
>
> Bien que les notations soient similiaires, il existe tout de même des différences.
>
> La plus importante étant la portée de la fonction:
>
> ```javascript runnable
> // fonctionne peu importe où la fonction est appellée.
> console.log(hello('World'));
>
> function hello(name) {
>   return 'Hello ' + name;
> }
>
> console.log(hello('People'));
> ```
>
> ```javascript runnable
> // retournera une erreur, hello à été appelé avant d'être défini.
> console.log(hello('World')); // supprimez cette ligne pour que ça fonctionne
>
> const hello = function (name) {
>   return 'Hello ' + name;
> };
>
> // fonctionnera puisque hello à été défini plus tôt.
> console.log(hello('World'));
> ```


*En savoir plus* :

- [Fonctions - MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)
- [Fonctions et portée des fonctions - MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions)
- [L'opérateur function - MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function)
