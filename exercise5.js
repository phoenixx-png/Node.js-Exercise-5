import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "shopleft_database",
  password: "Tw1st3dgemini!",
});

const getProductsDb = async () => {
  let [data] = await pool.query("SELECT * FROM products;");
  return data;
};

app.get("/products", async (req, res) => {
  res.json({ info: await getProductsDb() });
});

const getProductsById = async (productCode) => {
  const [rows] = await pool.query(
    "SELECT * FROM products WHERE product_code = ?",
    [productCode],
  );
  return rows[0];
};

app.get("/products/:id", async (req, res) => {
  const productCode = req.params.id;
  const product = await getProductsById(productCode);
  res.json(product);
});

const postProductsDb = async (
  product_code,
  product_name,
  product_price,
  product_quantity,
) => {
  await pool.query(
    "INSERT INTO `products` (`product_code`, `product_name`, `product_price`, `product_quantity`) VALUES (?, ?, ?, ?);",
    [product_code, product_name, product_price, product_quantity],
  );
};

app.post("/products", async (req, res) => {
  let { product_code, product_name, product_price, product_quantity } =
    req.body;
  await postProductsDb(
    product_code,
    product_name,
    product_price,
    product_quantity,
  );
  res.json({ info: "New product data added" });
});

const deleteProductsDb = async (product_code) => {
  await pool.query("DELETE FROM `products` WHERE (`product_code` = ?);", [
    product_code,
  ]);
};

app.delete("/products/:id", async (req, res) => {
  await deleteProductsDb(req.params.id);
  res.json({ message: "Product deleted" });
});

const patchProductsDb = async (
  product_code,
  product_name,
  product_price,
  product_quantity,
) => {
  const [result] = await pool.query(
    `UPDATE products
     SET
       product_name = COALESCE(?, product_name),
       product_price = COALESCE(?, product_price),
       product_quantity = COALESCE(?, product_quantity)
     WHERE product_code = ?`,
    [product_name, product_price, product_quantity, product_code],
  );
  return result;
};

app.patch("/products/:id", async (req, res) => {
  const product_code = req.params.id;
  const { product_name, product_price, product_quantity } = req.body;

  const product = await patchProductsDb(
    product_code,
    product_name,
    product_price,
    product_quantity,
  );

  res.json({ message: "Product Information Updated." });
});

const getUsersDb = async () => {
  let [data] = await pool.query("SELECT * FROM users;");
  return data;
};

app.get("/users", async (req, res) => {
  res.json({ info: await getUsersDb() });
});

const getUsersById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUsersById(id);
  res.json(user);
});

const postUsersDb = async (id, email, first_name, last_name, password) => {
  await pool.query(
    "INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`) VALUES (?, ?, ?, ?, ?);",
    [id, email, first_name, last_name, password],
  );
};

app.post("/users", async (req, res) => {
  let { id, email, first_name, last_name, password } =
    req.body;
  await postUsersDb(
    id, email, first_name, last_name, password
  );
  res.json({ info: "New user data added" });
});

const deleteUsersDb = async (id) => {
  await pool.query("DELETE FROM `users` WHERE (`id` = ?);", [id]);
};

app.delete("/users/:id", async (req, res) => {
  await deleteUsersDb(req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(4848, () => {
  console.log("http://localhost:4848");
});