const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const regcheq_backend = [
  ...common,
  'tests/app/features/**/*.feature',
  '--require tests/app/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  regcheq_backend
};
