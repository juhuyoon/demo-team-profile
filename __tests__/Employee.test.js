const Employee = require('../lib/Employee');

test('When I call the Employee class, it will create an instance object', () => {
	// AAA
	// Arrange
	// Act
	const instanceObject = new Employee();
	// Assert
	expect(typeof instanceObject).toBe('object');
});

test("When I call the getName method, I should see the employee's name", () => {
	// AAA
	// Arrange
	const name = 'Jodi';
	const newObj = new Employee(name);
	// Act
	const newName = newObj.getName();
	// Assert
	expect(newName).toBe(name);
});
