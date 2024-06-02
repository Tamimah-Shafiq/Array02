//Assignment 4: Student List Organizer
//Learning Objective: Get comfortable with data structures (objects and arrays) and basic
//functions in TypeScript.
//Tasks:
//1. Student Data: The provided code defines an interface named Student that describes
//student information like name, senior status (true/false), and whether they've completed
//their assignments (true/false).
//o Imagine this as a template for organizing student details.
//2. Student List:
//o An array named students stores information about several students using the
//Student template. Think of this array as your class list!
//3. Find Senior Students with Assignments (Optional):
//o The code (not shown here) has a function that might find students who are seniors
//and have completed their assignments.
//o Can you guess why this information might be helpful?
//4. Class List Update:
//o Imagine you need to update your class list! The code (not shown here) might have
//a function that removes students who haven't completed their assignments
//(assuming only seniors are responsible).
//o Can you think of any reasons why this might be useful (consider limitations)

interface student {
    name: string;
     senior: boolean ;
     completedAssignments: boolean;
};
const students: student[] =[
{
    name :"Amna",
    senior:true,
    completedAssignments:true
},
{
    name:"Sehrish",
    senior:true,
    completedAssignments:false,
},
{
    name:"Hamna",
    senior:false,
    completedAssignments:true,
},
{

    name:"Rabail",
    senior:true,
    completedAssignments:true,
},
];

function findSeniorStudentsWithCompletedAssignments(students: student[]): student[] {
    return students.filter(student => student.senior && student.completedAssignments);
};
const seniorStudentsWithCompletedAssignments =findSeniorStudentsWithCompletedAssignments(students);
console.log("Senior students with completed assignments:", seniorStudentsWithCompletedAssignments);

function updateClassList(students: student[]): student[] {
    return students.filter(student => !student.senior || student.completedAssignments);
}
