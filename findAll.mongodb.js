use('miEmpresa')

// db.clientes.distinct("subject.id");


// const doc = db.clientes.findOne({
//     "subject.id": "0912225541",
//     status:8
// })

db.clientes.updateOne({
_id:ObjectId("6927087f5cdc69bb4d8d5caf")
},{$set: {
    status: 8
}})

// db.clientes.find({
//     "subject.id": "0912225541",
//     status:8
// })

 db.clientes.find({"subject.id":"0912225541"})

// [
//   "0912225541",
//   "0921548796",
//   "0954872136",
//   "1102458796",
//   "1102987541",
//   "1717218943",
//   "1718459632",
//   "1754892165"
// ]