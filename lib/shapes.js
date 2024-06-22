class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
};

class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="150,50 100,150 200,150" fill="${this.color}" />`
    }
};

module.exports = {Circle, Square, Triangle}