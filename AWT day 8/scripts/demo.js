function demoExternalAlert() 
{
    alert("Hello Guys");
}
function demoExternalConfirm() 
{
    if (confirm("Are You Sure??")) 
    {
        alert("yes");
    } 
    else 
    {
        alert("No");
    }
}
function demoExternalPrompt()
{
	var fname = prompt("Enter First Name: ");
	var lname = prompt("Enter Last Name: ");
	alert (fname +" "+ lname);
}