let database = 'database.json'
const mongoose = require('mongoose');
const stable = require('json-stable-stringify');
const fs = require('fs');
const path = require('path');
mongoose.set("strictQuery", false)
let Database

if (/mongo/.test(database)) {
Database = class MongoDB {
constructor(url) {
this.url = url

this.options = {
useNewUrlParser: true,
useUnifiedTopology: true,
//keepAlive: true,
//keepAliveInitialDelay: 30000,
//timeout: 30000
}
this.connection = this.url || database
this.model = {
database: {},
}
this.data = {}
}

read = async () => {
mongoose.connect(this.connection, {
...this.options,
})
try {
const schemaData = new mongoose.Schema({
data: {
type: Object,
required: true,
default: {},
},
})
this.model.database = mongoose.model("data", schemaData)
} catch {
this.model.database = mongoose.model("data")
}
this.data = await this.model.database.findOne({})
if (!this.data) {
new this.model.database({
data: {},
}).save()
this.data = await this.model.database.findOne({})
return (this.data = this?.data?.data)
} else return this?.data?.data || this?.data
}

write = async (data) => {
const obj = !!data ? data : global.db
if (this.data && !this.data.data)
return new this.model.database({
data: obj,
}).save()
const document = await this.model.database.findById(this.data._id)
if (!document.data) document.data = {}
document.data = obj
document.save()
}

}
} else if (/json/.test(database)) {
Database = class Database {
data = {}
file = path.join(process.cwd(), 'lib', database)

read() {
let data
if (fs.existsSync(this.file)) {
data = JSON.parse(fs.readFileSync(this.file))
} else {
fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2))
data = this.data
}

return data
}

write(data) {
this.data = !!data ? data : global.db
let dirname = path.dirname(this.file)
if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true })
fs.writeFileSync(this.file, JSON.stringify(this.data, null, 2))
return this.file
}
}

}

module.exports = Database