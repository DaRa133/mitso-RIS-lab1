function multiplicationTable(size) {
    const result = [];
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            result.push(i * j);
        }
        console.log(result);
        result.length = 0;
    }
}
multiplicationTable(4)