const State = require("../models/State");

exports.addState = async (req, res) => {
    try {
        const state = await State.create(req.body);
        res.status(201).json(state);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStates = async (req, res) => {
    try {
        const states = await State.findAll();
        res.json(states);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStateById = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "State not found" });
        res.json(state);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update State
exports.updateState = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "State not found" });

        await state.update(req.body);
        res.json({ message: "State updated successfully", state });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete State
exports.deleteState = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "State not found" });

        await state.destroy();
        res.json({ message: "State deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

