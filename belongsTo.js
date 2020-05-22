const data = [
  { item: 'pasta', category: 'hidratos' },
  { item: 'arroz', category: 'hidratos' },
  { item: 'solomillo', category: 'carne' },
  { item: 'ternera', category: 'carne' },
  { item: 'salmon', category: 'pescado' },
  { item: 'cebolla', category: 'verdura' },
];

function belongsTo(items, category) {
  if (!category || typeof category !== 'string')
    throw new Error('no valid category');
  if (!Array.isArray(items)) throw new Error('no valid items');

  const matchCategory = data.filter(
    (item) => item.category === category,
  );

  if (matchCategory.length === 0) return 0;

  const matchItems = items.filter((item) =>
    matchCategory.some((info) => info.item === item),
  );

  return matchItems.length;
}

module.exports = belongsTo;
