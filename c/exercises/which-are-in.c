#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sortWords(const char** words, const int n, char** out) {
    char** result;

    for(int x = 0; x < n; x++) {
        const char* current = words[x];

        printf("sort: %s\n", current);
        //char* next = words[x + 1];
    }
}

void inArray(const char* substrings[], const int size1, const char* words[], const int size2) {
    char *result[size2];
    int found_count = 0;

    // loop through the different search sub-strings and words
    for(int j = 0; j < size1; j++) {
        for(int k = 0; k < size2; k++) {
            // search if sub-string is contained in a word and add to results array
            char *found = strstr(words[k], substrings[j]);
            if(found != NULL) {
                result[found_count] = words[k]; 
                found_count++;
            }
        }
    }

    // bubble sort array of strings 
    for(int i = 0; i < 5; i++) {
        printf("%s\n", result[i]);
    }

}

int main(void) {
    const char* arr1[3] = { "arp", "live", "strong" };
    const char* arr2[5] = { "lively", "alive", "harp", "sharp", "armstrong" };

    //char* result[5];
    inArray(arr1, 3, arr2, 5);

    //for(size_t i = 0; i < sizeof(result); i++) {
    //    printf("%ld - %s", i, result[i]);
    //}

    return EXIT_SUCCESS;
}
