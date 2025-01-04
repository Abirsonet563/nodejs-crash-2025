import fs from 'fs';

//read\file() - callback

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    console.log(data);
})

//readFileSync() - Synchronous version
const data = fs.readFileSync('./text.txt', 'utf-8');
console.log(data);