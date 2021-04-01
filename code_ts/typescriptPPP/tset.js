function merge(nums1, m, nums2, n) {
    var arr1 = nums1.slice(0, m);
    var arr2 = nums2.slice(0, n);
    nums1 = arr1.concat(arr2).sort();
    console.log(arr1, arr2, nums1);
}
;
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0)
