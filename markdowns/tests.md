# Les tests

Nous avons souvent besoin de conditionner l'exécution du code en fonction du résultats de tests.

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
