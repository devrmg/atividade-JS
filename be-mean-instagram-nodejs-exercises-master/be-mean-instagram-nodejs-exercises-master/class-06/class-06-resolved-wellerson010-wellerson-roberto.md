# NodeJS - Aula 06 - Exercício
**user**: [wellerson010](https://github.com/wellerson010)

**autor**: Wellerson Roberto

**date**: 17/03/2016 21:28:08

# 1) Crie um Schema com cada tipo especificado, inserindo tanto um objeto correto, como um objeto que desencadeie erros na validação padrão, criar especificamente:

- para String: **enum**, **match**, **maxlength**, **minlength**

- para Number: **max** e **min**

Objeto correto:
```
'use strict';

const dbUri = 'mongodb://127.0.0.1/pokemon';
const mongoose = require('mongoose');
mongoose.connect(dbUri);

var Schema = mongoose.Schema;
var pokemonSchema = new Schema({
    name: { type: String, maxlength: 10, minlength: 4, enum: ['Pikachu', 'Beedril', 'Beedril2'], match: /^[a-z]+$/i },
    attack: {type: Number, max: 100, min: 0},
    created: {type: Date, default: Date.now},
    isDead: Boolean,
    moves: [String],
    children: Schema.Types.Mixed,
    id: Schema.Types.ObjectId
});

var model = mongoose.model('pokemon', pokemonSchema);

var pokeModel = new model({
    name: 'Pikachu',
    attack: 50
});

pokeModel.save(pokeModel, function (err, data) {
    if (err) console.log(err);
    console.log(data);
});
```

Agora os erros de validação...

**erro de max e maxlength**
```
{ [ValidationError: Pokemon validation failed]
  message: 'Pokemon validation failed',
  name: 'ValidationError',
  errors:
   { attack:
      { [ValidatorError: Path `attack` (101) is more than maximum allowed value (100).]
        properties: [Object],
        message: 'Path `attack` (101) is more than maximum allowed value (100).',
        name: 'ValidatorError',
        kind: 'max',
        path: 'attack',
        value: 101 },
     name:
      { [ValidatorError: Path `name` (`Pikachuzzzzzzz`) is longer than the maximum allowed length (10).]
        properties: [Object],
        message: 'Path `name` (`Pikachuzzzzzzz`) is longer than the maximum allowed length (10).',
        name: 'ValidatorError',
        kind: 'maxlength',
        path: 'name',
        value: 'Pikachuzzzzzzz' } } }
undefined
```

**erro de min e minlength**
```
{ [ValidationError: Pokemon validation failed]
  message: 'Pokemon validation failed',
  name: 'ValidationError',
  errors:
   { attack:
      { [ValidatorError: Path `attack` (-20) is less than minimum allowed value (0).]
        properties: [Object],
        message: 'Path `attack` (-20) is less than minimum allowed value (0).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'attack',
        value: -20 },
     name:
      { [ValidatorError: Path `name` (`c`) is shorter than the minimum allowed length (4).]
        properties: [Object],
        message: 'Path `name` (`c`) is shorter than the minimum allowed length (4).',
        name: 'ValidatorError',
        kind: 'minlength',
        path: 'name',
        value: 'c' } } }
undefined
```

**erro de enum**
```
{ [ValidationError: Pokemon validation failed]
  message: 'Pokemon validation failed',
  name: 'ValidationError',
  errors:
   { attack:
      { [ValidatorError: Path `attack` (-20) is less than minimum allowed value (0).]
        properties: [Object],
        message: 'Path `attack` (-20) is less than minimum allowed value (0).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'attack',
        value: -20 },
     name:
      { [ValidatorError: `csdsss` is not a valid enum value for path `name`.]
        properties: [Object],
        message: '`csdsss` is not a valid enum value for path `name`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'name',
        value: 'csdsss' } } }
undefined
```

**erro de match**

```
{ [ValidationError: pokemon validation failed]
  message: 'pokemon validation failed',
  name: 'ValidationError',
  errors:
   { name:
      { [ValidatorError: Path `name` is invalid (Beedril2).]
        properties: [Object],
        message: 'Path `name` is invalid (Beedril2).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'name',
        value: 'Beedril2' } } }
undefined
```



# 2) Cadastre 3 Pokemons de uma só vez:

```
var Schema = mongoose.Schema;
var pokemonSchema = new Schema({
    name: String,
    attack: Number,
    created: {type: Date, default: Date.now},
    isDead: Boolean,
    moves: [String],
    children: Schema.Types.Mixed,
    id: Schema.Types.ObjectId
});

var model = mongoose.model('pokemon', pokemonSchema);

var pokeOne = new model({
    name: 'Master Fuck',
    attack: 101
});

var pokeTwo = new model({
    name: 'Pikamole',
    attack: 19
});

var pokeFour = new model({
    name: 'BigAss',
    attack: 69
});

var pokemons = [pokeOne, pokeTwo, pokeFour];

model.create(pokemons, function (err, data) {
    if (err) console.log(err);
    console.log(data);
});
```

# 3) Busque todos os pokemons com attack > 50 e height > 0.5

```
var model = mongoose.model('pokemon', pokemonSchema);
var query = { attack: { $gt: 50 }, height: {$gt: 50}}
model.find(query, function (err, data) {
    if (err) console.log(err);
    console.log(data);
})
```

# 4) Altere, inserindo, o Pokemon Nerdmon com attack = 49 e com os valores de outro campo de sua escolha.

```
var model = mongoose.model('pokemon', pokemonSchema);
var query = { attack: 49, name: 'Nerdmon' };
model.update(query, query, { upsert: true }, function (err, data) {
    if (err) console.log(err);
    console.log(data);
})
```

# 5) Remova todos os Pokemons com attack > 50.

```
var model = mongoose.model('pokemon', pokemonSchema);
var query = { attack: {$gt: 50} };
model.remove(query, function (err, data) {
    if (err) console.log(err);
    console.log(data);
})
```
