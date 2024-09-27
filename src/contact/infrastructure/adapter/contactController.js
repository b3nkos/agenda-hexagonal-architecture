const router = require("express").Router()
const createContactUseCase = require("../../application/createContactUseCase")
const findContactByIdUseCase = require("../../application/findContactByIdUseCase");
const findAllContactsUseCase = require("../../application/findAllContactsUseCase");

module.exports = function (contactRepository) {

    router.post('/contacts', async (request, response) => {
        try {
            const contact = await createContactUseCase(contactRepository)(request.body);
            response.status(200).send(contact);
        } catch (error) {
            response.status(400).send({error: error.message})
        }
    })

    router.get('/contacts/:id', async (request, response) => {
        try {
            const contact = await findContactByIdUseCase(contactRepository)(request.params.id);
            response.status(200).send(contact);
        } catch (error) {
            response.status(404).send({error: error.message})
        }
    })

    router.get('/contacts', async (request, response) => {
        try {
            const contacts = await findAllContactsUseCase(contactRepository)();
            response.status(200).send(contacts);
        } catch (error) {
            response.status(400).send({error: error.message})
        }
    })

    return router
}
