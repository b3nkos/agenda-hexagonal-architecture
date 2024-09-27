module.exports = function createContactUseCase(contactRepository) {
    return async function (contact) {
        const contactFound = await contactRepository.findByEmail(contact.email);
        if (contactFound) {
            throw new Error(`Contact with email ${contact.email} is already in use`);
        }

        return await contactRepository.save(contact);
    }
}
