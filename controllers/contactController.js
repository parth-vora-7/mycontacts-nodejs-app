const asyncHandler = require('express-async-handler');

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
});

const createContact = asyncHandler(async (req, res) => {
    console.log('Body:', req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please pass name, email and phone');
    }
    res.status(201).json({ message: 'Create a conatct' });
});

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};