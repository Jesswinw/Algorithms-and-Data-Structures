"use strict";
//Question: Implement Bubble sort
//Complexity: O(n^2)
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentVal;
        }
    }
    return arr;
};
