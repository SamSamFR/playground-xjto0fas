# Structures de données : tableaux et objets

Tous les calculs que nous avons effectués jusqu'à présents n'ont pas été sauvegardés.
Or, nous pourrions souhaiter le faire.
Nous disposons pour cela de deux structures de données :

- les tableaux : ils permettent de stocker de manière contigue des informations de différents types, accessibles par leur position dans le tableau (de `0` à `n-1` où `n` correspond au nombre d'éléments stockés dans le tableau)
- les objets : comme les tableaux, nous pouvons stocker des informations de différents types, mais nous pouvons les indexer par des clés, ce qui peut rendre leur manipulation plus aisée

Reprenons l'exemple du bandit manchot et conservons la liste des gains réalisés par le joueur.

```javascript runnable
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playOneArmBandit(monney) {
  const initialAmount = monney;
  let amountMonneyPlayed = 0;
  let amountWin = 0;
  let gains = [];

  while (monney > 0) {
    monney--;
    amountMonneyPlayed++;
    if (Math.random() > 0.95) {
      let gain = 1 + getRandomInt(10);
      amountWin += gain;
      monney += gain;
      gains.push(gain);
    }
  }

  console.log('gains: ' + gains);
  return (
    'You start with ' + initialAmount + ' euros\n' +
    'You win ' + amountWin + ' euros\n' +
    'You spent ' + amountMonneyPlayed +' euros\n'
  );
}
console.log(playOneArmBandit(100));
```

Comme nous venons de le voir, la déclaration d'un tableau vide se fait simplement en affectant `[]` à une variable.
L'ajout d'un élément au tableau est réalisé grâce à la fonction `push`

Pour illustrer le principe des objets, nous allons reprendre cet exemple et renvoyer un objet contenant toutes les informations que nous avions simplement affiché.

```javascript runnable
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playOneArmBandit(monney) {
  let amountMonneyPlayed = 0;
  let amountWin = 0;
  let gains = [];
  let all_informations = {};

  all_informations.initialAmount = monney;
  while (monney > 0) {
    monney--;
    amountMonneyPlayed++;
    if (Math.random() > 0.95) {
      let gain = 1 + getRandomInt(10);
      amountWin += gain;
      monney += gain;
      gains.push(gain);
    }
  }

  all_informations.gains = gains;
  all_informations.amountWin = amountWin;
  all_informations.amountMonneyPlayed = amountMonneyPlayed;

  return all_informations;
}
console.log(playOneArmBandit(100));
```
