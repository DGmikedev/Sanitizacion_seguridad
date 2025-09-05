const { exec } = require("child_process");

function commandExe(command){
    return new Promise((resolve, reject)=>{
        exec(command,(error, stdout, stderr)=>{
            if(error){ return reject(error.message) }
            if(stderr){ return reject(stderr) }
            resolve(stdout);
        });
    });
}

(async ()=>{
    const command = 'curl yoururl.com > salida.txt';
    try{
        const outComm = await commandExe(command);
        console.log(`Comando [${command}] ejecutado con exito`);
    }catch(err){
        console.log(`Error al ejecutra el comando: [${command}]\nerror = ${err}`);
    }
})();
