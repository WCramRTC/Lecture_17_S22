// functions
// public static int MethodName(int a, int b) {
//     return a + b;
// }

const btnTest = document.getElementById("btnTest");
const numbers = document.getElementsByClassName("number");
const display = document.getElementById("display");
// Array
const arr = [ "What", "Is", "This" , 15, true, "funkiness" ];
// arr[0]= "Hi";
// arr[1]= "There";
// arr.push("How");
// arr[10] = "wth";
arr.push("Stuff");

let student = { firstName: "Will", lastName: "Cram", studentID: 1232354235};
let car = { make: "Hyundai", model: "Sonata"};
arr.push(student);

arr["87839284738"] = "Will";

// Event Listener
btnTest.addEventListener('click', function() {
    display.innerText = "";
    // alert(`First name is ${student.firstName} ${student.lastName}`);

    // backtick, grave, ` ${}
    alert(arr[arr.length - 1].firstName);
    arr.forEach(element => display.innerHTML += element + "<br>");

    // display.innerText += arr[0];
    // display.innerText += arr[1];
    // display.innerText += arr[2];


    // let total = 0;
    // let num1 = parseInt(numbers[0].value);
    // let num2 = parseInt(numbers[1].value);
    // // foreach
    // // for(let i = 0; i < numbers.length; i++) {
    // //     total += parseInt(numbers[i].value);
    // // }
    // alert(AddTwo(num1, num2));

});


function AddTwo(a, b) {
    // return a value
    return a + b;
}




// const arr = [];
// arr[0] = 1;
// arr[1] = "string";
// arr[5] = true;
// // arr["donkey"] = "cat";

// let person = {firstName: "Will", lastName: "Cram"};

// alert(`Hello ${person.firstName} ${person.lastName}`);

// arr.forEach(element => console.log(element));