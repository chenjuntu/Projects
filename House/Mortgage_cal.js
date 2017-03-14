function Mortgage_calculate(amount, rate, years) 
{
	//With the exception of variable rate mortgages, all mortgages are compounded semi-annually, by law. Therefore the input rate, which is called nominal rate(quote rate), is slightly different thant the actual rate, as know as Effective annual rate.
	var EAR;
	var Month_rate;
	var Terms;
	var Monthly_payment;
	Terms = years * 12;
	
	
	//Find out the effective annual rate base on the rate input
	EAR = Math.pow((1 + rate/2), 2) - 1;
	//Base on the effective annual rate, we can find the Annual percentage rate.
	Month_rate = Math.pow((EAR + 1), (1/12)) - 1;
	
	var Temp = Month_rate * (Math.pow((1 + Month_rate), Terms));
	Temp = Temp / (Math.pow((1 + Month_rate), Terms) - 1);
	Monthly_payment = amount * Temp;
	return Monthly_payment;
}
