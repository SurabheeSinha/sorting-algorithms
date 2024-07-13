function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        // Find the minimum element in unsorted array
        let min_idx = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap the found minimum element with the first element
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        displayStep(`Step ${i}: ${arr.join(', ')}`);
    }
    document.getElementById('output').innerText = "Selection Sorted Array: " + arr.join(', ');
}