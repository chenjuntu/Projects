function ObjectId(s){
	return s;
}
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
		console.log("Missing a Year data for this one. I am adding a '2016' for it");
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
	//console.log(Input[i + 1].toLowerCase());
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
var input_1 = [
	{
		"_id" : ObjectId("576e0f4fe40ebb439ec1ab01"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("579c830b7e6ddc56b0d3b46d"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0f4fe40ebb439ec1ab00"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f4fe40ebb439ec1ab03"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x2xBsmt, 1x3xBsmt, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f4fe40ebb439ec1ab05"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"114-15-M",
			"2016",
			"Detached",
			"3-Storey",
			"1x2xMain, 1x3x2nd, 1x3x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f50e40ebb439ec1ab07"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f54e40ebb439ec1ab09"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"102-16-D",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f54e40ebb439ec1ab0a"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-18-E",
			"2015",
			"Detached",
			"Bungalow",
			"1x2"
		]
	},
	{
		"_id" : ObjectId("576e0f54e40ebb439ec1ab0d"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x8x2nd, 1x5x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f59e40ebb439ec1ab10"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-25-E",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x4xMain, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e0f59e40ebb439ec1ab11"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f5ae40ebb439ec1ab13"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt, Ground, Bsmt, Ground"
		]
	},
	{
		"_id" : ObjectId("576e0f5ae40ebb439ec1ab14"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt, Ground, Bsmt, Ground"
		]
	},
	{
		"_id" : ObjectId("576e0f6be40ebb439ec1ab33"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-32-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57876b4b7e6ddc2c84554665"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xBsmt, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbf607e6ddc0a9ab2bf84"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x3xBsmt, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57a1c7967e6ddc4e8907366a"),
		"Undefined" : [
			"Innisfil",
			"Churchill",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x3"
		]
	},
	{
		"_id" : ObjectId("576e0f60e40ebb439ec1ab20"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-P",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x2xGround, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f60e40ebb439ec1ab21"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f6be40ebb439ec1ab2f"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Detached",
			"Other",
			"2x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f6be40ebb439ec1ab32"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-32-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f6be40ebb439ec1ab34"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"117-34-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, Main, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0f72e40ebb439ec1ab3d"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-C",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f72e40ebb439ec1ab3f"),
		"Undefined" : [
			"Toronto W04",
			"Brookhaven-Amesbury",
			"Toronto",
			"108-11-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f72e40ebb439ec1ab40"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-7-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f72e40ebb439ec1ab41"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-15-N",
			"2015",
			"Detached",
			"3-Storey",
			"1x2xMain, 2x3xUpper, 1x3xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f78e40ebb439ec1ab44"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-E",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f78e40ebb439ec1ab47"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e0f78e40ebb439ec1ab49"),
		"Undefined" : [
			"Toronto W08",
			"Markland Wood",
			"Toronto",
			"113-3-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x5xUpper, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("576e0f81e40ebb439ec1ab52"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-23-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f81e40ebb439ec1ab55"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("576e0f81e40ebb439ec1ab56"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e0f81e40ebb439ec1ab5b"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-23-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f85e40ebb439ec1ab5f"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"332-29-Z",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f85e40ebb439ec1ab61"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f8ce40ebb439ec1ab63"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f8ce40ebb439ec1ab66"),
		"Undefined" : [
			"Vaughan",
			"Elder Mills",
			"York",
			"347-5-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f8ce40ebb439ec1ab6a"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f8de40ebb439ec1ab6b"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x2x2nd, 1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f8ee40ebb439ec1ab6f"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"319-19-S",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0f8ee40ebb439ec1ab70"),
		"Undefined" : [
			"King",
			"Schomberg",
			"York",
			"323-7-W",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("576e0f6be40ebb439ec1ab28"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-38-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f6be40ebb439ec1ab30"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xGround, 1x3xBsmt, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0f72e40ebb439ec1ab3e"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x2xMain, 4x3xBsmt, 2x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("576e0f78e40ebb439ec1ab45"),
		"Undefined" : [
			"Toronto W06",
			"Alderwood",
			"Toronto",
			"118-6-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e0f85e40ebb439ec1ab60"),
		"Undefined" : [
			"Aurora",
			"Rural Aurora",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5784c7867e6ddc257ca2da89"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"447-58-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57876b4b7e6ddc2c8455466d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-48-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578a11387e6ddc26a2b6f575"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("578f533c7e6ddc4d5109cfda"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57924e947e6ddc2dd16a8f35"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-57-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abbf"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973e457e6ddc672e7b59f5"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("5799df7d7e6ddc7d0596ee41"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-T",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5799dff87e6ddc7d0596f008"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("579b31297e6ddc59b4ab3514"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"452-42-V",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xUpper, 1x2xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("579c83d27e6ddc56b0d3b6a8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("57a07bc57e6ddc7c6ca852ec"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0f8de40ebb439ec1ab6c"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 2x4"
		]
	},
	{
		"_id" : ObjectId("576e0f8de40ebb439ec1ab6e"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"347-9-U",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x5xMain, 2x4xMain, 1x2xLower, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e0f9fe40ebb439ec1ab73"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x3rd, 1x4x3rd, 1x2x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e0f9fe40ebb439ec1ab75"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0f9fe40ebb439ec1ab76"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-35-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("576e0f9fe40ebb439ec1ab7e"),
		"Undefined" : [
			"Markham",
			"Victoria Square",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e0f9fe40ebb439ec1ab85"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 3x3x2nd, 3x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0f9fe40ebb439ec1ab86"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 4x4x2nd, 1x4xBsmt",
			"8",
			"Master",
			"2nd",
			"6.10",
			"3.70",
			"Hardwood Floor",
			"4 Pc Ensuite",
			"W/I Closet",
			"9",
			"2nd Br",
			"2nd",
			"4.29",
			"3.46",
			"Hardwood Floor",
			"4 Pc Ensuite",
			"Closet",
			"10",
			"3rd Br",
			"2nd",
			"5.38",
			"3.63",
			"Hardwood Floor",
			"4 Pc Ensuite",
			"Closet",
			"11",
			"4th Br",
			"2nd",
			"3.59",
			"4.08",
			"Hardwood Floor",
			"4 Pc Ensuite",
			"Closet",
			"12",
			"Living",
			"Bsmt",
			"8.93",
			"11.55",
			"Laminate",
			"Combined W/Dining",
			"Combined W/Kitchen"
		]
	},
	{
		"_id" : ObjectId("576e0fa0e40ebb439ec1ab89"),
		"Undefined" : [
			"Markham",
			"Buttonville",
			"York",
			"350-28-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0fa0e40ebb439ec1ab8b"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-29-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0fa0e40ebb439ec1ab8c"),
		"Undefined" : [
			"Markham",
			"Bayview Glen",
			"York",
			"355-23-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x5xBsmt, 1x4x2nd, 1x3x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e0fa3e40ebb439ec1ab90"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-K",
			"2015",
			"Detached",
			"3-Storey",
			"1x3xGround, 1x5x2nd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("576e0fa6e40ebb439ec1ab93"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-45-U",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0fa6e40ebb439ec1ab94"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-33-C",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xGround, 1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0faae40ebb439ec1ab96"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"266-7-S",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0faae40ebb439ec1ab98"),
		"Undefined" : [
			"Pickering",
			"Highbush",
			"Durham",
			"266-2-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("576e0faae40ebb439ec1ab99"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0fb7e40ebb439ec1aba6"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x5xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fb7e40ebb439ec1aba7"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0fb7e40ebb439ec1abad"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-22-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0fb7e40ebb439ec1abaf"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0fbee40ebb439ec1abb0"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fbee40ebb439ec1abb1"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-U",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0fbfe40ebb439ec1abb9"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-29-Q",
			"2016",
			"Triplex",
			"1 1/2 Storey",
			"2x4, 1x3",
			"6",
			"3rd Br",
			"2nd",
			"3.30",
			"2.96",
			"Laminate",
			"Window",
			"7",
			"Living",
			"2nd",
			"4.20",
			"2.45",
			"Large Closet",
			"Window",
			"8",
			"Kitchen",
			"2nd",
			"3.15",
			"3.01",
			"Laminate",
			"Window",
			"9",
			"4th Br",
			"Bsmt",
			"3.43",
			"2.90",
			"Laminate",
			"Window",
			"10",
			"Kitchen",
			"Bsmt",
			"3.96",
			"4.20",
			"Laminate",
			"Window"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abc1"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abc2"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abc3"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abc4"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abc6"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abc7"),
		"Undefined" : [
			"Brock",
			"Cannington",
			"Durham",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e0fc8e40ebb439ec1abca"),
		"Undefined" : [
			"Scugog",
			"Blackstock",
			"Durham",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e0fc9e40ebb439ec1abcc"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"3x4x3rd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fdfe40ebb439ec1abcd"),
		"Undefined" : [
			"Clearview",
			"New Lowell",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e0fdfe40ebb439ec1abce"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"15-29-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abd0"),
		"Undefined" : [
			"Tiny",
			"Perkinsfield",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abdd"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-13-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x3xUpper, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abdf"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abe4"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-B",
			"2015",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abe7"),
		"Undefined" : [
			"Springwater",
			"Rural Springwater",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abe9"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x6xMain, 1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abea"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Rural Bradford West Gwillimbury",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abed"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Loretto",
			"Simcoe",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x3xMain, 1x4xUpper, 1x4xUpper, 1x4xLower, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e0fe3e40ebb439ec1abee"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0fe3e40ebb439ec1abef"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e0fe3e40ebb439ec1abf1"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2016",
			"Other",
			"Other",
			"4x2xMain, 2x3x2nd, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1abf6"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-B",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1abf9"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1abfb"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1abfc"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-44-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1abfd"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-G",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1abfe"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"3",
			"Kitchen",
			"Main",
			"3.05",
			"3.04",
			"Ceramic Floor",
			"Backsplash",
			"Stainless Steel Appl",
			"4",
			"Dining",
			"Main",
			"1.85",
			"3.04",
			"Ceramic Floor",
			"Window",
			"5",
			"Master",
			"2nd",
			"3.45",
			"4.35",
			"Broadloom",
			"4 Pc Ensuite",
			"W/I Closet",
			"6",
			"2nd Br",
			"2nd",
			"3.65",
			"3.05",
			"Broadloom",
			"Closet",
			"Window",
			"7",
			"3rd Br",
			"2nd",
			"4.27",
			"3.05",
			"Broadloom",
			"Bay Window",
			"Closet",
			"8",
			"Rec",
			"Bsmt",
			"4.90",
			"6.50",
			"Laminate",
			"Window"
		]
	},
	{
		"_id" : ObjectId("576e0ff5e40ebb439ec1ac04"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e0ff6e40ebb439ec1ac06"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-36-G",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e0ff6e40ebb439ec1ac09"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"465-34-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e0ff6e40ebb439ec1ac0b"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e0ff6e40ebb439ec1ac0d"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5xMain, 1x5x2nd, 2x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e0ff6e40ebb439ec1ac0e"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-38-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xMain, 1x6xMain, 1x6x2nd, 3x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1012e40ebb439ec1ac1f"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e1012e40ebb439ec1ac27"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1013e40ebb439ec1ac30"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e1013e40ebb439ec1ac35"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5xUpper, 2x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1013e40ebb439ec1ac39"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-54-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1013e40ebb439ec1ac3c"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-54-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x5xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e1013e40ebb439ec1ac3f"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"446-55-Q",
			"2015",
			"Detached",
			"2-Storey",
			"2x2xMain, 3x4x2nd, 1x5xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1015e40ebb439ec1ac40"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e1015e40ebb439ec1ac41"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-45-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x5xUpper",
			"7",
			"Master",
			"2nd",
			"6.22",
			"5.03",
			"Laminate",
			"5 Pc Ensuite",
			"W/I Closet",
			"8",
			"2nd Br",
			"2nd",
			"4.17",
			"3.71",
			"Laminate",
			"Semi Ensuite",
			"W/I Closet",
			"9",
			"3rd Br",
			"2nd",
			"3.81",
			"3.56",
			"Laminate",
			"Semi Ensuite",
			"W/I Closet",
			"10",
			"4th Br",
			"2nd",
			"3.96",
			"3.10",
			"Laminate",
			"4 Pc Ensuite",
			"W/I Closet"
		]
	},
	{
		"_id" : ObjectId("576e1020e40ebb439ec1ac49"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x2xMain, 1x4xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e1020e40ebb439ec1ac4d"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e1020e40ebb439ec1ac51"),
		"Undefined" : [
			"Milton",
			"Brookville",
			"Halton",
			"434-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"2x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac58"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-26-M",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xGround, 1x2xMain, 1x3x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac5b"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac5c"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-T",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac5e"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-27-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac61"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac62"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-24-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac63"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"470-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x3x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac64"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac65"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-30-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x4xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac66"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-30-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 2x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac68"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"2x2xMain, 1x5xMain, 2x4x2nd, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1031e40ebb439ec1ac69"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-28-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x3x2nd, 1x6x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e1037e40ebb439ec1ac70"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-9-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e1051e40ebb439ec1ac72"),
		"Undefined" : [
			"Georgina Islands",
			"Georgina Island",
			"York",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac75"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac78"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac7a"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac7d"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-863-5000"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac7f"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac82"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac84"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac86"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac87"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac89"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac8a"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-847-0920"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac8b"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac8d"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac8e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac8f"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac92"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac93"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac94"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac96"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac9a"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac9b"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-781-2565"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac9d"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x7xFlat, 1x3xFlat, 1x2xFlat",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1ac9e"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-787-1712"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca0"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-7890"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca1"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca2"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain, 4xMain",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca5"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-494-9858"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca6"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-699-2992"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca7"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("576e10fee40ebb439ec1aca8"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1aca9"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-26-A",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 2x4x2nd",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1acaa"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park South",
			"Toronto",
			"109-19-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1acab"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1acac"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1acad"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1acae"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("576e10ffe40ebb439ec1acaf"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acb1"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acb4"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-642-8870"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acb5"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acb6"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-21-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acb7"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acb8"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"112-42-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acba"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-477-1818"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acbb"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acbe"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("576e0fa3e40ebb439ec1ab8e"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e0fb0e40ebb439ec1aba1"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("576e0fbee40ebb439ec1abb2"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-S",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abd1"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Detached",
			"Bungaloft",
			"1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e0fe0e40ebb439ec1abe6"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e1012e40ebb439ec1ac2a"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e1012e40ebb439ec1ac2c"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e1013e40ebb439ec1ac36"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"2016",
			"Detached",
			"Bungalow",
			"1x3, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("5780d38c7e6ddc0e0dbd6397"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63a4"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63a6"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63ab"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-879-7653"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63b3"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"108-16-J",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x4x2nd",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63b7"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"108-16-J",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4x2nd",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63b8"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5780d3997e6ddc0e0dbd63bb"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park South",
			"Toronto",
			"109-20-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("5780d3a37e6ddc0e0dbd63c1"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"105-34-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5780d3a47e6ddc0e0dbd63c7"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-E",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"2x4xFlat, 3xFlat",
			"905-415-1000"
		]
	},
	{
		"_id" : ObjectId("5780d3a47e6ddc0e0dbd63c9"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("5780d3b57e6ddc0e0dbd63df"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-B",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xBsmt, 1x4x3rd",
			"416-551-6044"
		]
	},
	{
		"_id" : ObjectId("5780d3b57e6ddc0e0dbd63e1"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-513-6633"
		]
	},
	{
		"_id" : ObjectId("5780d3b57e6ddc0e0dbd63e2"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("5780d3b57e6ddc0e0dbd63e7"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"355-23-Y",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("5780d3b57e6ddc0e0dbd63ee"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("5780d3b87e6ddc0e0dbd63f1"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-T",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"905-430-6066"
		]
	},
	{
		"_id" : ObjectId("5780d3b87e6ddc0e0dbd63f3"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-30-P",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd",
			"905-430-2320"
		]
	},
	{
		"_id" : ObjectId("5780d3c87e6ddc0e0dbd63ff"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"453-49-V",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd",
			"905-290-6777"
		]
	},
	{
		"_id" : ObjectId("5780d3c87e6ddc0e0dbd6402"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"465-40-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-241-3337"
		]
	},
	{
		"_id" : ObjectId("5780d3c87e6ddc0e0dbd6408"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5780d3c87e6ddc0e0dbd6409"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5780d3c87e6ddc0e0dbd6410"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("5780d3cd7e6ddc0e0dbd6419"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"289-878-5555"
		]
	},
	{
		"_id" : ObjectId("5780d3cd7e6ddc0e0dbd641b"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5784c7327e6ddc257ca2d93f"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("5784c7327e6ddc257ca2d940"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("5784c7387e6ddc257ca2d955"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("5784c7397e6ddc257ca2d95b"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-22-M",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5784c7397e6ddc257ca2d95c"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-22-M",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5784c7407e6ddc257ca2d979"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-J",
			"2016",
			"Att/Row/Twnhouse",
			"Bungaloft",
			"1x4xMain, 1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5784c76d7e6ddc257ca2da23"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"453-51-Z",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5784c76d7e6ddc257ca2da26"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-51-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57876b147e6ddc2c84554582"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xBsmt, 1x4xFlat"
		]
	},
	{
		"_id" : ObjectId("57876b257e6ddc2c845545b5"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-C",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578a11257e6ddc26a2b6f52b"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-A",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578a11387e6ddc26a2b6f572"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-T",
			"2016",
			"Semi-Detached",
			"Sidesplit 5",
			"1x4, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("578dbf5e7e6ddc0a9ab2bf62"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbf607e6ddc0a9ab2bf8d"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("578dc0907e6ddc0a9ab2c30b"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("57924e967e6ddc2dd16a8f4b"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e10f2e40ebb439ec1ac73"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Parking Space",
			"Other",
			"0",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57934a607e6ddc792467feef"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 2x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("576e2ceee40ebb4eecc1faa5"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-22-S",
			"2015",
			"Parking Space",
			"4",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("57973d407e6ddc672e7b56e6"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-Q",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("579893017e6ddc5b8e7e408c"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-43-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("579893017e6ddc5b8e7e4090"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("579893017e6ddc5b8e7e4092"),
		"Undefined" : [
			"Brampton",
			"Heart Lake",
			"Peel",
			"445-44-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2, 1"
		]
	},
	{
		"_id" : ObjectId("579893027e6ddc5b8e7e4097"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-U",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5799df8a7e6ddc7d0596ee79"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5799dff87e6ddc7d0596f006"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"445-46-S",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("579c83607e6ddc56b0d3b5af"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-14-U",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854b5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854b6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854b7"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57a1c6e57e6ddc4e89073404"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-D",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c7967e6ddc4e89073669"),
		"Undefined" : [
			"Barrie",
			"Letitia Heights",
			"Simcoe",
			"504-7-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("57a1c7977e6ddc4e8907367f"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"506-23-G",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("57a9b5ae7e6ddc35ef17cc3f"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-33-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57ac53e37e6ddc0ca819bf00"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"320-32-R",
			"2016",
			"Farm",
			"2-Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57ac555f7e6ddc0ca819c31b"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Parking Space",
			"Other",
			"0",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acc0"),
		"Undefined" : [
			"Toronto E08",
			"Guildwood",
			"Toronto",
			"117-36-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("576e110be40ebb439ec1acc1"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-26-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-686-9618"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acc3"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acc4"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-5-V",
			"2016",
			"Co-Op Apt",
			"Apartment",
			"1x4xFlat",
			"416-534-3511"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acc6"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acc8"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-503-2373"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1accb"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acce"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4, 1x4",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acd0"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-12-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x3xMain",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acd1"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"114-14-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-762-8255"
		]
	},
	{
		"_id" : ObjectId("576e1117e40ebb439ec1acd2"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1acd6"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1acd9"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-229-0515"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1acda"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1acdb"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1acdd"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1acde"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-32-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"647-292-3880"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1ace3"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-W",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2x2nd, 1x3x3rd",
			"416-218-9898"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1ace4"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-604-5600"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1ace5"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-23-D",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4xUpper, 1x3xGround",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1ace6"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-18-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("576e1123e40ebb439ec1ace8"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("576e1125e40ebb439ec1ace9"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-10-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("576e1125e40ebb439ec1acea"),
		"Undefined" : [
			"Pickering",
			"Town Centre",
			"Durham",
			"266-8-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("576e1135e40ebb439ec1acee"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("576e1135e40ebb439ec1acf0"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("576e1135e40ebb439ec1acf5"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"478-40-R",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("576e1135e40ebb439ec1acf6"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("576e1135e40ebb439ec1acf7"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("576e1135e40ebb439ec1acfc"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("576e1136e40ebb439ec1ad01"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x5xFlat",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("576e1136e40ebb439ec1ad02"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("576e1136e40ebb439ec1ad04"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x6x2nd",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("576e1136e40ebb439ec1ad05"),
		"Undefined" : [
			"Mississauga",
			"Port Credit",
			"Peel",
			"479-41-S",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 2x4x2nd",
			"905-361-3315"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad06"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad07"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"475-16-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-845-0024"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad0a"),
		"Undefined" : [
			"Oakville",
			"Uptown Core",
			"Halton",
			"471-27-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad0b"),
		"Undefined" : [
			"Burlington",
			"Tansley",
			"Halton",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2x2nd",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad0c"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-632-2199"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad0d"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-896-4622"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad0f"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-V",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("576e113ee40ebb439ec1ad10"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-27-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x3xFlat, 1x2xFlat",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("576e118fe40ebb439ec1ad12"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-23-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-477-1818"
		]
	},
	{
		"_id" : ObjectId("576e2ac1e40ebb4eecc1f818"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"4x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("576e2ac1e40ebb4eecc1f819"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"119-16-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2ac1e40ebb4eecc1f81b"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4x3rd, 1x4x2nd, 1x4xMain, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2ac1e40ebb4eecc1f81c"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-18-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 3x3, 1x4, 1x6"
		]
	},
	{
		"_id" : ObjectId("576e2ac5e40ebb4eecc1f81d"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2ac6e40ebb4eecc1f820"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 3x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("576e2ac6e40ebb4eecc1f821"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-P",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"5x2xMain, 4x2nd, 3x2nd, 4x3rd, 3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2ac6e40ebb4eecc1f822"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"109-20-K",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5, 3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2acce40ebb4eecc1f828"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2acce40ebb4eecc1f82a"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-20-J",
			"2015",
			"Detached",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2acce40ebb4eecc1f82b"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x5x2nd, 1x3xLower, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2ad1e40ebb4eecc1f834"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"103-24-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x5x2nd, 1x6x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2ad9e40ebb4eecc1f839"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ad9e40ebb4eecc1f83f"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"121-28-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2ad9e40ebb4eecc1f842"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"116-27-Q",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ad9e40ebb4eecc1f843"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-27-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2ad9e40ebb4eecc1f844"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-28-S",
			"2016",
			"Detached",
			"3-Storey",
			"1x5xMain, 1x4x2nd, 1x4x3rd, 1x1xLower"
		]
	},
	{
		"_id" : ObjectId("576e2ae6e40ebb4eecc1f84f"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-J",
			"2015",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("576e2ae7e40ebb4eecc1f859"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-H",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f861"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-11-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f862"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"102-12-B",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower",
			"Greenhouse"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f869"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f86c"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-15-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4xBsmt, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f86d"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f86f"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-Q",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x3xGround, 2x5x2nd, 1x3x3rd, 1x3xBsmt, Bsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af0e40ebb4eecc1f870"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-11-Q",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x4x3rd, 1x5x2nd, 1x2xBsmt, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2af6e40ebb4eecc1f874"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-10-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af6e40ebb4eecc1f877"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-6-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af6e40ebb4eecc1f879"),
		"Undefined" : [
			"Toronto W06",
			"Alderwood",
			"Toronto",
			"2016",
			"Store W/Apt/Offc",
			"2-Storey",
			"3x4x2nd, 1x2x2nd, 1x3xBsmt, 2x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af6e40ebb4eecc1f87b"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-7-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f87d"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f87e"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f87f"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f881"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-23-P",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2x2nd, Main, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f887"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f88a"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f88d"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-24-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f890"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"4x4"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f891"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"349-25-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b02e40ebb4eecc1f892"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"355-21-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x8x2nd, 4x4x2nd, 1x2xMain, 2x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f89c"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"325-26-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8a0"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8a6"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"331-26-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8a7"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-28-V",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8a8"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"319-24-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8ab"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-25-Z",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8b0"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8b1"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"331-26-Z",
			"2015",
			"Detached",
			"Bungalow",
			"1x5xGround, 1x4xGround, 1x5xBsmt, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8b2"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8b3"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"2016",
			"Multiplex",
			"2-Storey",
			"1x4xMain, 1x4x2nd, 1x4xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b13e40ebb4eecc1f8b5"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x5, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2b20e40ebb4eecc1f8b8"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b20e40ebb4eecc1f8cc"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b24e40ebb4eecc1f8cf"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-17-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2b24e40ebb4eecc1f8d0"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x5xMain, 1x4xGround"
		]
	},
	{
		"_id" : ObjectId("576e2b24e40ebb4eecc1f8d1"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-18-H",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x3xUpper, 1x4xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8db"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8dd"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-31-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8de"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8e2"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"351-37-U",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8e3"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"2016",
			"Detached",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x5x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8e4"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-34-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xFlat, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8e6"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8e7"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-36-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8ea"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8ee"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-22-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8f4"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8f6"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-30-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b3ce40ebb4eecc1f8f9"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-K",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b3ce40ebb4eecc1f8fa"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-42-K",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x3xMain, 1x3xMain, 1x3xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b3ce40ebb4eecc1f8fc"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"333-41-A",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b3ce40ebb4eecc1f900"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"333-38-A",
			"2016",
			"Detached",
			"Bungalow",
			"1x6xMain, 1x5xMain, 1x2xMain, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b3ee40ebb4eecc1f901"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"319-26-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b3ee40ebb4eecc1f902"),
		"Undefined" : [
			"East Gwillimbury",
			"Mt Albert",
			"York",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("576e2b3ee40ebb4eecc1f903"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-26-N",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2b41e40ebb4eecc1f905"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-38-T",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b41e40ebb4eecc1f907"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b41e40ebb4eecc1f908"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-39-T",
			"2015",
			"Detached",
			"Bungaloft",
			"1x4xGround, 1x4x2nd, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b41e40ebb4eecc1f909"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-41-X",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x2xMain, 1x3xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e2b46e40ebb4eecc1f90b"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b46e40ebb4eecc1f911"),
		"Undefined" : [
			"Pickering",
			"Rosebank",
			"Durham",
			"274-3-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b4ce40ebb4eecc1f918"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b4ce40ebb4eecc1f91d"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-15-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xUpper, 1x2xMain, 1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b5ae40ebb4eecc1f927"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b69e40ebb4eecc1f942"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-R",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x3xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b69e40ebb4eecc1f949"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"269-26-P",
			"2015",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("576e2b69e40ebb4eecc1f951"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-29-M",
			"2015",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b70e40ebb4eecc1f956"),
		"Undefined" : [
			"Clarington",
			"Orono",
			"Durham",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x2xLower, 1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b70e40ebb4eecc1f95a"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b70e40ebb4eecc1f960"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-39-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b74e40ebb4eecc1f961"),
		"Undefined" : [
			"Brock",
			"Cannington",
			"Durham",
			"212-28-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b74e40ebb4eecc1f964"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x3, 1x2, 1x1"
		]
	},
	{
		"_id" : ObjectId("576e2b74e40ebb4eecc1f966"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"12-35-E",
			"2015",
			"Detached",
			"2-Storey",
			"2x2, 1x4, 1x5",
			"Greenhouse"
		]
	},
	{
		"_id" : ObjectId("576e2b74e40ebb4eecc1f967"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"12-35-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3",
			"Drive Shed"
		]
	},
	{
		"_id" : ObjectId("576e2b76e40ebb4eecc1f968"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b76e40ebb4eecc1f969"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"12-34-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xGround, 1x4xGround, 1x3x2nd, 1x6x2nd, 1x2xBsmt",
			"Paddocks"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f96a"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f96b"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Glencairn",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f96f"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"550-2-A",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f97a"),
		"Undefined" : [
			"Barrie",
			"South Shore",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x3rd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f97c"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f97d"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f97f"),
		"Undefined" : [
			"Clearview",
			"Rural Clearview",
			"Simcoe",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x2xMain, 1x2x3rd",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f981"),
		"Undefined" : [
			"Springwater",
			"Phelpston",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f984"),
		"Undefined" : [
			"Barrie",
			"Painswick North",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f988"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f98a"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"509-17-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f98b"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f98d"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Everett",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x5, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f98e"),
		"Undefined" : [
			"Tay",
			"Rural Tay",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x3xBsmt, 1x5x2nd, 1x2xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f990"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f992"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"501-7-B",
			"2016",
			"Detached",
			"2-Storey",
			"2x2xMain, 1x5xUpper, 1x4xUpper, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2b8ae40ebb4eecc1f993"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain, 1x2xMain, 1x4xLower, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b8fe40ebb4eecc1f997"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2b8fe40ebb4eecc1f998"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2015",
			"Rural Resid",
			"2-Storey",
			"1x4, 1x3, 2x2"
		]
	},
	{
		"_id" : ObjectId("576e2b8fe40ebb4eecc1f999"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-47-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xGround, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2b8fe40ebb4eecc1f99a"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e2b8fe40ebb4eecc1f99b"),
		"Undefined" : [
			"East Garafraxa",
			"Rural East Garafraxa",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x5xMain, 2x2xMain, 1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f99f"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-B",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9a4"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"457-32-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9b2"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-41-J",
			"2016",
			"Detached",
			"2-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9b6"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"458-33-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9bd"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-31-H",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9bf"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-43-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9c1"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-42-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9c2"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"464-32-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9c7"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-43-R",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x2xMain, 2x5x2nd, 1x3x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9c8"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-36-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9d1"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9d2"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9dc"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9de"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd, 1x4xMain, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9e5"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9e7"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"452-46-Z",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9e8"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9ec"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"466-43-J",
			"2016",
			"Detached",
			"Backsplit 4",
			"2x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9ee"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9ef"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"446-56-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9f0"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-S",
			"2015",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9f3"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"459-41-A",
			"2016",
			"Detached",
			"2-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9f5"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-58-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9f7"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x5x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bbae40ebb4eecc1f9fe"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"457-32-A",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3x2nd, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2bbae40ebb4eecc1fa00"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-37-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("576e2bbfe40ebb4eecc1fa04"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"432-61-J",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("576e2bbfe40ebb4eecc1fa09"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"15-28-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2bbfe40ebb4eecc1fa0a"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xMain, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bcde40ebb4eecc1fa0d"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2bcde40ebb4eecc1fa0f"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"14-26-J",
			"2015",
			"Detached",
			"Bungaloft",
			"1x4xMain, 1x3xUpper, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e2bcde40ebb4eecc1fa14"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bcde40ebb4eecc1fa17"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bcde40ebb4eecc1fa1f"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-24-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bcee40ebb4eecc1fa24"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-31-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bcee40ebb4eecc1fa26"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2015",
			"Detached",
			"Bungalow",
			"1x5xGround, 1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bcee40ebb4eecc1fa28"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x3xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2bcee40ebb4eecc1fa29"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Farm",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa2b"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-21-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa2c"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-25-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa2d"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5, 1x4, 1x2",
			"10",
			"Laundry",
			"Ground"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa31"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-19-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa36"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa37"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x3xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa38"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa3c"),
		"Undefined" : [
			"Oakville",
			"Clearview",
			"Halton",
			"477-32-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2xBsmt, 2x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa3e"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-26-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 3x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa3f"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-25-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa40"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3xBsmt, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2bdbe40ebb4eecc1fa41"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"19-29-N",
			"2016",
			"Farm",
			"2-Storey",
			"1x4xGround, 1x5xGround",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("576e2be1e40ebb4eecc1fa42"),
		"Undefined" : [
			"Burlington",
			"Grindstone",
			"Halton",
			"468-4-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("576e2be2e40ebb4eecc1fa4a"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"475-12-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2be2e40ebb4eecc1fa4c"),
		"Undefined" : [
			"Burlington",
			"Rural Burlington",
			"Halton",
			"455-16-E",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x2xMain, 1x4xMain, 1x4xMain",
			"Greenhouse"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa52"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Comm Element Condo",
			"Multi-Level",
			"1x4xMain",
			"905-793-5777"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa55"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-21-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa56"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa57"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa59"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-21-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa5a"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-798-3600"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa5c"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Loft",
			"1x2xMain, 1x4x2nd",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa5d"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-604-9155"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa64"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa65"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa66"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa77"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa7b"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Loft",
			"1x2xMain, 1x4x2nd",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa7c"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-972-1011"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa7d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-686-9618"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa7e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"647-259-8806"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa7f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4x3rd, 1x3x2nd, 1x2xMain",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa81"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-504-6133"
		]
	},
	{
		"_id" : ObjectId("576e2ccfe40ebb4eecc1fa82"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3, 1x2",
			"416-504-6133"
		]
	},
	{
		"_id" : ObjectId("576e2cdfe40ebb4eecc1fa84"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("576e2cdfe40ebb4eecc1fa85"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("576e2cdfe40ebb4eecc1fa86"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-640-3131"
		]
	},
	{
		"_id" : ObjectId("576e2cdfe40ebb4eecc1fa88"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"115-24-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("576e2cdfe40ebb4eecc1fa89"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa8a"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa8c"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa8e"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa8f"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-615-1600"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa90"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa92"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa94"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa97"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa9a"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x4x3rd",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa9b"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa9e"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1fa9f"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-19-J",
			"2016",
			"Comm Element Condo",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1faa0"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"104-25-A",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5, 3x2",
			"905-707-8001"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1faa1"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-D",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"2x3, 1x4x2nd",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("576e2ce0e40ebb4eecc1faa4"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-22-G",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xGround",
			"416-640-0512"
		]
	},
	{
		"_id" : ObjectId("576e2ceee40ebb4eecc1faa6"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-35-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("576e2ceee40ebb4eecc1faa8"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"844-726-4321"
		]
	},
	{
		"_id" : ObjectId("576e2ceee40ebb4eecc1faa9"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-431-9200"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1faab"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-293-5535"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1faae"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-36-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1faaf"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fab1"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-289-2155"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fab2"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-293-5535"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fab5"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"3x4",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fab6"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-40-J",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x3x2nd, 1x2xMain",
			"416-284-4751"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fab9"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1faba"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-35-F",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xGround, 1x4x2nd, 1x4x3rd",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fabc"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"Loft",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fabd"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2017",
			"Condo Townhouse",
			"Loft",
			"1x4xLower, 1x3x2nd",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fabe"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2017",
			"Condo Townhouse",
			"3-Storey",
			"1x3xLower, 1x2x3rd, 1x3xUpper",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("576e2cefe40ebb4eecc1fabf"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("576e2cf5e40ebb4eecc1faca"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xUpper, 1x4xUpper",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("576e2cf5e40ebb4eecc1facb"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-15-Q",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x5xUpper, 1x3x3rd, 1x2xMain",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1face"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"416-479-3891"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1facf"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad0"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad1"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad2"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad3"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad5"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-24-Y",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad6"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("576e2cfee40ebb4eecc1fad8"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-Y",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1fae6"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1fae7"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-499-4948"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1fae8"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1fae9"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-6363"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faeb"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faec"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"2",
			"Living",
			"Flat",
			"5.94",
			"3.05",
			"Hardwood Floor",
			"Combined W/Dining",
			"W/O To Balcony",
			"3",
			"Dining",
			"Flat",
			"5.94",
			"3.05",
			"Hardwood Floor",
			"Combined W/Living",
			"4",
			"Kitchen",
			"Flat",
			"2.44",
			"2.44",
			"Ceramic Floor",
			"Granite Counter",
			"Stainless Steel Appl",
			"5",
			"Master",
			"Flat",
			"3.66",
			"3.05",
			"Broadloom",
			"W/I Closet",
			"6",
			"Den",
			"Flat",
			"2.44",
			"1.83",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faee"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-W",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faef"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-298-8880"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faf0"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"479-43-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faf2"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("576e2d15e40ebb4eecc1faf4"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-537-2441"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1faf5"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-U",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1faf6"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1faf7"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1faf8"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fafa"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xUpper",
			"905-279-8888"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fafb"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-997-6000"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fb03"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"473-42-P",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x2",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fb05"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fb06"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-35-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fb09"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2015",
			"Condo Apt",
			"Loft",
			"1x7, 1x2",
			"905-997-6000"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fb0a"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"460-53-A",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("576e2d16e40ebb4eecc1fb0d"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-35-M",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xMain, 1x3x2nd",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("576e2d1ae40ebb4eecc1fb0f"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-25-Z",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("576e2d1ae40ebb4eecc1fb13"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"471-29-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xLower",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("576e2d73e40ebb4eecc1fb1a"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-P",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x5x2nd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("576e2d73e40ebb4eecc1fb21"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-M",
			"2016",
			"Triplex",
			"3-Storey",
			"2x5, 2x4, 4x2"
		]
	},
	{
		"_id" : ObjectId("576e2d75e40ebb4eecc1fb23"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d75e40ebb4eecc1fb24"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d81e40ebb4eecc1fb27"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-18-G",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2d81e40ebb4eecc1fb2f"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-19-B",
			"2015",
			"Detached",
			"Backsplit 5",
			"1x5xUpper, 1x4xUpper, 1x3xLower, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d81e40ebb4eecc1fb31"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x4x2nd, 1x2x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d81e40ebb4eecc1fb34"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-20-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x3, 1x5"
		]
	},
	{
		"_id" : ObjectId("576e2d81e40ebb4eecc1fb35"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-H",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2d82e40ebb4eecc1fb38"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d82e40ebb4eecc1fb39"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x7x2nd, 3x4x2nd, 1x2xMain, 1x2xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d89e40ebb4eecc1fb3b"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"104-25-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x2xUpper, 1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d89e40ebb4eecc1fb43"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"103-22-E",
			"2015",
			"Detached",
			"2-Storey",
			"2x2, 2x3, 2x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("576e2d89e40ebb4eecc1fb44"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 3x4x2nd, 1x4xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2d97e40ebb4eecc1fb45"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2d97e40ebb4eecc1fb47"),
		"Undefined" : [
			"Toronto E06",
			"Oakridge",
			"Toronto",
			"116-28-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2d98e40ebb4eecc1fb4f"),
		"Undefined" : [
			"Toronto E03",
			"Broadview North",
			"Toronto",
			"115-22-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2d98e40ebb4eecc1fb5d"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2015",
			"Detached",
			"3-Storey",
			"1x3xBsmt, 1x3x3rd, 1x2xGround, 2x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2da9e40ebb4eecc1fb70"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2da9e40ebb4eecc1fb71"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2da9e40ebb4eecc1fb72"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2da9e40ebb4eecc1fb73"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2da9e40ebb4eecc1fb76"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2da9e40ebb4eecc1fb81"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd, 1x5x2nd, 2x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2dc0e40ebb4eecc1fb98"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-S",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dc0e40ebb4eecc1fb9b"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2dc0e40ebb4eecc1fb9d"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2dc0e40ebb4eecc1fb9f"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-4-M",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4x2nd, 1x4x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dc1e40ebb4eecc1fba2"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-U",
			"2016",
			"Detached",
			"Bungalow",
			"2x3"
		]
	},
	{
		"_id" : ObjectId("576e2dc1e40ebb4eecc1fba6"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-T",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dc1e40ebb4eecc1fba7"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dcee40ebb4eecc1fbae"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-22-R",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e2dcee40ebb4eecc1fbb1"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x2xMain, 1x3xLower, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2dcee40ebb4eecc1fbb5"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2dcee40ebb4eecc1fbbb"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-21-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x6xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dcee40ebb4eecc1fbc0"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("576e2dd8e40ebb4eecc1fbc2"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2dd8e40ebb4eecc1fbc6"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e2dd8e40ebb4eecc1fbcb"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"319-25-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2dd8e40ebb4eecc1fbcd"),
		"Undefined" : [
			"Newmarket",
			"Glenway Estates",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dd9e40ebb4eecc1fbd1"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 2x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbd8"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-17-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbdc"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-5-W",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbe3"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-10-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbe6"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-6-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x6xGround, 1x5xGround, 1x3xGround, 1x2xGround, 1x5xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbe7"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-17-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper, 1x6xUpper, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbe8"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"347-10-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2de7e40ebb4eecc1fbeb"),
		"Undefined" : [
			"King",
			"Schomberg",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e2df5e40ebb4eecc1fbee"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-40-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x2nd, 1x4x3rd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2df5e40ebb4eecc1fbf6"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-22-W",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2df5e40ebb4eecc1fbf7"),
		"Undefined" : [
			"Markham",
			"Old Markham Village",
			"York",
			"351-36-U",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x4x3rd, 1x3xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fbfb"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-30-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fbfd"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fbff"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fc00"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-25-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xBsmt, 1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fc03"),
		"Undefined" : [
			"Markham",
			"German Mills",
			"York",
			"355-26-Z",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3xBsmt, 1x3x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fc04"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"350-34-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2df6e40ebb4eecc1fc05"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-22-X",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x5xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2dfce40ebb4eecc1fc09"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2dfce40ebb4eecc1fc11"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2dfce40ebb4eecc1fc12"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"333-1-P",
			"2015",
			"Detached",
			"Bungalow",
			"1x6, 3x3, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2dffe40ebb4eecc1fc14"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-25-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2dffe40ebb4eecc1fc15"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"39-25-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x2xGround, 1x4xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2dffe40ebb4eecc1fc17"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-26-N",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x2xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e05e40ebb4eecc1fc1d"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-30-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("576e2e05e40ebb4eecc1fc1e"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-T",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x5xMain, 1x5xLower"
		]
	},
	{
		"_id" : ObjectId("576e2e0ee40ebb4eecc1fc28"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"274-8-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e0ee40ebb4eecc1fc2a"),
		"Undefined" : [
			"Pickering",
			"Highbush",
			"Durham",
			"266-3-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e0ee40ebb4eecc1fc2c"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"266-5-R",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e0ee40ebb4eecc1fc2d"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Detached",
			"3-Storey",
			"1x4x2nd, 1x3x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2e14e40ebb4eecc1fc32"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e14e40ebb4eecc1fc37"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e18e40ebb4eecc1fc40"),
		"Undefined" : [
			"Whitby",
			"Rural Whitby",
			"Durham",
			"16-35-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e28e40ebb4eecc1fc42"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-28-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e28e40ebb4eecc1fc47"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc4c"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc4d"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-Q",
			"2016",
			"Duplex",
			"2 1/2 Storey",
			"1x4xMain, 1x4x2nd, 1x4x3rd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc52"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-29-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc54"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-P",
			"2015",
			"Triplex",
			"2 1/2 Storey",
			"1x4xMain, 2x4x2nd, 1x2x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc57"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc5b"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc5c"),
		"Undefined" : [
			"Oshawa",
			"Northglen",
			"Durham",
			"269-26-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2e2ae40ebb4eecc1fc5f"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 1x4, 1x6"
		]
	},
	{
		"_id" : ObjectId("576e2e38e40ebb4eecc1fc68"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2e38e40ebb4eecc1fc70"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e38e40ebb4eecc1fc71"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"277-32-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x3xUpper, 1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e38e40ebb4eecc1fc72"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-40-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e38e40ebb4eecc1fc73"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"262-39-J",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e39e40ebb4eecc1fc76"),
		"Undefined" : [
			"Scugog",
			"Blackstock",
			"Durham",
			"240-37-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e3ae40ebb4eecc1fc77"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-14-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc7b"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x1xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc7c"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc80"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"507-8-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc86"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"506-17-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x5xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc87"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"508-16-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc89"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-N",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc8a"),
		"Undefined" : [
			"Barrie",
			"Northwest",
			"Simcoe",
			"504-6-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x5x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc8e"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc8f"),
		"Undefined" : [
			"Barrie",
			"Codrington",
			"Simcoe",
			"505-12-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e4ce40ebb4eecc1fc93"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e4ce40ebb4eecc1fc94"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e4de40ebb4eecc1fc96"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4x2nd, 2nd",
			"7",
			"Master",
			"2nd",
			"4.00",
			"3.40",
			"Broadloom",
			"Large Window",
			"8",
			"2nd Br",
			"2nd",
			"4.24",
			"2.71",
			"Hardwood Floor",
			"Large Window",
			"9",
			"Office",
			"2nd",
			"3.83",
			"3.40",
			"Hardwood Floor",
			"Large Window",
			"Moulded Ceiling",
			"10",
			"Kitchen",
			"2nd",
			"4.08",
			"2.45",
			"Hardwood Floor",
			"Large Window",
			"Pantry",
			"11",
			"Den",
			"2nd",
			"2.82",
			"2.73",
			"Hardwood Floor",
			"W/O To Deck",
			"Large Window",
			"12",
			"Laundry",
			"2nd",
			"4.64",
			"1.73",
			"Hardwood Floor",
			"Large Window"
		]
	},
	{
		"_id" : ObjectId("576e2e60e40ebb4eecc1fc9c"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-39-M",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e60e40ebb4eecc1fc9e"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-L",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fca1"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-B",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e1136e40ebb439ec1ad00"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4x2nd, 1x2xMain",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("576e2ae6e40ebb4eecc1f854"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2016",
			"Vacant Land",
			"2nd"
		]
	},
	{
		"_id" : ObjectId("576e2ae7e40ebb4eecc1f85d"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"112-41-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 3x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2af6e40ebb4eecc1f871"),
		"Undefined" : [
			"Toronto W10",
			"Thistletown-Beaumonde Heights",
			"Toronto",
			"101-7-D",
			"2016",
			"Store W/Apt/Offc",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x1xGround"
		]
	},
	{
		"_id" : ObjectId("576e2b36e40ebb4eecc1f8eb"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-32-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b41e40ebb4eecc1f906"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"301-34-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2b89e40ebb4eecc1f97e"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ba2e40ebb4eecc1f9c4"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"472-33-L",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9cc"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2bb9e40ebb4eecc1f9cd"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"451-38-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("576e2bbae40ebb4eecc1f9ff"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 3x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577dcd217e6ddc53f32ce01c"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("576e2ceee40ebb4eecc1faa7"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("576e2cf5e40ebb4eecc1fac7"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("576e2d1ae40ebb4eecc1fb11"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"437-33-O",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"800-834-5516"
		]
	},
	{
		"_id" : ObjectId("576e2d81e40ebb4eecc1fb30"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-18-D",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbda"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Z",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2de5e40ebb4eecc1fbe0"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-20-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2de7e40ebb4eecc1fbe9"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2e28e40ebb4eecc1fc45"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-28-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2e29e40ebb4eecc1fc48"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-Q",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2e48e40ebb4eecc1fc78"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577f85317e6ddc377ee4c927"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577f85317e6ddc377ee4c92a"),
		"Undefined" : [
			"Tay",
			"Port McNicoll",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577f85357e6ddc377ee4c93c"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577f853f7e6ddc377ee4c944"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-37-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577f855b7e6ddc377ee4c961"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-43-T",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577f855b7e6ddc377ee4c967"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"453-50-V",
			"2016",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577f855b7e6ddc377ee4c969"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x2xBsmt, 1x2xMain, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577f855b7e6ddc377ee4c978"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-T",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577f855c7e6ddc377ee4c989"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577f85697e6ddc377ee4c9a5"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-B",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577f85727e6ddc377ee4c9bb"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2015",
			"Detached",
			"Bungalow",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577f86317e6ddc377ee4c9de"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577f86317e6ddc377ee4c9e0"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("577f86327e6ddc377ee4c9ea"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("577f86327e6ddc377ee4c9f3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("577f86327e6ddc377ee4c9f6"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("577f86327e6ddc377ee4c9f7"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("577f86327e6ddc377ee4c9ff"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("577f86327e6ddc377ee4ca00"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4xFlat, 1x4x2nd, 1x3x2nd",
			"416-883-3888"
		]
	},
	{
		"_id" : ObjectId("577f86407e6ddc377ee4ca08"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-535-3103"
		]
	},
	{
		"_id" : ObjectId("577f86407e6ddc377ee4ca09"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577f86407e6ddc377ee4ca13"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-6868"
		]
	},
	{
		"_id" : ObjectId("577f86407e6ddc377ee4ca18"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("577f86497e6ddc377ee4ca24"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 0x3, 0x2",
			"416-461-0925"
		]
	},
	{
		"_id" : ObjectId("577f86497e6ddc377ee4ca2a"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577f86527e6ddc377ee4ca35"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-6-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-405-8484"
		]
	},
	{
		"_id" : ObjectId("577f86527e6ddc377ee4ca39"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-746-2999"
		]
	},
	{
		"_id" : ObjectId("577f86527e6ddc377ee4ca41"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577f86617e6ddc377ee4ca45"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2113",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-7997"
		]
	},
	{
		"_id" : ObjectId("577f86617e6ddc377ee4ca46"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577f86617e6ddc377ee4ca47"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"289-291-7648"
		]
	},
	{
		"_id" : ObjectId("577f86617e6ddc377ee4ca48"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f86617e6ddc377ee4ca4b"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-415-2720"
		]
	},
	{
		"_id" : ObjectId("577f86617e6ddc377ee4ca54"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("577f86627e6ddc377ee4ca58"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-415-2710"
		]
	},
	{
		"_id" : ObjectId("577f86757e6ddc377ee4ca66"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-789-7777"
		]
	},
	{
		"_id" : ObjectId("577f86757e6ddc377ee4ca75"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("577f86757e6ddc377ee4ca7a"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"647-497-7777"
		]
	},
	{
		"_id" : ObjectId("5780d2107e6ddc0e0dbd6204"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("5780d2237e6ddc0e0dbd6224"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3, 2"
		]
	},
	{
		"_id" : ObjectId("5780d2287e6ddc0e0dbd622f"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-14-J",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5780d2387e6ddc0e0dbd6236"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5780d2407e6ddc0e0dbd6251"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x3xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5780d2407e6ddc0e0dbd6258"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5780d2537e6ddc0e0dbd627e"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-28-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5780d2797e6ddc0e0dbd6291"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5780d2887e6ddc0e0dbd62a5"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xBsmt, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5780d2887e6ddc0e0dbd62a6"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"277-31-T",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5780d2a17e6ddc0e0dbd62c1"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("5780d2a17e6ddc0e0dbd62c3"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("5780d2a27e6ddc0e0dbd62ca"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5780d2a27e6ddc0e0dbd62e3"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5780d2b47e6ddc0e0dbd62fe"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x2x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5780d2b47e6ddc0e0dbd6303"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-45-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("5780d2b57e6ddc0e0dbd6309"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-37-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5780d2b57e6ddc0e0dbd630e"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5780d2b57e6ddc0e0dbd630f"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5780d2d47e6ddc0e0dbd6353"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5780d2e77e6ddc0e0dbd6362"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-26-P",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5780d2e87e6ddc0e0dbd636a"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5780d38b7e6ddc0e0dbd6385"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xFlat",
			"416-588-6777"
		]
	},
	{
		"_id" : ObjectId("5780d38b7e6ddc0e0dbd6386"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5780d38c7e6ddc0e0dbd638b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-270-8100"
		]
	},
	{
		"_id" : ObjectId("5780d38c7e6ddc0e0dbd6394"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-415-2710"
		]
	},
	{
		"_id" : ObjectId("5780d2cf7e6ddc0e0dbd633a"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"438-45-P",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x2xMain, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5784c6b77e6ddc257ca2d760"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-17-R",
			"2016",
			"Att/Row/Twnhouse",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5784c6bb7e6ddc257ca2d770"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5784c6c07e6ddc257ca2d783"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5784c6c87e6ddc257ca2d7a2"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5784c6dd7e6ddc257ca2d7ed"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-30-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xBsmt, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("5784c6ea7e6ddc257ca2d817"),
		"Undefined" : [
			"Toronto W03",
			"Keelesdale-Eglinton West",
			"Toronto",
			"114-13-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("5784c6ea7e6ddc257ca2d818"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"108-11-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5784c6ea7e6ddc257ca2d81b"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-11-L",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5784c6ea7e6ddc257ca2d828"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x2xMain, 1x1xMain, 2x4x2nd, 1x3x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5784c6eb7e6ddc257ca2d82b"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"1x7, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("5784c6f47e6ddc257ca2d854"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-6-U",
			"2019",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 1x3, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("5784c7487e6ddc257ca2d990"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c7497e6ddc257ca2d994"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"261-31-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5784c74c7e6ddc257ca2d9a8"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c74c7e6ddc257ca2d9aa"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"1x3",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("5784c74c7e6ddc257ca2d9ab"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c75e7e6ddc257ca2d9db"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"550-2-A",
			"2016",
			"Mobile/Trailer",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5784c75e7e6ddc257ca2d9e0"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xBsmt, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5784c75f7e6ddc257ca2d9e4"),
		"Undefined" : [
			"Innisfil",
			"Cookstown",
			"Simcoe",
			"577-2-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("5784c75f7e6ddc257ca2d9e9"),
		"Undefined" : [
			"Tay",
			"Port McNicoll",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c75f7e6ddc257ca2d9ec"),
		"Undefined" : [
			"Oro-Medonte",
			"Warminister",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5784c75f7e6ddc257ca2d9f4"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-20-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5784c7637e6ddc257ca2da06"),
		"Undefined" : [
			"East Luther Grand Valley",
			"Rural East Luther Grand Valley",
			"Dufferin",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c7637e6ddc257ca2da08"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5784c76d7e6ddc257ca2da24"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-43-R",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("57861d987e6ddc032a038f09"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"5x3"
		]
	},
	{
		"_id" : ObjectId("57876af37e6ddc2c84554500"),
		"Undefined" : [
			"Pickering",
			"Woodlands",
			"Durham",
			"266-4-S",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876b107e6ddc2c84554575"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("57876b257e6ddc2c845545b1"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Vacant Land",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545cb"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876b4f7e6ddc2c8455467f"),
		"Undefined" : [
			"Caledon",
			"Palgrave",
			"Peel",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876b4f7e6ddc2c84554680"),
		"Undefined" : [
			"Caledon",
			"Palgrave",
			"Peel",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876b597e6ddc2c845546a5"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("57876b597e6ddc2c845546aa"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("57876c337e6ddc2c8455488b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Parking Space",
			"0",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("57876c347e6ddc2c845548a2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("57876c347e6ddc2c845548a5"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-764-7200"
		]
	},
	{
		"_id" : ObjectId("57876c347e6ddc2c845548a6"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3xMain",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57876c347e6ddc2c845548a7"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("57861e1c7e6ddc032a0390fe"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Everett",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5788bab47e6ddc54b784699c"),
		"Undefined" : [
			"Vaughan",
			"Uplands",
			"York",
			"355-21-X",
			"2015",
			"Detached",
			"Multi-Level",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5788bb047e6ddc54b7846ac6"),
		"Undefined" : [
			"Severn",
			"Coldwater",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5788bb047e6ddc54b7846ac8"),
		"Undefined" : [
			"Orillia",
			"Orillia",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("5788bb047e6ddc54b7846ac9"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5788bb317e6ddc54b7846b90"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-48-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("578a10a77e6ddc26a2b6f35a"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("578a10d57e6ddc26a2b6f40a"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-Y",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578a10e57e6ddc26a2b6f443"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Z",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3, 2x3, 2x3"
		]
	},
	{
		"_id" : ObjectId("578a11147e6ddc26a2b6f4e6"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"550-4-B",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("578a11147e6ddc26a2b6f4ef"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-5-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578a11157e6ddc26a2b6f4fd"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578a11267e6ddc26a2b6f52d"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-39-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("578a11267e6ddc26a2b6f543"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-37-R",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5784c75e7e6ddc257ca2d9df"),
		"Undefined" : [
			"Oro-Medonte",
			"Moonstone",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbe867e6ddc0a9ab2bc6b"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"119-16-R",
			"2015",
			"Att/Row/Twnhouse",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("578dbea97e6ddc0a9ab2bcd5"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbf5f7e6ddc0a9ab2bf6e"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578dc0437e6ddc0a9ab2c1b3"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Parking Space",
			"Other",
			"0",
			"416-922-6995"
		]
	},
	{
		"_id" : ObjectId("578dc0437e6ddc0a9ab2c1b6"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"416-218-9898"
		]
	},
	{
		"_id" : ObjectId("578dc08f7e6ddc0a9ab2c30a"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("578dc0a37e6ddc0a9ab2c34a"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4xUpper",
			"905-625-5678"
		]
	},
	{
		"_id" : ObjectId("578f538d7e6ddc4d5109d110"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-30-E",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("57861ddf7e6ddc032a03902f"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"337-20-E",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5790aa2b7e6ddc417b91c7de"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-22-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xGround",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("5790aa347e6ddc417b91c7f8"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-209-1400"
		]
	},
	{
		"_id" : ObjectId("5790aa417e6ddc417b91c822"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-11-C",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x2",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5790aa417e6ddc417b91c824"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5790aa417e6ddc417b91c825"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5790aa417e6ddc417b91c826"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"107-6-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-624-5678"
		]
	},
	{
		"_id" : ObjectId("5790aa417e6ddc417b91c82f"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5790aa417e6ddc417b91c830"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"2015",
			"Co-Op Apt",
			"Apartment",
			"1x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5790aa427e6ddc417b91c834"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5790aa427e6ddc417b91c838"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-B",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2x2nd, 1x4x2nd, 2x4x3rd, 1x3xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5790aa497e6ddc417b91c850"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5790aa4a7e6ddc417b91c852"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("5790aa4a7e6ddc417b91c857"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("57924eca7e6ddc2dd16a8fd2"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57924fbe7e6ddc2dd16a91c6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("57924fbf7e6ddc2dd16a91cb"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57924fbf7e6ddc2dd16a91d0"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-624-5678"
		]
	},
	{
		"_id" : ObjectId("57924fbf7e6ddc2dd16a91d6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("576e2ae7e40ebb4eecc1f85e"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2"
		]
	},
	{
		"_id" : ObjectId("576e2ccee40ebb4eecc1fa4d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Parking Space",
			"0xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("576e2d73e40ebb4eecc1fb1f"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2015",
			"Detached",
			"3-Storey",
			"4x0"
		]
	},
	{
		"_id" : ObjectId("5784c7637e6ddc257ca2da05"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c8ac7e6ddc257ca2de0d"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("57876af07e6ddc2c845544f4"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"2016",
			"Other",
			"Other"
		]
	},
	{
		"_id" : ObjectId("57973cd37e6ddc672e7b5557"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-35-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("57973cd67e6ddc672e7b5563"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-22-Z",
			"2016",
			"Store W/Apt/Offc",
			"2 1/2 Storey",
			"1x2xMain, 1x2xBsmt, 1x3x3rd, 1x3xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cd77e6ddc672e7b5565"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-29-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("57973d137e6ddc672e7b5644"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57973d477e6ddc672e7b571e"),
		"Undefined" : [
			"Caledon",
			"Alton",
			"Peel",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973d577e6ddc672e7b5763"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57973e327e6ddc672e7b59a8"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57973e327e6ddc672e7b59ac"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-498-9995"
		]
	},
	{
		"_id" : ObjectId("57973e337e6ddc672e7b59b5"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xLower, 1x2xMain",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("579892477e6ddc5b8e7e3e78"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5798927c7e6ddc5b8e7e3f06"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("579892847e6ddc5b8e7e3f1c"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"312-53-E",
			"2016",
			"Cottage",
			"Bungalow",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("579892847e6ddc5b8e7e3f1d"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"12-33-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("579892847e6ddc5b8e7e3f1f"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("579892e87e6ddc5b8e7e4031"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x2x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("579892e87e6ddc5b8e7e4039"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"464-32-K",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("579893967e6ddc5b8e7e4226"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("579893a97e6ddc5b8e7e4268"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 0x3, 0x2",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("579893b47e6ddc5b8e7e429e"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x6xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("579893c77e6ddc5b8e7e42ea"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5799df967e6ddc7d0596eeaa"),
		"Undefined" : [
			"Pickering",
			"West Shore",
			"Durham",
			"274-5-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5799e0007e6ddc7d0596f030"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"427-23-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("579b30b17e6ddc59b4ab3350"),
		"Undefined" : [
			"King",
			"Schomberg",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("579b30fd7e6ddc59b4ab346d"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"502-12-F",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("579b312b7e6ddc59b4ab3527"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577dbb517e6ddc53f32cdfb8"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Parking Space",
			"0x0",
			"416-495-2660"
		]
	},
	{
		"_id" : ObjectId("576e0f4fe40ebb439ec1ab04"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-17-Q",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("579c831e7e6ddc56b0d3b49c"),
		"Undefined" : [
			"Barrie",
			"Letitia Heights",
			"Simcoe",
			"504-7-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579c831f7e6ddc56b0d3b4ab"),
		"Undefined" : [
			"Oro-Medonte",
			"Hawkestone",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579c834d7e6ddc56b0d3b564"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"438-42-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("579c835e7e6ddc56b0d3b5a6"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-30-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 2x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("579c83d27e6ddc56b0d3b6aa"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("57a07b957e6ddc7c6ca8525c"),
		"Undefined" : [
			"Toronto W04",
			"Brookhaven-Amesbury",
			"Toronto",
			"108-11-K",
			"2015",
			"Detached",
			"3-Storey",
			"1x4, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a07bb87e6ddc7c6ca852c7"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-24-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57a07bc37e6ddc7c6ca852e5"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-R",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x3xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854b9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854bb"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854c0"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57a07c7e7e6ddc7c6ca8550a"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-38-E",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("57a1c6b87e6ddc4e8907337c"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a1c6f57e6ddc4e89073446"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-11-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a1c76f7e6ddc4e890735ff"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-Q",
			"2016",
			"Detached",
			"2-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57a1c77e7e6ddc4e8907362b"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"2015",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("57a1c7827e6ddc4e8907363f"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"234-38-M",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("57a1c7977e6ddc4e8907367d"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a31be97e6ddc398e568d54"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-23-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a5bfd47e6ddc5eda505b0b"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-34-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b3287e6ddc35ef17c4da"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"121-25-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b3977e6ddc35ef17c66b"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"351-37-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b3ac7e6ddc35ef17c6a8"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-53-T",
			"2015",
			"Vacant Land",
			"1x0"
		]
	},
	{
		"_id" : ObjectId("57a9b3bd7e6ddc35ef17c6ea"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4x2nd, 1x3x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3d27e6ddc35ef17c736"),
		"Undefined" : [
			"Brock",
			"Rural Brock",
			"Durham",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a9b45c7e6ddc35ef17c8eb"),
		"Undefined" : [
			"Milton",
			"Trafalgar",
			"Halton",
			"19-29-N",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a9b5af7e6ddc35ef17cc43"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57a9b5cd7e6ddc35ef17cca0"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-14-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("57a9b5cd7e6ddc35ef17cca6"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"647-588-5000"
		]
	},
	{
		"_id" : ObjectId("57ab04bc7e6ddc4af6f9df43"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Parking Space",
			"0",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("57ab04bc7e6ddc4af6f9df44"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Parking Space",
			"0",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("57ac53da7e6ddc0ca819bee5"),
		"Undefined" : [
			"Markham",
			"Old Markham Village",
			"York",
			"357-36-V",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57ada8057e6ddc504d734523"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x2x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57ada8fa7e6ddc504d7347ff"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"101-51-A",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fca8"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcaf"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-41-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcb2"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcb6"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-P",
			"2015",
			"Detached",
			"Bungalow",
			"1x5, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcb8"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcbd"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"478-34-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcbf"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-36-S",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcc2"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-S",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xUpper, 1x3xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e2e61e40ebb4eecc1fcc3"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x2xMain, 1x3xMain, 1x5xMain, 1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2e79e40ebb4eecc1fcc7"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e79e40ebb4eecc1fcc9"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcd1"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-52-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcd6"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcd9"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-49-X",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcdc"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"472-38-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fce1"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fce5"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-58-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fce7"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-T",
			"2016",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcee"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-39-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcf0"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"453-56-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcf2"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"451-40-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcf3"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcf7"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-53-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcf8"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"437-37-P",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4x2nd, 1x4x2nd, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e7fe40ebb4eecc1fcfc"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"423-55-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e7fe40ebb4eecc1fcff"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-44-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("576e2e8ae40ebb4eecc1fd06"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e8ae40ebb4eecc1fd0a"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e8ae40ebb4eecc1fd0e"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x3xUpper",
			"4",
			"Kitchen",
			"Main",
			"3.96",
			"2.90",
			"Ceramic Floor",
			"Updated",
			"Crown Moulding",
			"5",
			"Breakfast",
			"Main",
			"3.20",
			"3.20",
			"Ceramic Floor",
			"6",
			"Master",
			"2nd",
			"4.57",
			"3.96",
			"Hardwood Floor",
			"W/I Closet",
			"4 Pc Ensuite",
			"7",
			"2nd Br",
			"2nd",
			"3.45",
			"3.96",
			"Broadloom",
			"Double Closet",
			"8",
			"3rd Br",
			"2nd",
			"3.66",
			"3.51",
			"Broadloom",
			"Double Closet",
			"9",
			"4th Br",
			"2nd",
			"3.35",
			"4.27",
			"Broadloom",
			"Double Closet",
			"10",
			"Loft",
			"2nd",
			"3.80",
			"3.35",
			"Hardwood Floor",
			"4 Pc Bath",
			"11",
			"Laundry",
			"Main",
			"2.13",
			"1.98",
			"Ceramic Floor"
		]
	},
	{
		"_id" : ObjectId("576e2e8ae40ebb4eecc1fd11"),
		"Undefined" : [
			"Milton",
			"Esquesing",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x4xBsmt",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("576e2e8ae40ebb4eecc1fd12"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("576e2e98e40ebb4eecc1fd13"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("576e2e98e40ebb4eecc1fd1c"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-22-T",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x5xMain, 1x5xLower"
		]
	},
	{
		"_id" : ObjectId("576e2e98e40ebb4eecc1fd1e"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd25"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd26"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd27"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd29"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-V",
			"2016",
			"Detached",
			"Bungalow",
			"2x3"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd2c"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd2d"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-29-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd2e"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-29-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("576e2e99e40ebb4eecc1fd2f"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x3x2nd, 1x5x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("576e2ea1e40ebb4eecc1fd35"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-9-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2ea1e40ebb4eecc1fd36"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"469-16-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("576e2ea1e40ebb4eecc1fd38"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-T",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2ea1e40ebb4eecc1fd39"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("576e2ea1e40ebb4eecc1fd3a"),
		"Undefined" : [
			"Burlington",
			"Palmer",
			"Halton",
			"469-13-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("576e2ea1e40ebb4eecc1fd3b"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-11-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd3e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-218-9898"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd3f"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd40"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd42"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Bachelor/Studio",
			"1x1",
			"416-640-0512"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd45"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd46"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd48"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd4b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Loft",
			"1x3xMain",
			"416-250-6464"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd4c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd4d"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd4f"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-922-9111"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd54"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd58"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd5b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd5e"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd5f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd63"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd64"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("576e2f94e40ebb4eecc1fd67"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd68"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd6a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd70"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd71"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3xMain",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd73"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd74"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4, 1x2",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("576e2f95e40ebb4eecc1fd75"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"2016",
			"Condo Apt",
			"2-Storey",
			"2x4x2nd, 1x3xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("576e2fa0e40ebb4eecc1fd76"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Parking Space",
			"0",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("576e2fa0e40ebb4eecc1fd77"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-226-1987"
		]
	},
	{
		"_id" : ObjectId("576e2fa0e40ebb4eecc1fd7a"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2105",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("576e2fa0e40ebb4eecc1fd7b"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("576e2fa0e40ebb4eecc1fd82"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("576e2fa1e40ebb4eecc1fd86"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("576e2fa1e40ebb4eecc1fd89"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("576e2fa1e40ebb4eecc1fd8b"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x6xMain, 1x4xMain",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("576e2fa1e40ebb4eecc1fd8c"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xMain",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd8e"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd90"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd91"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"105-34-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-565-6363"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd92"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-283-1555"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd95"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4, 0x3, 0x2",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd96"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd99"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-25-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-961-1698"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd9a"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-25-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fd9b"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fd9c"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fd9e"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fda0"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-3-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-599-4003"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fda4"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-P",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"2x4",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fda6"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-8-V",
			"2015",
			"Co-Op Apt",
			"Apartment",
			"1x4xMain",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fda9"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4, 1x2",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdac"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-849-5360"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdaf"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-6-U",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xUpper, 1x3xUpper, 1x2xMain",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb0"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb2"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-201-0200"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb3"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb4"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb5"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x3xMain, 1x3x2nd, 1x3x2nd",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb7"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x6xFlat, 1x5xFlat, 1x2xFlat",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("576e2fb8e40ebb4eecc1fdb8"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x5xMain, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("576e2fc5e40ebb4eecc1fdb9"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("576e2fc5e40ebb4eecc1fdbb"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("576e2fc5e40ebb4eecc1fdbd"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("576e2fc5e40ebb4eecc1fdbf"),
		"Undefined" : [
			"Markham",
			"Commerce Valley",
			"York",
			"355-24-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xGround",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("576e2fc5e40ebb4eecc1fdc0"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-4180"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdc4"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdc6"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdc7"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdc8"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdca"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xBsmt, 1x4x2nd, 1x4x3rd",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdcd"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"356-33-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x6xFlat, 1x4xFlat",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdce"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("576e2fc6e40ebb4eecc1fdcf"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xFlat, 1x5xFlat, 1x6xFlat",
			"416-742-6464"
		]
	},
	{
		"_id" : ObjectId("576e2fc8e40ebb4eecc1fdd0"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-13-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("576e2fc8e40ebb4eecc1fdd2"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-Q",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x4x2nd, 1x2xGround, 1x2xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("576e2fd7e40ebb4eecc1fdd5"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdd6"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-2600"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdd7"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdd8"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fddb"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fddc"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fddd"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdde"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-W",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 1x4",
			"905-794-2677"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fde1"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fde3"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-43-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fde4"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"458-37-D",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x3xLower",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fde5"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"453-50-V",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fde8"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-35-L",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fde9"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-P",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xMain, 1x4x2nd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdea"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdeb"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-40-J",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3xMain, 1x4xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdec"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"459-41-B",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd, 1x3x3rd, 1x3xMain",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdef"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 2x3",
			"905-338-1515"
		]
	},
	{
		"_id" : ObjectId("576e2fd8e40ebb4eecc1fdf1"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"479-41-R",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("576e2fdbe40ebb4eecc1fdf4"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-27-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("576e2e79e40ebb4eecc1fcce"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("576e2e7ae40ebb4eecc1fcd2"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-43-W",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("576e2fa0e40ebb4eecc1fd83"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("576e2fa8e40ebb4eecc1fd93"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("577dba107e6ddc53f32cdf37"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-C",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577f84ab7e6ddc377ee4c832"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577f84ab7e6ddc377ee4c833"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xFlat, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577f84ab7e6ddc377ee4c834"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-D",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577f84b57e6ddc377ee4c842"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577f84c17e6ddc377ee4c85a"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577f84c17e6ddc377ee4c85b"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577f84c17e6ddc377ee4c85c"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577f84c17e6ddc377ee4c85d"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577f84c17e6ddc377ee4c85e"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577f84c67e6ddc377ee4c865"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3, 1x4, 2x4x2nd, 1x4"
		]
	},
	{
		"_id" : ObjectId("577f84d47e6ddc377ee4c877"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"2015",
			"Detached",
			"Other",
			"1x3xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577f84d47e6ddc377ee4c886"),
		"Undefined" : [
			"Richmond Hill",
			"Rural Richmond Hill",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577f84d47e6ddc377ee4c887"),
		"Undefined" : [
			"Richmond Hill",
			"Rural Richmond Hill",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577f84de7e6ddc377ee4c893"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"332-27-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577f84f47e6ddc377ee4c8c3"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577f84fc7e6ddc377ee4c8cc"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577f85007e6ddc377ee4c8d6"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-S",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577f85177e6ddc377ee4c8fa"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577f85207e6ddc377ee4c91c"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("577f85187e6ddc377ee4c90e"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-27-S",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c6f97e6ddc257ca2d861"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"343-22-P",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c6f97e6ddc257ca2d864"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-S",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c6ff7e6ddc257ca2d877"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"331-26-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5784c7107e6ddc257ca2d8c1"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-17-H",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5784c7207e6ddc257ca2d8f3"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-32-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5784c7217e6ddc257ca2d901"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-39-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 2x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5784c7217e6ddc257ca2d907"),
		"Undefined" : [
			"Markham",
			"Devil's Elbow",
			"York",
			"350-30-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x6, 1x4, 0x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5784c7287e6ddc257ca2d91b"),
		"Undefined" : [
			"Georgina",
			"Virginia",
			"York",
			"303-50-V",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("57876af07e6ddc2c845544f2"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876af07e6ddc2c845544f3"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876af07e6ddc2c845544f7"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-31-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57876b057e6ddc2c84554542"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876b0f7e6ddc2c84554562"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57876b257e6ddc2c845545b2"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Vacant Land",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57876c347e6ddc2c8455489c"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("57876c347e6ddc2c8455489d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-883-3888"
		]
	},
	{
		"_id" : ObjectId("578a10ad7e6ddc26a2b6f36d"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("578a10ad7e6ddc26a2b6f36f"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2015",
			"Link",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578a10bf7e6ddc26a2b6f3ac"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-12-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("578a11437e6ddc26a2b6f5b4"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f71c"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("578dc05e7e6ddc0a9ab2c22f"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("578dc08f7e6ddc0a9ab2c307"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-23-W",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("578dc0a27e6ddc0a9ab2c33f"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain, Main",
			"905-624-5678"
		]
	},
	{
		"_id" : ObjectId("578dc0a37e6ddc0a9ab2c34c"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578dbf6e7e6ddc0a9ab2bfc3"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"434-15-L",
			"2016",
			"Vacant Land",
			"Other",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd70"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"2016",
			"Multiplex",
			"2-Storey",
			"2x4, 3x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5784c6c87e6ddc257ca2d7a6"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"103-23-E",
			"2015",
			"Detached",
			"Bungalow",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("5790aa1a7e6ddc417b91c78f"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5790aa1b7e6ddc417b91c796"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5790aa1b7e6ddc417b91c79b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5790aa1b7e6ddc417b91c79c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-223-8833"
		]
	},
	{
		"_id" : ObjectId("5790aa1b7e6ddc417b91c7a5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("5790aa1c7e6ddc417b91c7ab"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("5790aa1c7e6ddc417b91c7ac"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5790aa2a7e6ddc417b91c7cc"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Parking Space",
			"0",
			"416-901-8881"
		]
	},
	{
		"_id" : ObjectId("5790aa2b7e6ddc417b91c7d4"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5790aa2b7e6ddc417b91c7da"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xLower, 1x2xMain",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5790aa2b7e6ddc417b91c7dd"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xLower, 1x2xMain",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5790aa347e6ddc417b91c7f7"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x2",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5790a8587e6ddc417b91c27e"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-B",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xUpper, 1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57924fd47e6ddc2dd16a9211"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("57924fd57e6ddc2dd16a9217"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-597-8677"
		]
	},
	{
		"_id" : ObjectId("57924fd57e6ddc2dd16a9218"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-8166"
		]
	},
	{
		"_id" : ObjectId("57924fe57e6ddc2dd16a9243"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-604-9155"
		]
	},
	{
		"_id" : ObjectId("57924fe57e6ddc2dd16a9245"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3x2nd",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("57924ff57e6ddc2dd16a9269"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-564-8383"
		]
	},
	{
		"_id" : ObjectId("57924ff57e6ddc2dd16a926e"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("5773475e7e6ddc4cf64bd9e5"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-Q",
			"2015",
			"Detached",
			"2-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("5773475e7e6ddc4cf64bd9e6"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-Q",
			"2016",
			"Detached",
			"Bungalow",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57934a757e6ddc792467ff45"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-32-M",
			"2016",
			"Detached",
			"Backsplit 3",
			"2x4, 0x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55b7"),
		"Undefined" : [
			"Collingwood",
			"Collingwood",
			"Simcoe",
			"2016",
			"Vacant Land",
			"Other",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57973d567e6ddc672e7b575f"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"19-29-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57973e327e6ddc672e7b59a2"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-709-8000"
		]
	},
	{
		"_id" : ObjectId("57973e327e6ddc672e7b59a4"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("57973e897e6ddc672e7b5b21"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("57973e897e6ddc672e7b5b2b"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x3x2nd",
			"416-551-6044"
		]
	},
	{
		"_id" : ObjectId("5798922b7e6ddc5b8e7e3e0f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("579892427e6ddc5b8e7e3e63"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"119-14-R",
			"2015",
			"Detached",
			"3-Storey",
			"4x4xUpper"
		]
	},
	{
		"_id" : ObjectId("579892427e6ddc5b8e7e3e64"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"119-14-R",
			"2015",
			"Detached",
			"3-Storey",
			"4x4xUpper"
		]
	},
	{
		"_id" : ObjectId("579892477e6ddc5b8e7e3e73"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("579892477e6ddc5b8e7e3e75"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-5-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xBsmt, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("579893a97e6ddc5b8e7e4269"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-6660"
		]
	},
	{
		"_id" : ObjectId("579893b47e6ddc5b8e7e42aa"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("5799df587e6ddc7d0596edbc"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5799dff77e6ddc7d0596effc"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"465-33-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5784c6c87e6ddc257ca2d79e"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("579c82ca7e6ddc56b0d3b387"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("579c82ca7e6ddc56b0d3b38f"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579c82ca7e6ddc56b0d3b391"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-21-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("579c831e7e6ddc56b0d3b4a1"),
		"Undefined" : [
			"Oro-Medonte",
			"Horseshoe Valley",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x3"
		]
	},
	{
		"_id" : ObjectId("57a07b837e6ddc7c6ca8521e"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"115-17-Q",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x4xMain, 1x4x2nd, 1x4x3rd, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a07bc07e6ddc7c6ca852de"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("57a07bc27e6ddc7c6ca852e4"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3xMain, 1x5xLower"
		]
	},
	{
		"_id" : ObjectId("57a07bfe7e6ddc7c6ca853ba"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 2x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca8552d"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57a07c9d7e6ddc7c6ca85574"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("57a31cd17e6ddc398e569060"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Farm",
			"Other",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57a5c07d7e6ddc5eda505d80"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-W",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("57a9b3977e6ddc35ef17c665"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3ec7e6ddc35ef17c787"),
		"Undefined" : [
			"Severn",
			"Fesserton",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b5af7e6ddc35ef17cc42"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("57ac536e7e6ddc0ca819bda9"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-19-A",
			"2016",
			"Semi-Detached",
			"Other",
			"1x4x2nd, 1x3xBsmt, 1x2xUpper, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773473b7e6ddc4cf64bd9a6"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5773473b7e6ddc4cf64bd9aa"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"115-17-Q",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x3xGround, 1x4x2nd, 1x3x2nd, 1x3x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773473b7e6ddc4cf64bd9ab"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773473d7e6ddc4cf64bd9af"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577347427e6ddc4cf64bd9b1"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"109-18-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347427e6ddc4cf64bd9b2"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-21-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577347427e6ddc4cf64bd9b5"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-18-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x5x2nd, 1x3x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577347427e6ddc4cf64bd9b6"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xGround, 2x4xBsmt, 1x5xGround"
		]
	},
	{
		"_id" : ObjectId("577347427e6ddc4cf64bd9b8"),
		"Undefined" : [
			"Toronto C04",
			"Forest Hill North",
			"Toronto",
			"109-17-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347467e6ddc4cf64bd9bb"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347467e6ddc4cf64bd9bd"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-21-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577347467e6ddc4cf64bd9bf"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x6xUpper, 1x4xUpper, 2x3xUpper, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577347497e6ddc4cf64bd9c0"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"120-23-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577347497e6ddc4cf64bd9c2"),
		"Undefined" : [
			"Toronto E06",
			"Oakridge",
			"Toronto",
			"116-29-Q",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347497e6ddc4cf64bd9c4"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9c6"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9cd"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-33-D",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9d0"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9d2"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2016",
			"Detached",
			"2-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9d3"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-28-K",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x2xMain, 1x5x2nd, 1x2x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9d4"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 3x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347597e6ddc4cf64bd9d5"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-11-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577347597e6ddc4cf64bd9da"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347597e6ddc4cf64bd9db"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577347597e6ddc4cf64bd9dc"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-10-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x6x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347597e6ddc4cf64bd9de"),
		"Undefined" : [
			"Toronto W04",
			"Rustic",
			"Toronto",
			"108-12-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773475d7e6ddc4cf64bd9e0"),
		"Undefined" : [
			"Toronto W10",
			"Thistletown-Beaumonde Heights",
			"Toronto",
			"101-8-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x5xLower"
		]
	},
	{
		"_id" : ObjectId("5773475d7e6ddc4cf64bd9e1"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-S",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773475e7e6ddc4cf64bd9e7"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 1x4, 1x6, 1x2",
			"10",
			"Br",
			"Bsmt",
			"3.38",
			"3.33",
			"Closet",
			"Hardwood Floor"
		]
	},
	{
		"_id" : ObjectId("577347647e6ddc4cf64bd9e9"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577347647e6ddc4cf64bd9eb"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 2x3"
		]
	},
	{
		"_id" : ObjectId("577347647e6ddc4cf64bd9f1"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-F",
			"2016",
			"Detached",
			"2-Storey",
			"2x5xUpper, 1x4xUpper, 2x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347647e6ddc4cf64bd9f2"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-25-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577347647e6ddc4cf64bd9f3"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x3x2nd, 1x4x2nd, 3x2, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347677e6ddc4cf64bd9f4"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"337-22-E",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577347677e6ddc4cf64bd9f5"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xUpper, 1x6x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577347677e6ddc4cf64bd9f7"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bd9fa"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bd9fb"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bd9fe"),
		"Undefined" : [
			"Vaughan",
			"Rural Vaughan",
			"York",
			"342-16-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bda01"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bda02"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-18-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bda04"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-18-W",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bda05"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-S",
			"2015",
			"Detached",
			"Bungalow",
			"2x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bda06"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347727e6ddc4cf64bda07"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"335-6-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577347727e6ddc4cf64bda0a"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x6, 2x4, 1x3, 1x2",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda0d"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x2xBsmt, 2x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda0e"),
		"Undefined" : [
			"Markham",
			"German Mills",
			"York",
			"355-26-Z",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda10"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Y",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda12"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda14"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Z",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda15"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-34-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda18"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 3x3, 1x5, 1x6"
		]
	},
	{
		"_id" : ObjectId("5773477e7e6ddc4cf64bda1c"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5773477e7e6ddc4cf64bda1d"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"320-30-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347817e6ddc4cf64bda1e"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-45-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577347817e6ddc4cf64bda1f"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577347817e6ddc4cf64bda21"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-55-X",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xGround, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577347817e6ddc4cf64bda22"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-W",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577347827e6ddc4cf64bda23"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"301-33-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577347847e6ddc4cf64bda24"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"266-7-S",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("577347847e6ddc4cf64bda26"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347847e6ddc4cf64bda27"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 2x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577347887e6ddc4cf64bda2c"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577347887e6ddc4cf64bda2e"),
		"Undefined" : [
			"Whitby",
			"Rural Whitby",
			"Durham",
			"12-35-F",
			"2015",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773478d7e6ddc4cf64bda34"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("5773478d7e6ddc4cf64bda35"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347907e6ddc4cf64bda39"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xLower, 1x2xMain, 1x3xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577347907e6ddc4cf64bda3a"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-39-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xBsmt, 2x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347907e6ddc4cf64bda3b"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-Q",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("577347927e6ddc4cf64bda3d"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"2x4xGround, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda40"),
		"Undefined" : [
			"Penetanguishene",
			"Penetanguishene",
			"Simcoe",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda41"),
		"Undefined" : [
			"Barrie",
			"Allandale Centre",
			"Simcoe",
			"505-10-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda44"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-21-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda45"),
		"Undefined" : [
			"Barrie",
			"Sunnidale",
			"Simcoe",
			"504-8-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda49"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2015",
			"Detached",
			"Bungaloft",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda4a"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-22-S",
			"2015",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda4c"),
		"Undefined" : [
			"Barrie",
			"Wellington",
			"Simcoe",
			"505-11-G",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577347a17e6ddc4cf64bda50"),
		"Undefined" : [
			"Barrie",
			"Sunnidale",
			"Simcoe",
			"504-8-H",
			"2016",
			"Detached",
			"Backsplit 5",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("577347a67e6ddc4cf64bda57"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577347a67e6ddc4cf64bda58"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577347a67e6ddc4cf64bda5c"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain, 1x4xLower, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577347a67e6ddc4cf64bda5d"),
		"Undefined" : [
			"East Garafraxa",
			"Rural East Garafraxa",
			"Dufferin",
			"2015",
			"Farm",
			"Other",
			"1x3, 1x3, 1x1, 1x1, 1x2",
			"Barn"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda60"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda61"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-40-D",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda64"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-M",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"1x4x2nd, 1x2xLower, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda65"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda67"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda68"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"473-44-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda69"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda6a"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-39-L",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda6f"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-S",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x3x2nd, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda70"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-43-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda71"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x5xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda73"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-35-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x5x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda75"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347b57e6ddc4cf64bda76"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-38-Q",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347b57e6ddc4cf64bda77"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-P",
			"2016",
			"Detached",
			"Bungalow",
			"2x2xMain, 1x6xMain, 1x5xMain, 1x4xMain, 2x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347c07e6ddc4cf64bda7a"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-42-Y",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x3xUpper, 1x3xBsmt, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda7c"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"446-49-T",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda7d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xIn Betwn, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda81"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda82"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-40-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda85"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda87"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"452-41-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda88"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda8c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda8d"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"458-34-E",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda8e"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"447-57-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347c47e6ddc4cf64bda93"),
		"Undefined" : [
			"Caledon",
			"Alton",
			"Peel",
			"407-43-P",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4xUpper, 2x2xGround",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("577347c47e6ddc4cf64bda94"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 3x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347cc7e6ddc4cf64bda96"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"427-24-H",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577347cc7e6ddc4cf64bda99"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-C",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347cd7e6ddc4cf64bda9d"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347cd7e6ddc4cf64bda9f"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577347cd7e6ddc4cf64bdaa0"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa2"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-20-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4x3rd, 1x2x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa3"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"477-28-R",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa4"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-26-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3xGround, 1x5x2nd, 2x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa5"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-24-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa6"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-U",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x3x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa7"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaa9"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-30-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347d27e6ddc4cf64bdaaa"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-24-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x6xUpper, 1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347d57e6ddc4cf64bdaad"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x5x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347d57e6ddc4cf64bdaae"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"475-13-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdaaf"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab2"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-259-0070"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab3"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-882-6882"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab6"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab7"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-707-8020"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab8"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-751-6533"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdabb"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdabc"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdabf"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdac0"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdac1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-471-0002"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdac2"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-21-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdac4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdac6"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xFlat",
			"416-922-5533"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdac7"),
		"Undefined" : [
			"Toronto C08",
			"North St. James Town",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdaca"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-848-9800"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x3xMain",
			"416-231-5000"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad2"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-365-3232"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad3"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"2x4xMain, 2x4xMain",
			"905-237-7303"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad6"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x7, 1x5, 1x2",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad7"),
		"Undefined" : [
			"Toronto C02",
			"Casa Loma",
			"Toronto",
			"115-18-P",
			"2016",
			"Condo Apt",
			"Loft",
			"1x5xMain, 1x2xMain",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad8"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x5",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdad9"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Townhouse",
			"Loft",
			"1x3, 1x5",
			"416-637-8000"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdada"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdadb"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5, 1x4, 1x2",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5773485c7e6ddc4cf64bdadc"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x5x3rd, 1x4x3rd, 1x3xUpper, 1x2x2nd",
			"613-966-7555"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdadd"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-385-0004"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdade"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdadf"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdae2"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdae5"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-489-1882"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdae7"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdae9"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdaea"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdaeb"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdaed"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdaf0"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-20-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x3xFlat, 1x2xFlat",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdaf1"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-20-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5773486e7e6ddc4cf64bdaf2"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5773486e7e6ddc4cf64bdaf3"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5773486e7e6ddc4cf64bdaf7"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-487-4311"
		]
	},
	{
		"_id" : ObjectId("5773486e7e6ddc4cf64bdaf8"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-290-1200"
		]
	},
	{
		"_id" : ObjectId("5773486e7e6ddc4cf64bdaf9"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-26-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdafa"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdafb"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-221-9911"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdafc"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"2016",
			"Co-Ownership Apt",
			"Apartment",
			"1x3",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdaff"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"416-252-7266"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb01"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb02"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb07"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb09"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb0b"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb0d"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"102-14-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x5, 1x4, 1x2",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb0e"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Townhouse",
			"Loft",
			"1x4x2nd, 1x2xMain",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("5773487b7e6ddc4cf64bdb0f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("577348857e6ddc4cf64bdb10"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("577348857e6ddc4cf64bdb14"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-709-8000"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb17"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb18"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb1b"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-22-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-553-8500"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb1c"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-470-2260"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb1d"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"355-19-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x5xFlat",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb1e"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat",
			"416-733-2666"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb1f"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-226-9777"
		]
	},
	{
		"_id" : ObjectId("577348867e6ddc4cf64bdb20"),
		"Undefined" : [
			"Markham",
			"Commerce Valley",
			"York",
			"355-25-W",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x3xMain, 2x4x3rd",
			"905-707-1882"
		]
	},
	{
		"_id" : ObjectId("577348877e6ddc4cf64bdb22"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-14-N",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3xLower",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("577348957e6ddc4cf64bdb23"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"465-35-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577348957e6ddc4cf64bdb24"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577348957e6ddc4cf64bdb25"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-693-9575"
		]
	},
	{
		"_id" : ObjectId("577348957e6ddc4cf64bdb26"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-583-1660"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb2a"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"473-42-P",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb2b"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"446-53-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb2c"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-746-9494"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb2d"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb2e"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb2f"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb30"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x2",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb31"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-229-0515"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb32"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"458-38-D",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xGround",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb34"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-46-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb35"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-35-K",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb39"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xGround",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb3a"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-656-3500"
		]
	},
	{
		"_id" : ObjectId("577348967e6ddc4cf64bdb3b"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577348987e6ddc4cf64bdb3c"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"477-29-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("577348987e6ddc4cf64bdb3d"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("577348987e6ddc4cf64bdb3e"),
		"Undefined" : [
			"Burlington",
			"Uptown",
			"Halton",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x3, 1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("577348de7e6ddc4cf64bdb40"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348de7e6ddc4cf64bdb44"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348de7e6ddc4cf64bdb45"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-R",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x4x2nd, 1x3xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577348de7e6ddc4cf64bdb47"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-18-L",
			"2016",
			"Detached",
			"3-Storey",
			"2x2xMain, 2x4x2nd, 1x5x2nd, 2x3x3rd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577348e07e6ddc4cf64bdb4a"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-Q",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x6x2nd, 2x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348e07e6ddc4cf64bdb4b"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-Q",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"2x4, 5x3, 2x2"
		]
	},
	{
		"_id" : ObjectId("577348e47e6ddc4cf64bdb4c"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"102-16-E",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348e47e6ddc4cf64bdb4f"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-19-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348e47e6ddc4cf64bdb50"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park South",
			"Toronto",
			"109-20-K",
			"2016",
			"Detached",
			"3-Storey",
			"1x3x3rd, 2x5x2nd, 1x3x2nd, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577348e97e6ddc4cf64bdb51"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-26-J",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577348e97e6ddc4cf64bdb54"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348e97e6ddc4cf64bdb56"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-D",
			"2015",
			"Detached",
			"Bungalow",
			"2x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577348e97e6ddc4cf64bdb58"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x7x2nd, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb60"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"116-30-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb62"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb64"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"117-34-L",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x4xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb67"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb69"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb72"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb73"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349027e6ddc4cf64bdb7c"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x3xMain, 1x4x2nd, 1x4x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349027e6ddc4cf64bdb7f"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-11-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x7x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349097e6ddc4cf64bdb82"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-B",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349097e6ddc4cf64bdb85"),
		"Undefined" : [
			"Toronto W09",
			"Humber Heights",
			"Toronto",
			"108-10-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577349097e6ddc4cf64bdb86"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349097e6ddc4cf64bdb87"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-4-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349097e6ddc4cf64bdb89"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349097e6ddc4cf64bdb8b"),
		"Undefined" : [
			"Toronto W08",
			"Edenbridge-Humber Valley",
			"Toronto",
			"113-8-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb8e"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb8f"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb90"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-22-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb91"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb94"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-22-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4xBsmt, 3x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb96"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-24-S",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb97"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb99"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-21-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb9b"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-21-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xMain, 2x4xMain, 1x2xMain, 1x4xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb9d"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb9f"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-26-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 2x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdba2"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-J",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdba6"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-27-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdba7"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdba8"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-23-D",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdbaa"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdbab"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdbad"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-25-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdbae"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-Z",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdbb1"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-29-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xIn Betwn, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349237e6ddc4cf64bdbb3"),
		"Undefined" : [
			"Aurora",
			"Aurora Estates",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x6xUpper, 3x4xUpper, 1x4xLower, 1x5xUpper, 3x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773492f7e6ddc4cf64bdbb4"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-0-W",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("5773492f7e6ddc4cf64bdbb5"),
		"Undefined" : [
			"Vaughan",
			"Vaughan Grove",
			"York",
			"353-6-Y",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbb9"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbbf"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 2x3, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbc0"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"355-19-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbc4"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"341-4-P",
			"2015",
			"Other",
			"2-Storey"
		]
	},
	{
		"_id" : ObjectId("577347427e6ddc4cf64bd9b7"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-19-C",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9c5"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9c8"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577347537e6ddc4cf64bd9cf"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"111-33-K",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5773476f7e6ddc4cf64bd9fd"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x5xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5773477a7e6ddc4cf64bda0f"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577347817e6ddc4cf64bda20"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-39-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577347907e6ddc4cf64bda37"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda46"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-22-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577347b47e6ddc4cf64bda66"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"458-33-E",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x2xBsmt, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577347c07e6ddc4cf64bda78"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"473-43-M",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577347c17e6ddc4cf64bda90"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"451-39-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577347c47e6ddc4cf64bda92"),
		"Undefined" : [
			"Caledon",
			"Alton",
			"Peel",
			"407-43-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577347d57e6ddc4cf64bdaab"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-V",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773485b7e6ddc4cf64bdab0"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("577348687e6ddc4cf64bdaec"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577348de7e6ddc4cf64bdb43"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-17-Q",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("577348e07e6ddc4cf64bdb48"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"193-77-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577348e47e6ddc4cf64bdb4d"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577348e97e6ddc4cf64bdb57"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-23-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577348f97e6ddc4cf64bdb63"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349187e6ddc4cf64bdb8d"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2016",
			"Detached",
			"2-Storey",
			"2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349227e6ddc4cf64bdba3"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c8c17e6ddc257ca2de70"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5784c8dc7e6ddc257ca2deb0"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"458-40-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("5784c8dc7e6ddc257ca2deb1"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("5784c8dc7e6ddc257ca2deb8"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-42-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("5784c8dd7e6ddc257ca2dec6"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xLower",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("5784c8dd7e6ddc257ca2decd"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("5784c8dd7e6ddc257ca2ded1"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("5784c8dd7e6ddc257ca2ded3"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"453-50-V",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-796-5200"
		]
	},
	{
		"_id" : ObjectId("5784c8de7e6ddc257ca2ded4"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-273-4211"
		]
	},
	{
		"_id" : ObjectId("5784c8de7e6ddc257ca2ded5"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5784c8de7e6ddc257ca2deda"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-273-4211"
		]
	},
	{
		"_id" : ObjectId("5784c8de7e6ddc257ca2dedf"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-M",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("5784c8e37e6ddc257ca2def4"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-22-R",
			"2015",
			"Condo Apt",
			"3-Storey",
			"1x2, 1x4",
			"905-281-2888"
		]
	},
	{
		"_id" : ObjectId("57861d9e7e6ddc032a038f21"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57861dad7e6ddc032a038f51"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-31-P",
			"2015",
			"Store W/Apt/Offc",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("57861dad7e6ddc032a038f59"),
		"Undefined" : [
			"Toronto E03",
			"Playter Estates-Danforth",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57861dbb7e6ddc032a038f87"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-D",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57861dbb7e6ddc032a038f88"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57861dbb7e6ddc032a038f8a"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("57861dc67e6ddc032a038fc7"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-10-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57861dcf7e6ddc032a038fec"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57861de97e6ddc032a03904d"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-S",
			"2016",
			"Link",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57861df17e6ddc032a039078"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57861df17e6ddc032a039079"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-B",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xGround, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("57861df17e6ddc032a03907a"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("57861df47e6ddc032a039083"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57861dfe7e6ddc032a0390a8"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57861e047e6ddc032a0390be"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57861e1c7e6ddc032a03910a"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-8-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57861e1d7e6ddc032a039117"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x5xMain, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("57861e427e6ddc032a039189"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("57861e437e6ddc032a0391a7"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-W",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57861e437e6ddc032a0391ae"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-49-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57861e437e6ddc032a0391b1"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57861e437e6ddc032a0391b2"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("57861e437e6ddc032a0391b3"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57861e437e6ddc032a0391b4"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 3x3x2nd"
		]
	},
	{
		"_id" : ObjectId("57876aa87e6ddc2c845543be"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57876aaf7e6ddc2c845543ee"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-R",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x6x2nd, 1x2xMain, 3x3xLower, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("57876ac57e6ddc2c84554438"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57876ad17e6ddc2c84554466"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-V",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57876adb7e6ddc2c845544a0"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-18-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("57876aeb7e6ddc2c845544e0"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545bd"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-L",
			"2016",
			"Link",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545c2"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545c3"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545c4"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545c7"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545c8"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xMain, 2x4x2nd, 1x3xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5788ba6f7e6ddc54b78468e0"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("5788ba757e6ddc54b78468f4"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x2nd, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5788ba8e7e6ddc54b784695e"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2016",
			"Multiplex",
			"2-Storey",
			"7x4"
		]
	},
	{
		"_id" : ObjectId("5788bac17e6ddc54b78469c8"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-35-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5788bac17e6ddc54b78469cb"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xMain, 3x4x2nd, 3x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5788bacc7e6ddc54b78469f5"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5788bae47e6ddc54b7846a54"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892b3"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-21-Q",
			"2019",
			"Triplex",
			"2 1/2 Storey",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("578a10b97e6ddc26a2b6f399"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-33-F",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578a10bf7e6ddc26a2b6f3ad"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"102-11-A",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x5xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578a10d57e6ddc26a2b6f407"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578a10eb7e6ddc26a2b6f460"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-31-C",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("578a10eb7e6ddc26a2b6f461"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-W",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("578a10eb7e6ddc26a2b6f464"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578a11037e6ddc26a2b6f4bf"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f71f"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f721"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-658-7232"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f723"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f724"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("578dbed27e6ddc0a9ab2bd6e"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbf5f7e6ddc0a9ab2bf70"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"453-50-V",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("578dc0447e6ddc0a9ab2c1bb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("578dc0447e6ddc0a9ab2c1c2"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578dc0447e6ddc0a9ab2c1c9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("578dc05f7e6ddc0a9ab2c248"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-773-7771"
		]
	},
	{
		"_id" : ObjectId("578dc0a27e6ddc0a9ab2c341"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578dc0a27e6ddc0a9ab2c347"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"452-41-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("578f53de7e6ddc4d5109d23d"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773473d7e6ddc4cf64bd9ae"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"109-20-K",
			"2015",
			"Detached",
			"Other",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("5790a9077e6ddc417b91c497"),
		"Undefined" : [
			"Orillia",
			"Orillia",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5790a9087e6ddc417b91c4a9"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"506-22-L",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x3xMain, 1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5790a91b7e6ddc417b91c4d8"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x3xBsmt, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5790a9367e6ddc417b91c536"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5790a9377e6ddc417b91c54f"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"451-40-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("5790a9377e6ddc417b91c550"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5790a9397e6ddc417b91c56a"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x6, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("5790a9477e6ddc417b91c594"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5790aa1a7e6ddc417b91c78d"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("578dbed27e6ddc0a9ab2bd76"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"341-8-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57924d427e6ddc2dd16a8b36"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-17-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("57924d977e6ddc2dd16a8c36"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"332-27-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57924dd17e6ddc2dd16a8cee"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-29-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57924e437e6ddc2dd16a8e11"),
		"Undefined" : [
			"Severn",
			"Port Severn",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57924ff57e6ddc2dd16a926f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("57924ff67e6ddc2dd16a9273"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-883-0892"
		]
	},
	{
		"_id" : ObjectId("57924ff67e6ddc2dd16a9275"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("57924ff67e6ddc2dd16a9276"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("579250067e6ddc2dd16a92ac"),
		"Undefined" : [
			"Vaughan",
			"Lakeview Estates",
			"York",
			"355-19-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x6xFlat, 1x3xFlat, 1x2xFlat",
			"905-832-1111"
		]
	},
	{
		"_id" : ObjectId("579250267e6ddc2dd16a92f6"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("579250987e6ddc2dd16a93d1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-886-2888"
		]
	},
	{
		"_id" : ObjectId("5773475e7e6ddc4cf64bd9e4"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-Q",
			"2015",
			"Detached",
			"Bungalow",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("578a11157e6ddc26a2b6f503"),
		"Undefined" : [
			"Collingwood",
			"Collingwood",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5790a8cd7e6ddc417b91c3cc"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-45-U",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5790a9367e6ddc417b91c532"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-42-V",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"3x3"
		]
	},
	{
		"_id" : ObjectId("5773494c7e6ddc4cf64bdbe9"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"2016",
			"Other",
			"Other"
		]
	},
	{
		"_id" : ObjectId("57934a7c7e6ddc792467ff63"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-M",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"3x3"
		]
	},
	{
		"_id" : ObjectId("57934a7d7e6ddc792467ff68"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-13-G",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57934aa07e6ddc792467fff5"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 3x3x2nd, 1x2"
		]
	},
	{
		"_id" : ObjectId("57973c497e6ddc672e7b533b"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"119-16-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("57973c557e6ddc672e7b536b"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973c6a7e6ddc672e7b53af"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-36-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57973c757e6ddc672e7b53e2"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-N",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57973ca07e6ddc672e7b548f"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-4-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57973cc47e6ddc672e7b551c"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-19-Q",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57973d147e6ddc672e7b5653"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-43-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 4x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("57973d3f7e6ddc672e7b56da"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-X",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57973d407e6ddc672e7b56dd"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-43-W",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("57973d477e6ddc672e7b5723"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"15-28-G",
			"2015",
			"Farm",
			"Bungalow",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("57973e197e6ddc672e7b5940"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x3xMain, Main, Main",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("57973e197e6ddc672e7b5941"),
		"Undefined" : [
			"Toronto C08",
			"North St. James Town",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-707-1188"
		]
	},
	{
		"_id" : ObjectId("57973e197e6ddc672e7b5945"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x0",
			"416-645-4670"
		]
	},
	{
		"_id" : ObjectId("57973e1a7e6ddc672e7b594c"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("57973e1b7e6ddc672e7b5956"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("57973e317e6ddc672e7b599e"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-22-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57973e317e6ddc672e7b599f"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("57973e337e6ddc672e7b59c0"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-21-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3, 1x2",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("57973e457e6ddc672e7b59f7"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57973e457e6ddc672e7b59f8"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("57973e697e6ddc672e7b5a9f"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("57973e877e6ddc672e7b5b05"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("57973e877e6ddc672e7b5b09"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"464-32-G",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xGround, 1x4x3rd",
			"905-290-6777"
		]
	},
	{
		"_id" : ObjectId("57973e877e6ddc672e7b5b0a"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57973e877e6ddc672e7b5b0b"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x3, 1x4",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("57973e887e6ddc672e7b5b0f"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-457-1242"
		]
	},
	{
		"_id" : ObjectId("57973e887e6ddc672e7b5b11"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Other",
			"1x3xFlat",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("57973e887e6ddc672e7b5b12"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Other",
			"1x3xFlat",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("57973e887e6ddc672e7b5b16"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4xLower",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("57973e887e6ddc672e7b5b1f"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-H",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4x2nd",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("579893157e6ddc5b8e7e40f1"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-U",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x2, 1x2, 1x5"
		]
	},
	{
		"_id" : ObjectId("579893b47e6ddc5b8e7e42a8"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"Loft",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("579893bf7e6ddc5b8e7e42ca"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("579893c77e6ddc5b8e7e42ed"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5799df437e6ddc7d0596ed70"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"109-18-F",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5799df587e6ddc7d0596edbe"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-C",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5799df5d7e6ddc7d0596edd1"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-10-H",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5799df637e6ddc7d0596ede1"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-5-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5799df6a7e6ddc7d0596edfa"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-H",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5799df877e6ddc7d0596ee6b"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-40-V",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("579b307b7e6ddc59b4ab328c"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"102-16-A",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("579b308a7e6ddc59b4ab32c3"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-32-M",
			"2016",
			"Detached",
			"Backsplit 3",
			"2x4, 0x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("579b30c97e6ddc59b4ab33ac"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579b31117e6ddc59b4ab34c1"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-44-M",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("579c82df7e6ddc56b0d3b3dd"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-16-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xFlat"
		]
	},
	{
		"_id" : ObjectId("579c83527e6ddc56b0d3b579"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2016",
			"Vacant Land",
			"Other",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("579c83d37e6ddc56b0d3b6b0"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-289-3000"
		]
	},
	{
		"_id" : ObjectId("579c83d37e6ddc56b0d3b6b1"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("579c83d37e6ddc56b0d3b6b4"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("57a07bb07e6ddc7c6ca852b2"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"2016",
			"Link",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a07bd37e6ddc7c6ca85307"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a07bfc7e6ddc7c6ca853b4"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"2015",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57a07c687e6ddc7c6ca854a4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Locker",
			"0",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854a6"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854c1"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca8552c"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("57a07c9d7e6ddc7c6ca85579"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"472-35-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4",
			"416-235-2500"
		]
	},
	{
		"_id" : ObjectId("57a1c6ac7e6ddc4e89073350"),
		"Undefined" : [
			"Toronto C01",
			"Dufferin Grove",
			"Toronto",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c6e77e6ddc4e8907341a"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x3, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a1c72c7e6ddc4e89073512"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"2015",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("57a1c7e17e6ddc4e89073790"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"439-56-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a1c93c7e6ddc4e89073b34"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-707-8001"
		]
	},
	{
		"_id" : ObjectId("57a31c9e7e6ddc398e568fa2"),
		"Undefined" : [
			"Pickering",
			"Woodlands",
			"Durham",
			"274-45-F",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a31ce67e6ddc398e569097"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a46b3b7e6ddc08969b9aec"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-J",
			"2015",
			"Detached",
			"2-Storey",
			"5x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a46ba87e6ddc08969b9c65"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-F",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a5c1437e6ddc5eda505fac"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"0x0",
			"416-222-7750"
		]
	},
	{
		"_id" : ObjectId("57a9b3297e6ddc35ef17c4e0"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-26-S",
			"2016",
			"Detached",
			"3-Storey",
			"1x4xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("57a9b33a7e6ddc35ef17c51b"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-30-E",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b3607e6ddc35ef17c5a2"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"343-22-P",
			"2016",
			"Detached",
			"Bungalow",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57a9b36b7e6ddc35ef17c5d4"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x4, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b3987e6ddc35ef17c670"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-21-Z",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3ab7e6ddc35ef17c6a6"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-53-T",
			"2015",
			"Vacant Land",
			"1x0"
		]
	},
	{
		"_id" : ObjectId("57a9b3ac7e6ddc35ef17c6a7"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-53-U",
			"2015",
			"Vacant Land",
			"1x0"
		]
	},
	{
		"_id" : ObjectId("57a9b3ac7e6ddc35ef17c6af"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-53-U",
			"2015",
			"Cottage",
			"1 1/2 Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a9b3ec7e6ddc35ef17c783"),
		"Undefined" : [
			"Springwater",
			"Elmvale",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b5797e6ddc35ef17cb63"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-543-0268"
		]
	},
	{
		"_id" : ObjectId("57a9b5af7e6ddc35ef17cc4a"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("57ab032a7e6ddc4af6f9dac6"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-A",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("57ab03357e6ddc4af6f9daf2"),
		"Undefined" : [
			"Toronto E03",
			"Broadview North",
			"Toronto",
			"115-23-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("57ab03467e6ddc4af6f9db24"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-35-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57ac536a7e6ddc0ca819bd9e"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x3xGround, 1x3xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57ac53767e6ddc0ca819bdbf"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57ac555f7e6ddc0ca819c31c"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Parking Space",
			"Other",
			"0",
			"416-538-5638"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbc3"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"347-10-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xMain, 2x4x2nd, 1x5x2nd, 1x6x2nd"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbc5"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"2x2, 2x4, 1x7"
		]
	},
	{
		"_id" : ObjectId("577349307e6ddc4cf64bdbc6"),
		"Undefined" : [
			"Vaughan",
			"Rural Vaughan",
			"York",
			"343-19-N",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x2xMain, 2x5xMain, 1x4xMain, 2x3xGround"
		]
	},
	{
		"_id" : ObjectId("577349327e6ddc4cf64bdbc7"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577349327e6ddc4cf64bdbc8"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-17-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbcb"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x2xMain, 1x3x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbcc"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-39-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbcd"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-38-V",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbd0"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2015",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbd5"),
		"Undefined" : [
			"Markham",
			"Angus Glen",
			"York",
			"350-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbd6"),
		"Undefined" : [
			"Markham",
			"Old Markham Village",
			"York",
			"357-36-V",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbda"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-26-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x6x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbdf"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x2xGround, 1x4xBsmt, 2x4"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbe1"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349427e6ddc4cf64bdbe2"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-30-U",
			"2015",
			"Detached",
			"Backsplit 5",
			"1x4xLower, 2x4xUpper, 1x3xIn Betwn"
		]
	},
	{
		"_id" : ObjectId("577349447e6ddc4cf64bdbe4"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"333-35-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x5x2nd, 2x3x2nd, 2x3xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349477e6ddc4cf64bdbe5"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"319-26-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349477e6ddc4cf64bdbe6"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-25-M",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349477e6ddc4cf64bdbe7"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"320-31-Q",
			"2015",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5773494c7e6ddc4cf64bdbeb"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5773494c7e6ddc4cf64bdbee"),
		"Undefined" : [
			"Georgina",
			"Virginia",
			"York",
			"304-51-T",
			"2015",
			"Cottage",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5773494c7e6ddc4cf64bdbf2"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-41-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577349547e6ddc4cf64bdbf7"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349547e6ddc4cf64bdbf8"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349547e6ddc4cf64bdbfd"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-15-M",
			"2015",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349547e6ddc4cf64bdbfe"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349567e6ddc4cf64bdbff"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"260-20-M",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773495c7e6ddc4cf64bdc03"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-24-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5773495c7e6ddc4cf64bdc09"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-J",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773495c7e6ddc4cf64bdc0a"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-26-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 2x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5773495c7e6ddc4cf64bdc0b"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349617e6ddc4cf64bdc0c"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577349617e6ddc4cf64bdc10"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349647e6ddc4cf64bdc16"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577349697e6ddc4cf64bdc1a"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"12-34-D",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577349697e6ddc4cf64bdc1b"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"12-34-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain, 1x4xMain, 1x3xBsmt",
			"Box Stall"
		]
	},
	{
		"_id" : ObjectId("577349697e6ddc4cf64bdc1c"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xMain, 2x5xMain, 1x3, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349697e6ddc4cf64bdc1d"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"12-33-F",
			"2016",
			"Detached",
			"3-Storey",
			"1x4xMain, 1x3xUpper, 1x6xUpper, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349697e6ddc4cf64bdc1e"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5773497b7e6ddc4cf64bdc1f"),
		"Undefined" : [
			"Tay",
			"Victoria Harbour",
			"Simcoe",
			"2015",
			"Mobile/Trailer",
			"Bungalow",
			"1x4xFlat",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("5773497b7e6ddc4cf64bdc20"),
		"Undefined" : [
			"Clearview",
			"Brentwood",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc24"),
		"Undefined" : [
			"Barrie",
			"Allandale Heights",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc27"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"2016",
			"Link",
			"Sidesplit 4",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc2c"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"550-4-A",
			"2015",
			"Link",
			"2-Storey",
			"2x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc2e"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-22-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc2f"),
		"Undefined" : [
			"Barrie",
			"400 North",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc33"),
		"Undefined" : [
			"Tiny",
			"Wyevale",
			"Simcoe",
			"2016",
			"Cottage",
			"Bungalow",
			"1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc34"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-T",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc39"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-M",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc3c"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc3d"),
		"Undefined" : [
			"Springwater",
			"Phelpston",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc3e"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x2xMain, 2x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577349817e6ddc4cf64bdc41"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349817e6ddc4cf64bdc42"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349817e6ddc4cf64bdc44"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577349817e6ddc4cf64bdc45"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc47"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-50-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc4a"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc4b"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-35-G",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc4c"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc4d"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-F",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x3x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc4e"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc50"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-36-J",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc51"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-39-K",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc54"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-43-L",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc5d"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-35-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc5f"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-N",
			"2015",
			"Detached",
			"2-Storey",
			"2x6, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349937e6ddc4cf64bdc60"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"479-41-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc69"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc6a"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"446-49-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc6e"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc71"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-U",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc76"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"453-49-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc77"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc78"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-S",
			"2015",
			"Link",
			"Backsplit 4",
			"1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc79"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-V",
			"2015",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc80"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc81"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"459-41-A",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc84"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-42-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc85"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"472-40-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc87"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington North",
			"Peel",
			"444-38-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x3rd, 1x4x3rd, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc88"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-39-Z",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc8a"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"451-40-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc8b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"451-40-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc8c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x4xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b27e6ddc4cf64bdc8f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-51-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x4, 1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577349b27e6ddc4cf64bdc90"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"452-43-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349b27e6ddc4cf64bdc93"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-38-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x6, 1x5, 1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577349b67e6ddc4cf64bdc94"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"424-65-A",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577349b67e6ddc4cf64bdc95"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349b67e6ddc4cf64bdc97"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349b67e6ddc4cf64bdc98"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"414-40-Y",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577349b67e6ddc4cf64bdc99"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("577349c37e6ddc4cf64bdc9b"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x2xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577349c37e6ddc4cf64bdca0"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577349c37e6ddc4cf64bdca2"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"427-23-G",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdca6"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"449-20-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xGround, 1x4xGround, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdca7"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdca8"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-24-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdca9"),
		"Undefined" : [
			"Milton",
			"Campbellville",
			"Halton",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdcaa"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdcac"),
		"Undefined" : [
			"Milton",
			"Trafalgar",
			"Halton",
			"19-29-M",
			"2016",
			"Detached",
			"2-Storey",
			"3x3xMain, 1x2x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349ce7e6ddc4cf64bdcb3"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349ce7e6ddc4cf64bdcb4"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577349ce7e6ddc4cf64bdcb9"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-26-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577349ce7e6ddc4cf64bdcba"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-31-T",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x5xMain, 1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349ce7e6ddc4cf64bdcbb"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-31-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349d47e6ddc4cf64bdcc1"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349d47e6ddc4cf64bdcc2"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-15-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x5x2nd, 1x6x2nd"
		]
	},
	{
		"_id" : ObjectId("57734a9c7e6ddc4cf64bdcc4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2015",
			"Parking Space",
			"Other",
			"0",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcc5"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcc7"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcc8"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcc9"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdccd"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-488-2875"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcce"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdccf"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2016",
			"Comm Element Condo",
			"Loft",
			"1x3",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcd0"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcd1"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcd2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcd6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcda"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcdb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-229-4835"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcdc"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcdd"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"905-681-7900"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcde"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdce0"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-882-6882"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdce1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xFlat",
			"416-696-5266"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdce3"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdce5"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x3",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdce6"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdce8"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-637-1700"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcea"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcee"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x2",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcef"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3xFlat",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcf0"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-281-2888"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcf1"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcf3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-250-6464"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcf5"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcf9"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcfc"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-507-9844"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcfd"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x3xMain",
			"905-470-7890"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcfe"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xMain, 1x3xMain",
			"416-538-5638"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcff"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x5xFlat",
			"416-969-7172"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdd00"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-637-8000"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdd01"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x5xMain, 1x2xMain",
			"905-940-4180"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdd02"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x6",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd03"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-28-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd04"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-G",
			"2016",
			"Co-Op Apt",
			"Apartment",
			"1x4, 1x3",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd05"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd07"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-28-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-429-5500"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd08"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd09"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd0b"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-8813"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd0c"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd0d"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd0e"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd0f"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-695-0888"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd10"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat, Flat, Flat",
			"905-615-1600"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd14"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-604-8155"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd15"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd16"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-8813"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd18"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd19"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("57734ab47e6ddc4cf64bdd1a"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd1c"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x3xMain",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd1d"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd1e"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-855-8700"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd1f"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4, 1x3",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd21"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-218-0017"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd24"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd25"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd26"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd28"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xLower",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd29"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-551-1190"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd2a"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd2b"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd2e"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4, 1x3",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("57734ab57e6ddc4cf64bdd2f"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain, 1x2xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd32"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd33"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4, 1x2",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd36"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd37"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-29-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd39"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd3a"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd3b"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd3c"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd3d"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd3e"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-29-F",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd41"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd42"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-33-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4, 2x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd43"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd44"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-G",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x3xBsmt, 1x2",
			"416-290-1200"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd45"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x3rd, 1x2x2nd, 1x3xGround",
			"416-465-7527"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd46"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x3",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("57734ad67e6ddc4cf64bdd4b"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-8-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("57734ad67e6ddc4cf64bdd4d"),
		"Undefined" : [
			"Toronto W04",
			"Beechborough-Greenbrook",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-997-6000"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd4f"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-9-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-226-9777"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd50"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd51"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd52"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd56"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xFlat",
			"416-847-0920"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd59"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd5b"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-495-2792"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd5d"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-760-9090"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd63"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd64"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd6a"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd6b"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-415-2121"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd6c"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd6e"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd70"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-24-Y",
			"2016",
			"Condo Townhouse",
			"Apartment",
			"1x5",
			"905-604-9080"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd71"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd74"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd76"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd77"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"355-19-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-226-1987"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd78"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-21-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd7b"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x5x3rd",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("57734ae77e6ddc4cf64bdd7c"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-T",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x3x2nd, 1x2xMain, 1x3xLower",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57734ae87e6ddc4cf64bdd7d"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-Y",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x2xLower",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("57734aeb7e6ddc4cf64bdd81"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("57734aeb7e6ddc4cf64bdd82"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-Q",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4, 1x4",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("57734aeb7e6ddc4cf64bdd83"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"258-9-M",
			"2016",
			"Det Condo",
			"Stacked Townhse",
			"1x4xMain, 1x3xMain",
			"416-283-1555"
		]
	},
	{
		"_id" : ObjectId("57734aeb7e6ddc4cf64bdd84"),
		"Undefined" : [
			"Pickering",
			"Rougemount",
			"Durham",
			"274-3-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("57734afd7e6ddc4cf64bdd8b"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"800-924-7666"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd8e"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2015",
			"Condo Apt",
			"Stacked Townhse",
			"1x4xFlat, 1x4xFlat",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd8f"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd90"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd91"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-40-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd92"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd93"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd94"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"2016",
			"Comm Element Condo",
			"2-Storey",
			"1x3, 1x3",
			"905-575-7700"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd96"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-S",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-628-0930"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd98"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd99"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4",
			"905-232-8006"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd9a"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"464-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd9c"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-M",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3x3rd, 1x4xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdd9d"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-33-R",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdda0"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdda1"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdda4"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"479-43-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("57734afe7e6ddc4cf64bdda6"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x5xFlat",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bdda7"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-25-U",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bdda9"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddaa"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"437-33-O",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddab"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"470-17-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddac"),
		"Undefined" : [
			"Burlington",
			"Brant Hills",
			"Halton",
			"469-10-P",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddad"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-34-Q",
			"2015",
			"Comm Element Condo",
			"Multi-Level",
			"1x4xMain, 1x3xMain",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddae"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddaf"),
		"Undefined" : [
			"Oakville",
			"Uptown Core",
			"Halton",
			"471-27-N",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x2",
			"416-627-0450"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddb0"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddb1"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"470-23-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("57734b067e6ddc4cf64bddb2"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-25-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("5774f9347e6ddc53a704202e"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9347e6ddc53a7042030"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9347e6ddc53a7042031"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-M",
			"2016",
			"Detached",
			"3-Storey",
			"4x4, 1x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9347e6ddc53a7042032"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-18-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9367e6ddc53a7042033"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9367e6ddc53a7042034"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("5774f9367e6ddc53a7042035"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9367e6ddc53a7042036"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-P",
			"2016",
			"Detached",
			"3-Storey",
			"1x2xMain, 1x3x2nd, 1x5x2nd, 1x3x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("5774f94a7e6ddc53a7042038"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f94a7e6ddc53a7042039"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"102-16-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x3x2nd, 1x2xMain, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9517e6ddc53a704203d"),
		"Undefined" : [
			"Toronto E03",
			"Danforth Village-East York",
			"Toronto",
			"115-24-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5774f9517e6ddc53a7042040"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-25-S",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042042"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-H",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042045"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"117-34-L",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x2xLower, 1x4xUpper, 1x4xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042047"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-C",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2, 2x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042048"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a704204a"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"117-33-L",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x3rd, 1x3x3rd, 1x4xGround, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a704204c"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a704204e"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x2x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a704204f"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042052"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9617e6ddc53a7042055"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9617e6ddc53a704205a"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-15-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9617e6ddc53a704205b"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9617e6ddc53a704205c"),
		"Undefined" : [
			"Toronto W02",
			"Lambton Baby Point",
			"Toronto",
			"114-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9617e6ddc53a704205e"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-13-R",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x2x2nd, 1x5x2nd, 1x5x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9647e6ddc53a7042063"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x7, 3x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("5774f9647e6ddc53a7042065"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"114-9-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 2x5x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a7042066"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a7042067"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a7042068"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a7042069"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-20-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a704206a"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a704206b"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a704206e"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-24-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a7042070"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-21-P",
			"2015",
			"Detached",
			"3-Storey",
			"1x2xGround, 1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a7042071"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-P",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x5xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a7042072"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a7042074"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-X",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a7042075"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-X",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a7042076"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a704207a"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a704207d"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9727e6ddc53a704207f"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f97c7e6ddc53a7042082"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f97c7e6ddc53a7042087"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f97c7e6ddc53a704208d"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f97c7e6ddc53a7042090"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9857e6ddc53a7042094"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-30-Z",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a7042095"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-33-X",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a7042097"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-33-W",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a704209a"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"351-37-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a704209f"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-22-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a70420a1"),
		"Undefined" : [
			"Markham",
			"Rural Markham",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a70420a2"),
		"Undefined" : [
			"Markham",
			"Cedarwood",
			"York",
			"357-36-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a70420a3"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"350-33-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x4x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a70420a4"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-29-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a70420a5"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-V",
			"2016",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9867e6ddc53a70420a6"),
		"Undefined" : [
			"Markham",
			"Bayview Glen",
			"York",
			"355-23-Z",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9877e6ddc53a70420a7"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-38-K",
			"2016",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9877e6ddc53a70420a8"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"344-33-K",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9897e6ddc53a70420aa"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-26-M",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x3xLower, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5774f98b7e6ddc53a70420ac"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-A",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5774f98d7e6ddc53a70420b0"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-5-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f98d7e6ddc53a70420b1"),
		"Undefined" : [
			"Pickering",
			"Woodlands",
			"Durham",
			"266-4-S",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5774f98d7e6ddc53a70420b3"),
		"Undefined" : [
			"Pickering",
			"Highbush",
			"Durham",
			"266-2-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9917e6ddc53a70420b4"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-12-U",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9917e6ddc53a70420b6"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-15-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9917e6ddc53a70420b7"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9917e6ddc53a70420bb"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x3rd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9957e6ddc53a70420c0"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9957e6ddc53a70420c2"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-E",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x3xBsmt, 1x4x3rd, 3x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9967e6ddc53a70420c4"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-24-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f99b7e6ddc53a70420c9"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f99b7e6ddc53a70420cc"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"268-25-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f99f7e6ddc53a70420cf"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5774f99f7e6ddc53a70420d1"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"279-42-W",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("5774f99f7e6ddc53a70420d2"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"279-42-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("5774f99f7e6ddc53a70420d3"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-39-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f99f7e6ddc53a70420d5"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f99f7e6ddc53a70420d6"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x3xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9a17e6ddc53a70420da"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x5x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9a37e6ddc53a70420db"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9a37e6ddc53a70420dc"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("5774f9a37e6ddc53a70420dd"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420de"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2016",
			"Detached",
			"Bungaloft",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420e0"),
		"Undefined" : [
			"Tiny",
			"Lafontaine",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420e2"),
		"Undefined" : [
			"Barrie",
			"East Bayfield",
			"Simcoe",
			"501-8-E",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420e3"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420e4"),
		"Undefined" : [
			"Barrie",
			"Northwest",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420e5"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Detached",
			"3-Storey",
			"1x4x2nd, 1x4x3rd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420e6"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420eb"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420ec"),
		"Undefined" : [
			"Barrie",
			"Bayshore",
			"Simcoe",
			"505-15-L",
			"2016",
			"Detached",
			"Bungalow",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420ed"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"506-22-L",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x2xLower, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f0"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f1"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-22-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f2"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f5"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x2xMain, 1x3xUpper, 1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f6"),
		"Undefined" : [
			"Innisfil",
			"Gilford",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x2xMain, 1x5xMain, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f7"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9b07e6ddc53a70420f8"),
		"Undefined" : [
			"Oro-Medonte",
			"Hawkestone",
			"Simcoe",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9b27e6ddc53a70420f9"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xIn Betwn"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a70420fc"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042103"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042104"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-37-H",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x3rd, 1x4x3rd, 1x2x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042106"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-F",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042107"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042108"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"472-33-Q",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a704210d"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-R",
			"2016",
			"Link",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a704210e"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"465-34-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a704210f"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042111"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-48-K",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9c17e6ddc53a7042114"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-36-K",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9c17e6ddc53a7042118"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-45-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9c17e6ddc53a7042119"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-40-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x3x2nd, 1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a704211b"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"438-44-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x2x2nd, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a704211c"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"446-49-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a704211f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a7042122"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-42-U",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a7042124"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"478-39-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a7042128"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd, 1x5x3rd"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a7042129"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-52-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d57e6ddc53a704212b"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042130"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042132"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-45-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042136"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042138"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-41-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a704213b"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042140"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042143"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-52-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042144"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"438-46-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042145"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-37-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042147"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x3xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a7042149"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 2x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a704214a"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-58-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9d97e6ddc53a7042151"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"458-34-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a7042153"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-30-N",
			"2016",
			"Att/Row/Twnhouse",
			"Bungalow",
			"1x4xGround, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a7042154"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a7042155"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-22-D",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a7042158"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a704215b"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-O",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a704215d"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"Other",
			"1x3xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a704215e"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-O",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x2x2nd, 1x4x2nd, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a704215f"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"15-28-L",
			"2015",
			"Detached",
			"2-Storey",
			"8x4"
		]
	},
	{
		"_id" : ObjectId("5774f9e07e6ddc53a7042160"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"15-28-L",
			"2015",
			"Detached",
			"2-Storey",
			"8x4"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a7042161"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-N",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a7042163"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-27-N",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x4x3rd, 1x4x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a7042166"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a7042168"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a7042169"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"470-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a704216a"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2016",
			"Detached",
			"2-Storey",
			"2x5xUpper, 1x4xUpper, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9e67e6ddc53a704216b"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9e97e6ddc53a704216c"),
		"Undefined" : [
			"Burlington",
			"Palmer",
			"Halton",
			"469-12-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9e97e6ddc53a704216d"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-14-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"12",
			"4 Pc Bath"
		]
	},
	{
		"_id" : ObjectId("5774f9e97e6ddc53a704216f"),
		"Undefined" : [
			"Burlington",
			"Rural Burlington",
			"Halton",
			"455-10-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042170"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042171"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"2016",
			"Condo Apt",
			"Bachelor/Studio",
			"1x3",
			"416-805-1781"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042172"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2017",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-260-8200"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042174"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704217b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704217c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2017",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-260-8200"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704217d"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xUpper",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704217f"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042181"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat, Flat, Flat, Flat",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042185"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042187"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042188"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"905-475-3300"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704218a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704218b"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704218c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-741-4443"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704218d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"5x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a704218e"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4, 1x3",
			"416-290-1200"
		]
	},
	{
		"_id" : ObjectId("5774fa727e6ddc53a7042190"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"3x3",
			"416-805-1781"
		]
	},
	{
		"_id" : ObjectId("5774fa727e6ddc53a7042192"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5774fa727e6ddc53a7042193"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5774fa727e6ddc53a7042194"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-486-6565"
		]
	},
	{
		"_id" : ObjectId("5774fa727e6ddc53a7042195"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a7042196"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-742-0247"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a7042198"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a704219a"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a704219c"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a704219d"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a704219f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a70421a1"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4",
			"905-470-2260"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a70421a3"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x2xMain",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5774fa7a7e6ddc53a70421a6"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"4x1xFlat, 3x1xFlat",
			"905-886-2888"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421aa"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421ab"),
		"Undefined" : [
			"Toronto E03",
			"Broadview North",
			"Toronto",
			"115-23-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-466-2090"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421ac"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421af"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b3"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b4"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-471-0002"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b5"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-31-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b6"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b7"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b9"),
		"Undefined" : [
			"Toronto E03",
			"Danforth Village-East York",
			"Toronto",
			"115-23-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421ba"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421bb"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421be"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-8-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c0"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-812-1100"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c1"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-C",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x3xUpper, 1x2xMain",
			"416-635-1232"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c4"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-3-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c6"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c8"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c9"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-8-H",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421ca"),
		"Undefined" : [
			"Toronto W06",
			"Alderwood",
			"Toronto",
			"118-4-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"289-291-7648"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421cb"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-12-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5774fa967e6ddc53a70421cc"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("5774fa967e6ddc53a70421d1"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-22-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5774fa967e6ddc53a70421d2"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5774fa967e6ddc53a70421d4"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-23-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("5774fa967e6ddc53a70421d5"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-29-W",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("5774fa967e6ddc53a70421d6"),
		"Undefined" : [
			"Richmond Hill",
			"Beaver Creek Business Park",
			"York",
			"355-26-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("5774fa977e6ddc53a70421d8"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5774fa977e6ddc53a70421d9"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("5774fa977e6ddc53a70421dd"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("5774fa987e6ddc53a70421de"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-21-G",
			"2016",
			"Parking Space",
			"Other",
			"0x0",
			"905-655-0840"
		]
	},
	{
		"_id" : ObjectId("5774fa987e6ddc53a70421df"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-21-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-655-0840"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e0"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-47-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e1"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"289-373-4999"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e2"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e3"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-46-L",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd, 1x2xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e5"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e6"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-43-Z",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, 1x3xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e7"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e9"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-43-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421ea"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-U",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421ec"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421ee"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421f0"),
		"Undefined" : [
			"Mississauga",
			"Port Credit",
			"Peel",
			"479-41-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421f1"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421f3"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-31-H",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 2x4xUpper",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421f5"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-34-L",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421f6"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421f7"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"479-44-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x4, 1x2",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5774faa67e6ddc53a70421f8"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("5774faa67e6ddc53a70421f9"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-Q",
			"2016",
			"Det Condo",
			"Bungaloft",
			"1x4x2nd, 1x4xMain, 1x3xMain",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5774faa67e6ddc53a70421fa"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-36-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat, 1x3xFlat",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("5774faa97e6ddc53a70421fb"),
		"Undefined" : [
			"Burlington",
			"Tansley",
			"Halton",
			"469-14-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("5774faa97e6ddc53a70421fc"),
		"Undefined" : [
			"Burlington",
			"Uptown",
			"Halton",
			"469-16-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-338-8808"
		]
	},
	{
		"_id" : ObjectId("5774faa97e6ddc53a70421fd"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3x2nd, 1x4x2nd",
			"905-297-7777"
		]
	},
	{
		"_id" : ObjectId("5774faa97e6ddc53a70421fe"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-25-U",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("5774faa97e6ddc53a70421ff"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-9-S",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"905-681-7900"
		]
	},
	{
		"_id" : ObjectId("5774faa97e6ddc53a7042200"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-S",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4xMain, 1x7xMain, 1x6xUpper",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("5774fae57e6ddc53a7042201"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-29-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577648427e6ddc1df4af5c94"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-15-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648427e6ddc1df4af5c95"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"119-16-R",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648427e6ddc1df4af5c96"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"2016",
			"Detached",
			"3-Storey",
			"1x5x3rd, 2x3x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648437e6ddc1df4af5c97"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4x3rd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648457e6ddc1df4af5c98"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-D",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648457e6ddc1df4af5c9a"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648487e6ddc1df4af5c9c"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"104-25-A",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"1x4xMain, 1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577648487e6ddc1df4af5c9e"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648487e6ddc1df4af5c9f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 3x3x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776484b7e6ddc1df4af5ca2"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-31-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776484b7e6ddc1df4af5ca3"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-S",
			"2015",
			"Detached",
			"3-Storey",
			"1x2xMain, 2x4x2nd, 1x5x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776484b7e6ddc1df4af5ca4"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"7x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577648507e6ddc1df4af5ca5"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577648507e6ddc1df4af5ca8"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648507e6ddc1df4af5caa"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-N",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648507e6ddc1df4af5cad"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-36-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648507e6ddc1df4af5cae"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-M",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577648547e6ddc1df4af5caf"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648547e6ddc1df4af5cb1"),
		"Undefined" : [
			"Toronto W02",
			"Lambton Baby Point",
			"Toronto",
			"114-10-N",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577648577e6ddc1df4af5cb7"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-5-J",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xGround, 1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577648577e6ddc1df4af5cb8"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-6-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x5xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648577e6ddc1df4af5cb9"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-6-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776485c7e6ddc1df4af5cbc"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776485c7e6ddc1df4af5cbd"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-24-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("5776485c7e6ddc1df4af5cbf"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-23-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4xBsmt, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776485d7e6ddc1df4af5cc3"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776485d7e6ddc1df4af5cc4"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776485d7e6ddc1df4af5cc5"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577648617e6ddc1df4af5cc6"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648617e6ddc1df4af5cc8"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-29-Y",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648617e6ddc1df4af5ccb"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-29-Y",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648617e6ddc1df4af5ccc"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648617e6ddc1df4af5ccd"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cce"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-7-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cd0"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cd1"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-10-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cd2"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-20-Z",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cd5"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Detached",
			"Bungaloft",
			"1x5xMain, 1x2xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cd6"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-3-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cd9"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-17-Z",
			"2015",
			"Detached",
			"2-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cda"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-T",
			"2016",
			"Detached",
			"2-Storey",
			"2x5xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cdc"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cdd"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"347-9-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x3xBsmt, 2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cde"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"341-5-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648697e6ddc1df4af5cdf"),
		"Undefined" : [
			"Vaughan",
			"Rural Vaughan",
			"York",
			"343-19-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 4x3, 2x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("5776486c7e6ddc1df4af5ce0"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"319-21-R",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5776486c7e6ddc1df4af5ce4"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"15-30-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5ce7"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x3x3rd, 1x2x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5ce9"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5cea"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"356-34-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5ceb"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5cec"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-33-Z",
			"2015",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5ced"),
		"Undefined" : [
			"Markham",
			"Victoria Manor-Jennings Gate",
			"York",
			"350-28-R",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648787e6ddc1df4af5cee"),
		"Undefined" : [
			"Markham",
			"Sherwood-Amberglen",
			"York",
			"357-38-V",
			"2016",
			"Detached",
			"Sidesplit 5",
			"1x5xUpper, 1x2xLower, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cf0"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cf3"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-39-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cf6"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-40-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cf7"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"350-33-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cf8"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cf9"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x5x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cfa"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-V",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x2xGround, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cfb"),
		"Undefined" : [
			"Markham",
			"Angus Glen",
			"York",
			"350-32-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648797e6ddc1df4af5cfd"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-25-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x5x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776487d7e6ddc1df4af5cfe"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776487e7e6ddc1df4af5cff"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5776487e7e6ddc1df4af5d00"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776487e7e6ddc1df4af5d03"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5776487e7e6ddc1df4af5d05"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776487e7e6ddc1df4af5d06"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"333-38-C",
			"2016",
			"Detached",
			"Bungaloft",
			"1x5xMain, 1x3xMain, 1x2xMain, 1x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648807e6ddc1df4af5d07"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-33-C",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648807e6ddc1df4af5d0a"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"301-33-T",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648837e6ddc1df4af5d0c"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-5-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648837e6ddc1df4af5d0f"),
		"Undefined" : [
			"Pickering",
			"Rougemount",
			"Durham",
			"266-3-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xUpper, 3x4xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648887e6ddc1df4af5d10"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-15-N",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648887e6ddc1df4af5d12"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648887e6ddc1df4af5d15"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-15-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577648887e6ddc1df4af5d16"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2"
		]
	},
	{
		"_id" : ObjectId("5776488b7e6ddc1df4af5d19"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776488b7e6ddc1df4af5d1a"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776488b7e6ddc1df4af5d1b"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-21-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648917e6ddc1df4af5d20"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-U",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xMain, 1x4xLower",
			"Greenhouse"
		]
	},
	{
		"_id" : ObjectId("577648917e6ddc1df4af5d22"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-30-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648917e6ddc1df4af5d25"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577648917e6ddc1df4af5d27"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"268-24-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648917e6ddc1df4af5d28"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d2b"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"280-52-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d2e"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"279-43-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d30"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d32"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d37"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"261-33-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d39"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d3b"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"281-58-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xMain, 1x2"
		]
	},
	{
		"_id" : ObjectId("5776489c7e6ddc1df4af5d3c"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"263-48-J",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3xMain, 1x3x2nd",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577648a07e6ddc1df4af5d3f"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"231-15-M",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577648a07e6ddc1df4af5d40"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-14-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xBsmt, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648af7e6ddc1df4af5d41"),
		"Undefined" : [
			"Tiny",
			"Lafontaine",
			"Simcoe",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("577648af7e6ddc1df4af5d42"),
		"Undefined" : [
			"Collingwood",
			"Collingwood",
			"Simcoe",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("577648af7e6ddc1df4af5d43"),
		"Undefined" : [
			"Collingwood",
			"Collingwood",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577648af7e6ddc1df4af5d45"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648af7e6ddc1df4af5d49"),
		"Undefined" : [
			"Barrie",
			"Allandale Centre",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648af7e6ddc1df4af5d4a"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x2xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d56"),
		"Undefined" : [
			"New Tecumseth",
			"Tottenham",
			"Simcoe",
			"592-13-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d57"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-B",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xMain, 1x3xMain, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d58"),
		"Undefined" : [
			"Barrie",
			"Painswick North",
			"Simcoe",
			"505-13-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xLower, 1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d5a"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"504-8-L",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x5xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d5b"),
		"Undefined" : [
			"Springwater",
			"Rural Springwater",
			"Simcoe",
			"507-1-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d5e"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d62"),
		"Undefined" : [
			"Oro-Medonte",
			"Horseshoe Valley",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x5xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d63"),
		"Undefined" : [
			"Springwater",
			"Rural Springwater",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x2xMain, 1x5xMain, 1x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648b37e6ddc1df4af5d65"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2015",
			"Vacant Land",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("577648b37e6ddc1df4af5d68"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"Backsplit 4",
			"2x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577648b37e6ddc1df4af5d6a"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"404-48-J",
			"2016",
			"Detached",
			"Bungaloft",
			"1x4xUpper, 1x3xMain, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d6b"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-34-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d6c"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"453-51-Z",
			"2016",
			"Semi-Detached",
			"Sidesplit 3",
			"1x4x3rd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d6f"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2015",
			"Semi-Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d71"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d74"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"183-16-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3xBsmt, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d75"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d76"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"458-34-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d77"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-F",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d79"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"467-50-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d7b"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-40-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d7c"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-G",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d7d"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"458-40-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xBsmt, 1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d7e"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"458-40-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d7f"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"458-40-D",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xLower, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d80"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-35-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d81"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d82"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-39-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x5x2nd, 2x3x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d83"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 2x2xMain, 1x5xUpper, 3x4xUpper, 1x4xLower",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d84"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-36-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x3xUpper, 1x6xUpper, 1x3xMain, 2x2"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d87"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d8a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d8c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-52-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d8e"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d90"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d92"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-38-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d94"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"472-35-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d95"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-52-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d9b"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5d9d"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5xUpper, 1x4xUpper, 1x4xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5da3"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-43-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5da5"),
		"Undefined" : [
			"Brampton",
			"Heart Lake",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5da7"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"451-40-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5daa"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5dac"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-56-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5dad"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"478-37-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5daf"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"438-45-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5db1"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-38-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5db2"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5db5"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-38-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5db6"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"439-50-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xUpper, 2x4xUpper, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5db7"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5xUpper, 1x4xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5db8"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x5x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648da7e6ddc1df4af5dba"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-45-O",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648da7e6ddc1df4af5dbb"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"14-27-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577648da7e6ddc1df4af5dbc"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2015",
			"Vacant Land",
			"Other",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dbf"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dc1"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dc2"),
		"Undefined" : [
			"Milton",
			"Bronte Meadows",
			"Halton",
			"456-21-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dc3"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-31-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dc4"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x6"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dc5"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"19-28-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x6"
		]
	},
	{
		"_id" : ObjectId("577648df7e6ddc1df4af5dc6"),
		"Undefined" : [
			"Milton",
			"Nelson",
			"Halton",
			"449-18-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dc7"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dcb"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dcc"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x2xMain, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dcd"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-32-T",
			"2016",
			"Detached",
			"Backsplit 3",
			"3x4x2nd, 2x2nd, 3xLower"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dcf"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"470-23-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dd1"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dd2"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dd3"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-25-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x5xUpper, 1x4xUpper, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dd4"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648e77e6ddc1df4af5dd5"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"476-24-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648eb7e6ddc1df4af5dd7"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-15-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648eb7e6ddc1df4af5dda"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"474-7-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648eb7e6ddc1df4af5ddb"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577648eb7e6ddc1df4af5ddc"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5ddd"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Comm Element Condo",
			"Bachelor/Studio",
			"1x3xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5ddf"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de0"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x3",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de5"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de6"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de7"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5dea"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Comm Element Condo",
			"Multi-Level",
			"1x4xMain",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5deb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-653-8292"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5dec"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4",
			"416-840-6300"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5def"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5df1"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5df4"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5df5"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 3xFlat",
			"416-428-0881"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5df6"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5df7"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5df9"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577649707e6ddc1df4af5dfa"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("577649707e6ddc1df4af5dfd"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("577649707e6ddc1df4af5dfe"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("577649707e6ddc1df4af5dff"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("577649707e6ddc1df4af5e01"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("5776497b7e6ddc1df4af5e03"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5776497b7e6ddc1df4af5e05"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5776497b7e6ddc1df4af5e07"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("5776497b7e6ddc1df4af5e08"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e0a"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-467-5050"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e0c"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e0d"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-18-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e12"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e13"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e14"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xBsmt, 1x4x2nd, 1x2x3rd",
			"416-256-7000"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e15"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e16"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5776497c7e6ddc1df4af5e18"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("577649837e6ddc1df4af5e1c"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-471-0002"
		]
	},
	{
		"_id" : ObjectId("577649837e6ddc1df4af5e1f"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("577649847e6ddc1df4af5e21"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577649847e6ddc1df4af5e22"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"2x4xFlat",
			"416-743-2285"
		]
	},
	{
		"_id" : ObjectId("577649847e6ddc1df4af5e24"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-33-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x3",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("577649847e6ddc1df4af5e25"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-C",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x3",
			"416-222-7750"
		]
	},
	{
		"_id" : ObjectId("577649847e6ddc1df4af5e26"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-731-2266"
		]
	},
	{
		"_id" : ObjectId("577649847e6ddc1df4af5e28"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-25-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xGround, 1x4xGround",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5776498c7e6ddc1df4af5e29"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5776498c7e6ddc1df4af5e2a"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-10-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("5776498c7e6ddc1df4af5e2b"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-8-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-410-3000"
		]
	},
	{
		"_id" : ObjectId("5776498c7e6ddc1df4af5e2d"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-D",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"416-658-7232"
		]
	},
	{
		"_id" : ObjectId("5776498c7e6ddc1df4af5e2f"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-499-4948"
		]
	},
	{
		"_id" : ObjectId("5776498c7e6ddc1df4af5e30"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"114-11-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-410-3000"
		]
	},
	{
		"_id" : ObjectId("5776498d7e6ddc1df4af5e31"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("5776498d7e6ddc1df4af5e32"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-231-5000"
		]
	},
	{
		"_id" : ObjectId("5776498d7e6ddc1df4af5e34"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-467-5050"
		]
	},
	{
		"_id" : ObjectId("5776498d7e6ddc1df4af5e36"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"118-4-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain",
			"905-338-1515"
		]
	},
	{
		"_id" : ObjectId("5776498d7e6ddc1df4af5e38"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("5776499a7e6ddc1df4af5e39"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-22-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5776499a7e6ddc1df4af5e3b"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-5600"
		]
	},
	{
		"_id" : ObjectId("5776499a7e6ddc1df4af5e3d"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-2260"
		]
	},
	{
		"_id" : ObjectId("5776499a7e6ddc1df4af5e3e"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-23-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e42"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e45"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2018",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-597-0457"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e47"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-604-5600"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e48"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2018",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-597-0457"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e49"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2018",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-597-0457"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e4b"),
		"Undefined" : [
			"Vaughan",
			"Lakeview Estates",
			"York",
			"353-3-Z",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5, 1x4, 1x2, 0x0",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e4c"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-21-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-889-9330"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e4d"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-896-4622"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e4f"),
		"Undefined" : [
			"Vaughan",
			"Concord",
			"York",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x3xMain, 1x3xMain",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e51"),
		"Undefined" : [
			"Markham",
			"Buttonville",
			"York",
			"350-28-U",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 2x4x2nd, 1x2xLower, 1x4x3rd",
			"416-590-2888"
		]
	},
	{
		"_id" : ObjectId("5776499b7e6ddc1df4af5e53"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-W",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper, 1x3xLower",
			"905-300-3000"
		]
	},
	{
		"_id" : ObjectId("5776499f7e6ddc1df4af5e54"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-Q",
			"2015",
			"Condo Apt",
			"Bungalow",
			"1x2xFlat, 1x4xFlat",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5776499f7e6ddc1df4af5e55"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-987-1033"
		]
	},
	{
		"_id" : ObjectId("5776499f7e6ddc1df4af5e56"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 2x4xUpper",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5776499f7e6ddc1df4af5e58"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x2xGround",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("5776499f7e6ddc1df4af5e5a"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x3xMain, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e5b"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"459-43-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-825-2378"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e5c"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x4",
			"905-564-2100"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e5d"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"459-43-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e61"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3xFlat",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e62"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-40-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e64"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e65"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e66"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e68"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e69"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"2x4",
			"905-471-0002"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e6a"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"446-53-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e6b"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e6c"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e6d"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-P",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e6f"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-338-3721"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e71"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e72"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-T",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e73"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e74"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper",
			"905-812-1100"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e75"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"465-33-H",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x4xLower",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e76"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-40-Z",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e77"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e78"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-41-B",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 2x4x3rd",
			"10",
			"Laundry",
			"Main",
			"2.93",
			"2.00",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577649ae7e6ddc1df4af5e79"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577649b07e6ddc1df4af5e7b"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"469-16-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577649b07e6ddc1df4af5e7d"),
		"Undefined" : [
			"Oakville",
			"Uptown Core",
			"Halton",
			"471-27-N",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x2xMain",
			"905-919-9787"
		]
	},
	{
		"_id" : ObjectId("5778f96e7e6ddc294b2657a7"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2015",
			"Rural Resid",
			"2-Storey",
			"1x4xMain, 1x2xMain, 2x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b911d7e6ddc620838918c"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"119-16-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xBsmt, 1x4x2nd, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b911d7e6ddc620838918d"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"114-16-N",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x4xBsmt, 1x4xMain, 1x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577b911d7e6ddc620838918e"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b911d7e6ddc620838918f"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-15-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b911d7e6ddc6208389190"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"120-17-R",
			"2015",
			"Detached",
			"3-Storey",
			"1x2xMain, 2x5x2nd, 1x5x3rd"
		]
	},
	{
		"_id" : ObjectId("577b91207e6ddc6208389191"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-M",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91207e6ddc6208389192"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91207e6ddc6208389193"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x3x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91207e6ddc6208389195"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-21-L",
			"2016",
			"Fourplex",
			"2-Storey",
			"2x4xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91257e6ddc6208389197"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91257e6ddc6208389198"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xBsmt, 1x4xGround, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577b91257e6ddc6208389199"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-D",
			"2016",
			"Detached",
			"Sidesplit 4",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577b91257e6ddc620838919b"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xUpper, 1x4xMain, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91257e6ddc620838919c"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91267e6ddc620838919d"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-19-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91267e6ddc620838919e"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-A",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3x2nd, 1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91267e6ddc620838919f"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-19-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x3x2nd, 1x4x2nd, 2x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91267e6ddc62083891a0"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-19-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x7x2nd, 3x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891a2"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-24-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891a5"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-27-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891a6"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-27-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891a8"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"103-24-E",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891a9"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-D",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x5x2nd, 1x3x3rd, 1x4x3rd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891aa"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-24-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891ab"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-B",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4, 1x3, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891ac"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891ae"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 2x4x2nd, 1x3x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891b0"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"103-21-E",
			"2016",
			"Detached",
			"2-Storey",
			"2x2, 2x4, 2x5, 1x6"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891b1"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-22-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x2xMain, 0x0xBsmt, 1x4x2nd, Main"
		]
	},
	{
		"_id" : ObjectId("577b912f7e6ddc62083891b3"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-21-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x3x2nd, 2x4x2nd, 1x5x2nd, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891b7"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2x2nd, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891b9"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"121-27-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xLower, 1x4x2nd, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891ba"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"121-25-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891bb"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-23-R",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x4xGround, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891bd"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891be"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891bf"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-S",
			"2015",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x5x3rd, 1x3x2nd, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91357e6ddc62083891c0"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-22-R",
			"2015",
			"Detached",
			"3-Storey",
			"1x3x2nd, 1x2x2nd, 1x2xGround, 1x3xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891c3"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-38-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891c8"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-J",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x3xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891ca"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"105-35-E",
			"2016",
			"Link",
			"3-Storey",
			"1x4x2nd, 1x2xMain, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891cb"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Detached",
			"Sidesplit 5",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891cc"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-28-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891ce"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-29-N",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x3xBsmt, 1x4xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891cf"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Bungalow",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d0"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-J",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x5x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d1"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d2"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-H",
			"2016",
			"Detached",
			"Bungalow",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d4"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"117-33-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d6"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d8"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891dc"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891de"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-40-E",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x5xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891df"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891e0"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-28-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891e2"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891e3"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-30-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891e4"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-34-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891e5"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"111-34-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xMain, 1x3x2nd, 1x2xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891e7"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-15-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891ec"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"108-9-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891ed"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-14-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x3"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891ef"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-11-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x3, 1x5"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f0"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f1"),
		"Undefined" : [
			"Toronto W04",
			"Brookhaven-Amesbury",
			"Toronto",
			"108-11-J",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f3"),
		"Undefined" : [
			"Toronto W03",
			"Caledonia-Fairbank",
			"Toronto",
			"114-14-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f4"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-12-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f6"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-13-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f7"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f8"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"119-14-R",
			"2015",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891f9"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-15-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891fa"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-15-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891fc"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"119-14-R",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4x3rd, 2x4x2nd, 1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891fd"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x3xLower, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389201"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-3-L",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x5xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389202"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389203"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x2x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389204"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-6-U",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389205"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"107-8-F",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389207"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389208"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc6208389209"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"107-6-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x5xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc620838920a"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-7-K",
			"2015",
			"Detached",
			"Other",
			"1x2xMain, 1x3xUpper, 1x5xUpper, 1x2xBsmt, 1x1xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc620838920b"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-6-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc620838920c"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-6-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc620838920d"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x6xUpper, 1x4xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc620838920e"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"113-8-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91597e6ddc620838920f"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 1x5, 1x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389211"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389212"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-20-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389213"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-23-Q",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389215"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389217"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xLower, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389218"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389219"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc620838921d"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc620838921f"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-J",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389221"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-24-S",
			"2016",
			"Detached",
			"Bungalow",
			"2x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389222"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389223"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-24-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389224"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389225"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"349-24-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x3, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389226"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-23-G",
			"2015",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xMain, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389227"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-23-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389228"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-21-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc6208389229"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-22-U",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc620838922a"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-25-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91677e6ddc620838922b"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc620838922c"),
		"Undefined" : [
			"Aurora",
			"Aurora Grove",
			"York",
			"331-25-C",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc620838922f"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-Z",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc6208389230"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-A",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc6208389231"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc6208389234"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x5, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc6208389236"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc6208389237"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91707e6ddc6208389239"),
		"Undefined" : [
			"Newmarket",
			"Glenway Estates",
			"York",
			"325-23-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91717e6ddc620838923a"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91717e6ddc620838923b"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"332-27-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91717e6ddc620838923c"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"332-27-Z",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc6208389241"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc6208389243"),
		"Undefined" : [
			"Vaughan",
			"Glen Shields",
			"York",
			"354-16-Z",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x4xLower, 1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc6208389245"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-10-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc6208389246"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-18-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4x3rd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc6208389248"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x3rd, 1x4x3rd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc6208389249"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4x3rd, 1x4x2nd, 1x1xMain"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc620838924b"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2015",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc620838924d"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc620838924e"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xBsmt, 1x3xBsmt, 1x2xGround, 1x5x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389255"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-12-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 2x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389256"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-7-X",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389257"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 3x4x2nd, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389258"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-18-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389259"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x2, 3x4"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc620838925a"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-18-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc620838925b"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-9-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 3x3xUpper"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc620838925c"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x3x2nd, 1x4x2nd, 2x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc620838925d"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-5-Q",
			"2016",
			"Detached",
			"Bungalow",
			"2x5xMain, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577b91817e6ddc6208389262"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"335-10-F",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5, 1x4x2nd, 1x3x2nd",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc6208389264"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Link",
			"2-Storey",
			"2x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc6208389265"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc6208389267"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-T",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc6208389268"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"356-33-V",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc620838926b"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"351-37-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x2xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc620838926d"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-40-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc620838926e"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-39-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc620838926f"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-32-U",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc6208389270"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-32-U",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b918e7e6ddc6208389271"),
		"Undefined" : [
			"Markham",
			"Old Markham Village",
			"York",
			"351-36-U",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389272"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389273"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"350-33-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389274"),
		"Undefined" : [
			"Markham",
			"German Mills",
			"York",
			"355-26-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389275"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-32-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389276"),
		"Undefined" : [
			"Markham",
			"Bayview Fairway-Bayview Country Club Estates",
			"York",
			"355-24-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389277"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc6208389279"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-25-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 2x4x2nd, 2x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc620838927a"),
		"Undefined" : [
			"Markham",
			"Bayview Fairway-Bayview Country Club Estates",
			"York",
			"355-24-Y",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc620838927b"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x3xBsmt, 2x7x2nd"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc620838927c"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-22-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b918f7e6ddc620838927d"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-22-Y",
			"2016",
			"Detached",
			"Backsplit 4",
			"2x4xUpper, 1x2xLower, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389280"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-38-K",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389281"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"339-40-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389282"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389284"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"339-36-J",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xUpper, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389285"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389286"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"338-30-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xGround, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91937e6ddc6208389287"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("577b91947e6ddc6208389289"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"314-34-J",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91987e6ddc620838928a"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"12-33-C",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91987e6ddc620838928d"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91987e6ddc620838928e"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"312-54-E",
			"2015",
			"Detached",
			"Bungalow",
			"2x3xMain"
		]
	},
	{
		"_id" : ObjectId("577b919c7e6ddc6208389293"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"274-7-T",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b919c7e6ddc6208389294"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b919c7e6ddc6208389295"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-9-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b919d7e6ddc6208389297"),
		"Undefined" : [
			"Pickering",
			"Rural Pickering",
			"Durham",
			"242-9-A",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4xLower, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b919d7e6ddc6208389298"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-5-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x6, 1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577b919d7e6ddc6208389299"),
		"Undefined" : [
			"Pickering",
			"Woodlands",
			"Durham",
			"274-4-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x6, 2x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc620838929d"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x1xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892a0"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892a2"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-15-N",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892a3"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892a6"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892a7"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892a9"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"259-11-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xFlat"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc62083892aa"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-10-Q",
			"2015",
			"Detached",
			"Backsplit 5",
			"1x6xUpper, 2x4x2nd, 1x4xUpper, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892ad"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-22-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892ae"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892af"),
		"Undefined" : [
			"Whitby",
			"Rural Whitby",
			"Durham",
			"267-17-R",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892b0"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"260-19-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892b1"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-21-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91aa7e6ddc62083892b2"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-24-G",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892b5"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892b6"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"269-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892ba"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892bc"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-29-M",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892be"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892c0"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892c5"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-30-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892c7"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-31-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892ca"),
		"Undefined" : [
			"Oshawa",
			"Northglen",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892cb"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892cc"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-29-K",
			"2015",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892cd"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-29-K",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91bb7e6ddc62083892d1"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91bb7e6ddc62083892d3"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"17-37-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91be7e6ddc62083892d6"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"12-35-E",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91be7e6ddc62083892d7"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"13-36-D",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x3xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91be7e6ddc62083892d8"),
		"Undefined" : [
			"Brock",
			"Sunderland",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892de"),
		"Undefined" : [
			"Essa",
			"Rural Essa",
			"Simcoe",
			"2016",
			"Mobile/Trailer",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892e0"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-C",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892e3"),
		"Undefined" : [
			"Springwater",
			"Hillsdale",
			"Simcoe",
			"2016",
			"Detached",
			"Other",
			"1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892e5"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892e7"),
		"Undefined" : [
			"Severn",
			"Bass Lake",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892e8"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892e9"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-21-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892ea"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-7-P",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892eb"),
		"Undefined" : [
			"Barrie",
			"Georgian Drive",
			"Simcoe",
			"502-13-F",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround, 1x4xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892ee"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"587-13-B",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892f4"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-L",
			"2015",
			"Link",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892f5"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892f6"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"587-13-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2, 2x3"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892f7"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Everett",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892f8"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892fb"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892fc"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"505-15-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91d27e6ddc62083892ff"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Rural Bradford West Gwillimbury",
			"Simcoe",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91d27e6ddc6208389300"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xGround, 4x3x2nd, 2x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b91d27e6ddc6208389302"),
		"Undefined" : [
			"Essa",
			"Rural Essa",
			"Simcoe",
			"11-28-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b91d57e6ddc6208389304"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x4x2nd",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577b91d57e6ddc6208389305"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-44-G",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91d57e6ddc6208389306"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-47-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91d57e6ddc6208389307"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xLower, 1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc620838930f"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389311"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389313"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-39-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389314"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389315"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-37-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389316"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389317"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-45-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389318"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc620838931a"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"101-52-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc620838931b"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc620838931f"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389320"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389321"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"472-40-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389322"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-F",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389323"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-33-N",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x2xUpper, 1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389324"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-D",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389327"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xMain, 1x4xBsmt, 1x5x2nd",
			"10",
			"Media/Ent",
			"Bsmt",
			"Laminate"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389328"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"458-40-C",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc620838932a"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-31-H",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc620838932c"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc620838932d"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-37-J",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389330"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"466-43-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x2xMain, 1x2xLower, Bsmt"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389334"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389335"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-41-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389336"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-35-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 3x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389337"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x2x2nd, 1x4x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91eb7e6ddc6208389339"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"458-33-E",
			"2015",
			"Detached",
			"2-Storey",
			"2x2xMain, 2x5xUpper, 1x4xUpper, 1x3xUpper, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92047e6ddc620838933a"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc620838933b"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"452-48-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389341"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"472-40-N",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x2xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389345"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-X",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389346"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-42-Y",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389347"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"453-56-V",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc620838934a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc620838934f"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x5x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389350"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"445-46-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x3x3rd, 1x4x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389351"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-41-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389354"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"446-49-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 2x4, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389355"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-X",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389358"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-43-U",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389359"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-X",
			"2015",
			"Detached",
			"Backsplit 5",
			"2x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838935a"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x4xUpper, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838935c"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838935d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-47-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2, 1x4, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838935e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389360"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389365"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"453-56-V",
			"2015",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389366"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-58-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389368"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389369"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4x2nd, 1x2xGround, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838936c"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838936d"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-39-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838936e"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc620838936f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"15-29-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389370"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-50-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389371"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-43-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389372"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 2x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389373"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"439-53-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x3x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389374"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389376"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"439-52-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x6x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b920b7e6ddc620838937d"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"423-54-A",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b920b7e6ddc6208389380"),
		"Undefined" : [
			"Caledon",
			"Bolton North",
			"Peel",
			"432-62-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b920b7e6ddc6208389381"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"423-53-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b920b7e6ddc6208389382"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"15-28-J",
			"2016",
			"Detached",
			"Bungaloft",
			"1x4x2nd, 1x5xMain, 1x4xMain, 1x4xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b920b7e6ddc6208389383"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"407-41-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x2xMain, 1x6x2nd, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc6208389385"),
		"Undefined" : [
			"Milton",
			"Campbellville",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc6208389387"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-P",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc6208389389"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x3x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc620838938a"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-33-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc620838938b"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4x2nd, 1x4xIn Betwn"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc620838938c"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc620838938d"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"456-25-A",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("577b92177e6ddc620838938e"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-O",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389390"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-20-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389392"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-B",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389393"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-B",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389394"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x3x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389396"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389398"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc6208389399"),
		"Undefined" : [
			"Milton",
			"Milton Heights",
			"Halton",
			"449-19-X",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x5xMain, 1x3xLower, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b92187e6ddc620838939a"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 2x5xMain, 1x6xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc620838939c"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc620838939d"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-22-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc620838939e"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc620838939f"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893a0"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893a2"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893a3"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-N",
			"2015",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893a8"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-V",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893a9"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893aa"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893ab"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x7x2nd, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92227e6ddc62083893ac"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-24-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x2xMain, 1x5xLower, 1x4xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92247e6ddc62083893ae"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"474-6-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b3"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b5"),
		"Undefined" : [
			"Toronto C11",
			"Thorncliffe Park",
			"Toronto",
			"115-23-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b7"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b9"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893ba"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893bb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-628-8392"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893bc"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-415-3800"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893bd"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893be"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893c0"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-506-7653"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893c1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893c4"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893c6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893c8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893c9"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893ca"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893cb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893cc"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-882-6882"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893cd"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893cf"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893d0"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893d1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893d2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893d3"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893d6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893d7"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893da"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893df"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893e0"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893e1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-209-1400"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893e3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893ea"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893eb"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893ec"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-U",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x3, 1x4",
			"416-922-5533"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893ed"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893ee"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893ef"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f0"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4xUpper",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f1"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f3"),
		"Undefined" : [
			"Toronto C08",
			"North St. James Town",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f4"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f7"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xFlat",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893f9"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893fa"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893fb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"647-259-8806"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc62083893fd"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"647-259-8806"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc62083893ff"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389401"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389402"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389405"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389406"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-583-1660"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389408"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc620838940e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389412"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389413"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-404-1000"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389415"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("577b93367e6ddc6208389418"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x3xMain, 1x8xMain, 1x4xMain, 1x4xMain, 1x4xUpper",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc6208389419"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Parking Space",
			"Other",
			"0x0",
			"905-604-5600"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc620838941b"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-284-4751"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc620838941c"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc620838941d"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc620838941e"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"102-16-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc620838941f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc6208389420"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577b934c7e6ddc6208389421"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389424"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 0x3, 0x2",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389425"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389426"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389428"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-898-8932"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389429"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-494-9858"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc620838942a"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389433"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389436"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-785-1500"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389438"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389439"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc620838943e"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc620838943f"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-6868"
		]
	},
	{
		"_id" : ObjectId("577b934d7e6ddc6208389446"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-25-C",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xGround, 1x4x3rd",
			"905-707-8020"
		]
	},
	{
		"_id" : ObjectId("577b934e7e6ddc6208389448"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"104-25-B",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd, 1x3xGround",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577b934e7e6ddc620838944a"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577b934e7e6ddc620838944c"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("577b934e7e6ddc620838944d"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838944e"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-31-M",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838944f"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389451"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-35-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-293-9000"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389452"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389453"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-35-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-901-8777"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389455"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-673-3100"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389456"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, Main, Main",
			"905-477-5900"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389457"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389458"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x1",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838945a"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838945b"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-604-6022"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838945c"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-209-1400"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838945d"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc620838945e"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389461"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"800-924-7666"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389463"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-604-9155"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389465"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"116-26-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("577b935d7e6ddc6208389466"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xBsmt, 1x2xMain, 2x4x2nd",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577b935d7e6ddc6208389467"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"2x4xFlat",
			"905-477-1818"
		]
	},
	{
		"_id" : ObjectId("577b935d7e6ddc6208389468"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 2x4xUpper",
			"416-284-4751"
		]
	},
	{
		"_id" : ObjectId("577b935d7e6ddc620838946a"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2018",
			"Condo Townhouse",
			"2-Storey",
			"1x4xMain",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("577b935d7e6ddc620838946b"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-27-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("577b93717e6ddc620838946c"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-10-C",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x4",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("577b93717e6ddc6208389470"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389471"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-14-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xBsmt",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389472"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389475"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389476"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-4-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc620838947a"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc620838947b"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-338-1515"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389480"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389481"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x1",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389482"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389483"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389484"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-703-0600"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389485"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x2xMain, 1x4xUpper",
			"905-856-8111"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389486"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389487"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-898-8932"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389489"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4x2nd, 1x2xMain",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc620838948f"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-11-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389490"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4x2nd, 1x3xMain, 1x3x2nd",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc6208389491"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-588-6777"
		]
	},
	{
		"_id" : ObjectId("577b93737e6ddc6208389495"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x2xMain",
			"416-703-0244"
		]
	},
	{
		"_id" : ObjectId("577b93737e6ddc6208389496"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-260-2600"
		]
	},
	{
		"_id" : ObjectId("577b93737e6ddc6208389497"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577b93737e6ddc6208389498"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-940-3766"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc6208389499"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-32-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc620838949a"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc620838949b"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc620838949d"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc620838949e"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-23-R",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"2x3xMain",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc620838949f"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc62083894a0"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x4",
			"905-470-7890"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc62083894a2"),
		"Undefined" : [
			"Markham",
			"Commerce Valley",
			"York",
			"355-24-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("577b93857e6ddc62083894a6"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894aa"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894ab"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894ac"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"2x3xMain",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894ad"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-499-0001"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894ae"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894af"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894b0"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-850-9488"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894b3"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894b9"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3, 1x2",
			"416-512-9996"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894bc"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894bf"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894c0"),
		"Undefined" : [
			"Aurora",
			"Aurora Estates",
			"York",
			"337-25-E",
			"2016",
			"Condo Townhouse",
			"Bungaloft",
			"1x2xMain, 1x4xMain, 1x4x2nd, 1x5xLower",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577b93867e6ddc62083894c1"),
		"Undefined" : [
			"Aurora",
			"Aurora Estates",
			"York",
			"337-25-E",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("577b938c7e6ddc62083894c5"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-8-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"416-494-7686"
		]
	},
	{
		"_id" : ObjectId("577b938c7e6ddc62083894c7"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-13-L",
			"2016",
			"Condo Townhouse",
			"Bungalow",
			"2x4xMain, 1x4xLower",
			"905-852-3050"
		]
	},
	{
		"_id" : ObjectId("577b938c7e6ddc62083894c8"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-666-1333"
		]
	},
	{
		"_id" : ObjectId("577b938c7e6ddc62083894c9"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"905-668-3800"
		]
	},
	{
		"_id" : ObjectId("577b938c7e6ddc62083894cb"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-668-3800"
		]
	},
	{
		"_id" : ObjectId("577b93a37e6ddc62083894cd"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577b93a37e6ddc62083894d0"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"705-426-7385"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894d2"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x2xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894d4"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-Q",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4",
			"416-298-8880"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894d6"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-693-9575"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894da"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894dc"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894dd"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-40-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894de"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894df"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, 1x2xMain",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894e1"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894e2"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894e4"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2x2nd, 2nd, 1x4, 3rd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894e5"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894e7"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-X",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894e8"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894eb"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894ed"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3",
			"905-506-7653"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894ee"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-281-2888"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894f1"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894f3"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894f4"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894f5"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd",
			"416-298-8880"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc62083894f8"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc62083894fa"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2016",
			"Comm Element Condo",
			"2-Storey",
			"1x4, 1x4, 1x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc62083894fc"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-35-K",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc62083894fd"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-47-K",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xMain, 1x2xUpper, 1x4xUpper",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc62083894fe"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3xMain, 1x4xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc62083894ff"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2016",
			"Condo Apt",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc6208389500"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"472-34-Q",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4x3rd, 1x2x2nd, 1x3xMain",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("577b93a57e6ddc6208389501"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2, 1x3",
			"4",
			"Master",
			"2nd",
			"4.70",
			"3.10",
			"5",
			"Br",
			"2nd",
			"3.10",
			"3.00",
			"6",
			"Br",
			"2nd",
			"2.80",
			"2.70",
			"7",
			"Family",
			"Ground",
			"3.60",
			"2.80",
			"647-837-0724"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc6208389502"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-918-1182"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc6208389504"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc6208389505"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"905-257-3633"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc6208389506"),
		"Undefined" : [
			"Oakville",
			"Uptown Core",
			"Halton",
			"471-27-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc6208389508"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"456-25-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc6208389509"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc620838950a"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc620838950b"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc620838950c"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"471-27-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc620838950d"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-24-P",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x2xLower",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("577b93ac7e6ddc620838950e"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"477-25-R",
			"2016",
			"Condo Townhouse",
			"Bungalow",
			"1x2xMain, 1x4xMain, 1x4x2nd, 1x3xBsmt",
			"905-847-5900"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688d8"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x4, 1x1"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688d9"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688db"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-17-P",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x3x3rd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688dc"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688dd"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Duplex",
			"2 1/2 Storey",
			"1x3xMain, 1x3x2nd, 1x3xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688de"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-19-M",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x5, 1x3, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2bc7e6ddc1af30688df"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2bc7e6ddc1af30688e0"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-21-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2c07e6ddc1af30688e4"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-19-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x7, 1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2c07e6ddc1af30688e5"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-19-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x6, 1x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2c07e6ddc1af30688e6"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-19-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x4, 2x5"
		]
	},
	{
		"_id" : ObjectId("577ce2c07e6ddc1af30688e7"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 3x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2c07e6ddc1af30688e8"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x8x2nd, 3x4x2nd, 1x2xMain, 1x2xLower, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2c07e6ddc1af30688e9"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x7, 5x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2c77e6ddc1af30688eb"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-28-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2c77e6ddc1af30688ec"),
		"Undefined" : [
			"Toronto C13",
			"Victoria Village",
			"Toronto",
			"116-27-L",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688ee"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688f0"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-26-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688f1"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688f3"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-24-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 2x3x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688f4"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x3x2nd, 1x6x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688f7"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-D",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x5xMain, 1x3xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2c87e6ddc1af30688f8"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-22-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x2, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce2cf7e6ddc1af30688fc"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"10",
			"Laundry",
			"Bsmt",
			"3.02",
			"3.45",
			"Unfinished"
		]
	},
	{
		"_id" : ObjectId("577ce2cf7e6ddc1af30688fe"),
		"Undefined" : [
			"Toronto E03",
			"Danforth",
			"Toronto",
			"115-24-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2cf7e6ddc1af3068901"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-23-R",
			"2105",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2d07e6ddc1af3068902"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2d07e6ddc1af3068903"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"115-22-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2d07e6ddc1af3068905"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"116-27-Q",
			"2016",
			"Detached",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x4x3rd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2d07e6ddc1af3068906"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2d07e6ddc1af3068907"),
		"Undefined" : [
			"Toronto E03",
			"Playter Estates-Danforth",
			"Toronto",
			"115-22-P",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x4x3rd, 1x4xBsmt, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2d07e6ddc1af3068908"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"115-24-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x7, 2x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af306890a"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af306890c"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-40-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af306890d"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-B",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068911"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-N",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"3x3, 1x3, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068912"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-34-M",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068913"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-36-K",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x3xIn Betwn, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068914"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-29-F",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068916"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-44-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068917"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-30-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af306891a"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-31-D",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af306891d"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af306891e"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-29-P",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xGround, 1x3x2nd, 1x3x3rd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af306891f"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-34-F",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x4xLower, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af3068921"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af3068922"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-P",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"3x4xGround, 3x2nd, 3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af3068925"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4x2nd, 1x4xBsmt, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af3068926"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"111-40-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af3068928"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-34-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x4xUpper, 1x2xIn Betwn"
		]
	},
	{
		"_id" : ObjectId("577ce2de7e6ddc1af3068929"),
		"Undefined" : [
			"Toronto E08",
			"Guildwood",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4xIn Betwn, 1x4x2nd, 1x6x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2e67e6ddc1af306892b"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af306892e"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af3068931"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-15-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af3068933"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-9-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xBsmt, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af3068936"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-N",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xGround, 1x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af3068937"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-13-S",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4xBsmt, 1x4xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af3068939"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af306893c"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-12-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xGround, 1x4x2nd, 1x4xBsmt",
			"10",
			"Kitchen",
			"Bsmt",
			"3.65",
			"2.63",
			"Eat-In Kitchen",
			"11",
			"Br",
			"Bsmt",
			"5.66",
			"3.65",
			"Broadloom",
			"Combined W/Living",
			"12",
			"Living",
			"Bsmt",
			"3.65",
			"5.66"
		]
	},
	{
		"_id" : ObjectId("577ce2ee7e6ddc1af306893f"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-E",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ee7e6ddc1af3068941"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ee7e6ddc1af3068942"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-3-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2ee7e6ddc1af3068943"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-J",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ee7e6ddc1af3068944"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-J",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ef7e6ddc1af3068946"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"114-9-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x1xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2ef7e6ddc1af3068947"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-6-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x4x2nd, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2ef7e6ddc1af3068948"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2ef7e6ddc1af306894a"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2ef7e6ddc1af306894c"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-7-M",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x5xMain, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306894d"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306894f"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068950"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068952"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068953"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-24-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068954"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068955"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-23-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068956"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-T",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068957"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-24-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x6, 1x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068958"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068959"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-21-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306895a"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306895b"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"355-21-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306895d"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 2x3"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306895e"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-21-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af3068960"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-23-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068961"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-W",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068962"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-A",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068965"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"319-26-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068966"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"331-26-B",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x2nd, 1x4x3rd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068967"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"320-28-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068968"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af3068969"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x5x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af306896a"),
		"Undefined" : [
			"Aurora",
			"Aurora Grove",
			"York",
			"331-26-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af306896b"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x5x2nd, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af306896c"),
		"Undefined" : [
			"Aurora",
			"Aurora Estates",
			"York",
			"337-24-E",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xGround, 1x4xGround, 1x5xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2ff7e6ddc1af306896d"),
		"Undefined" : [
			"Aurora",
			"Bayview Southeast",
			"York",
			"331-26-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 2x4x2nd, 2x3x2nd, 1x3xBsmt, 3x2"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af306896f"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-4-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068972"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-T",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068974"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-17-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068975"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"354-11-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068976"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-W",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x5xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068978"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af306897b"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af306897c"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af306897d"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af306897e"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 2x4x2nd, 1x5xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068980"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-5-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x6xMain, 1x6xMain, 1x2xMain, 1x6x2nd, 2x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068981"),
		"Undefined" : [
			"Vaughan",
			"Uplands",
			"York",
			"355-20-W",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af3068982"),
		"Undefined" : [
			"Vaughan",
			"Rural Vaughan",
			"York",
			"342-18-N",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30d7e6ddc1af3068985"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-18-H",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce30d7e6ddc1af3068986"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce30d7e6ddc1af3068987"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"335-6-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce30d7e6ddc1af3068988"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"15-30-G",
			"2015",
			"Detached",
			"Other",
			"1x2xBsmt, 1x6x2nd, 1x4xMain, 1x4xBsmt, 1x2xMain",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306898b"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-38-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306898c"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-28-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306898d"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-40-V",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306898e"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"351-36-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068991"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-31-Z",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068992"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-29-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068993"),
		"Undefined" : [
			"Markham",
			"Angus Glen",
			"York",
			"350-31-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068994"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068995"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068999"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-37-V",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306899a"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306899b"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-33-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306899c"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-32-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306899d"),
		"Undefined" : [
			"Markham",
			"Angus Glen",
			"York",
			"350-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306899e"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306899f"),
		"Undefined" : [
			"Markham",
			"Angus Glen",
			"York",
			"350-31-S",
			"2015",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x4x2nd, 1x2xMain, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce31c7e6ddc1af30689a0"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce31c7e6ddc1af30689a1"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-K",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce31c7e6ddc1af30689a2"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-42-L",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce31c7e6ddc1af30689a3"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"333-38-A",
			"2015",
			"Detached",
			"Bungalow",
			"1x6xMain, 2x3xMain, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3217e6ddc1af30689a9"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3227e6ddc1af30689aa"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3227e6ddc1af30689ab"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-41-X",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3227e6ddc1af30689ac"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3227e6ddc1af30689ad"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-B",
			"2015",
			"Detached",
			"Bungalow",
			"3x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3227e6ddc1af30689ae"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-40-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689af"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-8-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689b0"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689b1"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"258-9-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689b2"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x3xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689b3"),
		"Undefined" : [
			"Pickering",
			"Rural Pickering",
			"Durham",
			"266-4-N",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x5, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689b4"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"266-5-R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4x2nd, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3257e6ddc1af30689b5"),
		"Undefined" : [
			"Pickering",
			"Rural Pickering",
			"Durham",
			"266-3-P",
			"2015",
			"Detached",
			"Sidesplit 3",
			"1x4xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689b6"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-14-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689b9"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"267-12-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689ba"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689bd"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-13-U",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x3xBsmt, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689be"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"259-13-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689bf"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689c0"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-14-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce32b7e6ddc1af30689c1"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-10-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2x2nd, 1x2xMain, 2x3"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689c3"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689c5"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"260-19-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689c6"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689c7"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-18-R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689c9"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"268-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689ca"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689cb"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689cc"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689cd"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689ce"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689cf"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"269-26-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain",
			"7",
			"Utility",
			"Bsmt",
			"6.30",
			"5.90"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689d1"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-27-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689d3"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689d6"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-27-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689d7"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-29-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689d8"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689d9"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-Q",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x1x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689da"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689db"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-31-N",
			"2015",
			"Detached",
			"2-Storey",
			"2x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689dc"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-26-M",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x3xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689dd"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689de"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689df"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-27-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689e0"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689e1"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-30-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689e2"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-U",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce33c7e6ddc1af30689e3"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-L",
			"2015",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689e5"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689e6"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-R",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689e7"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-P",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689e8"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689e9"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-R",
			"2015",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689ea"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689eb"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt, Bsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689ec"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xUpper, 1x3xUpper, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3407e6ddc1af30689ed"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"13-37-F",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x2xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3427e6ddc1af30689ef"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"13-36-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3437e6ddc1af30689f0"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"236-9-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f1"),
		"Undefined" : [
			"Essa",
			"Rural Essa",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f2"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f3"),
		"Undefined" : [
			"Barrie",
			"Lakeshore",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f4"),
		"Undefined" : [
			"Springwater",
			"Hillsdale",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f5"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f6"),
		"Undefined" : [
			"Springwater",
			"Rural Springwater",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce3547e6ddc1af30689f8"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x2xLower, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af30689fd"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af30689ff"),
		"Undefined" : [
			"Barrie",
			"Bayshore",
			"Simcoe",
			"505-13-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a01"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a04"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a0a"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a0b"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a0c"),
		"Undefined" : [
			"Clearview",
			"Rural Clearview",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 3x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a0d"),
		"Undefined" : [
			"Barrie",
			"North Shore",
			"Simcoe",
			"505-13-H",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x2xMain, 1x4x3rd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a0e"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a0f"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a10"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a13"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x3x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a15"),
		"Undefined" : [
			"Barrie",
			"South Shore",
			"Simcoe",
			"505-14-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a16"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"501-7-D",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x6xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a18"),
		"Undefined" : [
			"Barrie",
			"South Shore",
			"Simcoe",
			"505-13-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3597e6ddc1af3068a19"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-H",
			"2015",
			"Semi-Detached",
			"Backsplit 4",
			"1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3597e6ddc1af3068a1a"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"444-33-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3597e6ddc1af3068a1c"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3597e6ddc1af3068a1d"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3597e6ddc1af3068a1e"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3597e6ddc1af3068a1f"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce3687e6ddc1af3068a20"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"453-53-Z",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3687e6ddc1af3068a21"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-M",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"1x3xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3687e6ddc1af3068a22"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-44-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a23"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"458-40-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a24"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-40-H",
			"2015",
			"Detached",
			"Backsplit 5",
			"1x2, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a26"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-43-K",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a27"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-41-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a28"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"473-42-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2xBsmt, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a29"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a2a"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a2b"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-44-L",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x3x2nd, 1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a2c"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"466-47-K",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4xUpper, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a2d"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a2f"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a30"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-34-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a31"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 3x3"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a32"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"453-53-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a33"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-37-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a36"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-36-Q",
			"2015",
			"Detached",
			"2-Storey",
			"2x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a37"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a38"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-36-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a39"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"458-39-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a3a"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"458-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a3b"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"473-46-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a3c"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-37-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a3e"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"472-33-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 2x5xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a3f"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 3x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3697e6ddc1af3068a40"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-R",
			"2015",
			"Detached",
			"2-Storey",
			"2x2xMain, 1x6x2nd, 2x4x2nd, 1x3x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce37d7e6ddc1af3068a42"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-U",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a43"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a46"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a47"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"465-38-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a4a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a4b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"3x3"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a4c"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-W",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a4d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4xUpper, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a4e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-41-Z",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x3x2nd, 1x2xLower, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a50"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4xBsmt, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a51"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a52"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-43-U",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a53"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"446-51-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a55"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a56"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-45-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a58"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a59"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a5a"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"478-39-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a5b"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington North",
			"Peel",
			"451-40-V",
			"2016",
			"Link",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a5c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-51-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a5d"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a60"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-41-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a61"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"453-49-X",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a62"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a64"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xBsmt, 1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a65"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-37-Y",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a66"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-52-P",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a67"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a68"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-52-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a6a"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"438-44-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a6b"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a6c"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a6d"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-56-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x3x3rd, 1x2xLower, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a6e"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-38-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 3x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("577ce3807e6ddc1af3068a71"),
		"Undefined" : [
			"Caledon",
			"Palgrave",
			"Peel",
			"424-64-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a72"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a74"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-23-C",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a75"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-24-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a76"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a77"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a78"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a79"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-19-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a7a"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a7b"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-33-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3857e6ddc1af3068a7c"),
		"Undefined" : [
			"Halton Hills",
			"Glen Williams",
			"Halton",
			"437-33-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4x2nd, 1x5x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577ce38c7e6ddc1af3068a81"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"471-29-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce38c7e6ddc1af3068a82"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xLower, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577ce38c7e6ddc1af3068a83"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-23-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 3x4"
		]
	},
	{
		"_id" : ObjectId("577ce38c7e6ddc1af3068a84"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-30-N",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce38c7e6ddc1af3068a85"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce38c7e6ddc1af3068a86"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce38d7e6ddc1af3068a87"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce38d7e6ddc1af3068a88"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-30-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce38d7e6ddc1af3068a89"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce38d7e6ddc1af3068a8a"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a8b"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"469-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a8c"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"470-17-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a8d"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-15-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x2xLower, 1x3xBsmt, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a8f"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"469-15-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a90"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"475-13-U",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4x3rd, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a91"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce4507e6ddc1af3068a94"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("577ce4507e6ddc1af3068a95"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577ce4507e6ddc1af3068a9b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"416-203-8885"
		]
	},
	{
		"_id" : ObjectId("577ce4507e6ddc1af3068a9d"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aa0"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-601-2121"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aa1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-204-1222"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aa2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aa5"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aa7"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-284-4751"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aa8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-0003"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aac"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-222-2600"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aad"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-762-8255"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab0"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-646-8833"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab1"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab3"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Loft",
			"1x2, 1x3",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab4"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-495-2660"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab7"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-331-8987"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab8"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ab9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068aba"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-17-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-588-2200"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068abc"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068abe"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Other",
			"1x4, 1x2",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068abf"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("577ce4517e6ddc1af3068ac1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068ac2"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068ac4"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Loft",
			"1x5x2nd, 1x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068ac6"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068ac7"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"119-16-S",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068ac8"),
		"Undefined" : [
			"Toronto C02",
			"Casa Loma",
			"Toronto",
			"115-18-P",
			"2016",
			"Condo Apt",
			"Loft",
			"1x5, 1x4",
			"416-637-8000"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068ac9"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Comm Element Condo",
			"Loft",
			"1x5x2nd, 1x4xMain",
			"416-703-0244"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068aca"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x3, 1x4",
			"416-637-8000"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068acb"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x3, 1x4",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068acd"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x4xMain, 1x3xMain, 1x2xMain",
			"416-504-6133"
		]
	},
	{
		"_id" : ObjectId("577ce4527e6ddc1af3068acf"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4, 1x3, 1x2",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ad3"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ad4"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ad5"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ad6"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-604-2299"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ad7"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ad9"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-5600"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068adb"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ae1"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ae3"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ae4"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ae5"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"2x4xFlat",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("577ce4617e6ddc1af3068ae7"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-A",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577ce4627e6ddc1af3068aea"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2x2nd, 1x4x2nd, 1x3xLower",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("577ce4627e6ddc1af3068aeb"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-22-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577ce4627e6ddc1af3068aec"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-20-F",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4, 1x3",
			"416-590-2888"
		]
	},
	{
		"_id" : ObjectId("577ce4627e6ddc1af3068aed"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-J",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("577ce4627e6ddc1af3068aee"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x5, 1x4",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("577ce4627e6ddc1af3068aef"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x3xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068af0"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068af3"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068af5"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-35-E",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4x2nd",
			"905-604-6918"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068af6"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-28-B",
			"2016",
			"Other",
			"Apartment",
			"1x4xFlat",
			"416-223-8833"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068af9"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-707-8889"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068afa"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068afb"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-38-J",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x3x3rd",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068afd"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-29-E",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("577ce46a7e6ddc1af3068afe"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-G",
			"2015",
			"Condo Townhouse",
			"Bungalow",
			"1x5, 1x3",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b01"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b02"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-12-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-812-1100"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b05"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-3-D",
			"2015",
			"Condo Apt",
			"Other",
			"2x3",
			"416-371-3737"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b06"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-14-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-487-4311"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b07"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b08"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b09"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-K",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4xUpper",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b0a"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-4-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b0b"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b0c"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-834-9261"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068b0d"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("577ce4767e6ddc1af3068b0e"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-Q",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xMain, 1x3xMain",
			"416-398-5035"
		]
	},
	{
		"_id" : ObjectId("577ce4767e6ddc1af3068b11"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-N",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd, 1x2xMain",
			"416-398-5035"
		]
	},
	{
		"_id" : ObjectId("577ce4767e6ddc1af3068b12"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("577ce4767e6ddc1af3068b13"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-N",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4xUpper, 1x2xMain",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b14"),
		"Undefined" : [
			"Markham",
			"Commerce Valley",
			"York",
			"355-24-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b17"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-22-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b19"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-22-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b1a"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-T",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x3xMain, 1x3xMain",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b1c"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-X",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x3x2nd, 1x3x3rd",
			"905-997-6000"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b1d"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-29-W",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b1f"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b20"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b23"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xGround, 1x4x3rd",
			"905-737-5700"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b25"),
		"Undefined" : [
			"Markham",
			"Bayview Fairway-Bayview Country Club Estates",
			"York",
			"355-24-Y",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b26"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b27"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("577ce4827e6ddc1af3068b28"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("577ce4867e6ddc1af3068b2b"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("577ce4867e6ddc1af3068b2d"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577ce4867e6ddc1af3068b2f"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-428-8100"
		]
	},
	{
		"_id" : ObjectId("577ce4867e6ddc1af3068b30"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"905-430-9000"
		]
	},
	{
		"_id" : ObjectId("577ce4867e6ddc1af3068b31"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xGround, 1x4x3rd",
			"905-428-7677"
		]
	},
	{
		"_id" : ObjectId("577ce4867e6ddc1af3068b32"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-430-2320"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b33"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b34"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-46-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b35"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b37"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b3a"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-X",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x4xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b3b"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x3xUpper",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b3c"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-43-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xFlat, 1x4xFlat",
			"866-381-7676"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b3d"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-33-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b3e"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-40-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b3f"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x2x2nd",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b40"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b41"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x3, 1x2",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577ce4907e6ddc1af3068b42"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b46"),
		"Undefined" : [
			"Burlington",
			"Tansley",
			"Halton",
			"469-14-Q",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b48"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4xUpper, 1x2xMain",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b49"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"449-22-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xGround",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b4a"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-897-8777"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b4b"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"475-16-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b4d"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"866-381-7676"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b4e"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"475-16-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577ce4967e6ddc1af3068b4f"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xFlat, 1x3xFlat, 1x5xFlat",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd6b"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-15-M",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd6c"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-R",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd6d"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x4xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd6e"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-18-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd6f"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x2xMain, 1x2x3rd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8e57e6ddc53f32cdd71"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-P",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x5x2nd, 1x3xBsmt, 1x2xMain, 1x5x3rd"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd72"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd73"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd74"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd75"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd76"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"109-22-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd77"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ea7e6ddc53f32cdd78"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x4x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8eb7e6ddc53f32cdd79"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x8, 2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd7a"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"102-16-D",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xGround, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd7b"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-G",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd7c"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-K",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd7d"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-D",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd7e"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-19-G",
			"2015",
			"Detached",
			"Other",
			"1x3xMain, 1x3x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd7f"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd80"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-20-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db8ef7e6ddc53f32cdd81"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 1x6, 3x4"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd82"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-J",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd83"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-D",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x2nd, 2x4x3rd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd84"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-D",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xMain, 0x0, 0x0"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd85"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-24-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x2xBsmt, 1x5x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd86"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 4x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd87"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x7x2nd, 1x5x2nd, 2x4x2nd, 2x4xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db8f47e6ddc53f32cdd88"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 4x4x2nd, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd89"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd8a"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd8b"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"121-25-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd8c"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd8d"),
		"Undefined" : [
			"Toronto E03",
			"Danforth",
			"Toronto",
			"115-24-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd8e"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd8f"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd90"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd91"),
		"Undefined" : [
			"Toronto E03",
			"Danforth Village-East York",
			"Toronto",
			"115-24-P",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd92"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd93"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd94"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"2015",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db8ff7e6ddc53f32cdd95"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"121-25-S",
			"2016",
			"Detached",
			"Other",
			"1x3xMain, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9007e6ddc53f32cdd96"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-27-P",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x3x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9007e6ddc53f32cdd97"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-22-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db9007e6ddc53f32cdd98"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdd99"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"116-30-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdd9a"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdd9c"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-38-E",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdd9d"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-37-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdd9e"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x2xMain, 1x4x3rd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdd9f"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-H",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9127e6ddc53f32cdda0"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-34-B",
			"2016",
			"Att/Row/Twnhouse",
			"Multi-Level",
			"1x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda1"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"116-30-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda2"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-32-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda3"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda5"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 2x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda6"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"110-31-K",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda7"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda8"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-39-J",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x6, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cdda9"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-34-F",
			"2016",
			"Detached",
			"3-Storey",
			"1x4, 1x3, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddaa"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-39-K",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddab"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddac"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddad"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"111-40-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddae"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-33-F",
			"2015",
			"Semi-Detached",
			"Backsplit 5",
			"1x3x2nd, 1x2xUpper, 1x4xSub-Bsmt"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddaf"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-D",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb0"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-36-M",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xUpper, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb1"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-38-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xGround, 1x4x2nd, 1x3x2nd, 1x4xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb2"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-33-F",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4, 3x3"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb3"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"111-40-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb4"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-28-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3xMain, Main"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb5"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9137e6ddc53f32cddb6"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddb7"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-12-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddb8"),
		"Undefined" : [
			"Toronto W03",
			"Keelesdale-Eglinton West",
			"Toronto",
			"114-13-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddb9"),
		"Undefined" : [
			"Toronto W03",
			"Caledonia-Fairbank",
			"Toronto",
			"114-14-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddba"),
		"Undefined" : [
			"Toronto W04",
			"Briar Hill-Belgravia",
			"Toronto",
			"114-14-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddbb"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-12-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddbc"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-H",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddbd"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4xMain, 1x2x3rd, 1x3xBsmt, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddbe"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"102-10-E",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577db91d7e6ddc53f32cddbf"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc0"),
		"Undefined" : [
			"Toronto W04",
			"Maple Leaf",
			"Toronto",
			"108-14-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x3, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc1"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-9-C",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc2"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x5xMain, 1x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc3"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-14-T",
			"2016",
			"Duplex",
			"3-Storey",
			"1x4x3rd, 1x4x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc4"),
		"Undefined" : [
			"Toronto W03",
			"Caledonia-Fairbank",
			"Toronto",
			"114-15-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x5, 1x3"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc6"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"102-9-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x5x2nd, 1x4x2nd, 1x2xFlat, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc7"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc8"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-10-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x5x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddc9"),
		"Undefined" : [
			"Toronto W02",
			"Lambton Baby Point",
			"Toronto",
			"114-11-P",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x5x2nd, 1x3x3rd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddca"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"6x3, 0x0, 0x0"
		]
	},
	{
		"_id" : ObjectId("577db91e7e6ddc53f32cddcb"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-P",
			"2016",
			"Detached",
			"3-Storey",
			"1x2xMain, 2x3x2nd, 1x4x2nd, 1x5x3rd, 2x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db92a7e6ddc53f32cddcc"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-8-U",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db92a7e6ddc53f32cddcd"),
		"Undefined" : [
			"Toronto W06",
			"Alderwood",
			"Toronto",
			"118-5-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddce"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-E",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddcf"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd0"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd1"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-S",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd2"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-6-M",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd3"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-8-J",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xUpper, 1x3xGround, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd4"),
		"Undefined" : [
			"Toronto W09",
			"Humber Heights",
			"Toronto",
			"108-9-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd5"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x4x2nd, 1x2xBsmt, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd6"),
		"Undefined" : [
			"Toronto W08",
			"Edenbridge-Humber Valley",
			"Toronto",
			"113-8-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd8"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"114-9-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddd9"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-6-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db92b7e6ddc53f32cddda"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdddb"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdddc"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-24-R",
			"2016",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"1x2xMain, 1x4x2nd, 1x5x3rd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdddd"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xGround, 1x5x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cddde"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdddf"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-23-Q",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 2x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde0"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde1"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-25-V",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde2"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde3"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde4"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde5"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde6"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-Q",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde7"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-F",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde8"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 2x5x2nd, 2x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdde9"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-24-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x3xBsmt, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cddea"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cddeb"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-25-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cddec"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-23-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3x2nd, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db93a7e6ddc53f32cdded"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-23-G",
			"2016",
			"Detached",
			"2-Storey",
			"3x5xUpper, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddee"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-A",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x4x3rd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddef"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf0"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf1"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-23-D",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf2"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"331-26-B",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf3"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2015",
			"Detached",
			"2-Storey",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf4"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf5"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-Y",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9437e6ddc53f32cddf6"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"319-25-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9447e6ddc53f32cddf7"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"325-26-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9447e6ddc53f32cddf8"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x5, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9447e6ddc53f32cddf9"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"320-29-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x5xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9447e6ddc53f32cddfa"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9447e6ddc53f32cddfb"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9547e6ddc53f32cddfc"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-16-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9547e6ddc53f32cddfd"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-56-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9547e6ddc53f32cddfe"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-7-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cddff"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-6-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde00"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde01"),
		"Undefined" : [
			"Vaughan",
			"Elder Mills",
			"York",
			"347-5-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde02"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde03"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-18-W",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde04"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde05"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde06"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-Q",
			"2015",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde07"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde08"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde09"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-16-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde0a"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde0c"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-R",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde0d"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-20-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde0e"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x6x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde0f"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-18-X",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde10"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-17-V",
			"2015",
			"Detached",
			"3-Storey",
			"1x2xGround, 1x4x2nd, 2x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde11"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-16-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde12"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde14"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"343-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd, 1x5x2nd, 1x3xBsmt, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde15"),
		"Undefined" : [
			"Vaughan",
			"Rural Vaughan",
			"York",
			"342-18-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x3xMain, 1x3xMain, 1x4xLower, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9587e6ddc53f32cde16"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"1x5, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9587e6ddc53f32cde17"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-17-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9587e6ddc53f32cde18"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db9587e6ddc53f32cde19"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x2, 1x3, 1x5"
		]
	},
	{
		"_id" : ObjectId("577db9597e6ddc53f32cde1a"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"335-5-H",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6xMain, 3x3xGround, 1x3",
			"Barn"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde1b"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-36-Y",
			"2016",
			"Other",
			"Other",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde1c"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde1d"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde1e"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-34-W",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde1f"),
		"Undefined" : [
			"Markham",
			"Cedarwood",
			"York",
			"357-36-Z",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde20"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde21"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"351-36-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde22"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xGround, 2x4x2nd, 1x3xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde23"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde24"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-37-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde25"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-24-X",
			"2016",
			"Detached",
			"Sidesplit 5",
			"1x2xMain, 1x2x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde26"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-24-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde27"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-31-Z",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x4x2nd, 1x2xGround, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde28"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-26-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde2a"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-40-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde2b"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-26-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde2c"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-34-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde2d"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-26-X",
			"2016",
			"Detached",
			"2-Storey",
			"1x6x2nd, 1x5x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde2e"),
		"Undefined" : [
			"Markham",
			"Victoria Square",
			"York",
			"344-28-P",
			"2016",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9697e6ddc53f32cde2f"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x5, 2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db96a7e6ddc53f32cde31"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x2xLower, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577db96a7e6ddc53f32cde32"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-29-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db96a7e6ddc53f32cde33"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-31-U",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde34"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde35"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde36"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-42-L",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde37"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde38"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x2xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde39"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"332-34-C",
			"2015",
			"Detached",
			"Bungalow",
			"1x5, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde3a"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"12-33-F",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xBsmt",
			"Paddocks"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde3b"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"332-33-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x4, 3x3, 1x5",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde3c"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"333-1-N",
			"2015",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 1x5xLower"
		]
	},
	{
		"_id" : ObjectId("577db9707e6ddc53f32cde3d"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"2015",
			"Farm",
			"Bungalow",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("577db9737e6ddc53f32cde3e"),
		"Undefined" : [
			"East Gwillimbury",
			"Mt Albert",
			"York",
			"321-1-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9737e6ddc53f32cde3f"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"313-24-M",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 2x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9737e6ddc53f32cde40"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"320-30-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9737e6ddc53f32cde41"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"12-32-D",
			"2016",
			"Farm",
			"Bungalow-Raised",
			"1x5xGround, 1x4xGround, 1x3xBsmt",
			"Indoor Arena"
		]
	},
	{
		"_id" : ObjectId("577db97b7e6ddc53f32cde43"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-32-C",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db97b7e6ddc53f32cde44"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db97b7e6ddc53f32cde45"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-V",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4x2nd, 3x3"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde46"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-W",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x1x2nd"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde47"),
		"Undefined" : [
			"Brock",
			"Rural Brock",
			"Durham",
			"205-23-X",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde49"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-33-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde4a"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde4b"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-X",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde4c"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-B",
			"2015",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde4d"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577db97c7e6ddc53f32cde4e"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-31-C",
			"2016",
			"Detached",
			"Bungalow",
			"1x5xMain, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde4f"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde51"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-9-Q",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde52"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"274-8-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde53"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde54"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde55"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-5-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde56"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9817e6ddc53f32cde57"),
		"Undefined" : [
			"Pickering",
			"Rougemount",
			"Durham",
			"274-3-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde58"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde59"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-12-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde5a"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-11-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde5b"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-15-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde5d"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde5e"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-13-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde5f"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde60"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"267-12-N",
			"2016",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db98d7e6ddc53f32cde61"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-14-U",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde62"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-12-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde63"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde64"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde65"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x4xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde66"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"259-12-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x5x2nd, 1x5xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde68"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-16-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 1x6"
		]
	},
	{
		"_id" : ObjectId("577db98e7e6ddc53f32cde69"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-15",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde6a"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-R",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde6b"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde6c"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-M",
			"2015",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde6d"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde6e"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-G",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde6f"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-21-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde70"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-21-K",
			"2016",
			"Link",
			"2-Storey",
			"1x2, 1x4, 1x5"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde71"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-18-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde72"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-21-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde73"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"268-19-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde74"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-F",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c37e6ddc53f32cde97"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce2ba7e6ddc1af30688d6"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x5xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af306890b"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-K",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af3068918"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-28-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce2dd7e6ddc1af306891c"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"104-32-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce2e77e6ddc1af3068934"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-B",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"1x4, 1x4, 1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af306898a"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-X",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3197e6ddc1af3068997"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce3317e6ddc1af30689c2"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-22-R",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3557e6ddc1af3068a05"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"507-6-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577ce37e7e6ddc1af3068a45"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"459-41-A",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577ce37f7e6ddc1af3068a70"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577ce3907e6ddc1af3068a8e"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-15-P",
			"2016",
			"Detached",
			"Bungaloft",
			"1x2xMain, 1x4xMain, 1x3x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577ce4757e6ddc1af3068aff"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-N",
			"2015",
			"Parking Space",
			"Other",
			"0x0",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("577b91257e6ddc620838919a"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-D",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891c1"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891c5"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-K",
			"2016",
			"Detached",
			"Backsplit 3",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891d7"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-28-A",
			"2016",
			"Link",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b91457e6ddc62083891da"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"111-40-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577b91507e6ddc62083891eb"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91717e6ddc620838923e"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 4x3x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577b917e7e6ddc620838923f"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-18-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389251"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x5xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577b917f7e6ddc6208389254"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-V",
			"2016",
			"Detached",
			"Bungaloft",
			"1x2, 1x4, 1x5, 1x3"
		]
	},
	{
		"_id" : ObjectId("577b91817e6ddc620838925f"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91817e6ddc6208389260"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91987e6ddc6208389290"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"301-31-X",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xMain, 1x2x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91a57e6ddc620838929a"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577b91b77e6ddc62083892b7"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577b91bb7e6ddc62083892cf"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892dc"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"900-9-G",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577b91d17e6ddc62083892ef"),
		"Undefined" : [
			"Barrie",
			"400 North",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc620838930b"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-A",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b91ea7e6ddc6208389319"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"101-51-A",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc620838933c"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc620838933e"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4, 1x2, 1x2"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389344"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"465-40-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc6208389348"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4xUpper, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577b92057e6ddc620838934d"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389361"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"465-39-J",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389364"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xBsmt, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577b92067e6ddc6208389367"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("577b93357e6ddc62083893dd"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577b935c7e6ddc6208389462"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("577b93717e6ddc620838946e"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("577b93727e6ddc620838947d"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-488-2875"
		]
	},
	{
		"_id" : ObjectId("577b93a37e6ddc62083894ce"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894d7"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3, 0x0, 0x0",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("577b93a47e6ddc62083894d8"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("5776484b7e6ddc1df4af5ca1"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577648507e6ddc1df4af5cac"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-N",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577648547e6ddc1df4af5cb3"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"119-14-R",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x1xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648547e6ddc1df4af5cb4"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("5776485c7e6ddc1df4af5cc0"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-20-Q",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 1x2"
		]
	},
	{
		"_id" : ObjectId("5776489b7e6ddc1df4af5d2a"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-V",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d4d"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-23-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577648b07e6ddc1df4af5d61"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2016",
			"Farm",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577648c07e6ddc1df4af5d70"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"453-54-Z",
			"2015",
			"Semi-Detached",
			"Backsplit 5",
			"1x4, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d8b"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-43-V",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x3xLower, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577648d77e6ddc1df4af5d91"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-44-U",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5da2"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577648d87e6ddc1df4af5da8"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"472-40-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5de2"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577649837e6ddc1df4af5e1b"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("577649837e6ddc1df4af5e20"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-475-8807"
		]
	},
	{
		"_id" : ObjectId("577649ad7e6ddc1df4af5e60"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("577649b07e6ddc1df4af5e7a"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"469-13-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xGround",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5774f94b7e6ddc53a704203a"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042041"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f95b7e6ddc53a7042043"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-D",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9647e6ddc53a7042062"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"2016",
			"Detached",
			"3-Storey",
			"1x4, 1x4, 1x3, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5774f96b7e6ddc53a704206f"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-24-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f97c7e6ddc53a7042091"),
		"Undefined" : [
			"Vaughan",
			"Rural Vaughan",
			"York",
			"348-16-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd",
			"Garden Shed"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a70420fd"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"472-33-Q",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a70420fe"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"465-34-K",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("5774f9c07e6ddc53a7042102"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"101-52-A",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xUpper, 1x3xBsmt, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a704212c"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a704212d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"444-38-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774f9d67e6ddc53a704213c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-49-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042184"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-599-4003"
		]
	},
	{
		"_id" : ObjectId("5774fa717e6ddc53a7042186"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5774fa867e6ddc53a70421b1"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"416-270-1111"
		]
	},
	{
		"_id" : ObjectId("5774fa8e7e6ddc53a70421c2"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421e4"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("5774faa57e6ddc53a70421ef"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Condo Apt",
			"Other",
			"1x4xFlat, 1x4xFlat",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5773473b7e6ddc4cf64bd9a8"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x1xBsmt"
		]
	},
	{
		"_id" : ObjectId("5773494c7e6ddc4cf64bdbed"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-A",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xGround"
		]
	},
	{
		"_id" : ObjectId("5773497c7e6ddc4cf64bdc23"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577349817e6ddc4cf64bdc46"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2015",
			"Detached",
			"3-Storey",
			"1x2xMain, 1x4xUpper, 1x5xUpper"
		]
	},
	{
		"_id" : ObjectId("577349b17e6ddc4cf64bdc65"),
		"Undefined" : [
			"Brampton",
			"Brampton 407 Corridor",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577349c47e6ddc4cf64bdcab"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"15-28-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x3, 1x3, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57734a9d7e6ddc4cf64bdcc6"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcfb"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd31"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57734ac57e6ddc4cf64bdd34"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-J",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x4, 2x2",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("57734ad77e6ddc4cf64bdd61"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("5784c7877e6ddc257ca2da98"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-57-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5784c7877e6ddc257ca2daa4"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"437-40-O",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5784c78b7e6ddc257ca2dab1"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c7957e6ddc257ca2dad8"),
		"Undefined" : [
			"Milton",
			"Trafalgar",
			"Halton",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5784c79e7e6ddc257ca2daf2"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("5784c79e7e6ddc257ca2daf4"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-27-R",
			"2016",
			"Detached",
			"2-Storey",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("5784c79e7e6ddc257ca2daf7"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-20-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5784c8757e6ddc257ca2dcf8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Locker",
			"0xFlat",
			"647-982-7355"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dcfb"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dcfd"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dcff"),
		"Undefined" : [
			"Toronto C02",
			"Casa Loma",
			"Toronto",
			"115-18-P",
			"2016",
			"Comm Element Condo",
			"Loft",
			"1x3",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dd01"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dd03"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dd08"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dd09"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-738-6644"
		]
	},
	{
		"_id" : ObjectId("5784c8767e6ddc257ca2dd11"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-497-8900"
		]
	},
	{
		"_id" : ObjectId("5784c8777e6ddc257ca2dd17"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5784c8777e6ddc257ca2dd18"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-221-8838"
		]
	},
	{
		"_id" : ObjectId("5784c8777e6ddc257ca2dd1e"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("5784c8777e6ddc257ca2dd22"),
		"Undefined" : [
			"Toronto C02",
			"Casa Loma",
			"Toronto",
			"115-18-P",
			"2016",
			"Comm Element Condo",
			"Loft",
			"1x3",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("5784c8777e6ddc257ca2dd2b"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("5784c8787e6ddc257ca2dd31"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("5784c8787e6ddc257ca2dd32"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5784c8787e6ddc257ca2dd35"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784c8787e6ddc257ca2dd36"),
		"Undefined" : [
			"Toronto C02",
			"Casa Loma",
			"Toronto",
			"115-18-P",
			"2016",
			"Comm Element Condo",
			"Loft",
			"2x3",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("5784c8787e6ddc257ca2dd40"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"855-577-9888"
		]
	},
	{
		"_id" : ObjectId("5784c88d7e6ddc257ca2dd78"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5784c88d7e6ddc257ca2dd80"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784c88d7e6ddc257ca2dd85"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784c88d7e6ddc257ca2dd88"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-221-8838"
		]
	},
	{
		"_id" : ObjectId("5784c88e7e6ddc257ca2dd8a"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("5784c88e7e6ddc257ca2dd9c"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("5784c88e7e6ddc257ca2dda2"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4x2nd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784c89c7e6ddc257ca2ddc6"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"116-31-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("5784c89c7e6ddc257ca2ddc8"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-36-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784c89c7e6ddc257ca2ddca"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784c89c7e6ddc257ca2ddd0"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784c8ac7e6ddc257ca2de09"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"102-10-E",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xFlat",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5784c8ac7e6ddc257ca2de0f"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4, 0x0, 0x0",
			"416-746-9494"
		]
	},
	{
		"_id" : ObjectId("5784c8ac7e6ddc257ca2de10"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-477-5095"
		]
	},
	{
		"_id" : ObjectId("5784c8ad7e6ddc257ca2de13"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x4",
			"905-707-1188"
		]
	},
	{
		"_id" : ObjectId("5784c8ad7e6ddc257ca2de15"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"101-8-C",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x2",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5784c8ad7e6ddc257ca2de19"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"114-11-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x2",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("5784c8ad7e6ddc257ca2de1b"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("5784c8ad7e6ddc257ca2de1f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("5784c8be7e6ddc257ca2de4e"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-300-3000"
		]
	},
	{
		"_id" : ObjectId("5784c8be7e6ddc257ca2de50"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-5-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5784c8be7e6ddc257ca2de51"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784c8be7e6ddc257ca2de57"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("5784c8bf7e6ddc257ca2de65"),
		"Undefined" : [
			"Richmond Hill",
			"Beaver Creek Business Park",
			"York",
			"349-26-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 2x4",
			"905-470-2260"
		]
	},
	{
		"_id" : ObjectId("5784c8bf7e6ddc257ca2de67"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x5",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("57861efe7e6ddc032a03939b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57861efe7e6ddc032a0393a9"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("57861eff7e6ddc032a0393b9"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("57861eff7e6ddc032a0393c3"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2, 1x3",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("57861f0a7e6ddc032a0393eb"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("57861f0a7e6ddc032a0393ec"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("57861f0a7e6ddc032a0393f7"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57861f0a7e6ddc032a0393fb"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("57861f0a7e6ddc032a0393fe"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("57861f157e6ddc032a03941b"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("57861f157e6ddc032a03941c"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("57861f157e6ddc032a03941d"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57861f237e6ddc032a03944f"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-502-9944"
		]
	},
	{
		"_id" : ObjectId("57861f247e6ddc032a039454"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-736-2617"
		]
	},
	{
		"_id" : ObjectId("57861f2e7e6ddc032a03947e"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("57861f2f7e6ddc032a039481"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("57861f2f7e6ddc032a039483"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("57861f2f7e6ddc032a039484"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"2x4x2nd",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("57861f2f7e6ddc032a039485"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("57861f2f7e6ddc032a039487"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("57861f2f7e6ddc032a03948b"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-742-6464"
		]
	},
	{
		"_id" : ObjectId("57861f407e6ddc032a0394c3"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x2",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("57861f417e6ddc032a0394d5"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x3x2nd",
			"416-551-6044"
		]
	},
	{
		"_id" : ObjectId("5784c6bb7e6ddc257ca2d76f"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"115-20-Q",
			"2016",
			"Detached",
			"3-Storey",
			"0x0"
		]
	},
	{
		"_id" : ObjectId("57876a8a7e6ddc2c8455435c"),
		"Undefined" : [
			"Toronto C01",
			"Dufferin Grove",
			"Toronto",
			"119-15-R",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"1x2xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57876aa97e6ddc2c845543c4"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-N",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("57876aa97e6ddc2c845543cc"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-H",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57876b267e6ddc2c845545c9"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x5xMain, 1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57876b367e6ddc2c84554608"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5xUpper, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57876b4b7e6ddc2c84554658"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57876b4b7e6ddc2c8455465e"),
		"Undefined" : [
			"Brampton",
			"Gore Industrial North",
			"Peel",
			"446-52-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57876c3f7e6ddc2c845548ca"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("57876c4a7e6ddc2c845548f3"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-298-2800"
		]
	},
	{
		"_id" : ObjectId("57876c4a7e6ddc2c845548fb"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-474-1772"
		]
	},
	{
		"_id" : ObjectId("57876c4a7e6ddc2c84554907"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57876c4a7e6ddc2c84554908"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57876c4a7e6ddc2c84554909"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57876c547e6ddc2c8455491f"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-709-8000"
		]
	},
	{
		"_id" : ObjectId("57876c547e6ddc2c84554928"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"101-7-E",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x3",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("57876c547e6ddc2c8455492d"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4x2nd, 1x2xMain",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("57876c547e6ddc2c8455492e"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("57876c547e6ddc2c8455492f"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("57876c5f7e6ddc2c84554949"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-32-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-513-6633"
		]
	},
	{
		"_id" : ObjectId("57876c5f7e6ddc2c8455494b"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("57876c5f7e6ddc2c8455494e"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-832-1111"
		]
	},
	{
		"_id" : ObjectId("57876c717e6ddc2c8455498c"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4xFlat",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("57876c797e6ddc2c845549b7"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"471-28-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4x2nd, 1x2xGround",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("57876c797e6ddc2c845549be"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("57876c797e6ddc2c845549c0"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xFlat, 1x4xFlat",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("57876c797e6ddc2c845549c2"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4",
			"905-897-8777"
		]
	},
	{
		"_id" : ObjectId("57876cc37e6ddc2c84554a71"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("57861f417e6ddc032a0394d0"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5788ba597e6ddc54b784688a"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"4x0"
		]
	},
	{
		"_id" : ObjectId("5788ba6f7e6ddc54b78468da"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5788baf17e6ddc54b7846a92"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-28-N",
			"2016",
			"Detached",
			"Bungaloft",
			"1x4x2nd, 1x3xGround, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5788bb047e6ddc54b7846ac3"),
		"Undefined" : [
			"Severn",
			"Washago",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5788bb047e6ddc54b7846ac4"),
		"Undefined" : [
			"Severn",
			"Washago",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5788bb047e6ddc54b7846ac5"),
		"Undefined" : [
			"Severn",
			"Washago",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5788bb057e6ddc54b7846ad7"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-K",
			"2015",
			"Link",
			"2-Storey",
			"1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("5788bb097e6ddc54b7846af4"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5788bb187e6ddc54b7846b1c"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-G",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("5788bb2f7e6ddc54b7846b72"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5788bb2f7e6ddc54b7846b73"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5788bb307e6ddc54b7846b7b"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-R",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("5788bb317e6ddc54b7846ba4"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5788bb367e6ddc54b7846bb6"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"15-28-J",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5788bb367e6ddc54b7846bb7"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"15-28-J",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5788bc047e6ddc54b7846dbe"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4xFlat",
			"905-470-2260"
		]
	},
	{
		"_id" : ObjectId("5788bc047e6ddc54b7846dbf"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5788bc057e6ddc54b7846dc3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Other",
			"1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5788bc057e6ddc54b7846dcb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain",
			"416-590-2888"
		]
	},
	{
		"_id" : ObjectId("5788bc057e6ddc54b7846dd3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4, 1x2",
			"416-929-1660"
		]
	},
	{
		"_id" : ObjectId("5788bc057e6ddc54b7846dd5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5788bc157e6ddc54b7846dfe"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("5788bc157e6ddc54b7846e05"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-22-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-250-6464"
		]
	},
	{
		"_id" : ObjectId("5788bc207e6ddc54b7846e34"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-290-1200"
		]
	},
	{
		"_id" : ObjectId("5788bc207e6ddc54b7846e36"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("5788bc207e6ddc54b7846e39"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("5788bc207e6ddc54b7846e3c"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x4",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("5788bc207e6ddc54b7846e43"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-29-F",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x2xMain",
			"416-259-1147"
		]
	},
	{
		"_id" : ObjectId("5788bc2e7e6ddc54b7846e64"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-9-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5788bc2e7e6ddc54b7846e65"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"102-12-A",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"2x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5788bc2e7e6ddc54b7846e66"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4, 1x2",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5788bc2e7e6ddc54b7846e69"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"102-12-B",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5788bc2e7e6ddc54b7846e6b"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e6e"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e6f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e71"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e73"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e74"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e76"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-881-2888"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e77"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e7b"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("5788bc2f7e6ddc54b7846e7d"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846ea3"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846ea5"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846ea6"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-22-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846ea7"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3, 2x3",
			"905-597-9333"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846eaa"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-470-2260"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846eab"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-22-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846ead"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-S",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd",
			"416-746-9494"
		]
	},
	{
		"_id" : ObjectId("5788bc3c7e6ddc54b7846eb0"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x5",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5788bc527e6ddc54b7846eea"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-M",
			"2015",
			"Condo Townhouse",
			"Apartment",
			"1x4",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5788bc527e6ddc54b7846ef3"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x2xFlat, 1x4xFlat",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5788bc537e6ddc54b7846efe"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x3xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("578a10b07e6ddc26a2b6f37b"),
		"Undefined" : [
			"Toronto E06",
			"Oakridge",
			"Toronto",
			"116-28-Q",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("578a10d17e6ddc26a2b6f3fb"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-C",
			"2015",
			"Detached",
			"Bungaloft",
			"1x5xUpper, 1x4xMain, 1x3xMain"
		]
	},
	{
		"_id" : ObjectId("578a10f97e6ddc26a2b6f49a"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f726"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-300-3000"
		]
	},
	{
		"_id" : ObjectId("578a11d47e6ddc26a2b6f727"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578a11d57e6ddc26a2b6f729"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("578a11d57e6ddc26a2b6f72a"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-564-8383"
		]
	},
	{
		"_id" : ObjectId("578a11d57e6ddc26a2b6f72e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("578a11d57e6ddc26a2b6f732"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("578a11d57e6ddc26a2b6f739"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("578a11d57e6ddc26a2b6f73a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("578a11e57e6ddc26a2b6f771"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("578a11f17e6ddc26a2b6f79a"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578a11f17e6ddc26a2b6f79d"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-28-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("578a11f17e6ddc26a2b6f7a2"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578a11fa7e6ddc26a2b6f7c2"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-204-1222"
		]
	},
	{
		"_id" : ObjectId("578a11fb7e6ddc26a2b6f7d0"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-M",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x3xGround, 1x3x3rd, 1x2x2nd",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("578a12077e6ddc26a2b6f7f3"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578a12077e6ddc26a2b6f7f4"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("578a12087e6ddc26a2b6f7fc"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("578a12087e6ddc26a2b6f7ff"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-604-9080"
		]
	},
	{
		"_id" : ObjectId("578a120b7e6ddc26a2b6f80d"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-27-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"647-787-8878"
		]
	},
	{
		"_id" : ObjectId("578a12197e6ddc26a2b6f837"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-201-0200"
		]
	},
	{
		"_id" : ObjectId("578a121a7e6ddc26a2b6f84c"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"2016",
			"Semi-Det Condo",
			"3-Storey",
			"3x4, 1x2",
			"855-577-9888"
		]
	},
	{
		"_id" : ObjectId("578a121e7e6ddc26a2b6f856"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-N",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("578b6d6d7e6ddc7de09e2992"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2xMain",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("578dbe8c7e6ddc0a9ab2bc82"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578dbe997e6ddc0a9ab2bca6"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbea87e6ddc0a9ab2bcd0"),
		"Undefined" : [
			"Toronto E08",
			"Guildwood",
			"Toronto",
			"117-36-M",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("578dbea97e6ddc0a9ab2bcd7"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-K",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("578dbea97e6ddc0a9ab2bcd8"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-36-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("578dbea97e6ddc0a9ab2bce6"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"112-42-F",
			"2016",
			"Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("578dbeb27e6ddc0a9ab2bcfd"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-10-F",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbeb27e6ddc0a9ab2bd05"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-13-N",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x3"
		]
	},
	{
		"_id" : ObjectId("578dbebc7e6ddc0a9ab2bd22"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-F",
			"2016",
			"Detached",
			"2-Storey",
			"2x4xUpper, 1x2xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("578dbec57e6ddc0a9ab2bd40"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("578dbec57e6ddc0a9ab2bd47"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-29-U",
			"2016",
			"Detached",
			"Bungalow",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("578dbed17e6ddc0a9ab2bd63"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-9-W",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("578dbed27e6ddc0a9ab2bd6d"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbed27e6ddc0a9ab2bd70"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("578dbed27e6ddc0a9ab2bd71"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2016",
			"Vacant Land",
			"2-Storey",
			"1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("578dbed67e6ddc0a9ab2bd82"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"313-22-N",
			"2015",
			"Farm",
			"Other",
			"0x0",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("578dbed67e6ddc0a9ab2bd85"),
		"Undefined" : [
			"King",
			"Schomberg",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x3x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("578dbed77e6ddc0a9ab2bd88"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"337-20-E",
			"2016",
			"Detached",
			"2-Storey",
			"7x5"
		]
	},
	{
		"_id" : ObjectId("578dbee87e6ddc0a9ab2bdb9"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbee87e6ddc0a9ab2bdbc"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-40-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("578dbeed7e6ddc0a9ab2bdd6"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"2016",
			"Det W/Com Elements",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("578dbef37e6ddc0a9ab2bdeb"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-39-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("578dbf027e6ddc0a9ab2be26"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xGround, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578dbf0e7e6ddc0a9ab2be54"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbf257e6ddc0a9ab2be8d"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbf257e6ddc0a9ab2be90"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("578dbf267e6ddc0a9ab2be96"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbf267e6ddc0a9ab2be98"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-C",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbf267e6ddc0a9ab2be99"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-14-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xLower, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("578dbf267e6ddc0a9ab2be9a"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-B",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("578dbf267e6ddc0a9ab2be9b"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x3"
		]
	},
	{
		"_id" : ObjectId("578dbf267e6ddc0a9ab2be9d"),
		"Undefined" : [
			"Barrie",
			"Allandale",
			"Simcoe",
			"2016",
			"Fourplex",
			"1 1/2 Storey",
			"4x3"
		]
	},
	{
		"_id" : ObjectId("578dbf5e7e6ddc0a9ab2bf5b"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"446-49-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("578dbf5e7e6ddc0a9ab2bf5c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578dbf5e7e6ddc0a9ab2bf5e"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"453-49-V",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4, 0x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("578dbf5f7e6ddc0a9ab2bf71"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x3, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578dbf5f7e6ddc0a9ab2bf79"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-43-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("578dc0447e6ddc0a9ab2c1b9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("578dc0447e6ddc0a9ab2c1ba"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-25-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("578dc0457e6ddc0a9ab2c1ce"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("578dc0457e6ddc0a9ab2c1df"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Loft",
			"1x2, 1x4",
			"905-707-8889"
		]
	},
	{
		"_id" : ObjectId("578dc0457e6ddc0a9ab2c1e2"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("578dc05d7e6ddc0a9ab2c227"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("578dc05f7e6ddc0a9ab2c24b"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4",
			"905-415-2121"
		]
	},
	{
		"_id" : ObjectId("578dc05f7e6ddc0a9ab2c256"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-23-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578dc06a7e6ddc0a9ab2c271"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("578dc06a7e6ddc0a9ab2c274"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-461-0907"
		]
	},
	{
		"_id" : ObjectId("578dc07e7e6ddc0a9ab2c2ae"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-10-C",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x3xMain",
			"416-431-6888"
		]
	},
	{
		"_id" : ObjectId("578dc07e7e6ddc0a9ab2c2af"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-C",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3xBsmt",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("578dc07e7e6ddc0a9ab2c2b0"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x3xBsmt",
			"905-673-3100"
		]
	},
	{
		"_id" : ObjectId("578dc07e7e6ddc0a9ab2c2b4"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 0x3, 1x2",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("578dc07f7e6ddc0a9ab2c2bd"),
		"Undefined" : [
			"Toronto W09",
			"Humber Heights",
			"Toronto",
			"108-9-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-477-2300"
		]
	},
	{
		"_id" : ObjectId("578dc07f7e6ddc0a9ab2c2c1"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-452-7272"
		]
	},
	{
		"_id" : ObjectId("578dc07f7e6ddc0a9ab2c2c7"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-633-6666"
		]
	},
	{
		"_id" : ObjectId("578dc0807e6ddc0a9ab2c2ce"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("578dc0807e6ddc0a9ab2c2d4"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3, 1x2",
			"855-577-9888"
		]
	},
	{
		"_id" : ObjectId("578dc0a37e6ddc0a9ab2c34e"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("578dc0a37e6ddc0a9ab2c356"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-452-7272"
		]
	},
	{
		"_id" : ObjectId("578dc0aa7e6ddc0a9ab2c36a"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x2, 1x3",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("578f53357e6ddc4d5109cfbc"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578f53357e6ddc4d5109cfbf"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-J",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4xMain, 1x3xUpper, 1x3xBsmt, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("578f533c7e6ddc4d5109cfdb"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("578f53457e6ddc4d5109cff5"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-31-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578f53457e6ddc4d5109cff6"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-30-Q",
			"2015",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("578f53457e6ddc4d5109cff8"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"115-23-Q",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("578f535d7e6ddc4d5109d058"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-C",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578f53677e6ddc4d5109d084"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-22-T",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x4, 1x3, 1x2",
			"5",
			"Master",
			"Main",
			"4.18",
			"3.43",
			"6",
			"2nd Br",
			"Main",
			"2.80",
			"2.80",
			"7",
			"3rd Br",
			"Main",
			"3.86",
			"2.81",
			"9",
			"4th Br",
			"Main",
			"4.72",
			"3.02"
		]
	},
	{
		"_id" : ObjectId("578f53a87e6ddc4d5109d17a"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("578f53a87e6ddc4d5109d17b"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-S",
			"2015",
			"Triplex",
			"2-Storey",
			"1x4xUpper, 1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("578f53b97e6ddc4d5109d1ac"),
		"Undefined" : [
			"Oro-Medonte",
			"Sugarbush",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("578f53bc7e6ddc4d5109d1c0"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-J",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("578f53ca7e6ddc4d5109d1e8"),
		"Undefined" : [
			"Mississauga",
			"Dixie",
			"Peel",
			"473-47-N",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("578f53ca7e6ddc4d5109d1eb"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-45-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578f53ca7e6ddc4d5109d1f5"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"457-32-E",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x3xMain, 1x2xUpper, 1x5xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("578f53cb7e6ddc4d5109d1fa"),
		"Undefined" : [
			"Mississauga",
			"Port Credit",
			"Peel",
			"478-39-S",
			"2016",
			"Detached",
			"3-Storey",
			"1x5x3rd, 1x2xMain, 1x4x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("578f53ea7e6ddc4d5109d26d"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-28-P",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("578f54877e6ddc4d5109d3e9"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-640-2661"
		]
	},
	{
		"_id" : ObjectId("578f54877e6ddc4d5109d3ea"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-977-6617"
		]
	},
	{
		"_id" : ObjectId("578f54877e6ddc4d5109d3f2"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("578f54887e6ddc4d5109d3fc"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-886-2888"
		]
	},
	{
		"_id" : ObjectId("578f54957e6ddc4d5109d423"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-26-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("578f54957e6ddc4d5109d424"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578f54957e6ddc4d5109d427"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"905-477-5900"
		]
	},
	{
		"_id" : ObjectId("578f54967e6ddc4d5109d42c"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("578f54967e6ddc4d5109d42d"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("578f54967e6ddc4d5109d42f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("578f54967e6ddc4d5109d434"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("578f549f7e6ddc4d5109d455"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-29-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-977-6617"
		]
	},
	{
		"_id" : ObjectId("578f549f7e6ddc4d5109d457"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("578f54a77e6ddc4d5109d473"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-619-2100"
		]
	},
	{
		"_id" : ObjectId("578f54af7e6ddc4d5109d48d"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("578f54af7e6ddc4d5109d492"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"2016",
			"Leasehold Condo",
			"Apartment",
			"1x4xMain",
			"416-499-3320"
		]
	},
	{
		"_id" : ObjectId("578f54af7e6ddc4d5109d498"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("578f54be7e6ddc4d5109d4bd"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578f54be7e6ddc4d5109d4bf"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("578f54be7e6ddc4d5109d4c0"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2016",
			"Condo Townhouse",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-624-5678"
		]
	},
	{
		"_id" : ObjectId("578f54bf7e6ddc4d5109d4c8"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-A",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("578f54bf7e6ddc4d5109d4d1"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4x3rd, 1x2x2nd",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577ce2f87e6ddc1af306895f"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-21-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577ce30a7e6ddc1af306897a"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"341-6-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577ce4507e6ddc1af3068a92"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Locker",
			"Other",
			"0x0",
			"416-360-6088"
		]
	},
	{
		"_id" : ObjectId("578f54877e6ddc4d5109d3e3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Parking Space",
			"0",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("5790a84c7e6ddc417b91c257"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xMain, 1x4x3rd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("5790a84c7e6ddc417b91c258"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5790a8517e6ddc417b91c264"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-A",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5790a8a27e6ddc417b91c325"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"1x3x2nd, 1x3x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("5790a8a27e6ddc417b91c333"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-H",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5790a8ab7e6ddc417b91c352"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-29-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("5790a8cd7e6ddc417b91c3cd"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("5790a8ee7e6ddc417b91c43d"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-28-S",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("5790a8ef7e6ddc417b91c450"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-P",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5790a8ef7e6ddc417b91c453"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper, Upper"
		]
	},
	{
		"_id" : ObjectId("5790a8f77e6ddc417b91c463"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-R",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("5790a9077e6ddc417b91c498"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x3rd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("5790a9087e6ddc417b91c4a8"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"506-22-L",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("57924d3f7e6ddc2dd16a8b2b"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain, 1x2x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57924d507e6ddc2dd16a8b5c"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"116-25-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57924d6b7e6ddc2dd16a8bb7"),
		"Undefined" : [
			"Toronto W04",
			"Briar Hill-Belgravia",
			"Toronto",
			"108-16-K",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57924d7a7e6ddc2dd16a8be2"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-5-B",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xGround, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57924d977e6ddc2dd16a8c32"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57924e297e6ddc2dd16a8ddb"),
		"Undefined" : [
			"Scugog",
			"Blackstock",
			"Durham",
			"240-38-S",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57924e4c7e6ddc2dd16a8e42"),
		"Undefined" : [
			"Melancthon",
			"Rural Melancthon",
			"Dufferin",
			"900-7-H",
			"2016",
			"Farm",
			"2-Storey",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("57924e937e6ddc2dd16a8f17"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-U",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("577349617e6ddc4cf64bdc13"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577349b67e6ddc4cf64bdc9a"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"410-44-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xMain, 2x3x2nd"
		]
	},
	{
		"_id" : ObjectId("57734a9e7e6ddc4cf64bdcf2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("5776496f7e6ddc1df4af5dee"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-18-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Parking Space",
			"Other",
			"0",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("577db9557e6ddc53f32cde13"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-20-Z",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x3xMain, 1x5xMain, 2x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("578dbed27e6ddc0a9ab2bd74"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"341-8-P",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("578dbf0e7e6ddc0a9ab2be51"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("578f53b97e6ddc4d5109d1a7"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57934ac07e6ddc7924680076"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-D",
			"2016",
			"Detached",
			"Bungaloft",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57934ac07e6ddc7924680077"),
		"Undefined" : [
			"Georgina",
			"Virginia",
			"York",
			"303-50-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57934adb7e6ddc79246800d4"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57934adb7e6ddc79246800d7"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-26-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57934ae37e6ddc79246800fc"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-40-S",
			"2016",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57934afb7e6ddc792468014b"),
		"Undefined" : [
			"Clearview",
			"Rural Clearview",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57934afb7e6ddc792468014c"),
		"Undefined" : [
			"Essa",
			"Baxter",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57934afb7e6ddc792468014d"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57934afb7e6ddc7924680153"),
		"Undefined" : [
			"Springwater",
			"Elmvale",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57934afc7e6ddc7924680164"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-L",
			"2015",
			"Triplex",
			"2-Storey",
			"3x3"
		]
	},
	{
		"_id" : ObjectId("57934b0c7e6ddc792468019d"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-35-K",
			"2015",
			"Detached",
			"2-Storey",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("57934b0c7e6ddc792468019e"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-42-K",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"1x4xMain, 1x4xIn Betwn, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57934b2c7e6ddc792468021c"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-54-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57934b2d7e6ddc7924680229"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5, 1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("57934b457e6ddc792468029a"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("57934be17e6ddc792468041a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("57934be27e6ddc7924680424"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("57934be27e6ddc792468042d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57934be27e6ddc7924680430"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-762-8255"
		]
	},
	{
		"_id" : ObjectId("57934be27e6ddc7924680432"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x3, 1x4",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("57934bf87e6ddc792468047b"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("57934bf87e6ddc792468047d"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("57934c017e6ddc792468049d"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-8-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-289-2155"
		]
	},
	{
		"_id" : ObjectId("57934c017e6ddc79246804a1"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("57934c027e6ddc79246804a4"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("57934c027e6ddc79246804a5"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-940-3599"
		]
	},
	{
		"_id" : ObjectId("57934c027e6ddc79246804a9"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-233-6276"
		]
	},
	{
		"_id" : ObjectId("57934c0c7e6ddc79246804c7"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("57934c0f7e6ddc79246804d6"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("57934c0f7e6ddc79246804d7"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-27-L",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x1xMain, 1x2x2nd",
			"905-579-7942"
		]
	},
	{
		"_id" : ObjectId("57934c227e6ddc7924680510"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57934c227e6ddc7924680511"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57934c237e6ddc7924680515"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-40-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat, Flat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57934c237e6ddc792468051f"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("57934c247e6ddc7924680525"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4x2nd, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("57934c247e6ddc792468052b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-42-Z",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3xMain, 2x4x2nd",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("57934c247e6ddc792468052d"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-S",
			"2016",
			"Semi-Det Condo",
			"3-Storey",
			"1x2xMain, 1x3x3rd, 1x4x3rd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("57934c247e6ddc792468052e"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4xUpper, 1x2xMain",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("57934c297e6ddc792468053e"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("57934c4b7e6ddc7924680596"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-17-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577347a07e6ddc4cf64bda3e"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577b93347e6ddc62083893b1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Parking Space",
			"Other",
			"0x0",
			"905-305-0505"
		]
	},
	{
		"_id" : ObjectId("57934b2c7e6ddc792468021a"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"438-42-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("578dbe997e6ddc0a9ab2bcb3"),
		"Undefined" : [
			"Toronto E03",
			"Danforth",
			"Toronto",
			"115-24-Q",
			"2016",
			"Detached",
			"Other",
			"3x2, 1x4, 2x3"
		]
	},
	{
		"_id" : ObjectId("57973c557e6ddc672e7b5369"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-C",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57973c697e6ddc672e7b53a4"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-33-J",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973c697e6ddc672e7b53a5"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"2x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57973c6a7e6ddc672e7b53ab"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt, 1x3xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973c6a7e6ddc672e7b53b4"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-N",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973c6a7e6ddc672e7b53b5"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-N",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973c6b7e6ddc672e7b53bb"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-43-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973c6b7e6ddc672e7b53bc"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-43-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973c6b7e6ddc672e7b53bd"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-43-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973c797e6ddc672e7b53f6"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973c957e6ddc672e7b5460"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"331-26-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cb07e6ddc672e7b54cf"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("57973cb07e6ddc672e7b54d1"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cb77e6ddc672e7b54e2"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2015",
			"Link",
			"2-Storey",
			"1x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("57973cd67e6ddc672e7b5561"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-21-Y",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55b2"),
		"Undefined" : [
			"Tay",
			"Rural Tay",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55b3"),
		"Undefined" : [
			"Tay",
			"Rural Tay",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55b9"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Rural Bradford West Gwillimbury",
			"Simcoe",
			"11-31-E",
			"2015",
			"Other",
			"Bungalow",
			"2x4xFlat"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55ba"),
		"Undefined" : [
			"Essa",
			"Baxter",
			"Simcoe",
			"11-28-D",
			"2015",
			"Detached",
			"Bungalow",
			"1x2xGround"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55bb"),
		"Undefined" : [
			"Tay",
			"Rural Tay",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55be"),
		"Undefined" : [
			"Severn",
			"Port Severn",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973cf77e6ddc672e7b55c1"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-21-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973cf87e6ddc672e7b55c2"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57973cf87e6ddc672e7b55c5"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xGround, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("57973cf87e6ddc672e7b55c6"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cf87e6ddc672e7b55c7"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cf87e6ddc672e7b55cd"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cf97e6ddc672e7b55d5"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973cfa7e6ddc672e7b55e2"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973d027e6ddc672e7b5608"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"1x2xMain, 1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973d407e6ddc672e7b56eb"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"460-53-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973d407e6ddc672e7b56ee"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-57-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973d417e6ddc672e7b56f3"),
		"Undefined" : [
			"Brampton",
			"Heart Lake",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57973d417e6ddc672e7b56f5"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("57973d427e6ddc672e7b5709"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973d427e6ddc672e7b570a"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"479-41-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57973e187e6ddc672e7b592b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("57973e187e6ddc672e7b592d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("57973e187e6ddc672e7b592f"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("57973e187e6ddc672e7b5931"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("57973e187e6ddc672e7b5932"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("57973e187e6ddc672e7b5933"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("57973e197e6ddc672e7b5936"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57973e197e6ddc672e7b593b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("57973e197e6ddc672e7b593c"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57973e337e6ddc672e7b59b9"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("57973e457e6ddc672e7b59f9"),
		"Undefined" : [
			"Toronto E08",
			"Guildwood",
			"Toronto",
			"117-36-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57973e467e6ddc672e7b5a01"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-35-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("57973e467e6ddc672e7b5a02"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-28-C",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, 1x3xMain",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("57973e467e6ddc672e7b5a07"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4",
			"905-415-1000"
		]
	},
	{
		"_id" : ObjectId("57973e467e6ddc672e7b5a0c"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("57973e467e6ddc672e7b5a0e"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57973e477e6ddc672e7b5a0f"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57973e477e6ddc672e7b5a10"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("57973e567e6ddc672e7b5a39"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("57973e567e6ddc672e7b5a43"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("57973e567e6ddc672e7b5a44"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("57973e577e6ddc672e7b5a48"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("57973e577e6ddc672e7b5a4c"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-834-9261"
		]
	},
	{
		"_id" : ObjectId("57973e577e6ddc672e7b5a4e"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("57973e637e6ddc672e7b5a7c"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-31-Z",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57973e637e6ddc672e7b5a7f"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-424-1300"
		]
	},
	{
		"_id" : ObjectId("57973e637e6ddc672e7b5a81"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-31-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-278-0848"
		]
	},
	{
		"_id" : ObjectId("57973e647e6ddc672e7b5a83"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-22-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("57973e647e6ddc672e7b5a85"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-22-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-889-9330"
		]
	},
	{
		"_id" : ObjectId("57973e647e6ddc672e7b5a87"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-X",
			"2015",
			"Comm Element Condo",
			"Multi-Level",
			"1x4, 1x3",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5798921d7e6ddc5b8e7e3de6"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"109-19-K",
			"2016",
			"Detached",
			"3-Storey",
			"2x5, 1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("579892427e6ddc5b8e7e3e5c"),
		"Undefined" : [
			"Toronto W04",
			"Brookhaven-Amesbury",
			"Toronto",
			"108-11-J",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("5798924f7e6ddc5b8e7e3e91"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("579892847e6ddc5b8e7e3f1e"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-35-T",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("579893067e6ddc5b8e7e40bb"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579893157e6ddc5b8e7e40ef"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-U",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x3x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("579893957e6ddc5b8e7e4215"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2015",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4xFlat",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("579893957e6ddc5b8e7e4216"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"647-932-0015"
		]
	},
	{
		"_id" : ObjectId("579893957e6ddc5b8e7e4217"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-738-6644"
		]
	},
	{
		"_id" : ObjectId("579893957e6ddc5b8e7e421b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain",
			"416-725-5724"
		]
	},
	{
		"_id" : ObjectId("579893957e6ddc5b8e7e4220"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-733-7784"
		]
	},
	{
		"_id" : ObjectId("579893a97e6ddc5b8e7e426a"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-9191"
		]
	},
	{
		"_id" : ObjectId("579893a97e6ddc5b8e7e426c"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-832-1111"
		]
	},
	{
		"_id" : ObjectId("579893b47e6ddc5b8e7e42a5"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("579893b47e6ddc5b8e7e42a9"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 2x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("579893b57e6ddc5b8e7e42ab"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("579893bf7e6ddc5b8e7e42c6"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-2-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("579893c07e6ddc5b8e7e42cf"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("579893c77e6ddc5b8e7e42e8"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-32-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("579893c77e6ddc5b8e7e42e9"),
		"Undefined" : [
			"Vaughan",
			"Vaughan Grove",
			"York",
			"353-5-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-850-3300"
		]
	},
	{
		"_id" : ObjectId("57973e457e6ddc672e7b59fd"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5799df4d7e6ddc7d0596ed93"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-30-Q",
			"2015",
			"Store W/Apt/Offc",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("5799df4d7e6ddc7d0596ed99"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"120-23-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("5799df5d7e6ddc7d0596edd3"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-12-M",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("5799df6a7e6ddc7d0596edfb"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5799df747e6ddc7d0596ee24"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5799df747e6ddc7d0596ee27"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-C",
			"2015",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("5799df967e6ddc7d0596eea9"),
		"Undefined" : [
			"Pickering",
			"West Shore",
			"Durham",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5799dfcb7e6ddc7d0596ef50"),
		"Undefined" : [
			"Oro-Medonte",
			"Moonstone",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5799dfcb7e6ddc7d0596ef51"),
		"Undefined" : [
			"Oro-Medonte",
			"Moonstone",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5799dfd17e6ddc7d0596ef77"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("5799dfdf7e6ddc7d0596efa8"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-D",
			"2015",
			"Detached",
			"2-Storey",
			"1x4, 1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("5799dff87e6ddc7d0596f009"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-49-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"3",
			"Family",
			"Main",
			"5.98",
			"3.05",
			"Hardwood Floor",
			"Gas Fireplace",
			"4",
			"Kitchen",
			"Main",
			"5.49",
			"3.14",
			"Ceramic Floor",
			"Combined W/Dining",
			"B/I Dishwasher",
			"5",
			"Dining",
			"Main",
			"5.49",
			"3.14",
			"Ceramic Floor",
			"Combined W/Kitchen",
			"Open Concept",
			"6",
			"Master",
			"2nd",
			"4.58",
			"3.97",
			"5 Pc Ensuite",
			"W/I Closet",
			"Separate Shower",
			"7",
			"2nd Br",
			"2nd",
			"3.33",
			"2.81",
			"Broadloom",
			"Window",
			"Closet",
			"8",
			"3rd Br",
			"2nd",
			"3.97",
			"3.05",
			"Broadloom",
			"Closet",
			"Window",
			"9",
			"Laundry",
			"2nd",
			"Ceramic Floor",
			"Separate Rm"
		]
	},
	{
		"_id" : ObjectId("5799dff87e6ddc7d0596f00d"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"451-40-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x2, 3x4"
		]
	},
	{
		"_id" : ObjectId("5799e00f7e6ddc7d0596f072"),
		"Undefined" : [
			"Burlington",
			"Rural Burlington",
			"Halton",
			"19-28-N",
			"2016",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("5799e09b7e6ddc7d0596f19e"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("5799e09c7e6ddc7d0596f1ab"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-668-6600"
		]
	},
	{
		"_id" : ObjectId("5799e09d7e6ddc7d0596f1b3"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("5799e09d7e6ddc7d0596f1b6"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5799e09d7e6ddc7d0596f1b7"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-886-2888"
		]
	},
	{
		"_id" : ObjectId("5799e0a77e6ddc7d0596f1d0"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-209-1400"
		]
	},
	{
		"_id" : ObjectId("5799e0a77e6ddc7d0596f1d3"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("5799e0ac7e6ddc7d0596f1e8"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5799e0b77e6ddc7d0596f209"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4, 3",
			"416-630-4444"
		]
	},
	{
		"_id" : ObjectId("5799e0c27e6ddc7d0596f233"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x3, 1x3",
			"905-597-9333"
		]
	},
	{
		"_id" : ObjectId("5799e0dd7e6ddc7d0596f281"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5799e0de7e6ddc7d0596f28d"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5799e0de7e6ddc7d0596f293"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-Q",
			"2016",
			"Condo Townhouse",
			"Bungalow",
			"1x4xMain",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("579b30bd7e6ddc59b4ab3374"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x5, 1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("579b30c67e6ddc59b4ab33a2"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-31-C",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579b30d27e6ddc59b4ab33d3"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"259-10-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x5x2nd, 1x4, 1x3x2nd, 1x4",
			"9",
			"Other",
			"Main",
			"8.86",
			"1.46",
			"Skylight",
			"10",
			"Utility",
			"Main",
			"4.59",
			"3.13",
			"W/O To Garage"
		]
	},
	{
		"_id" : ObjectId("579b30e57e6ddc59b4ab3411"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-27-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3"
		]
	},
	{
		"_id" : ObjectId("579b30e67e6ddc59b4ab341a"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-27-R",
			"2015",
			"Duplex",
			"2-Storey",
			"1x4xMain, 1x4x2nd, Main, 2nd, Main"
		]
	},
	{
		"_id" : ObjectId("579b312b7e6ddc59b4ab352b"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"445-45-R",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("579b312b7e6ddc59b4ab352f"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-U",
			"2015",
			"Detached",
			"2-Storey",
			"2x4, 1x2, 2x3"
		]
	},
	{
		"_id" : ObjectId("579b313c7e6ddc59b4ab3573"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("579b31407e6ddc59b4ab3586"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x6xUpper, 2x5xUpper, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("579b31c47e6ddc59b4ab36ab"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Co-Op Apt",
			"Apartment",
			"1x3xFlat",
			"416-883-0892"
		]
	},
	{
		"_id" : ObjectId("579b31c47e6ddc59b4ab36ac"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("579b31c47e6ddc59b4ab36b0"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("579b31c47e6ddc59b4ab36b4"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("579b31c57e6ddc59b4ab36b8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-883-0892"
		]
	},
	{
		"_id" : ObjectId("579b31c57e6ddc59b4ab36bb"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("579b31c57e6ddc59b4ab36be"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xFlat, 1x2xFlat",
			"905-274-3434"
		]
	},
	{
		"_id" : ObjectId("579b31c57e6ddc59b4ab36c0"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2017",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-260-8200"
		]
	},
	{
		"_id" : ObjectId("579b31c57e6ddc59b4ab36c2"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-762-8255"
		]
	},
	{
		"_id" : ObjectId("579b31c67e6ddc59b4ab36c5"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("579b31cf7e6ddc59b4ab36dc"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("579b31cf7e6ddc59b4ab36dd"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("579b31cf7e6ddc59b4ab36df"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-9155"
		]
	},
	{
		"_id" : ObjectId("579b31cf7e6ddc59b4ab36e1"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"647-560-9566"
		]
	},
	{
		"_id" : ObjectId("579b31de7e6ddc59b4ab3713"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("579b31de7e6ddc59b4ab3715"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-0505"
		]
	},
	{
		"_id" : ObjectId("579b31de7e6ddc59b4ab3717"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-731-2266"
		]
	},
	{
		"_id" : ObjectId("579b31de7e6ddc59b4ab371d"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-731-2266"
		]
	},
	{
		"_id" : ObjectId("579b31df7e6ddc59b4ab3721"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2018",
			"Condo Townhouse",
			"2-Storey",
			"1x4xMain",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("579b31df7e6ddc59b4ab3722"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2018",
			"Condo Townhouse",
			"Loft",
			"1x4xLower, 1x3x2nd",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("579b31df7e6ddc59b4ab3723"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2018",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"647-494-3143"
		]
	},
	{
		"_id" : ObjectId("579b31df7e6ddc59b4ab3724"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2018",
			"Condo Townhouse",
			"Loft",
			"1x4xLower, 1x3x2nd",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("579b31df7e6ddc59b4ab3725"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2018",
			"Condo Townhouse",
			"3-Storey",
			"2x4, 1x2",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("579b31f17e6ddc59b4ab375b"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("579b31f17e6ddc59b4ab375c"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("579b31f17e6ddc59b4ab375e"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("579b320c7e6ddc59b4ab37b4"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-371-3737"
		]
	},
	{
		"_id" : ObjectId("579b320c7e6ddc59b4ab37b5"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("579b320c7e6ddc59b4ab37b6"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("579b320c7e6ddc59b4ab37ba"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4x2nd",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("579b320c7e6ddc59b4ab37bc"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"452-45-V",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("579b320d7e6ddc59b4ab37c2"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2015",
			"Condo Apt",
			"Loft",
			"1x2x2nd, 1x2xFlat",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("579b320d7e6ddc59b4ab37c3"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("579b32167e6ddc59b4ab37e8"),
		"Undefined" : [
			"Oakville",
			"Uptown Core",
			"Halton",
			"471-27-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x1xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5774f9347e6ddc53a704202f"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2015",
			"Store W/Apt/Offc",
			"2-Storey",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("579c82df7e6ddc56b0d3b3de"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2015",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("579c82ec7e6ddc56b0d3b406"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"357-35-V",
			"2016",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("579c82fb7e6ddc56b0d3b436"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xUpper, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("579c82fe7e6ddc56b0d3b442"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-16-N",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2xGround, 1x4"
		]
	},
	{
		"_id" : ObjectId("579c830c7e6ddc56b0d3b472"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x3xGround, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("579c831f7e6ddc56b0d3b4b4"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 2",
			"Drive Shed"
		]
	},
	{
		"_id" : ObjectId("579c83227e6ddc56b0d3b4bc"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-44-G",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("579c832e7e6ddc56b0d3b4ee"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-39-Q",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("579c834b7e6ddc56b0d3b542"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("579c83527e6ddc56b0d3b578"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"14-27-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x3xMain, 1x4xMain",
			"5",
			"Master",
			"Main",
			"4.39",
			"4.75",
			"6",
			"2nd Br",
			"Main",
			"3.65",
			"3.20",
			"7",
			"3rd Br",
			"Main",
			"3.20",
			"3.78"
		]
	},
	{
		"_id" : ObjectId("579c83527e6ddc56b0d3b57a"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"14-27-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x3xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("579c83527e6ddc56b0d3b57b"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"14-27-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x3xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("579c83587e6ddc56b0d3b590"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x5, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("579c83607e6ddc56b0d3b5b0"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("579c83d27e6ddc56b0d3b6a4"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("579c83d37e6ddc56b0d3b6ae"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("579c83d37e6ddc56b0d3b6af"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"647-847-3222"
		]
	},
	{
		"_id" : ObjectId("579c83de7e6ddc56b0d3b6d2"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-226-0848"
		]
	},
	{
		"_id" : ObjectId("579c83de7e6ddc56b0d3b6d5"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("579c83de7e6ddc56b0d3b6d9"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("579c83e87e6ddc56b0d3b6f8"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-J",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4, 1x2",
			"416-265-2000"
		]
	},
	{
		"_id" : ObjectId("579c83e97e6ddc56b0d3b6fa"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("579c83e97e6ddc56b0d3b700"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-415-3800"
		]
	},
	{
		"_id" : ObjectId("579c83e97e6ddc56b0d3b701"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("579c83f47e6ddc56b0d3b71f"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-841-1030"
		]
	},
	{
		"_id" : ObjectId("579c83f47e6ddc56b0d3b723"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("579c83f57e6ddc56b0d3b726"),
		"Undefined" : [
			"Toronto W04",
			"Briar Hill-Belgravia",
			"Toronto",
			"108-16-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-636-6800"
		]
	},
	{
		"_id" : ObjectId("579c83ff7e6ddc56b0d3b749"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("579c83ff7e6ddc56b0d3b74a"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("579c83ff7e6ddc56b0d3b74e"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("579c83ff7e6ddc56b0d3b74f"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x3, 1x3",
			"905-597-9333"
		]
	},
	{
		"_id" : ObjectId("579c84007e6ddc56b0d3b750"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-707-1882"
		]
	},
	{
		"_id" : ObjectId("579c84157e6ddc56b0d3b795"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"464-32-F",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x3, 1x4",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("579c84157e6ddc56b0d3b796"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-289-3000"
		]
	},
	{
		"_id" : ObjectId("579c841b7e6ddc56b0d3b7b5"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"289-878-5555"
		]
	},
	{
		"_id" : ObjectId("579c831e7e6ddc56b0d3b49b"),
		"Undefined" : [
			"Clearview",
			"Nottawa",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a07b897e6ddc7c6ca85233"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"103-21-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 3x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a07b8c7e6ddc7c6ca8523e"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-28-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a07b8c7e6ddc7c6ca8523f"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a07b997e6ddc7c6ca8526b"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-6-V",
			"2016",
			"Store W/Apt/Offc",
			"3-Storey",
			"4x4"
		]
	},
	{
		"_id" : ObjectId("57a07bb07e6ddc7c6ca852b5"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-39-X",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 2nd, Main"
		]
	},
	{
		"_id" : ObjectId("57a07bd37e6ddc7c6ca85306"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a07bd37e6ddc7c6ca85308"),
		"Undefined" : [
			"Barrie",
			"City Centre",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a07bd37e6ddc7c6ca8530b"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 3x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a07bdd7e6ddc7c6ca8532f"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-N",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("57a07bf97e6ddc7c6ca8538d"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-42-D",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a07bfb7e6ddc7c6ca853a8"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-42-P",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("57a07bfc7e6ddc7c6ca853b3"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a07c687e6ddc7c6ca854a5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Parking Space",
			"0",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854a7"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854a8"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-385-0004"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854a9"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57a07c697e6ddc7c6ca854aa"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854c3"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain, 1x2xMain",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854c4"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x3xMain",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("57a07c6a7e6ddc7c6ca854c5"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("57a07c747e6ddc7c6ca854e5"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("57a07c747e6ddc7c6ca854e6"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("57a07c747e6ddc7c6ca854ea"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-6868"
		]
	},
	{
		"_id" : ObjectId("57a07c7f7e6ddc7c6ca8550e"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-29-F",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x3, 1x4",
			"416-790-4136"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca8552b"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca8552e"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca8552f"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca85531"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("57a07c887e6ddc7c6ca85532"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("57a07c9e7e6ddc7c6ca85580"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("57a07ca47e6ddc7c6ca85594"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-22-R",
			"2016",
			"Condo Apt",
			"3-Storey",
			"1x4xMain",
			"416-821-2338"
		]
	},
	{
		"_id" : ObjectId("57a07ca47e6ddc7c6ca85598"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("57a1c6ab7e6ddc4e8907334f"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"114-16-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a1c6e67e6ddc4e89073415"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-J",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xMain, 1x4xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c6f57e6ddc4e89073447"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"108-11-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c7097e6ddc4e8907348e"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-24-S",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a1c7157e6ddc4e890734ba"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-27-V",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a1c7447e6ddc4e89073557"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-29-Z",
			"2016",
			"Link",
			"2-Storey",
			"2x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("57a1c7577e6ddc4e890735a8"),
		"Undefined" : [
			"Pickering",
			"Rural Pickering",
			"Durham",
			"2016",
			"Farm",
			"Other",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57a1c7967e6ddc4e8907366e"),
		"Undefined" : [
			"Barrie",
			"Sanford",
			"Simcoe",
			"505-10-J",
			"2015",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("57a1c7977e6ddc4e89073676"),
		"Undefined" : [
			"Innisfil",
			"Lefroy",
			"Simcoe",
			"510-21-W",
			"2015",
			"Detached",
			"2-Storey",
			"1x3x2nd, 1x2xMain, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c7b77e6ddc4e890736dc"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"43-C",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c7b87e6ddc4e890736e9"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"458-40-C",
			"2016",
			"Detached",
			"Backsplit 5",
			"1x2xBsmt, 1x4xLower, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("57a1c7b87e6ddc4e890736f1"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-40-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x2, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a1c7b97e6ddc4e890736f5"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-38-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x3, 2x4"
		]
	},
	{
		"_id" : ObjectId("57a1c7b97e6ddc4e890736f7"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c7dd7e6ddc4e8907375d"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("57a1c7dd7e6ddc4e89073764"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"472-40-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c7df7e6ddc4e8907377a"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("57a1c7e07e6ddc4e89073782"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-43-W",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x4, 2x4, 1x3, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a1c7f27e6ddc4e890737c9"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-31-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a1c7f97e6ddc4e890737e3"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"474-8-S",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a1c8eb7e6ddc4e890739ef"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57a1c8eb7e6ddc4e890739f2"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("57a1c8eb7e6ddc4e890739f3"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("57a1c8ec7e6ddc4e890739ff"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("57a1c8ec7e6ddc4e89073a01"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("57a1c8ed7e6ddc4e89073a05"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57a1c8ed7e6ddc4e89073a0b"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-477-5900"
		]
	},
	{
		"_id" : ObjectId("57a1c8ed7e6ddc4e89073a0c"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57a1c8ed7e6ddc4e89073a10"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57a1c8ed7e6ddc4e89073a14"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("57a1c8ee7e6ddc4e89073a16"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57a1c8ee7e6ddc4e89073a1b"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("57a1c8ef7e6ddc4e89073a28"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("57a1c8ef7e6ddc4e89073a2c"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("57a1c9097e6ddc4e89073a6e"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("57a1c90a7e6ddc4e89073a72"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("57a1c90a7e6ddc4e89073a7d"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57a1c90a7e6ddc4e89073a7e"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57a1c90b7e6ddc4e89073a84"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xLower, 1x2xMain",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("57a1c9147e6ddc4e89073aa8"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-35-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-8166"
		]
	},
	{
		"_id" : ObjectId("57a1c9147e6ddc4e89073aab"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-35-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"647-351-6620"
		]
	},
	{
		"_id" : ObjectId("57a1c9147e6ddc4e89073aae"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("57a1c92a7e6ddc4e89073ae6"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-10-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073aed"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-3-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-599-4003"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073aee"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"114-11-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-410-3000"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073aef"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073af5"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073af6"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-479-3891"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073af8"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("57a1c92b7e6ddc4e89073af9"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57a1c92c7e6ddc4e89073afd"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57a1c93b7e6ddc4e89073b26"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57a1c93b7e6ddc4e89073b29"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57a1c93c7e6ddc4e89073b2f"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-21-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57a1c9427e6ddc4e89073b4c"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x3xBsmt",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("57a1c95c7e6ddc4e89073b91"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"453-49-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("57a1c95d7e6ddc4e89073b9f"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("57a1c95e7e6ddc4e89073ba4"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x2xBsmt",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("5780d2887e6ddc0e0dbd62a1"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-S",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a31bf07e6ddc398e568d6d"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-21-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a31c017e6ddc398e568da4"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"115-23-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a31c117e6ddc398e568dd3"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"106-41-E",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a31c1c7e6ddc398e568dff"),
		"Undefined" : [
			"Toronto W03",
			"Keelesdale-Eglinton West",
			"Toronto",
			"114-13-M",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a31c1d7e6ddc398e568e07"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-T",
			"2015",
			"Detached",
			"3-Storey",
			"1x4xBsmt, 1x4x2nd, 1x4x3rd"
		]
	},
	{
		"_id" : ObjectId("57a31c287e6ddc398e568e22"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-U",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a31c3d7e6ddc398e568e79"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("57a31c4d7e6ddc398e568eaa"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a31e847e6ddc398e5694e7"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Parking Space",
			"0",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("57a31e847e6ddc398e5694e8"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Parking Space",
			"0",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("57a1c7707e6ddc4e8907360c"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-T",
			"2016",
			"Triplex",
			"2-Storey",
			"1x4x2nd, 1x4xGround, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a46b127e6ddc08969b9a5e"),
		"Undefined" : [
			"Toronto C03",
			"Humewood-Cedarvale",
			"Toronto",
			"114-16-L",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a46b217e6ddc08969b9a8b"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a46b217e6ddc08969b9a8d"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a46b317e6ddc08969b9abb"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a46b327e6ddc08969b9ac4"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-30-M",
			"2015",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57a46b327e6ddc08969b9ac7"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"111-40-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 3x4x2nd, 2x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a46b527e6ddc08969b9b34"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a46b527e6ddc08969b9b39"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a46b5d7e6ddc08969b9b62"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57a46b6d7e6ddc08969b9b93"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("57a46b6d7e6ddc08969b9b94"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a46b6d7e6ddc08969b9b95"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a46b717e6ddc08969b9ba7"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x2, 1x5, 2x4"
		]
	},
	{
		"_id" : ObjectId("57a46b8d7e6ddc08969b9c06"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"2016",
			"Detached",
			"3-Storey",
			"3x1, 1x4, 1x2, 2x3"
		]
	},
	{
		"_id" : ObjectId("57a46b947e6ddc08969b9c1a"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a46bba7e6ddc08969b9cb2"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-30-L",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("57a46be57e6ddc08969b9d29"),
		"Undefined" : [
			"East Luther Grand Valley",
			"Rural East Luther Grand Valley",
			"Dufferin",
			"900-7-H",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a5bfc27e6ddc5eda505acd"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("57a5bfca7e6ddc5eda505ae5"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-G",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a5c0507e6ddc5eda505cd9"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a5c1357e6ddc5eda505f7d"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("57a9b3387e6ddc35ef17c508"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-K",
			"2015",
			"Vacant Land",
			"Other"
		]
	},
	{
		"_id" : ObjectId("57a9b3467e6ddc35ef17c539"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b3477e6ddc35ef17c547"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2015",
			"Detached",
			"Backsplit 5",
			"1x4xMain, 1x3xUpper, 1x4xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("57a9b3507e6ddc35ef17c562"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-4-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3507e6ddc35ef17c564"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-7-U",
			"2016",
			"Detached",
			"Bungalow",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("57a9b3517e6ddc35ef17c56b"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-K",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x2x2nd, 1x4x3rd, 1x3x3rd"
		]
	},
	{
		"_id" : ObjectId("57a9b3607e6ddc35ef17c5a1"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b3617e6ddc35ef17c5b0"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-25-T",
			"2015",
			"Detached",
			"2-Storey",
			"1x5, 3x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("57a9b36b7e6ddc35ef17c5d5"),
		"Undefined" : [
			"Aurora",
			"Hills of St Andrew",
			"York",
			"331-22-A",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3837e6ddc35ef17c61b"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b3837e6ddc35ef17c61c"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3977e6ddc35ef17c662"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Link",
			"2-Storey",
			"1x3xBsmt, 1x3x2nd, 1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("57a9b3a17e6ddc35ef17c690"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"326-31-X",
			"2015",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57a9b3a17e6ddc35ef17c692"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"1x3",
			"Drive Shed"
		]
	},
	{
		"_id" : ObjectId("57a9b3ab7e6ddc35ef17c6a5"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-55-W",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a9b3c57e6ddc35ef17c708"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-V",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("57a9b3c57e6ddc35ef17c709"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b3c67e6ddc35ef17c70a"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2016",
			"Multiplex",
			"2 1/2 Storey",
			"3x4, 1x1"
		]
	},
	{
		"_id" : ObjectId("57a9b3c67e6ddc35ef17c70e"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"277-26-T",
			"2016",
			"Detached",
			"Bungalow",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b3d27e6ddc35ef17c739"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"2016",
			"Vacant Land",
			"Paddocks"
		]
	},
	{
		"_id" : ObjectId("57a9b3d47e6ddc35ef17c73e"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"12-33-D",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b3d47e6ddc35ef17c73f"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b3eb7e6ddc35ef17c776"),
		"Undefined" : [
			"Tay",
			"Waubaushene",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xGround"
		]
	},
	{
		"_id" : ObjectId("57a9b3eb7e6ddc35ef17c777"),
		"Undefined" : [
			"Severn",
			"Rural Severn",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57a9b3eb7e6ddc35ef17c778"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("57a9b3ec7e6ddc35ef17c77d"),
		"Undefined" : [
			"Severn",
			"Rural Severn",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b3ec7e6ddc35ef17c77e"),
		"Undefined" : [
			"Clearview",
			"Brentwood",
			"Simcoe",
			"2016",
			"Detached",
			"Sidesplit 4",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("57a9b3ec7e6ddc35ef17c77f"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x4xMain, 1x3xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("57a9b3ec7e6ddc35ef17c782"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"15-29-G",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a9b3ed7e6ddc35ef17c789"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57a9b4437e6ddc35ef17c881"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57a9b4437e6ddc35ef17c882"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-50-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4, 1x4, 1x2",
			"6",
			"Master",
			"2nd",
			"4.42",
			"3.62",
			"Hardwood Floor",
			"4 Pc Ensuite",
			"W/I Closet",
			"7",
			"2nd Br",
			"2nd",
			"3.66",
			"3.05",
			"Hardwood Floor",
			"Closet",
			"Window",
			"8",
			"3rd Br",
			"2nd",
			"3.69",
			"2.74",
			"Hardwood Floor",
			"Window",
			"Closet",
			"9",
			"4th Br",
			"2nd",
			"3.90",
			"2.74",
			"Hardwood Floor",
			"Closet",
			"Window"
		]
	},
	{
		"_id" : ObjectId("57a9b4437e6ddc35ef17c884"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("57a9b4457e6ddc35ef17c8a1"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"466-43-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b4457e6ddc35ef17c8a3"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-49-P",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x5x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57a9b5797e6ddc35ef17cb57"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("57a9b5797e6ddc35ef17cb5e"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57a9b57a7e6ddc35ef17cb64"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("57a9b57a7e6ddc35ef17cb65"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("57a9b57a7e6ddc35ef17cb6e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("57a9b57b7e6ddc35ef17cb74"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("57a9b5af7e6ddc35ef17cc45"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("57a9b5ce7e6ddc35ef17ccac"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57a9b5cf7e6ddc35ef17ccb5"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("57a9b5cf7e6ddc35ef17ccb7"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57a9b5cf7e6ddc35ef17ccbf"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("57a9b5e07e6ddc35ef17ccf3"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("57a9b5e07e6ddc35ef17ccf4"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-32-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("57ab03227e6ddc4af6f9daaa"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2015",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("57ac53967e6ddc0ca819be28"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"102-12-B",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x3"
		]
	},
	{
		"_id" : ObjectId("57ac539d7e6ddc0ca819be34"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 2x2"
		]
	},
	{
		"_id" : ObjectId("57ac53c87e6ddc0ca819beac"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"1x4, 1x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("57ac54107e6ddc0ca819bfaa"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-27-K",
			"2016",
			"Detached",
			"Bungalow",
			"2x4xMain"
		]
	},
	{
		"_id" : ObjectId("57ac542f7e6ddc0ca819bffd"),
		"Undefined" : [
			"Oro-Medonte",
			"Moonstone",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57ac542f7e6ddc0ca819bffe"),
		"Undefined" : [
			"Oro-Medonte",
			"Guthrie",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57ac542f7e6ddc0ca819bfff"),
		"Undefined" : [
			"Essa",
			"Baxter",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("57ac542f7e6ddc0ca819c001"),
		"Undefined" : [
			"Tay",
			"Waubaushene",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("57ac54307e6ddc0ca819c007"),
		"Undefined" : [
			"Barrie",
			"400 West",
			"Simcoe",
			"508-9-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("57ada8057e6ddc504d73451f"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x3xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57ada80a7e6ddc504d734533"),
		"Undefined" : [
			"Toronto C13",
			"Victoria Village",
			"Toronto",
			"110-27-K",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("57ada8bf7e6ddc504d734760"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"13-37-D",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde75"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-E",
			"2016",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9977e6ddc53f32cde76"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-F",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x5xMain"
		]
	},
	{
		"_id" : ObjectId("577db9987e6ddc53f32cde77"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"260-19-L",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x3xBsmt, 2x3xUpper, 1x6xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde78"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-T",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde79"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-27-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde7a"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde7b"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-30-Q",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde7c"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-K",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde7d"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-S",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xGround, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde7e"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-26-V",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde7f"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xUpper, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde80"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-30-S",
			"2015",
			"Detached",
			"Sidesplit 4",
			"1x4xMain, 1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9a37e6ddc53f32cde81"),
		"Undefined" : [
			"Oshawa",
			"Northglen",
			"Durham",
			"268-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9a47e6ddc53f32cde82"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x5xMain, 1x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9a47e6ddc53f32cde83"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-30-K",
			"2015",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9a47e6ddc53f32cde84"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-31-N",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9a47e6ddc53f32cde85"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-J",
			"2015",
			"Detached",
			"2-Storey",
			"2x5x2nd, 1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9a47e6ddc53f32cde86"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9a47e6ddc53f32cde87"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"261-26-J",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde88"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"279-42-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x3x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde89"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-39-T",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde8a"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-R",
			"2015",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde8b"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4x2nd, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde8c"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde8d"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde8e"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-X",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde8f"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"277-32-T",
			"2016",
			"Detached",
			"2-Storey",
			"3x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde90"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4xUpper, 1x3xUpper, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9aa7e6ddc53f32cde91"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-39-S",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x5xUpper, 2x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9ac7e6ddc53f32cde92"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-26-R",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9ac7e6ddc53f32cde93"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-R",
			"2016",
			"Detached",
			"Bungalow",
			"2x4xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9ac7e6ddc53f32cde94"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"13-36-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd, 1x3xBsmt",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577db9ae7e6ddc53f32cde95"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"12-34-D",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db9ae7e6ddc53f32cde96"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"1x2xMain, 1x5xMain, 1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c37e6ddc53f32cde98"),
		"Undefined" : [
			"Springwater",
			"Elmvale",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4xMain, 1x3x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c37e6ddc53f32cde99"),
		"Undefined" : [
			"Barrie",
			"400 West",
			"Simcoe",
			"2015",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9c37e6ddc53f32cde9a"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"507-8-M",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c37e6ddc53f32cde9b"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cde9c"),
		"Undefined" : [
			"Essa",
			"Thornton",
			"Simcoe",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x5xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cde9d"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cde9e"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-13-N",
			"2016",
			"Link",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cde9f"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"550-1-A",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"2x4"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea0"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea1"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-B",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea2"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x3xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea3"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea4"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-C",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea5"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"509-17-M",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x4, 1x4, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea6"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea7"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea8"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdea9"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-B",
			"2015",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeab"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-Q",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeac"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-K",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdead"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeae"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeaf"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x1xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb0"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-L",
			"2015",
			"Triplex",
			"2-Storey",
			"3x3"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb1"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-21-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xLower, 1x4xUpper, 1x3xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb2"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb3"),
		"Undefined" : [
			"Severn",
			"Rural Severn",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"3x4"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb4"),
		"Undefined" : [
			"Orillia",
			"Orillia",
			"Simcoe",
			"2015",
			"Detached",
			"3-Storey",
			"2x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb5"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"507-7-N",
			"2016",
			"Detached",
			"Bungalow",
			"1x6xMain, 1x4xMain, 1x4xLower",
			"9",
			"3rd Br",
			"Lower",
			"3.99",
			"3.61",
			"Window",
			"Broadloom",
			"10",
			"4th Br",
			"Lower",
			"4.39",
			"4.06",
			"Window",
			"Broadloom",
			"11",
			"Rec",
			"Lower",
			"7.87",
			"7.11",
			"Broadloom",
			"Closet",
			"12",
			"Games",
			"Lower",
			"4.17",
			"6.73",
			"Broadloom",
			"Combined W/Rec"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb6"),
		"Undefined" : [
			"Springwater",
			"Elmvale",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x2xMain, 1x4xMain, 1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb7"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb8"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1x4xMain, 1x3xLower, 1x4xLower",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeb9"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xMain, 1x4xUpper, 1x4xFlat, 1x2xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9c47e6ddc53f32cdeba"),
		"Undefined" : [
			"Oro-Medonte",
			"Horseshoe Valley",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"1x5x2nd, 1x4x3rd, 1x3x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9c57e6ddc53f32cdebb"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 2x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9c57e6ddc53f32cdebc"),
		"Undefined" : [
			"Innisfil",
			"Gilford",
			"Simcoe",
			"11-30-D",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"1x3xMain, 1x4xUpper, 1x3xLower",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577db9c57e6ddc53f32cdebd"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"1x5xUpper, 1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9c57e6ddc53f32cdebe"),
		"Undefined" : [
			"Springwater",
			"Phelpston",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"1x3xMain, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9c57e6ddc53f32cdebf"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"2x5, 2x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9c57e6ddc53f32cdec0"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-M",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec1"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2, 1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec2"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-44-H",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec3"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3xUpper, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec4"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"2x4x2nd, 1x2xGround"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec5"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow",
			"1x1xMain, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec6"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-43-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"2x4x2nd, 1x2xIn Betwn"
		]
	},
	{
		"_id" : ObjectId("577db9c97e6ddc53f32cdec7"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2016",
			"Vacant Land"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdec8"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"453-53-Z",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"2x4, 0x3, 2x2"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdec9"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-S",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"1x4x2nd, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdeca"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-34-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdecb"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"465-37-K",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x3xBsmt, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdecc"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"458-33-A",
			"2016",
			"Detached",
			"Bungalow",
			"1x4, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdecd"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"458-40-B",
			"2016",
			"Detached",
			"Backsplit 4",
			"1x4xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdece"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-S",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x3x2nd, 1x3xLower, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dc7e6ddc53f32cdecf"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-34-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded1"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded2"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"1x4xUpper, 1x4xLower"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded3"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"473-45-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded4"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-43-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded5"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-39-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded6"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x3, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded7"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-40-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 2x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded8"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cded9"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-33-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x5, 1x3"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdeda"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-F",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdedb"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-A",
			"2016",
			"Detached",
			"Bungaloft",
			"1x4xMain, 1x4x2nd, 1x3xBsmt, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdedc"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"465-40-K",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdedd"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdede"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3xBsmt, 1x5x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdedf"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-44-M",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4, 1x3",
			"Workshop"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee0"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-M",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4xUpper, 1x2xLower"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee1"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"465-40-H",
			"2016",
			"Detached",
			"Bungalow",
			"1x4xMain"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee2"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"478-38-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 2x5x2nd, 1x4xBsmt",
			"6",
			"Master",
			"2nd",
			"6.40",
			"3.30",
			"Hardwood Floor",
			"5 Pc Bath",
			"W/I Closet",
			"7",
			"2nd Br",
			"2nd",
			"4.50",
			"3.30",
			"Hardwood Floor",
			"Crown Moulding",
			"Closet",
			"8",
			"3rd Br",
			"2nd",
			"3.45",
			"3.10",
			"Hardwood Floor",
			"Crown Moulding",
			"Closet",
			"9",
			"4th Br",
			"2nd",
			"3.30",
			"3.25",
			"Hardwood Floor",
			"Crown Moulding",
			"Closet",
			"10",
			"5th Br",
			"Bsmt",
			"3.63",
			"3.15",
			"Laminate",
			"Pot Lights",
			"11",
			"Br",
			"Bsmt",
			"3.25",
			"2.80",
			"Laminate",
			"Pot Lights",
			"12",
			"Rec",
			"Bsmt",
			"6.30",
			"6.15",
			"Laminate",
			"Pot Lights",
			"Fireplace"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee3"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"1x4xUpper, 1x5xUpper, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee4"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-H",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee5"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee6"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee7"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-G",
			"2016",
			"Detached",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee8"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-36-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdee9"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"473-41-M",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x5x2nd, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdeea"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-35-K",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x6x2nd, 1x4x2nd, 1x4xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdeeb"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3x2nd, 1x4x2nd, 1x6x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdeec"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"479-42-R",
			"2016",
			"Detached",
			"2-Storey",
			"1x6xUpper, 2x4xUpper, 1x3xUpper, 2x2, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9dd7e6ddc53f32cdeed"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-P",
			"2016",
			"Det W/Com Elements",
			"2-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd, 1x3xLower"
		]
	},
	{
		"_id" : ObjectId("577db9f77e6ddc53f32cdeee"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"438-44-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2xMain, 1x4xUpper"
		]
	},
	{
		"_id" : ObjectId("577db9f77e6ddc53f32cdeef"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2016",
			"Detached",
			"Sidesplit 3",
			"1x4"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef0"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-40-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef1"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"452-41-Z",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"1x4x2nd, 1x3xLower, 1x2xMain"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef3"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-W",
			"2015",
			"Link",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef4"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-R",
			"2015",
			"Detached",
			"Backsplit 3",
			"1x3, 1x4"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef5"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"453-50-X",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"1x4xMain, 1x3xBsmt"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef6"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"445-43-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"2x4, 1x2"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef7"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-T",
			"2016",
			"Detached",
			"2-Storey",
			"1x2xMain, 1x4x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef8"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"1x2, 2x4"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdef9"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"437-40-P",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"1x4x3rd, 1x3x3rd, 1x2x2nd"
		]
	},
	{
		"_id" : ObjectId("577db9f87e6ddc53f32cdefa"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain"