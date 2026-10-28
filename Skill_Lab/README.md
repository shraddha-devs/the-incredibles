# Refactoring Understanding

Refactoring means improving the structure, readability, and maintainability of code without changing its original behavior.

In simple terms, we restructure code to make it cleaner, easier to understand, and easier to extend, while keeping the same output and logic.

## Example from this project

The file `div2.c` checks whether a number is even or odd. The original version works correctly, but it can be improved by:

- separating logic into a function
- validating user input
- using a standard `main(void)` signature
- making the code easier to read and maintain

## Why refactor?

Refactoring is useful because it helps developers:

- understand code faster
- reduce repetition
- make debugging easier
- prepare code for future changes
- keep programs organized and professional

## Refactored version

```c
#include <stdio.h>
#include <stdbool.h>

static bool is_even(int num) {
    return num % 2 == 0;
}

int main(void) {
    int num;

    printf("Enter a number: ");
    if (scanf("%d", &num) != 1) {
        printf("Invalid input. Please enter an integer.\n");
        return 1;
    }

    if (is_even(num)) {
        printf("%d is even.\n", num);
    } else {
        printf("%d is odd.\n", num);
    }

    return 0;
}
```

## Summary

Refactoring is not rewriting the program from scratch. It is the process of improving code quality while preserving the same behavior. Good refactoring makes code cleaner, safer, and easier to maintain in the future.
