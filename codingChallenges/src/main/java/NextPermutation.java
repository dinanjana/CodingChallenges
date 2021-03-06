import java.util.Arrays;

public class NextPermutation {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0) {
            if (nums[i] < nums[i + 1]) {
                break;
            }
            i--;
        }

        if (i >= 0) {
            int j = nums.length - 1;
            while (j >= 0) {
                if (nums[j] > nums[i]) {
                    swap(nums, i, j);
                    break;
                }
                j--;
            }
        }

        reverse(nums, i + 1);
    }
    
    public void swap(int [] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public void reverse(int [] nums, int i) {
        int j = nums.length - 1;
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }
}
