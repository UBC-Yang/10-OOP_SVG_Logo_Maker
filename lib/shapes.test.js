const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
    test('Circle', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toBe(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />`);
    });

    test('Square', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toBe(`<rect x="50" width="200" height="200" fill="blue" />`);
    });

    test('Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toBe(`<polygon height="100%" width="100%" points="150,0 25,150 275,150" fill="green" />`);
    });
})