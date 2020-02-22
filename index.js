var Parser = require("jison").Parser;

module.exports = {
  parser: new Parser({
    lex: {
      rules: [
        ["\\s+", "/* skip whitespace */"],
        ["AND", "return 'AND';"],
        ["OR", "return 'OR';"],
        ["\\(", "return '(';"],
        ["\\)", "return ')';"],
        ['("_"|"$")?[a-zA-Z_][a-zA-Z0-9_]*', "return 'LITERAL';"]
      ]
    },
    operators: [["left", "(", ")"]],
    bnf: {
      program: [["condition", "return $1;"]],
      condition: [
        [
          "expression AND expression",
          "$$ = { type: 'OPERATION', left: $1, op: $2, right: $3 };"
        ],
        [
          "expression OR expression",
          "$$ = { type: 'OPERATION', left: $1, op: $2, right: $3 };"
        ]
      ],
      expression: [
        ["( condition )", "$$ = { type: 'EXPRESSION', value: $2 };"],
        ["variable", "$$ = $1;"]
      ],
      variable: [["LITERAL", "$$ = { type: 'LITERAL', name: $1 };"]]
    }
  })
};
