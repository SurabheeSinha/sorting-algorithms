function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            displayStep(`Step ${i}-${j}: ${arr.join(', ')}`);
        }
    }
    document.getElementById('output').innerText = "Bubble Sorted Array: " + arr.join(', ');
}
