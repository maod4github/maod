const ThrowIfMissing = (name = '') => {
    throw new Error(`Missing parameter: ${name}`);
};

module.exports = ThrowIfMissing;