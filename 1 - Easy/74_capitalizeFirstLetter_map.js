const str = 'captain picard';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const caps = str.split(' ').map(capitalize).join(' ');
console.log(caps);
