const crypto = require("crypto");
const ContactRepository = require("../../domain/ContactRepository")

class InMemoryContactRepository extends ContactRepository {
    constructor() {
        super();
        this.contacts = [];
    }
    async save(contact) {
        contact.id = crypto.randomUUID().toString();
        this.contacts.push(contact);
        return contact;
    }

    async findById(id) {
        return this.contacts.find(contact => contact.id === id)
    }

    async findByEmail(email) {
        return this.contacts.find(contact => contact.email === email);
    }

    async findAll() {
        return this.contacts;
    }
}

module.exports = InMemoryContactRepository
