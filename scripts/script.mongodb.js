const registros = [
  { cedula: "1754892165", numeroFactura: "FAC-001" },
  { cedula: "1102987541", numeroFactura: "FAC-002" },
  { cedula: "0921548796", numeroFactura: "FAC-003" }
];


use('miEmpresa');


registros.forEach(item => {

  print(`\n🔍 Procesando cédula: ${item.cedula}`);

  const doc = db.clientes.findOne(
    { "subject.id": item.cedula },
    {
      sort: { createdAt: -1 },            // más reciente
      projection: { _id: 1 }              // solo necesitamos el _id
    }
  );


  // Si no encuentra nada
  if (!doc) {
    print(`⚠️  No se encontró documento con subject.id = ${item.cedula}`);
    return;
  }

  console.log(`➡️  Documento más reciente encontrado → _id: ${JSON.stringify(doc)}`);

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
    print(`✅ Actualizado correctamente → _id: ${doc._id}`);

    const actualizado = db.clientes.findOne({ _id: doc._id });
    print("📄 Documento actualizado:");
    printjson(actualizado);

  } else {
    print(`⚠️  No se pudo actualizar el _id: ${doc._id}`);
  }


});