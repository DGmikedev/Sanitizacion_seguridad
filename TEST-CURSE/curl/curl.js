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
    const command = 'dir';
    try{
        const outComm = await commandExe(command);
        console.log(`\n====== Comando [${command}] ejecutado con exito ======\n`);
        console.log(outComm);
        console.log("========================");
    }catch(err){
        console.log(`Error al ejecutra el comando: [${command}]\nerror = ${err}`);
    }
})();
