//CHAPTER 21-25

//TASK 1

// var firstName = prompt("Enter your first name")
// var secondName = prompt("Enter your second name")

// var fullName = firstName  +  secondName
// document.write("Hello " +  fullName)


//TASK 2

// var mobile = prompt("Enter you favourite mobile phone")

// var length = mobile.length

// document.write("My favourite mobile is : " + mobile)
// document.write("<br> Length of string is : "  + length)

//TASK 3

// var string = "Pakistani"
// var ind = string.indexOf("n")

// document.write("String : " + string)
// document.write("<br> Index of n is : " + ind)

//TASK 4

// var string = "Hello World"
// var ind = string.lastIndexOf("l")

// document.write("String : " + string)
// document.write("<br> Index of n is : " + ind)

//TASK 5

// var string = "Pakistani"
// var ind = string.indexOf("i")

// document.write("String : " + string)
// document.write("<br> Index of n is : " + ind)

//TASK 6

// var firstName = prompt("Enter your first name")
// var secondName = prompt("Enter your second name")

// var fullName = firstName.concat(secondName)
// document.write("Hello " +  fullName)

//TASK 7

// var city = "Hyderabad"
// var rep = city.replace("Hyder" , "Islam")

// document.write("City : " + city)
// document.write("<br> After replacement : " + rep) 

//TASK 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g , "&")

// document.write("Message : " + message)
// document.write("<br> After replacement : " + rep)

//TASK 9

// var string = "472"
// var type1 = typeof(string)


// document.write("Value : " + string)
// document.write("<br> Type : " + type1)

// var number = 472
// var type2 = typeof(number)


// document.write(" <br> Value : " + number)
// document.write("<br> Type : " + type2)



//TASK 10

// var user = prompt("Enter a string in small letters")
// var upper = user.toUpperCase()

// document.write("User input : " + user)
// document.write(" <br> Upper Case : " + upper)

//TASK 11

// var user = prompt("Enter a string in capital letters")
// var lower = user.toLowerCase()

// document.write("User input : " + user)
// document.write(" <br> Upper Case : " + lower)

//TASK 12

// var number = 35.36
// var result = number.toString()

// document.write("Number : " + number)
// document.write(" <br> Result : " + result)

//TASK 13

// var name = prompt("Enter your name")
// if (name.indexOf('.') !== -1 || name.indexOf('@') !== -1 || name.indexOf(',') !== -1 || name.indexOf('!') !== -1) {
//     document.write('Please enter valid username')
// }
// else {
//     document.write(name)
// }


//TASK 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]

// var user_input = prompt("Welcome to ABC bakery ! What do you want to order Sir/Mam'm");
// var b = user_input.toLowerCase()

// if (a.indexOf(b) !== -1) {
//     document.write(b + "  is Available at " + a.indexOf(b))
// } 
// else {
//     document.write(b + "  is not  Available in out bakery ")

// }

//TASK 15

// var pass = prompt("Enter your password")
// if (pass[0] >= 0) {
//     document.write("Password can not begin with a number")
//     document.write(" <br> Please enter a valid password")
// }
// else if (pass.length > 6) {
//     document.write("Password must be of 6 characters")
//     document.write(" <br> Please enter a valid password")  
// }
// else {
//     document.write("Your password is correct")
// }


//TASK 16

// var uni = "University of Karachi"
// var splitted = uni.split('')
// console.log(splitted, 'splitted')
// for (i = 0 ; i < splitted.length ; i++) {
//     document.write(splitted[i] + '<br />')
// }


//TASK 17

// var user = prompt("Enter any string")
// var splitted = user.split('')
// var lastChar = splitted[splitted.length -1]

// document.write("User Input : " + user)
// document.write(" <br> Last character of input : " + lastChar)

//TASK 18

// var Sentence = ("the quick brown fox jumps over the lazy dog ");
// document.write("Text :   " + Sentence + "<br>")

// FindWord = "the";
// var x = 0,
//     y = 0;

// for (i = 0; i < Sentence.length; i++) {
//     if (Sentence[i] == FindWord[0]) {
//         for (j = i; j < i + FindWord.length; j++) {
//             if (Sentence[j] == FindWord[j - i]) {
//                 y++;
//             }
//             if (y == FindWord.length) {
//                 x++;
//             }
//         }
//         y = 0;
//     }
// }

// document.write("There are   " + x + "   occerence(s) of the word  " + "'the'.")

//CHAPTER 26-30

//TASK 1

// var number = +prompt("Enter a positive number")
// var round = Math.round(number)
// var floor = Math.floor(number)
// var ceil = Math.ceil(number)

// document.write("Number : " + number)
// document.write(" <br> Round off value : " + round)
// document.write(" <br> floor value : " + floor)
// document.write(" <br> ceil value : " + ceil)

//TASK 2

// var number = +prompt("Enter a negative number")
// var round = Math.round(number)
// var floor = Math.floor(number)
// var ceil = Math.ceil(number)

// document.write("Number : " + number)
// document.write(" <br> Round off value : " + round)
// document.write(" <br> floor value : " + floor)
// document.write(" <br> ceil value : " + ceil)

//TASK 3
//TASK 4

// var random1 = Math.random()
// var dice1 = (random1 * 3) + 1 
// var first = Math.floor(dice1)

// var random2 = Math.random()
// var dice2 = (random2 * 5) + 1 
// var second = Math.floor(dice2)

// document.write("Random dice value : " + first)
// document.write(" <br> Random dice value : " + second)

//TASK 5

// var head = "Heads"
// var tail = "Tails" 
// var random = Math.random()
// var toss = random * 2 
// var first = Math.floor(toss)

// if(first === 0) {
//     document.write(first)
//     document.write(" <br> Random coin value : " + head)
// }
// else {
//     document.write(first)
//     document.write("<br> Random coin value : " + tail)
// }

//TASK 6

// var randomNumber = Math.floor(Math.random() * 101);
// document.write("Random number between 1 and 100 is : " + randomNumber)

//TASK 7

// var weight = prompt("Enter your weight in kilograms");
// var qualifyingWeight = parseInt(weight);
// document.write("Your weight is : " + qualifyingWeight + " kilograms")

//TASK 8

// var number = +prompt("Enter a number")
// var randomNumber = Math.floor(Math.random() * 10);

// if(number === randomNumber) {
//     alert("Congrats your number is correct")
// }
// else {
//     alert("Try again")
// }

//CHAPTER 31-34

//TASK 1

// var date = Date()
// document.write(date)

//TASK 2

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// alert("Current Month : " + n)

//TASK 3

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// var a = n.slice(0,3)
// alert(a)

//TASK 4

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[d.getDay()];
// if(n === "Saturday"  || n === "Sunday") {
//     alert("Its Fun Day")
// }
// else {
//     alert("Its Works Day")
// }

//TASK 5

// var d = new Date
// var days = d.getDate()
// if (days <= 15) {
// document.write("First fifteen days of month")
// }
// else {
//     document.write("Last days of month")
// }

//TASK 6

// var d = new Date()
// var a = d.getTime()
// var b = a/1000

// document.write("Current Date : " + d)
// document.write("<br> Elapsed millisecond since January 01, 1970 : " + a)
// document.write("<br>  Elapsed minutes since January 01, 1970 : " + b)

//TASK 7

// var d = new Date()
// var a = d.getHours()
// if(a <= 12) {
// document.write("It's AM")
// }
// else {
//     document.write("It's PM")
// }

//TASK 8

// var d = new Date("Dec 31,2020")
// document.write(d)

//TASK 9

// var a = new Date()
// var thisRamzan = a.getTime()

// var b = new Date("Jun 18, 2015")
// var pastRamzan = b.getTime()

// var diff = thisRamzan - pastRamzan 

// var convert = diff/(1000 * 60 * 60 * 24 )
// var result = Math.floor(convert)
// alert(result + " days have passed since 1st Ramdan, 2015")

//TASK 10

// var a = new Date("Jan 01, 2015")
// var beg = a.getTime()

// var b = new Date("Dec 05, 2015")
// var reference  = b.getTime()

// var diff = reference - beg 

// var convert = diff / 1000
// var result = Math.floor(convert)
// alert("On reference date " + b   +    result + " seconds had passed since beginning of 2015")

//TASK 11

// var a = new Date()
// var b = a.getHours()
// var c = new Date("Jun 20, 2020, 20:22:34")
// document.write("Current Date : " + a)
// document.write(" <br> 1 hour ago, it was : " + c)


//TASK 12

// var a = new Date("Jan 01, 2020")
// var b = new Date("Jan 01, 1920")
// document.write("Current date : " + a)
// document.write(" <br> 100 years back, it was : " + b)

//TASK 13

// var age = +prompt("What is your age :")


// var a = new Date()
// var b = a.getFullYear()
// var date = a.getMonth()
// var year = b - age


// var c = new Date("Jun 20, " + year)
// var birthYear = c.getFullYear()


// document.write("Your age is : " + age)
// document.write(" <br> Your birth year is :" + birthYear)

//TASK 14

// var name = prompt("What is your name :")
// var month = prompt("Of which month you have to pay bill :")
// var numberUnits = prompt("how many units you use :")
// var charge = 16
// var netAmount = numberUnits * charge 
// var lateAmount = 350
// var grossAmount = netAmount + lateAmount

// document.write("Customer Name : " + name)
// document.write(" <br> Current month : " + month)
// document.write(" <br> Numbers of unit : " + numberUnits)
// document.write(" <br> Charges per unit : " + charge)
// document.write(" <br> Net Amount Payable (within Due Date) : " + netAmount)
// document.write(" <br> Late Payment Surcharge : " + lateAmount)
// document.write(" <br> Gross Amount Payable (after Due Date) : " + grossAmount)

//CHAPTER 35-38

//TASK 1

// var a = new Date()
// document.write(a)

//TASK 2

// function greetUser(firstName, lastName) {
//     var a = firstName + lastName
//     alert("Hello " + a)
// }

// greetUser("Hasan","raza")

//TASK 3

// function add() {
//     var a = +prompt("Enter first number :")
//     var b = +prompt("Enter second number :")

//     var c = a + b;
//     alert(c)
// }

// add()

//TASK 4

// function calc(num1, opr, num2) {
//     if (opr === "+") {
//         alert(num1 + num2)
//     }
//     else if (opr === "-") {
//         alert(num1 - num2)
//     }
//     else if (opr === "*") {
//         alert(num1 * num2)
//     }
//     else if (opr === "/") {
//         alert(num1 / num2)
//     }
//     else {
//         alert("Invalid operator")
//     } 
// }

// calc(6,"*",7)

//TASK 5

// function square(a) {
//     alert(a  *  a)
// }

// square(5)

//TASK 6

// function factorialize(num) {
//     if (num === 0 || num === 1)
//         return 1;
//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i;


//     }
//     return num;
// }
// no = +prompt("Enter a no: ")
// a = factorialize(no);
// document.write("Factorial of the " + no + " is " + a)


//TASK 7

// function counting() {
//     var a = +prompt("Enter starting number")
//     var b = +prompt("Enter ending number ")

//     for (i = a; i <= b; i++) {
//     document.write(i + "<br />")
//     }
// }
// counting()

//TASK 8

// function calculateHypotenuse(base, Prependicular) {
//     function calculateSquare(side) {
//         return side * side;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(Prependicular));
// }

// Base = +prompt("Enter base of the Traiangle")
// Prep = +prompt("Enter prependicular of the Traiangle")

// document.write("Hypotenuse of triangle is :  " + calculateHypotenuse(Base, Prep));

//TASK 9

// function area(width = 5, height = 7) {
//     var a = width * height
//     alert(a)
// }

// area(7,8)

//TASK 10

// function palindrome() {
//     var word = prompt("Enter your word")
//     var check="";
//     for (var i = word.length -1; i >=0; i-- ) {
//         check += word[i]
//     }
//     if (word === check){
//         document.write(word + " is palindrome")
//     }
//     else {
//         document.write(word + " is not palindrome")
//     }

// }

// palindrome()

//TASK 11

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }

//  document.write(titleCase("I'm a little tea pot"));    

//TASK 12

// function longestWord(string) {
//     var SplitedString = string.split(" ");
//     var longestWord = 0;

//     for (var i = 0; i < SplitedString.length - 1; i++) {
//         if (longestWord < SplitedString[i].length) {
//             longestWord = SplitedString[i].length;
//             var FindWord = SplitedString[i];
//         }
//     }
//     return FindWord;
// }
// SentenceORWord = prompt("Enter a Sentence or word : ")
// document.write(longestWord(SentenceORWord))

//TASK 13

// function LetterFinder(Strings, Letter) {
//     var x = 0,
//         y = 0;

//     for (i = 0; i < Strings.length; i++) {
//         if (Strings[i] == Letter[0]) {
//             for (j = i; j < i + Letter.length; j++) {
//                 if (Strings[j] == Letter[j - i]) {
//                     y++;
//                 }
//                 if (y == Letter.length) {
//                     x++;
//                 }
//             }
//             y = 0;
//         }
//     }
//     document.write("There are   " + x + "   occerence(s) of the word  " + Letter)
// }
// Strings = prompt("Enter a String : ")
// Letter = prompt("Enter a Letter which you want to find")
// LetterFinder(Strings, Letter)

//TAS 14

// function calcCircumference(radius) {
//     var a = 2 * 3.142 * radius
//     document.write("The circumference is : " + a)
// }
// calcCircumference(4)

// function calcArea(radius) {
//     var a = 3.142 * (radius * radius)
//     document.write("The area is : " + a)
// }
// calcArea(2)


//CHAPTER 38-42

//TASK 1

// function power(a, b) {
//     var c =  a ** b
//     return c
// }
// alert(power(2,5))

//TASK 2

// function leap(){
//     var a = prompt("Enter any year")
//     if(a % 4 === 0){
//         alert("Your year is in the list of leap years")
//     }
//     else {
//         alert("Your year is not in the list of leap years")
//     }
// }
// leap()

//TASK 3

// var a = +prompt("Enter first side of triangel")
// var b = +prompt("Enter second side of triangel")
// var c = +prompt("Enter third side of triangel")

// function sides(){
//     var s = (a + b + c) / 2
//     return s
// }


// function areaOfTriangle(){
//     var area = sides()
//     var total = area * (area - a) * (area - b) * (area - c)
//     return total

// }
// alert (areaOfTriangle())

//TASK 4

// var sub1 = +prompt("Enter your first subject marks out of hundred ")
// var sub2 = +prompt("Enter your second subject marks out of hundred ")
// var sub3 = +prompt("Enter your third subject marks out of hundred ")

// function average(){
//     var ave = (sub1 + sub2 + sub3) / 3
//     return ave
// }

// function percentage(){
//     var per = (sub1 + sub2 + sub3)  * 100 / 300 ;
//     return per   
// }
// function main(){
//     document.write("The marrks of first subject is : " + sub1 + "<br>")
//     document.write("The marrks of second subject is : " + sub2 + "<br>")
//     document.write("The marrks of third subject is : " + sub3 + "<br>")
//     var a = average()
//     var b = percentage()
//     document.write("The average of all subject is : " + a + "<br>")
//     document.write("The percentage of all subject is : " + b + "%")

// }

// main()

//TASK 5


// function IndexOf(para,char){
//     split = para.split('')
//     for(var i = 0;i < split.length; i++){
//         if(split[i] === char){
//             document.write( "<br>" + "The index of " + split[i] + " is " +  i)
//         }
//     }
// }

// var para = prompt("Enter any sentence")
// var char = prompt("Enter any charachter for index")
// IndexOf(para,char)




//TASK 6

// var string = "The Winner of ICC World Cup 2019 is England"
// string = string.toLowerCase()
// var split = string.split('')  
// for(var i = 0; i < split.length; i++){
//     if(split[i] === "a" || split[i] === "e" ||split[i] === "i" || split[i] === "o" || split[i] === "u"){
//         delete split[i]
//     }
// }

// document.write("With vowels = " + string + "<br>")
// document.write("Without vowels = " + split)

//TASK 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
//     document.write("String = " + str + "<br>")

//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }

//     return count
//   }

//   document.write("Occurrence of Vowels = " + findOccurrences());

//TASK 8

// var distance = +prompt("Enter distance between Karachi and Lahore in Km")
// function meter(){
//     var met = distance * 1000
//     return met 
// }
// function foot(){
//     var feet = distance * 3280.84
//     return feet 
// }
// function inches(){
//     var inc = distance * 39370.
//     return inc
// }
// function centimeters(){
//     var cm = distance * (1000 * 100)
//     return cm
// }
// document.write("The distance between Karachi and Lahore in meter is = " + meter() + "<br>")
// document.write("The distance between Karachi and Lahore in feet is = " + foot() + "<br>")
// document.write("The distance between Karachi and Lahore in inches is = " + inches() + "<br>")
// document.write("The distance between Karachi and Lahore in centimeter is = " + centimeters())

//TASK 9

// var salary = +prompt("Enter your salary")
// var workTtime = +prompt("Enter your workTime 40 hours or above")
// var hours = 40
// var rate = 12

// function overTime() {
//     if (workTtime <= 40) {
//         document.write(salary)
//     }
//     else{
//         var a = (workTtime - hours) * rate
//         var b = salary + a
//         document.write("<br>" + "Your salary with over time is " + b )
//     }
// }

// overTime()

//TASK 10

// function notes(amount){
//     var note1000 = Math.floor(amount / 1000)
//     var remain1000 =  amount - (note1000 * 1000)
//     document.write("There are " + note1000 + "notes of thousand in " + amount + "<br>" )


//     var note500 = Math.floor(remain1000 / 500)
//     var remain500 =  remain1000 - (note500 * 500)
//     document.write("There are " + note500 + "notes of Five Hundred in " + amount + "<br>" )

//     var note100 = Math.floor(remain500 / 100)
//     var remain100 =  remain500 - (note100 * 100)
//     document.write("There are " + note100 + "notes of Hundred in " + amount + "<br>" )

//     var note20 = Math.floor(remain100 / 20)
//     var remain20 =  remain100 - (note20 * 20)
//     document.write("There are " + note20 + "notes of Twenty in " + amount + "<br>" )

//     var note10 = Math.floor( remain20/ 10)
//     var remain10 =  remain20 - (note10 * 10)
//     document.write("There are " + note10 + "notes of Ten in " + amount + "<br>" )
// }
// var amount = +prompt("Enter any amount above 1000")
// notes(amount)

//CHAPTER 43-48

//TASK 1


// function greet(){
//     alert("Hello world")
// }

//TASK 2

// function thanks(){
//  alert("Thanks for purchasing mobile from us")
// }

//TASK 3

// function dltFirst() {
//     var table = document.getElementById("first")
//     table.style.display = "none"
// }
// function dltSecond() {
//     var table = document.getElementById("second")
//     table.style.display = "none"
// }
// function dltThird() {
//     var table = document.getElementById("third")
//     table.style.display = "none"
// }
// function dltFourth() {
//     var table = document.getElementById("four")
//     table.style.display = "none"
// }
// function dltFifth() {
//     var table = document.getElementById("five")
//     table.style.display = "none"
// }
// function dltSix() {
//     var table = document.getElementById("six")
//     table.style.display = "none"
// }
// function dltSeven() {
//     var table = document.getElementById("seven")
//     table.style.display = "none"
// }
// function dltEight() {
//     var table = document.getElementById("eight")
//     table.style.display = "none"
// }
// function dltNine() {
//     var table = document.getElementById("nine")
//     table.style.display = "none"
// }
// function dltTen() {
//     var table = document.getElementById("ten")
//     table.style.display = "none"
// }


//TASK 4

// function mouseOver(){
//     var image = document.getElementById("image")
//     image.src = "mob2.jpg"
// }
// function mouseOut(){
//     var image = document.getElementById("image")
//     image.src = "mob1.jpg"
// }

//TASK 5


// count = 0
// function increase(){
// count++
//     var cd = document.getElementById("countdown")
//     cd.innerHTML = count
// }
// function decrease(){
// count--
//     var cd = document.getElementById("countdown")
//     cd.innerHTML = count
// }

// CHAPTER 49-52

//TASK 1

// function content(){
//     var email = document.getElementById("email")
//     first.innerHTML = "Email = " + email.value

//     var pass = document.getElementById("pass")

//     second.innerHTML = "Pass = " + pass.value

//     var container = document.getElementById("container")
//     container.style.display = "none"

//     var cont = document.getElementById("content")
//     cont.style.display = "block"


// }

//TASK 2

// function readMore(){
//     var more = document.getElementById("more")
//     more.style.display = "block"
// }

//TASK 3

// var info = document.getElementById("info")

// function data() {
//     var fname = document.getElementById("fname")
//     var lname = document.getElementById("lname")
//     var email = document.getElementById("email")
//     var pass = document.getElementById("pass")
//     console.log(fname.value)
//     var tr = document.createElement("tr")

//     var th1 = document.createElement("th")
//     var th2 = document.createElement("th")
//     var th3 = document.createElement("th")
//     var btn = document.createElement("button")
//     var edit = document.createElement("button")
      
//     var th1Text = document.createTextNode(fname.value)
//     var th2Text = document.createTextNode(lname.value)
//     var th3Text = document.createTextNode(email.value)
//     var btnText = document.createTextNode("Delete")
//     var editText = document.createTextNode("edit")

//     btn.setAttribute("onclick" , "dlt(this)")
//     btn.setAttribute("id" , "button")
//     btn.setAttribute("class" , "button")

//     edit.setAttribute("onclick" , "hide(this)")



//     th1.appendChild(th1Text)
//     th2.appendChild(th2Text)
//     th3.appendChild(th3Text)
//     btn.appendChild(btnText)
//     edit.appendChild(editText)

//     tr.appendChild(th1)
//     tr.appendChild(th2)
//     tr.appendChild(th3)
//     tr.appendChild(btn)
//     tr.appendChild(edit)

//     info.appendChild(tr)

// }

// function dlt(e){
//     e.parentNode.remove()

// }
// function hide(e){
//     var fname = document.getElementById("fname")
//     var lname = document.getElementById("lname")
//     var email = document.getElementById("email")


//     var form = document.getElementById("hiddenform")
//     var p1 = document.createElement("p")
//     var p2 = document.createElement("p")
//     var p3 = document.createElement("p")

//     var p1Text = document.createTextNode( "First Name : " + fname.value)
//     var p2Text = document.createTextNode( "Last Name : " + lname.value )
//     var p3Text = document.createTextNode(  "Email : " + email.value )

//     p1.appendChild(p1Text)
//     p2.appendChild(p2Text)
//     p3.appendChild(p3Text)

//     form.appendChild(p1)
//     form.appendChild(p2)
//     form.appendChild(p3)

// }


//CHAPTER 53-58

//TASK 1

var images = ["mob1.jpg" , "mob2.jpg" , "mob 3.jpg" , "mob 4.jpg"]
var img1  = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
for(var i = 0 ; i < images.length ; i++){
    img1.src = images[0]
    img2.src = images[1]
    img3.src = images[2]
    img4.src = images[3]
}





//CHAPTER 59-67
//TASK 1 (i)

// var main = document.getElementById("main-content")
// var mainElements = main.childNodes

//TASK 1(ii)

// for(var i = 0 ; i  < mainElements.length ; i++){
//     document.write(mainElements[i].nodeName + "<br>")
// }

//TASK 1(iii)


// var render = document.getElementsByClassName("render")
// for(var i = 0 ; i < render.length ; i++){
//     document.write(render[i].firstChild.nodeValue + "<br>")
// }

//TASK 1(iv)
// var main = document.getElementById("main-content")
// var fname = document.getElementById("first-name")
// fname.value =  main.childNodes[1].firstChild.nodeValue 
// console.log(fname.value)

//TASK 1 (v)

// var main = document.getElementById("main-content")
// var lname = document.getElementById("last-name")
// lname.value =  main.childNodes[2].firstChild.nodeValue 
// console.log(lname.value)

// var main = document.getElementById("main-content")
// var email = document.getElementById("email")
// email.value =  main.childNodes[3].firstChild.nodeValue 
// console.log(email.value)



// document.write("The value of element having id first name is " + fvalue + "<br>")

// //TASK 2 (i)
// var form = document.getElementById("form-content")
// document.write("The node type of id form-content is " + form.nodeType + "<br>")

// //TASK 2 (ii)
// var last = document.getElementById("lastName")
// var child = last.firstChild.nodeValue
// document.write( "<br>" + "The node type of id lastName is " + last.nodeType + " and  child node is  " + child + "<br>")

// //TASK 3 (iii)

// var update = child = "Last Name : Price"
// document.write("The updated value of child node of id lastName is " + update + "<br>")

// //TASK(iv)

// var main = document.getElementById("main-content")
// document.write("The first child of id main-content is " + main.firstChild.nodeName + "<br>")

// //TASK (v)

// var last = document.getElementById("lastName")
// var next = last.nextSibling.nodeValue;
// var previous = last.previousSibling.nodeValue
// document.write("The next sibling of id last name is " + next + "<br>")
// document.write("The previous sibling of id last name is " + previous + "<br>")

// //TASK (vi)

// var email = document.getElementById("email")
// var parent = email.parentNode
// var type = email.nodeType
// document.write("The parent node  of element having id email is  " +parent.nodeName + "<br>")
// document.write("The node type of element having id email is  " +type)



