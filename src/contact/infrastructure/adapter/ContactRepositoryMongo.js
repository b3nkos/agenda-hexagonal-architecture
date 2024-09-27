const COLLECTION_NAME = 'contacts';

const ContactRepository = require("../../domain/ContactRepository");

class ContactRepositoryMongo extends ContactRepository {
    constructor(mongoClient) {
        super();
        this.mongoClient = mongoClient;
    }

    async save(contact) {
        return await this.mongoClient.collection(COLLECTION_NAME).insertOne(contact)
    }

    async findByEmail(email) {
        return await this.mongoClient.collection(COLLECTION_NAME).findOne({email})
    }

    async findById(id) {
        return await this.mongoClient.collection(COLLECTION_NAME).findOne({id})
    }

    async findAll() {
        return await this.mongoClient.collection(COLLECTION_NAME).findAll()
    }
}

module.exports = ContactRepositoryMongo
