#include <stdio.h>
#include <string.h>

#define WORD_SWAP_THERESHOLD 5

/**
 * Flips all letters of a given word.
 * We use `current_pointer` to point to the character that is going to be
 * flipped. It initially points to the start of the word.
 * We calculcate the middle of the word `middle_index` to avoid useless computation.
 * The char that will be overwritten is stored temporally into `temp`.
 */
void flipWord(char str[], const int start, const int end) {
    int current_pointer = start + 1;
    char temp = '\0';

    int middle_index = current_pointer + (end - current_pointer) / 2;
    for(int i = (end - 1); i >= middle_index; i--) {
        temp = str[current_pointer]; 
        str[current_pointer] = str[i];
        str[i] = temp;
        current_pointer++;
    }
}

void spinWords(char str[]) {
    int last_space_index = 0;
    int str_len = strlen(str);
    char result[str_len];

    strcpy(result, str);
    for(int x = 0; x <= str_len; x++) {
        if (str[x] == ' ' || str[x] == '\0') {
            if (x - last_space_index > WORD_SWAP_THERESHOLD) {
                flipWord(result, last_space_index, x);
            }

            last_space_index = x;
        }
    }

    printf("result: %s", result);
}

int main(void) {
    spinWords("Hey fellow warriors this is Sparta!");
}
