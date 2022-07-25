// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix
        .map((a, i) => {
            if ((i + 1) % 2 === 0) {
                return a.reverse();
            }
            return a;
        })
        .flat(Infinity);
};
