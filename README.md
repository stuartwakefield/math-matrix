# Matrix

  This project contains useful mathematics and algorithms for matrix maths.

  The file `matrix.js` models a Matrix using an immutable object approach.

## Usage

  You can create a new matrix using the following syntax:
  
    new Matrix(cells, cols);

  Where `cells` is an array of all of the items in the Matrix starting from
  the top leftmost cell and working to the right and down, and `cols` is the
  number of columns in the matrix. For example, the following code creates
  a 2 by 2 matrix:
  
    var matrix = new Matrix([1,2,3,4],2);
	
  If this were to be represented in tabular form it would look like:
  
    +---+---+
    | 1 | 2 |
    +---+---+
    | 3 | 4 |
    +---+---+
  
  The following code has the same items but represents them in a 1 by 4 
  matrix.
  
    var matrix = new Matrix([1,2,3,4],1);
	
  That would be represented as follows.
  
    +---+
    | 1 |
    +---+
    | 2 |
    +---+
    | 3 |
    +---+
    | 4 |
    +---+

  To retrieve cell values you can use the `getCell(x, y)` method. Its two
  parameters `x` and `y` are the zero-indexed column and the row 
  respectively. In the first example, `getCell(1,0)` would return `2`, in the
  second an error would be thrown `col[1] does not exist!`.
  
  To check the coordinates are valid you can check against the two methods
  `getWidth()` and `getHeight()`. `x` should be a positive integer less than
  the result of `getWidth()` and `y` should be a positive integer less than
  `getHeight()`.

  