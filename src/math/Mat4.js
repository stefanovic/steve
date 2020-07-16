/***
 Here we create a Mat4 class object
 This is a really basic Matrix4 class used for matrix calculations
 Highly based on https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js and http://glmatrix.net/docs/mat4.js.html

 params :
 @elements (Float32Array of length 16): our matrix array. Default to identity matrix.

 returns :
 @this: our Mat4 class object
 ***/

// TODO lot of (unused at the time) methods are missing

export class Mat4 {
    constructor(
        elements = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]),
    ) {
        this.type = "Mat4";
        this.elements = elements;
    }

    /***
     Sets the matrix values from an array

     params:
     @array (array): an array of at least 16 elements
     ***/
    setFromArray(array) {
        for(let i = 0; i < this.elements.length; i++) {
            this.elements[i] = array[i];
        }
    }

    /***
     Copy another Mat4

     params:
     @matrix (Mat4 class object): matrix to copy
     ***/
    copy(matrix) {
        const array = matrix.elements;
        this.elements[0] = array[0];
        this.elements[1] = array[1];
        this.elements[2] = array[2];
        this.elements[3] = array[3];
        this.elements[4] = array[4];
        this.elements[5] = array[5];
        this.elements[6] = array[6];
        this.elements[7] = array[7];
        this.elements[8] = array[8];
        this.elements[9] = array[9];
        this.elements[10] = array[10];
        this.elements[11] = array[11];
        this.elements[12] = array[12];
        this.elements[13] = array[13];
        this.elements[14] = array[14];
        this.elements[15] = array[15];
    }

    /***
     Simple matrix multiplication helper

     params:
     @matrix (Mat4 class object): Mat4 to multiply with

     returns:
     @result (Mat4 class object): Mat4 after multiplication
     ***/
    multiply(matrix) {
        const a = this.elements;
        const b = matrix.elements;

        let result = new Mat4();

        result.elements[0] = b[0] * a[0] + b[1] * a[4] + b[2] * a[8] + b[3] * a[12];
        result.elements[1] = b[0] * a[1] + b[1] * a[5] + b[2] * a[9] + b[3] * a[13];
        result.elements[2] = b[0] * a[2] + b[1] * a[6] + b[2] * a[10] + b[3] * a[14];
        result.elements[3] = b[0] * a[3] + b[1] * a[7] + b[2] * a[11] + b[3] * a[15];

        result.elements[4] = b[4] * a[0] + b[5] * a[4] + b[6] * a[8] + b[7] * a[12];
        result.elements[5] = b[4] * a[1] + b[5] * a[5] + b[6] * a[9] + b[7] * a[13];
        result.elements[6] = b[4] * a[2] + b[5] * a[6] + b[6] * a[10] + b[7] * a[14];
        result.elements[7] = b[4] * a[3] + b[5] * a[7] + b[6] * a[11] + b[7] * a[15];

        result.elements[8] = b[8] * a[0] + b[9] * a[4] + b[10] * a[8] + b[11] * a[12];
        result.elements[9] = b[8] * a[1] + b[9] * a[5] + b[10] * a[9] + b[11] * a[13];
        result.elements[10] = b[8] * a[2] + b[9] * a[6] + b[10] * a[10] + b[11] * a[14];
        result.elements[11] = b[8] * a[3] + b[9] * a[7] + b[10] * a[11] + b[11] * a[15];

        result.elements[12] = b[12] * a[0] + b[13] * a[4] + b[14] * a[8] + b[15] * a[12];
        result.elements[13] = b[12] * a[1] + b[13] * a[5] + b[14] * a[9] + b[15] * a[13];
        result.elements[14] = b[12] * a[2] + b[13] * a[6] + b[14] * a[10] + b[15] * a[14];
        result.elements[15] = b[12] * a[3] + b[13] * a[7] + b[14] * a[11] + b[15] * a[15];

        return result;
    }

    /***
     Simple matrix multiplication helper
     TODO not working??

     params:
     @matrix (Mat4): Mat4 to multiply with

     returns:
     @result (Mat4): Mat4 after mulitplication
     ***/
    multiplyMatrices(firstMatrix, secondMatrix) {
        const a = firstMatrix.elements;
        const b = secondMatrix.elements;
        
        const a11 = a[0], a12 = a[4], a13 = a[8], a14 = a[12];
        const a21 = a[1], a22 = a[5], a23 = a[9], a24 = a[13];
        const a31 = a[2], a32 = a[6], a33 = a[10], a34 = a[14];
        const a41 = a[3], a42 = a[7], a43 = a[11], a44 = a[15];
        
        const b11 = b[0], b12 = b[4], b13 = b[8], b14 = b[12];
        const b21 = b[1], b22 = b[5], b23 = b[9], b24 = b[13];
        const b31 = b[2], b32 = b[6], b33 = b[10], b34 = b[14];
        const b41 = b[3], b42 = b[7], b43 = b[11], b44 = b[15];

        this.elements[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        this.elements[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        this.elements[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        this.elements[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

        this.elements[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        this.elements[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        this.elements[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        this.elements[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

        this.elements[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        this.elements[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        this.elements[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        this.elements[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

        this.elements[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        this.elements[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        this.elements[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        this.elements[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return this;
    }


    /***
     Simple Mat4 scaling helper

     params :
     @vector (Vec3 class object): Vec3 representing scale along X, Y and Z axis

     returns :
     @result (Mat4 class object): Mat4 after scaling
     ***/
    scale(vector) {
        let a = this.elements;
        let result = new Mat4();

        result.elements[0] = vector.x * a[0 * 4 + 0];
        result.elements[1] = vector.x * a[0 * 4 + 1];
        result.elements[2] = vector.x * a[0 * 4 + 2];
        result.elements[3] = vector.x * a[0 * 4 + 3];
        result.elements[4] = vector.y * a[1 * 4 + 0];
        result.elements[5] = vector.y * a[1 * 4 + 1];
        result.elements[6] = vector.y * a[1 * 4 + 2];
        result.elements[7] = vector.y * a[1 * 4 + 3];
        result.elements[8] = vector.z * a[2 * 4 + 0];
        result.elements[9] = vector.z * a[2 * 4 + 1];
        result.elements[10] = vector.z * a[2 * 4 + 2];
        result.elements[11] = vector.z * a[2 * 4 + 3];

        if(a !== result.elements) {
            result.elements[12] = a[12];
            result.elements[13] = a[13];
            result.elements[14] = a[14];
            result.elements[15] = a[15];
        }

        return result;
    }


    /***
     Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     Equivalent for applying translation, rotation and scale matrices but much faster
     Source code from: http://glmatrix.net/docs/mat4.js.html

     params :
     @translation (Vec3 class object): translation vector
     @quaternion (Quat class object): rotation quaternion
     @scale (Vec3 class object): scale vector
     @origin (Vec3 class object): origin vector around which to scale and rotate

     returns :
     @this (Mat4 class object): matrix after transformations
     ***/
    composeFromOrigin(translation, quaternion, scale, origin) {
        let matrix = this.elements;

        // Quaternion math
        const x = quaternion.elements[0], y = quaternion.elements[1], z = quaternion.elements[2], w = quaternion.elements[3];

        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;

        const xx = x * x2;
        const xy = x * y2;
        const xz = x * z2;
        const yy = y * y2;
        const yz = y * z2;
        const zz = z * z2;

        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;

        const sx = scale.x;
        const sy = scale.y;
        const sz = scale.z; // scale along Z is always equal to 1 anyway

        const ox = origin.x;
        const oy = origin.y;
        const oz = origin.z;

        const out0 = (1 - (yy + zz)) * sx;
        const out1 = (xy + wz) * sx;
        const out2 = (xz - wy) * sx;
        const out4 = (xy - wz) * sy;
        const out5 = (1 - (xx + zz)) * sy;
        const out6 = (yz + wx) * sy;
        const out8 = (xz + wy) * sz;
        const out9 = (yz - wx) * sz;
        const out10 = (1 - (xx + yy)) * sz;

        matrix[0] = out0;
        matrix[1] = out1;
        matrix[2] = out2;
        matrix[3] = 0;
        matrix[4] = out4;
        matrix[5] = out5;
        matrix[6] = out6;
        matrix[7] = 0;
        matrix[8] = out8;
        matrix[9] = out9;
        matrix[10] = out10;
        matrix[11] = 0;
        matrix[12] = translation.x + ox - (out0 * ox + out4 * oy + out8 * oz);
        matrix[13] = translation.y + oy - (out1 * ox + out5 * oy + out9 * oz);
        matrix[14] = translation.z + oz - (out2 * ox + out6 * oy + out10 * oz);
        matrix[15] = 1;

        return this;
    }
}