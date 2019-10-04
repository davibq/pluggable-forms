module.exports = {
  '*.js': ['prettier --write', 'git add', 'eslint'],
  '*.css': ['prettier --write', 'git add', 'stylelint'],
  '*.json': ['prettier --write', 'git add'],
};
