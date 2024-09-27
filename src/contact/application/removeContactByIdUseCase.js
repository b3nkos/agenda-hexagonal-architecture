module.exports = function removeContactUseCase(contactRepository) {
    return async function (id) {
        return await contactRepository.remove(id);
    }
}
