let field = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let row = 0; row < field.length; row++) {
    let actualRow = field[row];
    let output = "";
    for (let col = 0; col < actualRow.length; col++) {
    
        output += actualRow[col] + " ";
    }
}
console.log(output);