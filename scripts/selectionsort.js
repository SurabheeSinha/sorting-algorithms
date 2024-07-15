function selectionSort(arr) {
    let n = arr.length;
    let steps = [];
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        steps.push(arr.slice());
    }
    displaySteps(steps);
}
