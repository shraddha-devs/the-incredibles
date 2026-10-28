#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, k;
    int *num;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    if (n <= 0) {
        printf("Array size must be positive.\n");
        return 0;
    }

    num = (int *)malloc(n * sizeof(int));
    if (num == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    printf("Enter the elements:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &num[i]);
    }

    printf("Enter k: ");
    scanf("%d", &k);

    if (k < 0) {
        printf("k must be non-negative.\n");
        free(num);
        return 0;
    }

    if (k > n) {
        printf("k cannot be greater than the array size.\n");
        free(num);
        return 0;
    }

    int newSize = n - k;
    int *result = (int *)malloc(newSize * sizeof(int));
    if (newSize > 0 && result == NULL) {
        printf("Memory allocation failed.\n");
        free(num);
        return 1;
    }

    for (int i = 0; i < newSize; i++) {
        result[i] = num[i];
    }

    printf("Array after removing the last %d elements: ", k);
    for (int i = 0; i < newSize; i++) {
        printf("%d ", result[i]);
    }
    printf("\n");

    free(num);
    free(result);

    return 0;
}
