export const formatData = (items) => {
  return items.map(item => {
    const id = item.sys.id;
    return {id, ...item.fields};
  })
}
