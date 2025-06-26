#include <algorithm> // ALTERNATIVA 1,2

#include <vector>    // ALTERNATIVA 3

#include <cstring>   // ALTERNATIVA 4


int main() {
    int arr[10];

    // ALTERNATIVA 1
    std::fill(arr, arr + 10, 0); // Rellena con ceros

    // ALTERNATIVA 2
    std::fill_n(arr, 10, 0);
    
    // ALTERNATIVA 3
    std::vector<int> vec(10);
    vec.assign(10, 0); // Llena el vector con 10 ceros
    
    // ALTERNATIVA 4 (CON LIMITACIÓN DE LECTURA)
    int arr[10];
    std::memset(arr, 0, sizeof(arr));
}

