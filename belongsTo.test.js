const belongsTo = require('./belongsTo');



describe('Invalid arguments', () => {
  test('invalid items', () => {
    expect(() => belongsTo(12, 'carne')).toThrow()
  });
  test('invalid category', () => {
    expect(() => belongsTo([], '')).toThrow();
  });
   test('invalid category', () => {
     expect(() => belongsTo([], 1)).toThrow();
   });
});
describe('all', () => {
  test('all with one', () => {
    const res = belongsTo(['pasta'], 'hidratos'); // 1
    expect(res).toBe(1);
  });
  test('all', () => {
    const res = belongsTo(['arroz', 'pasta'], 'hidratos'); // 2
    expect(res).toBe(2);
  });

  test('all empty', () => {
    const res = belongsTo([], 'hidratos'); // 0
    expect(res).toBe(0);
  });
});
describe('some', () => {
  test('some', () => {
    const res = belongsTo(['pescado', 'pasta'], 'hidratos');
    expect(res).toBe(1);
  });

  test('some with many', () => {
    const res = belongsTo(
      ['pescado', 'pasta', 'arroz', 'carne'],
      'hidratos',
    );
    expect(res).toBe(2);
  });
});
describe('any', () => {
  test('any', () => {
    const res = belongsTo(['pescado', 'pasta'], 'carne');
    expect(res).toBe(0);
  });

  test('any with many', () => {
    const res = belongsTo(
      ['pescado', 'pasta', 'arroz', 'carne'],
      'carne',
    );
    expect(res).toBe(0);
  });
});
