const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee');
const makePage = require('./src/page-template');

const distFolder = path.resolve('__dirname', 'dist');
const distPath = path.join(distFolder, 'employee.html');

const startApp = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: "What's your name dawg",
			},
			{
				type: 'input',
				name: 'email',
				message: "What's your email dawg",
			},
			{
				type: 'input',
				name: 'id',
				message: "What's your ID dawg",
			},
		])
		.then((res) => {
			console.log(res);
			const newEmployee = new Employee(res.name, res.id, res.email);
			console.log(makePage(newEmployee));
			fs.writeFileSync('./dist/employee.html', makePage(newEmployee), 'utf-8');
		});
};

startApp();
