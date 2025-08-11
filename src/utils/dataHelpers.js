export const filteredData = (data, sortCategory, searchQuery) => {
  let copy = [...data];

  if (searchQuery !== '') {
    copy = copy.filter(item => {
      const query = searchQuery.toLowerCase();

      return item.name.toLowerCase().includes(query);
    });
  }

  if (sortCategory && sortCategory !== 'All') {
    copy = copy.filter(item => item.category.title === sortCategory);
  }

  return copy;
};
