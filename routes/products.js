import express from 'express';
const router = express.Router();

const findAllProducts = (req, res) => {
  res.status(200).send({ message: 'All products' });
};
const findOneProduct = (req, res) => {
  res.status(200).send({ message: 'Product info' });
};
const addProduct = (req, res) => {
  const { name } = req.body;

  //Agregar magia para crear el producto en la base de datos!!

  res.status(200).send({ message: `Product Created ${name}` });
};
const updateProduct = (req, res) => {
  res.status(200).send({ message: 'Product Updated' });
};
const deleteProduct = (req, res) => {
  res.status(200).send({ message: 'Product deleted' });
};

//CRUD (Create, Read, Update, Delete)
router.get('/', findAllProducts);
router.get('/:id', findOneProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
