const { response } = require("express");

const usersGet = (req, res = response) => {
  const { city, name = "no name", id, page, limit } = req.query;

  res.json({
    name,
    city,
    res: "Get",
    page,
    id,
    limit,
  });
};

const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    name: "Brayan",
    city: "Monterrey",
    res: "Put",
    id,
  });
};

const usersPost = (req, res = response) => {
  const { name, city } = req.body;

  res.json({
    name,
    city,
    res: "Post",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    name: "Brayan",
    city: "Monterrey",
    res: "Delete",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    name: "Brayan",
    city: "Monterrey",
    res: "Patch",
  });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
};
