const { MongoClient, ObjectId } = require('mongodb');

class MongoDriver {
    constructor(config) {
        this.config = config;
    }

    async connect() {
        const uri = `mongodb://${this.config.DB_HOST}:${this.config.DB_PORT}`;
        this.client = new MongoClient(uri);
        await this.client.connect();

        this.db = this.client.db('database');
        this.collection = this.db.collection('usuarios');
    }

    async getAllUsers() {
        return await this.collection.find().toArray();
    }

    async getUserById(id) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }

    async createUser(user) {
        await this.collection.insertOne(user);

        console.log('usuario Creado mongo');
    }      
}

module.exports = MongoDriver;