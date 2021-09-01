import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class NextPermutationTest {
    NextPermutation nextPermutation = new NextPermutation();

    @Test
    public void testSamples() {
        int [] sample = new int[] {1 ,2 ,3};
        nextPermutation.nextPermutation(sample);
        assertEquals(Arrays.toString(new int[] {1, 3, 2}), Arrays.toString(sample));

        sample = new int[] {3, 2, 1};
        nextPermutation.nextPermutation(sample);
        assertEquals(Arrays.toString(new int[] {1, 2, 3}), Arrays.toString(sample));

        sample = new int[] {1};
        nextPermutation.nextPermutation(sample);
        assertEquals(Arrays.toString(new int[] {1}), Arrays.toString(sample));

        sample = new int[] {1, 3, 2};
        nextPermutation.nextPermutation(sample);
        assertEquals(Arrays.toString(new int[] {2, 1, 3}), Arrays.toString(sample));

    }
}
