function Matrix(items, mod) {
	if(items.length % mod !== 0)
		throw new Error("The matrix is irregular");
	
	this._a = items;
	this._w = mod;
	this._h = items.length / mod;
}

Matrix.prototype.getWidth = function() {
	return this._w;
};

Matrix.prototype.getHeight = function() {
	return this._h;
};

Matrix.prototype.getCell = function(x, y) {
	var p = y * this.getWidth() + x;
	
	if(x >= this.getWidth())
		throw new Error("col[" + x + "] does not exist!");
	else if(y >= this.getHeight())
		throw new Error("row[" + y + "] does not exist!");
		
	return this._a[p];	
};

Matrix.multiply = function(a, b) {
	var r = [];
	
	// If the width of the first matrix does not
	// match the height of the second matrix you
	// cannot multiply the two together
	if(a.getWidth() !== b.getHeight())
		throw new Error("The matrices are not multipliable");
		
	// Get the length, this is the mutual length
	// that is the width of the first matrix and
	// the height of the second
	var l = a.getWidth();
	
	// Get the width of the new matrix, this will
	// be the same as the width of the second
	// matrix
	var w = b.getWidth();
	
	// Get the height of the new matrix, this will
	// be the same as the height of the new matrix
	var h = a.getHeight();
	
	// Calculate the product matrix, the outer loop
	// traverses the height of the first matrix
	for(var i = 0; i < h; ++i) {
	
		// The middle loop traverses the width of
		// the second matrix
		for(var j = 0; j < w; ++j) {
			var s = 0;
			
			// The inner loop traverses the mutual
			// length of the matrixes, the width of
			// the first and the height of the second
			for(var k = 0; k < l; ++k) {
				s += a.getCell(k, i) * b.getCell(j, k);
			}
			
			// Push the product into the new matrix
			r.push(s);
		}
	}
	
	// Return a new matrix as the result
	return new Matrix(r, w);
};

Matrix.prototype.multiply = function(matrix) {
	return Matrix.multiply(this, matrix);
};