const Supplier = require("../models/Supplier");

// List suppliers
exports.index = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("suppliers/index", { suppliers });
};

// Show form add
exports.new = (req, res) => {
  res.render("suppliers/new");
};

// Create supplier
exports.create = async (req, res) => {
  await Supplier.create(req.body);
  res.redirect("/suppliers");
};

// Show form edit
exports.edit = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.render("suppliers/edit", { supplier });
};

// Update supplier
exports.update = async (req, res) => {
  await Supplier.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/suppliers");
};

// Delete supplier
exports.delete = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.redirect("/suppliers");
};
