const P = 3.14;
//  begin-1 //
exports.perimetrSqr = (a) => {
    return (4 * a);
};
//  begin-2 //
exports.areaSqr = (a) => {
    return (a**2);
};
//  begin-3 //
exports.perimetrRect = (a, b) =>{
    return ((a + b) * 2);
};
exports.areaRect = (a, b) => {
    return (a * b);
};
//  begin-4 //
exports.circumference = (d) => {
    return (P * d);
};
//  begin-5 //
exports.voleumCube = (a) => {
    return (a**3);
};
exports.areaCube = (a) => {
    return (6 * (a**2));
};
//  begin-6 //
exports.voleumParallelepiped = (a, b, c) => {
    return (a * b * c);
};
exports.areaParallelepiped = (a, b, c) => {
    return (2 * ((a * b) + (b * c) + (a * c)));
};
// begin-7 //
exports.circumFerence = (r) => {
    return (2 * (P * r));
};
exports.areaCircle = (r) => {
    return (P * (r**2));
};
//  begin-8 //
exports.TaM = TheArithmeticMean = (a, b) => {
    return ((a + b)/2);
};
//  begin-9 //
exports.TgM = TheGejmetricMean = (a, b) => {
    return (Math.sqrt(a * b));
};
//  begin-10    //
exports.NumSum = (a, b) => {
    return (a + b);
};
exports.NumDiff = (a, b) => {
    return (a - b);
};
exports.NumMul = (a, b) => {
    return (a * b);
};
exports.NumDiffSqr = (a, b) => {
    return ((a**2) / (b**2));
};