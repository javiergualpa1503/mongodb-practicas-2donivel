const registros = [
  { cedula: "1754892165", numeroFactura: "FAC-001" },
  { cedula: "1717218943", numeroFactura: "FAC-002" },
  { cedula: "1102458796", numeroFactura: "FAC-003" }
];


use('miEmpresa');

registros.forEach(item => {

  print(`\n🔍 Procesando cédula: ${item.cedula}`);

  const doc = db.clientes.findOne(
    { "subject.id": item.cedula },
    {
      sort: { createdAt: -1 },  }        // más reciente
  );


  if (!doc) {
    print(`⚠️ No se encontró documento con cedula = ${item.cedula}`);
    return;
  }


  const result = db.clientes.updateOne(
    { _id: doc._id },
    {
      $set: {
        "infoBilling.billing.number": item.numeroFactura,
        status: 8
      }
    }
  );

    if (result.modifiedCount === 1) {
    print(`El docunmento Se ha actualizado correctamente`);
    printjson(db.clientes.findOne({"subject.id" : item.cedula}))
  } else {
    print(`⚠️ No se pudo actualizar el documento`);
  }
});