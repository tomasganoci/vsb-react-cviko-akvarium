// handleDelete - vymazání ryby
export const handleDeleteFish = (fishId, list, setList) => {
  const filtered = list.filter((item) => item.id !== fishId);
  setList(filtered);
};
// /handleDelete - vymazání ryby

// handleAdd - přidání ryby
export const handleAddFish = (fish, list, setList) => {
  const nextId = list.length > 0 ? Math.max(...list.map(f => f.id)) + 1 : 1;
  const newFish = { ...fish, id: nextId };
  setList([...list, newFish]);
};
// /handleAdd - přidání ryby
