

# REMPLAZO DE FUNCIONES EN C++ 2003

## strcat   
## strcat 
## wcscat 
## _tcsat
## lstrcat
## StrCat 

* REMPLZAR CON: StringCchCatA

```C++

#include "strsafe.h" 

StringCchCatA(c_cadena, sizeof(c_cadena), c_dia);

STRSAFEAPI StringCchCatA(
  [in, out] STRSAFE_LPSTR  pszDest,
  [in]      size_t         cchDest,
  [in]      STRSAFE_LPCSTR pszSrc
);

```