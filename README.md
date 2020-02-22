# Bool AST #

A simple logical expression parser to obtain the AST, using [Jison](https://zaa.ch/jison/).

## Installation

```
npm i @jeanbenitez/boolast
```
## Supported logical operators
1. `OR`
1. `AND`
1. `()` Parentheses

## Usage

```js
import { parser } from '@jeanbenitez/boolast';

console.log(parser.parse('REQUIRED OR MANDATORY'));
```

Output:
```js
{
  type: 'OPERATION',
  left: {
    type: 'LITERAL',
    name: 'REQUIRED'
  },
  op: 'OR',
  right: {
    type: 'LITERAL',
    name: 'MANDATORY'
  }
}
```
