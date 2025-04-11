# coding: utf-8
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding
import base64                       # gestiona la codificacion en base64
import xml.etree.ElementTree as ET  # gestiona los xml  
import argparse                     # gestiona los permsios

def descifrar(texto_cifrado, clave, iv):
    """Descifra un texto cifrado con AES-CBC."""
    texto_cifrado = base64.b64decode(texto_cifrado)
    cipher = Cipher(algorithms.AES(clave), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    texto_padded = decryptor.update(texto_cifrado) + decryptor.finalize()
    unpadder = padding.PKCS7(128).unpadder()
    texto_descifrado = unpadder.update(texto_padded) + unpadder.finalize()
    return texto_descifrado.decode('utf-8')

if __name__ == "__main__":

    # NO DISTRIBUIR POR CHECKMARX o SUSTITUIR SI PIDE XML
    clave = b'\xf2\x01Ptf\xe52\x8a /R\x12\xae\x03\x14c\x90\xba\xba\xa2\x1a^\xd5\xe9y\x93\xb0d\x82\xd1\x96\xe7' 
    iv = b'AO&\xac\xfc\xc7:!\xab\x1aj\x9a\xec\x99\xdc\x03'

    parser = argparse.ArgumentParser(description="herramienta para el descencriptado de archivos.")
    parser.add_argument("-p", type=str, help="Path del log a desendecr  criptar", default=30)
    parser.add_argument("-n", type=str, help="Nombre del Archivo que generará con el contenido desencriptado", default=30)
    
    args = parser.parse_args()
    path_log = args.p
    name_log = args.n

    # LOG A ENCRIPTAR
    # path_log = "log.txt"
  
    # LOG A DESENCRIPTAR
    # path_log_descr = "log_DESENCRIPTADO_BORRAR.txt"
    

    if os.path.exists(path_log):
        try:

            # direccion del archivo a escribir
            with open(path_log, "r") as log:
                for linea in log:
                    with open(name_log, "a") as logdesc:
                        logdesc.write(descifrar(linea, clave, iv) + "\n")

        except Exception as e:
            print("REVISAR SI EL LOG ESTÁ CREADO Y ES FUNCIONAL PATH: ", e)
        
    else:
        print("ARCHIVO LOG NO ENCONTRADO EN EL PATH: ", path_log)
    
    print("DOC DESCENCRIPTADO CORRECTAMENTE")     
