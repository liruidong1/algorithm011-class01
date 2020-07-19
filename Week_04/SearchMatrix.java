package binarySearch;

public class SearchMatrix {

    public boolean searchMatrix(int[][] matrix, int target) {
        int m, n;
        if (matrix == null || (n = matrix.length) < 1) {
            return false;
        }

        m = matrix[0].length;
        if(m < 1) {
            return false;
        }

        int nTop = 0, nBottom = n - 1, nMid = 0;
        int midHead, midTail;
        int[] row;

        while (nTop <= nBottom) {
            if (matrix[nBottom][0] < target) {
                //在最后一行查找
                row = matrix[nBottom];
                return search(target, m, row);
            } else {
                //找到中间行
                nMid = (nBottom + nTop) / 2;
                row = matrix[nMid];
                if (nTop == nBottom) {
                    //找到了同一行
                    return search(target, m, row);
                } else {
                    midHead = row[0];
                    if (midHead < target) {
                        midTail = row[m - 1];

                        if (midTail > target) {
                            return search(target, m, row);
                        } else if (midTail < target) {
                            //向下查找下一个行区间
                            nTop = nMid + 1;
                        } else {
                            return true;
                        }
                    } else if (midHead > target) {
                        //向上查找下一个行区间
                        nBottom = nMid - 1;
                    } else {
                        return true;
                    }
                }
            }

        }

        return false;
    }

    private boolean search(int target, int m, int[] row) {
        int mLeft;
        int mRight;
        int mMid;
        mLeft = 0;
        mRight = m - 1;
        while (mLeft <= mRight) {
            mMid = (mRight + mLeft) / 2;
            if (row[mMid] > target) {
                mRight = mMid - 1;
            } else if (row[mMid] < target) {
                mLeft = mMid + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
