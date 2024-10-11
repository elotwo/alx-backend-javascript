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
// should print
// // Object
// // contract: false
// // firstName: "John"
// // fullTimeEmployee: false
// // lastName: "Doe"
// // location: "London"
