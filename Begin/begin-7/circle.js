const P = 3.14;

exports.L = circumference = (r) => {
    return (2 * (P * r));
};

exports.S = area = (r) => {
    return (P * (r**2));
};