

# REMPLAZO DE FUNCIONES EN C++ 2003

## strcat, wcscat, _tcsat, lstrcat, StrCat 

* REMPLZAR CON: StringCchCatA

```C++

#include "strsafe.h" 

StringCchCatA(c_cadena, sizeof(c_cadena), c_dia);

sintaxis 

STRSAFEAPI StringCchCatA(
  [in, out] STRSAFE_LPSTR  pszDest,
  [in]      size_t         cchDest,
  [in]      STRSAFE_LPCSTR pszSrc
);

```
referencia: https://learn.microsoft.com/es-es/windows/win32/api/strsafe/nf-strsafe-stringcchcata

## sprintf, swprintf, _stprintf, wsprintf, wnsprintf, _snprintf, _snwprintf, _sntprintf

* REMPLZAR CON: StringCchPrintf

```C++

#include "strsafe.h" 

int hr = StringCchPrintf(c_nom_archivo,sizeof(c_nom_archivo),"%s%s",path_imgs, s_nom_imagen_otro);

sintaxis 

STRSAFEAPI StringCchPrintfA(
  [out] STRSAFE_LPSTR  pszDest,
  [in]  size_t         cchDest,
  [in]  STRSAFE_LPCSTR pszFormat,
        ...            
);

```
referencia: https://learn.microsoft.com/es-es/windows/win32/api/strsafe/nf-strsafe-stringcchprintfa

## atol, atoi 

* REMPLZAR CON: strtol
* FUNCIONES PARECIDAS: wcstol, , _strtol_l, _wcstol_l

```C++

// ENCABEZADOS POR CADA FUNCIÓN
strtol 	<stdlib.h>
wcstol 	<stdlib.h> o <wchar.h>
_strtol_l 	<stdlib.h>
_wcstol_l 	<stdlib.h> o <wchar.h>

// EJEMPLO:

strtol(xAct.texto, NULL, 10);

sintaxis 

long strtol(
   const char *string,
   char **end_ptr,
   int base
);

long wcstol(
   const wchar_t *string,
   wchar_t **end_ptr,
   int base
);

long _strtol_l(
   const char *string,
   char **end_ptr,
   int base,
   _locale_t locale
);

long _wcstol_l(
   const wchar_t *string,
   wchar_t **end_ptr,
   int base,
   _locale_t locale
);

```
referencia: https://learn.microsoft.com/es-es/cpp/c-runtime-library/reference/strtol-wcstol-strtol-l-wcstol-l?view=msvc-170

## strlen, wcslen, _tcslen

* REMPLZAR CON: StringCchLengthA

```C++

// ENCABEZADOS POR CADA FUNCIÓN

#include "strsafe.h"

size_t len = 0 ;

StringCchLengthA(c_linea, sizeof(c_linea), &len);

StringCchLengthA( cadena_a_comprobar(psz),  número_máximo_de_caracteres_permitidos_en_(psz),  El_número_de_caracteres_en_psz_sin_incluir_el_carácter_nulo );

sintaxis 

STRSAFEAPI StringCchLengthA(
  [in]  STRSAFE_PCNZCH psz,
  [in]  size_t         cchMax,
  [out] size_t         *pcchLength
);

```
referencia: https://learn.microsoft.com/es-es/windows/win32/api/strsafe/nf-strsafe-stringcchlengtha


## memset

* REMPLZAR CON: FillMemory

```C++

#include <Windows.h>	

FillMemory(vTest, sizeof(vTest), 0);

sintaxis 

void FillMemory(
  [out] PVOID  Destination,
  [in]  SIZE_T Length,
  [in]  BYTE   Fill
);

```
referencia: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa366561(v=vs.85)

## memcpy, strncpy, wcsncpy, _tcsncpy

* REMPLZAR CON: StringCbCopyNA

```C++

#include<strsafe.h>  

int hr = 0;			

hr = StringCbCopyNA(c_fecha_res, 12, fecha_resolucion, 12);  

sintaxis 

STRSAFEAPI StringCbCopyNA(
  [out] STRSAFE_LPSTR  pszDest,
  [in]  size_t         cbDest,
  [in]  STRSAFE_PCNZCH pszSrc,
  [in]  size_t         cbToCopy
);

```
referencia: https://learn.microsoft.com/es-es/windows/win32/api/strsafe/nf-strsafe-stringcbcopyna

## CopyFile

* REMPLZAR CON: 

```C++

// ASEGURARSE DEL COMPORTAMIENTO DE LA FUNCIÓN

if ( CopyFile( FileData.cFileName, szNewPath, FALSE ) )
{   
    dwAttrs = GetFileAttributes( FileData.cFileName ); 

    if ( dwAttrs==INVALID_FILE_ATTRIBUTES ) return; 

        if ( !( dwAttrs & FILE_ATTRIBUTE_READONLY ) ) 
            {   
                SetFileAttributes(szNewPath, 
                dwAttrs | FILE_ATTRIBUTE_READONLY); 
            } 
}else{ 
    printf("Could not copy file.\n"); 
    return;
} 

```
referencia: 
https://stackoverflow.com/questions/10195343/copy-a-file-in-a-sane-safe-and-efficient-way
https://learn.microsoft.com/en-us/windows/win32/fileio/retrieving-and-changing-file-attributes




