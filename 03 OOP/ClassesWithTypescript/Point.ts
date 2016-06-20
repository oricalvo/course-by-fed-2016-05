class Point {
    protected x: number;
    protected y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class PointEx extends Point {
    private z: number;
    
    constructor(x, y, z) {
        super(x, y);
        
        this.z = z;
    }
    
    dump() {
        console.log(this.x + ", " + this.y + ", " + this.z);
    }
}
