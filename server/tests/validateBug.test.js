// validateBug.test.js
const validateBug = require('./validateBug');
test('valid bug returns true', () => {
  expect(validateBug({ title: 'Crash', description: 'App crashes' })).toBeTruthy();
});
