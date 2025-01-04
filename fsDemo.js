
import fs from 'fs/promises';

//readFile() - Promise.then()
// fs.readFile('./text.txt', 'utf-8')
//    .then((data) => console.log(data))
//    .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {

    try {
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

// write File
const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'Hello, I am Writing to this File')
        console.log('File Written to ...');
    } catch (error) {
        console.log(error);
    };

}

// appendFile()
const appendFile = async () => {
    try{
        await fs.appendFile('./text.txt', '\nThis is appended text');
        console.log('File appended to ...');
    }catch (error){
       console.log(error);
    }
}; 

writeFile();
appendFile();
readFile();