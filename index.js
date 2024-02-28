function solution(A, K) {
    // Check if the array is empty or has only one element
    if (A.length <= 1) {
        return A;
    }

    // Normalize the rotation steps to avoid unnecessary rotations
    const rotations = K % A.length;

    // Rotate the array using Array.slice
    const rotatedArray = A.slice(-rotations).concat(A.slice(0, -rotations));

    return rotatedArray;
}
