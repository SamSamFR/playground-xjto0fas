# Les tests

Nous avons souvent besoin de conditionner l'exécution du code en fonction du résultats de tests.

```js
if (condition) {
  // la condition est vrai
} else {
  // la condition est fausse
}
```

Il est aussi possible de chainer plusieurs conditions

```js
if (condition1) {
  // condition1 est vrai
  // condition2 peut être vrai ou fausse
} else if (condition2) {
  // condition1 est fausse et condition2 est vrai
} else {
  // toutes les conditions sont fausses
}
```


```javascript runnable
function categoryAthletism(age) {
  let category = '';

  if (age <= 6) { category = 'Baby Athlé'; }
  else if (age <= 9) { category = 'Ecole d\'athlétisme'; }
  else if (age <= 11) { category = 'Poussin'; }
  else if (age <= 13) { category = 'Benjamin'; }
  else if (age <= 15) { category = 'Minime '; }
  else if (age <= 17) { category = 'Cadet'; }
  else if (age <= 19) { category = 'Junior'; }
  else if (age <= 22) { category = 'Espoir'; }
  else { category = 'Autre'; }

  return category;
}

console.log(categoryAthletism(15));
```
