module.exports = function findAllUseCase(contactRepository) {
    return async function () {
        return await contactRepository.findAll()
    }
}
