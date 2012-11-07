# Matrix

  This project contains useful mathematics and algorithms for matrix maths.

  The file `matrix.js` models a Matrix using an immutable object approach.
  
    var matrix = new Matrix([1,2,3,4],2);
	
  The above code creates a 2 x 2 matrix which represented in tabular form 
  would look like:
  
    +---+---+
	| 1 | 2 |
	+---+---+
	| 3 | 4 |
	+---+---+
  
  The following code:
  
    var matrix = new Matrix([1,2,3,4],1);
	
  Creates a matrix:
  
    +---+
	| 1 |
	+---+
	| 2 |
	+---+
	| 3 |
	+---+
	| 4 |
	+---+
	
  And the following code:
  
    var matrix = new Matrix([1,2,3,4],4);
	
  Creates a matrix:
  
    +---+---+---+---+
	| 1 | 2 | 3 | 4 |
	+---+---+---+---+
  