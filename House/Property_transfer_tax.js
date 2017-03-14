function Property_transfer_tax (Price, IsToronto)
{
	var result;
	//Declear a flag to define which tax level it is
	var Level  = 0;

//Excluding wrong input.
	if(Price < 0)
	{
		console.log("Price is not properly inputed");
		return result = -1;
	}

//Calculate Provincial Land Transfer Tax(PLTT) first.
	if(Price <= 55000)
		{
			result  = Price * 0.005;
			Level = 1;
		}
	else if(Price <= 250000  && Price > 55000)
		{
			result = (Price - 55000) * 0.01  + 55000 * 0.005;
			Level = 2;
		}
	else if(Price <= 400000 && Price > 250000)
		{
			result = (Price - 250000) * 0.015 + (250000 - 55000) * 0.01 + 55000 * 0.005;
			Level = 2;
		}
	else
		{
			result = (Price - 400000) * 0.02 + (400000 - 250000) * 0.015 + (250000 - 55000) * 0.01 + 55000 * 0.005;
			Level = 3;
		}
	console.log(result);

//Check if this property is in City of Toronto, and then calculate Municipal Land Transfer Tax(MLTT).
	if(IsToronto === true)
	{
		if(Level === 1)
			result += Price *0.005;
		else if(Level === 2)
			result += (Price - 55000) * 0.01 + 55000 * 0.005;
		else if(Level === 3)
			result += (Price - 400000) * 0.02 + (400000 - 55000) * 0.01 + 55000 * 0.005;
		else
			console.log("Error, PLTT was not calculated correctly.");
	}
	else
	{
		return result;
	}
	console.log(result);
	return result;
}

console.log(Transfer_tax(12345, true));