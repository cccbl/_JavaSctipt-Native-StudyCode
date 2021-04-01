

let array = ['asd', 'ghrt', 'zv', 'dsrt']


function test(arr) {

    let map = new Map();
    for (let n of arr) {
        let k = [...n].sort().join('');

        console.log('_', k)

        if (!map[k]) {
            map[k]
        }
    }
}


test(array);