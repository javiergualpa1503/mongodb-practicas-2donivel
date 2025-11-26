use("miEmpresa");


const registros = [
{ cedula: "1102458796", numeroFactura: "FAC-00125" },
{ cedula: "0921548796", numeroFactura: "FAC-00126" },
{ cedula: "1754892165", numeroFactura: "FAC-00127" }
]


registros.forEach(item =>{

    const doc = db.clientes.findOne(
    {"subject.id": item.cedula},
    { sort: { createdAt: -1 } }
)

if(!doc){
print('No se encontro ningun cliente con ese id')
}

const result = db.clientes.updateOne({_id:doc._id},{
    $set:{
        "infoBilling.billing.number": item.numeroFactura,
        status:8,
    }
})

if(result.modifiedCount != 0){
    print("Se modifico el documento correctamente")
}else{
    print("No se modifico el documento")
}

db.clientes.findOne(
    {"subject.id": "1754892165"},
)
})

