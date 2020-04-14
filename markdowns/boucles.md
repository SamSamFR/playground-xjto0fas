# Les boucles

Comme dans la plupart des langages, nous distinguerons deux types de boucles en JavaScript :

- les boucles pour lesquelles le nombre d'itérations est connue lors de l'écriture du code : boucle `for`

  ```javascript runnable
  const n = 10;

  for (let i = 0; i < n; i++) {
    console.log('index=', i);
  }
  ```

- les boucles pour lesquelles le nombre d'itérations dépend d'éléments extérieurs : boucle `while`

  ```javascript runnable
  const n = 10;
  let i = 0;

  while (i < n) {
    console.log('index=', i);
    i++;
  }
  ```

Considérons un premier exemple simple consistant à calculer la somme des entiers depuis 0 jusqu'à un entier donné.
Comme nous l'avons vu au premier semestre, cette somme peut-être obtenue directement par la formule `n(n+1)/2` où `n` représente l'entier fourni en paramètre pour calculer la somme.

Le programme suivant calcule itérativement la somme des entiers depuis 0 jusqu'à `i`, pour `i` variant de 0 à `n`.

```javascript runnable
function sumToN(n) {
  return (n * (n + 1)) / 2;
}

const n = 10;

for (let i = 0; i < n; i++) {
  console.log('sumToN(' + i + ')=' + sumToN(i));
}
```

Considérons maintenant le jeu du "Bandit manchot" (One-Arm Bandit en Anglais).
Le programme suivant simule un tel jeu jusqu'à épuisement de l'argent disponible, avec une probabilité de gagner inférieure à 5%, pour des gains variants entre 1 et 10 euros.

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
    'You start with ' + initialAmount + ' euros\n' +
    'You win ' + amountWin + ' euros\n' +
    'You spent ' + amountMonneyPlayed + ' euros\n'
  );
}
console.log(playOneArmBandit(100));
```
