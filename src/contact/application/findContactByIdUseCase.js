module.exports = function findByIdUseCase(contactRepository) {
    return async function (id) {
        const contact = await contactRepository.findById(id);
        if (!contact) {
            throw new Error(`Could not find contact with id ${id}`);
        }
        return contact;
    }
}
