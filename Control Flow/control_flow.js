let userRole ="admin";
let accessLevel;
if (userRole==="admin") {
    accessLevel="Full access granted";
} else if (userRole ==="manager") {
    accessLevel ="Limited access granted";

} else {
    accessLevel="No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn=true;
let userMessage;
if (isLoggedIn) {
    if (userRole==="admin") {
        userMessage ="Welcome, Admin";
    } else {
        userMessage = "Welcome, User!";
    }
} else { 
    userMessage ="Please log in to access system.";
}
console.log("User Mesaage:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) 
{
    case "admin":
        userCategory ="Administrator"
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory ="Subscriber";
        break;
    default:
        userCategory="Unknown";
        }
console.log("User Category:", userCategory);