// write a functino to show the longest string from array
const names = ["Noman", "John", "Wickago", "Omarfaru", "Faruk", "Shahin"];

function findSting(names) {
    let max = 0;
    let name, size;
    names.forEach(function (item) {
        if (item.length > max) {
            max = item.length;
            name = item;
            size = max;
        }
    })

    return ` Longest name: ${name}   and Size: ${size}`;
}

console.log(findSting(names));