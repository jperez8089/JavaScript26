function start() {
  // follow the directions in the comments
  // print to the index page

  // print your name to the name heading
  document.getElementById("name").innerHTML = "Javier Perez";

  // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp

  //https://www.w3schools.com/js/js_string_methods.asp#mark_length
  // String length: calculate the string length and print to the length paragraph
  let myString = "Be it ever so humble, there is no place like home.";
  document.getElementById("length").innerHTML = myString.length;
  // Escape sequences
  // print a string to the escape paragraph that uses three different escape sequences (look at the web page)

  let escseq =
    'Here \nwe are using "escape" sequences., This is an example of \\ back slash. It\'s nice to use';
  document.getElementById("escape").innerHTML = escseq;
  // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

  // create a variable named 'name' and store your complete name in it

  let name = "Javier N/A Perez";

  // Use the JavaScript slice function to display your first name to first paragraph

  let firstSplice = name.slice(0, 6);
  document.getElementById("first").innerHTML = firstSplice;

  // Use the JavaScript subst Method to display your last name to the last paragraph
  //flopped because i typed  in the wrongf area but works as intended
  let lastSlice = name.substr(11);
  document.getElementById("last").innerHTML = lastSlice;

  // Use the Javascript substring Method to display your middle name to the middle paragraph

  //dont have middle name, not applicable but for the sake of example

  let middleName = name.substring(7, 10);
  document.getElementById("middle").innerHTML = middleName;

  // replacing string content - in the following variable use the replace method to put your major
  // in a new string and print to the major paragraph

  let major = "I'm majoring in Physical Therapy at McHenry County College";
  let otherMajor = major.replace("Physical Therapy", "Information Technology");
  document.getElementById("major").innerHTML = otherMajor;

  // convert the following variable to upper case then print to the upper paragraph
  let myText = "It\'s a great day to be alive!";
  document.getElementById("upper").innerHTML = myText.toUpperCase();
  // Use the trim() method to remove white spaces from the following variable and print to the
  // trim paragraph
  let trimText = "                  McHenry County College                ";

  document.getElementById("trim").innerHTML = trimText.trim();

  // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

  let months =
    "January, February, March, April, May, June, July, August, September, October, November, December";

  document.getElementById("index").innerHTML = months.indexOf("May");

  // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

  // create a template literals for both your first and last name (name the variables first and last)

  let fname = "Javier";
  let lname = "Perez";

  // Use Variable substitutions to create a greeting that incorporates your first and last name and
  let greet = `Hi, this is ${fname} ${lname}.`;
  // print to the greeting paragraph
  document.getElementById("greeting").innerHTML = greet;
}
