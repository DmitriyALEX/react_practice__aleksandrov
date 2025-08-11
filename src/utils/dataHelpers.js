export const filteredData = (data, sortCategory, searchQuery, sortByUser) => {
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

  if (sortCategory === 'All') {
    copy = data;
  }

  if (sortByUser && sortByUser !== 'All') {
    copy = copy.filter(item => item.owner.name === sortByUser);
  } else if (sortByUser === 'All') {
    copy = data;
  }

  return copy;
};
