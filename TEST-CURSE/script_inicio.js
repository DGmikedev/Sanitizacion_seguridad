const proceso = require('child_process');


proceso.exec("start firefox https://youtube.com", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Salida de error (stderr): ${stderr}`);
  }
  console.log(`Salida estándar (stdout): ${stdout}`);
});
