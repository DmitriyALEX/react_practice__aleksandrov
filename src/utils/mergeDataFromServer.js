export const mergeDataFromServer = (
  usersFromServer,
  categoriesFromServer,
  productsFromServer,
) => {
  const products = productsFromServer.map(product => {
    const category = categoriesFromServer.find(
      categories => categories.id === product.categoryId,
    );
    const user = usersFromServer.find(
      userServer => userServer.id === category.ownerId,
    );

    return {
      ...product,
      category,
      owner: user,
    };
  });

  return products;
};
