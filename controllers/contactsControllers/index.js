const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContact = require("./update");
const removeContact = require("./remove");
const updateFieldFavorite = require("./updateFavorite") 

module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContact,
    removeContact,
    updateFieldFavorite
}