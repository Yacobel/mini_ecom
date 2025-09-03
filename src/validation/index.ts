export const validation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = { title: "", description: "", imageURL: "", price: "" };
  const validImage = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length >= 80
  ) {
    errors.title = "Product Title Must Be Betwen 10 And 80";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 100
  ) {
    errors.description = "Product description Must Be Betwen 10 And 100";
  }
  if (!product.imageURL.trim() || !validImage) {
    errors.imageURL = "ImageURL Not Valide";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "price Not Valide";
  }

  return errors;
};
