interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	contract: boolean;
	[key: string]: any;
}
interface Director extends Teacher {
	numberOfReports: number;
}
const teacher2: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false,
};
const director1: Director = {
	firstName: 'Elochukwu',
	fullTimeEmployee: true,
	lastName: 'Demian',
	location: 'london',
	contract: true,
	numberOfReports: 14,
};
function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}.${lastName}`;
};
interface studentclassinterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}
interface studentclassconstructor {
	new (firstName: string, lastName: string): studentclassinterface;
}
class StudentClass implements studentclassinterface {
	firstName: string; 
	lastName: string;
	constructor (firstName: string, lastName: string)
	{
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework() {
		return "Currently working";
	}
	displayName() {
		return this.firstName;
	}
}
// should print
// // Object
// // contract: false
// // firstName: "John"
// // fullTimeEmployee: false
// // lastName: "Doe"
// // location: "London"
