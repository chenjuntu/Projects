function Attri_Cons(Name, Input)
{	
	var Attributes = {};
	var Has_area_code = false;
	var Has_year = false;

	//Fill in ID and city(area);
	Attributes.ID = Name;
	Attributes.City = Input[0];
	console.log("ID: " + Attributes.ID);
	console.log("City: " + Attributes.City);

	//Find "Year", and then store it into the attribute list.
	var i = 0;
	for(i = 0; i < Input.length; i++)
	{
		if(parseInt(Input[i]) <= 9999 && parseInt(Input[i]) >= 1000)
		{
			Has_year = true;
			break;
		}
	}
	if(Has_year === false)
	{
		console.log("Missing a Year data for this one. Adding a '2016' for it");
		//Test if there is an area code
		var Insert_index = 3;
		if(Input[3].includes("-"))
			Insert_index = 4;
		Input.splice(Insert_index, 0, "2016");
		for(i = 0; i < Input.length; i++)
		{
			if(parseInt(Input[i]) <= 9999 && parseInt(Input[i]) >= 1000)
			{
				Has_year = true;
				break;
			}
		}
	}
	Attributes.Year = Input[i];
	console.log("Year: " + Attributes.Year);

	//Store neibour info.
	/*
	if(i < 3)
		console.log("Report for less neibour information."); //In case there are some entries with less neibour info. This line is for debug purpose.
	*/
	//If "Year" attribute is not the 4th of the list, then this list has area tag.
	if(i != 3)
	{
		Has_area_code = true;
		Attributes.areaCode = Input[i-1];
		Attributes.Neibourhood = [Input[i-3], Input[i-2]];
		console.log("Area Code: " + Attributes.areaCode);
	}
	else
	{
		Attributes.Neibourhood = [Input[i-2], Input[i-1]];
	}
	console.log("Neibourhood: " + Attributes.Neibourhood);


	//Store Type info
	if(Input[i + 1] === Input[Input.length - 1])
	{
		Attributes.Type = Input[i + 1];
		console.log("Type: " + Attributes.Type);
		return Attributes;
	}
	else
	{
		Attributes.Type = [Input[i+1], Input[i+2]];
		console.log("Type: " + Attributes.Type);
	}

	//Store Lot size / room details / phone
	i = i + 2;
	if(i === (Input.length)-1)
		return Attributes;

	if((Input[i + 1].toLowerCase()).includes("feet"))
	{
		Attributes.LotSize = Input[i + 1];
		console.log("LotSize: " + Attributes.LotSize);
		i++;
	}
	i = i + 1;

	//Check if the last one is phone number.
	if(Input[Input.length - 1].includes("-"))
	{
		Attributes.Phone = Input.pop();
		console.log("Phone: " + Attributes.Phone);
	}
	
	//Store rooms' info
	Attributes.Rooms = new Array();
	for(i; i < Input.length; i++)
	{
		(Attributes.Rooms).push(Input[i]);
	}
	console.log("Rooms: " + Attributes.Rooms);
	return Attributes;
}

//Test Input
var Input = [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt, Ground, Bsmt, Ground"
		];
Attri_Cons("A", Input);
