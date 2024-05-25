import express from 'express';
import Form from '../models/Form.js';

const router = express.Router();

// Create Form
router.post('/form', async (req, res) => {
    try {
        const form = await Form.create(req.body);
        res.json(form);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Fill Data
router.post('/fill_data', async (req, res) => {
    const { form_title } = req.query;

    if (form_title !== 'user') {
        return res.status(400).send({ error: 'Invalid form title' });
    }

    try {
        const formData = req.body;
        const newEntry = await Form.create(formData);
        res.status(201).send(newEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get All Data
router.get('/fill_data', async (req, res) => {
    const { form_title } = req.query;

    if (form_title !== 'user') {
        return res.status(400).send({ error: 'Invalid form title' });
    }

    try {
        const forms = await Form.findAll();
        res.status(200).send(forms);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;
