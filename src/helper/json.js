module.exports = (param) => {
    return JSON.stringify(param, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value,
    );
};
