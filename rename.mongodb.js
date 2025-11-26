use('miEmpresa')

db.clientes.updateMany(
  {},
  { $rename: { "created": "createdAt" } }
);