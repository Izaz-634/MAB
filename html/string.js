function stringFunction(){ 
    var y = document.getElementById('my');
var firstName = prompt("Enter your First name: ");
var lastName = prompt("Enter Your Last Name: ");
if(y.style.display == "none"){ 
    y.style.display = "block";
    document.write(firstName + lastName + "<br>");
    document.write(firstName.concat(lastName) + "<br>");
    var fullName = firstName + lastName;

    document.write("The length of Full Name: " + fullName.length + "<br>");
    document.write(fullName.toUpperCase() + "<br>");
    document.write("Char at Position 2 " + fullName.charAt(2) + "<br>");
    document.write("Slice 0 to 3 : "+ fullName.slice(0,3));
}else y.style.display = "none";
}