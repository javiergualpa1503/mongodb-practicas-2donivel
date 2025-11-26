const registros = [
  { cedula: "0912225541", numeroFactura: "FAC-005" },
  { cedula: "0954872136", numeroFactura: "FAC-006" },
  { cedula: "1717218943", numeroFactura: "FAC-007" }
];

use('miEmpresa');

registros.forEach(item => {

  print(`\n🔍 Procesando cédula: ${item.cedula}`);

  const doc = db.clientes.findOne(
    { "subject.id": item.cedula,

      status:8
     },
    {
      sort: { createdAt: -1 }
     } 
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
    print(`El documento Se ha actualizado correctamente`);
    printjson(db.clientes.findOne({"subject.id" : item.cedula}))
  } else {
    print(`⚠️ No se pudo actualizar el documento`);
  }
});