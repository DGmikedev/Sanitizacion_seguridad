# coding: utf-8
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding
import base64                       # gestiona la codificacion en base64
import xml.etree.ElementTree as ET  # gestiona los xml  
import argparse                     # gestiona los permsios

def cifrar(texto, clave, iv):
    """Cifra un texto usando AES-CBC."""
    padder = padding.PKCS7(128).padder()  # Padding para asegurar que el texto sea múltiplo del tamaño de bloque
    texto_padded = padder.update(texto.encode('utf-8')) + padder.finalize()
    cipher = Cipher(algorithms.AES(clave), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    texto_cifrado = encryptor.update(texto_padded) + encryptor.finalize()
    return base64.b64encode(texto_cifrado).decode('utf-8') # Codifica en base64 para que sea seguro para el transporte

if __name__ == "__main__":

    # NO DISTRIBUIR POR CHECKMARX o SUSTITUIR SI PIDE XML
    clave = b'\xf2\x01Ptf\xe52\x8a /R\x12\xae\x03\x14c\x90\xba\xba\xa2\x1a^\xd5\xe9y\x93\xb0d\x82\xd1\x96\xe7' 
    iv = b'AO&\xac\xfc\xc7:!\xab\x1aj\x9a\xec\x99\xdc\x03'

    parser = argparse.ArgumentParser(description="herramienta para encriptado el contenido de logs.")
    parser.add_argument("-p", type=str, help="Path del log a encriptar", default=30)
    parser.add_argument("-s", type=str, help="String a encriptar.", default=30)

    args = parser.parse_args()
    cadena_str = args.s
    
    # LOG A ENCRIPTAR
    path_log = args.p
    print(cifrar(cadena_str, clave, iv))

    """
    if os.path.exists(path_log):
        try:
            # Se cifra la cadena
            msj_cifrado = cifrar(cadena_str, clave, iv)

            # direccion del archivo a escribir
            with open(path_log, "a") as log:
                log.write(msj_cifrado + "\n")

        except Exception as e:
            print("REVISAR SI EL LOG ESTÁ CREADO Y ES FUNCIONAL PATH: ", e)
        
    else:
        print("ARCHIVO LOG NO ENCONTRADO EN EL PATH: ", path_log)  
    
    print("Linea insertada en archivo")   
    """
     