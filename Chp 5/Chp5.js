//Ans 1

var a = 3;
var b = 5;
var c = a+b;
document.write("Sum of "+a+" and "+b+" is "+c);

//Ans 2

var a = 3;
var b = 5;
var c = b-a;
document.write("Subtraction of "+a+" from "+b+" is "+c+"<br>");

c = a*b;
document.write("Multiplication of "+a+" and "+b+" is "+c+"<br>");

c = a/b;
document.write("Division of "+a+" by "+b+" is "+c+"<br>");

c = a%b;
document.write("Modulus of "+a+" to "+b+" is "+c);

//Ans 3

var a;
document.write("Value after Variable decleration is "+a+"<br>")
a = 5;
document.write("Initial Value: "+a+"<br>");
document.write("Value After increment is: "+ ++a +"<br>")
a = a+7;
document.write("Value after addition is: "+a+"<br>");
document.write("Value after decrement is: "+ --a +"<br>");
a = a%3;
document.write("The remainder is: "+a)

//Ans 4

var costofmovieticket = 600;
var totaltickets = 5;
var totalcost = costofmovieticket*totaltickets;
document.write("Total cost to buy "+totaltickets+" tickets to a movie is "+totalcost+" PKR.")

//Ans 5

var lengthoftable = 10;
var tableNumber = 5;
document.write("Table of "+tableNumber+":<br>")
for (let i = 1; i <= lengthoftable; i++) {
    var multiplyResult = tableNumber*i;
    
    document.write(tableNumber+" x "+i+"= "+multiplyResult+"<br>");
    
}

//Ans 6

//Celsius to Fahrenhiet:
var celsiusTemp = prompt("Conversion of Celsius Temp into Fahrenheit Temp","Enter Celsius Temp")
var fahrnheitTemp = (celsiusTemp*9/5)+32;
document.write("Celsius Temp: "+celsiusTemp+"degree = Fahrenheit Temp: "+fahrnheitTemp+"degree<br>")


//Fahrenhiet to Celsius:
var fahrnheitTemp = prompt("Conversion of Fahrenheit Temp into Celsius Temp","Enter Fahrenheit Temp")
var celsiusTemp = (fahrnheitTemp-32)*5/9
document.write("Fahrenheit Temp: "+fahrnheitTemp+"degree = Celsius Temp: "+celsiusTemp+"degree")

//Ans 7

var priceofitem1 = 650;
var priceofitem2 = 100;
var quantityofitem1 = prompt("Welcome to E-commerce Website!","Enter quantity of item1")
var quantityofitem2 = prompt("E-commerce Website","Enter quantity of item2")
var shippingcharges = 100;

if(quantityofitem1!=0 || quantityofitem2 !=0){
    var totalcost = priceofitem1*quantityofitem1 + priceofitem2*quantityofitem2 + shippingcharges;
    document.write("Price of item 1 is "+priceofitem1+"<br>Quantity of item 1 is "+quantityofitem1+"<br> Price of item 2 is "+priceofitem2+"<br>Quantity of item 2 is "+quantityofitem2+"<br> Shipping Charges "+shippingcharges+"<br><br><br> Total Cost of your order is "+totalcost)
}
else{
    document.write("Error! Please select quantity of items")
}

//Ans 8

var marksObtained = prompt("Marksheet Calculator","Enter the number of marks obtained")
var totalMarks = 980;
var percentage = marksObtained/totalMarks*100;
document.write("Total marks: "+totalMarks+"<br> Marks obtained: "+marksObtained+"<br> Percentage: "+percentage+"%");

//Ans 9

var USdollarinPKR = 104.80
var SaudiRiyalinPKR = 28 
var USdollars = prompt("Currency in PKR","Enter amount in US dollars")
var SaudiRiyals = prompt("Currency in PKR","Enter amount in Saudi Riyals")
var totalAmount = USdollarinPKR*USdollars + SaudiRiyalinPKR*SaudiRiyals

document.write("Total Currency in PKR: "+totalAmount)

//Ans 10

var number = 4
var result = ((number+5)*10)/2
document.write("Result: "+result)

//Ans 11

var currentYear = 2023;
var birthYear = 2002;
var age = currentYear-birthYear;
document.write("They are either ",age-1," or ",age," years old");

//Ans 12

var radius = 20;
document.write("Radius of a circle: ",radius,"<br>")
var pie = 3.142;
var circumferenceofcircle = 2*pie*radius;
document.write("The circumference is: ",circumferenceofcircle,"<br>");
var area = pie*Math.pow(radius,2);
document.write("The area is: ",area);

//Ans 13

var favouriteSnack = "Chocolate Chip";
var currentAge = 22;
var maxAge = 65;
var snackQuantityPerDay = 3;
var totalSnacks = (maxAge-currentAge)*365*snackQuantityPerDay; 

document.write("You will need ",totalSnacks," ",favouriteSnack," to last you until the ripe old age of ",maxAge,".");


