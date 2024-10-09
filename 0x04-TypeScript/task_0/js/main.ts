interface Student {
	firstname: string,
	lastname: string,
	age: number,
	location: string
};
const student1: Student = {
	firstname: "daniel",
	lastname: "john",
	age: 15,
	location: "lagos"
};
const student2: Student = {
	firstname: "james",
	lastname: "clark",
	age: 17,
	location: "Abia"
};
const studentsList: Student[] = [student1, student2];
const table = document.createElement("table");
studentsList.forEach((student) => {
	const row = table.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);
	const cell3 = row.insertCell(2);
	const cell4 = row.insertCell(3);

	cell1.textContent = student.firstname;
	cell2.textContent = student.lastname;
	cell3.textContent = student.age.toString();
	cell4.textContent = student.location;
});
document.body.appendChild(table);
