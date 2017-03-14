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
var input_2 = [
	{
		"_id" : ObjectId("5797438d7e6ddc790c0b1ead"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4, 1x2",
			"416-656-3500"
		]
	},
	{
		"_id" : ObjectId("578f58927e6ddc606cdf5b39"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-43-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"9.15 x 27.96 Metres",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("579c88347e6ddc636fc87377"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("578f58687e6ddc606cdf5ace"),
		"Undefined" : [
			"East Garafraxa",
			"Rural East Garafraxa",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"212 x 250 Feet",
			"1x5x2nd, 1x4x2nd",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("578f58777e6ddc606cdf5afb"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-37-Q",
			"2015",
			"Detached",
			"Bungalow",
			"75 x 154.04 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("578f58907e6ddc606cdf5b2a"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"31.82 x 120.33 Feet",
			"1x4x2nd, 1x2xMain",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("5797438d7e6ddc790c0b1eac"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x5xFlat",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e6"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999ec"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f0"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-385-0004"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a1f"),
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
		"_id" : ObjectId("57870b25e40ebb0d6b299a22"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"519-570-4663"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a23"),
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
		"_id" : ObjectId("57870b25e40ebb0d6b299a25"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-221-8838"
		]
	},
	{
		"_id" : ObjectId("5788be927e6ddc641d6e10fd"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"2015",
			"Vacant Land",
			"29.45 x 0 Acres",
			"905-722-9770"
		]
	},
	{
		"_id" : ObjectId("5788bead7e6ddc641d6e1150"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"31.02 x 100.07 Feet",
			"1x5, 1x4, 1x2",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("5788bec27e6ddc641d6e1190"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-21-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 112.85 Feet",
			"1x4x2nd, 1x2xMain",
			"905-660-4949"
		]
	},
	{
		"_id" : ObjectId("578db8da7e6ddc6f529e3249"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"2015",
			"Vacant Land",
			"94.43 x 495.4 Feet",
			"866-737-9958"
		]
	},
	{
		"_id" : ObjectId("578db9117e6ddc6f529e32e9"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"101-51-B",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 100 Feet",
			"2x3",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("578f58097e6ddc606cdf59a9"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-20-Z",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"73 x 150 Feet",
			"1x3xMain, 1x5xMain, 2x3xBsmt",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("578f58177e6ddc606cdf59cb"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.77 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("578f581d7e6ddc606cdf59e9"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"2015",
			"Other",
			"Other",
			"0 x 0 Acres",
			"4x2",
			"905-642-6333"
		]
	},
	{
		"_id" : ObjectId("578f58257e6ddc606cdf59fd"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 108.27 Feet",
			"2x4x2nd, 1x2xMain",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("578f58257e6ddc606cdf5a00"),
		"Undefined" : [
			"Pickering",
			"Rural Pickering",
			"Durham",
			"16-35-G",
			"2016",
			"Detached",
			"Bungalow",
			"72.1 x 72.1 Acres",
			"1x4xMain",
			"905-721-2112"
		]
	},
	{
		"_id" : ObjectId("578f58327e6ddc606cdf5a26"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"2016",
			"Vacant Land",
			"49.21 x 168 Feet",
			"905-240-7300"
		]
	},
	{
		"_id" : ObjectId("578f58437e6ddc606cdf5a49"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-27-S",
			"2015",
			"Duplex",
			"2-Storey",
			"42.66 x 97 Feet",
			"1x4xBsmt, 1x4xMain, 1x4x2nd",
			"905-721-2112"
		]
	},
	{
		"_id" : ObjectId("578f58457e6ddc606cdf5a5e"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-30-N",
			"2016",
			"Detached",
			"2-Storey",
			"54.29 x 112.66 Feet",
			"1x2, 1x4, 1x5",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578f584b7e6ddc606cdf5a6b"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 101.71 Feet",
			"1x4x2nd, 1x3xBsmt, 1x2xMain",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("578f584b7e6ddc606cdf5a6f"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-U",
			"2016",
			"Detached",
			"2-Storey",
			"32.81 x 116.47 Feet",
			"1x4x2nd, 1x3xBsmt, 1x2xMain",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("578f584e7e6ddc606cdf5a76"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"13-36-E",
			"2015",
			"Vacant Land",
			"157.23 x 393.7 Feet",
			"905-430-9000"
		]
	},
	{
		"_id" : ObjectId("578f58607e6ddc606cdf5aa3"),
		"Undefined" : [
			"Clearview",
			"Brentwood",
			"Simcoe",
			"2015",
			"Vacant Land",
			"1678 x 1015 Feet",
			"800-560-8756"
		]
	},
	{
		"_id" : ObjectId("578f58607e6ddc606cdf5aa4"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"125.3 x 110 Feet",
			"1x4xMain, 1x2xMain",
			"705-617-9969"
		]
	},
	{
		"_id" : ObjectId("578f58617e6ddc606cdf5aa9"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"6.4 x 35.75 Metres",
			"1x2xMain, 2x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("578f58617e6ddc606cdf5aae"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.48 x 47.44 Metres",
			"1x2xMain, 2x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("578f58627e6ddc606cdf5ab2"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-T",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 114 Feet",
			"1x4xMain, 1x4xLower",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("578f58627e6ddc606cdf5ab4"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-5-C",
			"2016",
			"Detached",
			"2-Storey",
			"34.12 x 86.98 Feet",
			"1x2xMain, 2x4x2nd",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("5790aeb97e6ddc5232b5ebcb"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("5790aeb97e6ddc5232b5ebcc"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"647-932-0015"
		]
	},
	{
		"_id" : ObjectId("578f58217e6ddc606cdf59f5"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"12-32-D",
			"2015",
			"Farm",
			"1 1/2 Storey",
			"198 x 0 Acres",
			"1x3xMain",
			"Drive Shed",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5797437e7e6ddc790c0b1e79"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-30-E",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5x3rd, 1x3x2nd, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5797438b7e6ddc790c0b1e9d"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-10-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("5797438b7e6ddc790c0b1e9e"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("5797438c7e6ddc790c0b1e9f"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("5797438c7e6ddc790c0b1ea6"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5799e3237e6ddc0c3a4d0b03"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 130 Feet",
			"1x4",
			"416-901-8881"
		]
	},
	{
		"_id" : ObjectId("5799e32a7e6ddc0c3a4d0b17"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"116-25-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"17.6 x 110 Feet",
			"1x2xMain, 1x4x2nd",
			"416-674-5246"
		]
	},
	{
		"_id" : ObjectId("5799e32a7e6ddc0c3a4d0b19"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"40 x 127.39 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("5799e33e7e6ddc0c3a4d0b5b"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-P",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 111.89 Feet",
			"1x4x2nd",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("5799e33f7e6ddc0c3a4d0b61"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-T",
			"2016",
			"Detached",
			"3-Storey",
			"28.33 x 150 Feet",
			"1x2xMain, 1x4x2nd, 1x5xBsmt",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("5799e3457e6ddc0c3a4d0b73"),
		"Undefined" : [
			"Toronto W10",
			"Thistletown-Beaumonde Heights",
			"Toronto",
			"101-7-D",
			"2016",
			"Store W/Apt/Offc",
			"2-Storey",
			"19.06 x 100.95 Feet",
			"1x4x2nd, 1x2xGround, 1x1xGround",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("5799e3457e6ddc0c3a4d0b75"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-K",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"40.46 x 140 Feet",
			"1x4, 1x2",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("5799e3467e6ddc0c3a4d0b7a"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-V",
			"2015",
			"Detached",
			"2-Storey",
			"25 x 123 Feet",
			"5x4",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("579b34597e6ddc688ba1873e"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"60.67 x 101.8 Feet",
			"7x3x2nd",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("579b34687e6ddc688ba1875e"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-33-J",
			"2016",
			"Detached",
			"Sidesplit 3",
			"50 x 125 Feet",
			"1x4xUpper, 1x3xBsmt",
			"416-265-2000"
		]
	},
	{
		"_id" : ObjectId("579b34797e6ddc688ba1879d"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.83 x 45.75 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xBsmt",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("57a5c3cb7e6ddc6dabc62618"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"2016",
			"Vacant Land",
			"80 x 295 Feet",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("57a9b8917e6ddc4b02d336f2"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"29 x 100 Feet",
			"1x4x2nd, 1x4xLower",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57a9b8917e6ddc4b02d336f3"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21.26 x 35.37 Feet",
			"1x2xMain, 1x4x3rd, 1x5x2nd",
			"416-398-5035"
		]
	},
	{
		"_id" : ObjectId("57a9b8937e6ddc4b02d336f8"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-18-C",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 150 Feet",
			"1x4, 1x3",
			"416-755-0123"
		]
	},
	{
		"_id" : ObjectId("57ac58367e6ddc1fc1174dbe"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"119-16-R",
			"2016",
			"Detached",
			"2-Storey",
			"49 x 22.44 Feet",
			"1x2xMain, 1x4x2nd, 1x4xBsmt",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999dc"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999dd"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-707-0188"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999df"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5788be607e6ddc641d6e1047"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"16 x 110 Feet",
			"1x3x2nd, 1x3xBsmt",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("5788be607e6ddc641d6e1049"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Detached",
			"2-Storey",
			"28.5 x 145 Feet",
			"2x4, 1x3",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5788be617e6ddc641d6e104f"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"30 x 110 Feet",
			"1x7, 1x3, 1x3",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("5788be687e6ddc641d6e1061"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-4-D",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"6.07 x 26.53 Metres",
			"2x4x2nd, 1x4xBsmt, 1x2xMain, 4",
			"647-748-8655"
		]
	},
	{
		"_id" : ObjectId("5788be717e6ddc641d6e1081"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-23-J",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 60 Feet",
			"2x4x3rd, 1x2xLower",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5788be797e6ddc641d6e10a4"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2015",
			"Detached",
			"Bungalow",
			"121.25 x 59.9 Feet",
			"1x4xMain, 1x4xBsmt",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("5788be897e6ddc641d6e10df"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-22-Y",
			"2016",
			"Detached",
			"Bungalow",
			"77 x 67 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("578db81c7e6ddc6f529e3023"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-21-G",
			"2016",
			"Detached",
			"2-Storey",
			"75 x 125 Feet",
			"2x4, 1x2",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5790aeb67e6ddc5232b5ebb4"),
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
		"_id" : ObjectId("5790aeb67e6ddc5232b5ebb5"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xGround",
			"416-223-8833"
		]
	},
	{
		"_id" : ObjectId("5790aeb77e6ddc5232b5ebbb"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-553-7326"
		]
	},
	{
		"_id" : ObjectId("578db87f7e6ddc6f529e3138"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-16-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24 x 101 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5797437d7e6ddc790c0b1e6d"),
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
		"_id" : ObjectId("5797437d7e6ddc790c0b1e70"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("5797437d7e6ddc790c0b1e71"),
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
		"_id" : ObjectId("5797437e7e6ddc790c0b1e76"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("5798988a7e6ddc6cbcfc1d77"),
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
		"_id" : ObjectId("5798988a7e6ddc6cbcfc1d7d"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3xMain",
			"905-764-7200"
		]
	},
	{
		"_id" : ObjectId("5798988b7e6ddc6cbcfc1d81"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-221-8838"
		]
	},
	{
		"_id" : ObjectId("579898977e6ddc6cbcfc1da0"),
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
		"_id" : ObjectId("579898977e6ddc6cbcfc1da2"),
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
		"_id" : ObjectId("579898977e6ddc6cbcfc1da4"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("579898977e6ddc6cbcfc1da5"),
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
		"_id" : ObjectId("579898987e6ddc6cbcfc1da8"),
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
		"_id" : ObjectId("579898997e6ddc6cbcfc1db0"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("579898a27e6ddc6cbcfc1dc8"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-9-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("579898ac7e6ddc6cbcfc1de4"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("579898ad7e6ddc6cbcfc1deb"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("579898c77e6ddc6cbcfc1e22"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"472-40-P",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xGround, 1x4x2nd",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("579898ca7e6ddc6cbcfc1e36"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-R",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x3x2nd, 1x4x2nd, 1x2xMain",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5799e3177e6ddc0c3a4d0ade"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-P",
			"2015",
			"Detached",
			"2-Storey",
			"22 x 100 Feet",
			"1x4x2nd, 1x3x3rd, 1x2xMain",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("5799e3227e6ddc0c3a4d0afe"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Detached",
			"2-Storey",
			"42 x 119 Feet",
			"1x4xGround, 1x2x2nd",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5799e3227e6ddc0c3a4d0b00"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 160 Feet",
			"1x4x2nd, 1x2xGround, 1x2xBsmt",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("5799e3237e6ddc0c3a4d0b02"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 133 Feet",
			"1x4x2nd, 1x2xBsmt",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("5799e3507e6ddc0c3a4d0b9a"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-23-M",
			"2016",
			"Detached",
			"2-Storey",
			"44.29 x 123.03 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-856-8111"
		]
	},
	{
		"_id" : ObjectId("5799e3587e6ddc0c3a4d0baf"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 174 Feet",
			"1x4xMain",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5799e3717e6ddc0c3a4d0bf4"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"351-37-U",
			"2016",
			"Detached",
			"2-Storey",
			"52.6 x 101.25 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5799e3717e6ddc0c3a4d0bf6"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"34.12 x 87.6 Feet",
			"2x4x2nd, 1x2xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("5799e3717e6ddc0c3a4d0bf7"),
		"Undefined" : [
			"Markham",
			"Victoria Manor-Jennings Gate",
			"York",
			"350-28-Q",
			"2016",
			"Detached",
			"2-Storey",
			"32.52 x 0 Feet",
			"1x2xLower, 1x4x2nd, 1x3x2nd",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5799e3777e6ddc0c3a4d0c12"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 85.3 Feet",
			"1x2, 2x3, 1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5799e37d7e6ddc0c3a4d0c1f"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 132.78 Feet",
			"1x2xMain, 2x4xMain",
			"905-476-3131"
		]
	},
	{
		"_id" : ObjectId("5799e3927e6ddc0c3a4d0c57"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-18-N",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 116.47 Feet",
			"2x4x2nd, 1x2xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5799e3a47e6ddc0c3a4d0c8e"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"12 x 32.5 Metres",
			"2x4x2nd, 1x2xMain",
			"905-697-1900"
		]
	},
	{
		"_id" : ObjectId("5799e3bf7e6ddc0c3a4d0ccf"),
		"Undefined" : [
			"Barrie",
			"Letitia Heights",
			"Simcoe",
			"504-7-J",
			"2016",
			"Detached",
			"2-Storey",
			"29 x 0 Feet",
			"1x2xMain, 1x4x2nd",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5799e3c07e6ddc0c3a4d0cd1"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"122 x 0 Feet",
			"1x4xMain",
			"7",
			"Rec",
			"Lower",
			"5.49",
			"4.27",
			"8",
			"3rd Br",
			"Lower",
			"3.35",
			"3.35",
			"9",
			"Other",
			"Lower",
			"5.49",
			"4.88",
			"10",
			"Other",
			"Lower",
			"3.45",
			"2.90",
			"877-722-8191"
		]
	},
	{
		"_id" : ObjectId("5799e3c17e6ddc0c3a4d0cdb"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Loretto",
			"Simcoe",
			"2015",
			"Vacant Land",
			"Other",
			"200 x 2199 Feet",
			"888-732-1600"
		]
	},
	{
		"_id" : ObjectId("5799e3c17e6ddc0c3a4d0cdc"),
		"Undefined" : [
			"Clearview",
			"Stayner",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"66 x 165 Feet",
			"1x3xMain, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5799e3c17e6ddc0c3a4d0cdd"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"502-12-F",
			"2016",
			"Detached",
			"Backsplit 4",
			"15.24 x 33.52 Metres",
			"1x3xMain, 1x4xUpper, 1x3xLower",
			"705-252-7335"
		]
	},
	{
		"_id" : ObjectId("5799e3c27e6ddc0c3a4d0ce3"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2016",
			"Detached",
			"Bungaloft",
			"11.91 x 38.7 Metres",
			"1x2xMain, 1x5xMain, 1x4xUpper",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("5799e3c27e6ddc0c3a4d0ce4"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2016",
			"Detached",
			"Bungaloft",
			"12 x 56.55 Metres",
			"1x2xMain, 1x5xMain, 1x4xUpper",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("5799e3c27e6ddc0c3a4d0ce5"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2016",
			"Detached",
			"2-Storey",
			"11.84 x 50.66 Metres",
			"1x2xMain, 1x5xUpper, 1x4xUpper",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("5799e3da7e6ddc0c3a4d0d28"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-F",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 110.99 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-502-9944"
		]
	},
	{
		"_id" : ObjectId("5799e3db7e6ddc0c3a4d0d2d"),
		"Undefined" : [
			"Mississauga",
			"Dixie",
			"Peel",
			"473-47-N",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"39 x 183.27 Feet",
			"1x4xMain, 1x3xLower",
			"905-275-9400"
		]
	},
	{
		"_id" : ObjectId("5799e3f47e6ddc0c3a4d0d7a"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-T",
			"2016",
			"Semi-Detached",
			"Sidesplit 5",
			"41 x 115 Feet",
			"1x4, 1x4, 1x4",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("5799e3f57e6ddc0c3a4d0d82"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-52-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.51 x 98.43 Feet",
			"2x3x2nd, 1x2xMain",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("579c862c7e6ddc636fc86ef8"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"109-19-K",
			"2016",
			"Detached",
			"3-Storey",
			"26.42 x 187.45 Feet",
			"2x5, 1x4, 1x3, 1x2",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("579c86497e6ddc636fc86f3b"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-E",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"19.49 x 87.93 Feet",
			"1x3, 2x4",
			"905-415-2121"
		]
	},
	{
		"_id" : ObjectId("579c86497e6ddc636fc86f3d"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-C",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"29 x 100 Feet",
			"1x3x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("57a4708c7e6ddc1c73ff9473"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2015",
			"Vacant Land",
			"100 x 200 Feet",
			"905-897-8777"
		]
	},
	{
		"_id" : ObjectId("57a9b8b17e6ddc4b02d33737"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"106-41-E",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"20.31 x 150 Feet",
			"1x4xMain, 1x4xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57a9b8b17e6ddc4b02d33739"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"29.71 x 114.33 Feet",
			"1x4, 1x3, 1x2",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("57a9b8b37e6ddc4b02d33741"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-38-K",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 136 Feet",
			"1x4xMain, 1x3xBsmt, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57a9b9d77e6ddc4b02d33a39"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"466-41-G",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"30 x 110 Feet",
			"2x4xMain",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("57ac58367e6ddc1fc1174dbd"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"115-17-N",
			"2016",
			"Detached",
			"2-Storey",
			"20 x 127.67 Feet",
			"1x2xMain, 1x3x2nd, 1x3xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b29969e"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-G",
			"2016",
			"Detached",
			"2-Storey",
			"29.28 x 0 Feet",
			"1x2xMain, 2x4x2nd",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996ba"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-T",
			"2015",
			"Detached",
			"2-Storey",
			"45 x 118.75 Feet",
			"1x2xBsmt, 1x4xUpper",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996f8"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"900-9-G",
			"2015",
			"Vacant Land",
			"400 x 700 Feet",
			"416-461-0756"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996fa"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-8-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"27 x 100 Feet",
			"1x4xUpper, 1x2xLower",
			"705-435-5556"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299742"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-43-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 125 Feet",
			"1x4x2nd, 1x2",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299747"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"453-51-Z",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 126 Feet",
			"1x4xMain",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299748"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"458-40-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"35 x 110 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299754"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"473-44-Q",
			"2015",
			"Detached",
			"Bungalow",
			"36.5 x 297 Feet",
			"1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999d4"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Co-Ownership Apt",
			"Apartment",
			"1x3xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999d9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-604-2299"
		]
	},
	{
		"_id" : ObjectId("5788be597e6ddc641d6e1030"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-29-F",
			"2016",
			"Detached",
			"Backsplit 4",
			"50 x 162 Feet",
			"1x4xUpper, 1x3xLower",
			"416-944-1234"
		]
	},
	{
		"_id" : ObjectId("5788be597e6ddc641d6e1034"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2015",
			"Detached",
			"2-Storey",
			"29.52 x 109.9 Feet",
			"1x3, 4x4",
			"416-278-0848"
		]
	},
	{
		"_id" : ObjectId("5788be607e6ddc641d6e1046"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-11-L",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"27.25 x 92 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("5789a03ef65a5818794e74d1"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"200 x 0 Feet",
			"1x4xMain",
			"905-852-3050"
		]
	},
	{
		"_id" : ObjectId("5790adba7e6ddc5232b5e9cd"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-45-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 114 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5790adbc7e6ddc5232b5e9da"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 100.07 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x3xBsmt",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("5790adbc7e6ddc5232b5e9dc"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-T",
			"2016",
			"Detached",
			"2-Storey",
			"26.05 x 108.33 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x4xBsmt",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("5789a1aef65a5818794e77a0"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Parking Space",
			"Other",
			"0",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5797437d7e6ddc790c0b1e6c"),
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
		"_id" : ObjectId("579896d87e6ddc6cbcfc194d"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-E",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x4xMain, 1x2xMain, 1x3xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("579896d87e6ddc6cbcfc1952"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-7-V",
			"2016",
			"Detached",
			"2-Storey",
			"25.83 x 120 Feet",
			"1x4x2nd, 1x2xMain, 1x4xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579896dd7e6ddc6cbcfc1961"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-S",
			"2016",
			"Multiplex",
			"2-Storey",
			"65 x 110 Feet",
			"1x4xLower, 1x4xLower, 1x4x2nd, 1x4x2nd, 1x4x3rd",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("579896e77e6ddc6cbcfc1978"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-V",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 50 Feet",
			"1x4",
			"905-841-1030"
		]
	},
	{
		"_id" : ObjectId("579896e87e6ddc6cbcfc197b"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"66 x 198 Feet",
			"1x4xMain, 1x3xUpper, 1x2xLower",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("5798970c7e6ddc6cbcfc19e7"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"100 x 150 Feet",
			"1x3",
			"866-924-7496"
		]
	},
	{
		"_id" : ObjectId("5798970d7e6ddc6cbcfc19eb"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"2-Storey",
			"27.88 x 149.57 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("579897137e6ddc6cbcfc19f9"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2015",
			"Link",
			"2-Storey",
			"32.85 x 107 Feet",
			"1x4, 2x2",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5798972e7e6ddc6cbcfc1a4e"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-28-S",
			"2015",
			"Detached",
			"2-Storey",
			"35.07 x 100 Feet",
			"1x4, 1x3",
			"905-706-3131"
		]
	},
	{
		"_id" : ObjectId("5798972f7e6ddc6cbcfc1a4f"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"277-31-T",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"45 x 112 Feet",
			"1x4xMain, 1x2xLower",
			"866-525-4111"
		]
	},
	{
		"_id" : ObjectId("5798972f7e6ddc6cbcfc1a55"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-P",
			"2016",
			"Detached",
			"Bungalow",
			"82.75 x 0 Feet",
			"1x4xMain",
			"905-623-6000"
		]
	},
	{
		"_id" : ObjectId("579897377e6ddc6cbcfc1a68"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"234-38-M",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"111.62 x 78 Feet",
			"0x0",
			"905-697-1900"
		]
	},
	{
		"_id" : ObjectId("579897377e6ddc6cbcfc1a6a"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-28-N",
			"2016",
			"Detached",
			"Bungaloft",
			"38.32 x 100 Feet",
			"1x4x2nd, 1x3xGround, 1x2xGround, 1x3xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5798974f7e6ddc6cbcfc1a98"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Vacant Land",
			"50 x 150 Feet",
			"877-435-4336"
		]
	},
	{
		"_id" : ObjectId("5798974f7e6ddc6cbcfc1a9a"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2014",
			"Cottage",
			"Bungalow",
			"50 x 100 Feet",
			"1x4",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("579897507e6ddc6cbcfc1a9d"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-C",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"33 x 165 Feet",
			"1x4xGround, 1x3xBsmt",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("579897507e6ddc6cbcfc1a9e"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"6.4 x 50.45 Metres",
			"1x2xMain, 2x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("579897517e6ddc6cbcfc1aa8"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"9 x 36.73 Metres",
			"1x2xMain, 2x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("579897517e6ddc6cbcfc1aac"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"8.45 x 44.54 Metres",
			"1x2xMain, 3x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("579897517e6ddc6cbcfc1aad"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"9 x 36.73 Metres",
			"1x2xMain, 3x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("579897597e6ddc6cbcfc1ac2"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2016",
			"Vacant Land",
			"2.11 x 0 Acres",
			"800-268-2455"
		]
	},
	{
		"_id" : ObjectId("5798975a7e6ddc6cbcfc1ac8"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-47-G",
			"2016",
			"Detached",
			"2-Storey",
			"40.04 x 109.93 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x4xLower",
			"519-942-8700"
		]
	},
	{
		"_id" : ObjectId("5798975a7e6ddc6cbcfc1aca"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"2.96 x 0 Acres",
			"1x4xMain, 1x4xMain",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("5798976a7e6ddc6cbcfc1af3"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"37.45 x 110 Feet",
			"1x4, 1x3",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("5798976c7e6ddc6cbcfc1b01"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-37-N",
			"2016",
			"Detached",
			"2-Storey",
			"89.11 x 101.54 Feet",
			"1x2xMain, 2x4x2nd, 1x3xLower",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("579897857e6ddc6cbcfc1b3a"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"453-50-V",
			"2016",
			"Detached",
			"Sidesplit 3",
			"66 x 92 Feet",
			"1x4xUpper, 1x4xMain, 1x2xLower, 1x4xLower",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("579897867e6ddc6cbcfc1b46"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-Q",
			"2016",
			"Detached",
			"Backsplit 5",
			"34.26 x 100.75 Feet",
			"1x4, 1x3",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("579897877e6ddc6cbcfc1b4c"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"438-42-O",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24 x 92 Feet",
			"1x3x2nd, 1x2xMain, 1x3xBsmt, 1x4x2nd",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("579897887e6ddc6cbcfc1b4f"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-S",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 88.62 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5798978d7e6ddc6cbcfc1b68"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"432-61-J",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"32.3 x 203.49 Feet",
			"1x4xLower, 1x4xUpper, 1x3xUpper",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5798979f7e6ddc6cbcfc1b9e"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2016",
			"Detached",
			"Bungalow",
			"76.51 x 102.75 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-845-1223"
		]
	},
	{
		"_id" : ObjectId("579897a77e6ddc6cbcfc1bba"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-T",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 113 Feet",
			"1x4xGround, 1x3xBsmt",
			"905-338-0909"
		]
	},
	{
		"_id" : ObjectId("579898737e6ddc6cbcfc1d28"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("579898737e6ddc6cbcfc1d2b"),
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
		"_id" : ObjectId("579898747e6ddc6cbcfc1d34"),
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
		"_id" : ObjectId("579898747e6ddc6cbcfc1d35"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("579898757e6ddc6cbcfc1d3c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-499-0001"
		]
	},
	{
		"_id" : ObjectId("579898767e6ddc6cbcfc1d45"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-479-4488"
		]
	},
	{
		"_id" : ObjectId("579898897e6ddc6cbcfc1d70"),
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
		"_id" : ObjectId("5799e3f67e6ddc0c3a4d0d8f"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"40.01 x 100.07 Feet",
			"1x3x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("5799e3f77e6ddc0c3a4d0d97"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-T",
			"2016",
			"Detached",
			"2-Storey",
			"47.21 x 84.21 Feet",
			"1x5x2nd, 1x2xMain, 2x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5799e3f77e6ddc0c3a4d0d99"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"16.8 x 27.5 Metres",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("5799e3f77e6ddc0c3a4d0d9a"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"16.34 x 27.72 Metres",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("5799e3fc7e6ddc0c3a4d0da5"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"432-60-J",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 140.55 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-452-7272"
		]
	},
	{
		"_id" : ObjectId("5799e4047e6ddc0c3a4d0dbe"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"4.96 x 0 Feet",
			"1x2xMain, 3x4x2nd",
			"800-834-5516"
		]
	},
	{
		"_id" : ObjectId("5799e4f67e6ddc0c3a4d0f62"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-25-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5799e4f67e6ddc0c3a4d0f63"),
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
		"_id" : ObjectId("5799e4f67e6ddc0c3a4d0f65"),
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
		"_id" : ObjectId("5799e4f77e6ddc0c3a4d0f6c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-8-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("5799e4f87e6ddc0c3a4d0f71"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5799e4f97e6ddc0c3a4d0f73"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-897-8777"
		]
	},
	{
		"_id" : ObjectId("5799e4fa7e6ddc0c3a4d0f7b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5799e4fa7e6ddc0c3a4d0f7c"),
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
		"_id" : ObjectId("5799e4fa7e6ddc0c3a4d0f7f"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5799e4fb7e6ddc0c3a4d0f88"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xFlat, 1x4xFlat",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5799e4fc7e6ddc0c3a4d0f8a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5799e50c7e6ddc0c3a4d0fb2"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2015",
			"Co-Ownership Apt",
			"Apartment",
			"1x4",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("5799e50d7e6ddc0c3a4d0fb5"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5799e50e7e6ddc0c3a4d0fbe"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"2x3",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5799e50e7e6ddc0c3a4d0fbf"),
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
		"_id" : ObjectId("5799e51a7e6ddc0c3a4d0fdd"),
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
		"_id" : ObjectId("5799e51b7e6ddc0c3a4d0fde"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5799e51c7e6ddc0c3a4d0fe5"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-499-5757"
		]
	},
	{
		"_id" : ObjectId("5799e5287e6ddc0c3a4d100c"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-9-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-691-3000"
		]
	},
	{
		"_id" : ObjectId("5799e5297e6ddc0c3a4d100d"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-410-3000"
		]
	},
	{
		"_id" : ObjectId("5799e5297e6ddc0c3a4d100e"),
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
		"_id" : ObjectId("5799e5297e6ddc0c3a4d100f"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("5799e52a7e6ddc0c3a4d1012"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5799e52a7e6ddc0c3a4d1016"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("579c86497e6ddc636fc86f40"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-P",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 132 Feet",
			"1x2xMain, 1x4xMain, 2x4xBsmt",
			"416-335-4335"
		]
	},
	{
		"_id" : ObjectId("579c86547e6ddc636fc86f5f"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"22 x 119.17 Feet",
			"6x3, 0x0, 0x0",
			"416-690-2090"
		]
	},
	{
		"_id" : ObjectId("579c865b7e6ddc636fc86f6d"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-4-V",
			"2016",
			"Detached",
			"Bungalow",
			"28.44 x 120 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("579c865b7e6ddc636fc86f6e"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-E",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 125 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-273-4211"
		]
	},
	{
		"_id" : ObjectId("579c87187e6ddc636fc87161"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"31.99 x 186.45 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("57a1cbad7e6ddc5f92581c2a"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-S",
			"2016",
			"Vacant Land",
			"59 x 120 Feet",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("57a1cbd57e6ddc5f92581c88"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Vacant Land",
			"85.14 x 228 Feet",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("57a322c27e6ddc5128ee36bd"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.37 x 99 Feet",
			"1x2xMain",
			"905-640-3131"
		]
	},
	{
		"_id" : ObjectId("57a9b8b37e6ddc4b02d33743"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-30-M",
			"2015",
			"Detached",
			"Bungalow",
			"51 x 116.01 Feet",
			"1x4, 1x3",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("57a9b8be7e6ddc4b02d3375e"),
		"Undefined" : [
			"Toronto W04",
			"Brookhaven-Amesbury",
			"Toronto",
			"108-11-J",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"40 x 115.52 Feet",
			"1x4, 1x2",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("57a9b8be7e6ddc4b02d33761"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-10-H",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"51 x 147 Feet",
			"1x4xMain",
			"905-856-8111"
		]
	},
	{
		"_id" : ObjectId("57a9b8bf7e6ddc4b02d33764"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"15 x 105 Feet",
			"1x4x2nd, 1x3xMain, 1x4xBsmt",
			"905-812-1100"
		]
	},
	{
		"_id" : ObjectId("57a9b8d37e6ddc4b02d33794"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-23-J",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"20 x 60 Feet",
			"2x4, 1x2",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("57a9b9de7e6ddc4b02d33a5c"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"2015",
			"Link",
			"2-Storey",
			"44.87 x 92 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"647-932-0015"
		]
	},
	{
		"_id" : ObjectId("57adae017e6ddc6172cefbd4"),
		"Undefined" : [
			"Toronto C01",
			"Dufferin Grove",
			"Toronto",
			"119-14-R",
			"2015",
			"Vacant Land",
			"12.5 x 90 Feet",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57adaec77e6ddc6172cefda5"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2015",
			"Vacant Land",
			"Other",
			"50 x 150 Feet",
			"905-896-4622"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b299572"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-28-N",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 107.2 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xMain, Main",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b29958e"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2015",
			"Detached",
			"2-Storey",
			"20 x 100 Feet",
			"1x4x2nd, 1x1xBsmt",
			"416-466-2090"
		]
	},
	{
		"_id" : ObjectId("57870937e40ebb0d6b2995a1"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-J",
			"2015",
			"Detached",
			"Bungalow",
			"52 x 108 Feet",
			"1x4, 1x2",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57870938e40ebb0d6b2995a4"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-N",
			"2015",
			"Detached",
			"Sidesplit 4",
			"51 x 148.39 Feet",
			"1x4xUpper, 1x3xIn Betwn, 1x3xLower",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c6"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-R",
			"2015",
			"Detached",
			"2-Storey",
			"50.75 x 77.08 Feet",
			"1x4x2nd, 1x5x2nd, 1x2xMain",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995e7"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-Z",
			"2015",
			"Detached",
			"2-Storey",
			"14.76 x 118.6 Feet",
			"1x2xMain, 2x4x2nd",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("57870958e40ebb0d6b299604"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-18-Z",
			"2016",
			"Detached",
			"2-Storey",
			"34.45 x 108.27 Feet",
			"1x2xMain, 2x4x2nd",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b29962e"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-37-V",
			"2016",
			"Detached",
			"Sidesplit 3",
			"65 x 110 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b29965b"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 90.22 Feet",
			"1x2xMain, 2x4x2nd",
			"905-478-1101"
		]
	},
	{
		"_id" : ObjectId("5788be447e6ddc641d6e0fe2"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-21-L",
			"2016",
			"Fourplex",
			"2-Storey",
			"50 x 137 Feet",
			"2x4xMain, 2x4x2nd",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("5788be477e6ddc641d6e0feb"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-H",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"45 x 132 Feet",
			"1x4xFlat, 1x4xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5788be507e6ddc641d6e100c"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"16 x 100 Feet",
			"1x4x2nd, 1x2xBsmt",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("5788be517e6ddc641d6e1010"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-30-Q",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 200 Feet",
			"1x3xBsmt, 1x3xBsmt, 1x3xMain",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("57899fdcf65a5818794e73cf"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"2015",
			"Vacant Land",
			"52.07 x 106.62 Feet",
			"905-720-0228"
		]
	},
	{
		"_id" : ObjectId("57899fddf65a5818794e73d1"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Detached",
			"Bungalow",
			"29.85 x 111.47 Feet",
			"1x4",
			"416-283-1555"
		]
	},
	{
		"_id" : ObjectId("578f57db7e6ddc606cdf590d"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-D",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 127.19 Feet",
			"2x4xBsmt, 2x4xMain",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("578f57db7e6ddc606cdf5911"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 122.5 Feet",
			"1x4xUpper, 1x2xMain",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("578f57e37e6ddc606cdf592c"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-B",
			"2016",
			"Detached",
			"3-Storey",
			"24 x 100 Feet",
			"1x3xMain, 2x4x2nd, 2x3x2nd, 1x4x3rd, 1x3x3rd",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("578f57fb7e6ddc606cdf5977"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-U",
			"2015",
			"Detached",
			"2-Storey",
			"42 x 121 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-736-7355"
		]
	},
	{
		"_id" : ObjectId("578f57be7e6ddc606cdf58bf"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"2016",
			"Detached",
			"3-Storey",
			"50 x 110 Feet",
			"0x0",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5790ad7e7e6ddc5232b5e935"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2015",
			"Vacant Land",
			"315 x 200 Feet",
			"866-737-9958"
		]
	},
	{
		"_id" : ObjectId("5790ad817e6ddc5232b5e93d"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-13-K",
			"2015",
			"Detached",
			"2-Storey",
			"51.42 x 130.87 Feet",
			"2x4x2nd, 1x2xGround, 1x4xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5790ad937e6ddc5232b5e95d"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"120 x 120 Acres",
			"1x3",
			"905-476-0111"
		]
	},
	{
		"_id" : ObjectId("5790ad947e6ddc5232b5e95f"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rosemont",
			"Simcoe",
			"2015",
			"Detached",
			"Sidesplit 4",
			"240 x 190 Feet",
			"1x4xUpper, 1x2xUpper",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("5790ad947e6ddc5232b5e966"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-K",
			"2016",
			"Detached",
			"Bungaloft",
			"16.51 x 35.5 Metres",
			"1x4xUpper, 1x4xMain, 1x3xBsmt",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("579242977e6ddc7758e74336"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("579242977e6ddc7758e74338"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("579242997e6ddc7758e74345"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("579242997e6ddc7758e74347"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("579242ab7e6ddc7758e7435d"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("579242ab7e6ddc7758e7435f"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("579242ac7e6ddc7758e74365"),
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
		"_id" : ObjectId("579242ac7e6ddc7758e74366"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("579242c07e6ddc7758e74385"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-H",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("579242c07e6ddc7758e7438a"),
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
		"_id" : ObjectId("579242c17e6ddc7758e7438c"),
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
		"_id" : ObjectId("579242c17e6ddc7758e7438d"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("579242f97e6ddc7758e743ee"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-33-H",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("579242fb7e6ddc7758e743fa"),
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
		"_id" : ObjectId("579242fc7e6ddc7758e74403"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-T",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x2xMain, 1x4xLower",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("579242fc7e6ddc7758e74404"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x2xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("579242fc7e6ddc7758e74408"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x3, 1x4",
			"416-224-9995"
		]
	},
	{
		"_id" : ObjectId("57899fe4f65a5818794e73ee"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-12-N",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"16 x 120 Feet",
			"1x4x2nd, 1x4xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d7a047e6ddc390520a1ea"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"",
			"2015",
			"Vacant Land",
			"",
			"114 x 114 Acres",
			"",
			"",
			"",
			"",
			"905-640-8900"
		]
	},
	{
		"_id" : ObjectId("579743717e6ddc790c0b1e4a"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-22-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-987-8760"
		]
	},
	{
		"_id" : ObjectId("5797438d7e6ddc790c0b1eaf"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-13-B",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2x2nd, 2x4x3rd",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("5797439b7e6ddc790c0b1ece"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("5797439b7e6ddc790c0b1ecf"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5797439b7e6ddc790c0b1ed0"),
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
		"_id" : ObjectId("5797439c7e6ddc790c0b1ed1"),
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
		"_id" : ObjectId("5797439c7e6ddc790c0b1ed5"),
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
		"_id" : ObjectId("5797439d7e6ddc790c0b1edd"),
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
		"_id" : ObjectId("579743a07e6ddc790c0b1ee7"),
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
		"_id" : ObjectId("579743a07e6ddc790c0b1ee8"),
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
		"_id" : ObjectId("579743ba7e6ddc790c0b1f2b"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("579743bb7e6ddc790c0b1f30"),
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
		"_id" : ObjectId("579743bc7e6ddc790c0b1f39"),
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
		"_id" : ObjectId("579743bd7e6ddc790c0b1f46"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"2015",
			"Semi-Det Condo",
			"2-Storey",
			"2x4x2nd, 1x2x2nd, 1x4xBsmt",
			"905-405-8484"
		]
	},
	{
		"_id" : ObjectId("579743c77e6ddc790c0b1f65"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-335-3042"
		]
	},
	{
		"_id" : ObjectId("579896af7e6ddc6cbcfc18d1"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-R",
			"2015",
			"Store W/Apt/Offc",
			"3-Storey",
			"17.16 x 0 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xLower, 1x2xLower",
			"905-896-4622"
		]
	},
	{
		"_id" : ObjectId("579896b37e6ddc6cbcfc18df"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-17-E",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 165 Feet",
			"1x4xMain, 1x3xMain, 1x3xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("579896b67e6ddc6cbcfc18e9"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Detached",
			"Sidesplit 4",
			"59.25 x 122.35 Feet",
			"1x3, 1x4",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("579896bd7e6ddc6cbcfc18fa"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-31-P",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 125 Feet",
			"1x4xGround, 1x4xBsmt",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("579896c97e6ddc6cbcfc1917"),
		"Undefined" : [
			"Toronto E08",
			"Guildwood",
			"Toronto",
			"117-36-M",
			"2016",
			"Detached",
			"Backsplit 4",
			"50 x 110 Feet",
			"1x4xUpper, 1x2xLower",
			"416-461-0907"
		]
	},
	{
		"_id" : ObjectId("579896d27e6ddc6cbcfc193a"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"16 x 120 Feet",
			"1x3xMain, 1x4x2nd, 1x3xLower",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("5799e52b7e6ddc0c3a4d1018"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("5799e53b7e6ddc0c3a4d1049"),
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
		"_id" : ObjectId("5799e53b7e6ddc0c3a4d104a"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("5799e53b7e6ddc0c3a4d104b"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5799e53c7e6ddc0c3a4d1052"),
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
		"_id" : ObjectId("5799e53d7e6ddc0c3a4d1055"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"355-19-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5799e53d7e6ddc0c3a4d105b"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"905-737-5700"
		]
	},
	{
		"_id" : ObjectId("5799e55c7e6ddc0c3a4d10ab"),
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
		"_id" : ObjectId("5799e55d7e6ddc0c3a4d10af"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"453-49-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("5799e55e7e6ddc0c3a4d10b7"),
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
		"_id" : ObjectId("5799e55e7e6ddc0c3a4d10b8"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("5799e5607e6ddc0c3a4d10c3"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2014",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("5799e5607e6ddc0c3a4d10c4"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("5799e56c7e6ddc0c3a4d10ef"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"477-29-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 1x4",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("5799e56e7e6ddc0c3a4d10f8"),
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
		"_id" : ObjectId("5799e5dc7e6ddc0c3a4d11c8"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-18-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3xMain",
			"416-479-3891"
		]
	},
	{
		"_id" : ObjectId("579b34507e6ddc688ba18720"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2016",
			"Detached",
			"Bungalow",
			"33.5 x 115 Feet",
			"1x4xMain, 1x4xBsmt, 1x4xBsmt",
			"416-787-1712"
		]
	},
	{
		"_id" : ObjectId("579b34587e6ddc688ba1873b"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"115-23-Q",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"14.79 x 90 Feet",
			"1x4x2nd, 1x4xBsmt",
			"416-439-5155"
		]
	},
	{
		"_id" : ObjectId("579b34927e6ddc688ba187ea"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-26-V",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"57 x 100 Feet",
			"1x3xMain, 1x3xBsmt",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("579b34a87e6ddc688ba1882e"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-30-Z",
			"2016",
			"Detached",
			"2-Storey",
			"70.96 x 106 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("579b34a87e6ddc688ba18830"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-37-V",
			"2016",
			"Detached",
			"2-Storey",
			"59.28 x 115 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("579b34ad7e6ddc688ba1883e"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-L",
			"2015",
			"Detached",
			"2-Storey",
			"33.14 x 90.45 Feet",
			"1x2xMain, 1x3xUpper, 1x5xUpper",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("579b34b67e6ddc688ba18850"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"312-53-E",
			"2016",
			"Cottage",
			"Bungalow",
			"100 x 292.49 Feet",
			"0x0",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("579b34b67e6ddc688ba18851"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-35-T",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 136 Feet",
			"1x4xGround",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("579b34b67e6ddc688ba18852"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"12-32-C",
			"2015",
			"Detached",
			"Bungaloft",
			"50 x 133 Feet",
			"1x3xMain",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("579b34c97e6ddc688ba1888d"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"54.12 x 116 Feet",
			"1x4xGround, 2x3xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579b34d27e6ddc688ba188a7"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-28-S",
			"2016",
			"Vacant Land",
			"40 x 135 Feet",
			"905-240-7300"
		]
	},
	{
		"_id" : ObjectId("579b34d37e6ddc688ba188ac"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-26-U",
			"2016",
			"Detached",
			"Bungalow",
			"48 x 105 Feet",
			"1x4xMain",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("579b34f57e6ddc688ba18904"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Vacant Land",
			"117 x 180 Feet",
			"416-364-2036"
		]
	},
	{
		"_id" : ObjectId("579b34f67e6ddc688ba18909"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-C",
			"2016",
			"Vacant Land",
			"83.66 x 172 Feet",
			"705-435-4488"
		]
	},
	{
		"_id" : ObjectId("579b363f7e6ddc688ba18bfc"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Parking Space",
			"0",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("579c865b7e6ddc636fc86f70"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-S",
			"2015",
			"Detached",
			"Bungalow",
			"34 x 102 Feet",
			"1x4, 1x3",
			"905-238-8336"
		]
	},
	{
		"_id" : ObjectId("579c865c7e6ddc636fc86f75"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-6-L",
			"2015",
			"Detached",
			"Bungalow",
			"66 x 149 Feet",
			"1x4xMain, 1x4x2nd",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("579c865c7e6ddc636fc86f76"),
		"Undefined" : [
			"Toronto W09",
			"Humber Heights",
			"Toronto",
			"108-9-J",
			"2016",
			"Detached",
			"Sidesplit 5",
			"33.33 x 104.48 Feet",
			"1x4xUpper, 1x3xUpper, 1x2xGround",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("579c86727e6ddc636fc86fa9"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-A",
			"2015",
			"Detached",
			"2-Storey",
			"32.25 x 108 Feet",
			"1x2xMain, 1x3x2nd, 1x5x2nd",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("579c86727e6ddc636fc86fad"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"325-26-Y",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"40.57 x 114.83 Feet",
			"1x2xMain, 1x4xMain, 1x4xMain, 1x4xBsmt",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("579c868e7e6ddc636fc86ff0"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.07 x 88.58 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("579c869e7e6ddc636fc87020"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-31-C",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 84 Feet",
			"1x3xMain",
			"Workshop",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("579c869e7e6ddc636fc87021"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 200 Feet",
			"1x4xGround",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("579c86b37e6ddc636fc87056"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-22-M",
			"2015",
			"Detached",
			"2-Storey",
			"42.77 x 118.63 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xGround",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579c87167e6ddc636fc87153"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"32.15 x 81.2 Feet",
			"3x4, 1x2",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("57a9b8e57e6ddc4b02d337c5"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"331-26-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 100 Feet",
			"1x2xMain, 1x4x2nd",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("57a9b8e67e6ddc4b02d337cb"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"10.5 x 31.5 Metres",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("57a9b8e77e6ddc4b02d337d0"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2015",
			"Detached",
			"2-Storey",
			"36 x 95 Feet",
			"1x2xMain, 2x4x2nd",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("57a9b8fc7e6ddc4b02d3380b"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-5-Q",
			"2015",
			"Detached",
			"2-Storey",
			"195 x 609 Feet",
			"3x1, 1x2xMain, 1x2xBsmt, 1x5x2nd, 1x5x2nd",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("57ab08b77e6ddc5e80005b25"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"2015",
			"Vacant Land",
			"38.5 x 125 Feet",
			"416-363-3473"
		]
	},
	{
		"_id" : ObjectId("57ab092c7e6ddc5e80005c2f"),
		"Undefined" : [
			"East Gwillimbury",
			"Queensville",
			"York",
			"2016",
			"Vacant Land",
			"200 x 430.15 Feet",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("57ab09307e6ddc5e80005c3a"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"2015",
			"Vacant Land",
			"200 x 2678 Feet",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("57ac58e07e6ddc1fc1174f8e"),
		"Undefined" : [
			"Collingwood",
			"Collingwood",
			"Simcoe",
			"2016",
			"Vacant Land",
			"Other",
			"60 x 200 Feet",
			"705-445-5640"
		]
	},
	{
		"_id" : ObjectId("57ac58e47e6ddc1fc1174fa8"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2016",
			"Farm",
			"2-Storey",
			"112.04 x 0 Acres",
			"0x0",
			"905-939-2000"
		]
	},
	{
		"_id" : ObjectId("577d786f7e6ddc3805263d61"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-17-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"25.11 x 126.74 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-893-5339"
		]
	},
	{
		"_id" : ObjectId("577d786f7e6ddc3805263d62"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"16.01 x 82.12 Feet",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577d786f7e6ddc3805263d63"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-19-C",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"62.5 x 120 Feet",
			"1x4xGround, 1x3xBsmt, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577d786f7e6ddc3805263d64"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-D",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 130.25 Feet",
			"1x2xMain, 2x4x2nd, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577d786f7e6ddc3805263d65"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-21-H",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 125 Feet",
			"2x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("577d78727e6ddc3805263d66"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Detached",
			"Bungalow",
			"40.5 x 140 Feet",
			"1x3xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("577d78727e6ddc3805263d67"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-C",
			"2016",
			"Detached",
			"2-Storey",
			"98.66 x 123.83 Feet",
			"2x4x2nd, 1x3xGround, 1x3xBsmt, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d78727e6ddc3805263d68"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-24-F",
			"2016",
			"Detached",
			"2-Storey",
			"46.91 x 119.13 Feet",
			"1x5, 1x4, 1x3, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-483-4337"
		]
	},
	{
		"_id" : ObjectId("577d78727e6ddc3805263d69"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-D",
			"2015",
			"Detached",
			"2-Storey",
			"70 x 233.63 Feet",
			"1x3xGround, 2x2xGround, 1x5x2nd, 2x4x2nd, 2x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("577d78767e6ddc3805263d6a"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-30-P",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 155.25 Feet",
			"1x4, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("577d78767e6ddc3805263d6b"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-27-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20 x 118.5 Feet",
			"1x2xMain, 1x3x2nd, 1x3x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-840-6888"
		]
	},
	{
		"_id" : ObjectId("577d78767e6ddc3805263d6c"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2015",
			"Detached",
			"2-Storey",
			"20 x 100 Feet",
			"1x5xUpper, 1x2xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577d78767e6ddc3805263d6d"),
		"Undefined" : [
			"Toronto E03",
			"Broadview North",
			"Toronto",
			"115-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 315 Feet",
			"1x4x2nd, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d78817e6ddc3805263d6e"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"9.03 x 38.64 Metres",
			"1x2xMain, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("577d78817e6ddc3805263d6f"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"112-41-F",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 123 Feet",
			"1x4x2nd, 1x2xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("577d78817e6ddc3805263d70"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-C",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 110 Feet",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577d78817e6ddc3805263d71"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-38-D",
			"2015",
			"Detached",
			"Backsplit 4",
			"45 x 112 Feet",
			"1x4, 1x3, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577d78817e6ddc3805263d72"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"105-34-E",
			"2016",
			"Link",
			"3-Storey",
			"6.6 x 22 Metres",
			"1x4x2nd, 1x2x2nd, 1x2xGround",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577d78817e6ddc3805263d73"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-33-F",
			"2015",
			"Link",
			"Bungalow-Raised",
			"26.34 x 153.82 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d74"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-H",
			"2016",
			"Detached",
			"Bungalow",
			"46 x 106 Feet",
			"1x4xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-733-2666"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d75"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"25.37 x 101.5 Feet",
			"1x4, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d76"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-39-K",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 140.5 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"647-943-2823"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d77"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-H",
			"2015",
			"Detached",
			"Backsplit 3",
			"48 x 110 Feet",
			"1x4, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d78"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 190 Feet",
			"1x4xGround, 1x2xGround, 1x4xBsmt, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d79"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-29-E",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x2xGround, 1x4xGround",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d7a"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-N",
			"2016",
			"Detached",
			"2-Storey",
			"41.5 x 185.61 Feet",
			"1x4xUpper, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-699-2992"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d7b"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-30-M",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 125 Feet",
			"1x4xGround, 1x2, 1x1",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d7c"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-34-F",
			"2015",
			"Detached",
			"3-Storey",
			"24.61 x 88.5 Feet",
			"1x5x3rd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d7d"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-30-M",
			"2015",
			"Detached",
			"Bungalow",
			"42 x 125 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d7e"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-30-P",
			"2016",
			"Detached",
			"Bungalow",
			"40.06 x 226.67 Feet",
			"1x5xMain, 1x3xMain, 1x4xBsmt, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d7f"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-44-H",
			"2016",
			"Detached",
			"2-Storey",
			"71.12 x 119.64 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("577d78827e6ddc3805263d80"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"111-33-F",
			"2016",
			"Detached",
			"Backsplit 5",
			"51.05 x 132 Feet",
			"1x5, 1x4, 2x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d81"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-10-F",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"15.49 x 57.71 Feet",
			"1x4xMain, 2x4x3rd, 1x2x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-535-8000"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d82"),
		"Undefined" : [
			"Toronto W03",
			"Keelesdale-Eglinton West",
			"Toronto",
			"114-13-M",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"21 x 53.5 Feet",
			"1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d83"),
		"Undefined" : [
			"Toronto W05",
			"Black Creek",
			"Toronto",
			"102-12-A",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 120 Feet",
			"1x4xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d84"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-9-C",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"27 x 134 Feet",
			"1x3, 1x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-226-9777"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d85"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"108-9-F",
			"2015",
			"Detached",
			"Bungalow",
			"62.17 x 107.75 Feet",
			"1x3xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d86"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-7-B",
			"2015",
			"Detached",
			"Backsplit 4",
			"50 x 122 Feet",
			"1x2xUpper, 1x4x2nd, 1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577d78877e6ddc3805263d87"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-13-F",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 120 Feet",
			"1x4xMain, 1x3xBsmt",
			"Greenhouse",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("577d788b7e6ddc3805263d88"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"107-7-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"45 x 112 Feet",
			"1x4xUpper, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d788b7e6ddc3805263d89"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-7-U",
			"2016",
			"Detached",
			"Bungalow",
			"27.5 x 120 Feet",
			"1x4xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("577d788b7e6ddc3805263d8a"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-5-V",
			"2016",
			"Detached",
			"Bungalow",
			"46.5 x 100 Feet",
			"1x4xMain, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("577d788b7e6ddc3805263d8b"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-7-L",
			"2015",
			"Detached",
			"Bungalow",
			"100 x 132.5 Feet",
			"1x3xMain, 1x4xMain, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-833-0033"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a193"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-25-V",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"31.33 x 99.3 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a194"),
		"Undefined" : [
			"Aurora",
			"Aurora Grove",
			"York",
			"331-26-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"7.12 x 33.2 Metres",
			"1x2xMain, 1x4xUpper",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a195"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-28-U",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a196"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2015",
			"Detached",
			"Bungalow",
			"15.42 x 49.97 Metres",
			"1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a197"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-27-V",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"50 x 176 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a198"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-A",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"11.38 x 129.59 Feet",
			"1x2xBsmt, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a199"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-25-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30.2 x 86.94 Feet",
			"2x4xUpper, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a19a"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-Y",
			"2016",
			"Detached",
			"2-Storey",
			"49 x 109 Feet",
			"1x2, 1x3, 1x4, 1x5",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-364-2036"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a19b"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-U",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 87 Feet",
			"1x5x2nd, 1x3x2nd, 1x3x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-270-1111"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a19c"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-D",
			"2015",
			"Detached",
			"2-Storey",
			"51.45 x 127.54 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577d79bd7e6ddc390520a19d"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-B",
			"2015",
			"Detached",
			"2-Storey",
			"15.3 x 34 Metres",
			"2x4x2nd, 1x2xMain, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a19e"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"0 x 0 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a19f"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-7-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 100.73 Feet",
			"1x2xMain, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a0"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-18-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.1 x 122.41 Feet",
			"1x4, 2x3, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a1"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-5-V",
			"2016",
			"Detached",
			"2-Storey",
			"21.78 x 105.35 Feet",
			"1x2xGround, 1x4xGround, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a2"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-12-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"8.7 x 33.5 Metres",
			"1x2, 2x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a3"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-5-W",
			"2016",
			"Detached",
			"2-Storey",
			"38.06 x 110.48 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a4"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-W",
			"2016",
			"Detached",
			"2-Storey",
			"10.5 x 37.15 Metres",
			"1x4x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a5"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-R",
			"2016",
			"Detached",
			"2-Storey",
			"40.19 x 118.11 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a6"),
		"Undefined" : [
			"Vaughan",
			"Elder Mills",
			"York",
			"353-6-V",
			"2015",
			"Detached",
			"2-Storey",
			"37 x 213.16 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a7"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-S",
			"2015",
			"Detached",
			"Bungalow",
			"80 x 122.8 Feet",
			"1x4xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a8"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-18-U",
			"2015",
			"Detached",
			"2-Storey",
			"37.73 x 105.94 Feet",
			"3x4, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1a9"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-S",
			"2016",
			"Detached",
			"2-Storey",
			"54.13 x 119.75 Feet",
			"2x5, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1aa"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-Q",
			"2016",
			"Detached",
			"2-Storey",
			"34.85 x 154 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577d79c97e6ddc390520a1ac"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-18-V",
			"2015",
			"Detached",
			"2-Storey",
			"34.85 x 127.18 Feet",
			"2x5, 1x3, 1x4, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577d79cd7e6ddc390520a1ad"),
		"Undefined" : [
			"King",
			"Pottageville",
			"York",
			"324-12-Y",
			"2016",
			"Detached",
			"Bungalow",
			"102.29 x 200 Feet",
			"1x5, 1x4, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577d79cd7e6ddc390520a1ae"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"331-20-A",
			"2015",
			"Det W/Com Elements",
			"2-Storey",
			"65 x 166 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577d79cd7e6ddc390520a1af"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"",
			"2015",
			"Detached",
			"Bungalow",
			"223.07 x 543.78 Feet",
			"1x2, 1x4, 1x5, 1x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577d79d67e6ddc390520a1b0"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-39-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.5 x 113.7 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-633-6666"
		]
	},
	{
		"_id" : ObjectId("577d79d67e6ddc390520a1b1"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"6.1 x 32.1 Metres",
			"2x4x2nd, 1x2xGround",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("577d79d67e6ddc390520a1b2"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2015",
			"Link",
			"2-Storey",
			"30.02 x 115.5 Feet",
			"2x3x2nd, 1x2xGround, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577d79d67e6ddc390520a1b3"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-39-X",
			"2015",
			"Detached",
			"2-Storey",
			"34.12 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("577d79d67e6ddc390520a1b4"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"38.62 x 91.57 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577d79d67e6ddc390520a1b5"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-39-Y",
			"2015",
			"Detached",
			"2-Storey",
			"38.28 x 99 Feet",
			"1x2xMain, 1x2xBsmt, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-283-1555"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1b6"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2016",
			"Link",
			"2-Storey",
			"25 x 100 Feet",
			"3x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1b7"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-39-U",
			"2016",
			"Detached",
			"2-Storey",
			"48.26 x 104.99 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1b8"),
		"Undefined" : [
			"Markham",
			"Victoria Square",
			"York",
			"344-28-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"26.25 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"5",
			"Master",
			"2nd",
			"6.30",
			"4.20",
			"Coffered Ceiling",
			"5 Pc Ensuite",
			"W/I Closet",
			"6",
			"2nd Br",
			"2nd",
			"3.30",
			"3.12",
			"Double Closet",
			"",
			"",
			"7",
			"3rd Br",
			"2nd",
			"3.25",
			"2.97",
			"Double Closet",
			"",
			"",
			"8",
			"Laundry",
			"2nd",
			"1.83",
			"1.70",
			"Ceramic Floor",
			"Separate Rm",
			"",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1b9"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"26.25 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-415-1000"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1bc"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-29-U",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 114.83 Feet",
			"1x2xGround, 2x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1bd"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-24-X",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 115 Feet",
			"1x4, 1x3, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1be"),
		"Undefined" : [
			"Markham",
			"Victoria Square",
			"York",
			"344-29-P",
			"2016",
			"Detached",
			"Bungalow",
			"181.5 x 240 Feet",
			"1x4, 2x3, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-593-9305"
		]
	},
	{
		"_id" : ObjectId("577d79d77e6ddc390520a1bf"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-23-Z",
			"2015",
			"Detached",
			"2-Storey",
			"70 x 200 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("577d79d87e6ddc390520a1c0"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"339-42-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 107 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"647-497-7777"
		]
	},
	{
		"_id" : ObjectId("577d79d87e6ddc390520a1c1"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"339-42-F",
			"2015",
			"Vacant Land",
			"",
			"634.43 x 0 Feet",
			"",
			"",
			"",
			"",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("577d79db7e6ddc390520a1c2"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"319-24-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.64 x 104.99 Feet",
			"2x4x2nd, 1x2xGround",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("577d79db7e6ddc390520a1c3"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-26-N",
			"2016",
			"Detached",
			"Sidesplit 4",
			"103.25 x 163.55 Feet",
			"1x4x3rd, 1x3xBsmt, 1x2x3rd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577d79db7e6ddc390520a1c4"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"",
			"2015",
			"Detached",
			"Sidesplit 4",
			"280 x 470 Feet",
			"1x4, 1x3, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1c5"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-T",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 96 Feet",
			"1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1c6"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"",
			"2016",
			"Detached",
			"Bungalow",
			"58 x 0 Feet",
			"1x3",
			"",
			"",
			"",
			"416-461-0907"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1c7"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-D",
			"2015",
			"Detached",
			"2-Storey",
			"46 x 128 Feet",
			"1x3x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1c8"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-U",
			"2015",
			"Detached",
			"Bungalow",
			"100 x 116 Feet",
			"1x4xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1c9"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-33-A",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 125 Feet",
			"1x4xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1ca"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-U",
			"2015",
			"Detached",
			"Bungalow",
			"95 x 192 Feet",
			"1x4xMain, 1x2xMain, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-722-3211"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1cb"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-Z",
			"2016",
			"Detached",
			"Bungalow",
			"90 x 132 Feet",
			"1x4xGround, 2x4xBsmt, 1x6xGround",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-476-4337"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1cc"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-55-X",
			"2015",
			"Detached",
			"2-Storey",
			"96 x 190 Feet",
			"1x4xUpper, 1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-722-3211"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1cd"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-32-E",
			"2015",
			"Detached",
			"2-Storey",
			"44.95 x 90.22 Feet",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-764-3433"
		]
	},
	{
		"_id" : ObjectId("577d79e37e6ddc390520a1ce"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-V",
			"2016",
			"Detached",
			"2-Storey",
			"101 x 117 Feet",
			"1x5x2nd, 1x5x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-640-3131"
		]
	},
	{
		"_id" : ObjectId("577d79e77e6ddc390520a1cf"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2015",
			"Link",
			"2-Storey",
			"30 x 130 Feet",
			"1x2, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("577d79e77e6ddc390520a1d0"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"25.06 x 71.44 Feet",
			"2x4x3rd, 1x2x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("577d79e77e6ddc390520a1d1"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2015",
			"Detached",
			"2-Storey",
			"30.09 x 123.03 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("577d79e77e6ddc390520a1d2"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-8-P",
			"2016",
			"Detached",
			"2-Storey",
			"35 x 128 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-619-2100"
		]
	},
	{
		"_id" : ObjectId("577d79e77e6ddc390520a1d3"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2015",
			"Detached",
			"2-Storey",
			"46.59 x 109.91 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577d79ed7e6ddc390520a1d4"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-P",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.75 x 109.91 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("577d79ed7e6ddc390520a1d5"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-12-P",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 101.71 Feet",
			"1x2xGround, 2x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("577d79ed7e6ddc390520a1d6"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-P",
			"2016",
			"Detached",
			"2-Storey",
			"47.24 x 109.91 Feet",
			"1x2xMain, 1x4x3rd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("577d79ed7e6ddc390520a1d7"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"259-13-M",
			"2016",
			"Detached",
			"2-Storey",
			"42 x 92 Feet",
			"1x2, 1x4, 1x5",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-270-1111"
		]
	},
	{
		"_id" : ObjectId("577d79ed7e6ddc390520a1d8"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"41.99 x 89.01 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d79ed7e6ddc390520a1d9"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"267-10-N",
			"2016",
			"Detached",
			"2-Storey",
			"37.43 x 0 Feet",
			"1x2xMain, 1x4x2nd, 2x5x2nd, 2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577d79ee7e6ddc390520a1da"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-F",
			"2016",
			"Detached",
			"Bungalow",
			"39.37 x 108.46 Feet",
			"2x4xMain",
			"",
			"",
			"",
			"905-706-3131"
		]
	},
	{
		"_id" : ObjectId("577d79f57e6ddc390520a1db"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-27-R",
			"2015",
			"Duplex",
			"2-Storey",
			"22.83 x 78.5 Feet",
			"1x4x2nd, 1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577d79f67e6ddc390520a1dc"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-26-V",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.69 x 166.88 Feet",
			"1x3xUpper, 1x2xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577d79f67e6ddc390520a1dd"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-Q",
			"2015",
			"Detached",
			"Sidesplit 4",
			"50 x 152.96 Feet",
			"1x4xUpper, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("577d79f67e6ddc390520a1de"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-28-Q",
			"2016",
			"Detached",
			"2-Storey",
			"40.31 x 180.54 Feet",
			"1x2xGround, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("577d79f67e6ddc390520a1df"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-29-S",
			"2016",
			"Detached",
			"Sidesplit 4",
			"43 x 0 Feet",
			"1x2xMain, 1x4xUpper",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-430-2320"
		]
	},
	{
		"_id" : ObjectId("577d79f67e6ddc390520a1e0"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-29-M",
			"2015",
			"Detached",
			"2-Storey",
			"27.34 x 103.35 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-655-0840"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e3"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-39-T",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 170.38 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-233-2301"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e4"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-Q",
			"2016",
			"Detached",
			"Sidesplit 4",
			"106.67 x 150 Feet",
			"1x4xUpper, 1x2xMain, 1x1xUpper",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e5"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-V",
			"2015",
			"Detached",
			"Bungalow",
			"172.09 x 0 Feet",
			"2x4xMain, 1x2xMain",
			"",
			"",
			"",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e6"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-Q",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 101.82 Feet",
			"2x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-668-1511"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e7"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-X",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"42.09 x 85.9 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e8"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"58.01 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-697-1900"
		]
	},
	{
		"_id" : ObjectId("577d7a047e6ddc390520a1e9"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"225-15-H",
			"2016",
			"Detached",
			"Bungalow",
			"383 x 1137 Feet",
			"0x0",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-852-3050"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1eb"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"",
			"2015",
			"Vacant Land",
			"",
			"100 x 185 Feet",
			"",
			"",
			"",
			"",
			"905-737-5700"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1ec"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"",
			"2015",
			"Vacant Land",
			"",
			"80.4 x 148 Feet",
			"",
			"",
			"",
			"",
			"888-450-8301"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1ed"),
		"Undefined" : [
			"Orillia",
			"Orillia",
			"Simcoe",
			"",
			"2015",
			"Duplex",
			"2-Storey",
			"51.63 x 137 Feet",
			"1x3xMain, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1ee"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"509-21-N",
			"2016",
			"Other",
			"Bungalow",
			"",
			"1x3xMain, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"888-712-9994"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1ef"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"70 x 210.58 Feet",
			"1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f0"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 200 Feet",
			"1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f1"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-14-N",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 141 Feet",
			"1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f2"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"80.95 x 195.49 Feet",
			"2x4xMain, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f3"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"17.32 x 65.26 Feet",
			"1x2xMain, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f4"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"90 x 149.48 Feet",
			"1x4xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f5"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"60 x 105 Feet",
			"1x2xBsmt, 1x3x2nd, 1x5x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f6"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"4.8 x 34 Metres",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"705-739-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f7"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 108.43 Feet",
			"1x2xMain, 1x4xUpper",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-936-4216"
		]
	},
	{
		"_id" : ObjectId("577d7a177e6ddc390520a1f8"),
		"Undefined" : [
			"Barrie",
			"Letitia Heights",
			"Simcoe",
			"504-7-H",
			"2016",
			"Detached",
			"2-Storey",
			"71.51 x 110.3 Feet",
			"1x3x2nd, 1x5x2nd, 1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1f9"),
		"Undefined" : [
			"Barrie",
			"Bayshore",
			"Simcoe",
			"505-14-M",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"80 x 200 Feet",
			"1x4xGround, 1x2xGround, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1fa"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"40.85 x 112.8 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1fb"),
		"Undefined" : [
			"Springwater",
			"Hillsdale",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"114.83 x 196.62 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1fc"),
		"Undefined" : [
			"Severn",
			"Rural Severn",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"120 x 180 Feet",
			"1x2xMain, 1x4xUpper, 1x4xUpper",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1fd"),
		"Undefined" : [
			"Barrie",
			"South Shore",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"Bungalow",
			"74 x 111 Feet",
			"2x4xMain, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1fe"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"11.35 x 42.98 Metres",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a1ff"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-S",
			"2015",
			"Detached",
			"2-Storey",
			"40 x 150 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a200"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"501-7-C",
			"2015",
			"Detached",
			"Bungalow",
			"32 x 70.27 Metres",
			"2x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a201"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"501-7-C",
			"2015",
			"Detached",
			"2-Storey",
			"30.5 x 60.77 Metres",
			"2x4xUpper, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"705-728-8800"
		]
	},
	{
		"_id" : ObjectId("577d7a187e6ddc390520a202"),
		"Undefined" : [
			"Essa",
			"Rural Essa",
			"Simcoe",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"2.26 x 0 Acres",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577d7a1c7e6ddc390520a203"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 148.5 Feet",
			"1x4xUpper",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"519-940-0004"
		]
	},
	{
		"_id" : ObjectId("577d7a1c7e6ddc390520a204"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-44-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 100.3 Feet",
			"1x4xMain, 1x2xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"519-846-5588"
		]
	},
	{
		"_id" : ObjectId("577d7a1c7e6ddc390520a205"),
		"Undefined" : [
			"Melancthon",
			"Rural Melancthon",
			"Dufferin",
			"",
			"2015",
			"Detached",
			"Bungalow",
			"2 x 0 Acres",
			"1x5xMain, 1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"519-940-0004"
		]
	},
	{
		"_id" : ObjectId("577d7a1c7e6ddc390520a206"),
		"Undefined" : [
			"East Luther Grand Valley",
			"Rural East Luther Grand Valley",
			"Dufferin",
			"",
			"2015",
			"Detached",
			"Bungaloft",
			"264 x 165 Feet",
			"1x2xMain, 1x4xMain, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-450-3355"
		]
	},
	{
		"_id" : ObjectId("577d7a1c7e6ddc390520a207"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"",
			"2015",
			"Detached",
			"Sidesplit 5",
			"66.94 x 0 Feet",
			"1x4xUpper, 1x3xLower, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a208"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-B",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"42.25 x 113.97 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a209"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-L",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"17.75 x 121.61 Feet",
			"1x4xMain, 1x3xBsmt, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a20a"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-36-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.61 x 107.11 Feet",
			"1x2xMain, 2x3x2nd, 1x2xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a20b"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-M",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"30 x 139.2 Feet",
			"1x3, 2x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a20c"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-39-N",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"26.99 x 132.22 Feet",
			"2x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a20d"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-44-R",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-855-8700"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a20e"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.33 x 104.99 Feet",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a20f"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.95 x 110.99 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-290-6777"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a210"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-L",
			"2015",
			"Detached",
			"Bungalow",
			"51 x 144.23 Feet",
			"1x2xGround, 1x4xGround, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a211"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-44-L",
			"2016",
			"Detached",
			"Backsplit 4",
			"51.67 x 125.11 Feet",
			"1x4xUpper, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a212"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-G",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"44.47 x 95.29 Feet",
			"1x3x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a213"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-C",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 120 Feet",
			"1x5, 1x4, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a214"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-N",
			"2015",
			"Detached",
			"Bungalow",
			"64.67 x 129.3 Feet",
			"1x4xGround, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a215"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-33-K",
			"2016",
			"Detached",
			"2-Storey",
			"43.44 x 120 Feet",
			"1x2xMain, 2x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a216"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-H",
			"2016",
			"Detached",
			"2-Storey",
			"34.12 x 109.91 Feet",
			"2x4x2nd, 1x2xMain, 1x2xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a217"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-36-Q",
			"2016",
			"Detached",
			"2-Storey",
			"128 x 50 Feet",
			"1x2xGround, 1x2x2nd, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a218"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-35-L",
			"2016",
			"Detached",
			"2-Storey",
			"47.93 x 120.37 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a219"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"472-34-L",
			"2016",
			"Detached",
			"Backsplit 4",
			"51 x 125 Feet",
			"2x4xUpper, 1x2xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a21a"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-F",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 138.07 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-632-2199"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a21b"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"45.6 x 85.3 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a21c"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"479-43-R",
			"2016",
			"Detached",
			"2-Storey",
			"53.35 x 108.89 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a21d"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-D",
			"2015",
			"Detached",
			"2-Storey",
			"90.22 x 104.84 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577d7a327e6ddc390520a21e"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"458-38-D",
			"2015",
			"Detached",
			"2-Storey",
			"65.09 x 134.2 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577d7a337e6ddc390520a21f"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-37-S",
			"2015",
			"Detached",
			"2-Storey",
			"83 x 261.3 Feet",
			"1x2, 1x5, 1x5, 1x3, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-855-8700"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a220"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"",
			"2016",
			"Detached",
			"2-Storey",
			"29.7 x 62.2 Feet",
			"1x4, 1x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a221"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"451-40-W",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.98 x 108.26 Feet",
			"1x2, 1x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a222"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2015",
			"Detached",
			"2-Storey",
			"30.5 x 84 Feet",
			"1x4x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-502-9944"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a223"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"453-49-W",
			"2016",
			"Detached",
			"2-Storey",
			"30.51 x 109.91 Feet",
			"1x4, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a224"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-W",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"35 x 110 Feet",
			"1x4xUpper, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a226"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.34 x 109.91 Feet",
			"1x2xGround, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a4a7e6ddc390520a227"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"457-32-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"21.7 x 99.05 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a228"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"",
			"2016",
			"Detached",
			"2-Storey",
			"39.96 x 114.24 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a229"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"478-39-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.5 x 110 Feet",
			"1x2xMain, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a22a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.51 x 74.43 Feet",
			"1x2xMain, 2x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a22b"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"464-32-J",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 78.74 Feet",
			"1x4x2nd, 1x2xMain, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a22d"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"445-43-Q",
			"2016",
			"Detached",
			"2-Storey",
			"26.84 x 118.57 Feet",
			"1x2xMain, 1x4xUpper, 1x5xUpper, 1x3xBsmt, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a22f"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"",
			"2016",
			"Detached",
			"2-Storey",
			"34.45 x 106.63 Feet",
			"1x2xGround, 2x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a230"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-41-U",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 100.07 Feet",
			"1x2, 2x4",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a231"),
		"Undefined" : [
			"Brampton",
			"Bramalea North Industrial",
			"Peel",
			"446-51-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"9.15 x 26 Metres",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"416-213-1313"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a232"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 85.3 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a233"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-S",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 108.27 Feet",
			"2x4x2nd, 1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a234"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-42-P",
			"2015",
			"Detached",
			"2-Storey",
			"23 x 156 Feet",
			"1x5x2nd, 1x2xGround, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a235"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-S",
			"2015",
			"Detached",
			"2-Storey",
			"42 x 98.42 Feet",
			"2x4, 2x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a236"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"438-43-P",
			"2015",
			"Detached",
			"2-Storey",
			"41.01 x 93.5 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a237"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"17.95 x 144.91 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a238"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 78.74 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a239"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 105 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a23a"),
		"Undefined" : [
			"Brampton",
			"Gore Industrial North",
			"Peel",
			"446-52-T",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 89.9 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a23b"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"40.94 x 90.22 Feet",
			"1x2xMain, 2x5x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a23c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-52-Q",
			"2016",
			"Detached",
			"2-Storey",
			"50.2 x 85.3 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x4xBsmt, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a23d"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-54-U",
			"2015",
			"Detached",
			"2-Storey",
			"14.3 x 33 Metres",
			"1x3x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a23e"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"458-34-E",
			"2015",
			"Detached",
			"2-Storey",
			"42 x 103 Feet",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3xBsmt, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577d7a4b7e6ddc390520a23f"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"451-38-Y",
			"2016",
			"Detached",
			"2-Storey",
			"46.92 x 100.07 Feet",
			"1x5x2nd, 3x4x2nd, 1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a240"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21.1 x 0 Feet",
			"1x2x2nd, 1x4x3rd, 1x3x3rd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a241"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.98 x 85.3 Feet",
			"1x4x2nd, 1x2xFlat",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a242"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-N",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"22.92 x 77.24 Feet",
			"1x2x2nd, 2x4x3rd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-877-9001"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a243"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a244"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-23-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.01 x 120 Feet",
			"2x4x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a245"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"457-25-B",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.65 x 80.38 Feet",
			"2x4x2nd, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a246"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-24-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"32.6 x 80.38 Feet",
			"1x2xGround, 2x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a247"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-24-Z",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"26.16 x 104.99 Feet",
			"2x4, 1x2",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a248"),
		"Undefined" : [
			"Milton",
			"Dorset Park",
			"Halton",
			"449-23-Z",
			"2016",
			"Detached",
			"Bungalow",
			"45.46 x 197.54 Feet",
			"1x4xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577d7a5c7e6ddc390520a249"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-25-C",
			"2015",
			"Detached",
			"2-Storey",
			"63.5 x 82.3 Feet",
			"2x4x2nd, 1x2xGround, 1x2xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a24a"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-B",
			"2016",
			"Detached",
			"2-Storey",
			"36 x 90 Feet",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a24b"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-B",
			"2016",
			"Detached",
			"2-Storey",
			"34.02 x 93.96 Feet",
			"2x4x2nd, 1x2x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"416-264-1111"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a24c"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"456-25-A",
			"2016",
			"Detached",
			"2-Storey",
			"55.51 x 104.4 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a24d"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-A",
			"2016",
			"Detached",
			"2-Storey",
			"38.06 x 88.58 Feet",
			"1x5x2nd, 1x3x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-693-9575"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a24e"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"",
			"2015",
			"Detached",
			"Bungalow",
			"6.18 x 6.18 Acres",
			"1x4xMain, 1x3xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a24f"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"100 x 367.45 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x2xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577d7a5d7e6ddc390520a250"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-25-C",
			"2016",
			"Detached",
			"2-Storey",
			"56 x 80.03 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-877-2630"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a251"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-21-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.04 x 82.02 Feet",
			"1x2xMain, 1x3x2nd, 1x3x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a252"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"471-28-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"27 x 116.69 Feet",
			"1x5x2nd, 1x2xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a253"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"470-22-P",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"77 x 147 Feet",
			"1x4xGround, 1x4xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a254"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-27-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.61 x 101.44 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a255"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-20-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.69 x 133 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a256"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-28-N",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 118.11 Feet",
			"1x2xMain, 2x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a257"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"",
			"2016",
			"Detached",
			"Bungalow",
			"64 x 142 Feet",
			"1x3xMain, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a258"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-N",
			"2016",
			"Detached",
			"2-Storey",
			"27.58 x 108.21 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-637-1700"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a259"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 88.58 Feet",
			"1x2xGround, 1x3xBsmt, 2x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-279-8888"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a25a"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-30-S",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"75 x 150 Feet",
			"1x4xMain, 1x3xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a25b"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-U",
			"2015",
			"Detached",
			"2-Storey",
			"75 x 155.38 Feet",
			"1x6x2nd, 1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a25c"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"",
			"2015",
			"Detached",
			"2-Storey",
			"103.18 x 146.49 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x3x2nd, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577d7a657e6ddc390520a25d"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-31-U",
			"2016",
			"Detached",
			"2-Storey",
			"202 x 383.2 Feet",
			"1x2xMain, 1x5xMain, 2x3x2nd, 1x4x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-845-1223"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a25e"),
		"Undefined" : [
			"Burlington",
			"Brant Hills",
			"Halton",
			"469-11-N",
			"2016",
			"Detached",
			"Backsplit 4",
			"50 x 114 Feet",
			"1x2xGround, 1x2x2nd, 1x4x3rd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-335-8808"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a25f"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-14-N",
			"2016",
			"Detached",
			"Bungalow",
			"32.81 x 109.91 Feet",
			"1x5, 1x3",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a260"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-T",
			"2016",
			"Detached",
			"Bungalow",
			"63 x 138 Feet",
			"1x4xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a261"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-U",
			"2016",
			"Detached",
			"Backsplit 3",
			"122 x 60 Feet",
			"1x3xLower, 1x4xMain",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-681-7900"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a262"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"",
			"2016",
			"Detached",
			"2-Storey",
			"48.43 x 128.54 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a263"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"469-14-M",
			"2015",
			"Detached",
			"2-Storey",
			"82.02 x 36.09 Feet",
			"1x2x2nd, 1x4x2nd, 1x5x2nd",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a264"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"475-13-U",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"115 x 70 Feet",
			"1x4xMain, 1x3xLower",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577d7a6c7e6ddc390520a265"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"474-7-T",
			"2015",
			"Detached",
			"2-Storey",
			"75 x 162 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"905-257-3633"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a266"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a267"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a268"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a269"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a26a"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a26b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-883-0095"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a26c"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a26d"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a26e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a26f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a270"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-17-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a271"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-415-2121"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a272"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a273"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-363-3473"
		]
	},
	{
		"_id" : ObjectId("577d7b207e6ddc390520a274"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-604-2299"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a275"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a276"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a277"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-969-7172"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a278"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a279"),
		"Undefined" : [
			"Toronto C11",
			"Thorncliffe Park",
			"Toronto",
			"115-23-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a27a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a27b"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2016",
			"Comm Element Condo",
			"Multi-Level",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a27c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a27d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a27e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a27f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a280"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a281"),
		"Undefined" : [
			"Toronto C08",
			"North St. James Town",
			"Toronto",
			"115-20-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a282"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4xUpper",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-222-2600"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a283"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a284"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a285"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-229-0515"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a286"),
		"Undefined" : [
			"Toronto C01",
			"Dufferin Grove",
			"Toronto",
			"114-14-Q",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x3x3rd, 1x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a287"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x3xMain, 1x4xUpper",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a288"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a289"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-487-4311"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a28a"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d7b217e6ddc390520a28b"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat, 1x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("577d7b387e6ddc390520a28c"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577d7b387e6ddc390520a28d"),
		"Undefined" : [
			"Toronto C04",
			"Forest Hill North",
			"Toronto",
			"109-17-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a28e"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a28f"),
		"Undefined" : [
			"Toronto C13",
			"Victoria Village",
			"Toronto",
			"116-27-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-298-3200"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a290"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a291"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-27-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a292"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a293"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a294"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-18-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-635-1232"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a295"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"108-16-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a296"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-E",
			"2016",
			"Condo Apt",
			"3-Storey",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a297"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a298"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-240-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a299"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a29a"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park South",
			"Toronto",
			"109-19-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a29b"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-223-8833"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a29c"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-901-8881"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a29d"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a29e"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a29f"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a0"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a1"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd, 1x2xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a2"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a3"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a4"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a5"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"108-16-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a6"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a7"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-20-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-637-8000"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a8"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-20-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577d7b397e6ddc390520a2a9"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-292-5433"
		]
	},
	{
		"_id" : ObjectId("577d7b3a7e6ddc390520a2aa"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x5xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577d7b487e6ddc390520a2ab"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577d7b487e6ddc390520a2ac"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-J",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("577d7b487e6ddc390520a2ad"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-J",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4xMain, 1x2xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("577d7b487e6ddc390520a2ae"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"116-32-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-298-3200"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2af"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b0"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b1"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b2"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"117-33-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b3"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b4"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-666-0000"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b5"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-J",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"2x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b6"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b7"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"112-41-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b8"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"110-31-K",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3x3rd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-298-6000"
		]
	},
	{
		"_id" : ObjectId("577d7b497e6ddc390520a2b9"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-33-B",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x4xBsmt",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2bb"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-9-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2bc"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"101-8-C",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2be"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2bf"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2c0"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-12-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-364-2036"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2c1"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577d7b567e6ddc390520a2c3"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-847-0920"
		]
	},
	{
		"_id" : ObjectId("577d7b577e6ddc390520a2c4"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-12-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, Main, Main, Main",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-507-9844"
		]
	},
	{
		"_id" : ObjectId("577d7b577e6ddc390520a2c5"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-856-1111"
		]
	},
	{
		"_id" : ObjectId("577d7b577e6ddc390520a2c6"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("577d7b577e6ddc390520a2c7"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b577e6ddc390520a2c8"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-N",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd, 1x3x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("577d7b577e6ddc390520a2c9"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"114-10-P",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4, 1x4, 1x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2ca"),
		"Undefined" : [
			"King",
			"Schomberg",
			"York",
			"323-7-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"416-691-3000"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2cb"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-832-1111"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2cc"),
		"Undefined" : [
			"Richmond Hill",
			"South Richvale",
			"York",
			"349-22-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-604-5600"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2cd"),
		"Undefined" : [
			"Richmond Hill",
			"Beaver Creek Business Park",
			"York",
			"355-26-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2ce"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-X",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xBsmt",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-251-5438"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2cf"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-21-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-646-8833"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d0"),
		"Undefined" : [
			"Markham",
			"Commerce Valley",
			"York",
			"355-25-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d1"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"355-19-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d2"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d3"),
		"Undefined" : [
			"Richmond Hill",
			"Beaver Creek Business Park",
			"York",
			"355-26-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x5",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d4"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-38-V",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d5"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d6"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d7"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d8"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577d7b637e6ddc390520a2d9"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577d7b677e6ddc390520a2da"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-L",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2xGround",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577d7b677e6ddc390520a2db"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577d7b677e6ddc390520a2dc"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-683-2100"
		]
	},
	{
		"_id" : ObjectId("577d7b677e6ddc390520a2dd"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-N",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2de"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2df"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e0"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"453-49-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"647-205-2777"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e1"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e2"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-584-2727"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e4"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e5"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-44-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e6"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e7"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e8"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2e9"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain",
			"",
			"",
			"416-224-9995"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2ea"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2eb"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2ec"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-43-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2ed"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-338-0909"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2ee"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x4xBsmt",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2ef"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f0"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-F",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f1"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f2"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-249-8282"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f3"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-34-H",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-232-2100"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f4"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-P",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x3rd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f5"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"458-40-B",
			"2016",
			"Condo Apt",
			"Loft",
			"1x2xMain, 2x4xUpper",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"905-997-6000"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f6"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-B",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x3xUpper, 1x2xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("577d7b817e6ddc390520a2f7"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"2x2, 2x4",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577d7b827e6ddc390520a2f8"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-R",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 2x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("577d7b827e6ddc390520a2f9"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-40-A",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x3x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577d7b827e6ddc390520a2fa"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-36-F",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 2x4x2nd, 1x4xBsmt",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577d7b827e6ddc390520a2fb"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-44-K",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x3, 1x2",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577d7b827e6ddc390520a2fc"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4xGround, 1x2x2nd, 2x4x3rd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a2fd"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"469-13-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xGround",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a2fe"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"416-229-4835"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a2ff"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-25-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a300"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-22-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a301"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x5x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a302"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-25-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a303"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"470-23-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a304"),
		"Undefined" : [
			"Oakville",
			"Uptown Core",
			"Halton",
			"471-27-N",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"905-997-7653"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a305"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"470-23-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xGround, 1x5xGround",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577d7b8d7e6ddc390520a306"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-27-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x3xMain, 1x2xMain",
			"",
			"",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577de2ea7e6ddc7bb4a74d06"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"114-16-N",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"18.02 x 70 Feet",
			"1x4xMain, 1x4xBsmt, 1x4x2nd",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577de2ea7e6ddc7bb4a74d07"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"36 x 101 Feet",
			"1x2xMain, 1x5x2nd, 1x5x3rd, 1x3xBsmt",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("577de2ea7e6ddc7bb4a74d08"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-P",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"37.5 x 112 Feet",
			"1x4x2nd, 1x2xLower",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("577de2ee7e6ddc7bb4a74d10"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.54 x 120 Feet",
			"1x4x2nd, 1x2xBsmt",
			"416-901-8881"
		]
	},
	{
		"_id" : ObjectId("577de2ee7e6ddc7bb4a74d11"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-H",
			"2016",
			"Detached",
			"Bungalow",
			"41.92 x 115 Feet",
			"2x4",
			"416-785-1500"
		]
	},
	{
		"_id" : ObjectId("577de2ee7e6ddc7bb4a74d12"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"2016",
			"Detached",
			"Backsplit 3",
			"52.17 x 121 Feet",
			"1x4x2nd, 1x2xGround, 1x1xLower",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("577de2ee7e6ddc7bb4a74d13"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"102-16-D",
			"2016",
			"Detached",
			"2-Storey",
			"56.1 x 115.03 Feet",
			"1x6x2nd, 1x3x2nd, 1x2xGround, 1x4x2nd, 1x4xBsmt",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("577de2f47e6ddc7bb4a74d1c"),
		"Undefined" : [
			"Toronto C13",
			"Victoria Village",
			"Toronto",
			"110-27-K",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"29.09 x 125 Feet",
			"1x3xGround, 1x3xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577de2f47e6ddc7bb4a74d1d"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-C",
			"2015",
			"Link",
			"2-Storey",
			"30 x 150 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("577de2f47e6ddc7bb4a74d1e"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-A",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 122.5 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de2f47e6ddc7bb4a74d1f"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-H",
			"2015",
			"Detached",
			"Other",
			"29.21 x 173 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xMain, 1x2xLower",
			"416-340-8900"
		]
	},
	{
		"_id" : ObjectId("577de2f47e6ddc7bb4a74d20"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-23-F",
			"2016",
			"Detached",
			"2-Storey",
			"55 x 190 Feet",
			"1x6x2nd, 2x4x2nd, 2x3x2nd, 2x2xGround, 2x3xBsmt",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d2a"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"116-27-Q",
			"2016",
			"Detached",
			"2-Storey",
			"17 x 118 Feet",
			"1x4x2nd",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d2b"),
		"Undefined" : [
			"Toronto E03",
			"Danforth Village-East York",
			"Toronto",
			"115-24-P",
			"2016",
			"Detached",
			"2-Storey",
			"18.21 x 94.1 Feet",
			"1x4x2nd",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d2c"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"18.17 x 82 Feet",
			"1x3x2nd",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d2d"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"115-24-N",
			"2016",
			"Detached",
			"Bungalow",
			"31.7 x 110 Feet",
			"1x4, 1x3",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d2e"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"18.31 x 100 Feet",
			"1x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d2f"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-22-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20 x 118 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("577de2f97e6ddc7bb4a74d30"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-26-S",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"21 x 115 Feet",
			"1x2xMain, 1x4x2nd, 1x4x3rd, 1x3xBsmt",
			"416-694-2499"
		]
	},
	{
		"_id" : ObjectId("577de3047e6ddc7bb4a74d45"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-38-E",
			"2015",
			"Link",
			"2-Storey",
			"20.17 x 112.36 Feet",
			"1x2xMain, 1x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577de3047e6ddc7bb4a74d46"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 110.37 Feet",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-707-0188"
		]
	},
	{
		"_id" : ObjectId("577de3047e6ddc7bb4a74d47"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"112-42-G",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"17.36 x 81.17 Feet",
			"2x4x2nd, 1x2xMain",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577de3047e6ddc7bb4a74d48"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-31-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"55.44 x 131.38 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577de3047e6ddc7bb4a74d49"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-37-F",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 100 Feet",
			"1x2, 1x4x2nd, 1x3xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577de3047e6ddc7bb4a74d4a"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-43-J",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"25.72 x 82.02 Feet",
			"2x4x2nd, 1x3xGround",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d4b"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-30-F",
			"2015",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 110 Feet",
			"1x4xGround, 1x4x2nd, 1x3x3rd",
			"905-604-8166"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d4c"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-38-C",
			"2015",
			"Detached",
			"2-Storey",
			"40.18 x 115.27 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xGround, 1x2xIn Betwn",
			"416-218-1117"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d4d"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2015",
			"Semi-Detached",
			"Backsplit 4",
			"35 x 110 Feet",
			"1x4xUpper, 1x2xLower, 1x4xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d4e"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-B",
			"2016",
			"Detached",
			"2-Storey",
			"38.55 x 90.22 Feet",
			"2x4x2nd, 1x2xMain",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d50"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Sidesplit 4",
			"78 x 118 Feet",
			"1x4x2nd, 1x3xLower",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d51"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"65 x 150 Feet",
			"1x4xMain, 1x2xBsmt",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d52"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 172 Feet",
			"1x4, 1x2",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d53"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-31-D",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 150 Feet",
			"2x3",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d54"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-D",
			"2016",
			"Detached",
			"2-Storey",
			"39.51 x 200.4 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xMain, 1x4xBsmt",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d55"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-28-B",
			"2016",
			"Detached",
			"2-Storey",
			"53.5 x 112.86 Feet",
			"1x3xBsmt, 1x2xGround, 2x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de3057e6ddc7bb4a74d56"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"104-32-A",
			"2015",
			"Detached",
			"2-Storey",
			"35.3 x 111.93 Feet",
			"2x4x2nd, 1x2xGround, 2x4xBsmt, 1x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d63"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-10-F",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"30.74 x 60 Feet",
			"2x4xUpper, 1x2xUpper",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d64"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"114-12-L",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 102 Feet",
			"1x4, 1x2",
			"416-535-8000"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d65"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-N",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"17.5 x 100 Feet",
			"1x4x2nd, 1x2xMain",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d66"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-12-F",
			"2016",
			"Detached",
			"Sidesplit 4",
			"50 x 120 Feet",
			"1x5xMain, 1x3xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d67"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-15-G",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"51 x 137.5 Feet",
			"1x3, 0x0, 0x0, 0x0",
			"416-482-8662"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d68"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-7-A",
			"2015",
			"Detached",
			"2-Storey",
			"55 x 97.45 Feet",
			"1x5, 1x4, 1x3, 1x2",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d69"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-H",
			"2016",
			"Detached",
			"2-Storey",
			"33.5 x 100 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-535-8000"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d6a"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2016",
			"Detached",
			"2-Storey",
			"26.75 x 130 Feet",
			"1x5, 1x4, 1x3",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("577de30b7e6ddc7bb4a74d6b"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 129.42 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de3117e6ddc7bb4a74d75"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-E",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 113 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("577de3117e6ddc7bb4a74d76"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-4-C",
			"2016",
			"Detached",
			"2-Storey",
			"35 x 85 Feet",
			"1x2, 1x4, 1x3",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de3117e6ddc7bb4a74d77"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-S",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"40.12 x 60.86 Feet",
			"1x2, 1x4, 1x5",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("577de3117e6ddc7bb4a74d78"),
		"Undefined" : [
			"Toronto W06",
			"Alderwood",
			"Toronto",
			"118-5-T",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 125 Feet",
			"1x4xMain, 1x2xBsmt",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577de3117e6ddc7bb4a74d79"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-S",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"22 x 50.46 Feet",
			"1x4x2nd, 1x5x3rd, 1x3xBsmt",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("577de3117e6ddc7bb4a74d7a"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-8-J",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"50 x 144.75 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577de31a7e6ddc7bb4a74d89"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-G",
			"2015",
			"Link",
			"2-Storey",
			"23 x 95.47 Feet",
			"1x2xMain, 2x4xUpper",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577de31a7e6ddc7bb4a74d8a"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-20-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"31 x 105 Feet",
			"1x5xUpper, 2x4xUpper, 1x2xMain",
			"416-398-5035"
		]
	},
	{
		"_id" : ObjectId("577de31a7e6ddc7bb4a74d8b"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-J",
			"2015",
			"Detached",
			"2-Storey",
			"45 x 83.01 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d8c"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"34.45 x 109.91 Feet",
			"1x2xGround, 2x4x2nd",
			"905-881-2888"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d8d"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-22-Q",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 107.33 Feet",
			"2x3, 1x2",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d8e"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-20-N",
			"2015",
			"Detached",
			"2-Storey",
			"31.32 x 118 Feet",
			"2x5x2nd, 1x2xMain, 2x4xBsmt",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d8f"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"49.35 x 107.27 Feet",
			"1x4, 0x3, 2x2",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d90"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-J",
			"2015",
			"Detached",
			"2-Storey",
			"45 x 83.01 Feet",
			"1x4x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d91"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 110 Feet",
			"1x4, 2x2",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d92"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-G",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 109.91 Feet",
			"1x2xMain, 3x4x2nd, 1x3xBsmt",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d93"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-F",
			"2015",
			"Detached",
			"2-Storey",
			"59.77 x 135.2 Feet",
			"1x5, 1x2xMain, 1x4",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d94"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-G",
			"2016",
			"Detached",
			"2-Storey",
			"65.62 x 137 Feet",
			"1x3xGround, 1x5x2nd, 1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"905-775-5677"
		]
	},
	{
		"_id" : ObjectId("577de31b7e6ddc7bb4a74d95"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-24-N",
			"2015",
			"Detached",
			"2-Storey",
			"35.96 x 136.61 Feet",
			"1x5x2nd, 1x3x2nd, 1x5x2nd, 2x2, 1x4xBsmt",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74daa"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-26-V",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"38.99 x 95 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74dab"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-X",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.59 x 86.94 Feet",
			"2x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74dac"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-X",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 123 Feet",
			"2x4x2nd, 1x2xGround",
			"416-529-1759"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74dad"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"31.12 x 90.88 Feet",
			"2x4x2nd, 1x2xMain",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74dae"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.34 x 105 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-251-5438"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74daf"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-25-A",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"23.62 x 108.27 Feet",
			"1x2xMain, 1x5, 1x3xBsmt, 1x4",
			"905-508-8787"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db0"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"35 x 110 Feet",
			"1x4xMain, 1x3xLower",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db1"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-25-U",
			"2015",
			"Detached",
			"Backsplit 4",
			"33.89 x 166.89 Feet",
			"1x4xUpper, 1x4xLower",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db2"),
		"Undefined" : [
			"Aurora",
			"Aurora Grove",
			"York",
			"331-25-C",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"65.75 x 110 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-773-7771"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db3"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-29-V",
			"2016",
			"Detached",
			"2-Storey",
			"43.55 x 104.62 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db4"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-X",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.1 x 97.44 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-775-5557"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db5"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-28-W",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 103 Feet",
			"1x6xMain, 1x3xBsmt",
			"877-895-5972"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db6"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-28-W",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 111.42 Feet",
			"1x2xMain, 2x4x2nd",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db7"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 90 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db8"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"40.32 x 303.45 Feet",
			"2x4x2nd, 1x2xGround",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74db9"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"325-26-Y",
			"2015",
			"Detached",
			"2-Storey",
			"59.64 x 98.43 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x2xBsmt",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74dba"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-Y",
			"2015",
			"Detached",
			"Bungalow",
			"18.15 x 40.59 Metres",
			"1x5xGround, 1x4xGround, 1x4xBsmt",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577de3287e6ddc7bb4a74dbb"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-D",
			"2016",
			"Detached",
			"2-Storey",
			"59.51 x 412 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x6x2nd",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dca"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-10-X",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 98.43 Feet",
			"1x3x2nd, 1x4x2nd, 1x2xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dcb"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-12-T",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.67 x 82.02 Feet",
			"1x4x2nd, 1x2xMain",
			"905-477-2789"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dcc"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-6-T",
			"3639",
			"Semi-Detached",
			"2-Storey",
			"25 x 109.91 Feet",
			"2x4x2nd, 1x2xMain",
			"289-357-3000"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dcd"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-6-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 87.34 Feet",
			"2x4x2nd, 1x2xMain",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dce"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-R",
			"2015",
			"Detached",
			"Bungalow",
			"42.24 x 138.37 Feet",
			"3x4xMain, 5xMain, 3xLower",
			"905-897-5000"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dcf"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-W",
			"2015",
			"Detached",
			"Bungalow",
			"70.23 x 120 Feet",
			"1x2xMain, 1x5xMain, 1x4xBsmt",
			"905-856-1111"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dd0"),
		"Undefined" : [
			"Vaughan",
			"Elder Mills",
			"York",
			"353-5-V",
			"2015",
			"Detached",
			"2-Storey",
			"46.23 x 132.68 Feet",
			"2x2, 1x4, 1x5",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dd1"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-6-S",
			"2015",
			"Detached",
			"2-Storey",
			"41 x 110 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"905-879-7653"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dd2"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"55.22 x 111.52 Feet",
			"1x1xMain, 1x5xUpper, 1x3xUpper",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dd3"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-3-R",
			"2015",
			"Detached",
			"2-Storey",
			"27.92 x 113.77 Feet",
			"1x4x2nd, 1x2xMain, 2x3x2nd",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dd4"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-18-Z",
			"2015",
			"Detached",
			"2-Storey",
			"31.5 x 185.04 Feet",
			"1x2xGround, 1x6x2nd, 1x5x2nd, 1x3xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577de3327e6ddc7bb4a74dd5"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-8-W",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"167 x 130 Feet",
			"2x3xMain, 1x3xLower",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577de3347e6ddc7bb4a74dda"),
		"Undefined" : [
			"King",
			"Schomberg",
			"York",
			"323-8-V",
			"2016",
			"Detached",
			"2-Storey",
			"12.82 x 31.1 Metres",
			"1x2xGround, 1x4x2nd, 1x5x2nd",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("577de3347e6ddc7bb4a74ddb"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"253.58 x 271 Feet",
			"1x4xMain, 1x3xMain, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577de3437e6ddc7bb4a74df3"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-39-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"23.79 x 104.99 Feet",
			"2x4, 1x3, 1x2",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577de3437e6ddc7bb4a74df4"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-T",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 88.58 Feet",
			"2x4x2nd, 1x2xGround",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577de3437e6ddc7bb4a74df5"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-S",
			"2015",
			"Link",
			"2-Storey",
			"29.52 x 86.71 Feet",
			"1x6x2nd, 1x4x2nd, 1x2xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("577de3437e6ddc7bb4a74df6"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2015",
			"Link",
			"2-Storey",
			"29.56 x 111.58 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd, 1x4xBsmt",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("577de3437e6ddc7bb4a74df7"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-S",
			"2015",
			"Detached",
			"2-Storey",
			"35 x 102 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74df8"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-40-U",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 82.02 Feet",
			"2x4, 1x2",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74df9"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"350-34-U",
			"2016",
			"Detached",
			"2-Storey",
			"45.11 x 109.91 Feet",
			"2x4x2nd, 1x2xMain",
			"905-707-1188"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74dfa"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"351-36-U",
			"2016",
			"Detached",
			"2-Storey",
			"53.39 x 108 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"416-733-2666"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74dfb"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"351-36-U",
			"2016",
			"Detached",
			"2-Storey",
			"50.2 x 112.56 Feet",
			"1x2xMain, 1x5xUpper, 1x5xUpper, 1x3xLower",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74dfc"),
		"Undefined" : [
			"Markham",
			"Bullock",
			"York",
			"357-36-V",
			"2016",
			"Detached",
			"Bungalow",
			"34.97 x 143.7 Feet",
			"1x4xMain, 1x4xLower",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74dfd"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-31-Z",
			"2016",
			"Detached",
			"2-Storey",
			"28.03 x 0 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 2x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74dfe"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-T",
			"2016",
			"Detached",
			"2-Storey",
			"58.27 x 87.17 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xGround",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74dff"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-S",
			"2016",
			"Detached",
			"2-Storey",
			"38.06 x 98.43 Feet",
			"1x2xMain, 1x6x2nd, 2x5x2nd",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e00"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-34-T",
			"2015",
			"Detached",
			"2-Storey",
			"42 x 85.31 Feet",
			"1x5, 2x2, 1x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e01"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-S",
			"2016",
			"Detached",
			"2-Storey",
			"46 x 92 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e02"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-S",
			"2015",
			"Detached",
			"3-Storey",
			"41.01 x 84 Feet",
			"1x3xMain, 1x2xIn Betwn, 2x4x3rd, 1x4x3rd",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e03"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-28-S",
			"2015",
			"Detached",
			"2-Storey",
			"49.21 x 114.83 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e04"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-30-U",
			"2015",
			"Detached",
			"2-Storey",
			"50.19 x 125 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x4xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e05"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-27-Y",
			"2015",
			"Detached",
			"Bungalow",
			"100 x 180 Feet",
			"1x2, 1x4",
			"416-289-3000"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e06"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-30-U",
			"2015",
			"Detached",
			"3-Storey",
			"55 x 125 Feet",
			"1x2xMain, 3x4x2nd, 1x6x3rd, 1x3xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e07"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-31-U",
			"2015",
			"Detached",
			"Sidesplit 5",
			"75 x 130 Feet",
			"1x2xIn Betwn, 1x3xBsmt, 1x5xUpper, 1x4xUpper",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("577de3447e6ddc7bb4a74e08"),
		"Undefined" : [
			"Markham",
			"Devil's Elbow",
			"York",
			"350-29-S",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"150 x 300 Feet",
			"2x3xGround, 1x3xLower",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("577de3467e6ddc7bb4a74e0c"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-38-K",
			"2016",
			"Att/Row/Twnhouse",
			"Bungaloft",
			"8 x 36.91 Metres",
			"1x4xMain, 1x2xMain, 1x4x2nd",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("577de3467e6ddc7bb4a74e0d"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2016",
			"Detached",
			"2-Storey",
			"42.09 x 120.15 Feet",
			"1x5x2nd, 1x5x2nd, 1x3x2nd, 1x2xMain",
			"800-263-3434"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e1a"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"60 x 240 Feet",
			"1x4xMain",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e1b"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"312-54-D",
			"2016",
			"Cottage",
			"Bungalow",
			"113 x 190 Feet",
			"0x0",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e1c"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-31-C",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 127 Feet",
			"1x4xMain",
			"905-476-4329"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e1d"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"27.17 x 97.6 Feet",
			"1x2xMain, 2x4x2nd",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e1e"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-31-Y",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"14.8 x 31 Metres",
			"2x4xGround, 1x2xBsmt",
			"905-476-4337"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e1f"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-33-B",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 103.35 Feet",
			"1x5xUpper, 1x4xUpper, 1x3xBsmt, 1x2xMain",
			"705-738-2378"
		]
	},
	{
		"_id" : ObjectId("577de34d7e6ddc7bb4a74e20"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-U",
			"2015",
			"Detached",
			"Bungalow",
			"184 x 602 Feet",
			"1x5xGround, 1x2xGround",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("577de3527e6ddc7bb4a74e28"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"266-5-S",
			"2016",
			"Vacant Land",
			"60 x 110 Feet",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577de3527e6ddc7bb4a74e29"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-9-Q",
			"2015",
			"Detached",
			"2-Storey",
			"34.45 x 100.07 Feet",
			"1x2xMain, 2x4x2nd, 1x2xBsmt",
			"905-428-4557"
		]
	},
	{
		"_id" : ObjectId("577de3527e6ddc7bb4a74e2a"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"258-8-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.65 x 97.11 Feet",
			"1x2xMain, 1x3x2nd, 1x3x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577de3527e6ddc7bb4a74e2b"),
		"Undefined" : [
			"Pickering",
			"Rougemount",
			"Durham",
			"274-3-T",
			"2015",
			"Detached",
			"2-Storey",
			"44.36 x 141.75 Feet",
			"2x4x2nd, 1x2xGround",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("577de3527e6ddc7bb4a74e2c"),
		"Undefined" : [
			"Pickering",
			"Rougemount",
			"Durham",
			"274-3-T",
			"2015",
			"Detached",
			"2-Storey",
			"61 x 280 Feet",
			"1x5x2nd, 1x2xMain, 1x3xBsmt, 1x5xMain",
			"Workshop",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577de3527e6ddc7bb4a74e2d"),
		"Undefined" : [
			"Pickering",
			"Rosebank",
			"Durham",
			"274-4-V",
			"2015",
			"Detached",
			"2-Storey",
			"52.41 x 134.58 Feet",
			"1x3xMain, 1x3x2nd",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577de3577e6ddc7bb4a74e35"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"30.18 x 114.83 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("577de3577e6ddc7bb4a74e36"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 96 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"416-635-1232"
		]
	},
	{
		"_id" : ObjectId("577de3577e6ddc7bb4a74e37"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-P",
			"2016",
			"Detached",
			"2-Storey",
			"22.49 x 133.39 Feet",
			"2x4, 1x2",
			"905-683-5000"
		]
	},
	{
		"_id" : ObjectId("577de3577e6ddc7bb4a74e38"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"267-15-N",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 86.94 Feet",
			"1x4xUpper, 1x4xLower, 1x2xMain, 1x5xUpper",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577de3577e6ddc7bb4a74e39"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-P",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 109.91 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xUpper, 1x2xMain, 1x4xBsmt",
			"905-428-1500"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e45"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-19-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50.16 x 100 Feet",
			"1x3xMain, 1x2xBsmt",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e46"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"28.48 x 115.25 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xLower",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e47"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-23-L",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"31.17 x 104.99 Feet",
			"1x4xMain, 1x3xMain",
			"905-239-4800"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e48"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"2016",
			"Detached",
			"Backsplit 4",
			"50 x 100 Feet",
			"1x3xUpper, 1x2xLower, 1x4xBsmt",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e49"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"41.64 x 112.99 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-293-9595"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e4a"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"52.49 x 115.18 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-683-2100"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e4b"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 98.92 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e4c"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-22-P",
			"2016",
			"Detached",
			"2-Storey",
			"56.36 x 131.86 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"647-499-4900"
		]
	},
	{
		"_id" : ObjectId("577de35e7e6ddc7bb4a74e4d"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"76.16 x 191.1 Feet",
			"1x2xMain, 1x4xMain, 1x5xUpper, 1x4xUpper, 2x3",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e62"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-29-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"35.16 x 120 Feet",
			"1x4xUpper, 1x2xLower",
			"905-240-9200"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e63"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-S",
			"2016",
			"Detached",
			"Bungalow",
			"47.74 x 0 Feet",
			"1x4xMain, 1x4xBsmt",
			"866-525-4111"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e64"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-30-Q",
			"2015",
			"Detached",
			"Bungalow",
			"55 x 118.38 Feet",
			"1x4xMain, 1x1xLower",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e65"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-29-S",
			"2016",
			"Detached",
			"Sidesplit 4",
			"37.95 x 86 Feet",
			"1x4xUpper, 1x2xUpper, 1x3xLower",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e66"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"30.7 x 147.02 Feet",
			"1x2xMain, 1x4x2nd",
			"905-433-2121"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e67"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-29-P",
			"2016",
			"Detached",
			"Backsplit 5",
			"38.71 x 149.52 Feet",
			"1x4xUpper, 1x3xBsmt, 1x2xLower",
			"866-525-4111"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e68"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"268-25-P",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"58 x 130 Feet",
			"1x4xMain, 1x3xLower",
			"877-520-3700"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e69"),
		"Undefined" : [
			"Oshawa",
			"Central",
			"Durham",
			"269-29-Q",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"40 x 122.5 Feet",
			"1x4xMain",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e6a"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-Q",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 105.65 Feet",
			"1x4, 1x3",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e6b"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-N",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"40 x 144.54 Feet",
			"1x3xMain, 1x4xUpper, 1x3xLower",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577de36c7e6ddc7bb4a74e6c"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-U",
			"2015",
			"Detached",
			"Bungalow",
			"52.5 x 118.39 Feet",
			"1x3, 1x4",
			"905-686-5153"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e6d"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2016",
			"Detached",
			"2-Storey",
			"36.25 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e6e"),
		"Undefined" : [
			"Oshawa",
			"Northglen",
			"Durham",
			"268-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"54.64 x 108.3 Feet",
			"1x2xMain, 1x3xLower, 1x4xUpper, 1x5xUpper",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e6f"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 116.15 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e70"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-29-K",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 109.91 Feet",
			"3x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e71"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-29-J",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 109.91 Feet",
			"1x4xUpper, 1x6xUpper, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e72"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"269-30-N",
			"2015",
			"Detached",
			"2-Storey",
			"48.53 x 112.6 Feet",
			"2x4xUpper, 1x2xMain, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577de36d7e6ddc7bb4a74e73"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-L",
			"2016",
			"Detached",
			"Bungalow",
			"49.13 x 0 Feet",
			"2x4xMain, 1x4xLower",
			"905-720-2004"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e80"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.05 x 0 Feet",
			"1x4, 1x2",
			"905-623-6000"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e81"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-S",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 127.71 Feet",
			"1x3xMain, 1x2xBsmt",
			"905-430-6066"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e82"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-R",
			"2016",
			"Detached",
			"2-Storey",
			"31.23 x 0 Feet",
			"1x4x2nd, 1x2xMain, 1x4x2nd",
			"905-240-9200"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e83"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-U",
			"2016",
			"Link",
			"2-Storey",
			"29.53 x 108.92 Feet",
			"1x4x2nd, 1x2xMain",
			"905-436-0990"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e84"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"47.18 x 130.18 Feet",
			"1x4x2nd, 1x2xGround, 1x3x2nd",
			"905-428-8274"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e85"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-40-Q",
			"2016",
			"Detached",
			"2-Storey",
			"41.34 x 98.43 Feet",
			"1x2xMain, 2x4x2nd",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e86"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-W",
			"2015",
			"Detached",
			"Bungaloft",
			"45.28 x 86.94 Feet",
			"1x4xMain, 1x3xMain, 1x3xLower, 1x3x2nd",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("577de3747e6ddc7bb4a74e87"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-W",
			"2015",
			"Detached",
			"2-Storey",
			"43.93 x 0 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-723-4800"
		]
	},
	{
		"_id" : ObjectId("577de3757e6ddc7bb4a74e88"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"288.4 x 0 Feet",
			"1x4xMain, 1x4xMain, 1x3xMain",
			"905-697-1900"
		]
	},
	{
		"_id" : ObjectId("577de37a7e6ddc7bb4a74e90"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2015",
			"Vacant Land",
			"100 x 150 Feet",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("577de37a7e6ddc7bb4a74e91"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"58 x 157 Feet",
			"1x4x2nd, 1x2xGround",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("577de37a7e6ddc7bb4a74e92"),
		"Undefined" : [
			"Brock",
			"Cannington",
			"Durham",
			"212-28-K",
			"2015",
			"Detached",
			"Bungalow",
			"59 x 125 Feet",
			"1x4xUpper, 1x4xLower",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("577de37a7e6ddc7bb4a74e93"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"239-27-S",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"66 x 165 Feet",
			"1x4xMain, 1x1xLower",
			"905-985-9777"
		]
	},
	{
		"_id" : ObjectId("577de37a7e6ddc7bb4a74e94"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"82.07 x 203.8 Feet",
			"1x4xGround",
			"905-604-7997"
		]
	},
	{
		"_id" : ObjectId("577de37a7e6ddc7bb4a74e95"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-28-P",
			"2016",
			"Detached",
			"Bungalow",
			"47.53 x 100.06 Feet",
			"1x4xMain, 1x3xMain, 1x4xLower",
			"905-985-9777"
		]
	},
	{
		"_id" : ObjectId("577de37b7e6ddc7bb4a74e98"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-15-K",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 108.27 Feet",
			"1x2xMain, 2x4x2nd",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577de38e7e6ddc7bb4a74eb6"),
		"Undefined" : [
			"Severn",
			"Port Severn",
			"Simcoe",
			"2016",
			"Vacant Land",
			"679 x 0 Feet",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577de38e7e6ddc7bb4a74eb8"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 85 Feet",
			"1x2xMain, 1x3xMain",
			"705-429-2121"
		]
	},
	{
		"_id" : ObjectId("577de38e7e6ddc7bb4a74eb9"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"50.03 x 209.08 Feet",
			"1x3xMain, 1x4xUpper",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("577de38e7e6ddc7bb4a74eba"),
		"Undefined" : [
			"Barrie",
			"Allandale",
			"Simcoe",
			"505-11-K",
			"2016",
			"Detached",
			"2-Storey",
			"33.14 x 107.4 Feet",
			"1x4xUpper, 1x3xLower",
			"905-623-6000"
		]
	},
	{
		"_id" : ObjectId("577de38e7e6ddc7bb4a74ebb"),
		"Undefined" : [
			"Innisfil",
			"Lefroy",
			"Simcoe",
			"2015",
			"Cottage",
			"2-Storey",
			"50 x 98.11 Feet",
			"1x2xMain, 1x4xMain, 1x4x2nd",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ebd"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-7-P",
			"2016",
			"Detached",
			"2-Storey",
			"41.99 x 110.66 Feet",
			"1x2xMain, 1x4x2nd",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ebf"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"9.89 x 33.52 Metres",
			"1x2xMain, 2x4xUpper",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec0"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-13-P",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"39 x 119 Feet",
			"1x4xMain, 1x4xLower",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec1"),
		"Undefined" : [
			"Barrie",
			"400 North",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"55 x 119 Feet",
			"2x4",
			"705-436-2121"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec2"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-23-P",
			"2015",
			"Detached",
			"Bungalow",
			"117 x 150 Feet",
			"1x4xMain, 1x2xMain",
			"905-239-4800"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec3"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-8-P",
			"2015",
			"Detached",
			"2-Storey",
			"39 x 115 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec4"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"59 x 179 Feet",
			"1x2, 1x4, 1x3, 1x2",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec5"),
		"Undefined" : [
			"Springwater",
			"Minesing",
			"Simcoe",
			"11-28-B",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"131 x 152 Feet",
			"1x4x2nd, 1x4x2nd",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec6"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 107.71 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xLower",
			"705-721-9111"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec7"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"587-13-A",
			"2015",
			"Detached",
			"Sidesplit 4",
			"54.18 x 117.62 Feet",
			"1x5xUpper, 1x2xGround",
			"705-435-5556"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec8"),
		"Undefined" : [
			"Barrie",
			"East Bayfield",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"14 x 36.73 Metres",
			"1x4xMain, 1x3xBsmt, 1x4xMain",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ec9"),
		"Undefined" : [
			"Ramara",
			"Brechin",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"80 x 328 Feet",
			"1x2, 1x3, 1x4",
			"705-484-2121"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74eca"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"501-6-B",
			"2015",
			"Detached",
			"Bungalow",
			"193.3 x 0 Metres",
			"1x5xMain, 1x3xBsmt",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ecb"),
		"Undefined" : [
			"Severn",
			"Washago",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"109.17 x 0 Feet",
			"2x4xMain, 1x4xLower",
			"877-432-1550"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ecc"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-M",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 109.91 Feet",
			"1x2xLower, 2x4xUpper",
			"905-936-4216"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ecd"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"153.51 x 0 Feet",
			"1x5xMain, 1x3xLower",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ece"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-L",
			"2015",
			"Detached",
			"2-Storey",
			"32.02 x 103.7 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ecf"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"36 x 110 Feet",
			"1x2xMain, 2x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ed0"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Rural Adjala-Tosorontio",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"190.67 x 410 Feet",
			"1x4xGround, 1x4xUpper, 1x4xUpper, 1x2xGround",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ed1"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-L",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 115 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577de3927e6ddc7bb4a74ed6"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-48-J",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.69 x 108 Feet",
			"1x4x2nd, 1x2xMain, 1x3xBsmt",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("577de3927e6ddc7bb4a74ed7"),
		"Undefined" : [
			"East Luther Grand Valley",
			"Grand Valley",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"60.43 x 118.72 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"519-928-5723"
		]
	},
	{
		"_id" : ObjectId("577de3927e6ddc7bb4a74ed8"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 111.29 Feet",
			"1x5x2nd, 2x3x2nd, 1x2xMain",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74efd"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.47 x 115.42 Feet",
			"1x2xMain, 1x4x2nd",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74efe"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"71.12 x 149.11 Feet",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74eff"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"465-34-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 95.87 Feet",
			"2x4, 1x2",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f00"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"39.91 x 151.44 Feet",
			"1x3xMain, 2x3xBsmt",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f01"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-34-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 138.6 Feet",
			"1x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f02"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-41-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.31 x 105.28 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f03"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2016",
			"Detached",
			"2-Storey",
			"39.99 x 150.62 Feet",
			"1x2xMain, 1x2x2nd, 1x4x2nd",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f04"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"31 x 128.12 Feet",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f05"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-36-R",
			"2016",
			"Detached",
			"2-Storey",
			"57.71 x 50.75 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x4xBsmt",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f06"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-35-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.49 x 106.43 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"416-588-6777"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f07"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"464-32-G",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"22.47 x 104.99 Feet",
			"1x2xGround, 1x2xMain, 1x4x2nd, 1x3x2nd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f08"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-D",
			"2016",
			"Detached",
			"2-Storey",
			"66.44 x 91.96 Feet",
			"1x2xGround, 2x4x2nd",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577de3a47e6ddc7bb4a74f09"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"465-36-G",
			"2015",
			"Detached",
			"2-Storey",
			"55.9 x 120 Feet",
			"1x2, 1x4, 1x3",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f0a"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-35-F",
			"2016",
			"Detached",
			"2-Storey",
			"30.61 x 120.46 Feet",
			"1x2xGround, 2x4x2nd, 1x3xBsmt",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f0b"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-R",
			"2015",
			"Detached",
			"2-Storey",
			"75 x 195 Feet",
			"1x4xGround, 1x2x2nd, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f0c"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-F",
			"2016",
			"Detached",
			"2-Storey",
			"41.01 x 98.43 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f0d"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-S",
			"2016",
			"Detached",
			"2-Storey",
			"55 x 108.86 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f0e"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-G",
			"2015",
			"Detached",
			"2-Storey",
			"36.25 x 187.47 Feet",
			"2x4x2nd, 1x2xGround",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f0f"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-33-K",
			"2015",
			"Detached",
			"2-Storey",
			"50.06 x 150 Feet",
			"2x4, 1x2",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f10"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-G",
			"2015",
			"Detached",
			"2-Storey",
			"38.55 x 109.91 Feet",
			"1x4, 1x4, 1x2, 1x2",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f11"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-G",
			"2016",
			"Detached",
			"2-Storey",
			"32 x 121.85 Feet",
			"2x4, 1x2",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f12"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-G",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 109.91 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f13"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"471-32-M",
			"2015",
			"Detached",
			"2-Storey",
			"69.3 x 95.01 Feet",
			"1x5, 1x5, 1x3, 1x2",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f14"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-37-H",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 111 Feet",
			"1x2xMain, 1x3xBsmt, 2x4x2nd",
			"416-291-3000"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f15"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-40-B",
			"2016",
			"Detached",
			"2-Storey",
			"50.07 x 82.02 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x2xBsmt",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f16"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"473-44-P",
			"2015",
			"Detached",
			"Sidesplit 3",
			"52.75 x 126.94 Feet",
			"2x5xMain, 1x2xBsmt, 1x1xBsmt",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f17"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-J",
			"2016",
			"Detached",
			"2-Storey",
			"76.48 x 131.23 Feet",
			"1x4x2nd, 1x3xBsmt, 1x5x2nd, 1x2xMain",
			"12",
			"Rec",
			"Bsmt",
			"3.60",
			"3.52",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f18"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-37-R",
			"2016",
			"Detached",
			"Bungalow",
			"37.79 x 288 Feet",
			"1x4xMain",
			"905-278-8866"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f19"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"458-39-E",
			"2016",
			"Detached",
			"2-Storey",
			"34.38 x 104.29 Feet",
			"1x2xMain, 1x5xUpper, 1x4xUpper, 1x2xBsmt",
			"905-275-9400"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f1a"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-37-L",
			"2015",
			"Detached",
			"Bungalow",
			"111.37 x 192.08 Feet",
			"1x5xMain, 1x3xMain, 1x3xBsmt",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f1b"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-37-R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"72.25 x 288.08 Feet",
			"1x3xUpper",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f1c"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-35-N",
			"2016",
			"Detached",
			"2-Storey",
			"57.12 x 122.08 Feet",
			"1x5x2nd, 1x5x2nd, 1x2xMain, 1x3xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f1d"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"466-46-H",
			"2016",
			"Detached",
			"Bungalow",
			"83.46 x 127.76 Feet",
			"1x2, 2x5",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f1e"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-37-P",
			"2016",
			"Detached",
			"2-Storey",
			"94 x 143 Feet",
			"1x2xMain, 2x4xUpper, 2x5xUpper, 1x3xUpper, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577de3a57e6ddc7bb4a74f1f"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-P",
			"2015",
			"Detached",
			"2-Storey",
			"110.95 x 191.33 Feet",
			"2x2xGround, 1x5x2nd, 1x4x2nd, 3x3x2nd, 1x3xLower",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f50"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.16 x 93.16 Feet",
			"1x4x2nd, 1x4xBsmt",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f51"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"452-42-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 150 Feet",
			"1x2xMain, 1x4x2nd",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f52"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.93 x 101.09 Feet",
			"1x4xUpper, 1x2xBsmt",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f53"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-U",
			"2015",
			"Detached",
			"2-Storey",
			"46.21 x 73.51 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f54"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"2016",
			"Detached",
			"Backsplit 5",
			"30 x 100 Feet",
			"1x4x2nd, 1x2xMain",
			"416-569-1111"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f55"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"36.69 x 100.9 Feet",
			"1x4x2nd, 1x2xMain, 1x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f56"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 104.99 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577de3c07e6ddc7bb4a74f57"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-41-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x2xGround, 2x3x2nd, 1x3xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f58"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"445-42-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.06 x 91.14 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f59"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"451-40-Y",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"32.94 x 132.23 Feet",
			"1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f5a"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"445-45-S",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 101 Feet",
			"1x4x2nd, 1x2xMain, 1x3xLower",
			"905-822-0700"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f5b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 104.99 Feet",
			"1x5, 1x4, 1x3, 1x2",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f5c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"9.62 x 22.5 Metres",
			"1x2, 1x3, 2x4",
			"905-405-8484"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f5d"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"28.54 x 84.15 Feet",
			"2x4, 1x2",
			"905-793-5464"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f5e"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-43-S",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 100.07 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x2xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f5f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"31.16 x 76.44 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f60"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-S",
			"2016",
			"Link",
			"Backsplit 4",
			"35 x 110 Feet",
			"1x4xUpper, 1x4xLower",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f61"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-43-T",
			"2016",
			"Detached",
			"2-Storey",
			"29.8 x 135.87 Feet",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f62"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-40-Y",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 90.22 Feet",
			"1x3xUpper, 1x3xUpper, 1x2xMain, 1x3xBsmt",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f63"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"451-39-W",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 100.07 Feet",
			"1x3x2nd, 1x2x2nd, 1x2xMain, 1x3xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f64"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-45-V",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"51 x 99 Feet",
			"2x4x2nd",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f65"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-39-S",
			"2016",
			"Detached",
			"2-Storey",
			"36.58 x 113.94 Feet",
			"1x5x2nd, 1x4x2nd, 1x2",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f66"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-37-V",
			"2015",
			"Detached",
			"Bungalow",
			"192.7 x 198.84 Feet",
			"1x4xMain",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f67"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-S",
			"2016",
			"Detached",
			"2-Storey",
			"32.81 x 104.99 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f68"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.31 x 111.06 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f69"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-41-P",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 85.3 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f6a"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"36 x 100 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f6b"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-56-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.51 x 113.18 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x4xBsmt",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f6c"),
		"Undefined" : [
			"Brampton",
			"Gore Industrial North",
			"Peel",
			"446-52-T",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 89.9 Feet",
			"2x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f6d"),
		"Undefined" : [
			"Brampton",
			"Bramalea North Industrial",
			"Peel",
			"446-51-S",
			"2015",
			"Link",
			"2-Storey",
			"30.01 x 85.3 Feet",
			"1x2, 2x3, 1x5",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f6e"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-S",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 111.55 Feet",
			"1x5xUpper, 1x4xUpper, 1x2xMain",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577de3c17e6ddc7bb4a74f6f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-54-T",
			"2016",
			"Detached",
			"2-Storey",
			"28 x 111 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f70"),
		"Undefined" : [
			"Brampton",
			"Bramalea North Industrial",
			"Peel",
			"446-51-S",
			"2016",
			"Detached",
			"2-Storey",
			"34.12 x 100.07 Feet",
			"1x2, 2x4, 1x5",
			"647-205-2777"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f71"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-48-P",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 94.59 Feet",
			"1x2xMain, 2x4",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f72"),
		"Undefined" : [
			"Brampton",
			"Bramalea North Industrial",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"38.06 x 88.58 Feet",
			"1x4x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f73"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"438-48-D",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"14.92 x 0 Metres",
			"1x5x3rd, 1x4x3rd, 1x3x2nd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f74"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"38 x 110 Feet",
			"1x2xMain, 1x3x2nd, 1x5x2nd",
			"416-371-3737"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f75"),
		"Undefined" : [
			"Brampton",
			"Heart Lake",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"48.99 x 115 Feet",
			"1x2, 1x3, 1x4, 1x5",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f76"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"452-43-V",
			"2015",
			"Detached",
			"2-Storey",
			"48.36 x 98.43 Feet",
			"1x5x2nd, 1x3x2nd, 1x2xMain",
			"905-794-2677"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f77"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"439-53-O",
			"2016",
			"Detached",
			"2-Storey",
			"49 x 113 Feet",
			"1x4xMain, 1x5x2nd, 2x4x2nd",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f78"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"438-45-O",
			"2015",
			"Detached",
			"2-Storey",
			"19.64 x 45.53 Metres",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x4xBsmt",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f79"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"439-53-P",
			"2015",
			"Detached",
			"2-Storey",
			"60.04 x 114.82 Feet",
			"1x6xUpper, 1x4xUpper, 1x4xUpper, 1x2xMain",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f7a"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"439-54-P",
			"2016",
			"Detached",
			"2-Storey",
			"65 x 115 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577de3c27e6ddc7bb4a74f7b"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-U",
			"2015",
			"Detached",
			"2-Storey",
			"44.55 x 0 Feet",
			"1x5, 2x4, 1x2",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("577de3c47e6ddc7bb4a74f80"),
		"Undefined" : [
			"Caledon",
			"Bolton North",
			"Peel",
			"432-63-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.58 x 148.3 Feet",
			"1x2xMain, 2x4x2nd",
			"905-326-2763"
		]
	},
	{
		"_id" : ObjectId("577de3c47e6ddc7bb4a74f81"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"42.98 x 111.65 Feet",
			"1x2, 3x4, 1x5",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("577de3c47e6ddc7bb4a74f82"),
		"Undefined" : [
			"Caledon",
			"Palgrave",
			"Peel",
			"15-29-G",
			"2015",
			"Vacant Land",
			"900 x 2900 Feet",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577de3cb7e6ddc7bb4a74f8e"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-B",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 0 Feet",
			"1x2x2nd, 1x4x3rd",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("577de3cb7e6ddc7bb4a74f8f"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"427-24-G",
			"2016",
			"Att/Row/Twnhouse",
			"Bungalow",
			"34.26 x 113.66 Feet",
			"1x4xMain, 1x2xMain, 1x3xBsmt",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577de3cb7e6ddc7bb4a74f90"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-20-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"26.41 x 44.29 Feet",
			"1x4x3rd, 1x2xGround",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("577de3cb7e6ddc7bb4a74f91"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-26-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 87.75 Feet",
			"1x4x2nd, 1x2xMain",
			"416-264-1111"
		]
	},
	{
		"_id" : ObjectId("577de3cc7e6ddc7bb4a74f92"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-23-C",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21 x 82.64 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577de3cc7e6ddc7bb4a74f93"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-N",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"80 x 132 Feet",
			"1x4",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577de3cc7e6ddc7bb4a74f94"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2015",
			"Detached",
			"2-Storey",
			"34.12 x 88.58 Feet",
			"1x3x2nd, 1x3x2nd, 1x2xMain",
			"905-693-9575"
		]
	},
	{
		"_id" : ObjectId("577de3cc7e6ddc7bb4a74f95"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 108.27 Feet",
			"1x2xMain, 2x4x2nd",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577de3cc7e6ddc7bb4a74f96"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-25-C",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 80.38 Feet",
			"2x4, 2x2",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("577de3cc7e6ddc7bb4a74f97"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-25-C",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 80.38 Feet",
			"1x2xGround, 2x4x2nd",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fa5"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-24-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"15.84 x 111.18 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fa6"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.2 x 101.28 Feet",
			"1x4x2nd, 1x2xMain, 1x3x2nd",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fa7"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-T",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 125 Feet",
			"1x4xMain, 1x4xLower",
			"905-277-8800"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fa8"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"471-26-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"60 x 150 Feet",
			"1x2xMain, 1x4xMain, 1x3xBsmt",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fa9"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-28-N",
			"2015",
			"Detached",
			"2-Storey",
			"34.45 x 95.14 Feet",
			"2x4x2nd, 1x2xGround",
			"905-604-7997"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74faa"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.41 x 96.39 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xLower",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fab"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"48.59 x 100.07 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-637-1700"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fac"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"60.83 x 120.01 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fad"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-U",
			"2016",
			"Detached",
			"Backsplit 4",
			"75 x 150 Feet",
			"1x4xUpper, 1x3xLower",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74fae"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-29-S",
			"2016",
			"Detached",
			"2-Storey",
			"87 x 133 Feet",
			"1x5xUpper, 1x4xMain, 1x4xBsmt",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("577de3d37e6ddc7bb4a74faf"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-21-P",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 109.26 Feet",
			"2x5x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-997-7653"
		]
	},
	{
		"_id" : ObjectId("577de3d67e6ddc7bb4a74fb6"),
		"Undefined" : [
			"Burlington",
			"Brant Hills",
			"Halton",
			"469-11-N",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"30 x 120 Feet",
			"1x4x2nd, 1x2xBsmt",
			"905-847-5900"
		]
	},
	{
		"_id" : ObjectId("577de3d67e6ddc7bb4a74fb7"),
		"Undefined" : [
			"Burlington",
			"Mountainside",
			"Halton",
			"469-11-Q",
			"2016",
			"Detached",
			"Bungalow",
			"51 x 120 Feet",
			"1x4xMain, 1x3xLower",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("577de3d67e6ddc7bb4a74fb8"),
		"Undefined" : [
			"Burlington",
			"Palmer",
			"Halton",
			"469-12-Q",
			"2016",
			"Detached",
			"Backsplit 3",
			"50 x 100 Feet",
			"1x4x2nd, 1x3xBsmt",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577de3d67e6ddc7bb4a74fb9"),
		"Undefined" : [
			"Burlington",
			"Brant Hills",
			"Halton",
			"469-10-P",
			"2016",
			"Detached",
			"Sidesplit 4",
			"69 x 125 Feet",
			"1x3xLower, 1x4xUpper",
			"905-820-6080"
		]
	},
	{
		"_id" : ObjectId("577de3d67e6ddc7bb4a74fba"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-T",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 110 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-632-2199"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7512b"),
		"Undefined" : [
			"Toronto C03",
			"Forest Hill South",
			"Toronto",
			"115-18-M",
			"2016",
			"Co-Op Apt",
			"Apartment",
			"1x4xFlat",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7512c"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7512d"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7512e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7512f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75131"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-597-9333"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75132"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75133"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75135"),
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
		"_id" : ObjectId("577de49f7e6ddc7bb4a75136"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75137"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75138"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7513a"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-465-7527"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7513b"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-849-5360"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7513c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7513d"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7513e"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a7513f"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75140"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75141"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75142"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75143"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75144"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75145"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75146"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-993-7653"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75147"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75149"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a7514a"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 1x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a7514b"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"109-20-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-226-1987"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a7514c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a7514d"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a7514e"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a7514f"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75150"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75151"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-P",
			"2016",
			"Condo Townhouse",
			"Apartment",
			"1x5xMain",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75152"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75153"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-17-P",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75154"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"3x3",
			"416-805-1781"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75155"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x3xMain, 1x3x2nd, 1x4x2nd",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75156"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577de4a07e6ddc7bb4a75157"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x5x2nd, 1x5x3rd",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("577de4a17e6ddc7bb4a75158"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577de4a17e6ddc7bb4a75159"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-Q",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xLower, 1x4x2nd, 1x3x3rd",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7517a"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7517b"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"647-873-1103"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7517c"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-18-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7517d"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7517f"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-477-2300"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75180"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75181"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-498-9995"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75182"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-221-8838"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75183"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75184"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75185"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xFlat, 1x4xFlat",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75186"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75187"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x2",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75188"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-22-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a75189"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-26-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7518a"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7518b"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7518c"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x3x2nd, 1x4x3rd",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7518d"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7518e"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("577de4b47e6ddc7bb4a7518f"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"104-25-C",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xGround, 1x4x2nd, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de4b57e6ddc7bb4a75190"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("577de4b57e6ddc7bb4a75191"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-20-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"905-771-6618"
		]
	},
	{
		"_id" : ObjectId("577de4b57e6ddc7bb4a75192"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-604-6918"
		]
	},
	{
		"_id" : ObjectId("577de4b57e6ddc7bb4a75193"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat, 1x2xFlat",
			"416-898-8932"
		]
	},
	{
		"_id" : ObjectId("577de4b57e6ddc7bb4a75194"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat, 1x2xFlat",
			"905-670-4455"
		]
	},
	{
		"_id" : ObjectId("577de4bf7e6ddc7bb4a751a6"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("577de4bf7e6ddc7bb4a751a7"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"116-32-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("577de4bf7e6ddc7bb4a751a8"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"105-33-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de4bf7e6ddc7bb4a751a9"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751aa"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751ab"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751ad"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751ae"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751af"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"647-351-8811"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751b0"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-35-E",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751b1"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751b2"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-439-1300"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751b3"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-33-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751b4"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-901-8881"
		]
	},
	{
		"_id" : ObjectId("577de4c07e6ddc7bb4a751b5"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-30-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-939-6376"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751d5"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751d6"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751d7"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-504-6133"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751d8"),
		"Undefined" : [
			"Toronto W04",
			"Brookhaven-Amesbury",
			"Toronto",
			"108-12-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751d9"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751db"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-604-9155"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751dc"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751de"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751df"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x2xMain",
			"416-868-0200"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e0"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-656-3500"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e1"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x4x2nd",
			"905-338-0909"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e2"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e3"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e4"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-798-7278"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e5"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e6"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-508-8787"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e7"),
		"Undefined" : [
			"Toronto W09",
			"Humber Heights",
			"Toronto",
			"108-9-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e8"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751e9"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"118-4-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-637-1700"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751ea"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751eb"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x4",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751ed"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751ee"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x3, 1x4",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751ef"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751f0"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4x2nd, 1x2xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751f1"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper, 1x4xUpper",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("577de4d37e6ddc7bb4a751f2"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-11-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x3xFlat",
			"416-534-3511"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a7520b"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a7520c"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a7520d"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-32-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a7520e"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-503-1733"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a75210"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-752-7740"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a75211"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("577de4e37e6ddc7bb4a75212"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-18-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a75213"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a75214"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a75215"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a75216"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-23-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a75217"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a75219"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"3x4",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a7521a"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"647-947-2212"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a7521b"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-T",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4xUpper",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a7521c"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xGround, 1x4x2nd, 1x4x3rd",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a7521d"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-T",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-476-5555"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a7521e"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-13-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x6xMain, 1x3xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577de4e47e6ddc7bb4a7521f"),
		"Undefined" : [
			"Markham",
			"Bayview Glen",
			"York",
			"355-23-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat, 1x2xFlat",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("577de4e97e6ddc7bb4a75227"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-28-L",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper",
			"905-434-7777"
		]
	},
	{
		"_id" : ObjectId("577de4e97e6ddc7bb4a75228"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-28-M",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xMain",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("577de4e97e6ddc7bb4a75229"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-12-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("577de4e97e6ddc7bb4a7522a"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4",
			"905-683-5000"
		]
	},
	{
		"_id" : ObjectId("577de4e97e6ddc7bb4a7522b"),
		"Undefined" : [
			"Pickering",
			"Woodlands",
			"Durham",
			"274-4-T",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 2x4, 1x3",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("577de4fe7e6ddc7bb4a75251"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-35-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577de4fe7e6ddc7bb4a75252"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("577de4fe7e6ddc7bb4a75253"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-47-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("577de4fe7e6ddc7bb4a75254"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75255"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"465-34-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x3xFlat",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75256"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75257"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75258"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75259"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7525a"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"452-45-V",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7525b"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"453-49-W",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, 1x2xMain",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7525c"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7525d"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7525e"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7525f"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-T",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"416-849-2121"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75260"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75261"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-502-9944"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75262"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75263"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"453-49-W",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 1x4",
			"416-855-4663"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75264"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2015",
			"Condo Townhouse",
			"Bungalow",
			"1x4xMain, 1x2xMain",
			"905-455-5800"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75265"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-849-2121"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75266"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-279-8888"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75267"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xLower, 1x4xUpper",
			"905-833-3008"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75268"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-41-G",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x2xFlat, 1x4x2nd",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a75269"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-34-K",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7526a"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-G",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5xUpper, 1x3x2nd, 1x2xMain",
			"855-500-7653"
		]
	},
	{
		"_id" : ObjectId("577de4ff7e6ddc7bb4a7526b"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"905-542-3511"
		]
	},
	{
		"_id" : ObjectId("577de5007e6ddc7bb4a7526c"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-J",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4, 1x2",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577de5007e6ddc7bb4a7526d"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-35-H",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577de5007e6ddc7bb4a7526e"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-35-J",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xMain",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577de5007e6ddc7bb4a7526f"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577de5007e6ddc7bb4a75270"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"458-40-C",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"4x2x2nd, 4x3rd, 5x3rd, 4xMain",
			"416-733-7784"
		]
	},
	{
		"_id" : ObjectId("577de5007e6ddc7bb4a75271"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-R",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x5x2nd, 1x3x2nd, 1x3x3rd, 1x2xGround",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a7527f"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"5",
			"Laundry",
			"Main",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75280"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-634-6873"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75281"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75282"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75283"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"437-33-O",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x4, 1x2",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75284"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-9-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75285"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75286"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"471-29-Q",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75287"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-S",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4, 1x3",
			"416-789-0288"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75288"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-N",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4x3rd, 1x2x2nd",
			"905-845-0024"
		]
	},
	{
		"_id" : ObjectId("577de5087e6ddc7bb4a75289"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577f896f7e6ddc37d3a03ea3"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-L",
			"2016",
			"Detached",
			"Bungalow",
			"32 x 100 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("577f896f7e6ddc37d3a03ea4"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-L",
			"2015",
			"Detached",
			"Bungalow",
			"30 x 133 Feet",
			"1x4xMain, 1x1xBsmt",
			"416-535-3103"
		]
	},
	{
		"_id" : ObjectId("577f896f7e6ddc37d3a03ea5"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Semi-Detached",
			"2 1/2 Storey",
			"22.5 x 110 Feet",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("577f896f7e6ddc37d3a03ea6"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"14.96 x 101.33 Feet",
			"1x2xGround, 1x4x2nd",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577f89717e6ddc37d3a03ea7"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-P",
			"2016",
			"Detached",
			"2-Storey",
			"35 x 110 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd, 1x3xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f89717e6ddc37d3a03ea8"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-P",
			"2015",
			"Detached",
			"2-Storey",
			"40 x 265 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xLower",
			"416-462-4787"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03ea9"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-17-A",
			"2016",
			"Link",
			"2-Storey",
			"25 x 80.38 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x2xLower",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eaa"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"109-18-F",
			"2016",
			"Detached",
			"2-Storey",
			"50.75 x 141.83 Feet",
			"1x4, 1x3, 1x2",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eab"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-21-H",
			"2016",
			"Detached",
			"2-Storey",
			"16.5 x 150 Feet",
			"1x2, 1x4",
			"416-487-4311"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eac"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-18-D",
			"2016",
			"Detached",
			"Sidesplit 5",
			"50 x 172.15 Feet",
			"1x5xUpper, 1x3xUpper, 1x4xGround, 1x3xBsmt",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03ead"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-G",
			"2015",
			"Detached",
			"2-Storey",
			"40 x 115 Feet",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-787-1712"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eae"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"75 x 124 Feet",
			"1x6x2nd, 1x4x2nd, 1x2xMain",
			"416-741-4443"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eaf"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"109-20-H",
			"2016",
			"Detached",
			"2-Storey",
			"31 x 118 Feet",
			"1x2, 2x3, 1x5",
			"855-577-9888"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eb0"),
		"Undefined" : [
			"Toronto C04",
			"Forest Hill North",
			"Toronto",
			"109-17-K",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 121 Feet",
			"1x5, 1x4, 2x3, 1x2",
			"416-488-2875"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eb1"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-19-E",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 131 Feet",
			"1x2, 2x4, 2x5",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("577f89767e6ddc37d3a03eb2"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-K",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"56 x 261 Feet",
			"1x2xMain, 2x4x2nd, 1x2xBsmt, 1x3x3rd, 1x3x2nd",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("577f897a7e6ddc37d3a03eb3"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-26-J",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"36 x 182 Feet",
			"1x4xMain, 1x4xLower",
			"855-500-7653"
		]
	},
	{
		"_id" : ObjectId("577f897a7e6ddc37d3a03eb5"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-25-E",
			"2016",
			"Detached",
			"Sidesplit 4",
			"60 x 110 Feet",
			"1x4xUpper, 1x4xMain, 1x2xMain, 1x2xLower",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f897a7e6ddc37d3a03eb6"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-21-F",
			"2016",
			"Detached",
			"2-Storey",
			"70 x 125 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xLower",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577f897a7e6ddc37d3a03eb7"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-C",
			"2015",
			"Detached",
			"Bungalow",
			"64 x 214 Feet",
			"1x6xMain, 1x5xMain, 1x2xMain, 1x3xLower",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577f897f7e6ddc37d3a03eb8"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-30-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 105 Feet",
			"1x4x2nd",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577f897f7e6ddc37d3a03eb9"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"33.33 x 115 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("577f897f7e6ddc37d3a03eba"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2016",
			"Detached",
			"Bungalow",
			"31 x 95 Feet",
			"1x4, 1x2",
			"416-477-2300"
		]
	},
	{
		"_id" : ObjectId("577f897f7e6ddc37d3a03ebb"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-22-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"18.42 x 120 Feet",
			"1x4x2nd, 1x2xLower",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("577f897f7e6ddc37d3a03ebc"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-30-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"14.76 x 98.43 Feet",
			"1x2xMain, 1x4x2nd, 1x5x3rd",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("577f897f7e6ddc37d3a03ebd"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"116-27-Q",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"18.04 x 98.43 Feet",
			"1x5x3rd, 1x4x2nd, 1x2xMain",
			"416-699-2992"
		]
	},
	{
		"_id" : ObjectId("577f89837e6ddc37d3a03ebe"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-N",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30 x 108 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("577f89837e6ddc37d3a03ebf"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-36-J",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50 x 112 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-509-7653"
		]
	},
	{
		"_id" : ObjectId("577f89837e6ddc37d3a03ec0"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"29.86 x 102.03 Feet",
			"2x4x2nd, 1x2xGround",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577f89837e6ddc37d3a03ec1"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-30-F",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 125 Feet",
			"1x4xGround, 1x3xBsmt",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577f89837e6ddc37d3a03ec2"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-H",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 171 Feet",
			"1x4xMain, 1x3xLower",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577f89837e6ddc37d3a03ec3"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-P",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 286 Feet",
			"1x4xMain, 1x4x2nd",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("577f89897e6ddc37d3a03ec4"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-10-F",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"15 x 62 Feet",
			"1x2xMain, 1x2xBsmt, 1x4x2nd, 1x4x3rd",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("577f89897e6ddc37d3a03ec5"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-J",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"31.83 x 90 Feet",
			"1x4x2nd, 1x3xMain, 1x3xBsmt",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("577f89897e6ddc37d3a03ec6"),
		"Undefined" : [
			"Toronto W04",
			"Beechborough-Greenbrook",
			"Toronto",
			"108-13-K",
			"2016",
			"Detached",
			"Bungalow",
			"35 x 100 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("577f89897e6ddc37d3a03ec7"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.86 x 109 Feet",
			"1x3",
			"416-236-7711"
		]
	},
	{
		"_id" : ObjectId("577f89897e6ddc37d3a03ec8"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 50 Feet",
			"2x4, 1x2",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577f898a7e6ddc37d3a03eca"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-7-B",
			"2015",
			"Detached",
			"Backsplit 4",
			"50 x 121 Feet",
			"1x4xUpper, 1x3xLower",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("577f898a7e6ddc37d3a03ecb"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-10-H",
			"2016",
			"Detached",
			"2-Storey",
			"35.1 x 98.43 Feet",
			"1x2xGround, 1x6x2nd, 1x4x2nd, 1x3xBsmt",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("577f898a7e6ddc37d3a03ecc"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2015",
			"Detached",
			"2-Storey",
			"20 x 110 Feet",
			"1x4x2nd, 1x4xBsmt",
			"416-920-1500"
		]
	},
	{
		"_id" : ObjectId("577f898a7e6ddc37d3a03ecd"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"20.83 x 92.5 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd, 1x4xBsmt",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("577f898a7e6ddc37d3a03ece"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-15-P",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"18 x 123 Feet",
			"1x4x2nd, 1x4xBsmt",
			"416-488-2875"
		]
	},
	{
		"_id" : ObjectId("577f898a7e6ddc37d3a03ecf"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-13-R",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"33.33 x 125 Feet",
			"1x2x2nd, 1x5x2nd, 1x5x3rd, 1x3xBsmt",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577f898f7e6ddc37d3a03ed0"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-B",
			"2016",
			"Detached",
			"Bungalow",
			"45.42 x 121.18 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-879-7653"
		]
	},
	{
		"_id" : ObjectId("577f898f7e6ddc37d3a03ed1"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2016",
			"Detached",
			"2-Storey",
			"30.51 x 96.78 Feet",
			"1x4x2nd, 1x2xMain",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("577f898f7e6ddc37d3a03ed2"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-S",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"39.33 x 122 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-690-5100"
		]
	},
	{
		"_id" : ObjectId("577f898f7e6ddc37d3a03ed3"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2016",
			"Detached",
			"Bungalow",
			"94.1 x 87.6 Feet",
			"1x4xMain, 1x4xLower",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577f898f7e6ddc37d3a03ed4"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-S",
			"2015",
			"Detached",
			"Backsplit 4",
			"43 x 116 Feet",
			"1x4xMain, 1x2xBsmt",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("577f89907e6ddc37d3a03ed5"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-R",
			"2016",
			"Detached",
			"2-Storey",
			"51.17 x 147.2 Feet",
			"1x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("577f89907e6ddc37d3a03ed6"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"113-8-P",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 96.1 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03ed8"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-26-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.51 x 107.58 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03eda"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"6 x 23.41 Metres",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03edb"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"25 x 112 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03edc"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"7.55 x 32.72 Metres",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03edd"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.08 x 108.05 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03ede"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"7.65 x 21.52 Metres",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03edf"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-24-P",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 109.91 Feet",
			"2x4x2nd, 1x2xGround",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03ee0"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-J",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 88.58 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03ee1"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-24-S",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 150 Feet",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f89987e6ddc37d3a03ee2"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-21-Q",
			"2015",
			"Detached",
			"2-Storey",
			"42.06 x 135.5 Feet",
			"1x2xMain, 1x6x2nd, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f899e7e6ddc37d3a03ee3"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-A",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.75 x 29.9 Metres",
			"1x2, 1x4, 1x3",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03ee4"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-28-U",
			"2016",
			"Detached",
			"Bungalow",
			"64.33 x 89.4 Feet",
			"1x4xMain",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03ee5"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-X",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.56 x 100.07 Feet",
			"1x2xMain, 2x4x2nd, 1x4xLower",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03ee6"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-24-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.69 x 89.24 Feet",
			"2x4x2nd, 1x2xMain",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03ee7"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"325-26-Y",
			"2016",
			"Detached",
			"2-Storey",
			"32.02 x 114.83 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x2xLower",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03ee9"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-Y",
			"2016",
			"Detached",
			"2-Storey",
			"32.26 x 100.45 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03eea"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-Y",
			"2015",
			"Detached",
			"2-Storey",
			"49.31 x 111.78 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-783-5000"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03eeb"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-23-X",
			"2015",
			"Detached",
			"2-Storey",
			"32 x 120 Feet",
			"2x2, 2x4",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03eec"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-C",
			"2015",
			"Detached",
			"2-Storey",
			"60.06 x 147.64 Feet",
			"2x5x2nd, 1x2xMain",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03eed"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-23-C",
			"2016",
			"Detached",
			"2-Storey",
			"68.3 x 0 Feet",
			"2x4, 1x2",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03eee"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"332-27-B",
			"2015",
			"Detached",
			"2-Storey",
			"40.63 x 103.35 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03eef"),
		"Undefined" : [
			"Aurora",
			"Aurora Grove",
			"York",
			"331-26-D",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 110 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xGround",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("577f899f7e6ddc37d3a03ef0"),
		"Undefined" : [
			"Aurora",
			"Aurora Estates",
			"York",
			"337-25-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"135.48 x 3.4 Acres",
			"4x5",
			"905-503-1733"
		]
	},
	{
		"_id" : ObjectId("577f89a67e6ddc37d3a03ef2"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"9.3 x 20.6 Metres",
			"1x3xBsmt, 1x2xBsmt, 1x2xMain, 2x4x2nd",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577f89a67e6ddc37d3a03ef3"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-16-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"24.61 x 98.33 Feet",
			"1x2xMain, 2x4x2nd",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577f89a67e6ddc37d3a03ef4"),
		"Undefined" : [
			"Vaughan",
			"Glen Shields",
			"York",
			"354-16-Z",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 141.42 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577f89a67e6ddc37d3a03ef5"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-Q",
			"2015",
			"Detached",
			"2-Storey",
			"28.64 x 113.2 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("577f89a67e6ddc37d3a03ef6"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-5-W",
			"2016",
			"Detached",
			"Backsplit 4",
			"42.26 x 165.17 Feet",
			"1x5, 1x4, 1x3, 1x2",
			"416-410-9111"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03ef8"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-5-W",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 122 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt",
			"416-410-9111"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03ef9"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-Y",
			"2015",
			"Detached",
			"2-Storey",
			"53.31 x 141.67 Feet",
			"1x3xBsmt, 1x3xBsmt, 1x2xGround, 1x5x2nd, 1x5x2nd",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03efa"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 78.74 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03efb"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"353-7-V",
			"2015",
			"Detached",
			"2-Storey",
			"74.56 x 129.77 Feet",
			"1x6xUpper, 1x5xUpper, 1x2xMain, 1x3xBsmt",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03efc"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"347-7-U",
			"2016",
			"Detached",
			"2-Storey",
			"64.43 x 124.67 Feet",
			"1x5, 1x4, 1x3, 1x2",
			"905-889-9330"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03efd"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"343-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"37.89 x 0 Feet",
			"1x2xMain, 3x4x2nd, 1x5x2nd, 1x3xBsmt, 1x2",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577f89a77e6ddc37d3a03efe"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Detached",
			"2-Storey",
			"72.67 x 299.16 Feet",
			"1x2xGround, 1x6x2nd, 1x3x2nd, 1x3xBsmt",
			"905-738-9080"
		]
	},
	{
		"_id" : ObjectId("577f89a97e6ddc37d3a03eff"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"15-30-G",
			"2016",
			"Detached",
			"Bungalow",
			"231.46 x 530.64 Feet",
			"1x4xGround, 1x2xGround",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("577f89a97e6ddc37d3a03f00"),
		"Undefined" : [
			"King",
			"Pottageville",
			"York",
			"324-13-W",
			"2015",
			"Detached",
			"2-Storey",
			"200 x 474 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"905-939-2000"
		]
	},
	{
		"_id" : ObjectId("577f89a97e6ddc37d3a03f01"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"331-20-D",
			"2015",
			"Detached",
			"Bungaloft",
			"2.1 x 0 Acres",
			"2x2, 1x5, 4x3, 1x4",
			"905-833-3008"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f02"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Link",
			"2-Storey",
			"22.54 x 111.55 Feet",
			"1x4x2nd, 1x2xGround",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f03"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"356-33-V",
			"2016",
			"Link",
			"2-Storey",
			"29.53 x 114.77 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f04"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-25-Y",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20.06 x 131.57 Feet",
			"1x2xGround, 2x4x2nd",
			"905-707-8020"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f05"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-S",
			"2015",
			"Detached",
			"2-Storey",
			"35.33 x 98.7 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f06"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"7.42 x 32.5 Metres",
			"1x4x2nd, 1x4x2nd, 1x2xIn Betwn",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f07"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26 x 105 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f08"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"8.5 x 27.5 Metres",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f09"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-R",
			"2016",
			"Detached",
			"2-Storey",
			"41.01 x 88.58 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f0a"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-26-X",
			"2016",
			"Detached",
			"2-Storey",
			"60.17 x 124 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-881-2181"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f0b"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-35-Y",
			"2016",
			"Detached",
			"2-Storey",
			"45.93 x 111.55 Feet",
			"2x5, 1x4, 1x2",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f0c"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-30-Z",
			"2016",
			"Detached",
			"2-Storey",
			"13.75 x 33.53 Metres",
			"2x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f0d"),
		"Undefined" : [
			"Markham",
			"German Mills",
			"York",
			"355-26-Z",
			"2015",
			"Detached",
			"2-Storey",
			"51.7 x 153.48 Feet",
			"1x2xGround, 1x3xBsmt, 1x3x2nd, 1x3x2nd",
			"416-322-8000"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f0e"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 134.84 Feet",
			"2x4, 1x5, 1x2",
			"416-223-8833"
		]
	},
	{
		"_id" : ObjectId("577f89b37e6ddc37d3a03f0f"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-T",
			"2015",
			"Detached",
			"2-Storey",
			"41.99 x 90.22 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("577f89b47e6ddc37d3a03f10"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2016",
			"Detached",
			"Backsplit 3",
			"50 x 140 Feet",
			"2x4xUpper, 1x4xLower",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577f89b47e6ddc37d3a03f11"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-25-Y",
			"2015",
			"Detached",
			"2-Storey",
			"14.6 x 37.32 Metres",
			"1x2xMain, 1x6x2nd, 1x5x2nd, 1x3x2nd, 1x4xLower",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("577f89b47e6ddc37d3a03f12"),
		"Undefined" : [
			"Markham",
			"Buttonville",
			"York",
			"2015",
			"Detached",
			"3-Storey",
			"32.09 x 0 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3x3rd, 1x3xBsmt",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577f89b67e6ddc37d3a03f13"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"31.56 x 79 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577f89b67e6ddc37d3a03f14"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"333-41-A",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 100 Feet",
			"1x4xMain, 1x3xMain, 1x3xLower",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577f89b67e6ddc37d3a03f15"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-M",
			"2015",
			"Detached",
			"2-Storey",
			"50.03 x 98.49 Feet",
			"1x7xUpper, 2x3xUpper, 1x2xMain, 1x3xMain, 0x0",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f89b87e6ddc37d3a03f16"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"319-26-Q",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 123 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("577f89b87e6ddc37d3a03f17"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22 x 104 Feet",
			"2x4x2nd, 1x2xMain",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("577f89b87e6ddc37d3a03f18"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"320-30-S",
			"2015",
			"Detached",
			"Bungalow",
			"33.93 x 90.01 Metres",
			"1x4xMain, 1x3xLower, 1x3xLower",
			"905-722-3211"
		]
	},
	{
		"_id" : ObjectId("577f89b97e6ddc37d3a03f19"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"2-Storey",
			"77 x 130 Feet",
			"1x4x2nd, 1x2xBsmt",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("577f89b97e6ddc37d3a03f1a"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-33-C",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"49.21 x 109.91 Feet",
			"1x4xGround, 1x4xGround, 1x3xBsmt",
			"905-476-4337"
		]
	},
	{
		"_id" : ObjectId("577f89bc7e6ddc37d3a03f1b"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.18 x 78.75 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd, 1x3xLower",
			"416-466-2090"
		]
	},
	{
		"_id" : ObjectId("577f89bc7e6ddc37d3a03f1c"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 101.71 Feet",
			"2x4x2nd, 1x2xMain",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("577f89bc7e6ddc37d3a03f1d"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"266-5-S",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 138 Feet",
			"1x4",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("577f89bc7e6ddc37d3a03f1e"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-S",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 101.71 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577f89bf7e6ddc37d3a03f1f"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"267-14-S",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"38.75 x 100 Feet",
			"1x4xGround, 1x3xBsmt, 1x3xGround",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("577f89bf7e6ddc37d3a03f20"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.34 x 0 Feet",
			"2x4x2nd, 1x2xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("577f89bf7e6ddc37d3a03f21"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-10-P",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.61 x 109.51 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577f89bf7e6ddc37d3a03f22"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-12-R",
			"2016",
			"Detached",
			"2-Storey",
			"33.33 x 105 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x2xBsmt",
			"905-240-9200"
		]
	},
	{
		"_id" : ObjectId("577f89bf7e6ddc37d3a03f23"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"41.99 x 88.19 Feet",
			"1x2xGround, 1x4x2nd, 2x3x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577f89bf7e6ddc37d3a03f24"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-15-U",
			"2015",
			"Detached",
			"2-Storey",
			"53.95 x 106.11 Feet",
			"1x2, 3x4",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("577f89c27e6ddc37d3a03f25"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 0 Feet",
			"1x2xMain, 2x4x2nd",
			"905-668-3800"
		]
	},
	{
		"_id" : ObjectId("577f89c27e6ddc37d3a03f26"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-18-P",
			"2015",
			"Detached",
			"Sidesplit 5",
			"45 x 120 Feet",
			"1x2xMain, 1x5xUpper, 1x4xLower",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577f89c27e6ddc37d3a03f27"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-L",
			"2015",
			"Detached",
			"2-Storey",
			"18 x 33 Metres",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-666-0000"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f28"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-26-S",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 115 Feet",
			"1x4xMain, 1x4x2nd",
			"905-686-5153"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f29"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-T",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"73.75 x 118.79 Feet",
			"1x3xGround, 1x3x2nd",
			"905-433-2579"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f2a"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"269-28-S",
			"2015",
			"Detached",
			"Bungalow",
			"35 x 112.41 Feet",
			"1x4xMain, 1x4xLower",
			"905-668-1511"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f2b"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-T",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"26 x 150 Feet",
			"1x4xUpper, 1x3xGround",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f2c"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-24-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"27.8 x 106 Feet",
			"1x2xMain, 1x4x2nd",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f2d"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"51.39 x 106.4 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577f89ca7e6ddc37d3a03f2e"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-R",
			"2015",
			"Detached",
			"2-Storey",
			"55.15 x 119.42 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd",
			"905-430-9000"
		]
	},
	{
		"_id" : ObjectId("577f89cb7e6ddc37d3a03f2f"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-M",
			"2015",
			"Detached",
			"2-Storey",
			"29.17 x 114.96 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"905-240-9200"
		]
	},
	{
		"_id" : ObjectId("577f89cb7e6ddc37d3a03f30"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-29-N",
			"2015",
			"Detached",
			"Bungalow",
			"51.35 x 98.58 Feet",
			"1x4xMain, 1x3xLower",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("577f89cb7e6ddc37d3a03f31"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-29-R",
			"2016",
			"Detached",
			"Bungalow",
			"43 x 136.17 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("577f89cb7e6ddc37d3a03f32"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-J",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"64.63 x 0 Feet",
			"1x4xMain, 1x4xMain, 1x4xLower",
			"905-240-9200"
		]
	},
	{
		"_id" : ObjectId("577f89cb7e6ddc37d3a03f33"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"269-26-N",
			"2016",
			"Detached",
			"Sidesplit 4",
			"64 x 102 Feet",
			"1x2, 1x5",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("577f89cb7e6ddc37d3a03f34"),
		"Undefined" : [
			"Oshawa",
			"Kedron",
			"Durham",
			"261-28-J",
			"2015",
			"Detached",
			"2-Storey",
			"30 x 109.91 Feet",
			"1x5, 1x3, 1x2",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577f89cd7e6ddc37d3a03f37"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"279-42-T",
			"2015",
			"Detached",
			"Bungalow",
			"197 x 165 Feet",
			"1x3, 1x4",
			"905-668-3800"
		]
	},
	{
		"_id" : ObjectId("577f89d17e6ddc37d3a03f39"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-22-Z",
			"2015",
			"Detached",
			"2-Storey",
			"0 x 88.44 Feet",
			"1x4, 1x2",
			"705-426-4663"
		]
	},
	{
		"_id" : ObjectId("577f89d17e6ddc37d3a03f3a"),
		"Undefined" : [
			"Brock",
			"Cannington",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 150 Feet",
			"1x4xMain, 1x3xMain",
			"905-985-7351"
		]
	},
	{
		"_id" : ObjectId("577f89d17e6ddc37d3a03f3b"),
		"Undefined" : [
			"Brock",
			"Sunderland",
			"Durham",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"44 x 0 Acres",
			"1x3xMain, 1x4x2nd",
			"Workshop",
			"705-725-1055"
		]
	},
	{
		"_id" : ObjectId("577f89d17e6ddc37d3a03f3c"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"300 x 315 Feet",
			"1x4xGround, 1x4x2nd, 1x4x2nd",
			"Workshop",
			"905-985-9898"
		]
	},
	{
		"_id" : ObjectId("577f89d47e6ddc37d3a03f3d"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"62 x 210 Feet",
			"1x3xMain, 1x2x2nd",
			"905-852-2424"
		]
	},
	{
		"_id" : ObjectId("577f89d47e6ddc37d3a03f3e"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"62.34 x 109.91 Feet",
			"1x4xMain, 1x2xMain, 1x4xLower",
			"905-852-6143"
		]
	},
	{
		"_id" : ObjectId("577f89d47e6ddc37d3a03f3f"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2015",
			"Det W/Com Elements",
			"2-Storey",
			"39.76 x 89.63 Feet",
			"2x5x2nd, 1x4x2nd, 1x2xMain",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("577f89d47e6ddc37d3a03f40"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2015",
			"Det W/Com Elements",
			"2-Storey",
			"46 x 87.76 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("577f89d47e6ddc37d3a03f41"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-12-K",
			"2016",
			"Detached",
			"2-Storey",
			"55.25 x 111 Feet",
			"2x5x2nd, 1x4xBsmt, 1x2xGround",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("577f89d47e6ddc37d3a03f42"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"2.72 x 0 Acres",
			"1x2xMain, 2x4xUpper, 1x3xMain, 1x5xUpper, 1x3xLower",
			"905-852-4338"
		]
	},
	{
		"_id" : ObjectId("577f89df7e6ddc37d3a03f43"),
		"Undefined" : [
			"Orillia",
			"Orillia",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"60 x 100 Feet",
			"1x4xMain, 1x2xLower",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577f89df7e6ddc37d3a03f44"),
		"Undefined" : [
			"Barrie",
			"Allandale Heights",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"32.16 x 198 Feet",
			"1x4x2nd",
			"866-976-2724"
		]
	},
	{
		"_id" : ObjectId("577f89df7e6ddc37d3a03f45"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"502-13-F",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 120.41 Feet",
			"1x2xMain, 1x4xUpper, 1x2xLower",
			"705-252-7335"
		]
	},
	{
		"_id" : ObjectId("577f89df7e6ddc37d3a03f46"),
		"Undefined" : [
			"Barrie",
			"Painswick North",
			"Simcoe",
			"505-12-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.78 x 84.68 Feet",
			"1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577f89df7e6ddc37d3a03f47"),
		"Undefined" : [
			"Barrie",
			"East Bayfield",
			"Simcoe",
			"501-8-E",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26.25 x 82.01 Feet",
			"1x2xMain, 2x4x2nd",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("577f89df7e6ddc37d3a03f48"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"506-22-L",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 240 Feet",
			"1x4xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f49"),
		"Undefined" : [
			"Barrie",
			"Letitia Heights",
			"Simcoe",
			"504-7-H",
			"2015",
			"Detached",
			"Backsplit 4",
			"65.39 x 0 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f4a"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"29.82 x 0 Feet",
			"1x2xGround, 2x4x2nd",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f4c"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-22-S",
			"2015",
			"Detached",
			"2-Storey",
			"15 x 40 Metres",
			"2x4xUpper, 1x2xLower, 1x2xMain",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f4d"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"507-6-N",
			"2016",
			"Detached",
			"2-Storey",
			"34.61 x 0 Feet",
			"1x3xUpper, 1x4xUpper, 1x2xMain, 1x3xBsmt",
			"877-722-8191"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f4e"),
		"Undefined" : [
			"Barrie",
			"East Bayfield",
			"Simcoe",
			"502-9-F",
			"2016",
			"Detached",
			"2-Storey",
			"46 x 119 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f4f"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-19-K",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 0 Feet",
			"1x4x2nd, 1x2xGround",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f50"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Loretto",
			"Simcoe",
			"11-28-F",
			"2015",
			"Detached",
			"Sidesplit 3",
			"101 x 325 Feet",
			"1x3, 1x4",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f51"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"6.19 x 35.17 Metres",
			"1x2xMain, 2x4x2nd",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f53"),
		"Undefined" : [
			"Barrie",
			"North Shore",
			"Simcoe",
			"505-13-H",
			"2016",
			"Detached",
			"Sidesplit 4",
			"75 x 140 Metres",
			"1x2xMain, 1x4x3rd, 1x4x3rd",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f54"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-M",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 109.91 Feet",
			"2x4x2nd, 1x2xMain",
			"905-640-3131"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f55"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-22-T",
			"2015",
			"Detached",
			"Bungalow",
			"39.63 x 160.71 Feet",
			"1x4xMain, 1x4xMain, 1x4xBsmt",
			"905-775-5677"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f56"),
		"Undefined" : [
			"Innisfil",
			"Lefroy",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"146.98 x 99.73 Feet",
			"1x2xGround, 1x3x2nd, 1x4xGround",
			"Workshop",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("577f89e07e6ddc37d3a03f57"),
		"Undefined" : [
			"Innisfil",
			"Gilford",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"179 x 0 Feet",
			"1x2xMain, 1x5xMain, 1x5x2nd",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f58"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2016",
			"Vacant Land",
			"45.8 x 0 Acres",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f59"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-H",
			"2016",
			"Detached",
			"Bungalow",
			"66 x 142 Feet",
			"1x4xMain, 1x1xLower",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f5a"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 101.71 Feet",
			"1x2xGround, 1x5xUpper, 1x4xUpper",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f5b"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"Backsplit 4",
			"50.03 x 110.73 Feet",
			"1x4xUpper, 1x4xUpper, 1x4xLower",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f5c"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 105 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xIn Betwn",
			"800-268-2455"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f5d"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-47-H",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 115 Feet",
			"1x3xMain, 1x4xBsmt",
			"866-942-9499"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f5e"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"52.44 x 107 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xLower",
			"800-268-2455"
		]
	},
	{
		"_id" : ObjectId("577f89e67e6ddc37d3a03f5f"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"404-48-J",
			"2016",
			"Detached",
			"Bungaloft",
			"121 x 168 Feet",
			"1x4xUpper, 1x3xMain, 1x2xMain, 1x2xLower",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f60"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"21.58 x 103.55 Feet",
			"1x4x2nd, 1x2xGround",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f61"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-39-M",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 125 Feet",
			"1x4xUpper, 1x3xBsmt, 1x2xMain",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f62"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.51 x 90 Feet",
			"1x2, 1x4, 1x4, 1x4",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f63"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-C",
			"2016",
			"Detached",
			"Backsplit 5",
			"46 x 124 Feet",
			"1x2xGround, 1x4x2nd, 1x1xLower",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f64"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.64 x 104.16 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f65"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"65.76 x 141.75 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f66"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2016",
			"Detached",
			"2-Storey",
			"53 x 120 Feet",
			"1x2xMain, 1x4x2nd",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f67"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"458-34-B",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 133.33 Feet",
			"1x2xMain, 2x4x2nd",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f68"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-R",
			"2016",
			"Link",
			"2-Storey",
			"31.17 x 154.78 Feet",
			"2x4, 1x3, 1x2",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f69"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"465-40-J",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"62.82 x 105 Feet",
			"1x4xMain, 1x2xMain, 1x2xBsmt",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f6a"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-45-K",
			"2016",
			"Detached",
			"2-Storey",
			"26.52 x 109.81 Feet",
			"1x2, 1x4, 1x3",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f6b"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-43-S",
			"2015",
			"Detached",
			"Bungalow",
			"37.25 x 124.16 Feet",
			"1x4, 1x2",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f6c"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-43-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"60 x 126 Feet",
			"1x4xUpper, 1x3xGround",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f6d"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-48-K",
			"2015",
			"Detached",
			"Bungalow",
			"54.83 x 115 Feet",
			"1x4xGround, 1x3xBsmt",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f6e"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-43-N",
			"2016",
			"Detached",
			"Backsplit 5",
			"50 x 136 Feet",
			"1x4xUpper, 1x2xUpper, 1x3xIn Betwn",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f6f"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-36-K",
			"2016",
			"Detached",
			"2-Storey",
			"31.63 x 96 Feet",
			"2x4xUpper, 1x3xLower, 1x2xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f70"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"465-34-F",
			"2016",
			"Detached",
			"2-Storey",
			"41.99 x 114.83 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x2xBsmt",
			"905-290-6777"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f71"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-N",
			"2016",
			"Detached",
			"2-Storey",
			"112 x 66.18 Feet",
			"2x4xUpper, 1x2xMain, 1x2xLower",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f72"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"77 x 120 Feet",
			"1x2xMain, 1x5x2nd, 1x5x2nd, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577f89f47e6ddc37d3a03f73"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-35-Q",
			"2016",
			"Detached",
			"2-Storey",
			"100 x 254.87 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("577f89f57e6ddc37d3a03f74"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-36-G",
			"2015",
			"Detached",
			"2-Storey",
			"87.11 x 118.11 Feet",
			"1x5xUpper, 2x4xUpper, 1x2xMain, 1x2xBsmt, 1x4xBsmt",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("577f8a087e6ddc37d3a03f75"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"446-49-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.9 x 79.84 Feet",
			"1x4xUpper, 1x2xBsmt",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("577f8a087e6ddc37d3a03f76"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 100 Feet",
			"1x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f77"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"458-40-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"55.31 x 114.7 Feet",
			"1x4, 1x2",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f78"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-43-V",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"19.05 x 70.26 Feet",
			"1x3xLower, 1x4xUpper",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f79"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"445-46-R",
			"2105",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18 x 75.46 Feet",
			"1x4x3rd, 1x3x3rd, 1x2x2nd",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f7a"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-T",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"47.83 x 109.46 Feet",
			"1x4x2nd, 1x2x2nd, 1x3xBsmt",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f7b"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"453-50-X",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"33.25 x 115.94 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f7c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2016",
			"Detached",
			"2-Storey",
			"30.25 x 110.77 Feet",
			"1x2xGround, 1x4x2nd",
			"416-235-2500"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f7d"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-42-U",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"36.5 x 100 Feet",
			"1x4xMain, 1x4xLower",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f7e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"459-41-A",
			"2016",
			"Link",
			"2-Storey",
			"28.87 x 107.14 Feet",
			"2x4x2nd, 1x4xBsmt, 1x2xGround",
			"905-216-7800"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f7f"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 109.91 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"416-235-2500"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f80"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-S",
			"2015",
			"Detached",
			"2-Storey",
			"29.65 x 107.05 Feet",
			"1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f81"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-R",
			"2016",
			"Detached",
			"2-Storey",
			"30.07 x 86.82 Feet",
			"1x2xMain, 1x4x2nd",
			"416-286-4800"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f82"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"28.81 x 98.43 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f83"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"446-50-T",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 131.8 Feet",
			"1x5xGround",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f84"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-R",
			"2016",
			"Detached",
			"2-Storey",
			"41 x 88 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f85"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"438-42-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.1 x 92.19 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xLower",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f86"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-S",
			"2016",
			"Detached",
			"2-Storey",
			"29.65 x 103.05 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f87"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"445-42-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.56 x 86.22 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xLower",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f88"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-Q",
			"2015",
			"Detached",
			"2-Storey",
			"30.02 x 98.43 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("577f8a097e6ddc37d3a03f8a"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"24.74 x 91.04 Feet",
			"1x5xUpper, 1x4xUpper, 1x2xMain, 1x4xLower",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f8b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-R",
			"2016",
			"Detached",
			"2-Storey",
			"36 x 94.59 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f8c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"39.94 x 90.27 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xMain",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f8d"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-X",
			"2016",
			"Detached",
			"Sidesplit 4",
			"39 x 112.62 Feet",
			"1x4xUpper, 1x2xMain",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f8e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-W",
			"2016",
			"Detached",
			"2-Storey",
			"38.89 x 100.07 Feet",
			"2x4, 1x3, 2x2",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f8f"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-Q",
			"2015",
			"Detached",
			"2-Storey",
			"30.02 x 0 Feet",
			"1x5, 1x2, 1x4",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f90"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-43-Z",
			"2015",
			"Detached",
			"2-Storey",
			"38.4 x 104.99 Feet",
			"3x4, 0x3, 1x2",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f91"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"451-40-Z",
			"2016",
			"Detached",
			"2-Storey",
			"45.96 x 108.64 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f92"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-S",
			"2016",
			"Detached",
			"2-Storey",
			"29.49 x 0 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-452-7272"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f93"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"438-45-P",
			"2016",
			"Detached",
			"2-Storey",
			"56.16 x 113.22 Feet",
			"1x5x2nd, 1x4x2nd, 1x2x2nd, 1x2xGround, 1x3xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577f8a0a7e6ddc37d3a03f95"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-53-S",
			"2015",
			"Detached",
			"2-Storey",
			"58.85 x 98.59 Feet",
			"1x2xGround, 1x7x2nd, 2x4x2nd, 1x4xLower",
			"905-845-0024"
		]
	},
	{
		"_id" : ObjectId("577f8a0b7e6ddc37d3a03f96"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 104.99 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f97"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-H",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 133 Feet",
			"1x3x2nd, 1x2xMain, 1x2xBsmt",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f98"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50.2 x 131.17 Feet",
			"1x4xGround, 1x2xBsmt",
			"Workshop",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f99"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 44.29 Feet",
			"1x2x2nd, 1x3x3rd, 1x4x3rd",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f9a"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-H",
			"2016",
			"Detached",
			"2-Storey",
			"32.81 x 114.8 Feet",
			"1x2xMain, 1x4x2nd",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f9b"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-G",
			"2016",
			"Detached",
			"2-Storey",
			"38.1 x 91.86 Feet",
			"1x2xMain, 2x3x2nd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f9c"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.69 x 88.48 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577f8a177e6ddc37d3a03f9d"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"456-25-A",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26.07 x 85.3 Feet",
			"1x2, 1x3, 2x4",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03f9e"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"28.24 x 80.38 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd",
			"905-877-9001"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03f9f"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"32.81 x 80.38 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa0"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-24-Z",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.97 x 104.99 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa1"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-R",
			"2016",
			"Detached",
			"2-Storey",
			"30.39 x 119.02 Feet",
			"1x2xGround, 2x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa2"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-C",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.39 x 19.5 Metres",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-812-9222"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa3"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2015",
			"Detached",
			"2-Storey",
			"33.49 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa4"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-P",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 101.35 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa5"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-20-C",
			"2016",
			"Detached",
			"2-Storey",
			"32.31 x 89.14 Feet",
			"1x3x2nd, 1x4x2nd, 1x2xGround",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa6"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-D",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 100.07 Feet",
			"1x2, 1x4, 1x6",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa7"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-C",
			"2016",
			"Detached",
			"2-Storey",
			"42.35 x 101.7 Feet",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa8"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-Q",
			"2016",
			"Detached",
			"Bungaloft",
			"40.72 x 118.77 Feet",
			"1x4xMain, 1x5xMain, 1x4x2nd",
			"905-897-8777"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fa9"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-A",
			"2015",
			"Detached",
			"2-Storey",
			"43 x 98 Feet",
			"1x2xMain, 1x4x2nd, 2x5x2nd",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03faa"),
		"Undefined" : [
			"Milton",
			"Campbellville",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"5.57 x 0 Acres",
			"1x2, 1x3x2nd, 1x5x2nd",
			"905-335-8808"
		]
	},
	{
		"_id" : ObjectId("577f8a187e6ddc37d3a03fab"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"200 x 402.99 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"519-853-9924"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03fac"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"83 x 118 Feet",
			"1x4xMain, 1x3xLower",
			"905-822-0700"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03fad"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-T",
			"2016",
			"Detached",
			"Bungalow",
			"51 x 100 Feet",
			"1x4xMain, 1x2xBsmt",
			"905-335-8808"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03fae"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"60.7 x 111.55 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03faf"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"55.77 x 80.38 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x4x2nd",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03fb0"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-T",
			"2015",
			"Detached",
			"2-Storey",
			"60 x 115 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03fb1"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"470-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 106.79 Feet",
			"1x2xMain, 1x6x2nd, 1x3x2nd, 1x5x2nd, 1x3xBsmt",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("577f8a1c7e6ddc37d3a03fb2"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"476-24-U",
			"2016",
			"Detached",
			"2-Storey",
			"70.34 x 111.77 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb3"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"475-16-T",
			"2016",
			"Detached",
			"Backsplit 3",
			"46 x 117 Feet",
			"1x3, 1x4",
			"905-847-5900"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb4"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"475-16-T",
			"2015",
			"Detached",
			"Sidesplit 4",
			"50 x 110 Feet",
			"1x2xLower, 1x4x2nd",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb5"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-V",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 104 Feet",
			"1x4xGround, 1x3xBsmt",
			"905-897-2141"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb6"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"469-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 155.93 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb7"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"60 x 160 Feet",
			"1x4x3rd, 1x3xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb8"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"50.03 x 125.92 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("577f8a207e6ddc37d3a03fb9"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"475-13-V",
			"2016",
			"Detached",
			"2-Storey",
			"75 x 112 Feet",
			"1x2xMain, 2x5x2nd, 1x4x2nd, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fba"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fbb"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fbc"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fbd"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fbe"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-640-3131"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fc0"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-20-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-831-2999"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fc2"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("577f8ab77e6ddc37d3a03fc4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-883-3888"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fc5"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fc6"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fc7"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fc8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fc9"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-17-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-226-1987"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fca"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fcb"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Other",
			"1x4xFlat",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fcc"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fcd"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fce"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fcf"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd0"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd1"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x4, 1x3",
			"416-203-1920"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd3"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd4"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd5"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd6"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd7"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd8"),
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
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fd9"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("577f8ab87e6ddc37d3a03fda"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-P",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3xBsmt, 1x4x3rd",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("577f8ab97e6ddc37d3a03fdb"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x5, 1x4, 1x2",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("577f8ad77e6ddc37d3a03fdc"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("577f8ad77e6ddc37d3a03fdd"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577f8ad77e6ddc37d3a03fde"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577f8ad77e6ddc37d3a03fdf"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("577f8ad77e6ddc37d3a03fe0"),
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
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe2"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe3"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe4"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe5"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe6"),
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
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe7"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"647-708-8188"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe8"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-881-2181"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fe9"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fea"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd, 1x2xMain",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03feb"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fec"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fed"),
		"Undefined" : [
			"Toronto C04",
			"Forest Hill North",
			"Toronto",
			"109-17-K",
			"2015",
			"Co-Ownership Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fee"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03fef"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03ff0"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x3xFlat",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03ff1"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, 1x3xMain",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03ff2"),
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
		"_id" : ObjectId("577f8ad87e6ddc37d3a03ff3"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xGround, 1x4x3rd, 1x4x2nd",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577f8ad87e6ddc37d3a03ff4"),
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
		"_id" : ObjectId("577f8ae47e6ddc37d3a03ff5"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"116-32-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-321-2228"
		]
	},
	{
		"_id" : ObjectId("577f8ae47e6ddc37d3a03ff6"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"105-33-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-849-5360"
		]
	},
	{
		"_id" : ObjectId("577f8ae47e6ddc37d3a03ff7"),
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
		"_id" : ObjectId("577f8ae47e6ddc37d3a03ff8"),
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
		"_id" : ObjectId("577f8ae47e6ddc37d3a03ff9"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577f8ae47e6ddc37d3a03ffa"),
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
		"_id" : ObjectId("577f8ae57e6ddc37d3a03ffb"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a03ffc"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-597-7702"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a03ffd"),
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
		"_id" : ObjectId("577f8ae57e6ddc37d3a03ffe"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04000"),
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
		"_id" : ObjectId("577f8ae57e6ddc37d3a04001"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04002"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-415-1000"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04003"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04004"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-B",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3x3rd, 1x2xMain",
			"416-785-1500"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04005"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-36-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4xUpper, 1x2xMain",
			"416-461-0907"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04006"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-22-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-699-0303"
		]
	},
	{
		"_id" : ObjectId("577f8ae57e6ddc37d3a04007"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x4, 1x3, 1x2",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("577f8af37e6ddc37d3a04008"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"108-8-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("577f8af37e6ddc37d3a04009"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-C",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"416-410-3000"
		]
	},
	{
		"_id" : ObjectId("577f8af37e6ddc37d3a0400a"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-231-5000"
		]
	},
	{
		"_id" : ObjectId("577f8af37e6ddc37d3a0400b"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"118-5-R",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4, 1x2",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a0400c"),
		"Undefined" : [
			"Toronto W04",
			"Beechborough-Greenbrook",
			"Toronto",
			"114-13-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a0400d"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2, 1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a0400e"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a0400f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04010"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04011"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-288-8822"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04012"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x5, 1x2",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04013"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04014"),
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
		"_id" : ObjectId("577f8af47e6ddc37d3a04015"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04016"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x3",
			"905-851-4409"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04017"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"19-10-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04018"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-494-3337"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a04019"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-13-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-588-6777"
		]
	},
	{
		"_id" : ObjectId("577f8af47e6ddc37d3a0401a"),
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
		"_id" : ObjectId("577f8af47e6ddc37d3a0401b"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"114-10-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"416-233-6276"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a0401d"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a0401e"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a0401f"),
		"Undefined" : [
			"Vaughan",
			"Vaughan Grove",
			"York",
			"353-6-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"866-924-7496"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04020"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-290-1200"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04021"),
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
		"_id" : ObjectId("577f8afe7e6ddc37d3a04022"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04023"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-31-Z",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x4x3rd",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04024"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"355-19-X",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04025"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-23-W",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04026"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04027"),
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
		"_id" : ObjectId("577f8afe7e6ddc37d3a04028"),
		"Undefined" : [
			"Vaughan",
			"Lakeview Estates",
			"York",
			"354-17-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-856-8111"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a04029"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-28-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a0402a"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-499-0001"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a0402b"),
		"Undefined" : [
			"Markham",
			"Bayview Fairway-Bayview Country Club Estates",
			"York",
			"355-25-Y",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4xUpper, 1x3xBsmt",
			"905-881-2181"
		]
	},
	{
		"_id" : ObjectId("577f8afe7e6ddc37d3a0402c"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("577f8b017e6ddc37d3a0402d"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-25-S",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-649-3900"
		]
	},
	{
		"_id" : ObjectId("577f8b017e6ddc37d3a0402e"),
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
		"_id" : ObjectId("577f8b107e6ddc37d3a0402f"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"446-54-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04031"),
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
		"_id" : ObjectId("577f8b107e6ddc37d3a04032"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"458-40-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04033"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x2xFlat",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04034"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04035"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-455-7401"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04036"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-46-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04037"),
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
		"_id" : ObjectId("577f8b107e6ddc37d3a04038"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x2xFlat",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a04039"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x2",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a0403a"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Comm Element Condo",
			"Multi-Level",
			"1x4xMain, 1x4xMain, Main, Main",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a0403b"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-584-2727"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a0403c"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-890-9888"
		]
	},
	{
		"_id" : ObjectId("577f8b107e6ddc37d3a0403d"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a0403e"),
		"Undefined" : [
			"Mississauga",
			"Port Credit",
			"Peel",
			"479-41-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a0403f"),
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
		"_id" : ObjectId("577f8b117e6ddc37d3a04040"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-B",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x3, 1x2",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a04041"),
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
		"_id" : ObjectId("577f8b117e6ddc37d3a04042"),
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
		"_id" : ObjectId("577f8b117e6ddc37d3a04043"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xLower",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a04044"),
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
		"_id" : ObjectId("577f8b117e6ddc37d3a04045"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"478-38-R",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5x3rd, 1x4x2nd, 1x2xMain",
			"905-273-4211"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a04046"),
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
		"_id" : ObjectId("577f8b117e6ddc37d3a04047"),
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
		"_id" : ObjectId("577f8b117e6ddc37d3a04048"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x2, 2x4",
			"905-278-8866"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a04049"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 2x4x2nd",
			"905-357-1700"
		]
	},
	{
		"_id" : ObjectId("577f8b117e6ddc37d3a0404a"),
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
		"_id" : ObjectId("577f8b197e6ddc37d3a0404b"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"469-13-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("577f8b197e6ddc37d3a0404c"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"469-14-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xGround, 1x4xGround",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("577f8b197e6ddc37d3a0404d"),
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
		"_id" : ObjectId("577f8b1a7e6ddc37d3a0404e"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-27-N",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x2xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("577f8b1a7e6ddc37d3a0404f"),
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
		"_id" : ObjectId("577f8b1a7e6ddc37d3a04050"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-26-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("577f8b1a7e6ddc37d3a04051"),
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
		"_id" : ObjectId("577f8b1a7e6ddc37d3a04052"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"449-22-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("577f8b1a7e6ddc37d3a04053"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-25-N",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4, 1x2",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("577f8b1a7e6ddc37d3a04054"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xGround, 1x5xGround",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("577f8b6a7e6ddc37d3a04055"),
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
		"_id" : ObjectId("5780d6727e6ddc0ff0a693d0"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"17 x 128.5 Feet",
			"1x4x2nd, 1x4xBsmt, 1x2xGround",
			"416-977-6617"
		]
	},
	{
		"_id" : ObjectId("5780d6727e6ddc0ff0a693d1"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x2xMain, 1x5x2nd, 1x3xBsmt",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("5780d6747e6ddc0ff0a693d2"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"193-77-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"18.83 x 94.25 Feet",
			"1x2xGround, 1x3x2nd, 1x4x2nd",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5780d6747e6ddc0ff0a693d3"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"15.35 x 102 Feet",
			"1x4, 1x2",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5780d6777e6ddc0ff0a693d4"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-19-G",
			"2015",
			"Detached",
			"Other",
			"50 x 150 Feet",
			"1x3xMain, 1x3x2nd, 1x2xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5780d6777e6ddc0ff0a693d5"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-19-C",
			"2015",
			"Detached",
			"Bungalow",
			"49.29 x 131.31 Feet",
			"1x4xMain, 1x5xLower",
			"426-298-8200"
		]
	},
	{
		"_id" : ObjectId("5780d6777e6ddc0ff0a693d6"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-19-J",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 120 Feet",
			"1x7, 1x5, 1x4, 1x2",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5780d6777e6ddc0ff0a693d7"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-J",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 106 Feet",
			"1x2xMain, 2x5x2nd, 1x3x2nd, 1x4xBsmt",
			"416-944-1818"
		]
	},
	{
		"_id" : ObjectId("5780d67a7e6ddc0ff0a693d8"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 120 Feet",
			"1x5x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("5780d67a7e6ddc0ff0a693d9"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-H",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 106 Feet",
			"1x4x2nd, 1x2xLower",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5780d67a7e6ddc0ff0a693da"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-25-A",
			"2015",
			"Detached",
			"Sidesplit 4",
			"51.5 x 161 Feet",
			"2x4x2nd, 1x3xGround",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5780d67a7e6ddc0ff0a693db"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-J",
			"2015",
			"Detached",
			"2-Storey",
			"50.9 x 106.65 Feet",
			"1x6x2nd, 1x2xMain, 1x4x2nd, 1x5x2nd",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5780d67d7e6ddc0ff0a693dc"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"116-29-Q",
			"2015",
			"Detached",
			"2-Storey",
			"20 x 130 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("5780d67e7e6ddc0ff0a693dd"),
		"Undefined" : [
			"Toronto E03",
			"Danforth Village-East York",
			"Toronto",
			"115-24-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"25 x 85.5 Feet",
			"1x4, 1x3",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("5780d67e7e6ddc0ff0a693de"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-R",
			"2016",
			"Detached",
			"Bungalow",
			"39 x 100 Feet",
			"1x3xMain, 1x2xMain, 1x4xLower",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("5780d67e7e6ddc0ff0a693df"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-23-R",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"110 x 17.08 Feet",
			"1x4xGround, 1x4x2nd, 1x3xBsmt",
			"416-466-2090"
		]
	},
	{
		"_id" : ObjectId("5780d67e7e6ddc0ff0a693e0"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-S",
			"2015",
			"Detached",
			"3-Storey",
			"21.06 x 110 Feet",
			"1x2xMain, 2x4x2nd, 1x5x3rd, 1x4xBsmt",
			"905-564-8383"
		]
	},
	{
		"_id" : ObjectId("5780d67e7e6ddc0ff0a693e1"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-27-S",
			"2015",
			"Detached",
			"3-Storey",
			"70 x 145 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x4x3rd, 1x3xBsmt",
			"416-699-0303"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e2"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-37-K",
			"2016",
			"Detached",
			"Backsplit 3",
			"65 x 64.95 Feet",
			"1x4, 1x3",
			"416-222-2600"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e3"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2016",
			"Detached",
			"Sidesplit 4",
			"55 x 130.06 Feet",
			"1x2xMain, 1x4x3rd, 1x3x3rd",
			"416-588-3286"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e4"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-30-E",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.18 x 150 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xGround",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e5"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-38-C",
			"2015",
			"Detached",
			"Backsplit 4",
			"36.8 x 106.62 Feet",
			"2x3x2nd, 1x3xMain, 1x3xBsmt",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e6"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-G",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 130 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e7"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-28-K",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 125 Feet",
			"1x4, 1x2",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e8"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-43-J",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.72 x 82.02 Feet",
			"1x2xMain, 2x4xUpper",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693e9"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-43-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"45 x 150 Feet",
			"1x4xUpper, 1x3xIn Betwn, 1x1xLower",
			"416-798-7288"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693eb"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-C",
			"2015",
			"Detached",
			"2-Storey",
			"29.56 x 110 Feet",
			"1x2xGround, 1x4x2nd, 1x3x2nd",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693ec"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-B",
			"2016",
			"Link",
			"2-Storey",
			"20 x 130.34 Feet",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693ed"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-P",
			"2016",
			"Detached",
			"2-Storey",
			"35 x 134 Feet",
			"1x4x2nd, 1x2xMain",
			"416-284-4751"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693ee"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-H",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 110.86 Feet",
			"1x4xMain, 1x4xBsmt, 1x2xBsmt",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693ef"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-A",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 88.91 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5780d68a7e6ddc0ff0a693f0"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-43-K",
			"2016",
			"Detached",
			"2-Storey",
			"26 x 78.74 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f1"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"55 x 115.66 Feet",
			"1x4xMain, 1x3xMain, 1x3xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f2"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Bungalow",
			"55 x 87.5 Feet",
			"1x4xMain, 1x2xMain, 1x4xBsmt, 1x4xBsmt, 1x2xBsmt",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f3"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-H",
			"2016",
			"Detached",
			"2-Storey",
			"40.7 x 113.53 Feet",
			"1x4x2nd, 1x2xMain",
			"905-597-8677"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f4"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-D",
			"2016",
			"Detached",
			"2-Storey",
			"42.52 x 130.63 Feet",
			"1x2xGround, 1x3x2nd, 1x4x2nd",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f5"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-E",
			"2016",
			"Detached",
			"2-Storey",
			"44.16 x 152.36 Feet",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f6"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-P",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 286 Feet",
			"1x5, 3x4, 1x3, 1x2",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f7"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 162 Feet",
			"1x2xMain, 3x4x2nd, 1x5x2nd, 2x4xLower",
			"416-321-2228"
		]
	},
	{
		"_id" : ObjectId("5780d68b7e6ddc0ff0a693f8"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"111-39-F",
			"2016",
			"Detached",
			"Bungalow",
			"152 x 660 Feet",
			"1x4xGround, 1x3",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5780d6917e6ddc0ff0a693f9"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 128 Feet",
			"1x4, 1x3",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5780d6917e6ddc0ff0a693fa"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"102-10-E",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"22.59 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("5780d6917e6ddc0ff0a693fb"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-15-G",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 120 Feet",
			"1x3xMain, 1x2x2nd",
			"416-399-5907"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a693fc"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.79 x 123 Feet",
			"1x4x2nd, 1x4x3rd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a693fd"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"18.56 x 114.17 Feet",
			"1x4x2nd",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a693fe"),
		"Undefined" : [
			"Toronto W04",
			"Beechborough-Greenbrook",
			"Toronto",
			"108-12-K",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"59 x 175 Feet",
			"1x4x2nd, 1x4xMain, 1x4xLower",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a693ff"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-15-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"15.25 x 117.42 Feet",
			"1x4xGround, 1x4xBsmt, 1x4x2nd",
			"416-535-8000"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a69400"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-7-A",
			"2015",
			"Detached",
			"2-Storey",
			"56 x 175 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-856-1111"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a69401"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-P",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"23.48 x 100 Feet",
			"1x4, 1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a69402"),
		"Undefined" : [
			"Toronto W02",
			"Lambton Baby Point",
			"Toronto",
			"114-11-P",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"42 x 95 Feet",
			"1x5x2nd, 1x3x3rd, 1x3xLower",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("5780d6927e6ddc0ff0a69403"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-10-Q",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"50.59 x 200.49 Feet",
			"2x4x2nd, 1x3x3rd, 1x3xBsmt, 1x2xMain",
			"416-251-4000"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a69404"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"101-7-D",
			"2015",
			"Detached",
			"Backsplit 3",
			"45 x 130 Feet",
			"1x4xUpper, 1x3xBsmt",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a69405"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-D",
			"2015",
			"Detached",
			"2-Storey",
			"39.4 x 157.5 Feet",
			"1x4xUpper, 1x2xMain, 1x3xBsmt",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a69406"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-J",
			"2016",
			"Detached",
			"Bungalow",
			"53 x 110 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a69407"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"118-7-S",
			"2016",
			"Detached",
			"Bungalow",
			"41 x 142 Feet",
			"1x4xGround, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a69408"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"114-9-P",
			"2015",
			"Detached",
			"2-Storey",
			"41.99 x 125 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"416-231-5000"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a69409"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-5-V",
			"2015",
			"Detached",
			"2-Storey",
			"25.21 x 146.62 Feet",
			"1x5, 1x4, 1x3, 1x2",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5780d6967e6ddc0ff0a6940a"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"118-8-R",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 119 Feet",
			"2x5, 1x4, 1x6, 1x2",
			"10",
			"Br",
			"Bsmt",
			"3.38",
			"3.33",
			"Closet",
			"Hardwood Floor",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a6940b"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-23-K",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.61 x 88.58 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xGround",
			"905-604-9155"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a6940c"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-T",
			"2016",
			"Detached",
			"2-Storey",
			"40.26 x 102.63 Feet",
			"2x4x2nd, 1x2xMain",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a6940d"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-H",
			"2015",
			"Detached",
			"Bungalow",
			"54.59 x 150 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a6940e"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-J",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 83.3 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a6940f"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-R",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 100 Feet",
			"1x4xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a69410"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-P",
			"2016",
			"Detached",
			"2-Storey",
			"60.37 x 161.64 Feet",
			"1x2xGround, 1x3xBsmt, 1x4x2nd, 1x6x2nd, 1x5x2nd",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a69411"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-26-R",
			"2015",
			"Detached",
			"2-Storey",
			"37.24 x 129.8 Feet",
			"1x2xGround, 3x4x2nd, 1x4xBsmt",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("5780d69a7e6ddc0ff0a69412"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-26-S",
			"2015",
			"Detached",
			"2-Storey",
			"49.58 x 128.91 Feet",
			"2x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5780d69f7e6ddc0ff0a69413"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-X",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"16.4 x 115 Feet",
			"1x3xBsmt, 1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5780d69f7e6ddc0ff0a69414"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-X",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.56 x 100.07 Feet",
			"1x4x2nd, 1x2xGround",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("5780d69f7e6ddc0ff0a69415"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 86 Feet",
			"1x2xGround, 2x4x2nd",
			"905-841-0000"
		]
	},
	{
		"_id" : ObjectId("5780d69f7e6ddc0ff0a69416"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 103.92 Feet",
			"1x2xMain, 1x2x2nd, 1x4x2nd",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("5780d69f7e6ddc0ff0a69417"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-A",
			"2016",
			"Detached",
			"2-Storey",
			"31.6 x 101.35 Feet",
			"1x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5780d69f7e6ddc0ff0a69418"),
		"Undefined" : [
			"Aurora",
			"Hills of St Andrew",
			"York",
			"331-23-A",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"60 x 105.78 Feet",
			"1x4xMain, 1x3xMain, 1x3xMain",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("5780d6a07e6ddc0ff0a69419"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-X",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 109.9 Feet",
			"2x4, 1x3, 1x2",
			"905-717-3525"
		]
	},
	{
		"_id" : ObjectId("5780d6a07e6ddc0ff0a6941a"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-25-Z",
			"2015",
			"Detached",
			"2-Storey",
			"45.93 x 85.3 Feet",
			"2x4x2nd, 1x2xMain",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("5780d6a07e6ddc0ff0a6941b"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"22-A",
			"2016",
			"Detached",
			"2-Storey",
			"95.9 x 215 Feet",
			"1x2xGround, 2x5x2nd, 1x3xBsmt",
			"905-841-0000"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a6941c"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-16-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.5 x 33 Metres",
			"2x4, 1x2",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a6941d"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-7-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"23.95 x 102 Feet",
			"1x2xMain, 2x4xUpper, 1x3xBsmt",
			"416-410-9111"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a6941e"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"7.35 x 31.1 Metres",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a6941f"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"32.55 x 100.07 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a69420"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-16-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"29.53 x 104.99 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"416-733-7784"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a69421"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 78.74 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a69422"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.5 x 24 Metres",
			"2x4x2nd, 1x2xMain",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5780d6a87e6ddc0ff0a69423"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.11 x 109.91 Feet",
			"1x2xGround, 2x4x2nd, 1x3xBsmt",
			"416-691-3000"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a69424"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-16-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"7.5 x 30.43 Metres",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a69425"),
		"Undefined" : [
			"Vaughan",
			"Elder Mills",
			"York",
			"353-5-V",
			"2015",
			"Detached",
			"2-Storey",
			"7.17 x 20.57 Metres",
			"1x5xUpper, 1x4xUpper, 1x2xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a69426"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-17-Y",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 137.14 Feet",
			"1x5, 1x3, 1x2, 1x4",
			"905-508-8787"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a69427"),
		"Undefined" : [
			"Vaughan",
			"Vaughan Grove",
			"York",
			"353-6-Y",
			"2015",
			"Detached",
			"Bungaloft",
			"50 x 150 Feet",
			"1x5xGround, 1x3xGround, 1x5xUpper",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a69428"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-9-S",
			"2015",
			"Detached",
			"2-Storey",
			"40 x 111.38 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a69429"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-18-V",
			"2016",
			"Detached",
			"2-Storey",
			"35.99 x 98.26 Feet",
			"1x2xMain, 1x5x2nd, 2x3x2nd",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a6942a"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"347-9-U",
			"2016",
			"Detached",
			"2-Storey",
			"70.33 x 136.15 Feet",
			"1x6x2nd, 1x3xBsmt, 2x4x2nd, 1x2xGround",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5780d6a97e6ddc0ff0a6942b"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-9-S",
			"2016",
			"Detached",
			"Bungaloft",
			"80.05 x 124.37 Feet",
			"1x6xMain, 1x4xMain, 1x2xMain, 1x4xUpper, 1x4xBsmt",
			"416-834-9261"
		]
	},
	{
		"_id" : ObjectId("5780d6ab7e6ddc0ff0a6942c"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"335-6-H",
			"2015",
			"Detached",
			"Bungalow",
			"80 x 188 Feet",
			"1x4, 1x3",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("5780d6ab7e6ddc0ff0a6942d"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-18-H",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25 x 115.06 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("5780d6ab7e6ddc0ff0a6942e"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-17-J",
			"2015",
			"Detached",
			"2-Storey",
			"100 x 226 Feet",
			"1x2xMain, 1x5xUpper, 1x4xUpper",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5780d6ab7e6ddc0ff0a6942f"),
		"Undefined" : [
			"King",
			"Rural King",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"490.18 x 0 Feet",
			"1x2xMain, 1x6xMain, 1x3xLower, 2x3xMain, 2x5x2nd",
			"905-833-0033"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69430"),
		"Undefined" : [
			"Markham",
			"Village Green-South Unionville",
			"York",
			"356-33-W",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 111.55 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69431"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"27.07 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"905-513-6633"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69432"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"17.67 x 79.56 Feet",
			"2x3x3rd, 1x2x2nd, 1x2xGround",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69433"),
		"Undefined" : [
			"Markham",
			"Old Markham Village",
			"York",
			"357-36-V",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"35.58 x 94.15 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xLower",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69434"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Link",
			"2-Storey",
			"30.84 x 111.5 Feet",
			"1x4x2nd, 1x3x2nd, 1x4xBsmt, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69435"),
		"Undefined" : [
			"Markham",
			"Victoria Manor-Jennings Gate",
			"York",
			"350-28-R",
			"2016",
			"Link",
			"2-Storey",
			"10.33 x 15.16 Metres",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69436"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-28-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 77.79 Feet",
			"1x4x2nd, 1x2xGround, 1x2xBsmt, 1x4x2nd",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69437"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Link",
			"2-Storey",
			"30.09 x 119.42 Feet",
			"2x4x2nd, 1x2xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69438"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-22-W",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 175 Feet",
			"1x4xMain, 1x3xLower",
			"416-221-8889"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a69439"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Z",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 136.8 Feet",
			"1x5xMain, 1x4xLower",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a6943a"),
		"Undefined" : [
			"Markham",
			"Royal Orchard",
			"York",
			"355-22-W",
			"2015",
			"Detached",
			"2-Storey",
			"55 x 110 Feet",
			"1x4x2nd, 1x2xBsmt, 1x3x2nd, 1x2xMain",
			"905-889-9330"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a6943b"),
		"Undefined" : [
			"Markham",
			"Thornlea",
			"York",
			"355-25-X",
			"2015",
			"Detached",
			"2-Storey",
			"59.06 x 209.65 Feet",
			"1x2xMain, 1x3xUpper, 2x4xUpper, 1x6xUpper, 1x4xLower",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a6943c"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-23-Y",
			"2016",
			"Detached",
			"2-Storey",
			"75 x 150 Feet",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x3x2nd, 2x2",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5780d6b47e6ddc0ff0a6943d"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-28-Q",
			"2015",
			"Detached",
			"2-Storey",
			"413.16 x 212.52 Feet",
			"1x3xMain, 2x5x2nd, 1x3xBsmt",
			"905-940-4180"
		]
	},
	{
		"_id" : ObjectId("5780d6b67e6ddc0ff0a6943e"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"24.61 x 85.3 Feet",
			"2x4, 1x2",
			"905-640-0888"
		]
	},
	{
		"_id" : ObjectId("5780d6b67e6ddc0ff0a6943f"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"67.5 x 113 Feet",
			"1x5xMain, 1x4xMain",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("5780d6b67e6ddc0ff0a69440"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-L",
			"2015",
			"Detached",
			"2-Storey",
			"49.93 x 114.83 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("5780d6ba7e6ddc0ff0a69441"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"320-27-R",
			"2015",
			"Detached",
			"2-Storey",
			"53.79 x 130.26 Feet",
			"1x4, 1x2",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("5780d6ba7e6ddc0ff0a69442"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"319-26-P",
			"2015",
			"Detached",
			"2-Storey",
			"53.58 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"877-352-4378"
		]
	},
	{
		"_id" : ObjectId("5780d6ba7e6ddc0ff0a69443"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-25-M",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 256.33 Feet",
			"1x4xMain, 1x4xLower",
			"905-884-5422"
		]
	},
	{
		"_id" : ObjectId("5780d6ba7e6ddc0ff0a69444"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-26-N",
			"2015",
			"Detached",
			"Sidesplit 4",
			"102.95 x 160.85 Feet",
			"1x4xUpper, 1x2xUpper",
			"800-829-2842"
		]
	},
	{
		"_id" : ObjectId("5780d6ba7e6ddc0ff0a69445"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"320-27-Q",
			"2015",
			"Detached",
			"Bungalow",
			"120 x 615 Feet",
			"1x4xMain, 1x4xMain, 1x4xLower, 1x2xMain",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a69446"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-45-U",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 130 Feet",
			"1x4xMain",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a69447"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-38-T",
			"2015",
			"Detached",
			"Bungalow",
			"45 x 118 Feet",
			"1x4xMain",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a69448"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"302-38-T",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"78 x 194 Feet",
			"1x4xMain",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a69449"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.17 x 85.2 Feet",
			"1x2xMain, 2x4x2nd",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a6944a"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-A",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 135 Feet",
			"1x4xGround, 1x3xGround",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a6944b"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"66 x 202 Feet",
			"1x4xMain, 1x4xBsmt, 1x2xBsmt",
			"905-722-5533"
		]
	},
	{
		"_id" : ObjectId("5780d6bf7e6ddc0ff0a6944c"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"304-55-X",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"87.25 x 171 Feet",
			"1x4xMain, 1x4xGround, 1x2xGround",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("5780d6c07e6ddc0ff0a6944d"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"135 x 400 Feet",
			"1x4xMain, 1x4xMain, 1x2xMain, 1x3xLower",
			"705-426-4663"
		]
	},
	{
		"_id" : ObjectId("5780d6c07e6ddc0ff0a6944e"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-V",
			"2016",
			"Detached",
			"2-Storey",
			"12 x 35 Metres",
			"1x2xMain, 2x4xUpper, 1x5xUpper",
			"905-476-5555"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a6944f"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-8-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.03 x 100.2 Feet",
			"1x2xMain, 1x4x2nd",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a69450"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"30 x 115 Feet",
			"1x4x2nd, 1x2xGround, 1x3xLower",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a69451"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"258-9-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.61 x 88.58 Feet",
			"1x4x2nd, 1x4xBsmt, 1x3x2nd, 1x2xMain",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a69452"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-8-P",
			"2016",
			"Detached",
			"2-Storey",
			"35.17 x 99.51 Feet",
			"2x4xUpper, 1x2xMain",
			"905-405-8484"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a69453"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"258-8-M",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 88.58 Feet",
			"1x5, 1x4, 1x2",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a69454"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-Q",
			"2016",
			"Detached",
			"2-Storey",
			"40.55 x 116.34 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-266-3339"
		]
	},
	{
		"_id" : ObjectId("5780d6c47e6ddc0ff0a69455"),
		"Undefined" : [
			"Pickering",
			"Woodlands",
			"Durham",
			"274-4-T",
			"2016",
			"Detached",
			"2-Storey",
			"75 x 396 Feet",
			"1x6, 2x2, 2x4",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a69456"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-12-U",
			"2016",
			"Detached",
			"2-Storey",
			"0 x 0 Feet",
			"1x4x2nd, 1x2xLower",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a69457"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-15-N",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"26.41 x 42.65 Feet",
			"1x4, 1x4, 1x2",
			"905-361-8738"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a69458"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-12-P",
			"2015",
			"Detached",
			"2-Storey",
			"29.63 x 101.71 Feet",
			"1x4x2nd, 1x2xLower",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a69459"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"275-15-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.61 x 93.5 Feet",
			"2x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a6945a"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25 x 125 Feet",
			"1x2xMain, 1x3xBsmt, 2x4x2nd",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a6945b"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-N",
			"2016",
			"Detached",
			"2-Storey",
			"30.18 x 109.91 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x3xBsmt",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a6945c"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-15-N",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 85.3 Feet",
			"1x4, 1x2, 1x4",
			"905-361-8738"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a6945d"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-P",
			"2016",
			"Detached",
			"2-Storey",
			"51.77 x 119 Feet",
			"1x2xMain, 1x4, 1x5",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a6945e"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-15-M",
			"2015",
			"Detached",
			"2-Storey",
			"41.01 x 82.02 Feet",
			"2x4, 1x2",
			"905-640-0888"
		]
	},
	{
		"_id" : ObjectId("5780d6ca7e6ddc0ff0a6945f"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2015",
			"Detached",
			"2-Storey",
			"55 x 87 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69460"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"268-23-N",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 131.2 Feet",
			"1x4xMain, 1x2x2nd",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69461"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 98 Feet",
			"2x4x2nd, 1x2xGround",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69462"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-P",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"72.8 x 123.39 Feet",
			"1x4xMain, 1x2xGround",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69463"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-G",
			"2015",
			"Detached",
			"2-Storey",
			"35 x 108 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69464"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-G",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 109.91 Feet",
			"1x2, 2x4",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69465"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-24-G",
			"2016",
			"Detached",
			"2-Storey",
			"43.01 x 111.48 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("5780d6cf7e6ddc0ff0a69466"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 111.5 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("5780d6d67e6ddc0ff0a69468"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"269-26-Q",
			"2015",
			"Detached",
			"Bungalow",
			"38.5 x 133 Feet",
			"1x4xMain",
			"Workshop",
			"905-666-0000"
		]
	},
	{
		"_id" : ObjectId("5780d6d67e6ddc0ff0a69469"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-U",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"0 x 0 Feet",
			"1x4x2nd, 1x2xBsmt",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a6946b"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30.37 x 100 Feet",
			"2x4",
			"905-430-6066"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a6946d"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-25-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30.75 x 114 Feet",
			"1x4xUpper, 1x2xLower",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a6946e"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-R",
			"2016",
			"Detached",
			"Backsplit 3",
			"50.03 x 100 Feet",
			"1x4xUpper, 1x3xUpper, 1x2xLower",
			"905-668-3800"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a6946f"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 111 Feet",
			"1x2xGround, 2x4x2nd, 1x3xBsmt",
			"416-288-0800"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a69470"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"268-25-Q",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 359.5 Feet",
			"1x3, 1x3",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a69471"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-29-Q",
			"2015",
			"Detached",
			"2-Storey",
			"78.04 x 140 Feet",
			"1x4, 1x4",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a69472"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2016",
			"Detached",
			"2-Storey",
			"43.08 x 178.3 Feet",
			"1x2, 2x4",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a69473"),
		"Undefined" : [
			"Oshawa",
			"Northglen",
			"Durham",
			"268-25-N",
			"2015",
			"Detached",
			"Sidesplit 5",
			"47 x 108 Feet",
			"1x4xUpper, 1x2xMain, 1x3xLower",
			"4",
			"Kitchen",
			"In Betwn",
			"4.04",
			"2.95",
			"5",
			"Family",
			"Ground",
			"5.20",
			"3.20",
			"Gas Fireplace",
			"W/O To Deck",
			"W/O To Yard",
			"6",
			"Master",
			"Upper",
			"4.75",
			"3.38",
			"W/O To Balcony",
			"7",
			"2nd Br",
			"Upper",
			"3.63",
			"2.87",
			"8",
			"3rd Br",
			"Upper",
			"3.61",
			"2.87",
			"9",
			"4th Br",
			"Lower",
			"3.56",
			"3.10",
			"10",
			"Rec",
			"Lower",
			"5.72",
			"4.14",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a69474"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-26-M",
			"2016",
			"Detached",
			"Backsplit 4",
			"55 x 133.63 Feet",
			"1x3xUpper, 1x4xLower",
			"905-723-4800"
		]
	},
	{
		"_id" : ObjectId("5780d6d77e6ddc0ff0a69475"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-26-K",
			"2015",
			"Detached",
			"2-Storey",
			"44.29 x 130.21 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5780d6dd7e6ddc0ff0a69476"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-S",
			"2016",
			"Detached",
			"Bungalow",
			"43 x 128.16 Feet",
			"1x4xMain, 1x2xLower",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("5780d6dd7e6ddc0ff0a69477"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"16.59 x 196 Feet",
			"2x4xUpper, 1x2xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5780d6dd7e6ddc0ff0a69478"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-U",
			"2016",
			"Detached",
			"2-Storey",
			"50.79 x 100.49 Feet",
			"1x4xUpper, 1x3xUpper, 1x2xMain",
			"905-743-2583"
		]
	},
	{
		"_id" : ObjectId("5780d6dd7e6ddc0ff0a69479"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-Q",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 115.16 Feet",
			"1x4xBsmt, 1x2xMain, 1x4x2nd",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5780d6dd7e6ddc0ff0a6947a"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-R",
			"2015",
			"Link",
			"2-Storey",
			"26.25 x 0 Feet",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5780d6dd7e6ddc0ff0a6947b"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"29.95 x 0 Feet",
			"2x4x2nd, 1x2xMain",
			"905-436-0990"
		]
	},
	{
		"_id" : ObjectId("5780d6de7e6ddc0ff0a6947c"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-34-R",
			"2016",
			"Detached",
			"2-Storey",
			"53.45 x 108 Feet",
			"1x4x2nd, 1x2xMain",
			"705-738-2378"
		]
	},
	{
		"_id" : ObjectId("5780d6de7e6ddc0ff0a6947d"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-S",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 102.53 Feet",
			"1x2, 1x3, 1x4",
			"416-424-1300"
		]
	},
	{
		"_id" : ObjectId("5780d6de7e6ddc0ff0a6947e"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"262-39-J",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"93.77 x 347.83 Feet",
			"1x4xMain, 1x3xMain, 1x3xBsmt",
			"905-683-1790"
		]
	},
	{
		"_id" : ObjectId("5780d6de7e6ddc0ff0a6947f"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 109.91 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt, Bsmt",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("5780d6de7e6ddc0ff0a69480"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-X",
			"2015",
			"Detached",
			"2-Storey",
			"60.47 x 100 Feet",
			"1x5, 1x4, 1x2",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5780d6e07e6ddc0ff0a69481"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-22-Z",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"70 x 148 Feet",
			"1x4xMain, 1x3xLower",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("5780d6e07e6ddc0ff0a69482"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-22-Z",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"228 x 0 Feet",
			"1x4xMain, 1x4xGround",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("5780d6e17e6ddc0ff0a69483"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"84.08 x 121.83 Feet",
			"1x4xMain, 1x3xMain",
			"905-985-7351"
		]
	},
	{
		"_id" : ObjectId("5780d6e17e6ddc0ff0a69484"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-28-P",
			"2016",
			"Detached",
			"Bungalow",
			"46.47 x 100 Feet",
			"1x4xMain, 1x3xMain, 1x2xBsmt",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5780d6e27e6ddc0ff0a69485"),
		"Undefined" : [
			"Uxbridge",
			"Rural Uxbridge",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"141 x 1320 Feet",
			"1x4xMain, 1x2xMain",
			"705-426-4663"
		]
	},
	{
		"_id" : ObjectId("5780d6e27e6ddc0ff0a69486"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-12-L",
			"2016",
			"Detached",
			"2-Storey",
			"56.99 x 115 Feet",
			"1x2xGround, 2x4x2nd, 1x4xBsmt",
			"11",
			"Rec",
			"Bsmt",
			"9.97",
			"L-Shaped Room",
			"12",
			"Br",
			"Bsmt",
			"3.72",
			"3.30",
			"905-852-6143"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69487"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Glencairn",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"115.88 x 131.63 Feet",
			"1x2xMain",
			"705-739-1000"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69488"),
		"Undefined" : [
			"Clearview",
			"New Lowell",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"79 x 110 Feet",
			"1x4xMain",
			"705-424-7200"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69489"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"15-29-G",
			"2016",
			"Detached",
			"Bungalow",
			"0 x 0 Feet",
			"1x4xMain, 1x3xMain",
			"905-278-1900"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6948a"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.13 x 230.31 Feet",
			"1x2xLower, 1x4xUpper",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6948c"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-2-D",
			"2015",
			"Detached",
			"Sidesplit 3",
			"60 x 100 Feet",
			"1x4xUpper, 1x2xLower",
			"705-435-5556"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6948e"),
		"Undefined" : [
			"Barrie",
			"400 West",
			"Simcoe",
			"508-9-P",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"9.04 x 25 Metres",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"705-721-9111"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6948f"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"2016",
			"Link",
			"Sidesplit 4",
			"29.53 x 109.9 Feet",
			"1x2xMain, 1x4xUpper",
			"705-739-1000"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69490"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-3-D",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.78 x 0 Feet",
			"1x4xUpper, 1x2xMain",
			"705-435-5556"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69491"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-Q",
			"2015",
			"Link",
			"2-Storey",
			"29.52 x 142.22 Feet",
			"1x2xMain, 1x3xUpper, 1x5xUpper",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69492"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-C",
			"2015",
			"Detached",
			"Bungalow",
			"66 x 165 Feet",
			"1x4xMain, 1x4xLower",
			"905-775-5677"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69493"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1.04 x 0 Acres",
			"1x4xMain",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69495"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-15-N",
			"2015",
			"Detached",
			"Bungalow",
			"44.88 x 136.12 Feet",
			"1x2xMain, 2x4xMain, 1x4xLower",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69496"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"506-17-L",
			"2015",
			"Detached",
			"Bungalow",
			"40.16 x 109.91 Feet",
			"1x4xMain, 1x5xMain",
			"866-430-9900"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69497"),
		"Undefined" : [
			"Barrie",
			"Edgehill Drive",
			"Simcoe",
			"504-6-K",
			"2015",
			"Detached",
			"2-Storey",
			"15 x 33.6 Metres",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69498"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-M",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 111.55 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-251-5438"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a69499"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"508-16-M",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 100 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6949a"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"100 x 209.9 Feet",
			"1x2xMain, 1x3xUpper, 1x4xUpper, 1x2xLower",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6949b"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"99.9 x 149.9 Feet",
			"1x4x2nd, 1x2xMain, 1x3x2nd",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("5780d6f57e6ddc0ff0a6949c"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"102.04 x 141.64 Feet",
			"1x4xMain, 1x2xMain, 1x4xBsmt",
			"888-429-2121"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a6949d"),
		"Undefined" : [
			"Springwater",
			"Rural Springwater",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"240 x 225 Feet",
			"1x3xMain, 1x4xMain, 1x3xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a6949e"),
		"Undefined" : [
			"Essa",
			"Thornton",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"29.95 x 44 Metres",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"705-739-1000"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a6949f"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"180 x 385 Feet",
			"1x4, 1x3",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a0"),
		"Undefined" : [
			"Barrie",
			"Lakeshore",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"177 x 101 Feet",
			"1x3xBsmt, 1x4x2nd",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a1"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Loretto",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"100.89 x 0 Feet",
			"1x2xMain, 1x4xMain, 1x5xMain",
			"905-936-4216"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a2"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"10 x 0 Acres",
			"2x4xMain",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a3"),
		"Undefined" : [
			"Essa",
			"Rural Essa",
			"Simcoe",
			"11-28-E",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"200 x 250 Feet",
			"1x4xGround, 1x5xGround, 1x3xBsmt, 1x6xBsmt",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a4"),
		"Undefined" : [
			"Springwater",
			"Rural Springwater",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"125 x 282 Feet",
			"2x4xMain, 1x3xBsmt, 1x2xMain",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a5"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-K",
			"2016",
			"Detached",
			"2-Storey",
			"66.27 x 110 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-895-2882"
		]
	},
	{
		"_id" : ObjectId("5780d6f67e6ddc0ff0a694a6"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"101.27 x 215 Feet",
			"1x2xGround, 1x3x2nd, 1x4",
			"416-488-2875"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694a7"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 101.71 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"519-925-2761"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694a8"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-44-G",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.77 x 111.55 Feet",
			"1x4x2nd, 1x2xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694a9"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-G",
			"2016",
			"Detached",
			"2-Storey",
			"39.54 x 0 Feet",
			"1x2xMain, 1x4xUpper, 1x2xLower",
			"519-940-9900"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694aa"),
		"Undefined" : [
			"East Garafraxa",
			"Rural East Garafraxa",
			"Dufferin",
			"2015",
			"Vacant Land",
			"44 x 0 Acres",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694ab"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"Backsplit 4",
			"56 x 114 Feet",
			"2x4x2nd, 1x3xLower",
			"905-897-5000"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694ac"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"53.96 x 90.4 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694ad"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"40 x 0 Acres",
			"1x4xUpper, 1x2xMain",
			"519-943-0860"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694af"),
		"Undefined" : [
			"Amaranth",
			"Rural Amaranth",
			"Dufferin",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"1.37 x 0 Acres",
			"1x2xGround, 1x4x2nd, 1x3xLower",
			"800-360-5821"
		]
	},
	{
		"_id" : ObjectId("5780d6fb7e6ddc0ff0a694b0"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow",
			"35 x 0 Acres",
			"1x4xLower, 1x4xMain, 1x3xBsmt",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b1"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"464-31-H",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"29.25 x 124.53 Feet",
			"1x4xUpper, 1x3xUpper, 1x3xLower",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b2"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-51-B",
			"2016",
			"Detached",
			"Bungalow",
			"55.16 x 100 Feet",
			"1x4xGround, 1x4xBsmt",
			"905-833-3008"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b3"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.57 x 109.32 Feet",
			"2x4xUpper, 1x2xGround",
			"905-573-1188"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b4"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"458-40-B",
			"2016",
			"Detached",
			"Backsplit 4",
			"46.8 x 107.4 Feet",
			"1x4xUpper, 1x2xMain",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b5"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-H",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.51 x 118.51 Feet",
			"2x4, 1x3, 1x2",
			"905-794-2677"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b6"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-F",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.57 x 115.03 Feet",
			"1x3x2nd, 1x4x2nd, 1x2xGround",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b7"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-40-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"26.74 x 111.68 Feet",
			"2x4x2nd, 1x2xMain",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b8"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-G",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"24.28 x 109.9 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694b9"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"41.04 x 103.74 Feet",
			"1x2xMain, 2x4x2nd",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694ba"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-35-K",
			"2016",
			"Detached",
			"2-Storey",
			"25.98 x 102 Feet",
			"1x2xMain, 1x2x2nd, 1x4x2nd",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694bb"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-A",
			"2016",
			"Detached",
			"Bungaloft",
			"50 x 125 Feet",
			"1x4xMain, 1x4x2nd, 1x3xBsmt, 1x3xBsmt",
			"905-857-7653"
		]
	},
	{
		"_id" : ObjectId("5780d70c7e6ddc0ff0a694bc"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"465-34-K",
			"2016",
			"Detached",
			"Backsplit 3",
			"40 x 120 Feet",
			"1x3xUpper, 1x2xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694bd"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-39-L",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"45.75 x 113.3 Feet",
			"1x3xMain, 1x3xBsmt",
			"905-257-3633"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694bf"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-H",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 104 Metres",
			"1x4xUpper, 1x4xUpper, 1x2xMain, 1x3xBsmt",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c0"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-H",
			"2016",
			"Detached",
			"2-Storey",
			"32.32 x 111.02 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c1"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-48-K",
			"2016",
			"Detached",
			"2-Storey",
			"70.24 x 115 Feet",
			"1x2xMain, 1x4xBsmt, 1x5x2nd, 1x5x2nd",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c2"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-37-G",
			"2016",
			"Detached",
			"2-Storey",
			"47.08 x 122.67 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c3"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-41-C",
			"2016",
			"Detached",
			"2-Storey",
			"77.4 x 109.91 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c5"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-36-S",
			"2016",
			"Detached",
			"Sidesplit 4",
			"58.78 x 90.92 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xIn Betwn, 1x4xBsmt",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c6"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"465-40-F",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 124.8 Feet",
			"1x3, 1x4",
			"905-278-3500"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c7"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-37-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"86.48 x 249.42 Feet",
			"1x4xMain, 1x4xMain, 1x5xMain, 1x3xLower",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5780d70d7e6ddc0ff0a694c8"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-35-H",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"68.52 x 137.79 Feet",
			"1x5, 3x4, 1x3, 1x2",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("5780d7247e6ddc0ff0a694c9"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"438-44-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"58 x 132 Feet",
			"1x2x2nd, 1x3xGround",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("5780d7247e6ddc0ff0a694ca"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-T",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 95 Feet",
			"1x5, 1x2",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7247e6ddc0ff0a694cb"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"40 x 90 Feet",
			"1x4, 1x2, 1x3",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694cc"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"451-38-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.83 x 103.35 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694cd"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-52-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"25.46 x 110.27 Feet",
			"1x3x2nd, 1x2xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694ce"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"465-40-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.81 x 84.81 Feet",
			"2x4x2nd, 1x2xMain",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694cf"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"14.76 x 91.46 Feet",
			"1x4x3rd, 1x4x3rd, 1x2xMain, 1x4xGround",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d0"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.59 x 112.14 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-564-2100"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d1"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2015",
			"Detached",
			"Backsplit 5",
			"29.85 x 111.03 Feet",
			"1x3xLower, 1x3x2nd, 1x3x2nd",
			"416-371-3737"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d2"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-U",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"35 x 101.74 Feet",
			"1x4x2nd, 1x2xGround, 1x3xLower",
			"905-864-4238"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d3"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-S",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d4"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 122.21 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d5"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"23.85 x 82.02 Feet",
			"1x4x3rd, 1x2x2nd, 1x4xMain, 1x4x3rd",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d6"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"49.08 x 62.63 Feet",
			"1x2xMain, 1x4xBsmt, 1x4x2nd, 1x4x2nd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d7"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-52-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.51 x 109.91 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x4xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d8"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"454-57-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25 x 108 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694d9"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"459-41-B",
			"2015",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"44.23 x 90 Feet",
			"1x4xMain, 1x3xMain, 1x2xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694da"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-41-P",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 80.38 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694db"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-58-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.56 x 90.22 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694dc"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-41-Z",
			"2016",
			"Detached",
			"2-Storey",
			"30.71 x 110 Feet",
			"3x4x2nd, 1x2xGround, 1x4xBsmt",
			"416-728-9600"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694dd"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"51 x 121.52 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694de"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-U",
			"2016",
			"Detached",
			"2-Storey",
			"41.99 x 85.96 Feet",
			"1x2, 1x5x2nd, 1x4x2nd, 1x4xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694df"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-X",
			"2015",
			"Detached",
			"2-Storey",
			"41 x 104 Feet",
			"1x5x2nd, 1x5x2nd, 1x2xMain, 1x4xBsmt",
			"905-553-8500"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694e0"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"72.83 x 100.07 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5780d7257e6ddc0ff0a694e1"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-X",
			"2016",
			"Detached",
			"2-Storey",
			"55 x 97 Feet",
			"1x4x2nd, 1x2xMain, 1x3x2nd, 1x3xBsmt",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e2"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington North",
			"Peel",
			"444-38-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"0 x 0 Metres",
			"1x5x3rd, 1x4x3rd, 1x2x2nd",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e3"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-37-Y",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"36.51 x 0 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e4"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-43-X",
			"2015",
			"Detached",
			"2-Storey",
			"53.32 x 100.7 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e5"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"471-32-L",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 110 Feet",
			"1x5xUpper, 1x4xUpper, 1x3xBsmt, 1x4xUpper, 1x4xMain",
			"416-741-4443"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e6"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"11.3 x 27 Metres",
			"1x5x2nd, 2x4x2nd, 1x2, 1x4xBsmt",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e7"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-57-T",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 109.91 Feet",
			"2x4, 1x2",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e8"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"453-56-V",
			"2016",
			"Detached",
			"2-Storey",
			"41.99 x 85.3 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694e9"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-37-X",
			"2016",
			"Detached",
			"2-Storey",
			"34.12 x 116.11 Feet",
			"1x2xMain, 2x3x2nd, 1x4x2nd",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694ea"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2016",
			"Detached",
			"2-Storey",
			"45.28 x 115.02 Feet",
			"1x5xUpper, 1x4xUpper, 1x2xMain, 1x4xBsmt",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694eb"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-50-P",
			"2016",
			"Detached",
			"2-Storey",
			"52.88 x 109.22 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-936-3500"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694ec"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-53-Q",
			"2015",
			"Detached",
			"2-Storey",
			"51 x 110 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694ed"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"439-53-P",
			"2016",
			"Detached",
			"2-Storey",
			"50.2 x 85.3 Feet",
			"2x5x2nd, 1x3x2nd, 1x2xGround, 1x4xBsmt",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("5780d7267e6ddc0ff0a694ee"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"447-57-S",
			"2016",
			"Detached",
			"2-Storey",
			"44.65 x 123.87 Feet",
			"1x6x2nd, 2x4x2nd, 1x2xMain",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694ef"),
		"Undefined" : [
			"Caledon",
			"Alton",
			"Peel",
			"407-42-P",
			"2015",
			"Detached",
			"Bungalow",
			"75.64 x 218.43 Feet",
			"2x3xMain",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694f0"),
		"Undefined" : [
			"Caledon",
			"Bolton North",
			"Peel",
			"432-63-H",
			"2015",
			"Link",
			"2-Storey",
			"25.3 x 113.39 Feet",
			"2x4x2nd, 1x2xMain, 1x4xLower",
			"905-936-4216"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694f1"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.51 x 106.36 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694f2"),
		"Undefined" : [
			"Caledon",
			"Inglewood",
			"Peel",
			"2016",
			"Detached",
			"Other",
			"125 x 200 Feet",
			"1x5xMain, 1x5xUpper, 1x2xGround",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694f3"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"414-39-X",
			"2016",
			"Detached",
			"Bungalow",
			"196.75 x 2175.7 Acres",
			"1x2xMain, 1x5xMain, 1x3xMain, 1x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694f4"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"2015",
			"Rural Resid",
			"2-Storey",
			"36.83 x 0 Acres",
			"1x3xMain, 1x2x2nd",
			"Indoor Arena",
			"905-841-7430"
		]
	},
	{
		"_id" : ObjectId("5780d72a7e6ddc0ff0a694f5"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"15-29-G",
			"2015",
			"Detached",
			"2-Storey",
			"750.3 x 694.15 Feet",
			"1x2xMain, 1x3xUpper, 2x4xUpper",
			"905-857-0651"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694f6"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-C",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 0 Feet",
			"1x2x2nd, 1x3x3rd, 1x4x3rd",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694f7"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-R",
			"2015",
			"Detached",
			"2-Storey",
			"30.18 x 117.23 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x2xBsmt",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694f8"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"427-23-G",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"60 x 110 Feet",
			"1x4, 1x3",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694f9"),
		"Undefined" : [
			"Milton",
			"Bronte Meadows",
			"Halton",
			"456-21-B",
			"2016",
			"Detached",
			"2-Storey",
			"48.31 x 100.3 Feet",
			"1x2xMain, 2x4x2nd",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694fa"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-31-R",
			"2015",
			"Detached",
			"2-Storey",
			"45.69 x 140.15 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-877-9001"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694fb"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"449-20-V",
			"2016",
			"Detached",
			"Bungalow",
			"100 x 150 Feet",
			"1x3xMain, 1x3xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694fc"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-31-N",
			"2016",
			"Detached",
			"2-Storey",
			"86 x 132 Feet",
			"1x2xMain, 1x4xUpper, 1x4xUpper",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694fd"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-A",
			"2015",
			"Detached",
			"2-Storey",
			"42.98 x 98.42 Feet",
			"1x5x2nd, 1x2xMain, 1x5x2nd, 1x2xLower",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694fe"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-C",
			"2016",
			"Detached",
			"2-Storey",
			"42.98 x 101.71 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3x2nd",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a694ff"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-C",
			"2016",
			"Detached",
			"2-Storey",
			"44.26 x 101.7 Feet",
			"1x6xUpper, 2x4xUpper, 1x2xMain",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5780d7307e6ddc0ff0a69500"),
		"Undefined" : [
			"Milton",
			"Nassagaweya",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"147.64 x 479.07 Feet",
			"1x2xMain, 2x5x2nd, 1x3x2nd",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("5780d7337e6ddc0ff0a69501"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"80 x 100.18 Feet",
			"1x2xMain, 1x5x2nd",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("5780d7337e6ddc0ff0a69502"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"477-25-R",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 114.8 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("5780d7337e6ddc0ff0a69503"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"56.26 x 115.41 Feet",
			"1x2xMain, 1x5x2nd, 1x5x2nd, 1x3xLower",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("5780d7337e6ddc0ff0a69504"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"90 x 150 Feet",
			"1x2xMain, 1x4xMain, 1x5xMain, 1x4xBsmt",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("5780d7367e6ddc0ff0a69505"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"469-13-N",
			"2016",
			"Detached",
			"2-Storey",
			"35.01 x 100.07 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xMain",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("5780d7367e6ddc0ff0a69506"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"469-15-M",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 85.3 Feet",
			"1x2xMain, 1x5x2nd, 1x3x2nd",
			"416-250-6464"
		]
	},
	{
		"_id" : ObjectId("5780d7367e6ddc0ff0a69507"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"2016",
			"Detached",
			"Bungaloft",
			"49.87 x 113.33 Feet",
			"1x2xMain, 1x4xMain, 1x4xUpper, 1x3xBsmt",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5780d7367e6ddc0ff0a69508"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-U",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 104.99 Feet",
			"1x5x2nd, 1x5x2nd, 1x2xGround, 1x3xBsmt",
			"416-479-4241"
		]
	},
	{
		"_id" : ObjectId("5780d7367e6ddc0ff0a69509"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"50.03 x 118.11 Feet",
			"1x2xGround, 2x5x2nd, 1x3xBsmt",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("5780d7da7e6ddc0ff0a6950a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-467-5050"
		]
	},
	{
		"_id" : ObjectId("5780d7da7e6ddc0ff0a6950c"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5780d7da7e6ddc0ff0a6950d"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-889-9330"
		]
	},
	{
		"_id" : ObjectId("5780d7da7e6ddc0ff0a6950e"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("5780d7da7e6ddc0ff0a6950f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69510"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69511"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-696-5266"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69512"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69513"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69514"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-224-2166"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69515"),
		"Undefined" : [
			"Toronto C02",
			"Casa Loma",
			"Toronto",
			"115-18-P",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69516"),
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
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69517"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69518"),
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
		"_id" : ObjectId("5780d7db7e6ddc0ff0a6951a"),
		"Undefined" : [
			"Toronto C01",
			"Dufferin Grove",
			"Toronto",
			"114-14-Q",
			"2016",
			"Comm Element Condo",
			"2-Storey",
			"1x3xMain",
			"416-461-9900"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a6951b"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-429-5118"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a6951c"),
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
		"_id" : ObjectId("5780d7db7e6ddc0ff0a6951d"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-480-1606"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a6951e"),
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
		"_id" : ObjectId("5780d7db7e6ddc0ff0a6951f"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-449-0090"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69520"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69521"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69522"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-544-1144"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69523"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69524"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-21-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4xFlat",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69525"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69526"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5780d7db7e6ddc0ff0a69527"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69528"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-928-9998"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69529"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-624-5678"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a6952a"),
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
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a6952b"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a6952d"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a6952e"),
		"Undefined" : [
			"Toronto C01",
			"Dufferin Grove",
			"Toronto",
			"114-14-Q",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x3x2nd, 1x4x2nd",
			"416-495-2660"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a6952f"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x2xMain, 1x4xLower, 1x3xLower",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a69538"),
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
		"_id" : ObjectId("577de49f7e6ddc7bb4a7512a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Parking Space",
			"0",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b2994ff"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"109-19-F",
			"2016",
			"Detached",
			"2-Storey",
			"44.07 x 122.5 Feet",
			"2x4x2nd, 1x3xLower, 1x2xGround",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b299500"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2015",
			"Detached",
			"2-Storey",
			"63.33 x 131.1 Feet",
			"1x4, 1x3, 1x2",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b29952c"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-22-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"18.42 x 94 Feet",
			"1x4x2nd, 1x3xLower",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b299554"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x4, 1x3",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b29955a"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-36-H",
			"2016",
			"Detached",
			"Bungalow",
			"42 x 122 Feet",
			"1x4, 1x2",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b29955e"),
		"Undefined" : [
			"Toronto E04",
			"Kennedy Park",
			"Toronto",
			"116-31-M",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 125 Feet",
			"1x4x2nd, 1x2xBsmt, 1x1xBsmt",
			"416-298-8880"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b29955f"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"55 x 110 Feet",
			"1x2xMain, 2x4x2nd",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("57870b2fe40ebb0d6b299a3f"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 0x0, 0x0, 0x0",
			"416-321-2228"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a43"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-26-S",
			"2015",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a48"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-221-0999"
		]
	},
	{
		"_id" : ObjectId("57870b3be40ebb0d6b299a5a"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-9-H",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3xGround",
			"905-764-3433"
		]
	},
	{
		"_id" : ObjectId("57870b46e40ebb0d6b299a7b"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-300-3000"
		]
	},
	{
		"_id" : ObjectId("57870b4de40ebb0d6b299a8c"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-27-L",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("57870b4de40ebb0d6b299a8f"),
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
		"_id" : ObjectId("57870b62e40ebb0d6b299ab2"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("57870b62e40ebb0d6b299aba"),
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
		"_id" : ObjectId("57870b63e40ebb0d6b299ac1"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("57870b63e40ebb0d6b299ac3"),
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
		"_id" : ObjectId("57870b6de40ebb0d6b299ade"),
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
		"_id" : ObjectId("57870b6de40ebb0d6b299adf"),
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
		"_id" : ObjectId("57899fcbf65a5818794e73ad"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-D",
			"2016",
			"Detached",
			"Bungalow",
			"44 x 133 Feet",
			"1x4",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("5790aced7e6ddc5232b5e802"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-B",
			"2016",
			"Detached",
			"Backsplit 3",
			"50 x 115 Feet",
			"2x4xUpper, 1x3xLower",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5790acee7e6ddc5232b5e804"),
		"Undefined" : [
			"Toronto E10",
			"Highland Creek",
			"Toronto",
			"111-40-F",
			"2015",
			"Detached",
			"Bungalow",
			"52.21 x 404 Feet",
			"1x4, 1x3",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5790acf67e6ddc5232b5e821"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-P",
			"2016",
			"Detached",
			"2-Storey",
			"20 x 138 Feet",
			"1x3x2nd, 1x3xBsmt",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5790ad0c7e6ddc5232b5e863"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"326-28-V",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 150 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5790ad447e6ddc5232b5e896"),
		"Undefined" : [
			"Markham",
			"German Mills",
			"York",
			"355-26-Z",
			"2016",
			"Link",
			"2-Storey",
			"37.5 x 125 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5790ad557e6ddc5232b5e8b6"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-A",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 135 Feet",
			"1x4xMain",
			"905-476-0111"
		]
	},
	{
		"_id" : ObjectId("5790ad6b7e6ddc5232b5e8f9"),
		"Undefined" : [
			"Whitby",
			"Rural Whitby",
			"Durham",
			"267-17-R",
			"2015",
			"Detached",
			"Bungalow",
			"80 x 200 Feet",
			"1x4xGround, 1x2xBsmt",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5790ad6b7e6ddc5232b5e8fc"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"2015",
			"Vacant Land",
			"414 x 1050 Feet",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5790ad747e6ddc5232b5e90e"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-28-V",
			"2016",
			"Link",
			"2-Storey",
			"27.06 x 127.82 Feet",
			"1x4",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("5790ad757e6ddc5232b5e912"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"2016",
			"Detached",
			"Sidesplit 3",
			"51.5 x 176 Feet",
			"1x4xUpper, 1x3xMain",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("5790ad767e6ddc5232b5e918"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"261-26-H",
			"2016",
			"Detached",
			"2-Storey",
			"41.02 x 95.14 Feet",
			"2x4x2nd, 1x2xMain",
			"905-436-0990"
		]
	},
	{
		"_id" : ObjectId("5790ad7c7e6ddc5232b5e92f"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-W",
			"2016",
			"Detached",
			"Bungalow",
			"43.31 x 96.6 Feet",
			"2x4xMain",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5790aed37e6ddc5232b5ec22"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"116-32-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-233-6276"
		]
	},
	{
		"_id" : ObjectId("5790aed37e6ddc5232b5ec26"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-8166"
		]
	},
	{
		"_id" : ObjectId("5790aedc7e6ddc5232b5ec40"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("5790aee47e6ddc5232b5ec54"),
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
		"_id" : ObjectId("5790aefb7e6ddc5232b5ec82"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2015",
			"Parking Space",
			"Other",
			"0x0",
			"905-268-0922"
		]
	},
	{
		"_id" : ObjectId("5790aefb7e6ddc5232b5ec83"),
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
		"_id" : ObjectId("5790aefc7e6ddc5232b5ec85"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-35-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5790aefd7e6ddc5232b5ec8e"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("57923ec95d12e50681a452f4"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"17 x 94 Feet",
			"1x4xMain, 1x2xMain, 1x3xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57923f775d12e506b1f03b96"),
		"Undefined" : [
			"Toronto C04",
			"Bedford Park-Nortown",
			"Toronto",
			"109-18-H",
			"2015",
			"Detached",
			"2-Storey",
			"49.08 x 126 Feet",
			"1x6, 1x4, 1x2, 1x5",
			"416-487-4311"
		]
	},
	{
		"_id" : ObjectId("57923f9e5d12e506b1f03bc1"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-28-S",
			"2016",
			"Detached",
			"2-Storey",
			"21.83 x 122 Feet",
			"1x3xMain, 1x2xLower",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579240207e6ddc7758e73f57"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-28-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 103 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("579240207e6ddc7758e73f59"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"61 x 203 Feet",
			"1x4xMain, 1x2xLower",
			"416-321-2228"
		]
	},
	{
		"_id" : ObjectId("579240217e6ddc7758e73f5c"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2016",
			"Detached",
			"Bungalow",
			"82 x 113.6 Feet",
			"1x4xMain, 1x3xLower, 1x2xMain",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("579240507e6ddc7758e73fba"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-W",
			"2016",
			"Detached",
			"Sidesplit 3",
			"65 x 125 Feet",
			"1x4x2nd, 1x2xGround",
			"416-622-6565"
		]
	},
	{
		"_id" : ObjectId("5792405e7e6ddc7758e73fcf"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.44 x 91 Feet",
			"1x3x2nd, 1x4x2nd, 1x2xGround",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("5792405e7e6ddc7758e73fd2"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"17.39 x 98 Feet",
			"1x4, 1x4, 1x2",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("579240757e6ddc7758e74007"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"262 x 251 Metres",
			"1x4, 1x2",
			"905-640-0888"
		]
	},
	{
		"_id" : ObjectId("579240787e6ddc7758e7400b"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"319-26-Q",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"66 x 132 Feet",
			"1x4xMain",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("579240867e6ddc7758e7401d"),
		"Undefined" : [
			"Pickering",
			"Rosebank",
			"Durham",
			"2015",
			"Vacant Land",
			"Other",
			"50 x 195 Feet",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("579240867e6ddc7758e7401f"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"66.05 x 82.98 Feet",
			"2x3",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("579240967e6ddc7758e7403e"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 120 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("579240a67e6ddc7758e74056"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-Q",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"39 x 118 Feet",
			"1x4xGround, 1x2xUpper, 1x3x2nd, 1x3xBsmt",
			"905-430-6655"
		]
	},
	{
		"_id" : ObjectId("579240cc7e6ddc7758e74098"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"2015",
			"Vacant Land",
			"150 x 122 Feet",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("579240cc7e6ddc7758e74099"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"587-12-B",
			"2015",
			"Vacant Land",
			"200 x 122 Feet",
			"705-435-3000"
		]
	},
	{
		"_id" : ObjectId("579240cd7e6ddc7758e7409b"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2016",
			"Detached",
			"Bungaloft",
			"100 x 150 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("579240cd7e6ddc7758e740a0"),
		"Undefined" : [
			"Barrie",
			"Georgian Drive",
			"Simcoe",
			"502-13-F",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 109.38 Feet",
			"1x4x2nd, 1x3xBsmt, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("579240cd7e6ddc7758e740a3"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-B",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"73 x 130 Feet",
			"1x4xMain, 1x3x2nd",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("579240ce7e6ddc7758e740a6"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"Sidesplit 3",
			"59 x 110 Feet",
			"1x4xUpper, 1x4xBsmt",
			"905-775-5557"
		]
	},
	{
		"_id" : ObjectId("579240ce7e6ddc7758e740ad"),
		"Undefined" : [
			"Innisfil",
			"Lefroy",
			"Simcoe",
			"511-21-X",
			"2016",
			"Vacant Land",
			"Other",
			"0 x 0 Metres",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("579240d77e6ddc7758e740b6"),
		"Undefined" : [
			"Melancthon",
			"Rural Melancthon",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"131.27 x 131.69 Feet",
			"1x4xMain",
			"519-940-0004"
		]
	},
	{
		"_id" : ObjectId("579240d87e6ddc7758e740ba"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-G",
			"2016",
			"Detached",
			"Bungalow",
			"52.49 x 108.96 Feet",
			"1x4xMain, 1x3xMain, 1x3xLower",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("5792411f7e6ddc7758e74116"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-U",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"36.32 x 119.43 Feet",
			"1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("579241207e6ddc7758e7411f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.5 x 87.73 Feet",
			"1x2xMain, 1x4x3rd, 1x4x3rd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("579241227e6ddc7758e74136"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"438-45-P",
			"2015",
			"Detached",
			"Sidesplit 4",
			"70 x 112.75 Feet",
			"1x2xMain, 1x3xMain, 1x4xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5792412c7e6ddc7758e74148"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"437-36-M",
			"2016",
			"Detached",
			"2-Storey",
			"300 x 446 Feet",
			"1x4xMain, 1x4x2nd",
			"Box Stall",
			"905-458-7979"
		]
	},
	{
		"_id" : ObjectId("579241417e6ddc7758e7415e"),
		"Undefined" : [
			"Milton",
			"Campbellville",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"100 x 200 Feet",
			"1x4xGround",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("579241567e6ddc7758e74185"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-22-U",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 150 Feet",
			"1x4xGround, 1x3xLower",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5792415f7e6ddc7758e74199"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-11-T",
			"2016",
			"Detached",
			"Bungalow",
			"18.29 x 36.58 Acres",
			"1x4xMain",
			"905-335-8808"
		]
	},
	{
		"_id" : ObjectId("579242777e6ddc7758e742f7"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("5792427a7e6ddc7758e7430e"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5792427a7e6ddc7758e74310"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x3",
			"416-645-4670"
		]
	},
	{
		"_id" : ObjectId("579242967e6ddc7758e74331"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-26-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e1"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"",
			"2015",
			"Vacant Land",
			"",
			"1.61 x 0 Acres",
			"",
			"",
			"",
			"",
			"905-433-2579"
		]
	},
	{
		"_id" : ObjectId("577d79fd7e6ddc390520a1e2"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"",
			"2015",
			"Vacant Land",
			"",
			"1.3 x 0 Acres",
			"",
			"",
			"",
			"",
			"905-433-2579"
		]
	},
	{
		"_id" : ObjectId("577de38e7e6ddc7bb4a74eb7"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2016",
			"Vacant Land",
			"94 x 0 Feet",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("577de38f7e6ddc7bb4a74ebc"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2015",
			"Vacant Land",
			"16 x 0 Acres",
			"905-936-4216"
		]
	},
	{
		"_id" : ObjectId("577de49f7e6ddc7bb4a75130"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"905-882-6882"
		]
	},
	{
		"_id" : ObjectId("577f89977e6ddc37d3a03ed9"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"5.55 x 26.5 Metres",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-798-7777"
		]
	},
	{
		"_id" : ObjectId("5790aeb57e6ddc5232b5ebae"),
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
		"_id" : ObjectId("5792411f7e6ddc7758e7411c"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-42-V",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"37 x 116.68 Feet",
			"3x3",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5797411c7e6ddc790c0b1845"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-5-C",
			"2016",
			"Detached",
			"Backsplit 4",
			"25.74 x 114 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("579741257e6ddc790c0b1864"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-T",
			"2015",
			"Detached",
			"2-Storey",
			"10 x 33.5 Metres",
			"1x2, 1x3, 2x4",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("579741267e6ddc790c0b1866"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-22-Q",
			"2015",
			"Detached",
			"Sidesplit 3",
			"110 x 55 Feet",
			"1x4xUpper, 1x3xLower",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("579741327e6ddc790c0b188d"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"31.33 x 133.96 Feet",
			"1x4x2nd",
			"416-286-4800"
		]
	},
	{
		"_id" : ObjectId("5797413d7e6ddc790c0b18b1"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-9-W",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"29.31 x 112 Feet",
			"1x3, 1x4",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("579741537e6ddc790c0b18f5"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-38-V",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"60 x 110 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("579741547e6ddc790c0b18f8"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-35-Y",
			"2016",
			"Detached",
			"2-Storey",
			"31.17 x 103.3 Feet",
			"1x5, 1x4, 1x2",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("579741547e6ddc790c0b18fe"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"12.2 x 32.9 Metres",
			"1x5x2nd, 1x4x2nd, 1x3xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5797415a7e6ddc790c0b1913"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-38-K",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.7 x 89.24 Feet",
			"1x2xMain, 1x3x2nd, 1x5x2nd",
			"905-707-0188"
		]
	},
	{
		"_id" : ObjectId("579741627e6ddc790c0b1928"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-D",
			"2016",
			"Detached",
			"Bungaloft",
			"50 x 125 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("579741627e6ddc790c0b192a"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-30-E",
			"2015",
			"Detached",
			"Bungalow",
			"66 x 179.66 Feet",
			"1x4xGround",
			"416-858-0505"
		]
	},
	{
		"_id" : ObjectId("579741747e6ddc790c0b1953"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-16-N",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"23.62 x 42.65 Feet",
			"2x4x3rd, 1x2x2nd",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579741757e6ddc790c0b1959"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-14-P",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.6 x 108.6 Feet",
			"1x4x2nd, 1x2xMain, 1x3xLower",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("579741907e6ddc790c0b19a7"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"40 x 99 Feet",
			"1x4xMain",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("579741927e6ddc790c0b19bb"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 120.41 Feet",
			"1x4, 1x2, 1x4",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("579741a17e6ddc790c0b19ec"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-28-R",
			"2015",
			"Detached",
			"2-Storey",
			"89 x 156 Feet",
			"1x4xMain, 1x4xMain",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("579741be7e6ddc790c0b1a2e"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"50 x 147 Feet",
			"1x4",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("579741c07e6ddc790c0b1a39"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"10.65 x 32 Metres",
			"1x4x3rd, 1x2xBsmt",
			"705-424-0770"
		]
	},
	{
		"_id" : ObjectId("579741c07e6ddc790c0b1a3b"),
		"Undefined" : [
			"Innisfil",
			"Cookstown",
			"Simcoe",
			"577-2-E",
			"2016",
			"Detached",
			"Bungalow",
			"66 x 330 Feet",
			"1x4",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("579741df7e6ddc790c0b1a95"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-51-A",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 125 Feet",
			"1x3",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("579741e07e6ddc790c0b1a96"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"30 x 123 Feet",
			"1x4xMain",
			"519-570-4447"
		]
	},
	{
		"_id" : ObjectId("579741e17e6ddc790c0b1a9e"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-42-K",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"31.45 x 125.39 Feet",
			"1x4xUpper, 1x3x2nd, 1x3xBsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("579741e17e6ddc790c0b1aa0"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2016",
			"Detached",
			"2-Storey",
			"56.59 x 122.44 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("579741e27e6ddc790c0b1aaf"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"479-42-R",
			"2016",
			"Vacant Land",
			"60 x 132 Feet",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("579741e37e6ddc790c0b1ab7"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 100 Feet",
			"1x2xMain, 3x4x2nd, 1x5x2nd",
			"416-733-7784"
		]
	},
	{
		"_id" : ObjectId("579742077e6ddc790c0b1b0f"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-U",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 105 Feet",
			"1x4, 1x3",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("579742087e6ddc790c0b1b13"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 100.07 Metres",
			"1x2xGround, 1x3xBsmt, 1x4x2nd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("579742087e6ddc790c0b1b19"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.34 x 88.58 Feet",
			"1x5, 1x4, 1x2",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("579742097e6ddc790c0b1b1a"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"452-42-V",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"48 x 150 Feet",
			"2x4, 1x3",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5797420b7e6ddc790c0b1b2e"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-40-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.79 x 103.35 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("5797420d7e6ddc790c0b1b3a"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2016",
			"Detached",
			"2-Storey",
			"31.59 x 89.63 Feet",
			"1x2xMain, 2x4x2nd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5797420f7e6ddc790c0b1b51"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"19.1 x 27.5 Metres",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x4x2nd",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("5797420f7e6ddc790c0b1b52"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"439-56-O",
			"2016",
			"Detached",
			"2-Storey",
			"64.96 x 114.83 Feet",
			"2x5xUpper, 2x4xUpper, 1x2xMain, 1x2xMain",
			"416-620-0070"
		]
	},
	{
		"_id" : ObjectId("579742167e6ddc790c0b1b66"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-M",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 104.99 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("579742167e6ddc790c0b1b67"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-45-H",
			"2016",
			"Detached",
			"2-Storey",
			"15.52 x 30.27 Metres",
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
			"W/I Closet",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("579742167e6ddc790c0b1b68"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-45-H",
			"2016",
			"Detached",
			"2-Storey",
			"14.09 x 30.42 Feet",
			"1x2xMain, 1x4xUpper, 2x5xUpper",
			"5",
			"Dining",
			"Main",
			"4.40",
			"3.05",
			"Hardwood Floor",
			"Combined W/Living",
			"Coffered Ceiling",
			"6",
			"Office",
			"Main",
			"3.78",
			"3.05",
			"Hardwood Floor",
			"Formal Rm",
			"French Doors",
			"7",
			"Master",
			"2nd",
			"5.30",
			"4.75",
			"Laminate",
			"5 Pc Ensuite",
			"W/I Closet",
			"8",
			"2nd Br",
			"2nd",
			"3.65",
			"3.16",
			"Laminate",
			"Semi Ensuite",
			"W/I Closet",
			"9",
			"3rd Br",
			"2nd",
			"4.26",
			"3.35",
			"Laminate",
			"Semi Ensuite",
			"W/I Closet",
			"10",
			"4th Br",
			"2nd",
			"4.63",
			"3.96",
			"Laminate",
			"4 Pc Ensuite",
			"W/I Closet",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("579742287e6ddc790c0b1b9f"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"75.89 x 80.38 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"905-662-6666"
		]
	},
	{
		"_id" : ObjectId("579743567e6ddc790c0b1dee"),
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
		"_id" : ObjectId("579743577e6ddc790c0b1def"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4xMain",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("579743577e6ddc790c0b1df3"),
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
		"_id" : ObjectId("579743587e6ddc790c0b1dfc"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("579743597e6ddc790c0b1e06"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5797435a7e6ddc790c0b1e0d"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5797435b7e6ddc790c0b1e15"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579743707e6ddc790c0b1e3d"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("579743707e6ddc790c0b1e3e"),
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
		"_id" : ObjectId("579743707e6ddc790c0b1e40"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-449-0090"
		]
	},
	{
		"_id" : ObjectId("5799e3227e6ddc0c3a4d0afd"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-H",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 119 Feet",
			"1x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5799e3227e6ddc0c3a4d0aff"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-B",
			"2016",
			"Detached",
			"Bungalow",
			"53.08 x 146.41 Feet",
			"1x2xUpper, 1x4xMain, 1x4xBsmt",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("579b344a7e6ddc688ba18711"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2015",
			"Store W/Apt/Offc",
			"2-Storey",
			"14.75 x 95.17 Feet",
			"3x4",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("579b34777e6ddc688ba18795"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"108-9-F",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 100 Feet",
			"1x4xMain",
			"416-482-8662"
		]
	},
	{
		"_id" : ObjectId("579b34ac7e6ddc688ba1883d"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"2016",
			"Vacant Land",
			"7.6 x 7.6 Acres",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("579b34f67e6ddc688ba1890a"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"502-11-F",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"39 x 33.5 Metres",
			"1x4xMain, 1x3xLower",
			"705-252-7335"
		]
	},
	{
		"_id" : ObjectId("579b34f67e6ddc688ba18910"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"12.09 x 33.08 Metres",
			"1x2, 1x4",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("579b35157e6ddc688ba18968"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-54-A",
			"2015",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 130 Feet",
			"1x4xUpper, 1x4xMain, 1x4xLower",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("579b35177e6ddc688ba18977"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"21.18 x 155.64 Feet",
			"1x3x2nd, 1x2x2nd, 1x2xMain, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("579b35187e6ddc688ba1897c"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"472-33-Q",
			"2016",
			"Detached",
			"2-Storey",
			"50.62 x 141.83 Feet",
			"1x2xMain, 1x5x2nd",
			"905-278-8866"
		]
	},
	{
		"_id" : ObjectId("579b35187e6ddc688ba1897d"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"465-36-F",
			"2016",
			"Detached",
			"Bungalow",
			"61 x 130.81 Feet",
			"1x4xBsmt, 1x1xMain, 1x3xMain, 1x2xMain",
			"905-278-5273"
		]
	},
	{
		"_id" : ObjectId("579b35187e6ddc688ba1897e"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-45-K",
			"2016",
			"Detached",
			"2-Storey",
			"34.94 x 116.43 Feet",
			"1x4x2nd, 1x3x2nd, 1x3xMain, 1x3xBsmt",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("579b35197e6ddc688ba18980"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-43-Q",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 150 Feet",
			"1x6, 4x4, 2x2",
			"905-855-8700"
		]
	},
	{
		"_id" : ObjectId("579b35197e6ddc688ba18981"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-43-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"50 x 120.72 Feet",
			"1x4xUpper, 1x4xIn Betwn",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("579b35337e6ddc688ba189c7"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 85 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("579b35347e6ddc688ba189cd"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 85 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("579b35357e6ddc688ba189d2"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-S",
			"2015",
			"Detached",
			"2-Storey",
			"30.14 x 102.13 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("579b35357e6ddc688ba189d3"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26 x 85 Feet",
			"1x5, 1x4, 1x2",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("579b35407e6ddc688ba189fe"),
		"Undefined" : [
			"Caledon",
			"Caledon Village",
			"Peel",
			"410-46-U",
			"2016",
			"Detached",
			"2-Storey",
			"66 x 146.9 Feet",
			"1x2xUpper",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("579b35407e6ddc688ba189ff"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"432-61-J",
			"2016",
			"Detached",
			"Bungalow",
			"89.39 x 130 Feet",
			"1x4xMain",
			"905-857-2820"
		]
	},
	{
		"_id" : ObjectId("579b354c7e6ddc688ba18a25"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"55 x 122 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-634-6873"
		]
	},
	{
		"_id" : ObjectId("579b35547e6ddc688ba18a3b"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-N",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 43.24 Feet",
			"1x2, 1x4",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("579b36407e6ddc688ba18bfe"),
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
		"_id" : ObjectId("579b36407e6ddc688ba18bff"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-883-0892"
		]
	},
	{
		"_id" : ObjectId("579b36407e6ddc688ba18c01"),
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
		"_id" : ObjectId("579b36407e6ddc688ba18c04"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("579b36417e6ddc688ba18c0d"),
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
		"_id" : ObjectId("579b36427e6ddc688ba18c14"),
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
		"_id" : ObjectId("579b36427e6ddc688ba18c16"),
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
		"_id" : ObjectId("579b36537e6ddc688ba18c4f"),
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
		"_id" : ObjectId("579b36537e6ddc688ba18c50"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-26-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("579b36547e6ddc688ba18c56"),
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
		"_id" : ObjectId("579b36647e6ddc688ba18c86"),
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
		"_id" : ObjectId("579b36667e6ddc688ba18c8f"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("579b36667e6ddc688ba18c91"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xMain",
			"416-733-7784"
		]
	},
	{
		"_id" : ObjectId("579b36777e6ddc688ba18cbd"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-11-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2, 1x5",
			"416-658-7232"
		]
	},
	{
		"_id" : ObjectId("579b36787e6ddc688ba18cc3"),
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
		"_id" : ObjectId("579b36a17e6ddc688ba18d46"),
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
		"_id" : ObjectId("579c86c17e6ddc636fc8707d"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.1 x 95.14 Feet",
			"1x4x2nd, 1x2xMain",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("579c86c67e6ddc636fc87087"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-22-Z",
			"2015",
			"Detached",
			"Bungalow",
			"66 x 165 Feet",
			"1x4xMain",
			"Kennel",
			"705-437-4360"
		]
	},
	{
		"_id" : ObjectId("579c86db7e6ddc636fc870ae"),
		"Undefined" : [
			"Tiny",
			"Lafontaine",
			"Simcoe",
			"2015",
			"Vacant Land",
			"100 x 150 Feet",
			"416-233-6276"
		]
	},
	{
		"_id" : ObjectId("579c86db7e6ddc636fc870b0"),
		"Undefined" : [
			"Ramara",
			"Rural Ramara",
			"Simcoe",
			"2015",
			"Vacant Land",
			"93 x 270 Feet",
			"905-895-8615"
		]
	},
	{
		"_id" : ObjectId("579c86db7e6ddc636fc870b3"),
		"Undefined" : [
			"Oro-Medonte",
			"Sugarbush",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"298.71 x 0 Feet",
			"1x4xMain, 1x2xBsmt",
			"705-429-2121"
		]
	},
	{
		"_id" : ObjectId("579c86dc7e6ddc636fc870b4"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"6.4 x 35.75 Metres",
			"1x2xMain, 2x4x2nd",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("579c86f27e6ddc636fc870f1"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-42-K",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"28.66 x 133.88 Feet",
			"1x4xMain, 1x4xIn Betwn, 1x4xBsmt",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("579c86f27e6ddc636fc870f3"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"50 x 120 Feet",
			"1x4xMain, 2x4xBsmt, Bsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("579c86f47e6ddc636fc870ff"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-43-Q",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 131.65 Feet",
			"1x2xMain, 1x3xMain, 1x5xLower",
			"905-278-8866"
		]
	},
	{
		"_id" : ObjectId("579c87157e6ddc636fc8714b"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-X",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"34.14 x 118.31 Feet",
			"1x4xMain, 1x3xLower",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("579c87157e6ddc636fc8714e"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-43-W",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"34.5 x 103.18 Feet",
			"1x4xUpper, 1x4xLower",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("579c87187e6ddc636fc87163"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-48-P",
			"2016",
			"Detached",
			"2-Storey",
			"38.02 x 90 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("57a5c4d67e6ddc6dabc62899"),
		"Undefined" : [
			"Vaughan",
			"Vaughan Grove",
			"York",
			"353-6-Y",
			"2015",
			"Vacant Land",
			"50 x 150 Feet",
			"905-737-5700"
		]
	},
	{
		"_id" : ObjectId("57a9b8fe7e6ddc4b02d33810"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"20 x 88 Feet",
			"1x2, 1x5, 1x4, 1x3",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("57a9b9f47e6ddc4b02d33a9b"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-24-Z",
			"2015",
			"Detached",
			"2-Storey",
			"45.77 x 93.57 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-564-2100"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69530"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Co-Op Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69531"),
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
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69533"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"120-17-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69534"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69535"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x2xMain",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69536"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x5x2nd, 1x4x3rd, 1x2xGround",
			"416-222-2600"
		]
	},
	{
		"_id" : ObjectId("5780d7dc7e6ddc0ff0a69537"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a69539"),
		"Undefined" : [
			"Toronto C13",
			"Victoria Village",
			"Toronto",
			"116-27-L",
			"2015",
			"Co-Ownership Apt",
			"Apartment",
			"1x4",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a6953a"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-597-9333"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a6953c"),
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
		"_id" : ObjectId("5780d7e97e6ddc0ff0a6953d"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-474-0108"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a6953e"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-18-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-226-6678"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a6953f"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-495-2792"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a69540"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-292-5433"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a69541"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-21-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-292-5433"
		]
	},
	{
		"_id" : ObjectId("5780d7e97e6ddc0ff0a69542"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-19-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69543"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69544"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69545"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69546"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69547"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-C",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"416-360-6262"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69548"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69549"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a6954a"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xLower",
			"905-882-6882"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a6954b"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-26-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x5",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a6954c"),
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
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a6954d"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a6954e"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-18-D",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a6954f"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x3, 1x2",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("5780d7ea7e6ddc0ff0a69550"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4, 1x2",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69551"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69552"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69553"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-281-2200"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69554"),
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
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69555"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"416-284-5555"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69556"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69557"),
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
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69558"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a69559"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("5780d7f17e6ddc0ff0a6955b"),
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
		"_id" : ObjectId("5780d7f17e6ddc0ff0a6955c"),
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
		"_id" : ObjectId("5780d7f17e6ddc0ff0a6955d"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-25-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-686-9618"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6955e"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6955f"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-14-J",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69560"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69561"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69562"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-5-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-496-9220"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69563"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69564"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-3-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69565"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69566"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69567"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69568"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69569"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6956a"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6956b"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6956c"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"2x4xFlat",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6956d"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6956e"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a6956f"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd",
			"416-849-5360"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69570"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-588-6777"
		]
	},
	{
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69571"),
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
		"_id" : ObjectId("5780d7fe7e6ddc0ff0a69572"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x5, 1x3, 1x2",
			"416-847-0920"
		]
	},
	{
		"_id" : ObjectId("5780d80b7e6ddc0ff0a69573"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-23-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5780d80b7e6ddc0ff0a69574"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-474-1772"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69575"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69576"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat, Flat",
			"416-728-2378"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69577"),
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
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69579"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a6957a"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-21-Z",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a6957b"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a6957c"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-36-Y",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a6957d"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-415-3800"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a6957e"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-22-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a6957f"),
		"Undefined" : [
			"Richmond Hill",
			"Observatory",
			"York",
			"349-22-S",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69580"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"355-19-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69581"),
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
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69582"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-T",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x3",
			"905-604-8166"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69583"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69584"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-V",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 1x4, 1x5",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69585"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-24-Y",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x3x2nd, 1x3xBsmt",
			"905-881-2181"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69586"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"331-23-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xGround",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("5780d80c7e6ddc0ff0a69587"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-P",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xLower, 1x4x2nd, 1x4x3rd",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5780d8127e6ddc0ff0a69588"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-10-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"905-428-4557"
		]
	},
	{
		"_id" : ObjectId("5780d8127e6ddc0ff0a69589"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-13-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-430-6655"
		]
	},
	{
		"_id" : ObjectId("5780d8127e6ddc0ff0a6958a"),
		"Undefined" : [
			"Pickering",
			"West Shore",
			"Durham",
			"274-6-T",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4xBsmt",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("5780d8127e6ddc0ff0a6958b"),
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
		"_id" : ObjectId("5780d8127e6ddc0ff0a6958c"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"266-7-S",
			"2016",
			"Condo Apt",
			"Bungalow",
			"2x4xMain",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("5780d8127e6ddc0ff0a6958d"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-428-8100"
		]
	},
	{
		"_id" : ObjectId("5780d8127e6ddc0ff0a6958e"),
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
		"_id" : ObjectId("5780d8307e6ddc0ff0a6958f"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-46-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("5780d8307e6ddc0ff0a69590"),
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
		"_id" : ObjectId("5780d8317e6ddc0ff0a69591"),
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
		"_id" : ObjectId("5780d8317e6ddc0ff0a69593"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-730-0357"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69594"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-475-1186"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69595"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-43-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69596"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-848-9800"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69597"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-35-P",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x2",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69598"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"452-41-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69599"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-D",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x4",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a6959a"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a6959b"),
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
		"_id" : ObjectId("5780d8317e6ddc0ff0a6959c"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-T",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4, 1x2",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a6959d"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-C",
			"2015",
			"Condo Townhouse",
			"Bungalow",
			"1x4",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a6959e"),
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
		"_id" : ObjectId("5780d8317e6ddc0ff0a6959f"),
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
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a1"),
		"Undefined" : [
			"Brampton",
			"Goreway Drive Corridor",
			"Peel",
			"446-53-U",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a2"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a3"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a4"),
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
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a5"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"479-45-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-499-4948"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a6"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x3xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a695a7"),
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
		"_id" : ObjectId("5780d8327e6ddc0ff0a695a8"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"458-37-E",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"2x4x2nd, 1x2",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5780d8327e6ddc0ff0a695a9"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-41-H",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4, 1x2",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5780d8327e6ddc0ff0a695aa"),
		"Undefined" : [
			"Mississauga",
			"Port Credit",
			"Peel",
			"465-37-F",
			"2015",
			"Condo Apt",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-415-1000"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695ab"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-22-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695ac"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695ad"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"471-26-Q",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695ae"),
		"Undefined" : [
			"Burlington",
			"Mountainside",
			"Halton",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"905-335-3042"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695af"),
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
		"_id" : ObjectId("5780d8397e6ddc0ff0a695b0"),
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
		"_id" : ObjectId("5780d8397e6ddc0ff0a695b1"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-531-9680"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695b2"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"469-13-P",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695b3"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"475-13-U",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x2xBsmt",
			"416-690-2121"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695b4"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("5780d8397e6ddc0ff0a695b5"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain, 1x2xMain",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("5784cb7f7e6ddc3bb2089d1a"),
		"Undefined" : [
			"Toronto C01",
			"Trinity-Bellwoods",
			"Toronto",
			"119-16-R",
			"2016",
			"Detached",
			"2-Storey",
			"20 x 126 Feet",
			"1x3, 1x4, 1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("5784cb7f7e6ddc3bb2089d1b"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"17.58 x 116 Feet",
			"1x3xMain, 1x4x2nd, 1x3xBsmt",
			"416-760-0600"
		]
	},
	{
		"_id" : ObjectId("5784cb7f7e6ddc3bb2089d1c"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-M",
			"2015",
			"Semi-Detached",
			"3-Storey",
			"25.33 x 122 Feet",
			"1x4, 1x4",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5784cb7f7e6ddc3bb2089d1d"),
		"Undefined" : [
			"Toronto C02",
			"Wychwood",
			"Toronto",
			"114-16-N",
			"2015",
			"Detached",
			"2-Storey",
			"55 x 106 Feet",
			"1x4xBsmt, 1x3x2nd, 1x4x2nd",
			"416-535-3103"
		]
	},
	{
		"_id" : ObjectId("5784cb7f7e6ddc3bb2089d1e"),
		"Undefined" : [
			"Toronto C03",
			"Humewood-Cedarvale",
			"Toronto",
			"115-17-M",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 144 Feet",
			"1x6x2nd, 1x3x2nd, 1x2xMain, 1x5xLower, 1x3xLower",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5784cb827e6ddc3bb2089d25"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-21-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.25 x 135 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("5784cb827e6ddc3bb2089d26"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.27 x 64.47 Feet",
			"1x5x2nd, 1x5x3rd, 1x3xLower",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5784cb827e6ddc3bb2089d27"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 136 Feet",
			"1x2xMain, 1x4x2nd, 1x3xLower",
			"416-424-4900"
		]
	},
	{
		"_id" : ObjectId("5784cb827e6ddc3bb2089d28"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"120-21-R",
			"2015",
			"Semi-Detached",
			"2 1/2 Storey",
			"20 x 100 Feet",
			"1x2xMain, 1x4x2nd, 1x4xBsmt, 1x5x2nd, 1x2x3rd",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("5784cb827e6ddc3bb2089d29"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 150 Feet",
			"1x6, 2x4, 1x3, 1x2",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5784cb847e6ddc3bb2089d2d"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 117.67 Feet",
			"1x4xGround, 1x4xBsmt",
			"416-223-3535"
		]
	},
	{
		"_id" : ObjectId("5784cb847e6ddc3bb2089d2e"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-C",
			"2016",
			"Detached",
			"2-Storey",
			"39.43 x 170.98 Feet",
			"1x4xMain, 1x2xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d39"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-27-G",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"33 x 120 Feet",
			"1x4xMain, 1x3xMain, 1x4xLower",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d3a"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"104-25-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"38.37 x 143.7 Feet",
			"1x4xUpper, 1x2xUpper, 1x3xMain, 1x3xBsmt",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d3b"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"13.12 x 76.57 Feet",
			"1x4x3rd, 1x4x2nd, 1x3xBsmt",
			"905-415-3800"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d3c"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-27-G",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 120 Feet",
			"1x4xGround, 1x4xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d3d"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"15.35 x 70.86 Feet",
			"1x2xMain, 1x4x2nd, 1x5x3rd, 1x3xBsmt",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d3e"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-23-C",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"30.29 x 99 Feet",
			"1x5x2nd, 1x5x2nd, 1x2xFlat, 1x3xBsmt",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d3f"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-A",
			"2016",
			"Detached",
			"Sidesplit 4",
			"50 x 216 Feet",
			"1x2, 1x4",
			"416-733-2666"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d40"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-A",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"40 x 125.9 Feet",
			"1x4xMain, 1x2xMain, 1x3xLower",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("5784cb887e6ddc3bb2089d41"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-23-F",
			"2016",
			"Detached",
			"2-Storey",
			"48 x 133 Feet",
			"1x2xMain, 1x5xUpper, 1x3xUpper, 1x3xLower",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d4c"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-22-R",
			"2016",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"15 x 117 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-465-7527"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d4d"),
		"Undefined" : [
			"Toronto E02",
			"Woodbine Corridor",
			"Toronto",
			"121-25-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.06 x 81.33 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-694-2499"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d4e"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"20.17 x 80 Feet",
			"1x5xUpper, 1x4xMain, 1x3xBsmt",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d4f"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 116.5 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d50"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"115-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"34 x 96 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3x3rd",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d51"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 163 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784cb8e7e6ddc3bb2089d53"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"121-25-S",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 110 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cb8f7e6ddc3bb2089d54"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2015",
			"Detached",
			"2-Storey",
			"24.12 x 99.41 Feet",
			"2x4, 1x3, 1x2xMain",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("5784cb9e7e6ddc3bb2089d75"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"28 x 110 Feet",
			"1x2xMain, 1x4xBsmt, 1x4x2nd, 1x2x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784cb9e7e6ddc3bb2089d76"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Detached",
			"Bungalow",
			"37.84 x 126.64 Feet",
			"1x3xMain, 1x2xMain, 1x3xBsmt",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cb9e7e6ddc3bb2089d77"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"104-32-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 110 Feet",
			"1x4x2nd, 2x2",
			"416-849-5360"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d78"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-33-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"43 x 123 Feet",
			"1x4xGround, 1x2xBsmt",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d79"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-40-K",
			"2016",
			"Detached",
			"Bungalow",
			"43 x 117 Feet",
			"1x4xGround, 1x4xBsmt, 1x2xGround",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d7a"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-H",
			"2015",
			"Detached",
			"Backsplit 3",
			"40 x 140 Feet",
			"1x4xMain, 1x2xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d7b"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Sidesplit 3",
			"50 x 169.4 Feet",
			"2x3xMain, 1x2xBsmt",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d7c"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"40 x 125 Feet",
			"1x4xGround, 1x2xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d7d"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.39 x 100.26 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d7e"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-N",
			"2015",
			"Detached",
			"2-Storey",
			"49 x 107 Feet",
			"2x2, 1x3",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d7f"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-29-P",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.04 x 83.99 Feet",
			"2x4x3rd, 1x2x2nd",
			"905-471-0002"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d80"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-36-K",
			"2016",
			"Detached",
			"Sidesplit 4",
			"45 x 115 Feet",
			"1x4xUpper, 1x3xIn Betwn, 1x4xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d82"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-J",
			"2015",
			"Detached",
			"Sidesplit 3",
			"50 x 110 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d84"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-34-B",
			"2016",
			"Detached",
			"2-Storey",
			"31 x 107.98 Feet",
			"1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d85"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-34-A",
			"2016",
			"Link",
			"2-Storey",
			"29.88 x 110 Feet",
			"2x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d86"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2015",
			"Detached",
			"2-Storey",
			"20.99 x 101.7 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xGround",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d87"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-35-K",
			"2016",
			"Detached",
			"Bungalow",
			"52 x 151.43 Feet",
			"1x4xGround, 1x3xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d88"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-44-H",
			"2016",
			"Detached",
			"2-Storey",
			"29.15 x 112.52 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d89"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 125 Feet",
			"1x4xMain",
			"416-429-5118"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d8a"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-H",
			"2016",
			"Detached",
			"Sidesplit 4",
			"108 x 55 Feet",
			"1x3xUpper, 1x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d8b"),
		"Undefined" : [
			"Toronto E10",
			"Rouge E10",
			"Toronto",
			"112-44-H",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 200 Feet",
			"1x4xMain, 1x3xLower",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d8c"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-A",
			"2016",
			"Detached",
			"Other",
			"6.62 x 41.65 Metres",
			"2x4x2nd, 1x2xBsmt",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d8d"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-34-A",
			"2016",
			"Detached",
			"2-Storey",
			"35.1 x 100.06 Feet",
			"2x4x2nd, 1x2xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d8e"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"105-34-C",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 110 Feet",
			"1x2xGround, 2x4x2nd",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d8f"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-34-N",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"58 x 135.91 Feet",
			"0x0",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d90"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-A",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 89.07 Feet",
			"2x4, 1x2",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d91"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-E",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 118.91 Feet",
			"1x2xUpper, 1x4xUpper, 1x2xMain",
			"416-494-7686"
		]
	},
	{
		"_id" : ObjectId("5784cba07e6ddc3bb2089d92"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2016",
			"Detached",
			"3-Storey",
			"7.94 x 26.84 Metres",
			"1x3x2nd, 1x5x3rd, 2x3x3rd, 1x4xGround, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089d9f"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-12-L",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"16.66 x 124.42 Feet",
			"1x3xMain, 1x4xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da0"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-15-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"14.44 x 100 Feet",
			"1x4xGround, 1x2x2nd",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da1"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-12-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"15.92 x 124.92 Feet",
			"1x4x2nd",
			"416-760-7290"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da2"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-15-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"14.67 x 60 Feet",
			"1x4x2nd, 1x4xBsmt",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da3"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.58 x 62.97 Feet",
			"1x4x2nd",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da4"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"24.33 x 107 Feet",
			"1x4x2nd, 1x4xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da5"),
		"Undefined" : [
			"Toronto W04",
			"Humberlea-Pelmo Park W4",
			"Toronto",
			"108-9-G",
			"2016",
			"Detached",
			"Bungalow",
			"57 x 105.87 Feet",
			"1x3xBsmt, 1x4xMain",
			"416-785-1500"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da6"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-N",
			"2015",
			"Detached",
			"2-Storey",
			"25.5 x 115 Feet",
			"1x2xMain, 1x3x2nd, 1x3xBsmt, 1x4x2nd",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da7"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-16-J",
			"2016",
			"Detached",
			"Sidesplit 3",
			"57.5 x 133.14 Feet",
			"1x5xMain, 1x4xUpper, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da8"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-P",
			"2015",
			"Detached",
			"2-Storey",
			"25.17 x 119.17 Feet",
			"1x4x2nd, 1x3xLower",
			"416-762-8255"
		]
	},
	{
		"_id" : ObjectId("5784cba67e6ddc3bb2089da9"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-Q",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"44 x 180.83 Feet",
			"1x3xGround, 2x5x2nd, 1x3x3rd, 1x3xBsmt, Bsmt",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("5784cbb17e6ddc3bb2089dc0"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2015",
			"Detached",
			"Backsplit 3",
			"53 x 103.79 Feet",
			"1x4xMain, 1x2xMain",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc1"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-5-J",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"34.83 x 105.28 Feet",
			"1x4xMain, 1x3xGround, 1x4xGround",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc2"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-N",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 109 Feet",
			"1x4, 1x3",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc3"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-6-J",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"38 x 116 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc5"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-10-S",
			"2015",
			"Detached",
			"2-Storey",
			"115 x 44 Feet",
			"2x4",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc6"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-6-P",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 148 Feet",
			"1x4xMain, 1x2xBsmt",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc7"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"107-6-K",
			"2016",
			"Detached",
			"Bungalow",
			"48.25 x 120.54 Feet",
			"1x2xMain, 1x5xMain, 1x2xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc8"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"119-9-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"35 x 154.32 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("5784cbb27e6ddc3bb2089dc9"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-T",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 125 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cbba7e6ddc3bb2089ddb"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"37.62 x 100 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-337-7001"
		]
	},
	{
		"_id" : ObjectId("5784cbba7e6ddc3bb2089ddc"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.57 x 88.78 Feet",
			"1x2xMain, 1x4xUpper, 1x4xUpper",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089ddd"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-20-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.98 x 105.14 Feet",
			"1x5, 1x4, 1x2",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089dde"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-G",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.53 x 98.48 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089ddf"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.61 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x3xLower, 1x4x2nd",
			"416-535-3103"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de0"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-23-P",
			"2015",
			"Detached",
			"2-Storey",
			"10.5 x 26.6 Metres",
			"2x4x2nd, 1x2x2nd, Main, 1x3xBsmt",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de1"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2015",
			"Detached",
			"2-Storey",
			"34.84 x 88.58 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de2"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-H",
			"2015",
			"Detached",
			"2-Storey",
			"55 x 127 Feet",
			"1x2xMain, 1x4xUpper",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de4"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-M",
			"2016",
			"Detached",
			"2-Storey",
			"44.29 x 88.58 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-415-3800"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de5"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-Q",
			"2016",
			"Detached",
			"2-Storey",
			"37.27 x 101.47 Feet",
			"1x2xMain, 1x3x2nd, 1x5x2nd, 1x3xBsmt",
			"905-888-8188"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de6"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-23-H",
			"2015",
			"Detached",
			"Backsplit 5",
			"75.5 x 144.98 Feet",
			"1x5xUpper, 1x3xUpper, 1x3xLower, 1x4xLower",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de8"),
		"Undefined" : [
			"Richmond Hill",
			"Rural Richmond Hill",
			"York",
			"343-25-K",
			"2015",
			"Detached",
			"2-Storey",
			"254.47 x 419.95 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbbb7e6ddc3bb2089de9"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-24-T",
			"2016",
			"Detached",
			"2-Storey",
			"70.04 x 164.04 Feet",
			"4x5x2nd, 1x2xMain, 1x5xBsmt, 1x4xBsmt",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089dfb"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"49.5 x 84.5 Feet",
			"1x2xMain, 1x4x2nd",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089dfc"),
		"Undefined" : [
			"Aurora",
			"Aurora Grove",
			"York",
			"331-26-C",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"21.59 x 155.22 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-773-7771"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089dfd"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-X",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.43 x 0 Feet",
			"1x2xMain, 2x4x2nd",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089dfe"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 95.96 Feet",
			"2x4x2nd, 1x2xMain",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089dff"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-24-B",
			"2015",
			"Detached",
			"2-Storey",
			"28.91 x 173.41 Feet",
			"1x3, 1x4",
			"905-235-3999"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e00"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-W",
			"2015",
			"Detached",
			"2-Storey",
			"30.18 x 114.83 Feet",
			"1x2xGround, 1x3xBsmt, 1x4x2nd, 1x3x2nd",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e01"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-X",
			"2015",
			"Detached",
			"2-Storey",
			"32 x 110 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-251-5438"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e02"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"325-23-V",
			"2016",
			"Detached",
			"2-Storey",
			"36.12 x 88.85 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"888-837-0566"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e03"),
		"Undefined" : [
			"Newmarket",
			"Glenway Estates",
			"York",
			"325-23-W",
			"2015",
			"Detached",
			"2-Storey",
			"50.42 x 0 Feet",
			"1x2xMain, 2x4x2nd",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e04"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-Y",
			"2016",
			"Detached",
			"2-Storey",
			"54.86 x 98 Feet",
			"1x2, 1x3, 1x5, 1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e05"),
		"Undefined" : [
			"Aurora",
			"Bayview Wellington",
			"York",
			"331-26-Z",
			"2016",
			"Detached",
			"2-Storey",
			"41 x 82 Feet",
			"1x2xMain, 1x3xBsmt, 2x4x2nd",
			"905-775-5677"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e06"),
		"Undefined" : [
			"Aurora",
			"Bayview Northeast",
			"York",
			"332-27-A",
			"2015",
			"Detached",
			"2-Storey",
			"43 x 110 Feet",
			"4x2xMain, 5x2nd, 4x2nd, 4x2nd",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e07"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-B",
			"2016",
			"Detached",
			"2-Storey",
			"100.7 x 442.9 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e08"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-22-C",
			"2015",
			"Detached",
			"2-Storey",
			"59.05 x 134.9 Feet",
			"1x6x2nd, 1x4x2nd, 1x5x2nd, 1x2xMain, 1x3xLower",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e09"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"2016",
			"Multiplex",
			"2-Storey",
			"30.98 x 39.62 Metres",
			"1x4xMain, 1x4x2nd, 1x4xMain, 1x4x2nd",
			"905-895-8615"
		]
	},
	{
		"_id" : ObjectId("5784cbc47e6ddc3bb2089e0a"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-Y",
			"2015",
			"Detached",
			"2-Storey",
			"65.99 x 135 Feet",
			"1x6, 2x4, 2x2",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e27"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-T",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.04 x 98 Feet",
			"1x4, 1x2",
			"416-494-5955"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e28"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"45.95 x 163.97 Feet",
			"1x4xMain, 1x3xLower",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e29"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"342-14-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25 x 105 Feet",
			"1x5x2nd, 1x4x2nd, 2x4xBsmt, 1x2xGround",
			"905-553-8500"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e2a"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"27.56 x 78.74 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x2xBsmt",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e2b"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.33 x 98 Feet",
			"1x2xMain, 1x3x2nd, 1x3x2nd, 1x2xBsmt",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e2c"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-T",
			"2015",
			"Detached",
			"2-Storey",
			"12.12 x 38.93 Metres",
			"1x2, 1x3, 1x4",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e2d"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.02 x 106.79 Feet",
			"2x4x2nd, 1x2xMain",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e2e"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-10-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"28.15 x 78.7 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e2f"),
		"Undefined" : [
			"Vaughan",
			"Glen Shields",
			"York",
			"354-16-Z",
			"2016",
			"Detached",
			"Backsplit 5",
			"32 x 110 Feet",
			"1x4xLower, 1x4x2nd, 1x2xLower",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e30"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 26.25 Feet",
			"1x2xMain, 1x4xUpper, 1x5xUpper",
			"416-800-9707"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e31"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 132 Feet",
			"1x4xUpper, 1x4xGround, 1x4xBsmt",
			"905-452-7272"
		]
	},
	{
		"_id" : ObjectId("5784cbd27e6ddc3bb2089e32"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-10-T",
			"2015",
			"Detached",
			"2-Storey",
			"22.89 x 78.74 Feet",
			"1x2xGround, 2x4x2nd",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e33"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-Q",
			"2016",
			"Detached",
			"2-Storey",
			"29.86 x 98.89 Feet",
			"2x4x2nd, 1x2xMain, 1x2xLower",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e34"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2016",
			"Detached",
			"Bungaloft",
			"66 x 100 Feet",
			"1x5xMain, 1x2xBsmt, 1x4xBsmt",
			"905-660-4949"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e35"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-6-X",
			"2015",
			"Detached",
			"Bungaloft",
			"55 x 140 Feet",
			"1x5xMain, 1x4x2nd, 2x3xBsmt",
			"905-856-1111"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e36"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-3-Q",
			"2016",
			"Detached",
			"2-Storey",
			"30.18 x 90 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e37"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-20-Y",
			"2015",
			"Detached",
			"2-Storey",
			"24.93 x 0 Feet",
			"2x4, 1x2",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e38"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-R",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 128 Feet",
			"1x2xMain, 1x4x2nd, 1x6x2nd, 1x3xBsmt",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e39"),
		"Undefined" : [
			"Vaughan",
			"West Woodbridge",
			"York",
			"353-7-W",
			"2016",
			"Detached",
			"2-Storey",
			"31.2 x 145.73 Feet",
			"1x2xMain, 1x3x2nd, 1x3xBsmt, 1x4x2nd",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e3a"),
		"Undefined" : [
			"Vaughan",
			"Islington Woods",
			"York",
			"347-7-U",
			"2015",
			"Detached",
			"Bungaloft",
			"60 x 114 Feet",
			"1x2xMain, 1x3xMain, 1x4xMain, 1x6xUpper, 1x3xBsmt",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e3b"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-7-X",
			"2015",
			"Detached",
			"Bungalow",
			"85 x 217 Feet",
			"1x4, 1x3, 1x2",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e3c"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-4-R",
			"2015",
			"Detached",
			"2-Storey",
			"40 x 105 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e3d"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"41 x 105 Feet",
			"1x5x2nd, 2x4x2nd, 1x2x2nd, 1x4x2nd",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e3e"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"349-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"35.99 x 109.91 Feet",
			"1x2, 1x5, 2x4",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e3f"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2016",
			"Detached",
			"Backsplit 4",
			"72.88 x 150 Feet",
			"1x2, 3x4",
			"905-597-9333"
		]
	},
	{
		"_id" : ObjectId("5784cbd37e6ddc3bb2089e41"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-11-Q",
			"2015",
			"Detached",
			"2-Storey",
			"50.62 x 296.11 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x4xBsmt",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5784cbd67e6ddc3bb2089e46"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"336-17-H",
			"2015",
			"Detached",
			"2-Storey",
			"75 x 150.56 Feet",
			"1x4, 1x3, 1x2",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("5784cbd67e6ddc3bb2089e47"),
		"Undefined" : [
			"King",
			"King City",
			"York",
			"2016",
			"Detached",
			"Sidesplit 4",
			"100 x 142.92 Feet",
			"1x3xMain, 1x3xUpper, 1x5xUpper, 1x3xLower",
			"800-536-5807"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e63"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-39-U",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.5 x 109.77 Feet",
			"1x2xMain, 1x4x2nd",
			"905-477-5900"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e64"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"15 x 85 Feet",
			"2x4x2nd, 1x2xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e65"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.04 x 110.3 Feet",
			"1x2xGround, 2x4x2nd",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e66"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"22.54 x 105.8 Feet",
			"1x2xMain, 1x2xBsmt, 2x4x2nd, 1x4x3rd",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e67"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-40-U",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"22.97 x 82.02 Feet",
			"1x2xMain, 1x3x3rd, 1x4x3rd",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e68"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-39-U",
			"2015",
			"Detached",
			"3-Storey",
			"26.5 x 110 Feet",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e69"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-30-Z",
			"2016",
			"Link",
			"2-Storey",
			"30 x 120.73 Feet",
			"1x4, 1x3, 1x2",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e6a"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-33-Z",
			"2016",
			"Link",
			"2-Storey",
			"30.02 x 109.91 Feet",
			"2x4x2nd, 1x2xGround",
			"905-881-3661"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e6b"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"351-40-U",
			"2015",
			"Detached",
			"2-Storey",
			"29.3 x 115.18 Feet",
			"1x5, 1x3, 1x2",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e6c"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2016",
			"Detached",
			"2-Storey",
			"11.3 x 34 Metres",
			"1x4x2nd, 1x2xMain, 1x3x2nd, 1x3xBsmt",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e6d"),
		"Undefined" : [
			"Markham",
			"Angus Glen",
			"York",
			"350-32-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"8.63 x 33 Metres",
			"1x4x2nd, 1x4x2nd, 1x3xLower, 1x2xMain",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e6f"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"37.73 x 102.99 Feet",
			"2x4x2nd, 1x2xGround",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e70"),
		"Undefined" : [
			"Markham",
			"Rouge Fairways",
			"York",
			"357-37-Y",
			"2016",
			"Detached",
			"2-Storey",
			"41.01 x 121.39 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e71"),
		"Undefined" : [
			"Markham",
			"Milliken Mills West",
			"York",
			"356-30-Z",
			"2016",
			"Detached",
			"2-Storey",
			"51 x 109 Feet",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3xBsmt",
			"905-642-2282"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e72"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-T",
			"2015",
			"Detached",
			"2-Storey",
			"43.64 x 85 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-477-1818"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e73"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-S",
			"2016",
			"Detached",
			"2-Storey",
			"17.08 x 27.25 Metres",
			"4x4, 1x2",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cbe37e6ddc3bb2089e74"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-S",
			"2015",
			"Detached",
			"2-Storey",
			"45.56 x 84.48 Feet",
			"2x5x2nd, 1x4x2nd, 1x2xMain",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e75"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"350-33-U",
			"2015",
			"Detached",
			"2-Storey",
			"49.21 x 120.11 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e76"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 130 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e77"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-32-V",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 114.83 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e78"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-V",
			"2016",
			"Detached",
			"2-Storey",
			"15.3 x 39.22 Metres",
			"1x5, 2x4, 1x2",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e79"),
		"Undefined" : [
			"Markham",
			"Buttonville",
			"York",
			"350-28-U",
			"2016",
			"Detached",
			"2-Storey",
			"16.56 x 34.22 Metres",
			"1x2, 1x3, 2x5",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e7a"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-29-T",
			"2015",
			"Detached",
			"2-Storey",
			"59 x 124 Feet",
			"1x5x2nd, 2x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e7b"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-38-Y",
			"2015",
			"Detached",
			"2-Storey",
			"133.53 x 316.1 Feet",
			"2x5x2nd, 1x2xMain, 1x3x2nd, 1x3xMain, 2x4xUpper",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cbe47e6ddc3bb2089e7c"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 195 Feet",
			"1x7x2nd, 1x5x2nd, 1x3xBsmt, 1x2xMain",
			"905-305-9669"
		]
	},
	{
		"_id" : ObjectId("5784cbe77e6ddc3bb2089e82"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-38-K",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"27.31 x 93.5 Feet",
			"1x2, 2x4",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5784cbe77e6ddc3bb2089e83"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"34.94 x 88 Feet",
			"1x2xGround, 2x4x2nd",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5784cbe77e6ddc3bb2089e84"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-K",
			"2015",
			"Detached",
			"Bungalow",
			"63.19 x 126 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-471-2000"
		]
	},
	{
		"_id" : ObjectId("5784cbe77e6ddc3bb2089e85"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"333-36-D",
			"2015",
			"Detached",
			"2-Storey",
			"827 x 1276.92 Feet",
			"2x4x2nd, 1x3x2nd, 1x4xMain, 1x2xMain, 1x2xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cbe97e6ddc3bb2089e8a"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-26-M",
			"2016",
			"Detached",
			"Sidesplit 3",
			"68.06 x 327.29 Feet",
			"1x3xLower, 1x3xMain",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("5784cbe97e6ddc3bb2089e8b"),
		"Undefined" : [
			"East Gwillimbury",
			"Holland Landing",
			"York",
			"313-25-N",
			"2016",
			"Detached",
			"2-Storey",
			"76.61 x 196 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"905-833-3008"
		]
	},
	{
		"_id" : ObjectId("5784cbea7e6ddc3bb2089e8c"),
		"Undefined" : [
			"East Gwillimbury",
			"Sharon",
			"York",
			"320-31-Q",
			"2015",
			"Detached",
			"2-Storey",
			"116 x 174 Feet",
			"2x4, 1x2",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e96"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 100 Feet",
			"1x4xGround",
			"877-356-7034"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e97"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-W",
			"2016",
			"Detached",
			"2-Storey",
			"59.1 x 122.69 Feet",
			"1x4xUpper, 1x2xGround",
			"905-476-0111"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e98"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"305-31-Y",
			"2015",
			"Vacant Land",
			"50 x 250 Feet",
			"905-836-6315"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e99"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2016",
			"Detached",
			"2-Storey",
			"12.2 x 27 Metres",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"905-415-2710"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e9a"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"40 x 88.98 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x3x2nd",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e9b"),
		"Undefined" : [
			"Georgina",
			"Pefferlaw",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"52.09 x 323 Feet",
			"1x4xMain, 1x3xMain",
			"800-529-0331"
		]
	},
	{
		"_id" : ObjectId("5784cbee7e6ddc3bb2089e9c"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-45-U",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"100 x 150 Feet",
			"2x4xMain, 1x4xBsmt",
			"888-413-0800"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089ea6"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-S",
			"2016",
			"Detached",
			"2-Storey",
			"26.26 x 0 Feet",
			"2x4, 1x2",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089ea7"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"30 x 110 Feet",
			"1x4xUpper, 1x2xMain",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089ea8"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Detached",
			"2-Storey",
			"27.89 x 108.5 Feet",
			"2x4, 1x2",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089ea9"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-R",
			"2015",
			"Detached",
			"2-Storey",
			"25.1 x 159.36 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089eaa"),
		"Undefined" : [
			"Pickering",
			"Duffin Heights",
			"Durham",
			"258-9-M",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 90.22 Feet",
			"1x2, 2x4",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089eab"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-5-S",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 115.37 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xGround, 1x2xBsmt",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("5784cbf37e6ddc3bb2089ead"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-5-Q",
			"2016",
			"Detached",
			"2-Storey",
			"52.59 x 170 Feet",
			"1x6, 1x2, 1x3, 1x4",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("5784cbf57e6ddc3bb2089eb3"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"37.5 x 109.91 Feet",
			"2x4x2nd, 1x2xMain",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("5784cbf57e6ddc3bb2089eb4"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"46.64 x 109.9 Feet",
			"2x4xUpper, 1x4xMain, 1x2xBsmt",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("5784cbf57e6ddc3bb2089eb5"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"47.69 x 173 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cbf57e6ddc3bb2089eb6"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"267-16-N",
			"2016",
			"Detached",
			"2-Storey",
			"41.01 x 86.94 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"416-289-3333"
		]
	},
	{
		"_id" : ObjectId("5784cbfc7e6ddc3bb2089ec4"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-R",
			"2016",
			"Link",
			"2-Storey",
			"30 x 100 Feet",
			"1x4, 1x3, 1x2",
			"905-720-2004"
		]
	},
	{
		"_id" : ObjectId("5784cbfc7e6ddc3bb2089ec5"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"268-20-P",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x4x2nd, 1x2xMain, 1x4xLower",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("5784cbfc7e6ddc3bb2089ec6"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"260-18-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.61 x 111.55 Feet",
			"2x4xUpper, 1x2xMain",
			"416-494-7686"
		]
	},
	{
		"_id" : ObjectId("5784cbfc7e6ddc3bb2089ec7"),
		"Undefined" : [
			"Whitby",
			"Rural Whitby",
			"Durham",
			"16-35-G",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"109.75 x 78.5 Feet",
			"1x4xMain, 2nd",
			"416-293-3900"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ec8"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2016",
			"Detached",
			"Sidesplit 3",
			"75 x 200 Feet",
			"1x4xMain, 1x4x2nd",
			"905-683-5000"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ec9"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2015",
			"Detached",
			"Bungalow",
			"75 x 200 Feet",
			"1x4xGround, 1x4xBsmt",
			"905-683-5000"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089eca"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"268-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"81 x 110 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ecb"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 200 Feet",
			"1x4xMain, 1x3xLower",
			"905-440-2053"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ecc"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-22-L",
			"2016",
			"Detached",
			"2-Storey",
			"39.67 x 120.33 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ecd"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"135.7 x 165 Feet",
			"1x4, 1x2",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ece"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"69 x 128 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xLower",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5784cbfd7e6ddc3bb2089ecf"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-23-F",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 115.28 Feet",
			"1x4xMain, 1x5xMain",
			"905-706-3131"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089ee3"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-S",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"26.96 x 111.25 Feet",
			"1x4xUpper, 1x3xLower",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089ee4"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-25-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.75 x 108.2 Feet",
			"1x4xUpper, 1x2xIn Betwn",
			"4",
			"Master",
			"4.67",
			"3.10",
			"Double Closet",
			"5",
			"2nd Br",
			"4.39",
			"2.72",
			"Double Closet",
			"6",
			"3rd Br",
			"3.61",
			"2.57",
			"Closet",
			"7",
			"Bsmt",
			"5.26",
			"4.09",
			"8",
			"Laundry",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089ee5"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-25-R",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"27.61 x 112 Feet",
			"1x5xUpper, 1x2xLower",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089ee6"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-L",
			"2016",
			"Detached",
			"Bungalow",
			"30.75 x 90.47 Feet",
			"1x4xMain, 1x3xLower",
			"905-430-6655"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089ee8"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-30-P",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 111.5 Feet",
			"2x4x2nd, 1x2xMain",
			"905-723-6918"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089ee9"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2015",
			"Detached",
			"Bungalow",
			"42 x 126 Feet",
			"1x4xMain, 1x3xLower",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089eea"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-26-V",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 112 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-430-6655"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089eeb"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-26-K",
			"2016",
			"Detached",
			"2-Storey",
			"29.52 x 114.83 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089eec"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-31-P",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 112.87 Feet",
			"1x2xMain, 2x4x2nd",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089eed"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-25-R",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 142 Feet",
			"1x4xMain, 1x3",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089eee"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-J",
			"2015",
			"Detached",
			"2-Storey",
			"49.21 x 100.62 Feet",
			"2x4xUpper, 1x2xMain, 1x3xBsmt",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("5784cc097e6ddc3bb2089eef"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-M",
			"2016",
			"Detached",
			"2-Storey",
			"40.08 x 134.19 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("5784cc0a7e6ddc3bb2089ef0"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 104.99 Feet",
			"2x4, 1x2",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cc0a7e6ddc3bb2089ef1"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-J",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 112.06 Feet",
			"2x5x2nd, 1x3x2nd, 1x2xMain",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cc0a7e6ddc3bb2089ef2"),
		"Undefined" : [
			"Oshawa",
			"Windfields",
			"Durham",
			"261-26-J",
			"2016",
			"Detached",
			"2-Storey",
			"91.2 x 98.43 Feet",
			"1x5x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-686-5153"
		]
	},
	{
		"_id" : ObjectId("5784cc0a7e6ddc3bb2089ef3"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-27-J",
			"2015",
			"Detached",
			"2-Storey",
			"66.66 x 0 Feet",
			"2x5, 1x4, 1x2",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f04"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"279-42-W",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 150 Feet",
			"1x4",
			"877-520-3700"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f05"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 115 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xGround",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f06"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2015",
			"Detached",
			"2-Storey",
			"29.53 x 120 Feet",
			"1x2xMain, 1x4x2nd",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f07"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-33-Q",
			"2016",
			"Detached",
			"Backsplit 4",
			"20.44 x 138 Feet",
			"1x4, 1x2",
			"905-623-3393"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f08"),
		"Undefined" : [
			"Clarington",
			"Orono",
			"Durham",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"100 x 436 Feet",
			"1x2xLower, 1x4xMain, 1x2xMain",
			"905-655-0840"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f09"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2016",
			"Detached",
			"2-Storey",
			"39.4 x 125.59 Feet",
			"1x2, 1x3, 1x4",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("5784cc157e6ddc3bb2089f0a"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-41-U",
			"2016",
			"Detached",
			"Sidesplit 5",
			"50 x 120 Feet",
			"1x4xUpper, 1x2xGround, 1x3xLower",
			"905-433-5500"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f0b"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"269-32-R",
			"2016",
			"Detached",
			"2-Storey",
			"49.57 x 104.98 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f0c"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"277-32-T",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 113.28 Feet",
			"3x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-436-0990"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f0d"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-U",
			"2016",
			"Detached",
			"2-Storey",
			"50.79 x 109.91 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f0e"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-Q",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 108.63 Feet",
			"1x2xMain, 1x3xBsmt, 1x4xUpper, 1x3xUpper, 1x3xUpper",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f0f"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"100.12 x 324.86 Feet",
			"1x3xMain, 1x4xMain",
			"905-985-9777"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f10"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"281-58-U",
			"2016",
			"Detached",
			"Bungalow",
			"239.37 x 0 Feet",
			"1x4xMain, 1x4xMain, 1x2",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f11"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"43.5 x 104.11 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("5784cc167e6ddc3bb2089f12"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"270-35-P",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 114.83 Feet",
			"1x4xLower, 1x5xUpper, 1x6xUpper, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784cc2b7e6ddc3bb2089f19"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-26-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"66 x 165 Feet",
			"1x4xUpper, 1x2xMain",
			"Workshop",
			"905-985-4300"
		]
	},
	{
		"_id" : ObjectId("5784cc2b7e6ddc3bb2089f1a"),
		"Undefined" : [
			"Scugog",
			"Blackstock",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"85 x 250 Feet",
			"1x3xGround, 1x4xGround",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5784cc2b7e6ddc3bb2089f1b"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"13-36-E",
			"2016",
			"Detached",
			"Bungalow",
			"125 x 363.19 Feet",
			"1x4xMain, 1x3xLower",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("5784cc2b7e6ddc3bb2089f1c"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"234-37-N",
			"2015",
			"Detached",
			"2-Storey",
			"99.25 x 553.23 Feet",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xGround",
			"905-655-1144"
		]
	},
	{
		"_id" : ObjectId("5784cc2b7e6ddc3bb2089f1d"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"30.48 x 79.55 Metres",
			"1x4, 1x3",
			"705-878-3737"
		]
	},
	{
		"_id" : ObjectId("5784cc2d7e6ddc3bb2089f22"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"231-15-M",
			"2016",
			"Detached",
			"Bungalow",
			"55.77 x 108.27 Feet",
			"1x4xGround, 1x3xGround",
			"905-852-3050"
		]
	},
	{
		"_id" : ObjectId("5784cc2d7e6ddc3bb2089f23"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"2015",
			"Det W/Com Elements",
			"Bungaloft",
			"48.39 x 87.76 Feet",
			"1x2xMain, 1x5xMain, 1x4xMain, 1x4x2nd",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f50"),
		"Undefined" : [
			"Midland",
			"Midland",
			"Simcoe",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 100 Feet",
			"1x4x2nd, 1x1xMain",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f51"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Cottage",
			"Bungalow",
			"58 x 207 Feet",
			"1x4xMain",
			"416-665-2020"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f52"),
		"Undefined" : [
			"Severn",
			"West Shore",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"25 x 150 Feet",
			"1x2xGround, 1x2xMain, 1x4xUpper, 1x5xUpper",
			"855-881-8680"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f53"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-4-C",
			"2015",
			"Detached",
			"Bungalow",
			"66 x 132 Feet",
			"1x4xMain",
			"705-435-4506"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f54"),
		"Undefined" : [
			"Barrie",
			"Painswick North",
			"Simcoe",
			"505-12-L",
			"2016",
			"Detached",
			"2-Storey",
			"12 x 39.68 Metres",
			"1x4x2nd, 1x2xMain",
			"905-895-8615"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f55"),
		"Undefined" : [
			"Tiny",
			"Wyevale",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"295 x 295 Feet",
			"1x4xMain, 1x4x2nd, 1x5x2nd",
			"800-387-6037"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f56"),
		"Undefined" : [
			"Barrie",
			"400 West",
			"Simcoe",
			"2015",
			"Link",
			"2-Storey",
			"34.69 x 85.07 Feet",
			"1x2xMain, 1x4xUpper",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f57"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.83 x 84.22 Feet",
			"1x2xMain, 1x4xUpper, 1x3xUpper",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f58"),
		"Undefined" : [
			"Barrie",
			"Allandale Centre",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"24.5 x 104 Feet",
			"1x2xMain, 1x4x2nd",
			"888-429-2121"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f59"),
		"Undefined" : [
			"Barrie",
			"Wellington",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"49.3 x 116 Feet",
			"1x4xMain, 1x3xLower",
			"705-721-9111"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f5a"),
		"Undefined" : [
			"Barrie",
			"Grove East",
			"Simcoe",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"60 x 179 Feet",
			"1x4xMain",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f5b"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"29.79 x 109.19 Feet",
			"1x2xMain, 1x4xUpper",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("5784cc4d7e6ddc3bb2089f5c"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"100 x 165 Feet",
			"1x4xMain, 1x3xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f5d"),
		"Undefined" : [
			"Barrie",
			"400 West",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"15 x 33.3 Metres",
			"1x4xMain, 1x4xBsmt",
			"705-721-9111"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f5f"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"32.81 x 0 Feet",
			"1x3xMain, 1x4x2nd",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f60"),
		"Undefined" : [
			"Oro-Medonte",
			"Rural Oro-Medonte",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"70 x 301 Feet",
			"1x4xBsmt, 1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f61"),
		"Undefined" : [
			"Barrie",
			"South Shore",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 177 Feet",
			"2x4x3rd, 1x2xMain",
			"705-725-1055"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f62"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"587-13-B",
			"2016",
			"Detached",
			"Backsplit 3",
			"50 x 148.12 Feet",
			"1x3, 1x4",
			"905-857-7653"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f63"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-Q",
			"2016",
			"Detached",
			"2-Storey",
			"49 x 111 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f64"),
		"Undefined" : [
			"Barrie",
			"Bayshore",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"37 x 0 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f65"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-22-S",
			"2016",
			"Detached",
			"Backsplit 4",
			"64.5 x 200 Feet",
			"1x4xUpper, 1x2xGround",
			"866-924-7496"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f66"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"52.53 x 94 Feet",
			"1x2x2nd, 1x4x3rd, 1x5x3rd",
			"705-739-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f67"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"85 x 215 Feet",
			"1x4xUpper, 1x2xUpper",
			"416-621-2300"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f68"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"12 x 35.93 Metres",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f69"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-L",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 119.55 Feet",
			"1x4xMain, 1x2xMain, 1x2xLower",
			"905-775-5677"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f6a"),
		"Undefined" : [
			"New Tecumseth",
			"Beeton",
			"Simcoe",
			"587-13-B",
			"2016",
			"Detached",
			"2-Storey",
			"15.85 x 33.53 Metres",
			"1x4, 1x2, 2x3",
			"705-435-4336"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f6b"),
		"Undefined" : [
			"Barrie",
			"Painswick North",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"43.47 x 0 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"705-435-4506"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f6c"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-20-S",
			"2015",
			"Detached",
			"2-Storey",
			"52.23 x 114 Feet",
			"1x2xMain, 3x4x2nd",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f6d"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"57.41 x 82.02 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f6e"),
		"Undefined" : [
			"Oro-Medonte",
			"Horseshoe Valley",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"99.37 x 173.81 Metres",
			"1x4xMain, 1x4xMain, 1x4xBsmt",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f6f"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-21-K",
			"2016",
			"Detached",
			"2-Storey",
			"15 x 34 Metres",
			"1x2xMain, 1x3xLower, 1x4xUpper, 1x3xUpper",
			"905-836-6315"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f70"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"30.18 x 109.91 Feet",
			"2x4x2nd, 1x2xMain",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f71"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"508-9-M",
			"2016",
			"Detached",
			"Sidesplit 5",
			"100 x 246 Feet",
			"2x4x3rd, 1x2xGround",
			"705-435-5556"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f72"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"2015",
			"Farm",
			"2-Storey",
			"1019 x 2129 Feet",
			"1x4xMain",
			"705-436-2121"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f73"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-L",
			"2016",
			"Detached",
			"2-Storey",
			"48.43 x 114.83 Feet",
			"1x2xMain, 3x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5784cc4e7e6ddc3bb2089f74"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"10.84 x 0 Acres",
			"1x3xGround, 1x3x2nd, 1x2x2nd",
			"416-706-0419"
		]
	},
	{
		"_id" : ObjectId("5784cc4f7e6ddc3bb2089f75"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Rural Bradford West Gwillimbury",
			"Simcoe",
			"2016",
			"Detached",
			"Sidesplit 4",
			"200 x 400 Feet",
			"1x4xUpper, 1x3xLower",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("5784cc4f7e6ddc3bb2089f76"),
		"Undefined" : [
			"Barrie",
			"Codrington",
			"Simcoe",
			"505-12-H",
			"2016",
			"Detached",
			"Bungalow",
			"19.5 x 39.6 Metres",
			"1x3x2nd, 1x4x2nd, 1x5xBsmt",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("5784cc4f7e6ddc3bb2089f77"),
		"Undefined" : [
			"Barrie",
			"Allandale Heights",
			"Simcoe",
			"505-11-L",
			"2015",
			"Detached",
			"Bungalow",
			"75 x 154 Feet",
			"1x2xMain, 1x4xMain, 2x4xBsmt",
			"877-728-4067"
		]
	},
	{
		"_id" : ObjectId("5784cc507e6ddc3bb2089f7b"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"41.01 x 101.71 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"519-940-2100"
		]
	},
	{
		"_id" : ObjectId("5784cc507e6ddc3bb2089f7c"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"56.04 x 0 Feet",
			"1x2xMain, 2x4x2nd",
			"905-278-1900"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089f9a"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.32 x 110.03 Feet",
			"2x4x2nd, 1x2xGround",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089f9b"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-37-F",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.67 x 101.57 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-542-0123"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089f9c"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-A",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 120 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089f9d"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-40-H",
			"2015",
			"Detached",
			"Backsplit 5",
			"33 x 118 Feet",
			"1x2, 1x3, 1x3",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089f9e"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"473-45-M",
			"2016",
			"Detached",
			"2-Storey",
			"7.62 x 30.5 Metres",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x3xBsmt",
			"416-993-7653"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089f9f"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-43-R",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"33 x 125 Feet",
			"1x4x2nd",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089fa0"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"48.1 x 101.84 Feet",
			"2x4x2nd, 1x2xMain",
			"416-477-2300"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089fa1"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"33.66 x 109.91 Feet",
			"2x4x2nd, 1x2xMain",
			"647-560-9624"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089fa2"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-33-N",
			"2015",
			"Detached",
			"Backsplit 3",
			"54.86 x 132.34 Feet",
			"1x2xUpper, 1x4xUpper, 1x2xLower",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089fa3"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"2016",
			"Detached",
			"Bungalow",
			"50.1 x 142.08 Feet",
			"2x4",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("5784cc5e7e6ddc3bb2089fa4"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-44-L",
			"2016",
			"Detached",
			"Sidesplit 4",
			"54.22 x 120 Feet",
			"1x3x2nd, 1x2xMain, 1x4x2nd",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fa5"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-B",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 114.83 Feet",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xGround",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fa6"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2016",
			"Detached",
			"Sidesplit 3",
			"50 x 120 Feet",
			"1x4xUpper, 1x3xLower",
			"416-503-2373"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fa7"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"473-45-P",
			"2016",
			"Detached",
			"Sidesplit 3",
			"50.25 x 137.08 Feet",
			"1x2x2nd, 1x4x2nd, 1x2xBsmt",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fa8"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"478-38-R",
			"2016",
			"Detached",
			"2-Storey",
			"40.28 x 116.17 Feet",
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
			"Crown Moulding",
			"11",
			"Br",
			"Bsmt",
			"3.25",
			"2.80",
			"Laminate",
			"Pot Lights",
			"Crown Moulding",
			"12",
			"Rec",
			"Bsmt",
			"6.30",
			"6.15",
			"Laminate",
			"Pot Lights",
			"Fireplace",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fa9"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-F",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 108.86 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089faa"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"458-33-A",
			"2015",
			"Detached",
			"2-Storey",
			"52.22 x 105.07 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fab"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"472-39-M",
			"2015",
			"Detached",
			"2-Storey",
			"47.7 x 131.53 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fac"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-36-Q",
			"2016",
			"Detached",
			"Bungalow",
			"84 x 125 Feet",
			"1x4xGround, 1x3xGround",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fad"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"458-33-A",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"49.21 x 150.1 Feet",
			"1x2xMain, 1x4xMain, 1x4xMain, 1x3xBsmt",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fae"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-34-N",
			"2016",
			"Detached",
			"Bungalow",
			"100 x 214 Feet",
			"1x4xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089faf"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-J",
			"2016",
			"Detached",
			"2-Storey",
			"13.8 x 27.15 Metres",
			"1x2, 3x4",
			"905-709-8000"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fb0"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-41-Q",
			"2015",
			"Detached",
			"2-Storey",
			"52.62 x 157 Feet",
			"2x4x2nd, 1x2xMain",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fb1"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"473-46-P",
			"2015",
			"Detached",
			"Sidesplit 5",
			"101.02 x 111.75 Feet",
			"1x4xUpper, 2x3xUpper, 1x2xMain, 1x3xLower",
			"905-565-6363"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fb2"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"473-41-Q",
			"2016",
			"Detached",
			"2-Storey",
			"107.88 x 158 Feet",
			"1x2xMain, 2x4x2nd",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("5784cc5f7e6ddc3bb2089fb3"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"472-38-Q",
			"2016",
			"Detached",
			"2-Storey",
			"90 x 207.21 Feet",
			"2x5, 2x3, 1x2",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a004"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-U",
			"2016",
			"Detached",
			"2-Storey",
			"33.4 x 78.36 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a005"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-U",
			"2015",
			"Detached",
			"2-Storey",
			"34.76 x 83.82 Feet",
			"1x4xUpper, 1x2xBsmt",
			"905-415-3800"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a006"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2016",
			"Detached",
			"2-Storey",
			"19.24 x 79.1 Feet",
			"1x4x2nd, 1x2xBsmt",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a007"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"452-43-V",
			"2016",
			"Detached",
			"Backsplit 3",
			"35 x 145 Feet",
			"1x4, 0x3, 0x2, 1x1",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a008"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.33 x 131.23 Feet",
			"1x4x2nd, 1x2xMain",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a009"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2015",
			"Detached",
			"2-Storey",
			"43.97 x 71.4 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-857-7653"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a00a"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"29.82 x 117.1 Feet",
			"1x2, 1x4",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a00b"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.75 x 105.87 Feet",
			"1x2xGround, 2x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a00c"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-U",
			"2105",
			"Semi-Detached",
			"2-Storey",
			"25.73 x 120.85 Feet",
			"1x4x2nd, 1x3xLower",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a00d"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"459-41-A",
			"2016",
			"Link",
			"2-Storey",
			"29.53 x 127.3 Feet",
			"1x2xMain, 2x4xUpper",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a00e"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"452-42-V",
			"2016",
			"Detached",
			"Sidesplit 3",
			"50 x 100 Feet",
			"1x4xUpper, 1x3xMain",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a00f"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 103 Feet",
			"1x4xUpper, 1x4xLower, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a010"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"445-43-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"8.4 x 25 Metres",
			"2x4, 1x2",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a011"),
		"Undefined" : [
			"Brampton",
			"Heart Lake West",
			"Peel",
			"445-44-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.34 x 109.91 Feet",
			"1x2, 1x3, 1x4",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a013"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"28.14 x 107.72 Feet",
			"2x4x2nd, 1x2xMain",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a014"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-W",
			"2016",
			"Link",
			"Backsplit 3",
			"35 x 110 Feet",
			"1x4xMain, 1x2xMain, 1x4xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a015"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"451-40-Y",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.97 x 114.83 Feet",
			"1x2xGround, 1x3xBsmt, 2x4x2nd",
			"905-497-2300"
		]
	},
	{
		"_id" : ObjectId("5784cc817e6ddc3bb208a016"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"29.59 x 91.2 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a018"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-38-R",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 90.22 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a019"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-S",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"25.43 x 60.7 Feet",
			"1x4xUpper, 1x2xMain, 1x4xUpper",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a01a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.63 x 99.15 Feet",
			"1x2xMain, 2x4x2nd",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a01b"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"445-47-U",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"35 x 130 Feet",
			"1x4, 1x3, 1x2",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a01c"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"453-49-V",
			"2016",
			"Detached",
			"Sidesplit 4",
			"59.36 x 135.98 Feet",
			"1x2xMain, 1x4xUpper",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a01d"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.47 x 110.1 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a01e"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"438-43-P",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"42.92 x 101.71 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a01f"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-49-X",
			"2015",
			"Semi-Detached",
			"Bungalow",
			"34.83 x 103.02 Feet",
			"1x4xMain, 1x2xMain, 1x4xBsmt",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a020"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-U",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"30 x 110 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a021"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"445-43-U",
			"2016",
			"Detached",
			"2-Storey",
			"40.91 x 99.9 Feet",
			"1x2, 1x3, 1x4",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a022"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"445-43-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"31.81 x 103.35 Feet",
			"1x5xUpper, 1x2xLower, 1x3xMain, 1x4",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a023"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"472-38-N",
			"2016",
			"Detached",
			"2-Storey",
			"32.99 x 73.39 Feet",
			"1x2xMain, 2x4x2nd, 1x2xBsmt",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a024"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"445-42-U",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 104.46 Feet",
			"2x4x2nd, 1x2xMain, 1x3xLower",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a025"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"453-56-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21 x 100.07 Feet",
			"1x2xMain, 1x3x2nd, 1x3x2nd",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a026"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"444-38-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"27.56 x 102.85 Feet",
			"1x3x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a027"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-Q",
			"2015",
			"Detached",
			"2-Storey",
			"54.32 x 85.3 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a028"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-X",
			"2016",
			"Detached",
			"2-Storey",
			"30.97 x 108.27 Feet",
			"2x4x2nd, 1x3xLower, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a029"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 100.07 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a02a"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-X",
			"2015",
			"Detached",
			"Backsplit 5",
			"21 x 110 Feet",
			"2x4, 2x2",
			"905-506-7653"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a02b"),
		"Undefined" : [
			"Brampton",
			"Westgate",
			"Peel",
			"472-40-N",
			"2016",
			"Detached",
			"2-Storey",
			"23.41 x 182.99 Feet",
			"1x3xUpper, 1x4xUpper, 1x2xMain, 1x3xBsmt, 1x1xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a02c"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"33.56 x 0 Feet",
			"1x5xUpper, 1x4xUpper, 1x4xLower, 1x2xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a02d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-51-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"28.05 x 85.3 Feet",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a02e"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-T",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"32 x 95 Feet",
			"1x4xUpper, 1x4xMain, 1x4xLower",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a02f"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"28.28 x 0 Feet",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a030"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-Q",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 85.3 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a031"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 80.3 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a032"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-40-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"28.54 x 83.66 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a033"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"55.61 x 108.42 Feet",
			"2x4x2nd, 1x2xGround",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a034"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"466-41-H",
			"2016",
			"Detached",
			"2-Storey",
			"38.06 x 90.22 Feet",
			"1x2, 1x4, 1x5",
			"416-270-1111"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a035"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-R",
			"2016",
			"Detached",
			"2-Storey",
			"30.27 x 95.12 Feet",
			"1x5x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a036"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"446-56-U",
			"2016",
			"Detached",
			"2-Storey",
			"37.01 x 85.3 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a039"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-42-Z",
			"2016",
			"Detached",
			"2-Storey",
			"40.22 x 106.63 Feet",
			"1x2, 3x4",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a03a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-S",
			"2016",
			"Detached",
			"2-Storey",
			"43.96 x 132.67 Feet",
			"1x2xBsmt, 1x4x2nd, 1x5x2nd",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a03b"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-41-T",
			"2015",
			"Detached",
			"2-Storey",
			"35.1 x 150.3 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a03c"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"459-41-A",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 115 Feet",
			"3x4, 1x2",
			"416-746-9494"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a03d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-R",
			"2015",
			"Detached",
			"2-Storey",
			"120.41 x 49.21 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a03e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"37.07 x 82.02 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-565-6363"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a03f"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-40-U",
			"2015",
			"Detached",
			"2-Storey",
			"37.08 x 88.59 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-455-5100"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a040"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"26.02 x 152.89 Feet",
			"1x2xMain, 1x4x2nd, 1x4xBsmt, 1x4x2nd",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a041"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"45.01 x 85.3 Feet",
			"1x2xMain, 2x4xUpper, 1x3xLower",
			"905-452-7272"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a042"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-48-P",
			"2016",
			"Detached",
			"2-Storey",
			"38 x 90 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-497-2300"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a043"),
		"Undefined" : [
			"Brampton",
			"Northwest Sandalwood Parkway",
			"Peel",
			"438-43-O",
			"2015",
			"Detached",
			"2-Storey",
			"51.51 x 87.2 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xIn Betwn, 1x3xBsmt",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a044"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 87.01 Feet",
			"1x6x2nd, 1x4x2nd, 1x2xMain",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a045"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-Q",
			"2016",
			"Detached",
			"2-Storey",
			"37.34 x 98.43 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-793-5777"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a046"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2016",
			"Detached",
			"2-Storey",
			"52.69 x 92.39 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("5784cc837e6ddc3bb208a047"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore",
			"Peel",
			"446-53-Q",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 100.89 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cc847e6ddc3bb208a048"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-51-S",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 100 Feet",
			"1x5x2nd, 1x3x2nd, 1x2xMain, 1x3x2nd",
			"905-488-2100"
		]
	},
	{
		"_id" : ObjectId("5784cc847e6ddc3bb208a049"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-54-T",
			"2016",
			"Detached",
			"Bungalow",
			"57.96 x 109.18 Feet",
			"1x2xMain, 1x3xBsmt, 1x4xMain, 1x5xMain",
			"905-850-9488"
		]
	},
	{
		"_id" : ObjectId("5784cc847e6ddc3bb208a04a"),
		"Undefined" : [
			"Brampton",
			"Toronto Gore Rural Estate",
			"Peel",
			"439-56-O",
			"2016",
			"Detached",
			"2-Storey",
			"14.33 x 27.5 Metres",
			"1x5x2nd, 1x3x2nd, 1x3x2nd, 1x2xMain",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("5784cc847e6ddc3bb208a04b"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"473-47-M",
			"2016",
			"Detached",
			"2-Storey",
			"49.87 x 118.11 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("5784cc847e6ddc3bb208a04c"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"451-39-V",
			"2016",
			"Detached",
			"2-Storey",
			"69.88 x 0 Feet",
			"1x2xMain, 1x3x2nd, 2x4x2nd, 1x5x2nd",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a055"),
		"Undefined" : [
			"Caledon",
			"Bolton East",
			"Peel",
			"440-62-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"51.67 x 142.9 Feet",
			"1x4xUpper, 1x1xUpper, 1x2xMain, 1x4xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a056"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"473-45-P",
			"2015",
			"Detached",
			"2-Storey",
			"29.99 x 109.91 Feet",
			"1x4, 1x3, 1x2",
			"905-857-0651"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a057"),
		"Undefined" : [
			"Caledon",
			"Bolton North",
			"Peel",
			"432-62-H",
			"2016",
			"Detached",
			"Backsplit 3",
			"51.06 x 157.5 Feet",
			"1x4xUpper, 1x3xLower",
			"905-857-7653"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a058"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"14-27-K",
			"2016",
			"Detached",
			"2-Storey",
			"11.4 x 0 Acres",
			"1x4xGround, 1x3xGround, 1x4x2nd, 1x4x2nd",
			"Drive Shed",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a059"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-M",
			"2015",
			"Detached",
			"2-Storey",
			"56.38 x 0 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a05a"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-46-M",
			"2015",
			"Detached",
			"2-Storey",
			"52.05 x 0 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5784cc887e6ddc3bb208a05b"),
		"Undefined" : [
			"Caledon",
			"Caledon Village",
			"Peel",
			"410-48-T",
			"2016",
			"Detached",
			"2-Storey",
			"136.25 x 320.8 Feet",
			"1x2xMain, 1x4xUpper, 2x5xUpper, 1x3xLower",
			"877-352-4378"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a076"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-P",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 102 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-877-9001"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a077"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"42.57 x 115.52 Feet",
			"1x4x2nd, 1x4xIn Betwn",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a078"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-24-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 80.38 Feet",
			"1x4x2nd, 1x2xGround",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a079"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 108.27 Feet",
			"1x2xMain, 2x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a07a"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"14-26-J",
			"2015",
			"Detached",
			"Bungaloft",
			"176.84 x 0 Acres",
			"1x4xMain, 1x3xUpper, 1x3xBsmt",
			"Workshop",
			"416-482-8662"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a07b"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-24-Z",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 104.99 Feet",
			"2x4x2nd, 1x2xMain",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a07c"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-B",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"56.3 x 93 Feet",
			"1x2, 1x4, 1x4",
			"905-812-1100"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a07d"),
		"Undefined" : [
			"Halton Hills",
			"Acton",
			"Halton",
			"428-25-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"40.03 x 114.83 Feet",
			"1x3x2nd, 1x3xMain",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a07e"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.64 x 0 Feet",
			"1x3x2nd, 1x4x2nd, 1x2xMain",
			"416-264-1111"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a07f"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-M",
			"2016",
			"Detached",
			"Bungalow",
			"72 x 150 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-877-2630"
		]
	},
	{
		"_id" : ObjectId("5784cc957e6ddc3bb208a080"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-A",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"29.53 x 89.9 Feet",
			"2x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a081"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"456-20-C",
			"2016",
			"Detached",
			"2-Storey",
			"36 x 85.78 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a082"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-B",
			"2016",
			"Detached",
			"2-Storey",
			"45.93 x 80.38 Feet",
			"2x4x2nd, 1x2xMain",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a083"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"2016",
			"Detached",
			"Backsplit 4",
			"65.39 x 120 Feet",
			"1x2xLower, 1x4xUpper, 1x3xUpper",
			"905-848-9800"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a084"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-25-C",
			"2016",
			"Detached",
			"2-Storey",
			"37.07 x 100.07 Feet",
			"2x4x2nd, 1x2xMain",
			"905-693-9575"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a085"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 88.58 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a086"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-A",
			"2015",
			"Detached",
			"2-Storey",
			"35.99 x 85.3 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a087"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-20-C",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 88.58 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xGround, 1x4xBsmt",
			"905-693-9575"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a088"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"40.12 x 108.17 Feet",
			"1x2xMain, 3x4x2nd, 1x3xBsmt",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a089"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"190 x 575 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a08a"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"180 x 328 Feet",
			"1x2xGround, 1x2xBsmt, 1x4x2nd, 1x4xGround",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("5784cc967e6ddc3bb208a08b"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"2015",
			"Detached",
			"Bungalow",
			"0 x 0 Feet",
			"2x2xGround, 2x5xGround, 1x2xBsmt, 1x3xGround",
			"416-462-4787"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a09e"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"20.18 x 44.29 Feet",
			"1x2xMain, 1x4xUpper",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a09f"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-20-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.04 x 91.24 Feet",
			"2x4x3rd, 1x2x2nd, 1x2xGround",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a0"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-26-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"19.85 x 60.7 Feet",
			"1x5x3rd, 1x4x3rd, 1x2x2nd, 1x4xGround",
			"905-279-8300"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a1"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"50.2 x 111.55 Feet",
			"2x4x2nd, 1x2xMain",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a2"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-25-N",
			"2016",
			"Detached",
			"2-Storey",
			"31.17 x 111.55 Feet",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a3"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"64 x 141 Feet",
			"1x4xMain",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a4"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-28-N",
			"2016",
			"Detached",
			"2-Storey",
			"30.87 x 104.53 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-793-5777"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a5"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-P",
			"2016",
			"Detached",
			"2-Storey",
			"45.76 x 125.69 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a6"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-24-P",
			"2016",
			"Detached",
			"Bungaloft",
			"50.24 x 110 Feet",
			"1x5xMain, 1x2xMain, 1x4x2nd",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a7"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 120 Feet",
			"2x4x2nd, 1x2xGround",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a8"),
		"Undefined" : [
			"Oakville",
			"Palermo West",
			"Halton",
			"470-19-P",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 100.07 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"905-338-3737"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0a9"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-20-T",
			"2016",
			"Detached",
			"2-Storey",
			"36.26 x 154.88 Feet",
			"1x5x2nd, 1x2xMain, 1x3xBsmt",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0aa"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"476-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"65.87 x 124.69 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0ab"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-29-S",
			"2016",
			"Detached",
			"Bungalow",
			"66 x 118 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0ac"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-26-N",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 115.1 Feet",
			"1x5, 1x3, 1x4, 1x2",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("5784cc9f7e6ddc3bb208a0ad"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Detached",
			"2-Storey",
			"15.3 x 27 Metres",
			"1x2xMain, 3x4x2nd, 1x3xBsmt",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("5784cca07e6ddc3bb208a0ae"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2015",
			"Detached",
			"2-Storey",
			"62 x 144.43 Feet",
			"1x2xMain, 1x5x2nd, 1x3x2nd, 1x3xBsmt, 1x5x2nd",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0be"),
		"Undefined" : [
			"Burlington",
			"Palmer",
			"Halton",
			"469-12-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"107 x 55.7 Feet",
			"1x4xGround, 1x3xBsmt",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0bf"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 80.38 Feet",
			"1x2xMain, 1x5x2nd",
			"905-335-3042"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c0"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"469-15-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"29.53 x 85.3 Feet",
			"1x2xMain, 2x3x2nd",
			"647-932-0015"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c1"),
		"Undefined" : [
			"Burlington",
			"Brant Hills",
			"Halton",
			"469-10-N",
			"2016",
			"Detached",
			"2-Storey",
			"49.86 x 116.94 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"905-257-3633"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c2"),
		"Undefined" : [
			"Burlington",
			"Alton",
			"Halton",
			"469-15-M",
			"2016",
			"Detached",
			"2-Storey",
			"35.63 x 85.33 Feet",
			"1x2xGround, 2x4x2nd",
			"905-639-3355"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c3"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-15-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"125 x 62.52 Feet",
			"1x2xLower, 1x3xBsmt, 1x4xUpper",
			"905-634-7755"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c4"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-15-P",
			"2016",
			"Detached",
			"Bungaloft",
			"60.37 x 118.11 Feet",
			"1x2xMain, 1x4xMain, 1x3x2nd, 1x4xBsmt",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c5"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 148.46 Feet",
			"1x2xGround, 2x4x2nd",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c6"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"2016",
			"Detached",
			"Sidesplit 4",
			"60 x 134 Feet",
			"2x4x2nd, 1x2xLower",
			"905-338-3721"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c7"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-11-U",
			"2016",
			"Detached",
			"Bungalow",
			"53 x 120 Feet",
			"1x3xMain, 1x4xMain, 1x3xBsmt",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c8"),
		"Undefined" : [
			"Burlington",
			"Roseland",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"100 x 110 Feet",
			"1x2xGround, 2x5x2nd, 1x4x2nd, 1x3xBsmt",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("5784cca87e6ddc3bb208a0c9"),
		"Undefined" : [
			"Burlington",
			"Rural Burlington",
			"Halton",
			"19-28-N",
			"2015",
			"Detached",
			"2-Storey",
			"213.25 x 451.9 Feet",
			"1x2xGround, 1x5x2nd, 3x4x2nd, 1x3xBsmt, 1x2xBsmt",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b3"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b5"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-231-5000"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b7"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-491-3228"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b8"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b9"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2ba"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2bb"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2bc"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2bd"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2be"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-465-7527"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2bf"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Bachelor/Studio",
			"1x4xMain",
			"416-583-1660"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2c0"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2c1"),
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
		"_id" : ObjectId("5784cd977e6ddc3bb208a2c2"),
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
		"_id" : ObjectId("5784cd987e6ddc3bb208a2c3"),
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
		"_id" : ObjectId("5784cd987e6ddc3bb208a2c4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-709-8000"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2c6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2c7"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2c8"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x4xFlat",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2c9"),
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
		"_id" : ObjectId("5784cd987e6ddc3bb208a2ca"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2cb"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2cc"),
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
		"_id" : ObjectId("5784cd987e6ddc3bb208a2cd"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2cf"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-964-7291"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d0"),
		"Undefined" : [
			"Toronto C03",
			"Yonge-Eglinton",
			"Toronto",
			"115-19-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d1"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xFlat, 1x3xFlat",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d6"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-945-0660"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d7"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5784cd987e6ddc3bb208a2d8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Loft",
			"2x4",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2da"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2db"),
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
		"_id" : ObjectId("5784cd997e6ddc3bb208a2dc"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-479-3891"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2dd"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xFlat",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2df"),
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
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e0"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x5x2nd, 1x2xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e1"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e3"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x2",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e4"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-588-3286"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-731-2266"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e8"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-882-6660"
		]
	},
	{
		"_id" : ObjectId("5784cd997e6ddc3bb208a2e9"),
		"Undefined" : [
			"Toronto C02",
			"Yonge-St. Clair",
			"Toronto",
			"115-19-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-488-2875"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a317"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-929-4343"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a318"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-21-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a31a"),
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
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a31b"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a31d"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat, Flat, Flat, Flat, Flat",
			"905-470-7890"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a31e"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a31f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a320"),
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
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a321"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a322"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"416-250-8174"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a323"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a324"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a326"),
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
		"_id" : ObjectId("5784cdaf7e6ddc3bb208a327"),
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
		"_id" : ObjectId("5784cdb07e6ddc3bb208a328"),
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
		"_id" : ObjectId("5784cdb07e6ddc3bb208a329"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-771-6618"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a32b"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-25-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-663-1818"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a32c"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"110-25-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a32d"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"950-305-0033"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a32e"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a32f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a330"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a331"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a332"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a333"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-798-7070"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a334"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a336"),
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
		"_id" : ObjectId("5784cdb07e6ddc3bb208a337"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-470-8080"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a338"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park South",
			"Toronto",
			"109-19-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a33a"),
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
		"_id" : ObjectId("5784cdb07e6ddc3bb208a33b"),
		"Undefined" : [
			"Toronto C15",
			"Don Valley Village",
			"Toronto",
			"104-25-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x2xMain",
			"416-281-0027"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a33c"),
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
		"_id" : ObjectId("5784cdb07e6ddc3bb208a33d"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-C",
			"2015",
			"Condo Apt",
			"3-Storey",
			"1x4, 1x3",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a33e"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-22-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain, 1x5xMain",
			"905-475-4750"
		]
	},
	{
		"_id" : ObjectId("5784cdb07e6ddc3bb208a33f"),
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
		"_id" : ObjectId("5784cdc17e6ddc3bb208a357"),
		"Undefined" : [
			"Toronto E08",
			"Eglinton East",
			"Toronto",
			"116-32-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-759-6000"
		]
	},
	{
		"_id" : ObjectId("5784cdc17e6ddc3bb208a358"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5784cdc17e6ddc3bb208a359"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5784cdc17e6ddc3bb208a35a"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"105-33-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a35b"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a35c"),
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
		"_id" : ObjectId("5784cdc27e6ddc3bb208a35d"),
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
		"_id" : ObjectId("5784cdc27e6ddc3bb208a35e"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"111-35-F",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"1x3",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a35f"),
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
		"_id" : ObjectId("5784cdc27e6ddc3bb208a360"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a361"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x3xFlat",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a362"),
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
		"_id" : ObjectId("5784cdc27e6ddc3bb208a363"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-477-5511"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a364"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"117-37-G",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"905-474-1772"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a365"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-L",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a366"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-444-7755"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a367"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"104-31-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784cdc27e6ddc3bb208a368"),
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
		"_id" : ObjectId("5784cdc27e6ddc3bb208a36b"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"3x3, 1x4",
			"416-927-9866"
		]
	},
	{
		"_id" : ObjectId("5784cdd57e6ddc3bb208a390"),
		"Undefined" : [
			"Toronto W10",
			"West Humber-Clairville",
			"Toronto",
			"101-3-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5784cdd57e6ddc3bb208a391"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-709-8000"
		]
	},
	{
		"_id" : ObjectId("5784cdd57e6ddc3bb208a392"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-4-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784cdd57e6ddc3bb208a393"),
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
		"_id" : ObjectId("5784cdd57e6ddc3bb208a394"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-N",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5784cdd57e6ddc3bb208a395"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a396"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-7-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-497-9794"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a397"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-535-8080"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a398"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-201-9000"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a399"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a39a"),
		"Undefined" : [
			"Toronto W09",
			"Kingsview Village-The Westway",
			"Toronto",
			"107-7-H",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xIn Betwn, 1x3xIn Betwn",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a39b"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xFlat, 1x4x2nd",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a39c"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a39d"),
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
		"_id" : ObjectId("5784cdd67e6ddc3bb208a39e"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-14-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a39f"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a0"),
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
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a1"),
		"Undefined" : [
			"Toronto W05",
			"Glenfield-Jane Heights",
			"Toronto",
			"102-12-D",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x3, 1x2",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a2"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a3"),
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
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a4"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4x2nd, 2xMain",
			"416-653-8292"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a5"),
		"Undefined" : [
			"Toronto W03",
			"Rockcliffe-Smythe",
			"Toronto",
			"114-10-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a6"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"108-10-K",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x3x2nd, 1x3xBsmt, 1x4x2nd",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a7"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x3xMain, 1x3xBsmt",
			"416-628-0930"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a8"),
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
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3a9"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-16-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3aa"),
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
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3ab"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"113-7-P",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4, 1x2",
			"416-234-2424"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3ac"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-3-N",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain, 1x2xBsmt",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("5784cdd67e6ddc3bb208a3ad"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-P",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-223-8833"
		]
	},
	{
		"_id" : ObjectId("5784cdd77e6ddc3bb208a3ae"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5784cdd77e6ddc3bb208a3af"),
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
		"_id" : ObjectId("5784cde47e6ddc3bb208a3cc"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-B",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2xLower, 1x4x3rd",
			"416-551-6044"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3cd"),
		"Undefined" : [
			"Markham",
			"Commerce Valley",
			"York",
			"355-24-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3ce"),
		"Undefined" : [
			"Vaughan",
			"Crestwood-Springfarm-Yorkhill",
			"York",
			"355-19-Z",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-751-6533"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3cf"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d0"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d1"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d2"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"349-22-U",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-324-2626"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d3"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-22-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d4"),
		"Undefined" : [
			"Richmond Hill",
			"Langstaff",
			"York",
			"355-22-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-832-1111"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d5"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-18-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-695-6195"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d6"),
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
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d7"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d8"),
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
		"_id" : ObjectId("5784cde57e6ddc3bb208a3d9"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3da"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-18-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-975-5588"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3dc"),
		"Undefined" : [
			"Markham",
			"Bayview Fairway-Bayview Country Club Estates",
			"York",
			"355-25-Y",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x3xLower, 1x4x3rd",
			"905-709-1800"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3dd"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-31-Z",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x3x2nd, 1x3x3rd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3de"),
		"Undefined" : [
			"Markham",
			"Vinegar Hill",
			"York",
			"357-36-W",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xMain",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3df"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-P",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x4x3rd, 1x2xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3e0"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-31-Z",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x1xMain, 1x4x2nd, 1x4x3rd",
			"905-731-2266"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3e1"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x3x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-755-0123"
		]
	},
	{
		"_id" : ObjectId("5784cde57e6ddc3bb208a3e2"),
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
		"_id" : ObjectId("5784cde57e6ddc3bb208a3e3"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"331-23-B",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x2xBsmt",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("5784cde67e6ddc3bb208a3e4"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-22-N",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3, 1x2",
			"416-226-1987"
		]
	},
	{
		"_id" : ObjectId("5784cde67e6ddc3bb208a3e5"),
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
		"_id" : ObjectId("5784cde67e6ddc3bb208a3e6"),
		"Undefined" : [
			"Markham",
			"Bayview Glen",
			"York",
			"355-23-Z",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x2xMain, 1x2x2nd, 1x4x2nd, 1x7x2nd",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f0"),
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
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f1"),
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
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f2"),
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
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f3"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-K",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4xUpper, 1x2xMain",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f4"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"2016",
			"Condo Townhouse",
			"Bungaloft",
			"1x5xMain, 1x4xMain, 1x3xUpper",
			"905-985-7351"
		]
	},
	{
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f5"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-22-Q",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xGround",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f6"),
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
		"_id" : ObjectId("5784cdeb7e6ddc3bb208a3f7"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"2015",
			"Comm Element Condo",
			"3-Storey",
			"2x3",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5784cdff7e6ddc3bb208a422"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("5784cdff7e6ddc3bb208a423"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-47-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5784cdff7e6ddc3bb208a424"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-41-M",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-276-0880"
		]
	},
	{
		"_id" : ObjectId("5784cdff7e6ddc3bb208a425"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek South",
			"Peel",
			"452-42-Z",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"2x4xMain",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("5784cdff7e6ddc3bb208a426"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784cdff7e6ddc3bb208a427"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-46-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a429"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"472-40-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a42a"),
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
		"_id" : ObjectId("5784ce007e6ddc3bb208a42b"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-565-3001"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a42c"),
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
		"_id" : ObjectId("5784ce007e6ddc3bb208a42d"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-49-U",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4xUpper",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a42e"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-41-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a42f"),
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
		"_id" : ObjectId("5784ce007e6ddc3bb208a430"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"459-41-D",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, 1x2xMain",
			"905-459-7900"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a431"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x3",
			"416-656-3500"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a432"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a433"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"473-41-L",
			"2016",
			"Comm Element Condo",
			"Apartment",
			"2x4",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a434"),
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
		"_id" : ObjectId("5784ce007e6ddc3bb208a435"),
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
		"_id" : ObjectId("5784ce007e6ddc3bb208a436"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a437"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-40-H",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5x2nd, 1x4x2nd",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a438"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x4x2nd",
			"705-478-8588"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a439"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a43a"),
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
		"_id" : ObjectId("5784ce007e6ddc3bb208a43b"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x3xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a43c"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-41-U",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5784ce007e6ddc3bb208a43d"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xGround, 1x3xBsmt",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a43e"),
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
		"_id" : ObjectId("5784ce017e6ddc3bb208a43f"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-44-T",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x2xMain, 1x4xLower",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a440"),
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
		"_id" : ObjectId("5784ce017e6ddc3bb208a441"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a442"),
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
		"_id" : ObjectId("5784ce017e6ddc3bb208a443"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"459-41-A",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 2x4xUpper",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a444"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"472-40-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"2x4, 1x2",
			"416-231-5000"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a446"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-34-G",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"2x4x2nd, 1x2xGround, 1x2xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a447"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x2x2nd, 2x4x3rd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a448"),
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
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a457"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-9-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x4xMain",
			"905-689-9223"
		]
	},
	{
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a458"),
		"Undefined" : [
			"Burlington",
			"Palmer",
			"Halton",
			"469-12-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 1x4",
			"905-332-9223"
		]
	},
	{
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a459"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-857-8700"
		]
	},
	{
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a45a"),
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
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a45b"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"471-26-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a45c"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-26-N",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain, 1x3xMain, 1x3xLower",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a45d"),
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
		"_id" : ObjectId("5784ce0a7e6ddc3bb208a45e"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-26-P",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd",
			"905-335-8808"
		]
	},
	{
		"_id" : ObjectId("5784ce0b7e6ddc3bb208a45f"),
		"Undefined" : [
			"Burlington",
			"Bayview",
			"Halton",
			"474-2-S",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x5x2nd, 1x2xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5784ce0b7e6ddc3bb208a460"),
		"Undefined" : [
			"Milton",
			"Willmont",
			"Halton",
			"456-21-B",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("5784ce0b7e6ddc3bb208a461"),
		"Undefined" : [
			"Burlington",
			"Tyandaga",
			"Halton",
			"474-8-R",
			"2016",
			"Det Condo",
			"2-Storey",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("5784ce0b7e6ddc3bb208a462"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x3xBsmt, 1x2xMain, 2x4x2nd",
			"905-338-1515"
		]
	},
	{
		"_id" : ObjectId("578622727e6ddc167bb6e29a"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-17-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2 1/2 Storey",
			"16.83 x 99.83 Feet",
			"1x4x2nd, 1x2xBsmt",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("578622727e6ddc167bb6e29b"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-P",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"20.2 x 116.4 Feet",
			"1x5x2nd, 1x3xBsmt",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("578622727e6ddc167bb6e29c"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"119-16-R",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"20 x 125 Feet",
			"1x4x2nd, 1x4xBsmt",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("578622727e6ddc167bb6e29d"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"34.92 x 124.25 Feet",
			"4x2, 2x4",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("578622747e6ddc167bb6e2a2"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-M",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"15.33 x 100 Feet",
			"1x4",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("578622747e6ddc167bb6e2a3"),
		"Undefined" : [
			"Toronto C08",
			"Moss Park",
			"Toronto",
			"120-20-R",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"24.75 x 122 Feet",
			"1x3xMain, 1x3x2nd, 1x4x2nd",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("578622777e6ddc167bb6e2ab"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"102-16-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"32.4 x 111.14 Feet",
			"1x4, 1x3",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("578622777e6ddc167bb6e2ac"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-G",
			"2016",
			"Detached",
			"Bungalow",
			"51.33 x 97 Feet",
			"1x3xBsmt, 1x4xGround, 1x3xMain",
			"416-484-9444"
		]
	},
	{
		"_id" : ObjectId("578622777e6ddc167bb6e2ad"),
		"Undefined" : [
			"Toronto C06",
			"Bathurst Manor",
			"Toronto",
			"103-17-D",
			"2015",
			"Detached",
			"Sidesplit 4",
			"52.21 x 115 Feet",
			"1x4, 1x3",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("578622777e6ddc167bb6e2ae"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"109-17-F",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 130 Feet",
			"1x3xUpper, 1x4xMain, 1x2xMain, 1x4xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("578622777e6ddc167bb6e2af"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-17-E",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 165 Feet",
			"2x5x2nd, 1x2xGround, 1x3xBsmt, 1x2x2nd",
			"647-951-7355"
		]
	},
	{
		"_id" : ObjectId("5786227a7e6ddc167bb6e2b7"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-27-D",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"30.25 x 135.7 Feet",
			"1x4xUpper, 1x3xUpper, 1x3xLower, 1x3xLower",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5786227a7e6ddc167bb6e2b8"),
		"Undefined" : [
			"Toronto C15",
			"Pleasant View",
			"Toronto",
			"104-27-C",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"40.22 x 150 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-849-5360"
		]
	},
	{
		"_id" : ObjectId("5786227a7e6ddc167bb6e2b9"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-24-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"34.3 x 110 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x2xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5786227a7e6ddc167bb6e2bb"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Woods-Steeles",
			"Toronto",
			"103-24-B",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 160.33 Feet",
			"1x5x2nd, 1x3x2nd, 1x2xGround, 1x2xBsmt",
			"416-595-5111"
		]
	},
	{
		"_id" : ObjectId("5786227a7e6ddc167bb6e2bc"),
		"Undefined" : [
			"Toronto C14",
			"Newtonbrook East",
			"Toronto",
			"103-22-B",
			"2016",
			"Detached",
			"2-Storey",
			"43.75 x 127.5 Feet",
			"1x2xMain, 2x3x2nd, 1x6x2nd",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("578622837e6ddc167bb6e2d1"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2016",
			"Detached",
			"Bungalow",
			"25 x 172.25 Feet",
			"1x4xGround, 1x4xBsmt",
			"416-486-5588"
		]
	},
	{
		"_id" : ObjectId("578622837e6ddc167bb6e2d2"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2015",
			"Detached",
			"Bungalow",
			"17 x 110 Feet",
			"1x4xBsmt, 1x3xGround",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d3"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"116-27-Q",
			"2016",
			"Detached",
			"3-Storey",
			"18 x 144 Feet",
			"1x3x3rd, 1x3x2nd, 1x3xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d4"),
		"Undefined" : [
			"Toronto E06",
			"Oakridge",
			"Toronto",
			"116-28-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20 x 117.5 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d5"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"2-Storey",
			"70 x 120 Feet",
			"1x2x2nd, 1x4xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d6"),
		"Undefined" : [
			"Toronto E06",
			"Oakridge",
			"Toronto",
			"116-29-Q",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 138.58 Feet",
			"2x4xUpper, 1x3xMain, 1x4xBsmt",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d7"),
		"Undefined" : [
			"Toronto E03",
			"Danforth",
			"Toronto",
			"115-24-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.58 x 116 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d8"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"21 x 94.58 Feet",
			"1x4xUpper, 1x4xBsmt",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2d9"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-S",
			"2016",
			"Detached",
			"2-Storey",
			"19.95 x 69.26 Feet",
			"1x2xMain, 1x5x2nd, 1x4xLower",
			"Garden Shed",
			"416-465-7527"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2da"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-P",
			"2015",
			"Detached",
			"2-Storey",
			"25 x 100 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2db"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"20.37 x 100 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2dc"),
		"Undefined" : [
			"Toronto E06",
			"Birchcliffe-Cliffside",
			"Toronto",
			"121-28-R",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 121.83 Feet",
			"1x4xMain, 1x3x2nd, 1x3xBsmt",
			"416-694-2499"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2dd"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"18.81 x 137.34 Feet",
			"1x4xMain, 1x4x2nd",
			"416-466-2090"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2de"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"2016",
			"Detached",
			"3-Storey",
			"23.33 x 100 Feet",
			"1x4x2nd, 1x4xLower",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2df"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"115-22-Q",
			"2016",
			"Detached",
			"2-Storey",
			"22 x 90 Feet",
			"1x4x2nd",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2e0"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-27-P",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"25 x 293.21 Feet",
			"1x3x2nd, 1x2xMain, 1x4xBsmt",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("578622847e6ddc167bb6e2e1"),
		"Undefined" : [
			"Toronto E02",
			"The Beaches",
			"Toronto",
			"121-27-S",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 118.25 Feet",
			"1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"416-694-2499"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f2"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-29-N",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"29.6 x 102 Feet",
			"1x3xBsmt, 1x4xMain",
			"Workshop",
			"416-335-4335"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f3"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-38-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"24.74 x 112.86 Feet",
			"2x4x2nd, 1x2xMain",
			"416-291-0929"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f4"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"110-32-J",
			"2016",
			"Detached",
			"Backsplit 3",
			"40 x 174.24 Feet",
			"1x5x2nd, 1x2xBsmt",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f5"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-36-H",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 122.5 Feet",
			"1x4xMain, 1x4xBsmt, 1x2xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f6"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-30-F",
			"2015",
			"Detached",
			"Bungalow",
			"43 x 150 Feet",
			"1x4xMain, 1x2xBsmt",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f7"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-29-F",
			"2015",
			"Detached",
			"Bungalow",
			"45 x 115 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f8"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-35-M",
			"2015",
			"Detached",
			"Bungalow",
			"52.92 x 150 Feet",
			"1x4xGround, 1x4xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2f9"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-28-A",
			"2016",
			"Link",
			"2-Storey",
			"30 x 116.27 Feet",
			"2x4, 1x2",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2fa"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-A",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 89.9 Feet",
			"1x2xMain, 2x4x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2fb"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-28-G",
			"2016",
			"Detached",
			"Bungalow",
			"41.67 x 120 Feet",
			"1x3, 1x4",
			"416-289-2155"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2fc"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2015",
			"Detached",
			"Sidesplit 4",
			"45 x 191 Feet",
			"1x4xUpper, 1x2xUpper, 1x4xBsmt",
			"416-424-4900"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2fd"),
		"Undefined" : [
			"Toronto E07",
			"Milliken",
			"Toronto",
			"104-32-A",
			"2016",
			"Detached",
			"Backsplit 5",
			"30 x 110.01 Feet",
			"1x2xMain, 2x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2fe"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-42-K",
			"2015",
			"Detached",
			"2-Storey",
			"24.87 x 112.99 Feet",
			"1x2xMain, 2x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e2ff"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt North",
			"Toronto",
			"104-32-C",
			"2015",
			"Detached",
			"2-Storey",
			"45 x 149 Feet",
			"1x2xGround, 1x2x2nd, 1x4x2nd",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("5786228c7e6ddc167bb6e300"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-28-D",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 110 Feet",
			"1x4x2nd, 1x3xGround, 1x3x2nd, 1x3xBsmt",
			"905-475-8807"
		]
	},
	{
		"_id" : ObjectId("578622927e6ddc167bb6e30d"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-H",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 144 Feet",
			"1x4x2nd",
			"416-530-1100"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e30e"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"18 x 128 Feet",
			"1x2xBsmt, 1x4x2nd",
			"905-639-3355"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e30f"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"108-9-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 110.58 Feet",
			"1x4, 1x3",
			"416-658-7232"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e310"),
		"Undefined" : [
			"Toronto W04",
			"Briar Hill-Belgravia",
			"Toronto",
			"108-15-K",
			"2016",
			"Detached",
			"Bungalow",
			"23.44 x 115 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-656-3500"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e311"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"20.01 x 100.07 Feet",
			"1x2xMain, 2x4x2nd",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e312"),
		"Undefined" : [
			"Toronto W04",
			"Maple Leaf",
			"Toronto",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 239.83 Feet",
			"1x3x2nd, 1x3xLower",
			"416-884-1221"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e313"),
		"Undefined" : [
			"Toronto W02",
			"High Park North",
			"Toronto",
			"114-13-N",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"14.74 x 104.71 Feet",
			"1x2xGround, 1x4x2nd, 1x4x3rd",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e314"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"2015",
			"Duplex",
			"2-Storey",
			"25.17 x 75.22 Feet",
			"2x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e315"),
		"Undefined" : [
			"Toronto W02",
			"Runnymede-Bloor West Village",
			"Toronto",
			"114-11-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.83 x 98 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-762-8255"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e316"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"19-15-T",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"25 x 116.5 Feet",
			"1x3xMain, 1x4x2nd, 1x2x2nd",
			"416-288-0800"
		]
	},
	{
		"_id" : ObjectId("578622937e6ddc167bb6e317"),
		"Undefined" : [
			"Toronto W04",
			"Yorkdale-Glen Park",
			"Toronto",
			"108-15-J",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 134.6 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e324"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-A",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"23.32 x 89.05 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e325"),
		"Undefined" : [
			"Toronto W10",
			"Rexdale-Kipling",
			"Toronto",
			"107-7-F",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"46 x 112 Feet",
			"1x2xMain, 1x4xUpper",
			"416-621-2300"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e326"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-N",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50 x 100 Feet",
			"1x4xMain, 1x2xBsmt",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e327"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-4-M",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"21.75 x 106 Feet",
			"1x4x2nd, 1x4x3rd, 1x4xBsmt",
			"905-857-7653"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e328"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-3-L",
			"2016",
			"Detached",
			"2-Storey",
			"27.5 x 90.22 Feet",
			"1x2xMain, 1x4x2nd",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e329"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-9-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27 x 125.5 Feet",
			"1x2xMain, 1x3xBsmt, 1x2x2nd, 1x4x2nd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e32a"),
		"Undefined" : [
			"Toronto W08",
			"Princess-Rosethorn",
			"Toronto",
			"113-6-M",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 110.37 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-236-6000"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e32b"),
		"Undefined" : [
			"Toronto W09",
			"Willowridge-Martingrove-Richview",
			"Toronto",
			"107-7-K",
			"2015",
			"Detached",
			"Other",
			"53 x 106 Feet",
			"1x2xMain, 1x3xUpper, 1x5xUpper, 1x2xBsmt, 1x1xLower",
			"416-231-3000"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e32c"),
		"Undefined" : [
			"Toronto W06",
			"Long Branch",
			"Toronto",
			"118-6-V",
			"2016",
			"Detached",
			"Bungalow",
			"51.8 x 125 Feet",
			"1x4xMain, 1x3xLower",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e32d"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"114-9-N",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 122 Feet",
			"1x4xMain, 1x4xLower",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("578622997e6ddc167bb6e32e"),
		"Undefined" : [
			"Toronto W06",
			"New Toronto",
			"Toronto",
			"118-7-V",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 113 Feet",
			"1x5x2nd, 1x2xMain, 1x3xBsmt",
			"416-236-1871"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e33a"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.95 x 109.91 Feet",
			"1x5, 1x4, 1x2",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e33b"),
		"Undefined" : [
			"Richmond Hill",
			"Rouge Woods",
			"York",
			"349-25-Q",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.95 x 121.37 Feet",
			"1x2, 2x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e33c"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-25-V",
			"2016",
			"Detached",
			"2-Storey",
			"30.18 x 109.91 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e33d"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 101.5 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e33e"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-21-S",
			"2015",
			"Detached",
			"2-Storey",
			"51 x 103 Feet",
			"1x2xGround, 2x3x2nd, 1x3xBsmt",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e33f"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-J",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 113.26 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e340"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-22-H",
			"2015",
			"Detached",
			"2-Storey",
			"45.01 x 83.73 Feet",
			"3x4, 1x2, 1x5",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e341"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-H",
			"2015",
			"Detached",
			"Bungalow",
			"75 x 200 Feet",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e342"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-K",
			"2016",
			"Detached",
			"2-Storey",
			"42.22 x 88.58 Feet",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5786229e7e6ddc167bb6e343"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges",
			"York",
			"337-21-H",
			"2016",
			"Detached",
			"2-Storey",
			"50.24 x 108.6 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4x2nd",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e354"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"40.75 x 89.76 Feet",
			"1x4xGround, 1x4x2nd",
			"416-445-8858"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e355"),
		"Undefined" : [
			"Newmarket",
			"Armitage",
			"York",
			"325-25-Y",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 102.85 Feet",
			"1x2xMain, 1x3xBsmt, 2x4x2nd",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e356"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-25-X",
			"2016",
			"Detached",
			"Bungalow",
			"33.51 x 102.98 Feet",
			"1x3xMain, 1x4xLower",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e357"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-28-V",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.8 x 101.71 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-477-5900"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e358"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-W",
			"2016",
			"Detached",
			"2-Storey",
			"110 x 55 Feet",
			"1x2, 1x4",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e359"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.64 x 104.99 Feet",
			"2x4xUpper, 1x2xMain",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e35a"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-27-W",
			"2016",
			"Detached",
			"2-Storey",
			"32.5 x 93 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-895-6363"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e35b"),
		"Undefined" : [
			"Aurora",
			"Aurora Heights",
			"York",
			"2016",
			"Detached",
			"Backsplit 3",
			"60 x 117.5 Feet",
			"1x4xMain, 1x2xLower",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e35c"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"325-24-Y",
			"2016",
			"Detached",
			"2-Storey",
			"35.1 x 103.34 Feet",
			"2x4x2nd, 1x2xMain",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e35d"),
		"Undefined" : [
			"Newmarket",
			"Summerhill Estates",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"31.99 x 109.91 Feet",
			"1x2xMain, 2x4x2nd",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e35e"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"319-25-T",
			"2016",
			"Detached",
			"2-Storey",
			"42.16 x 153.56 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e35f"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"331-23-D",
			"2016",
			"Detached",
			"2-Storey",
			"41.49 x 132.51 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"800-829-2842"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e360"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-28-Y",
			"2015",
			"Detached",
			"2-Storey",
			"60.26 x 140 Feet",
			"1x5, 1x4, 1x2",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e361"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2015",
			"Detached",
			"Sidesplit 3",
			"100 x 140 Feet",
			"1x5, 2x3, 1x2",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("578622a77e6ddc167bb6e362"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"1182.33 x 0 Feet",
			"2x4, 1x2",
			"905-727-3154"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e371"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"24.61 x 0 Feet",
			"1x2xMain, 1x4x2nd, 1x4xBsmt",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e372"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.34 x 103.24 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e373"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 98.43 Feet",
			"2x4x2nd, 1x2xMain",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e374"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-15-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"21.1 x 154 Feet",
			"1x2xMain, 2x4x2nd",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e375"),
		"Undefined" : [
			"Vaughan",
			"Elder Mills",
			"York",
			"347-5-U",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 111.55 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-588-8248"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e376"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"354-18-W",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.09 x 98.43 Feet",
			"2x4xUpper, 1x2xMain, 1x2xBsmt",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e377"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-12-Q",
			"2016",
			"Detached",
			"2-Storey",
			"30.18 x 104.99 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-731-3948"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e378"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-13-R",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 82.02 Feet",
			"1x4x3rd, 1x4x3rd, 1x4xBsmt, 1x2xMain",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e379"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-6-T",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"41.01 x 120 Feet",
			"1x4xMain, 1x4xMain, 1x4xBsmt",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e37a"),
		"Undefined" : [
			"Vaughan",
			"Brownridge",
			"York",
			"354-18-Y",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 100.07 Feet",
			"1x5, 1x4, 1x2, 1x3",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e37b"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-U",
			"2016",
			"Detached",
			"2-Storey",
			"34.7 x 81.03 Feet",
			"3x4, 1x2, 1x4",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e37c"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"347-10-S",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 104.99 Feet",
			"1x6x2nd, 1x2xMain, 1x4x2nd, 1x4xBsmt",
			"416-736-6500"
		]
	},
	{
		"_id" : ObjectId("578622af7e6ddc167bb6e37d"),
		"Undefined" : [
			"Vaughan",
			"Vellore Village",
			"York",
			"348-12-Q",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 104.99 Feet",
			"1x2xMain, 1x4x2nd, 2x5x2nd, 1x4xBsmt",
			"416-410-9111"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e395"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Link",
			"2-Storey",
			"22.54 x 111 Feet",
			"1x3x2nd, 1x2xGround, 1x4xBsmt",
			"905-604-6001"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e396"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"28.54 x 88.58 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xGround",
			"416-290-1200"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e397"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.56 x 82.28 Feet",
			"2x4, 1x2",
			"905-707-1882"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e398"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-36-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.61 x 86.94 Feet",
			"2x4x2nd, 1x2xMain",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e399"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-39-W",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 109.91 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e39a"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Y",
			"2016",
			"Detached",
			"2-Storey",
			"44.29 x 109.91 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"905-889-9330"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e39b"),
		"Undefined" : [
			"Markham",
			"Raymerville",
			"York",
			"351-36-U",
			"2016",
			"Detached",
			"2-Storey",
			"40.97 x 111.52 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e39c"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"351-37-T",
			"2015",
			"Detached",
			"2-Storey",
			"38.06 x 130.82 Feet",
			"2x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e39d"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-R",
			"2016",
			"Detached",
			"2-Storey",
			"36.1 x 77.81 Feet",
			"1x2xGround, 2x4x2nd",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e39e"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"40 x 158 Feet",
			"1x4xMain, 1x2x3rd",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e39f"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"350-32-U",
			"2016",
			"Link",
			"2-Storey",
			"36.09 x 114.83 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e3a0"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-33-V",
			"2016",
			"Link",
			"2-Storey",
			"35.66 x 112.04 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 1x3xBsmt",
			"416-733-2666"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e3a1"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Z",
			"2016",
			"Detached",
			"2-Storey",
			"52 x 108.27 Feet",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-289-3000"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e3a2"),
		"Undefined" : [
			"Markham",
			"Box Grove",
			"York",
			"357-38-Y",
			"2015",
			"Detached",
			"2-Storey",
			"41.99 x 106.63 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"416-321-2228"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e3a3"),
		"Undefined" : [
			"Markham",
			"Berczy",
			"York",
			"350-33-S",
			"2016",
			"Detached",
			"2-Storey",
			"46 x 90 Feet",
			"1x3xBsmt, 2x4x2nd, 1x2xMain",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("578622bb7e6ddc167bb6e3a4"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-V",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 148 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("578622bc7e6ddc167bb6e3a5"),
		"Undefined" : [
			"Markham",
			"Victoria Manor-Jennings Gate",
			"York",
			"350-28-R",
			"2016",
			"Detached",
			"2-Storey",
			"55.77 x 88.5 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x4xBsmt",
			"416-733-2666"
		]
	},
	{
		"_id" : ObjectId("578622bc7e6ddc167bb6e3a6"),
		"Undefined" : [
			"Markham",
			"Cathedraltown",
			"York",
			"350-27-R",
			"2016",
			"Detached",
			"2-Storey",
			"48.13 x 153.86 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("578622bc7e6ddc167bb6e3a7"),
		"Undefined" : [
			"Markham",
			"Milliken Mills East",
			"York",
			"356-32-Y",
			"2016",
			"Detached",
			"2-Storey",
			"89.11 x 187.27 Feet",
			"1x2, 3x3, 1x5, 1x6",
			"905-707-8889"
		]
	},
	{
		"_id" : ObjectId("578622bc7e6ddc167bb6e3a8"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-22-W",
			"2015",
			"Vacant Land",
			"161 x 400 Feet",
			"Workshop",
			"416-752-3733"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b1"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 44.29 Feet",
			"1x2x2nd, 1x4x3rd, 1x3x3rd",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b2"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.9 x 28.9 Metres",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b3"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.34 x 89.37 Feet",
			"1x2xMain, 1x3x2nd, 1x3x2nd",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b4"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"2015",
			"Detached",
			"Bungalow",
			"44.95 x 123.07 Feet",
			"2x4xMain, 1x3xBsmt",
			"905-940-4180"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b5"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-M",
			"2015",
			"Detached",
			"2-Storey",
			"45.55 x 102.46 Feet",
			"1x2xMain, 1x3xUpper, 1x4xUpper",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b6"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-42-K",
			"2015",
			"Detached",
			"Sidesplit 3",
			"66 x 165 Feet",
			"1x3xMain, 1x3xMain, 1x3xUpper, 1x3xBsmt",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("578622c17e6ddc167bb6e3b7"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"339-42-G",
			"2015",
			"Detached",
			"2-Storey",
			"134.71 x 354.26 Feet",
			"2x5x2nd, 1x4x2nd, 1x2xMain",
			"905-940-4180"
		]
	},
	{
		"_id" : ObjectId("578622c27e6ddc167bb6e3ba"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"313-24-M",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"347.45 x 1771.28 Feet",
			"1x4xMain, 2x3xLower",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c3"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"302-42-T",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 107.66 Feet",
			"1x4xMain",
			"905-476-5555"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c4"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-32-C",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"30.74 x 109.35 Feet",
			"2x4x2nd, 1x2xMain",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c5"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 125 Feet",
			"1x2xMain, 2x4x2nd",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c6"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.5 x 22.7 Metres",
			"1x2xMain, 2x4x2nd",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c7"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"15 x 92.69 Feet",
			"1x2xMain, 2x4x2nd",
			"905-476-5972"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c8"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-33-B",
			"2016",
			"Detached",
			"2-Storey",
			"36.38 x 114.6 Feet",
			"1x2xMain, 2x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578622c67e6ddc167bb6e3c9"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-33-C",
			"2016",
			"Detached",
			"Bungalow",
			"42.65 x 109.91 Feet",
			"1x4xMain, 1x2xMain, 1x4x2nd, 1x2xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("578622cb7e6ddc167bb6e3d1"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"266-7-S",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"0 x 0 Feet",
			"1x2x2nd, 1x4x3rd, 1x3x3rd",
			"416-966-0300"
		]
	},
	{
		"_id" : ObjectId("578622cb7e6ddc167bb6e3d2"),
		"Undefined" : [
			"Pickering",
			"Brock Ridge",
			"Durham",
			"266-9-P",
			"2016",
			"Detached",
			"2-Storey",
			"44.69 x 100.07 Feet",
			"2x4x2nd, 1x2xMain",
			"905-668-3800"
		]
	},
	{
		"_id" : ObjectId("578622cb7e6ddc167bb6e3d3"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"2016",
			"Detached",
			"Backsplit 4",
			"60 x 183 Feet",
			"1x4xUpper, 1x3xUpper, 1x2xLower",
			"905-683-5000"
		]
	},
	{
		"_id" : ObjectId("578622cb7e6ddc167bb6e3d4"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-8-R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"46.7 x 143 Feet",
			"1x4xGround, 1x5x2nd, 1x2x3rd, 1x3xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("578622cb7e6ddc167bb6e3d5"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-7-Q",
			"2016",
			"Detached",
			"2-Storey",
			"44.29 x 109.91 Feet",
			"1x4xUpper, 1x3xUpper, 1x2xMain, 1x4xBsmt",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("578622cb7e6ddc167bb6e3d6"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-R",
			"2015",
			"Detached",
			"2-Storey",
			"36 x 119 Feet",
			"1x4x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt, 1x3xBsmt",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e2"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"267-13-S",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"50 x 123 Feet",
			"1x4xGround",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e4"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-14-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"9.89 x 154.79 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e5"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.5 x 118.24 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e6"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"2016",
			"Link",
			"2-Storey",
			"30.64 x 98.43 Feet",
			"1x2xMain, 1x3xUpper, 1x4xUpper",
			"905-430-2320"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e7"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"25.1 x 101.71 Feet",
			"1x2xMain, 2x4xUpper",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e8"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-12-U",
			"2016",
			"Detached",
			"2-Storey",
			"50.75 x 105.18 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("578622d07e6ddc167bb6e3e9"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"259-14-M",
			"2016",
			"Detached",
			"2-Storey",
			"37.07 x 86.96 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("578622d17e6ddc167bb6e3ea"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-10-Q",
			"2016",
			"Detached",
			"2-Storey",
			"33.99 x 117.75 Feet",
			"1x5x2nd, 1x5x2nd, 1x2xMain, 1x3xBsmt",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("578622d17e6ddc167bb6e3eb"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"267-10-N",
			"2016",
			"Detached",
			"2-Storey",
			"37.16 x 112 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e3fc"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"9.69 x 21.69 Feet",
			"1x3x2nd",
			"705-324-2552"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e3fd"),
		"Undefined" : [
			"Whitby",
			"Downtown Whitby",
			"Durham",
			"268-20-P",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.01 x 82.02 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xGround",
			"905-683-2100"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e3fe"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-21-K",
			"2016",
			"Att/Row/Twnhouse",
			"Bungalow",
			"35.79 x 88.75 Feet",
			"2x4xGround",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e3ff"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-20-L",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 119.36 Feet",
			"1x4, 1x2",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e400"),
		"Undefined" : [
			"Whitby",
			"Pringle Creek",
			"Durham",
			"260-21-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"40.12 x 0 Feet",
			"2x4x2nd, 1x2xMain, 1x2xLower",
			"905-430-9000"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e401"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-19-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.94 x 129.25 Feet",
			"2x4, 1x2",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e402"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"276-19-T",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 98.43 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-273-1333"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e403"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-M",
			"2015",
			"Link",
			"2-Storey",
			"29.53 x 109.58 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x2xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e404"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-L",
			"2016",
			"Detached",
			"2-Storey",
			"34.45 x 100.56 Feet",
			"1x5, 1x4, 1x2",
			"905-436-0990"
		]
	},
	{
		"_id" : ObjectId("578622da7e6ddc167bb6e405"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-22-K",
			"2016",
			"Detached",
			"2-Storey",
			"34.45 x 119.03 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("578622db7e6ddc167bb6e406"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-21-G",
			"2016",
			"Detached",
			"2-Storey",
			"36.38 x 114 Feet",
			"1x4x2nd, 1x2xMain, 1x4x2nd",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("578622db7e6ddc167bb6e407"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 586 Feet",
			"1x4xMain, 1x4xLower",
			"866-430-9900"
		]
	},
	{
		"_id" : ObjectId("578622db7e6ddc167bb6e408"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-F",
			"2016",
			"Detached",
			"2-Storey",
			"60.81 x 131 Feet",
			"1x2xMain, 1x4xMain, 1x4xUpper",
			"877-685-7888"
		]
	},
	{
		"_id" : ObjectId("578622db7e6ddc167bb6e409"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"268-19-N",
			"2016",
			"Detached",
			"2-Storey",
			"52 x 114.82 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x2xLower",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("578622e77e6ddc167bb6e420"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-V",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"32.31 x 96 Feet",
			"1x4x2nd, 1x2xMain",
			"905-697-1900"
		]
	},
	{
		"_id" : ObjectId("578622e77e6ddc167bb6e421"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-28-M",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20 x 110.2 Feet",
			"1x4xUpper, 1x2xMain",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e422"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-27-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"26.93 x 102.35 Feet",
			"1x2, 1x4",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e423"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-P",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 110 Feet",
			"1x2xMain, 1x4xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e424"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"269-27-S",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"44 x 103.9 Feet",
			"1x4",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e425"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"269-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"72 x 140 Feet",
			"1x4xGround",
			"905-985-9777"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e426"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-S",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x4xMain, 1x2xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e427"),
		"Undefined" : [
			"Oshawa",
			"Lakeview",
			"Durham",
			"277-27-U",
			"2016",
			"Detached",
			"Bungalow",
			"54.33 x 0 Feet",
			"1x4xMain, 1x4xLower",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e428"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"269-26-P",
			"2016",
			"Detached",
			"Bungalow",
			"44 x 118 Feet",
			"1x4xUpper, 1x3xBsmt",
			"647-499-4900"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e429"),
		"Undefined" : [
			"Oshawa",
			"Centennial",
			"Durham",
			"261-27-L",
			"2016",
			"Detached",
			"Bungalow",
			"47.7 x 123.3 Feet",
			"1x4xMain, 1x3xLower",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e42a"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-31-L",
			"2016",
			"Detached",
			"Bungalow",
			"30.87 x 111.16 Feet",
			"1x4xMain, 1x3xMain",
			"905-666-1333"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e42b"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-N",
			"2016",
			"Detached",
			"Bungalow",
			"77.85 x 122.9 Feet",
			"1x4xUpper, 1x2xBsmt",
			"906-723-5944"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e42c"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-27-P",
			"2015",
			"Triplex",
			"2 1/2 Storey",
			"47 x 93.5 Feet",
			"1x4xMain, 2x4x2nd, 1x2x3rd, 1x4xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e42d"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"2016",
			"Detached",
			"Bungalow",
			"40.03 x 151.5 Feet",
			"1x4xMain, 1x2xBsmt",
			"905-623-6000"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e42e"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 172.56 Feet",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e42f"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-L",
			"2015",
			"Detached",
			"2-Storey",
			"39 x 111 Feet",
			"1x4x2nd, 1x2xMain, 1x3x2nd",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e430"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-31-N",
			"2015",
			"Detached",
			"2-Storey",
			"36.58 x 85.3 Feet",
			"2x2, 2x4",
			"905-686-3800"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e431"),
		"Undefined" : [
			"Oshawa",
			"Donevan",
			"Durham",
			"269-31-R",
			"2016",
			"Detached",
			"Backsplit 5",
			"50.2 x 140.26 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-373-7653"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e432"),
		"Undefined" : [
			"Oshawa",
			"Pinecrest",
			"Durham",
			"261-30-M",
			"2015",
			"Detached",
			"2-Storey",
			"44.5 x 110.52 Feet",
			"2x4xUpper, 1x2xMain",
			"905-707-0188"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e433"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-29-K",
			"2016",
			"Detached",
			"Bungalow",
			"49.21 x 118.11 Feet",
			"1x3xMain, 1x5xMain",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("578622e87e6ddc167bb6e434"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-26-K",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 100 Feet",
			"1x2xGround, 1x5x2nd, 2x3x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578622ed7e6ddc167bb6e43d"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-39-T",
			"2016",
			"Link",
			"2-Storey",
			"31.79 x 107.56 Feet",
			"1x2xMain, 1x3xUpper, 1x4xUpper",
			"905-440-2053"
		]
	},
	{
		"_id" : ObjectId("578622ed7e6ddc167bb6e43e"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-S",
			"2016",
			"Detached",
			"2-Storey",
			"30.84 x 112.62 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578622ed7e6ddc167bb6e43f"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-R",
			"2016",
			"Link",
			"2-Storey",
			"29.87 x 101.74 Feet",
			"1x2xMain, 1x4x2nd",
			"705-324-2552"
		]
	},
	{
		"_id" : ObjectId("578622ed7e6ddc167bb6e440"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-R",
			"2016",
			"Detached",
			"2-Storey",
			"28.9 x 35.57 Feet",
			"1x2, 2x4",
			"905-668-1800"
		]
	},
	{
		"_id" : ObjectId("578622ee7e6ddc167bb6e441"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-42-R",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 114.83 Feet",
			"1x5, 1x4, 1x2",
			"905-430-2320"
		]
	},
	{
		"_id" : ObjectId("578622f17e6ddc167bb6e449"),
		"Undefined" : [
			"Brock",
			"Beaverton",
			"Durham",
			"205-22-Z",
			"2016",
			"Detached",
			"2-Storey",
			"89.92 x 114.98 Feet",
			"1x3xMain, 1x4xUpper",
			"705-426-2905"
		]
	},
	{
		"_id" : ObjectId("578622f17e6ddc167bb6e44a"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-28-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"43.24 x 147.44 Feet",
			"1x2xMain, 1x4x2nd",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("578622f17e6ddc167bb6e44b"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"233-27-R",
			"2016",
			"Detached",
			"Bungalow",
			"85.63 x 66 Feet",
			"2x4xMain, 1x3xLower",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("578622f17e6ddc167bb6e44c"),
		"Undefined" : [
			"Scugog",
			"Port Perry",
			"Durham",
			"2016",
			"Detached",
			"Sidesplit 3",
			"103 x 303 Feet",
			"1x4x3rd, 1x4x3rd",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("578622f17e6ddc167bb6e44d"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"222-30-F",
			"2015",
			"Farm",
			"1 1/2 Storey",
			"55.59 x 0 Acres",
			"1x4x2nd, 1x3xMain",
			"Paddocks",
			"905-985-4427"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e46b"),
		"Undefined" : [
			"Innisfil",
			"Rural Innisfil",
			"Simcoe",
			"509-21-N",
			"2016",
			"Other",
			"Bungalow",
			"1x4xMain",
			"888-712-9994"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e46c"),
		"Undefined" : [
			"Penetanguishene",
			"Penetanguishene",
			"Simcoe",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 165 Feet",
			"1x4xMain",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e46e"),
		"Undefined" : [
			"Barrie",
			"Ardagh",
			"Simcoe",
			"505-9-L",
			"2015",
			"Detached",
			"Bungalow",
			"80 x 250 Feet",
			"1x4xMain",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e46f"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-20-M",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"45.75 x 130.63 Feet",
			"1x4xUpper, 1x2xUpper, 1x2xMain",
			"877-526-6342"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e470"),
		"Undefined" : [
			"Essa",
			"Angus",
			"Simcoe",
			"550-1-A",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"18.75 x 38 Metres",
			"2x4",
			"705-431-7771"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e471"),
		"Undefined" : [
			"Tiny",
			"Rural Tiny",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"172 x 250 Feet",
			"1x5x2nd, 1x3xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e472"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"60 x 109 Feet",
			"1x4xGround, 1x4xLower",
			"905-723-4444"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e473"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-21-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"11.87 x 77.75 Feet",
			"1x4x2nd, 1x2xMain",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e474"),
		"Undefined" : [
			"Barrie",
			"Holly",
			"Simcoe",
			"507-7-P",
			"2015",
			"Detached",
			"2-Storey",
			"46.95 x 115.84 Feet",
			"2x4x2nd, 1x2xMain",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e475"),
		"Undefined" : [
			"Barrie",
			"Painswick South",
			"Simcoe",
			"508-13-P",
			"2015",
			"Detached",
			"Bungalow",
			"39 x 121 Feet",
			"1x3xBsmt, 1x4xMain, 1x4xMain",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e476"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Everett",
			"Simcoe",
			"10-27-E",
			"2015",
			"Detached",
			"Bungalow",
			"108.26 x 123.32 Feet",
			"1x4xMain, 1x2xMain, 1x3xBsmt",
			"705-435-6666"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e477"),
		"Undefined" : [
			"Adjala-Tosorontio",
			"Everett",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"186.38 x 69.57 Feet",
			"2x4, 1x2",
			"705-739-1000"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e478"),
		"Undefined" : [
			"Tiny",
			"Wyevale",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"1.01 x 0 Acres",
			"2x4xMain",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("578623127e6ddc167bb6e479"),
		"Undefined" : [
			"Essa",
			"Baxter",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow",
			"105 x 156 Feet",
			"2x4xMain, 1x2xBsmt",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e47a"),
		"Undefined" : [
			"Barrie",
			"Bayshore",
			"Simcoe",
			"505-15-L",
			"2016",
			"Detached",
			"Bungalow",
			"12.9 x 33.5 Metres",
			"3x4, 1x2",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e47b"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"40.35 x 110.93 Feet",
			"1x2xBsmt, 1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e47c"),
		"Undefined" : [
			"Springwater",
			"Midhurst",
			"Simcoe",
			"501-7-B",
			"2015",
			"Detached",
			"Bungalow",
			"30 x 48.78 Metres",
			"1x3xMain, 1x3xMain, 1x3xLower",
			"705-728-8800"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e47d"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"22.51 x 114.5 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e47e"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-23-Q",
			"2016",
			"Cottage",
			"2-Storey",
			"33.41 x 153 Feet",
			"1x4xMain, 1x5x2nd",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e47f"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"313-18-N",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 109.91 Feet",
			"2x4, 1x2, 1x3xLower",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e480"),
		"Undefined" : [
			"Springwater",
			"Elmvale",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"75.71 x 96.59 Metres",
			"1x2xMain, 1x4xMain, 1x4xMain, 1x3xBsmt",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e481"),
		"Undefined" : [
			"Springwater",
			"Phelpston",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"197.47 x 0 Feet",
			"1x2xMain, 1x5xMain, 2x4xUpper",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e482"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"509-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"17.08 x 45.6 Metres",
			"1x4xBsmt, 1x2xMain, 1x4x2nd, 1x5x2nd",
			"888-712-9994"
		]
	},
	{
		"_id" : ObjectId("578623137e6ddc167bb6e483"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Bradford",
			"Simcoe",
			"2015",
			"Detached",
			"2-Storey",
			"136.12 x 348.9 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e491"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 101.71 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"519-942-8700"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e492"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-44-H",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 150 Feet",
			"1x4xUpper, 1x4xLower",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e493"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"2016",
			"Semi-Detached",
			"Bungalow-Raised",
			"35.18 x 100.48 Feet",
			"1x4xMain, 1x4xLower",
			"519-925-2761"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e494"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"132 x 330 Feet",
			"1x4xGround, 1x4x2nd",
			"Workshop",
			"800-689-0707"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e495"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"9.81 x 31.19 Metres",
			"1x2xMain, 2x4xUpper",
			"866-871-1151"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e496"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2015",
			"Detached",
			"2-Storey",
			"36.09 x 108.27 Feet",
			"1x4x2nd, 1x2xMain",
			"844-925-4663"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e497"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"407-48-L",
			"2016",
			"Detached",
			"2-Storey",
			"24.93 x 109.91 Feet",
			"1x2, 2x4",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e498"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"40.02 x 104.42 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"905-497-2300"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e499"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-43-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"29.46 x 160.02 Feet",
			"2x4x2nd, 1x2xIn Betwn",
			"519-941-5151"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e49a"),
		"Undefined" : [
			"Melancthon",
			"Rural Melancthon",
			"Dufferin",
			"2015",
			"Farm",
			"1 1/2 Storey",
			"1320 x 3300 Feet",
			"1x4xMain, 1x4xMain, 1x3xLower",
			"519-924-3513"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e49b"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2016",
			"Detached",
			"2-Storey",
			"1048 x 1590 Feet",
			"2x2xGround, 1x3x2nd, 1x3x2nd, 1x5x2nd, 1x3xBsmt",
			"Box Stall",
			"855-297-8797"
		]
	},
	{
		"_id" : ObjectId("5786231c7e6ddc167bb6e49c"),
		"Undefined" : [
			"East Garafraxa",
			"Rural East Garafraxa",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow",
			"152.98 x 287.59 Feet",
			"1x5xMain, 1x4xMain, 1x4xLower",
			"800-268-2455"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c1"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"101-51-B",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 100 Feet",
			"1x4xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c2"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-33-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"57.95 x 81.41 Feet",
			"1x2xGround, 1x4x2nd",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c3"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-51-A",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 125 Feet",
			"1x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c4"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-B",
			"2015",
			"Semi-Detached",
			"Backsplit 4",
			"30.06 x 126.06 Feet",
			"2x4",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c5"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-34-B",
			"2016",
			"Semi-Detached",
			"Other",
			"34.15 x 133.79 Feet",
			"1x5, 1x2",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c6"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-S",
			"2016",
			"Semi-Detached",
			"Backsplit 3",
			"30.86 x 158.3 Feet",
			"1x4x2nd, 1x2xLower",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c7"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-35-E",
			"2105",
			"Semi-Detached",
			"2-Storey",
			"26.86 x 148.56 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xGround, 1x2xBsmt",
			"855-500-7653"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c8"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"473-45-M",
			"2015",
			"Semi-Detached",
			"Sidesplit 3",
			"31.25 x 120 Feet",
			"1x4xUpper, 1x3xLower",
			"416-751-6533"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4c9"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"465-37-K",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 230.01 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4ca"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-34-L",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"46.08 x 122.63 Feet",
			"1x2xMain, 1x2xUpper, 1x4xUpper, 1x4xLower",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4cb"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-52-B",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"55 x 120 Feet",
			"1x4xMain, 1x4xBsmt, 1x4xBsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4cc"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"458-33-A",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 125 Feet",
			"1x4, 1x4",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4cd"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-45-J",
			"2016",
			"Detached",
			"2-Storey",
			"29 x 109.48 Feet",
			"1x4xUpper, 1x2xMain, 1x3xBsmt",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("5786232d7e6ddc167bb6e4ce"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-H",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.95 x 109.91 Feet",
			"1x2xMain, 2x4x2nd",
			"905-361-9098"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4cf"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.5 x 100 Feet",
			"2x4, 1x3",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d0"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"473-42-L",
			"2016",
			"Detached",
			"2-Storey",
			"32.35 x 109.91 Feet",
			"1x2xMain, 1x2xBsmt, 2x4xUpper",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d1"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"465-37-F",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"32 x 144 Feet",
			"1x4xMain, 1x2x2nd",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d2"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-38-K",
			"2016",
			"Detached",
			"2-Storey",
			"29.98 x 100.06 Feet",
			"2x4x2nd, 1x2xMain",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d3"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-44-K",
			"2016",
			"Detached",
			"2-Storey",
			"42.78 x 124.77 Feet",
			"1x4x2nd, 1x2x2nd, 1x2xMain",
			"416-298-8880"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d4"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-F",
			"2016",
			"Detached",
			"2-Storey",
			"41 x 85 Feet",
			"1x2, 2x4",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d5"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-F",
			"2015",
			"Detached",
			"2-Storey",
			"41.01 x 85.3 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xIn Betwn",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d6"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-45-K",
			"2015",
			"Detached",
			"Bungalow",
			"42.85 x 114 Feet",
			"1x4xMain, 1x3xMain, 1x3xBsmt",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d7"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-39-G",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 108.76 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d8"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-37-F",
			"2016",
			"Detached",
			"2-Storey",
			"30.91 x 108.14 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-897-3388"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4d9"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"458-33-E",
			"2016",
			"Detached",
			"2-Storey",
			"50.82 x 116.8 Feet",
			"1x4xUpper, 1x5xUpper, 1x2xMain",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4da"),
		"Undefined" : [
			"Mississauga",
			"Creditview",
			"Peel",
			"465-34-K",
			"2016",
			"Detached",
			"2-Storey",
			"35.2 x 112.5 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4db"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-D",
			"2016",
			"Detached",
			"2-Storey",
			"64.09 x 85.3 Feet",
			"1x2xMain, 1x5x2nd, 1x5x2nd",
			"905-897-5000"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4dc"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"466-43-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"50.5 x 119 Feet",
			"1x4xUpper, 1x2xMain, 1x2xLower, Bsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4dd"),
		"Undefined" : [
			"Mississauga",
			"Applewood",
			"Peel",
			"458-40-D",
			"2016",
			"Detached",
			"Backsplit 4",
			"51 x 125 Feet",
			"1x4xUpper, 1x3xLower, 1x4xBsmt",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4de"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"472-33-L",
			"2015",
			"Detached",
			"2-Storey",
			"40.78 x 119.6 Feet",
			"2x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-567-1411"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4df"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-34-F",
			"2015",
			"Detached",
			"2-Storey",
			"12.18 x 33.5 Metres",
			"1x2xGround, 1x4x2nd, 2x5x2nd",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4e0"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"478-38-Q",
			"2016",
			"Detached",
			"2-Storey",
			"65 x 120 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("5786232e7e6ddc167bb6e4e1"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"473-41-M",
			"2016",
			"Detached",
			"2-Storey",
			"50.42 x 127.02 Feet",
			"1x2xGround, 1x5x2nd, 1x5x2nd, 1x3xBsmt",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("5786232f7e6ddc167bb6e4e2"),
		"Undefined" : [
			"Mississauga",
			"Sheridan",
			"Peel",
			"472-38-P",
			"2016",
			"Detached",
			"2-Storey",
			"85 x 112.52 Feet",
			"1x2xMain, 1x4x2nd, 2x3x2nd, 1x5x2nd, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e51b"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"452-47-X",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"27.4 x 88.14 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e51c"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-43-W",
			"2015",
			"Detached",
			"Backsplit 3",
			"45 x 145 Feet",
			"1x4",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e51d"),
		"Undefined" : [
			"Brampton",
			"Brampton North",
			"Peel",
			"445-45-S",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"30 x 100 Feet",
			"1x4, 1x2",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e51e"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-U",
			"2016",
			"Detached",
			"2-Storey",
			"32.63 x 63.09 Feet",
			"1x2xBsmt, 1x4x2nd",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e51f"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"452-48-V",
			"2016",
			"Detached",
			"2-Storey",
			"41.8 x 74.11 Feet",
			"1x4xUpper, 1x4xLower",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e521"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"452-45-V",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"26.42 x 100.76 Feet",
			"1x4x2nd, 1x2xMain",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e522"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"464-32-G",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.7 x 129.3 Feet",
			"1x2xMain, 2x4xUpper",
			"519-821-6191"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e523"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"452-41-Z",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.52 x 89.33 Feet",
			"1x4x2nd, 1x3xLower, 1x2xMain",
			"905-672-2200"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e524"),
		"Undefined" : [
			"Brampton",
			"Southgate",
			"Peel",
			"473-43-M",
			"2015",
			"Semi-Detached",
			"Backsplit 3",
			"34 x 125 Feet",
			"1x4, 1x3",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e525"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-W",
			"2015",
			"Semi-Detached",
			"Bungaloft",
			"35.37 x 107.19 Feet",
			"1x4xUpper, 1x4xBsmt",
			"416-371-3737"
		]
	},
	{
		"_id" : ObjectId("5786234f7e6ddc167bb6e526"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.21 x 110.73 Feet",
			"1x2xGround, 1x4x2nd, 1x4xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e528"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-T",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 84 Feet",
			"1x2xMain, 1x4x2nd",
			"905-450-8300"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e529"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-Q",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"16.99 x 206.66 Feet",
			"1x2xMain, 2x4x2nd",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e52a"),
		"Undefined" : [
			"Brampton",
			"Brampton West",
			"Peel",
			"465-38-F",
			"2016",
			"Detached",
			"2-Storey",
			"32.81 x 100.07 Feet",
			"1x2xMain, 1x4x2nd, 1x3",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e52b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-43-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"31.49 x 105.2 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e52c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.6 x 96 Feet",
			"1x5, 1x4, 1x2",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e52d"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.93 x 90.24 Feet",
			"1x2xMain, 2x4x2nd, 1x2xBsmt",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e52e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"28.54 x 84.35 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e52f"),
		"Undefined" : [
			"Brampton",
			"Northgate",
			"Peel",
			"446-50-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"31.09 x 119.06 Feet",
			"1x4xMain, 1x4xUpper, 1x4xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e530"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"472-35-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"29.33 x 95.72 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("578623507e6ddc167bb6e531"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-U",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"30 x 100 Feet",
			"1x4xUpper, 1x4xMain, 1x4xBsmt",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e532"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"445-42-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"26.64 x 0 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e533"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"445-41-U",
			"2015",
			"Detached",
			"2-Storey",
			"30 x 110 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"905-564-2100"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e534"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 78.74 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e535"),
		"Undefined" : [
			"Brampton",
			"Heart Lake",
			"Peel",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18 x 77.21 Feet",
			"2x4x3rd, 1x2x2nd",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e536"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Creek Village",
			"Peel",
			"445-41-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"26.77 x 107.45 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd, 1x4xBsmt",
			"905-670-4455"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e537"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2016",
			"Detached",
			"2-Storey",
			"29.63 x 0 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e538"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-47-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.51 x 100.92 Feet",
			"1x5x2nd, 1x2xMain, 1x4xBsmt, 1x4x2nd",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e539"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-43-Y",
			"2016",
			"Detached",
			"2-Storey",
			"56.33 x 100 Feet",
			"1x4x2nd, 1x3xGround, 1x3xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e53a"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"437-40-P",
			"2016",
			"Detached",
			"2-Storey",
			"39.62 x 111.13 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e53b"),
		"Undefined" : [
			"Brampton",
			"Brampton South",
			"Peel",
			"452-42-X",
			"2015",
			"Detached",
			"Sidesplit 5",
			"52.6 x 94.93 Feet",
			"1x4xUpper, 1x2xLower, 1x3xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e53c"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"447-58-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"6.75 x 30 Metres",
			"2x4xUpper, 1x2xMain, 1x4xBsmt",
			"416-289-3000"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e53d"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-57-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"36.65 x 85 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578623517e6ddc167bb6e53e"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2015",
			"Detached",
			"2-Storey",
			"29.33 x 0 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"905-230-3100"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e53f"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"439-49-P",
			"2016",
			"Detached",
			"2-Storey",
			"37.07 x 88.58 Feet",
			"1x4x2nd, 1x2xMain, 1x4x2nd, 1x3xBsmt",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e540"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-58-T",
			"2016",
			"Link",
			"2-Storey",
			"26.08 x 104.99 Feet",
			"2x4x2nd, 1x2xMain",
			"905-792-7800"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e541"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-Y",
			"2016",
			"Detached",
			"2-Storey",
			"38.28 x 109.91 Feet",
			"1x2xGround, 1x4x2nd, 1x5x2nd, 2x4xBsmt",
			"905-455-5800"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e542"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-R",
			"2016",
			"Detached",
			"2-Storey",
			"45.62 x 108.35 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"905-584-2727"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e543"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2016",
			"Detached",
			"2-Storey",
			"46.98 x 91.93 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e544"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"478-37-R",
			"2016",
			"Detached",
			"2-Storey",
			"46.95 x 90 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e545"),
		"Undefined" : [
			"Brampton",
			"Northwest Brampton",
			"Peel",
			"444-39-R",
			"2015",
			"Detached",
			"2-Storey",
			"38.06 x 89.57 Feet",
			"1x5xUpper, 1x4xUpper, 1x2xMain",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e546"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"445-41-R",
			"2015",
			"Detached",
			"2-Storey",
			"42.05 x 100.52 Feet",
			"1x2, 1x4, 1x5",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e547"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2015",
			"Detached",
			"2-Storey",
			"40.03 x 104.99 Feet",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xGround",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e548"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-52-R",
			"2015",
			"Detached",
			"2-Storey",
			"40.08 x 112.53 Feet",
			"1x4x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e549"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-38-Z",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 90 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"905-454-1100"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e54a"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2016",
			"Detached",
			"2-Storey",
			"44.62 x 97.44 Feet",
			"1x2xMain, 1x5xUpper, 1x4xUpper, 1x4xBsmt",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e54b"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"439-54-O",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 115 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xBsmt",
			"905-454-4000"
		]
	},
	{
		"_id" : ObjectId("578623527e6ddc167bb6e54c"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"451-38-V",
			"2015",
			"Detached",
			"2-Storey",
			"59.05 x 115 Feet",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("578623537e6ddc167bb6e54d"),
		"Undefined" : [
			"Brampton",
			"Bram West",
			"Peel",
			"451-38-X",
			"2015",
			"Detached",
			"2-Storey",
			"60.62 x 140.85 Feet",
			"1x2xGround, 1x3xBsmt, 3x4x2nd, 1x6x2nd",
			"905-279-8888"
		]
	},
	{
		"_id" : ObjectId("578623577e6ddc167bb6e555"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-45-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"21.98 x 102.03 Feet",
			"1x2xMain, 1x4xUpper, 1x3xLower",
			"800-834-5516"
		]
	},
	{
		"_id" : ObjectId("578623577e6ddc167bb6e556"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"432-61-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"20.99 x 98.6 Feet",
			"1x2xMain, 1x4xUpper",
			"905-584-2727"
		]
	},
	{
		"_id" : ObjectId("578623577e6ddc167bb6e557"),
		"Undefined" : [
			"Caledon",
			"Caledon Village",
			"Peel",
			"410-46-T",
			"2015",
			"Detached",
			"Sidesplit 4",
			"58.17 x 201.64 Feet",
			"1x4, 1x3, 1x2",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578623577e6ddc167bb6e558"),
		"Undefined" : [
			"Caledon",
			"Bolton North",
			"Peel",
			"432-62-G",
			"2016",
			"Detached",
			"2-Storey",
			"62.27 x 109.91 Feet",
			"1x2xMain, 2x5x2nd, 1x4x2nd",
			"905-857-0651"
		]
	},
	{
		"_id" : ObjectId("578623577e6ddc167bb6e559"),
		"Undefined" : [
			"Caledon",
			"Caledon East",
			"Peel",
			"423-55-B",
			"2016",
			"Detached",
			"2-Storey",
			"39.4 x 108.27 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"416-743-5000"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e56c"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 44.29 Feet",
			"1x2x2nd, 1x3x3rd",
			"905-793-5000"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e56d"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-P",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 109 Feet",
			"1x4xGround, 1x4xBsmt",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e56e"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-P",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-877-5211"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e56f"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-B",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"19.82 x 60.7 Feet",
			"1x2x2nd, 1x4x3rd, 1x3x3rd",
			"2",
			"Family",
			"Ground",
			"4.32",
			"3.81",
			"Hardwood Floor",
			"3",
			"Laundry",
			"Ground",
			"4",
			"Kitchen",
			"2nd",
			"4.57",
			"5.79",
			"Granite Counter",
			"Stainless Steel Appl",
			"W/O To Sundeck",
			"5",
			"Living",
			"2nd",
			"4.57",
			"3.81",
			"Hardwood Floor",
			"6",
			"Office",
			"2nd",
			"Hardwood Floor",
			"B/I Desk",
			"7",
			"Bathroom",
			"2nd",
			"8",
			"Master",
			"3rd",
			"4.24",
			"3.81",
			"Hardwood Floor",
			"9",
			"Bathroom",
			"3rd",
			"3 Pc Ensuite",
			"10",
			"2nd Br",
			"3rd",
			"2.90",
			"2.79",
			"Hardwood Floor",
			"11",
			"3rd Br",
			"3rd",
			"2.90",
			"2.90",
			"Hardwood Floor",
			"12",
			"Bathroom",
			"3rd",
			"4 Pc Bath",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e570"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-24-C",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"32.18 x 80.92 Feet",
			"2x4x2nd, 1x2xMain",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e571"),
		"Undefined" : [
			"Milton",
			"Dorset Park",
			"Halton",
			"449-22-Z",
			"2015",
			"Detached",
			"2-Storey",
			"40.91 x 185.77 Feet",
			"1x2xMain, 1x4x2nd",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e572"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-24-A",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"34.15 x 0 Feet",
			"1x2xGround, 1x3xBsmt, 2x4x2nd",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e573"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"30.09 x 88.58 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e574"),
		"Undefined" : [
			"Milton",
			"Bronte Meadows",
			"Halton",
			"456-21-B",
			"2016",
			"Detached",
			"Sidesplit 3",
			"34.73 x 105 Feet",
			"2x4x3rd, 1x2xGround, 1x3xBsmt",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e575"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-34-R",
			"2016",
			"Detached",
			"2-Storey",
			"40.91 x 125.95 Feet",
			"1x2xGround, 1x5x2nd, 1x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e576"),
		"Undefined" : [
			"Milton",
			"Dempsey",
			"Halton",
			"449-25-Z",
			"2015",
			"Detached",
			"2-Storey",
			"43.86 x 85.3 Feet",
			"1x2xMain, 1x4xUpper, 1x5xUpper",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e577"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"457-25-C",
			"2016",
			"Detached",
			"2-Storey",
			"48.88 x 80.03 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x4xBsmt, 1x2xBsmt",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e578"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"443-32-S",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 110.14 Feet",
			"1x2xMain, 3x4x2nd",
			"905-877-8262"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e579"),
		"Undefined" : [
			"Milton",
			"Harrison",
			"Halton",
			"19-28-M",
			"2016",
			"Detached",
			"2-Storey",
			"45.93 x 80.38 Feet",
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
			"Ceramic Floor",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e57a"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-33-R",
			"2016",
			"Detached",
			"2-Storey",
			"80.28 x 112.27 Feet",
			"2x5x2nd, 1x2xMain",
			"905-812-9000"
		]
	},
	{
		"_id" : ObjectId("578623627e6ddc167bb6e57b"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Detached",
			"2-Storey",
			"47.99 x 112.51 Feet",
			"1x2xMain, 2x4xUpper, 1x3xBsmt",
			"905-873-6111"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e587"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"471-26-P",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.04 x 94.51 Feet",
			"1x2xGround, 1x3x2nd, 1x4x2nd",
			"905-828-1122"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e588"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-27-R",
			"2016",
			"Detached",
			"2-Storey",
			"46.59 x 100.07 Feet",
			"1x2xMain, 1x3xBsmt, 1x4x2nd, 1x4x2nd",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e589"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-U",
			"2016",
			"Detached",
			"Bungalow",
			"67 x 113 Feet",
			"1x3xLower, 1x4xMain",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e58a"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge South",
			"Halton",
			"471-29-Q",
			"2015",
			"Detached",
			"Sidesplit 4",
			"54 x 98 Feet",
			"1x4xUpper, 1x3xUpper, 1x2xLower, 1x3xBsmt",
			"416-733-7784"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e58b"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"470-23-Q",
			"2016",
			"Detached",
			"2-Storey",
			"54.99 x 121.39 Feet",
			"1x2xMain, 2x4x2nd, 1x2xBsmt",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e58c"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-V",
			"2016",
			"Detached",
			"2-Storey",
			"60.04 x 127.95 Feet",
			"1x2xMain, 2x4x2nd, 1x4xBsmt",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("578623697e6ddc167bb6e58d"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-27-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.37 x 104.42 Feet",
			"1x5x3rd, 1x3x3rd, 1x3xMain, 1x3xBsmt",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("5786236a7e6ddc167bb6e58e"),
		"Undefined" : [
			"Oakville",
			"Bronte East",
			"Halton",
			"476-23-T",
			"2016",
			"Detached",
			"2-Storey",
			"60 x 108 Feet",
			"1x2xMain, 2x5x2nd, 1x3x2nd, 1x3xLower",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("5786236a7e6ddc167bb6e58f"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-31-U",
			"2016",
			"Detached",
			"2-Storey",
			"143.99 x 189.42 Feet",
			"1x2xGround, 3x4x2nd, 1x6x2nd, 1x4xBsmt",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("5786236e7e6ddc167bb6e597"),
		"Undefined" : [
			"Burlington",
			"Appleby",
			"Halton",
			"476-17-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"16 x 106 Feet",
			"1x4x2nd, 1x2xMain",
			"905-637-1700"
		]
	},
	{
		"_id" : ObjectId("5786236e7e6ddc167bb6e598"),
		"Undefined" : [
			"Burlington",
			"Freeman",
			"Halton",
			"475-9-S",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.15 x 162.14 Feet",
			"1x2xMain, 1x3xLower, 2x4x2nd",
			"905-278-8866"
		]
	},
	{
		"_id" : ObjectId("5786236e7e6ddc167bb6e599"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-15-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 127 Feet",
			"1x3x2nd, 1x4xBsmt",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("5786236e7e6ddc167bb6e59a"),
		"Undefined" : [
			"Burlington",
			"Uptown",
			"Halton",
			"475-16-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18 x 103.35 Feet",
			"1x2xGround, 2x4x2nd",
			"905-878-8101"
		]
	},
	{
		"_id" : ObjectId("5786236e7e6ddc167bb6e59b"),
		"Undefined" : [
			"Burlington",
			"Mountainside",
			"Halton",
			"469-11-Q",
			"2015",
			"Detached",
			"Bungalow",
			"60 x 88.46 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-877-2630"
		]
	},
	{
		"_id" : ObjectId("5786236e7e6ddc167bb6e59c"),
		"Undefined" : [
			"Burlington",
			"LaSalle",
			"Halton",
			"474-5-T",
			"2015",
			"Detached",
			"2-Storey",
			"120 x 135 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xLower",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e726"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e727"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e728"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Co-Ownership Apt",
			"Apartment",
			"1x4",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e729"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e72a"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e72b"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e72c"),
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
		"_id" : ObjectId("5786243c7e6ddc167bb6e72d"),
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
		"_id" : ObjectId("5786243c7e6ddc167bb6e72e"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e72f"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xMain",
			"416-777-2200"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e730"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-553-7326"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e731"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, Main",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5786243c7e6ddc167bb6e732"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-475-0028"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e733"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-604-6001"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e734"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-534-1124"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e735"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e736"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e737"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e739"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e73a"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e73b"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4x2nd",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e73c"),
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
		"_id" : ObjectId("5786243d7e6ddc167bb6e73d"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e73e"),
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
		"_id" : ObjectId("5786243d7e6ddc167bb6e73f"),
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
		"_id" : ObjectId("5786243d7e6ddc167bb6e740"),
		"Undefined" : [
			"Toronto C01",
			"Kensington-Chinatown",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e741"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e742"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e743"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e744"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e746"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-298-3200"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e747"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"416-533-5888"
		]
	},
	{
		"_id" : ObjectId("5786243d7e6ddc167bb6e748"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xMain",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("5786243e7e6ddc167bb6e749"),
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
		"_id" : ObjectId("5786243e7e6ddc167bb6e74a"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-840-6300"
		]
	},
	{
		"_id" : ObjectId("5786243e7e6ddc167bb6e74b"),
		"Undefined" : [
			"Toronto C08",
			"Regent Park",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x4xUpper, 1x2xMain",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5786243e7e6ddc167bb6e74c"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("5786243e7e6ddc167bb6e74d"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"115-18-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5786243e7e6ddc167bb6e74e"),
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
		"_id" : ObjectId("5786243e7e6ddc167bb6e74f"),
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
		"_id" : ObjectId("5786243e7e6ddc167bb6e750"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"120-21-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4xMain",
			"416-921-1112"
		]
	},
	{
		"_id" : ObjectId("5786243e7e6ddc167bb6e751"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2, 1x3",
			"416-218-8880"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e765"),
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
		"_id" : ObjectId("578624497e6ddc167bb6e766"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-27-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e767"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e768"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-24-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e769"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e76a"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"102-16-A",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xMain, Main, Main, Main",
			"647-351-8811"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e76b"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-20-F",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e76c"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-595-5111"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e76d"),
		"Undefined" : [
			"Toronto C07",
			"Westminster-Branson",
			"Toronto",
			"103-18-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e76e"),
		"Undefined" : [
			"Toronto C15",
			"Bayview Village",
			"Toronto",
			"103-23-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e76f"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-20-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-544-1144"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e770"),
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
		"_id" : ObjectId("578624497e6ddc167bb6e771"),
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
		"_id" : ObjectId("578624497e6ddc167bb6e772"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-22-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x5x2nd, 1x2xGround, 1x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e773"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-22-K",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x2, 2x4",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("578624497e6ddc167bb6e774"),
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
		"_id" : ObjectId("578624497e6ddc167bb6e775"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5, 1x4",
			"416-449-7600"
		]
	},
	{
		"_id" : ObjectId("578624507e6ddc167bb6e785"),
		"Undefined" : [
			"Toronto E08",
			"Scarborough Village",
			"Toronto",
			"117-36-L",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("578624507e6ddc167bb6e787"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("578624507e6ddc167bb6e788"),
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
		"_id" : ObjectId("578624517e6ddc167bb6e789"),
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
		"_id" : ObjectId("578624517e6ddc167bb6e78a"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578624517e6ddc167bb6e78b"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("578624517e6ddc167bb6e78c"),
		"Undefined" : [
			"Toronto E03",
			"Crescent Town",
			"Toronto",
			"116-27-P",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4, 1x2",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("578624517e6ddc167bb6e78d"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("578624517e6ddc167bb6e78e"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"110-31-F",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("578624517e6ddc167bb6e78f"),
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
		"_id" : ObjectId("578624517e6ddc167bb6e790"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"116-27-Q",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xLower",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("578624517e6ddc167bb6e791"),
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
		"_id" : ObjectId("5786245d7e6ddc167bb6e7aa"),
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
		"_id" : ObjectId("5786245d7e6ddc167bb6e7ab"),
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
		"_id" : ObjectId("5786245d7e6ddc167bb6e7ac"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5786245d7e6ddc167bb6e7ad"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"101-7-E",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4xMain",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5786245d7e6ddc167bb6e7ae"),
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
		"_id" : ObjectId("5786245d7e6ddc167bb6e7af"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-14-G",
			"2016",
			"Condo Apt",
			"Multi-Level",
			"1x4xFlat",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("5786245d7e6ddc167bb6e7b0"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"416-535-8000"
		]
	},
	{
		"_id" : ObjectId("5786245d7e6ddc167bb6e7b1"),
		"Undefined" : [
			"Toronto W04",
			"Mount Dennis",
			"Toronto",
			"114-11-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("5786245d7e6ddc167bb6e7b2"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"2016",
			"Co-Op Apt",
			"Apartment",
			"1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5786245d7e6ddc167bb6e7b3"),
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
		"_id" : ObjectId("5786245d7e6ddc167bb6e7b4"),
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
		"_id" : ObjectId("5786245d7e6ddc167bb6e7b5"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-10-K",
			"2015",
			"Condo Townhouse",
			"Stacked Townhse",
			"2x4xMain",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7b7"),
		"Undefined" : [
			"Toronto W08",
			"Islington-City Centre West",
			"Toronto",
			"118-4-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-812-8123"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7b8"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"119-11-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-201-0200"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7b9"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-226-9770"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7ba"),
		"Undefined" : [
			"Toronto W01",
			"South Parkdale",
			"Toronto",
			"119-15-S",
			"2016",
			"Condo Townhouse",
			"Stacked Townhse",
			"1x4",
			"416-762-4200"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7bb"),
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
		"_id" : ObjectId("5786245e7e6ddc167bb6e7bc"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-290-6777"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7bd"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3xMain, 1x4xMain",
			"905-278-8866"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7be"),
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
		"_id" : ObjectId("5786245e7e6ddc167bb6e7bf"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-11-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("5786245e7e6ddc167bb6e7c0"),
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
		"_id" : ObjectId("578624697e6ddc167bb6e7d1"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-23-B",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x4xUpper, 1x2xLower",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d2"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"647-708-8188"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d3"),
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
		"_id" : ObjectId("578624697e6ddc167bb6e7d4"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-29-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d5"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-36-Y",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, Flat, Flat",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d6"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-18-X",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-883-8300"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d7"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d8"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x2xFlat",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7d9"),
		"Undefined" : [
			"Richmond Hill",
			"Doncrest",
			"York",
			"355-24-V",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-512-9996"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7db"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"416-583-1660"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7dc"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7dd"),
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
		"_id" : ObjectId("578624697e6ddc167bb6e7de"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-30-W",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-299-8199"
		]
	},
	{
		"_id" : ObjectId("578624697e6ddc167bb6e7df"),
		"Undefined" : [
			"Richmond Hill",
			"Harding",
			"York",
			"349-22-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"416-218-8800"
		]
	},
	{
		"_id" : ObjectId("5786246b7e6ddc167bb6e7e3"),
		"Undefined" : [
			"Pickering",
			"Village East",
			"Durham",
			"266-9-R",
			"2015",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"416-961-8880"
		]
	},
	{
		"_id" : ObjectId("5786246b7e6ddc167bb6e7e4"),
		"Undefined" : [
			"Whitby",
			"Port Whitby",
			"Durham",
			"268-20-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("5786247b7e6ddc167bb6e809"),
		"Undefined" : [
			"Mississauga",
			"Malton",
			"Peel",
			"460-53-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-288-0800"
		]
	},
	{
		"_id" : ObjectId("5786247b7e6ddc167bb6e80a"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"466-42-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-277-0771"
		]
	},
	{
		"_id" : ObjectId("5786247b7e6ddc167bb6e80b"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("5786247b7e6ddc167bb6e80c"),
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
		"_id" : ObjectId("5786247b7e6ddc167bb6e80d"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-896-0002"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e80e"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-272-3434"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e80f"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e810"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e811"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e812"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e813"),
		"Undefined" : [
			"Mississauga",
			"City Centre",
			"Peel",
			"465-40-K",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e814"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e815"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-S",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e816"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-G",
			"2016",
			"Condo Townhouse",
			"Bungalow",
			"1x3xGround",
			"416-240-1000"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e817"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-48-V",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x2, 1x4",
			"416-855-4663"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e818"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2xMain",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e819"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e81a"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e81b"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e81c"),
		"Undefined" : [
			"Mississauga",
			"Mississauga Valleys",
			"Peel",
			"473-42-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x2",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e81d"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-M",
			"2015",
			"Condo Townhouse",
			"Multi-Level",
			"1x2xMain, 1x4x2nd",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e81e"),
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
		"_id" : ObjectId("5786247c7e6ddc167bb6e81f"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"473-41-M",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2xBsmt",
			"800-834-5516"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e820"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-42-J",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x4xMain",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e821"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-43-P",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2x2nd",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("5786247c7e6ddc167bb6e822"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"458-34-A",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("5786247d7e6ddc167bb6e823"),
		"Undefined" : [
			"Mississauga",
			"East Credit",
			"Peel",
			"465-38-J",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x2xMain",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("5786247d7e6ddc167bb6e824"),
		"Undefined" : [
			"Mississauga",
			"Erin Mills",
			"Peel",
			"472-35-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain",
			"905-507-4776"
		]
	},
	{
		"_id" : ObjectId("5786247d7e6ddc167bb6e825"),
		"Undefined" : [
			"Mississauga",
			"Fairview",
			"Peel",
			"473-41-L",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("5786247d7e6ddc167bb6e827"),
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
		"_id" : ObjectId("5786247d7e6ddc167bb6e828"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-S",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x4, 1x4, 1x2",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("5786247d7e6ddc167bb6e829"),
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
		"_id" : ObjectId("5786247d7e6ddc167bb6e82a"),
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
		"_id" : ObjectId("5786247f7e6ddc167bb6e830"),
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
		"_id" : ObjectId("5786247f7e6ddc167bb6e831"),
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
		"_id" : ObjectId("5786247f7e6ddc167bb6e832"),
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
		"_id" : ObjectId("5786247f7e6ddc167bb6e833"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 2x4",
			"905-639-7676"
		]
	},
	{
		"_id" : ObjectId("5780d7da7e6ddc0ff0a6950b"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-S",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x3xFlat",
			"416-368-5262"
		]
	},
	{
		"_id" : ObjectId("5784cd977e6ddc3bb208a2b4"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"119-16-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-455-5800"
		]
	},
	{
		"_id" : ObjectId("5784cdd57e6ddc3bb208a38f"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-7-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4, 1x2",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5784ce017e6ddc3bb208a445"),
		"Undefined" : [
			"Mississauga",
			"Streetsville",
			"Peel",
			"458-38-D",
			"2016",
			"Condo Townhouse",
			"3-Storey",
			"3x4xUpper, 3xUpper, 2xMain",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("577de4d27e6ddc7bb4a751da"),
		"Undefined" : [
			"Toronto W05",
			"York University Heights",
			"Toronto",
			"102-14-B",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-2800"
		]
	},
	{
		"_id" : ObjectId("5780d8317e6ddc0ff0a69592"),
		"Undefined" : [
			"Brampton",
			"Queen Street Corridor",
			"Peel",
			"452-46-V",
			"2015",
			"Condo Apt",
			"Loft",
			"1x2, 1x3",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("5784cb9f7e6ddc3bb2089d81"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-30-G",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.83 x 85.58 Feet",
			"4x2",
			"647-479-8477"
		]
	},
	{
		"_id" : ObjectId("5784cc827e6ddc3bb208a017"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22 x 113 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("578708f5e40ebb0d6b2994e4"),
		"Undefined" : [
			"Toronto C03",
			"Oakwood-Vaughan",
			"Toronto",
			"114-16-M",
			"2016",
			"Detached",
			"Bungalow",
			"25 x 131.66 Feet",
			"1x4xMain",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("578708f5e40ebb0d6b2994e5"),
		"Undefined" : [
			"Toronto C01",
			"Palmerston-Little Italy",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"19.58 x 103.92 Feet",
			"1x4, 1x1",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994ee"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.92 x 100 Feet",
			"1x3x2nd, 1x3xBsmt",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994ef"),
		"Undefined" : [
			"Toronto C11",
			"Leaside",
			"Toronto",
			"115-22-L",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.5 x 130 Feet",
			"1x4x2nd, 1x2xLower",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994f0"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"16.5 x 90 Feet",
			"1x2xMain, 1x4x2nd, 1x3x3rd, 1x4xBsmt",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994f1"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-L",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 120 Feet",
			"1x4x2nd, 1x4xBsmt, 1x2xBsmt",
			"416-923-4621"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994f2"),
		"Undefined" : [
			"Toronto C08",
			"Cabbagetown-South St. James Town",
			"Toronto",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"18 x 95 Feet",
			"1x2xMain, 1x4x3rd, 1x5x2nd, 1x2xBsmt",
			"416-366-3033"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994f3"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-21-N",
			"2015",
			"Detached",
			"2-Storey",
			"30 x 115 Feet",
			"1x7x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("578708fae40ebb0d6b2994f4"),
		"Undefined" : [
			"Toronto C09",
			"Rosedale-Moore Park",
			"Toronto",
			"115-20-Q",
			"2015",
			"Detached",
			"3-Storey",
			"32.5 x 80 Feet",
			"1x2xMain, 1x7x2nd, 1x6x3rd, 1x4xLower",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b2994fd"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"103-17-E",
			"2016",
			"Detached",
			"Bungalow",
			"51.25 x 161 Feet",
			"1x4xMain, 2x3xMain, 1x4xLower",
			"416-484-9444"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b2994fe"),
		"Undefined" : [
			"Toronto C06",
			"Clanton Park",
			"Toronto",
			"102-16-E",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"45.38 x 157 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b299501"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-18-B",
			"2016",
			"Detached",
			"2-Storey",
			"67.79 x 132.5 Feet",
			"1x6x2nd, 1x5x2nd, 1x3x2nd, 1x3xBsmt, 1x2xGround",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b299502"),
		"Undefined" : [
			"Toronto C04",
			"Lawrence Park North",
			"Toronto",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 146.83 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd, 1x3xBsmt",
			"416-739-7200"
		]
	},
	{
		"_id" : ObjectId("57870900e40ebb0d6b299503"),
		"Undefined" : [
			"Toronto C07",
			"Lansing-Westgate",
			"Toronto",
			"103-20-E",
			"2016",
			"Detached",
			"2-Storey",
			"37.7 x 110.01 Feet",
			"1x4, 3x3, 1x2",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b29950c"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"40.5 x 104.25 Feet",
			"1x4xMain, 1x3xLower",
			"905-853-5550"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b29950d"),
		"Undefined" : [
			"Toronto C13",
			"Victoria Village",
			"Toronto",
			"116-27-L",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"19.91 x 100.13 Feet",
			"1x2xMain, 2x4x2nd",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b29950e"),
		"Undefined" : [
			"Toronto C13",
			"Parkwoods-Donalda",
			"Toronto",
			"110-27-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"58 x 120.08 Feet",
			"1x3, 1x4, 1x2, 1x5",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b29950f"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-25-A",
			"2016",
			"Detached",
			"2-Storey",
			"55 x 110 Feet",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x2xBsmt",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b299510"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-21-G",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 138 Feet",
			"1x4xMain, 1x3x2nd, 1x3xLower",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b299511"),
		"Undefined" : [
			"Toronto C12",
			"Bridle Path-Sunnybrook-York Mills",
			"Toronto",
			"109-23-K",
			"2016",
			"Detached",
			"2-Storey",
			"103 x 123.6 Feet",
			"1x2xMain, 1x2xLower, 1x4x2nd, 1x8x2nd",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("57870904e40ebb0d6b299512"),
		"Undefined" : [
			"Toronto C12",
			"St. Andrew-Windfields",
			"Toronto",
			"109-21-F",
			"2015",
			"Detached",
			"2-Storey",
			"60 x 179 Feet",
			"1x8, 5x4, 1x3, 2x2",
			"905-513-8878"
		]
	},
	{
		"_id" : ObjectId("5787090ce40ebb0d6b299523"),
		"Undefined" : [
			"Toronto E06",
			"Oakridge",
			"Toronto",
			"116-28-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 107 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-335-4335"
		]
	},
	{
		"_id" : ObjectId("5787090ce40ebb0d6b299524"),
		"Undefined" : [
			"Toronto E01",
			"Greenwood-Coxwell",
			"Toronto",
			"120-24-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"14.67 x 94.5 Feet",
			"1x4x2nd",
			"647-347-7325"
		]
	},
	{
		"_id" : ObjectId("5787090ce40ebb0d6b299525"),
		"Undefined" : [
			"Toronto E03",
			"Woodbine-Lumsden",
			"Toronto",
			"116-26-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 123 Feet",
			"1x4x2nd, 1x3xBsmt",
			"10",
			"Laundry",
			"Bsmt",
			"3.02",
			"3.45",
			"Unfinished",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("5787090ce40ebb0d6b299526"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-22-S",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"13.16 x 63.71 Feet",
			"1x4x2nd, 1x2xMain",
			"416-465-4545"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b299527"),
		"Undefined" : [
			"Toronto E03",
			"East York",
			"Toronto",
			"115-24-P",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"30 x 95.25 Feet",
			"1x4xMain, 1x2x2nd, 1x2xBsmt",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b299528"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"121-27-R",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"14.04 x 30.6 Feet",
			"1x2xLower, 1x4x2nd, 1x4xUpper",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b299529"),
		"Undefined" : [
			"Toronto E01",
			"Blake-Jones",
			"Toronto",
			"115-24-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20.17 x 102.75 Feet",
			"1x4, 1x3",
			"416-694-2499"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b29952a"),
		"Undefined" : [
			"Toronto E02",
			"East End-Danforth",
			"Toronto",
			"121-28-R",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 108 Feet",
			"1x4, 1x3",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b29952b"),
		"Undefined" : [
			"Toronto E01",
			"North Riverdale",
			"Toronto",
			"120-23-R",
			"2105",
			"Semi-Detached",
			"2-Storey",
			"13.83 x 103 Feet",
			"1x3x2nd, 1x4x2nd, 1x3xBsmt",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b29952d"),
		"Undefined" : [
			"Toronto E03",
			"O'Connor-Parkview",
			"Toronto",
			"116-27-N",
			"2016",
			"Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b29952e"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-23-R",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"16 x 117 Feet",
			"1x2xMain, 1x4x2nd, 1x4x3rd, 1x3xLower",
			"416-699-2992"
		]
	},
	{
		"_id" : ObjectId("5787090de40ebb0d6b29952f"),
		"Undefined" : [
			"Toronto E03",
			"Playter Estates-Danforth",
			"Toronto",
			"115-22-P",
			"2016",
			"Semi-Detached",
			"2 1/2 Storey",
			"29.83 x 110 Feet",
			"1x4x2nd, 1x4x3rd, 1x4xBsmt, 1x2xBsmt",
			"416-424-4900"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b299553"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-E",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"26.46 x 110.75 Feet",
			"1x4x2nd, 1x4xLower",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b299555"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"117-34-L",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"30 x 122.5 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b299556"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-36-E",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 150 Feet",
			"1x2xGround, 1x4x2nd",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b299557"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-K",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"44 x 115 Feet",
			"1x4xMain, 1x3x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b299558"),
		"Undefined" : [
			"Toronto E04",
			"Clairlea-Birchmount",
			"Toronto",
			"116-30-P",
			"2016",
			"Detached",
			"Bungalow",
			"25 x 120 Feet",
			"1x4xMain",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b29955b"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"105-37-A",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.54 x 115.68 Feet",
			"2x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b29955c"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"116-30-L",
			"2016",
			"Detached",
			"Bungalow",
			"64.92 x 100 Feet",
			"1x4xMain, 1x3xLower",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("57870922e40ebb0d6b29955d"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-B",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"41.7 x 110 Feet",
			"1x2xMain, 1x4x2nd",
			"416-743-2000"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299560"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-37-F",
			"2016",
			"Detached",
			"Bungalow",
			"45 x 161.48 Feet",
			"1x2xMain, 1x4xMain, 1x4xLower",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299561"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-29-B",
			"2016",
			"Detached",
			"2-Storey",
			"41 x 110 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-462-1888"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299562"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"117-34-M",
			"2016",
			"Detached",
			"Bungalow",
			"53 x 150 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-699-9292"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299563"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-28-K",
			"2015",
			"Detached",
			"Bungalow",
			"52.5 x 128 Feet",
			"1x4xMain, 1x4xLower",
			"416-221-0999"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299564"),
		"Undefined" : [
			"Toronto E10",
			"West Hill",
			"Toronto",
			"111-39-J",
			"2016",
			"Detached",
			"Backsplit 4",
			"45.92 x 126 Feet",
			"1x6, 1x4",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299565"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-B",
			"2016",
			"Link",
			"Bungalow-Raised",
			"40.21 x 110.54 Feet",
			"1x4xUpper, 1x3xGround",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299566"),
		"Undefined" : [
			"Toronto E04",
			"Ionview",
			"Toronto",
			"110-30-K",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 120 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299567"),
		"Undefined" : [
			"Toronto E09",
			"Woburn",
			"Toronto",
			"111-34-H",
			"2016",
			"Detached",
			"Bungalow",
			"55.9 x 100 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b299569"),
		"Undefined" : [
			"Toronto E04",
			"Wexford-Maryvale",
			"Toronto",
			"110-29-K",
			"2016",
			"Detached",
			"Bungalow",
			"40 x 135.5 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-205-0355"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b29956a"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-30-F",
			"2016",
			"Detached",
			"Bungalow",
			"46 x 117 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57870923e40ebb0d6b29956b"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-30-F",
			"2015",
			"Detached",
			"Bungalow",
			"45 x 111.25 Feet",
			"1x4, 1x2",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b29956c"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2016",
			"Detached",
			"2-Storey",
			"26 x 125 Feet",
			"1x3xBsmt, 2x4x2nd",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b29956d"),
		"Undefined" : [
			"Toronto E10",
			"Centennial Scarborough",
			"Toronto",
			"112-41-H",
			"2016",
			"Detached",
			"Backsplit 4",
			"47.92 x 150 Feet",
			"1x2, 1x3, 1x4",
			"416-383-1828"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b29956e"),
		"Undefined" : [
			"Toronto E08",
			"Cliffcrest",
			"Toronto",
			"116-32-P",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 150 Feet",
			"3x4xGround, 3x2nd, 3xBsmt",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b29956f"),
		"Undefined" : [
			"Toronto E05",
			"Tam O'Shanter-Sullivan",
			"Toronto",
			"110-31-F",
			"2015",
			"Detached",
			"Bungalow",
			"70 x 126 Feet",
			"1x4, 1x2",
			"905-883-1988"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b299570"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"104-31-E",
			"2016",
			"Detached",
			"Sidesplit 4",
			"70 x 231 Feet",
			"1x4x2nd, 1x4xBsmt, 1x3xMain",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b299571"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-29-D",
			"2016",
			"Detached",
			"Sidesplit 4",
			"40 x 160 Feet",
			"1x2xGround, 1x3xUpper, 1x4xUpper",
			"416-284-8732"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b299573"),
		"Undefined" : [
			"Toronto E05",
			"Steeles",
			"Toronto",
			"104-30-A",
			"2016",
			"Detached",
			"Backsplit 5",
			"49.4 x 132 Feet",
			"1x2xBsmt, 1x4xLower, 1x5xUpper, 1x4xUpper",
			"416-690-6363"
		]
	},
	{
		"_id" : ObjectId("57870924e40ebb0d6b299574"),
		"Undefined" : [
			"Toronto E11",
			"Rouge E11",
			"Toronto",
			"106-41-E",
			"2015",
			"Detached",
			"Bungalow",
			"208.67 x 195.66 Feet",
			"1x8, 2x3, 1x2",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b299585"),
		"Undefined" : [
			"Toronto W03",
			"Weston-Pellam Park",
			"Toronto",
			"114-14-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"17.4 x 91.25 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b299586"),
		"Undefined" : [
			"Toronto W05",
			"Humber Summit",
			"Toronto",
			"101-8-B",
			"2015",
			"Semi-Detached",
			"Bungalow-Raised",
			"28.99 x 149.35 Feet",
			"1x4xMain, 1x4xBsmt, 1x4xBsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b299588"),
		"Undefined" : [
			"Toronto W02",
			"Junction Area",
			"Toronto",
			"114-12-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20.01 x 82.68 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b299589"),
		"Undefined" : [
			"Toronto W02",
			"Lambton Baby Point",
			"Toronto",
			"114-10-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"103 x 63 Feet",
			"1x5x2nd, 1x3xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b29958a"),
		"Undefined" : [
			"Toronto W03",
			"Corso Italia-Davenport",
			"Toronto",
			"114-15-N",
			"2016",
			"Detached",
			"2-Storey",
			"26.06 x 140 Feet",
			"1x4x2nd, 1x3xBsmt",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b29958b"),
		"Undefined" : [
			"Toronto W04",
			"Weston",
			"Toronto",
			"108-11-J",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 80.38 Feet",
			"1x4xUpper, 1x4xUpper, 1x4xLower, 1x2xMain",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b29958c"),
		"Undefined" : [
			"Toronto W05",
			"Humbermede",
			"Toronto",
			"102-9-D",
			"2016",
			"Detached",
			"Bungalow",
			"55.08 x 125 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b29958d"),
		"Undefined" : [
			"Toronto W05",
			"Downsview-Roding-CFB",
			"Toronto",
			"108-12-G",
			"2015",
			"Detached",
			"2-Storey",
			"45.34 x 112.75 Feet",
			"1x5xBsmt, 1x3xMain, 1x5x2nd, 1x5x2nd",
			"416-654-1010"
		]
	},
	{
		"_id" : ObjectId("5787092fe40ebb0d6b29958f"),
		"Undefined" : [
			"Toronto W01",
			"High Park-Swansea",
			"Toronto",
			"114-11-Q",
			"2016",
			"Detached",
			"2-Storey",
			"25 x 94.75 Feet",
			"1x3x2nd, 1x3xLower",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("57870930e40ebb0d6b299590"),
		"Undefined" : [
			"Toronto W02",
			"Dovercourt-Wallace Emerson-Junction",
			"Toronto",
			"114-16-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.36 x 156.91 Feet",
			"1x2xMain, 1x6x2nd, 1x4x2nd, 1x3xLower",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("57870930e40ebb0d6b299591"),
		"Undefined" : [
			"Toronto W01",
			"Roncesvalles",
			"Toronto",
			"119-14-R",
			"2016",
			"Detached",
			"2 1/2 Storey",
			"27 x 130 Feet",
			"1x4x3rd, 2x4x2nd, 1x4xMain, 1x4xBsmt",
			"416-534-3511"
		]
	},
	{
		"_id" : ObjectId("57870937e40ebb0d6b29959f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"118-8-T",
			"2016",
			"Detached",
			"Bungalow",
			"25 x 120 Feet",
			"1x4, 1x3",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("57870937e40ebb0d6b2995a0"),
		"Undefined" : [
			"Toronto W08",
			"Eringate-Centennial-West Deane",
			"Toronto",
			"113-3-L",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"27.5 x 95.14 Feet",
			"1x5xUpper, 1x3xLower",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57870937e40ebb0d6b2995a2"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-P",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50 x 105 Feet",
			"1x4xMain, 1x2xBsmt",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("57870937e40ebb0d6b2995a3"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"114-9-N",
			"2016",
			"Detached",
			"Bungalow",
			"43.25 x 100 Feet",
			"1x4xMain, 1x3xLower",
			"416-236-1392"
		]
	},
	{
		"_id" : ObjectId("57870938e40ebb0d6b2995a5"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"114-9-Q",
			"2015",
			"Detached",
			"Bungalow",
			"40 x 91.35 Feet",
			"1x3xMain, 1x3xLower",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("57870938e40ebb0d6b2995a6"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"114-9-Q",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 98 Feet",
			"1x2xBsmt, 1x4x2nd",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("57870938e40ebb0d6b2995a7"),
		"Undefined" : [
			"Toronto W08",
			"Kingsway South",
			"Toronto",
			"113-8-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.68 x 97.17 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd, 1x4xBsmt",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("57870938e40ebb0d6b2995a8"),
		"Undefined" : [
			"Toronto W07",
			"Stonegate-Queensway",
			"Toronto",
			"113-8-Q",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"55 x 118 Feet",
			"1x4xMain, 1x3xMain, 1x2xMain, 1x3xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995bc"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-J",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.7 x 89.83 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"905-737-0777"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995bd"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-J",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"9 x 27 Metres",
			"2x4x2nd, 1x2xMain, 1x2xBsmt",
			"416-490-0880"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995be"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-22-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50 x 100 Feet",
			"1x4xMain, 1x4xBsmt",
			"416-690-2181"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995bf"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50 x 110 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c0"),
		"Undefined" : [
			"Richmond Hill",
			"Devonsleigh",
			"York",
			"343-23-N",
			"2016",
			"Detached",
			"2-Storey",
			"44.46 x 111.54 Feet",
			"1x2xMain, 1x7x2nd, 1x4x2nd, 1x4xBsmt",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c1"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-21-P",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 108.27 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x2xBsmt",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c2"),
		"Undefined" : [
			"Richmond Hill",
			"Crosby",
			"York",
			"349-24-R",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 110 Feet",
			"1x4, 1x3",
			"416-860-6688"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c3"),
		"Undefined" : [
			"Richmond Hill",
			"Mill Pond",
			"York",
			"349-20-R",
			"2016",
			"Detached",
			"2-Storey",
			"49.75 x 117.79 Feet",
			"1x2xMain, 2x4xUpper",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c4"),
		"Undefined" : [
			"Richmond Hill",
			"North Richvale",
			"York",
			"349-20-S",
			"2016",
			"Detached",
			"2-Storey",
			"48.49 x 142.71 Feet",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x5xBsmt",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c5"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-F",
			"2015",
			"Detached",
			"2-Storey",
			"38.06 x 106.63 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c7"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-22-N",
			"2015",
			"Detached",
			"2-Storey",
			"15.72 x 35.5 Metres",
			"1x5x2nd, 1x3xMain, 2x4x2nd, 1x3xBsmt",
			"416-287-2222"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c8"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-25-F",
			"2016",
			"Detached",
			"2-Storey",
			"54.49 x 117.26 Feet",
			"2x5xUpper, 1x4xUpper, 2x3xBsmt, 1x2xMain",
			"905-940-3428"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995c9"),
		"Undefined" : [
			"Richmond Hill",
			"Westbrook",
			"York",
			"343-21-N",
			"2016",
			"Detached",
			"2-Storey",
			"60.48 x 121.39 Feet",
			"1x2xMain, 2x4x2nd, 1x3x2nd, 1x3xBsmt",
			"905-508-8787"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995ca"),
		"Undefined" : [
			"Richmond Hill",
			"Jefferson",
			"York",
			"343-21-M",
			"2015",
			"Detached",
			"2-Storey",
			"55 x 170 Feet",
			"1x2, 2x4, 1x7",
			"905-503-2007"
		]
	},
	{
		"_id" : ObjectId("57870942e40ebb0d6b2995cb"),
		"Undefined" : [
			"Richmond Hill",
			"Bayview Hill",
			"York",
			"349-25-T",
			"2016",
			"Detached",
			"2-Storey",
			"66.11 x 145 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd, 1x3xLower",
			"416-782-8882"
		]
	},
	{
		"_id" : ObjectId("57870943e40ebb0d6b2995cc"),
		"Undefined" : [
			"Richmond Hill",
			"Oak Ridges Lake Wilcox",
			"York",
			"337-24-J",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 240 Feet",
			"1x2, 1x3, 1x4, 1x5",
			"905-832-6656"
		]
	},
	{
		"_id" : ObjectId("57870943e40ebb0d6b2995cd"),
		"Undefined" : [
			"Richmond Hill",
			"Rural Richmond Hill",
			"York",
			"343-25-L",
			"2015",
			"Detached",
			"Bungalow",
			"186.25 x 0 Feet",
			"1x6, 2x3, 2x2",
			"Greenhouse",
			"905-737-6060"
		]
	},
	{
		"_id" : ObjectId("5787094de40ebb0d6b2995df"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-X",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.56 x 102.35 Feet",
			"1x4xUpper, 1x3xBsmt, 1x2xMain",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("5787094de40ebb0d6b2995e0"),
		"Undefined" : [
			"Newmarket",
			"Central Newmarket",
			"York",
			"325-26-V",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 130 Feet",
			"1x4xGround, 1x3xBsmt",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("5787094de40ebb0d6b2995e1"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 89.24 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"519-570-4663"
		]
	},
	{
		"_id" : ObjectId("5787094de40ebb0d6b2995e2"),
		"Undefined" : [
			"Aurora",
			"Aurora Village",
			"York",
			"331-25-A",
			"2015",
			"Detached",
			"2 1/2 Storey",
			"50 x 110 Feet",
			"1x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-476-4337"
		]
	},
	{
		"_id" : ObjectId("5787094de40ebb0d6b2995e3"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-25-U",
			"2015",
			"Detached",
			"2-Storey",
			"37.89 x 158 Feet",
			"1x3xMain, 2x4x2nd",
			"905-853-5955"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995e4"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-25-U",
			"2015",
			"Detached",
			"Backsplit 4",
			"50 x 110 Feet",
			"1x4x2nd, 1x4xMain",
			"905-773-7771"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995e5"),
		"Undefined" : [
			"Newmarket",
			"Bristol-London",
			"York",
			"325-26-U",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 126.8 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995e6"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"320-28-T",
			"2015",
			"Detached",
			"2-Storey",
			"46.88 x 113 Feet",
			"1x2xMain, 2x4x2nd",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995e8"),
		"Undefined" : [
			"Newmarket",
			"Gorham-College Manor",
			"York",
			"326-28-X",
			"2015",
			"Detached",
			"2-Storey",
			"49 x 121 Feet",
			"1x2xMain, 1x4xUpper, 1x4xUpper, 1x4xBsmt",
			"905-841-1030"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995e9"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"325-26-Y",
			"2016",
			"Detached",
			"2-Storey",
			"78.74 x 106.63 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"866-539-3300"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995ea"),
		"Undefined" : [
			"Aurora",
			"Aurora Highlands",
			"York",
			"337-22-E",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 114.96 Feet",
			"1x2xMain, 2x4x2nd",
			"416-691-3000"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995eb"),
		"Undefined" : [
			"Newmarket",
			"Huron Heights-Leslie Valley",
			"York",
			"320-29-T",
			"2016",
			"Detached",
			"2-Storey",
			"80 x 106 Feet",
			"1x2xMain, 1x4xUpper, 1x5xUpper, 1x3xLower",
			"905-898-1211"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995ec"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-29-Y",
			"2015",
			"Detached",
			"2-Storey",
			"43.14 x 85.3 Feet",
			"1x2xIn Betwn, 1x3x2nd, 1x4x2nd",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995ed"),
		"Undefined" : [
			"Newmarket",
			"Woodland Hill",
			"York",
			"319-24-T",
			"2016",
			"Detached",
			"2-Storey",
			"51.44 x 112.43 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xGround",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("5787094ee40ebb0d6b2995ee"),
		"Undefined" : [
			"Newmarket",
			"Stonehaven-Wyndham",
			"York",
			"326-27-Y",
			"2016",
			"Detached",
			"2-Storey",
			"53.27 x 130 Feet",
			"1x5x2nd, 1x5x2nd, 1x2xMain",
			"905-305-0033"
		]
	},
	{
		"_id" : ObjectId("57870958e40ebb0d6b2995fe"),
		"Undefined" : [
			"Vaughan",
			"Kleinburg",
			"York",
			"347-4-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.97 x 88.58 Feet",
			"1x5, 1x4, 1x2",
			"416-366-8800"
		]
	},
	{
		"_id" : ObjectId("57870958e40ebb0d6b2995ff"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-10-X",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26.39 x 95.14 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("57870958e40ebb0d6b299600"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-7-T",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"5.11 x 37.63 Metres",
			"1x2xMain, 2x4x2nd",
			"416-391-3232"
		]
	},
	{
		"_id" : ObjectId("57870958e40ebb0d6b299601"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-14-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"5.38 x 30.73 Metres",
			"1x2xMain, 1x3xBsmt, 1x4xUpper",
			"905-738-5478"
		]
	},
	{
		"_id" : ObjectId("57870958e40ebb0d6b299603"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"354-11-X",
			"2015",
			"Detached",
			"2-Storey",
			"40.19 x 149 Feet",
			"1x3xMain, 1x5x2nd, 1x4x2nd, 1x3xBsmt",
			"416-620-5115"
		]
	},
	{
		"_id" : ObjectId("57870959e40ebb0d6b299605"),
		"Undefined" : [
			"Vaughan",
			"Sonoma Heights",
			"York",
			"347-5-S",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 109.91 Feet",
			"1x2xGround, 2x4x2nd, 1x4xBsmt",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("57870959e40ebb0d6b299606"),
		"Undefined" : [
			"Vaughan",
			"Beverley Glen",
			"York",
			"354-18-X",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 111 Feet",
			"2x5x2nd, 1x2xGround, 1x3xBsmt",
			"416-789-0288"
		]
	},
	{
		"_id" : ObjectId("57870959e40ebb0d6b299607"),
		"Undefined" : [
			"Vaughan",
			"East Woodbridge",
			"York",
			"353-8-X",
			"2016",
			"Detached",
			"2-Storey",
			"31.65 x 151.28 Feet",
			"1x6x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("57870959e40ebb0d6b299608"),
		"Undefined" : [
			"Vaughan",
			"Maple",
			"York",
			"348-16-S",
			"2016",
			"Detached",
			"2-Storey",
			"49.72 x 123.85 Feet",
			"1x5x2nd, 2x3x2nd, 1x2xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("57870959e40ebb0d6b299609"),
		"Undefined" : [
			"Vaughan",
			"Patterson",
			"York",
			"348-17-S",
			"2015",
			"Detached",
			"2-Storey",
			"44.95 x 114.02 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd",
			"905-731-2000"
		]
	},
	{
		"_id" : ObjectId("5787095be40ebb0d6b29960d"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"2016",
			"Detached",
			"Bungalow",
			"230 x 377 Feet",
			"1x2xMain, 1x4xMain",
			"416-884-1221"
		]
	},
	{
		"_id" : ObjectId("5787095be40ebb0d6b29960e"),
		"Undefined" : [
			"King",
			"Nobleton",
			"York",
			"335-6-H",
			"2015",
			"Detached",
			"Bungalow",
			"120.5 x 154.39 Feet",
			"1x5xMain, 2x3xMain, 1x2xMain, 1x3xBsmt",
			"905-833-0033"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b299624"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-T",
			"2016",
			"Detached",
			"2-Storey",
			"30.01 x 96.92 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b299625"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-S",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"25.36 x 111.55 Feet",
			"1x2xMain, 1x4x2nd, 1x4x3rd",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b299626"),
		"Undefined" : [
			"Markham",
			"Markville",
			"York",
			"356-33-V",
			"2016",
			"Link",
			"2-Storey",
			"26.3 x 0 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"647-787-8878"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b299627"),
		"Undefined" : [
			"Markham",
			"Cedarwood",
			"York",
			"357-36-Z",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"7.14 x 25.7 Metres",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b299628"),
		"Undefined" : [
			"Markham",
			"Cornell",
			"York",
			"357-39-V",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"35.56 x 85 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b299629"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-37-S",
			"2016",
			"Detached",
			"2-Storey",
			"35.1 x 89.07 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround, 1x3xLower",
			"905-731-2266"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b29962a"),
		"Undefined" : [
			"Markham",
			"Markham Village",
			"York",
			"357-37-V",
			"2016",
			"Detached",
			"2-Storey",
			"60.17 x 110.31 Feet",
			"1x4x2nd, 1x2xMain",
			"905-477-0011"
		]
	},
	{
		"_id" : ObjectId("57870966e40ebb0d6b29962b"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"357-35-Y",
			"2016",
			"Link",
			"2-Storey",
			"30.02 x 104.99 Feet",
			"1x5x2nd, 1x2xMain, 1x4x2nd, 1x3xBsmt",
			"416-288-0800"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b29962c"),
		"Undefined" : [
			"Markham",
			"Middlefield",
			"York",
			"356-34-Z",
			"2016",
			"Detached",
			"2-Storey",
			"30.02 x 111.55 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"888-966-3111"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b29962d"),
		"Undefined" : [
			"Markham",
			"Wismer",
			"York",
			"351-35-T",
			"2016",
			"Detached",
			"2-Storey",
			"44.05 x 85.3 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-470-9800"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b29962f"),
		"Undefined" : [
			"Markham",
			"Victoria Manor-Jennings Gate",
			"York",
			"350-28-Q",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 101.71 Feet",
			"1x2xGround, 1x3x2nd, 1x5x2nd",
			"905-707-8199"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299630"),
		"Undefined" : [
			"Markham",
			"Greensborough",
			"York",
			"351-38-T",
			"2015",
			"Detached",
			"2-Storey",
			"45 x 89 Feet",
			"1x5, 1x2xGround, 1x4xBsmt, 2x4",
			"416-232-9000"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299631"),
		"Undefined" : [
			"Markham",
			"Aileen-Willowbrook",
			"York",
			"355-25-X",
			"2016",
			"Detached",
			"2-Storey",
			"43.76 x 127.47 Feet",
			"1x4xBsmt, 1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299632"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"355-22-Z",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 140 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"647-348-8222"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299633"),
		"Undefined" : [
			"Markham",
			"Unionville",
			"York",
			"356-31-V",
			"2016",
			"Detached",
			"2-Storey",
			"61.26 x 115.49 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"905-471-2121"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299634"),
		"Undefined" : [
			"Markham",
			"Thornhill",
			"York",
			"355-21-Y",
			"2016",
			"Detached",
			"2-Storey",
			"24.15 x 33.83 Metres",
			"2x4x2nd, 1x5x2nd, 1x3xMain, 1x2xBsmt",
			"905-887-5678"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299635"),
		"Undefined" : [
			"Markham",
			"Cachet",
			"York",
			"350-29-T",
			"2016",
			"Detached",
			"2-Storey",
			"45.44 x 143.4 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("57870967e40ebb0d6b299636"),
		"Undefined" : [
			"Markham",
			"Grandview",
			"York",
			"2015",
			"Detached",
			"2-Storey",
			"116 x 372 Feet",
			"2x2, 1x3, 2x4, 1x6",
			"877-702-7870"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b29963f"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"339-40-J",
			"2016",
			"Detached",
			"2-Storey",
			"39.99 x 123.06 Feet",
			"1x4x2nd, 1x3xBsmt",
			"705-725-1055"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b299640"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-40-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 106.96 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround, 1x3xBsmt",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b299641"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-41-K",
			"2015",
			"Detached",
			"2-Storey",
			"38.7 x 100 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-727-1941"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b299642"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Stouffville",
			"York",
			"345-39-K",
			"2015",
			"Detached",
			"2-Storey",
			"60 x 100 Feet",
			"1x2xGround, 1x4x2nd",
			"905-642-6333"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b299643"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"338-30-F",
			"2016",
			"Detached",
			"2-Storey",
			"77.33 x 244.29 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x3x2nd",
			"905-508-9500"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b299644"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Rural Whitchurch-Stouffville",
			"York",
			"332-30-D",
			"2015",
			"Detached",
			"Bungalow",
			"102 x 411 Feet",
			"1x2xMain, 1x4xMain, 1x5xMain, 1x7xMain, 1x4xBsmt",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("5787096de40ebb0d6b299645"),
		"Undefined" : [
			"Whitchurch-Stouffville",
			"Ballantrae",
			"York",
			"333-38-A",
			"2016",
			"Detached",
			"Bungalow",
			"172.38 x 299.18 Feet",
			"1x6xMain, 1x5xMain, 1x2xMain, 1x3xBsmt, 1x2xMain",
			"905-836-1212"
		]
	},
	{
		"_id" : ObjectId("5787096fe40ebb0d6b299648"),
		"Undefined" : [
			"East Gwillimbury",
			"Rural East Gwillimbury",
			"York",
			"319-23-T",
			"2016",
			"Detached",
			"2-Storey",
			"29.53 x 104.99 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b299654"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"89.41 x 151 Feet",
			"1x3xMain, 1x3xLower",
			"905-476-4329"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b299655"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-32-A",
			"2016",
			"Detached",
			"Bungalow",
			"76 x 111.84 Feet",
			"1x4xMain",
			"905-895-1822"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b299656"),
		"Undefined" : [
			"Georgina",
			"Baldwin",
			"York",
			"312-54-E",
			"2015",
			"Detached",
			"Bungalow",
			"185 x 238 Feet",
			"2x3xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b299657"),
		"Undefined" : [
			"Georgina",
			"Sutton & Jackson's Point",
			"York",
			"303-43-W",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 125 Feet",
			"1x4xMain, 1x3xMain, 1x2xLower",
			"905-895-5972"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b299658"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"305-33-C",
			"2015",
			"Detached",
			"2-Storey",
			"50.03 x 109.91 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b299659"),
		"Undefined" : [
			"Georgina",
			"Keswick South",
			"York",
			"309-31-E",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 90.22 Feet",
			"1x2xGround, 2x4x2nd, 1x3xBsmt",
			"905-764-6000"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b29965a"),
		"Undefined" : [
			"Georgina",
			"Keswick North",
			"York",
			"305-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"47.87 x 146.25 Feet",
			"1x2xGround, 2x4x2nd",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("57870974e40ebb0d6b29965c"),
		"Undefined" : [
			"Georgina",
			"Historic Lakeshore Communities",
			"York",
			"301-34-T",
			"2015",
			"Detached",
			"1 1/2 Storey",
			"100 x 150 Feet",
			"1x3xGround",
			"905-476-4111"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b299666"),
		"Undefined" : [
			"Pickering",
			"Bay Ridges",
			"Durham",
			"266-7-S",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 100 Feet",
			"1x4",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b299667"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 118.11 Feet",
			"2x4x2nd, 1x2xMain, 1x2xBsmt",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b299668"),
		"Undefined" : [
			"Pickering",
			"Amberlea",
			"Durham",
			"266-4-Q",
			"2015",
			"Detached",
			"2-Storey",
			"45.11 x 109.91 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-831-3300"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b299669"),
		"Undefined" : [
			"Pickering",
			"Dunbarton",
			"Durham",
			"266-5-R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"73.26 x 158.26 Feet",
			"1x4x2nd, 1x3xGround",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b29966a"),
		"Undefined" : [
			"Pickering",
			"Liverpool",
			"Durham",
			"266-6-R",
			"2016",
			"Detached",
			"2-Storey",
			"63.48 x 106.43 Feet",
			"2x4xUpper, 1x2xMain, 1x4xBsmt",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b29966b"),
		"Undefined" : [
			"Pickering",
			"Rougemount",
			"Durham",
			"274-3-T",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 115.09 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-201-9977"
		]
	},
	{
		"_id" : ObjectId("5787097ae40ebb0d6b29966c"),
		"Undefined" : [
			"Pickering",
			"Rosebank",
			"Durham",
			"274-4-U",
			"2015",
			"Detached",
			"2-Storey",
			"113.19 x 39.37 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b299679"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-14-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"19.78 x 117.9 Feet",
			"1x4x2nd, 1x2xBsmt",
			"905-239-4800"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b29967a"),
		"Undefined" : [
			"Ajax",
			"South West",
			"Durham",
			"275-11-U",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"29.53 x 108.96 Feet",
			"1x2xMain, 1x4x2nd",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b29967b"),
		"Undefined" : [
			"Ajax",
			"South East",
			"Durham",
			"267-13-R",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"50 x 125 Feet",
			"1x4xMain, 1x5xBsmt",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b29967c"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-14-Q",
			"2015",
			"Detached",
			"2-Storey",
			"0 x 0 Feet",
			"1x4, 1x3, 1x3, 1x2",
			"416-751-6533"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b29967d"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"267-12-N",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 86.94 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-597-8511"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b29967e"),
		"Undefined" : [
			"Ajax",
			"Central West",
			"Durham",
			"267-11-P",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 119.91 Feet",
			"2x4x2nd, 1x2xMain",
			"905-428-7677"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b29967f"),
		"Undefined" : [
			"Ajax",
			"Northeast Ajax",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"27.53 x 87.57 Feet",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x2xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b299680"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 100.17 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("57870982e40ebb0d6b299681"),
		"Undefined" : [
			"Ajax",
			"Central East",
			"Durham",
			"267-15-P",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 90 Feet",
			"2x4, 1x2",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("57870983e40ebb0d6b299682"),
		"Undefined" : [
			"Ajax",
			"Central",
			"Durham",
			"267-13-P",
			"2016",
			"Detached",
			"2-Storey",
			"49.87 x 111.55 Feet",
			"1x4x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"416-229-4454"
		]
	},
	{
		"_id" : ObjectId("57870983e40ebb0d6b299683"),
		"Undefined" : [
			"Ajax",
			"Northwest Ajax",
			"Durham",
			"259-13-L",
			"2016",
			"Detached",
			"2-Storey",
			"50.22 x 91.56 Feet",
			"1x5xUpper, 1x3xUpper, 1x2xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b299697"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-22-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 120.6 Feet",
			"2x4, 1x2",
			"416-490-1177"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b299698"),
		"Undefined" : [
			"Whitby",
			"Williamsburg",
			"Durham",
			"260-19-M",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"19.69 x 116.9 Feet",
			"2x4x2nd, 1x2xMain",
			"416-222-8600"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b299699"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-19-R",
			"2016",
			"Detached",
			"2-Storey",
			"40 x 100 Feet",
			"1x4, 1x3, 1x2",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b29969a"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-21-L",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.97 x 98.43 Feet",
			"2x4x2nd, 1x2xMain, 1x3xBsmt",
			"3",
			"Kitchen",
			"Main",
			"2.74",
			"2.64",
			"Granite Counter",
			"Ceramic Floor",
			"Stainless Steel Appl",
			"4",
			"Breakfast",
			"Main",
			"3.13",
			"2.43",
			"W/O To Yard",
			"Ceramic Floor",
			"5",
			"Dining",
			"Main",
			"3.17",
			"3.12",
			"Ceramic Floor",
			"6",
			"Master",
			"2nd",
			"5.00",
			"3.50",
			"Double Doors",
			"4 Pc Ensuite",
			"W/I Closet",
			"7",
			"2nd Br",
			"2nd",
			"3.66",
			"2.63",
			"Hardwood Floor",
			"W/I Closet",
			"8",
			"3rd Br",
			"2nd",
			"2.90",
			"2.90",
			"Hardwood Floor",
			"9",
			"Laundry",
			"2nd",
			"2.24",
			"1.53",
			"Ceramic Floor",
			"10",
			"Kitchen",
			"Bsmt",
			"2.40",
			"4.26",
			"Ceramic Floor",
			"Stainless Steel Appl",
			"11",
			"Family",
			"Bsmt",
			"4.57",
			"5.48",
			"Ceramic Floor",
			"Murphy Bed",
			"905-642-2045"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b29969b"),
		"Undefined" : [
			"Whitby",
			"Taunton North",
			"Durham",
			"260-21-J",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 104.99 Feet",
			"1x2xMain, 2x4xUpper",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b29969d"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-18-Q",
			"2016",
			"Detached",
			"2-Storey",
			"49.21 x 121.39 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd",
			"905-831-2273"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b29969f"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-M",
			"2015",
			"Detached",
			"2-Storey",
			"49.61 x 142 Feet",
			"1x2, 2x4",
			"905-940-8996"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b2996a0"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"268-22-N",
			"2016",
			"Detached",
			"2-Storey",
			"80.65 x 117 Feet",
			"2x4xUpper, 1x2xMain, 1x2xLower",
			"416-572-1016"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b2996a1"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-P",
			"2016",
			"Detached",
			"2-Storey",
			"62.51 x 109.49 Feet",
			"1x4x2nd, 1x5x2nd, 1x2xMain, 1x3xBsmt",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b2996a2"),
		"Undefined" : [
			"Whitby",
			"Blue Grass Meadows",
			"Durham",
			"268-23-R",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 98.42 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-430-9000"
		]
	},
	{
		"_id" : ObjectId("5787098fe40ebb0d6b2996a3"),
		"Undefined" : [
			"Whitby",
			"Rolling Acres",
			"Durham",
			"260-23-M",
			"2016",
			"Detached",
			"2-Storey",
			"42.18 x 116.1 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("57870990e40ebb0d6b2996a4"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"260-22-H",
			"2015",
			"Detached",
			"2-Storey",
			"26.22 x 133.7 Feet",
			"1x4x2nd, 1x4x2nd, 1x4xBsmt, 1x2xMain",
			"416-298-8383"
		]
	},
	{
		"_id" : ObjectId("57870990e40ebb0d6b2996a5"),
		"Undefined" : [
			"Whitby",
			"Lynde Creek",
			"Durham",
			"268-19-Q",
			"2016",
			"Detached",
			"Bungalow",
			"75 x 192.5 Feet",
			"1x4xMain, 1x3xLower",
			"905-666-1333"
		]
	},
	{
		"_id" : ObjectId("57870990e40ebb0d6b2996a6"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"252-22-E",
			"2016",
			"Detached",
			"2-Storey",
			"46.76 x 114.83 Feet",
			"3x4x2nd, 1x2xMain",
			"905-427-6522"
		]
	},
	{
		"_id" : ObjectId("57870990e40ebb0d6b2996a7"),
		"Undefined" : [
			"Whitby",
			"Brooklin",
			"Durham",
			"2015",
			"Detached",
			"Bungaloft",
			"219 x 367 Feet",
			"1x5, 2x4, 2x2",
			"905-720-2004"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996b8"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"2015",
			"Detached",
			"Bungalow",
			"42 x 105 Feet",
			"1x4xMain, 1x2xBsmt",
			"905-436-0990"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996b9"),
		"Undefined" : [
			"Oshawa",
			"Vanier",
			"Durham",
			"268-25-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.75 x 108.22 Feet",
			"1x2xMain, 1x4x2nd",
			"905-686-3800"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996bb"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-29-P",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.98 x 101.39 Feet",
			"1x4x2nd, 1x3xBsmt",
			"905-434-7777"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996bc"),
		"Undefined" : [
			"Oshawa",
			"O'Neill",
			"Durham",
			"269-28-P",
			"2016",
			"Detached",
			"Bungalow",
			"45.35 x 110.29 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-579-7339"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996be"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-27-L",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 115.63 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996bf"),
		"Undefined" : [
			"Oshawa",
			"Eastdale",
			"Durham",
			"269-29-Q",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"57 x 136 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-576-5200"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996c0"),
		"Undefined" : [
			"Oshawa",
			"Samac",
			"Durham",
			"261-28-K",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"41.04 x 118 Feet",
			"1x4xMain, 1x3xMain, 1x3xLower",
			"905-686-5153"
		]
	},
	{
		"_id" : ObjectId("5787099be40ebb0d6b2996c1"),
		"Undefined" : [
			"Oshawa",
			"Northglen",
			"Durham",
			"268-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"45.77 x 108.3 Feet",
			"1x2xMain, 2x4x2nd",
			"905-619-9500"
		]
	},
	{
		"_id" : ObjectId("5787099ce40ebb0d6b2996c2"),
		"Undefined" : [
			"Oshawa",
			"McLaughlin",
			"Durham",
			"268-25-Q",
			"2016",
			"Detached",
			"2-Storey",
			"39.85 x 99.04 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("5787099ce40ebb0d6b2996c3"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"2016",
			"Detached",
			"2-Storey",
			"40.03 x 118.11 Feet",
			"1x4xUpper, 1x4xUpper, 1x2xMain",
			"416-479-3891"
		]
	},
	{
		"_id" : ObjectId("5787099ce40ebb0d6b2996c4"),
		"Undefined" : [
			"Oshawa",
			"Taunton",
			"Durham",
			"261-31-K",
			"2016",
			"Detached",
			"2-Storey",
			"52.89 x 165.65 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd",
			"416-898-8932"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d0"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"278-40-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"25.44 x 109.91 Feet",
			"1x2, 1x4",
			"905-697-1900"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d1"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-R",
			"2015",
			"Detached",
			"2-Storey",
			"49.21 x 146.75 Feet",
			"2x4xUpper, 1x2xMain",
			"905-668-1511"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d2"),
		"Undefined" : [
			"Clarington",
			"Rural Clarington",
			"Durham",
			"271-44-R",
			"2016",
			"Detached",
			"Bungalow",
			"200 x 150 Feet",
			"1x4xMain, 1x3xMain",
			"905-665-2500"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d3"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-S",
			"2016",
			"Detached",
			"Bungalow",
			"56.84 x 0 Feet",
			"1x4xMain, 1x3xLower",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d4"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"271-43-R",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 108.27 Feet",
			"2x4, 1x2",
			"905-728-1600"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d5"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-Q",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"39.37 x 108.27 Feet",
			"1x4xMain, 1x3xMain, 1x4xLower",
			"905-831-2222"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d6"),
		"Undefined" : [
			"Clarington",
			"Bowmanville",
			"Durham",
			"270-41-Q",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 108.37 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x3xLower",
			"905-430-4121"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d7"),
		"Undefined" : [
			"Clarington",
			"Courtice",
			"Durham",
			"277-32-T",
			"2015",
			"Detached",
			"2-Storey",
			"39.37 x 111.55 Feet",
			"1x4xUpper, 1x3xUpper, 1x3xUpper, 1x2xMain",
			"905-723-5944"
		]
	},
	{
		"_id" : ObjectId("578709a4e40ebb0d6b2996d8"),
		"Undefined" : [
			"Clarington",
			"Newcastle",
			"Durham",
			"279-49-W",
			"2015",
			"Detached",
			"2-Storey",
			"45.28 x 86.94 Feet",
			"1x1xGround, 1x1x2nd, 1x1x2nd",
			"416-588-6777"
		]
	},
	{
		"_id" : ObjectId("578709a6e40ebb0d6b2996dc"),
		"Undefined" : [
			"Brock",
			"Sunderland",
			"Durham",
			"213-23-V",
			"2016",
			"Detached",
			"2-Storey",
			"59.74 x 106.85 Feet",
			"1x2xMain, 1x4x2nd, 1x4xGround, 1x3xLower",
			"905-852-6143"
		]
	},
	{
		"_id" : ObjectId("578709a6e40ebb0d6b2996dd"),
		"Undefined" : [
			"Scugog",
			"Rural Scugog",
			"Durham",
			"13-36-E",
			"2016",
			"Detached",
			"2-Storey",
			"98.2 x 0 Metres",
			"1x2xMain, 1x5xMain, 1x5x2nd, 1x4x2nd",
			"905-623-3393"
		]
	},
	{
		"_id" : ObjectId("578709a7e40ebb0d6b2996e0"),
		"Undefined" : [
			"Uxbridge",
			"Uxbridge",
			"Durham",
			"225-12-K",
			"2016",
			"Detached",
			"2-Storey",
			"85 x 189 Feet",
			"2x4xMain, 1x2xMain",
			"905-852-6143"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996fb"),
		"Undefined" : [
			"Barrie",
			"400 East",
			"Simcoe",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"29.53 x 109.9 Feet",
			"1x2xMain, 1x2xLower, 1x4xUpper",
			"705-728-8800"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996fc"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"80 x 227 Feet",
			"1x4xMain",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996fd"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26.75 x 102.33 Feet",
			"1x2xMain, 1x4x2nd, 1x3xBsmt",
			"705-721-9111"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996fe"),
		"Undefined" : [
			"Barrie",
			"Letitia Heights",
			"Simcoe",
			"504-8-H",
			"2015",
			"Detached",
			"2-Storey",
			"52 x 0 Feet",
			"1x2xMain, 2x4xUpper",
			"705-720-2200"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b2996ff"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-22-S",
			"2016",
			"Detached",
			"2-Storey",
			"15 x 40 Metres",
			"1x4xUpper, 1x3xUpper, 1x2xMain",
			"416-236-1241"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b299700"),
		"Undefined" : [
			"Wasaga Beach",
			"Wasaga Beach",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"61 x 163 Feet",
			"2x4xMain",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("578709b3e40ebb0d6b299701"),
		"Undefined" : [
			"New Tecumseth",
			"Rural New Tecumseth",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"100 x 255.33 Feet",
			"1x2xMain, 1x4xMain",
			"905-939-2000"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299702"),
		"Undefined" : [
			"Tiny",
			"Wyebridge",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow",
			"108.33 x 198.98 Feet",
			"1x3xMain, 1x4xLower",
			"705-739-1300"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299703"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"15.14 x 38.31 Metres",
			"1x3xMain, 1x4xMain, 1x3x2nd",
			"705-797-4875"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299704"),
		"Undefined" : [
			"Barrie",
			"400 North",
			"Simcoe",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"39.42 x 108.48 Feet",
			"2x4xMain, 1x4xLower",
			"705-735-2525"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299705"),
		"Undefined" : [
			"New Tecumseth",
			"Alliston",
			"Simcoe",
			"575-5-C",
			"2016",
			"Detached",
			"2-Storey",
			"45.64 x 0 Feet",
			"1x2xGround, 2x4x2nd",
			"416-235-2500"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299706"),
		"Undefined" : [
			"Barrie",
			"Innis-Shore",
			"Simcoe",
			"508-16-M",
			"2016",
			"Detached",
			"2-Storey",
			"15.6 x 25.07 Metres",
			"1x6x2nd, 2x4x2nd, 1x2xMain",
			"905-607-2000"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299707"),
		"Undefined" : [
			"Innisfil",
			"Alcona",
			"Simcoe",
			"510-21-S",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"40.03 x 127.53 Feet",
			"1x4xMain, 1x4xMain, 1x4xLower",
			"705-722-7100"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299708"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"508-16-Q",
			"2015",
			"Detached",
			"2-Storey",
			"67 x 157 Feet",
			"1x2xMain, 1x4x2nd",
			"705-728-4067"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b299709"),
		"Undefined" : [
			"Innisfil",
			"Stroud",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"63.14 x 654.44 Metres",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xGround",
			"905-775-5557"
		]
	},
	{
		"_id" : ObjectId("578709b4e40ebb0d6b29970a"),
		"Undefined" : [
			"Bradford West Gwillimbury",
			"Rural Bradford West Gwillimbury",
			"Simcoe",
			"2016",
			"Detached",
			"2-Storey",
			"190 x 507 Feet",
			"1x2xGround, 1x6x2nd, 1x4x2nd, 1x5xBsmt",
			"416-221-8838"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b299714"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-H",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"29 x 0 Feet",
			"1x4, 1x3",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b299715"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-45-G",
			"2016",
			"Detached",
			"2-Storey",
			"39.37 x 110.04 Feet",
			"1x2xMain, 1x3xUpper, 1x4xUpper",
			"800-268-2455"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b299716"),
		"Undefined" : [
			"Mulmur",
			"Rural Mulmur",
			"Dufferin",
			"2015",
			"Detached",
			"Bungalow",
			"15.27 x 0 Acres",
			"1x3xMain",
			"519-928-5723"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b299717"),
		"Undefined" : [
			"Shelburne",
			"Shelburne",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow",
			"45.93 x 135.6 Feet",
			"1x4xMain, 1x4xMain",
			"519-925-2761"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b299718"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2016",
			"Detached",
			"Bungalow-Raised",
			"242 x 181.02 Feet",
			"1x3xGround, 1x2x2nd",
			"705-435-4506"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b299719"),
		"Undefined" : [
			"Orangeville",
			"Orangeville",
			"Dufferin",
			"404-46-G",
			"2016",
			"Detached",
			"2-Storey",
			"49.88 x 111 Feet",
			"1x4xUpper, 1x4xLower, 1x3xUpper, 1x2xMain",
			"519-942-8700"
		]
	},
	{
		"_id" : ObjectId("578709bce40ebb0d6b29971a"),
		"Undefined" : [
			"Mono",
			"Rural Mono",
			"Dufferin",
			"2015",
			"Detached",
			"Bungaloft",
			"798.58 x 1900 Feet",
			"1x5xMain, 1x2xMain, 1x4xBsmt",
			"877-374-7653"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299743"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"458-33-B",
			"2015",
			"Att/Row/Twnhouse",
			"3-Storey",
			"15.09 x 89.21 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299744"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"35.59 x 92.1 Feet",
			"1x2xMain, 1x4x2nd, 1x4xBsmt",
			"5",
			"Master",
			"2nd",
			"4.25",
			"4.00",
			"Hardwood Floor",
			"Closet",
			"Window",
			"6",
			"2nd Br",
			"2nd",
			"2.90",
			"3.00",
			"Hardwood Floor",
			"Closet",
			"W/O To Balcony",
			"7",
			"3rd Br",
			"2nd",
			"3.00",
			"3.10",
			"Hardwood Floor",
			"Closet",
			"Window",
			"8",
			"4th Br",
			"2nd",
			"2.95",
			"3.10",
			"Hardwood Floor",
			"Closet",
			"Window",
			"9",
			"Br",
			"Bsmt",
			"3.01",
			"3.15",
			"Ceramic Floor",
			"Closet",
			"10",
			"Br",
			"Bsmt",
			"3.75",
			"3.75",
			"Ceramic Floor",
			"Closet",
			"416-278-0848"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299745"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.31 x 109.91 Feet",
			"2x4x2nd, 1x2xGround, 1x3xBsmt",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299746"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-D",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.75 x 112.01 Feet",
			"1x4, 1x4, 1x2, 1x3",
			"416-245-9933"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b299749"),
		"Undefined" : [
			"Mississauga",
			"Clarkson",
			"Peel",
			"478-35-S",
			"2016",
			"Semi-Detached",
			"Backsplit 4",
			"30 x 140 Feet",
			"1x3x2nd, 1x3xLower, 1x2xBsmt",
			"905-949-0070"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b29974a"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-H",
			"2016",
			"Semi-Detached",
			"3-Storey",
			"24.5 x 109.9 Feet",
			"1x3x2nd, 1x4x3rd",
			"416-666-9433"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b29974b"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"459-41-B",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"23 x 120 Feet",
			"1x5x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"905-366-8100"
		]
	},
	{
		"_id" : ObjectId("578709d1e40ebb0d6b29974c"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale",
			"Peel",
			"457-32-D",
			"2015",
			"Detached",
			"2-Storey",
			"32.55 x 98.4 Feet",
			"1x4, 1x2",
			"905-474-0500"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b29974d"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.47 x 108.86 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b29974e"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"464-32-H",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"22.51 x 109.91 Feet",
			"1x4x2nd, 1x2xMain, 1x4x2nd",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b29974f"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-40-B",
			"2015",
			"Link",
			"2-Storey",
			"24.9 x 109.88 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"416-298-8880"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299750"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"465-36-J",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"26.25 x 104.99 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299751"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.49 x 109.91 Feet",
			"2x4, 1x3, 1x2",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299752"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"33-H",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"23.98 x 137.63 Feet",
			"2x4x2nd, 1x2xMain",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299753"),
		"Undefined" : [
			"Mississauga",
			"Erindale",
			"Peel",
			"472-38-M",
			"2016",
			"Semi-Detached",
			"Backsplit 5",
			"39.42 x 101.29 Feet",
			"1x4x2nd, 1x2xLower, 1x3xBsmt",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299755"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-44-R",
			"2015",
			"Link",
			"Sidesplit 4",
			"36.5 x 120 Feet",
			"1x3, 1x5",
			"905-308-8333"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299756"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-46-K",
			"2016",
			"Detached",
			"2-Storey",
			"40.81 x 102.32 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"905-897-9555"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299757"),
		"Undefined" : [
			"Mississauga",
			"Rathwood",
			"Peel",
			"466-44-K",
			"2016",
			"Detached",
			"Backsplit 5",
			"40.3 x 150 Feet",
			"1x4, 1x3, 1x2, 1x3",
			"416-740-4000"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299758"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"467-50-H",
			"2016",
			"Detached",
			"2-Storey",
			"32.35 x 111.19 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xGround",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b299759"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"31.5 x 110 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4xBsmt",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b29975a"),
		"Undefined" : [
			"Mississauga",
			"Lisgar",
			"Peel",
			"457-32-E",
			"2016",
			"Detached",
			"2-Storey",
			"45.11 x 85.3 Feet",
			"1x4x2nd, 1x3xMain, 1x4xBsmt, 1x5x2nd",
			"10",
			"Media/Ent",
			"Bsmt",
			"Laminate",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b29975b"),
		"Undefined" : [
			"Mississauga",
			"Lakeview",
			"Peel",
			"479-44-R",
			"2016",
			"Detached",
			"2-Storey",
			"36 x 150 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xLower",
			"416-240-1000"
		]
	},
	{
		"_id" : ObjectId("578709d2e40ebb0d6b29975c"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"458-40-C",
			"2016",
			"Detached",
			"2-Storey",
			"31.99 x 115.19 Feet",
			"2x4x2nd, 1x2xGround",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b29975d"),
		"Undefined" : [
			"Mississauga",
			"Meadowvale Village",
			"Peel",
			"458-38-C",
			"2016",
			"Detached",
			"2-Storey",
			"44.39 x 117.36 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"905-502-9944"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b29975e"),
		"Undefined" : [
			"Mississauga",
			"Hurontario",
			"Peel",
			"466-43-H",
			"2016",
			"Detached",
			"2-Storey",
			"36.3 x 110 Feet",
			"1x2, 3x3",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b29975f"),
		"Undefined" : [
			"Mississauga",
			"Central Erin Mills",
			"Peel",
			"465-35-G",
			"2015",
			"Detached",
			"2-Storey",
			"36.74 x 117.97 Feet",
			"1x2xGround, 2x4x2nd, 1x3xBsmt",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b299760"),
		"Undefined" : [
			"Mississauga",
			"Cooksville",
			"Peel",
			"473-42-N",
			"2016",
			"Detached",
			"2-Storey",
			"60.01 x 114.7 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain, 1x3xBsmt",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b299761"),
		"Undefined" : [
			"Mississauga",
			"Churchill Meadows",
			"Peel",
			"465-33-F",
			"2016",
			"Detached",
			"2-Storey",
			"44.95 x 85.3 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x3xBsmt, 1x2xMain",
			"416-360-0688"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b299762"),
		"Undefined" : [
			"Mississauga",
			"Lorne Park",
			"Peel",
			"458-33-A",
			"2016",
			"Detached",
			"2-Storey",
			"110 x 83.5 Feet",
			"1x2xMain, 1x4x2nd, 1x3x2nd",
			"905-822-5000"
		]
	},
	{
		"_id" : ObjectId("578709d3e40ebb0d6b299763"),
		"Undefined" : [
			"Mississauga",
			"Mineola",
			"Peel",
			"479-41-R",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 115 Feet",
			"1x5x2nd, 1x4x2nd, 1x3x2nd, 1x2xMain, 1x3xBsmt",
			"416-465-7850"
		]
	},
	{
		"_id" : ObjectId("578709e9e40ebb0d6b299790"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-Q",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"23.57 x 106.63 Feet",
			"1x4",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299791"),
		"Undefined" : [
			"Brampton",
			"Brampton 407 Corridor",
			"Peel",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30 x 150 Feet",
			"1x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-364-0727"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299792"),
		"Undefined" : [
			"Brampton",
			"Heart Lake East",
			"Peel",
			"445-46-R",
			"2016",
			"Link",
			"2-Storey",
			"25.01 x 111.01 Feet",
			"1x4x2nd, 1x2xMain",
			"416-742-8000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299793"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 100.07 Feet",
			"1x2xMain, 1x4xUpper, 1x3xLower",
			"905-241-2222"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299794"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"452-41-V",
			"2016",
			"Detached",
			"Bungalow",
			"39 x 104 Feet",
			"1x3, 1x4",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299795"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-S",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"22.47 x 108.27 Feet",
			"2x4x2nd, 1x2xIn Betwn",
			"905-878-7777"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299796"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"452-45-V",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"30 x 100 Feet",
			"1x4xUpper, 1x2xMain, 1x4xLower",
			"647-748-8655"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299797"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"445-48-R",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.38 x 141.08 Feet",
			"1x2xGround, 1x3x2nd",
			"905-336-9001"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299798"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-T",
			"2016",
			"Detached",
			"Backsplit 5",
			"30.26 x 100.88 Feet",
			"1x3, 1x4",
			"905-897-5000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b299799"),
		"Undefined" : [
			"Brampton",
			"Avondale",
			"Peel",
			"452-48-X",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"31.5 x 105.03 Feet",
			"1x4xMain, 1x4xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b29979a"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-45-U",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"50 x 110 Feet",
			"1x4xMain, 1x3xBsmt",
			"416-746-9494"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b29979b"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-R",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"37.04 x 85.3 Feet",
			"1x4, 1x4, 1x2",
			"416-747-9777"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b29979c"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-51-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"27.07 x 112.2 Feet",
			"2x4x2nd, 1x2xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b29979d"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"445-46-U",
			"2016",
			"Detached",
			"2-Storey",
			"56.78 x 100 Feet",
			"1x4x2nd, 1x2xMain, 1x1xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b29979e"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"445-41-Q",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"18.34 x 85.7 Feet",
			"1x2x2nd, 2x4x3rd",
			"905-272-5000"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b29979f"),
		"Undefined" : [
			"Brampton",
			"Madoc",
			"Peel",
			"446-51-R",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"20.67 x 104.33 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xGround",
			"905-565-9200"
		]
	},
	{
		"_id" : ObjectId("578709eae40ebb0d6b2997a0"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"444-40-S",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"22.51 x 106.63 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd, 1x3xBsmt",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a1"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-41-R",
			"2016",
			"Detached",
			"2-Storey",
			"37 x 85.3 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"416-530-1080"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a2"),
		"Undefined" : [
			"Brampton",
			"Fletcher's West",
			"Peel",
			"452-41-X",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 100 Feet",
			"2x4xUpper, 1x2xMain",
			"416-443-0300"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a3"),
		"Undefined" : [
			"Brampton",
			"Downtown Brampton",
			"Peel",
			"445-43-U",
			"2015",
			"Detached",
			"2-Storey",
			"50 x 161.33 Feet",
			"1x3x2nd, 1x3xGround",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a4"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-40-T",
			"2015",
			"Semi-Detached",
			"2-Storey",
			"26.25 x 90 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-858-3434"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a5"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"447-57-U",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"27.23 x 108.27 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a6"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"445-42-R",
			"2015",
			"Detached",
			"2-Storey",
			"28.64 x 114.96 Feet",
			"1x5, 1x2, 1x4, 1x3",
			"905-673-8500"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a7"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"472-40-L",
			"2016",
			"Semi-Detached",
			"2-Storey",
			"30.02 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-565-9565"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a8"),
		"Undefined" : [
			"Brampton",
			"Fletcher's Meadow",
			"Peel",
			"438-41-P",
			"2016",
			"Detached",
			"2-Storey",
			"48 x 83 Feet",
			"1x5x2nd, 1x4x2nd, 1x2xMain, 1x4xBsmt",
			"416-746-9494"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997a9"),
		"Undefined" : [
			"Brampton",
			"Central Park",
			"Peel",
			"445-48-T",
			"2016",
			"Detached",
			"Bungalow",
			"48.28 x 117.09 Feet",
			"2x4xMain, 1x4xBsmt",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997aa"),
		"Undefined" : [
			"Brampton",
			"Brampton East",
			"Peel",
			"452-44-X",
			"2016",
			"Detached",
			"Sidesplit 4",
			"50 x 110 Feet",
			"1x4xUpper, 1x3xUpper, 1x3xGround, 1x2xGround",
			"905-795-1900"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997ab"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"453-56-V",
			"2015",
			"Detached",
			"2-Storey",
			"42.98 x 85.3 Feet",
			"2x4, 1x2",
			"416-745-2300"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997ac"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-49-R",
			"2015",
			"Detached",
			"2-Storey",
			"41.03 x 109.97 Feet",
			"1x2xMain, 1x3x2nd, 1x3xBsmt, 1x4x2nd, 1x5x2nd",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997ad"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"38.06 x 94.43 Feet",
			"1x2xMain, 1x5x2nd, 2x4x2nd",
			"905-672-1234"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997ae"),
		"Undefined" : [
			"Brampton",
			"Northwood Park",
			"Peel",
			"452-41-V",
			"2015",
			"Detached",
			"2-Storey",
			"52.82 x 91.38 Feet",
			"1x2xMain, 1x4xUpper, 1x5xUpper, 1x2xBsmt",
			"905-456-1000"
		]
	},
	{
		"_id" : ObjectId("578709ebe40ebb0d6b2997af"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"438-48-P",
			"2015",
			"Detached",
			"2-Storey",
			"38.06 x 93.22 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-913-8500"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b0"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"446-50-Q",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 90 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x3xBsmt",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b1"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-U",
			"2016",
			"Detached",
			"2-Storey",
			"45.01 x 85.3 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd, 1x4x2nd, 1x4xBsmt",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b2"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"451-39-V",
			"2016",
			"Detached",
			"2-Storey",
			"38 x 101 Feet",
			"1x4x2nd, 1x3x2nd, 1x3x2nd, 1x2xMain",
			"905-896-3333"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b3"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-T",
			"2016",
			"Detached",
			"2-Storey",
			"60 x 90 Feet",
			"1x5x2nd, 2x4x2nd, 1x2xMain, 1x4xBsmt",
			"905-456-3232"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b4"),
		"Undefined" : [
			"Brampton",
			"Bram East",
			"Peel",
			"446-55-T",
			"2016",
			"Detached",
			"2-Storey",
			"38.06 x 90.22 Feet",
			"1x4x2nd, 2x3x2nd, 1x2xMain, 1x3xBsmt",
			"905-456-9090"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b5"),
		"Undefined" : [
			"Brampton",
			"Sandringham-Wellington",
			"Peel",
			"451-39-W",
			"2015",
			"Detached",
			"2-Storey",
			"38.06 x 90.22 Feet",
			"1x5x2nd, 1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-793-1111"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b6"),
		"Undefined" : [
			"Brampton",
			"Vales of Castlemore North",
			"Peel",
			"444-40-Q",
			"2015",
			"Detached",
			"2-Storey",
			"48.77 x 105.13 Feet",
			"1x5x2nd, 2x4x2nd, 1x3xMain",
			"416-748-0020"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b7"),
		"Undefined" : [
			"Brampton",
			"Credit Valley",
			"Peel",
			"444-39-U",
			"2015",
			"Detached",
			"3-Storey",
			"50 x 98.43 Feet",
			"1x2xMain, 1x4xBsmt, 3x5x2nd, 1x4x3rd",
			"905-268-1000"
		]
	},
	{
		"_id" : ObjectId("578709ece40ebb0d6b2997b8"),
		"Undefined" : [
			"Brampton",
			"Snelgrove",
			"Peel",
			"2015",
			"Detached",
			"2-Storey",
			"68.23 x 248.79 Feet",
			"1x2xMain, 1x3x2nd, 2x4x2nd, 1x5x2nd",
			"416-299-1911"
		]
	},
	{
		"_id" : ObjectId("578709eee40ebb0d6b2997bd"),
		"Undefined" : [
			"Caledon",
			"Bolton North",
			"Peel",
			"432-62-H",
			"2016",
			"Detached",
			"2-Storey",
			"35.32 x 132.37 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"416-987-8000"
		]
	},
	{
		"_id" : ObjectId("578709efe40ebb0d6b2997be"),
		"Undefined" : [
			"Caledon",
			"Bolton West",
			"Peel",
			"2016",
			"Detached",
			"2-Storey",
			"34.45 x 150.88 Feet",
			"1x2xMain, 2x5x2nd, 1x3xBsmt",
			"877-895-5972"
		]
	},
	{
		"_id" : ObjectId("578709efe40ebb0d6b2997bf"),
		"Undefined" : [
			"Caledon",
			"Rural Caledon",
			"Peel",
			"438-45-O",
			"2016",
			"Detached",
			"2-Storey",
			"45 x 100 Feet",
			"1x2xMain, 1x4x2nd, 1x5x2nd",
			"905-487-6000"
		]
	},
	{
		"_id" : ObjectId("578709fae40ebb0d6b2997d0"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"444-33-Q",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 110 Feet",
			"1x4x2nd, 1x2xMain",
			"905-796-8888"
		]
	},
	{
		"_id" : ObjectId("578709fae40ebb0d6b2997d1"),
		"Undefined" : [
			"Milton",
			"Coates",
			"Halton",
			"456-23-C",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23.2 x 114.82 Feet",
			"1x4x2nd, 1x3x2nd, 1x2xMain",
			"905-821-3200"
		]
	},
	{
		"_id" : ObjectId("578709fae40ebb0d6b2997d2"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"436-32-O",
			"2016",
			"Detached",
			"Bungalow",
			"50 x 100 Feet",
			"1x4xMain, 1x2xBsmt",
			"289-891-8181"
		]
	},
	{
		"_id" : ObjectId("578709fae40ebb0d6b2997d3"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"456-20-B",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"24.51 x 96.6 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("578709fae40ebb0d6b2997d4"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"100 x 198 Feet",
			"1x4xMain, 1x2xBsmt",
			"519-856-4348"
		]
	},
	{
		"_id" : ObjectId("578709fae40ebb0d6b2997d5"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-A",
			"2016",
			"Detached",
			"2-Storey",
			"32.41 x 88.81 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"905-568-2121"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997d6"),
		"Undefined" : [
			"Milton",
			"Timberlea",
			"Halton",
			"456-23-B",
			"2016",
			"Link",
			"Other",
			"32.48 x 108.27 Feet",
			"2x4",
			"905-896-4622"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997d7"),
		"Undefined" : [
			"Milton",
			"Old Milton",
			"Halton",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"65.85 x 212 Feet",
			"1x4xGround",
			"905-875-2100"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997d8"),
		"Undefined" : [
			"Milton",
			"Beaty",
			"Halton",
			"456-24-D",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 109.91 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"905-949-8866"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997d9"),
		"Undefined" : [
			"Milton",
			"Clarke",
			"Halton",
			"456-25-A",
			"2016",
			"Detached",
			"2-Storey",
			"35.99 x 88.58 Feet",
			"1x2xMain, 1x4x2nd, 1x4x2nd",
			"416-286-3993"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997da"),
		"Undefined" : [
			"Halton Hills",
			"Georgetown",
			"Halton",
			"2015",
			"Detached",
			"Sidesplit 3",
			"140 x 331 Feet",
			"1x2xGround, 1x4x2nd",
			"Workshop",
			"800-834-5516"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997db"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2016",
			"Detached",
			"Other",
			"150 x 290 Feet",
			"1x3xMain, 1x4xUpper",
			"905-877-5211"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997dc"),
		"Undefined" : [
			"Milton",
			"Scott",
			"Halton",
			"2016",
			"Detached",
			"2-Storey",
			"12.33 x 27.05 Metres",
			"1x2xMain, 2x4x2nd",
			"800-468-8896"
		]
	},
	{
		"_id" : ObjectId("578709fbe40ebb0d6b2997dd"),
		"Undefined" : [
			"Halton Hills",
			"Rural Halton Hills",
			"Halton",
			"2015",
			"Detached",
			"Bungalow-Raised",
			"792.85 x 464 Feet",
			"1x2xMain, 1x4xMain, 1x6xMain, 1x3xBsmt",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("57870a0ae40ebb0d6b2997f3"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-26-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 44.29 Feet",
			"1x2x2nd, 1x4x3rd, 1x3x3rd",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("57870a0ae40ebb0d6b2997f4"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-20-P",
			"2015",
			"Att/Row/Twnhouse",
			"2-Storey",
			"23 x 82.67 Feet",
			"2x4x2nd, 1x2xGround",
			"905-637-1700"
		]
	},
	{
		"_id" : ObjectId("57870a0ae40ebb0d6b2997f5"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-26-R",
			"2016",
			"Semi-Detached",
			"Bungalow",
			"35 x 125 Feet",
			"1x4xMain, 1x3xLower",
			"866-381-7676"
		]
	},
	{
		"_id" : ObjectId("57870a0ae40ebb0d6b2997f6"),
		"Undefined" : [
			"Oakville",
			"Rural Oakville",
			"Halton",
			"471-26-M",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"21 x 44.29 Feet",
			"1x2x2nd, 1x4x3rd, 1x3x3rd",
			"905-337-5930"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997f7"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-19-U",
			"2016",
			"Detached",
			"2-Storey",
			"49.2 x 115 Feet",
			"1x2xMain, 1x4x2nd, 1x2x2nd",
			"905-842-8000"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997f8"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-U",
			"2016",
			"Att/Row/Twnhouse",
			"3-Storey",
			"20.01 x 49.18 Feet",
			"1x4x3rd, 1x2x2nd",
			"905-502-1500"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997f9"),
		"Undefined" : [
			"Oakville",
			"West Oak Trails",
			"Halton",
			"470-23-N",
			"2016",
			"Detached",
			"2-Storey",
			"39.34 x 79.89 Feet",
			"1x2, 3x4",
			"416-321-2228"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997fa"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-28-N",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"26.44 x 96.24 Feet",
			"1x2xMain, 1x5x2nd, 1x4x2nd",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997fb"),
		"Undefined" : [
			"Oakville",
			"River Oaks",
			"Halton",
			"470-24-N",
			"2016",
			"Detached",
			"2-Storey",
			"36.09 x 111.55 Feet",
			"1x4x2nd, 1x4x2nd, 1x2xMain",
			"905-855-2200"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997fc"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-18-U",
			"2016",
			"Detached",
			"2-Storey",
			"50.79 x 88.58 Feet",
			"1x2xGround, 1x4x2nd, 1x4x2nd, 1x2xBsmt",
			"905-825-7777"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997fd"),
		"Undefined" : [
			"Oakville",
			"Bronte West",
			"Halton",
			"476-21-U",
			"2016",
			"Detached",
			"Sidesplit 4",
			"60 x 125 Feet",
			"1x4xUpper, 1x2xLower",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997fe"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-32-T",
			"2015",
			"Detached",
			"2-Storey",
			"33.16 x 78.91 Feet",
			"1x4x2nd, 1x2xGround",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b2997ff"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-P",
			"2016",
			"Detached",
			"2-Storey",
			"47.67 x 109.91 Feet",
			"1x2xGround, 1x3x2nd, 1x4x2nd",
			"905-822-6900"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b299800"),
		"Undefined" : [
			"Oakville",
			"College Park",
			"Halton",
			"477-26-R",
			"2016",
			"Detached",
			"Sidesplit 4",
			"113 x 150 Feet",
			"1x2xMain, 1x5x2nd, 1x2xLower",
			"905-828-3434"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b299801"),
		"Undefined" : [
			"Oakville",
			"Iroquois Ridge North",
			"Halton",
			"471-29-P",
			"2016",
			"Detached",
			"2-Storey",
			"46.3 x 109.91 Feet",
			"1x2xMain, 1x3x2nd, 1x4x2nd",
			"905-828-6550"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b299802"),
		"Undefined" : [
			"Oakville",
			"Glen Abbey",
			"Halton",
			"470-23-Q",
			"2016",
			"Detached",
			"2-Storey",
			"56.07 x 120.08 Feet",
			"1x2xMain, 1x5x2nd, 1x5x2nd, 1x3xBsmt",
			"905-849-3315"
		]
	},
	{
		"_id" : ObjectId("57870a0be40ebb0d6b299803"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"2016",
			"Detached",
			"Bungalow",
			"60 x 180 Feet",
			"1x4xMain, 1x3xBsmt",
			"905-845-4267"
		]
	},
	{
		"_id" : ObjectId("57870a0ce40ebb0d6b299804"),
		"Undefined" : [
			"Oakville",
			"Eastlake",
			"Halton",
			"477-31-S",
			"2016",
			"Detached",
			"2-Storey",
			"48.72 x 114.93 Feet",
			"1x2xGround, 2x5x2nd, 1x3x2nd, 1x2xLower, 1x3xLower",
			"905-842-7000"
		]
	},
	{
		"_id" : ObjectId("57870a0ce40ebb0d6b299805"),
		"Undefined" : [
			"Oakville",
			"Old Oakville",
			"Halton",
			"477-26-U",
			"2016",
			"Detached",
			"2-Storey",
			"60 x 160 Feet",
			"1x2xMain, 1x5xMain, 1x5x2nd, 1x3xLower",
			"905-338-9000"
		]
	},
	{
		"_id" : ObjectId("57870a12e40ebb0d6b299810"),
		"Undefined" : [
			"Burlington",
			"Grindstone",
			"Halton",
			"468-4-Q",
			"2016",
			"Detached",
			"Bungalow",
			"46 x 374 Feet",
			"1x4xGround",
			"905-844-5000"
		]
	},
	{
		"_id" : ObjectId("57870a12e40ebb0d6b299811"),
		"Undefined" : [
			"Burlington",
			"Shoreacres",
			"Halton",
			"475-15-T",
			"2016",
			"Att/Row/Twnhouse",
			"2-Storey",
			"18.04 x 98.43 Feet",
			"1x2xMain, 2x4x2nd",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("57870a12e40ebb0d6b299812"),
		"Undefined" : [
			"Burlington",
			"Brant",
			"Halton",
			"475-10-T",
			"2016",
			"Detached",
			"1 1/2 Storey",
			"50 x 102 Feet",
			"1x4xMain, 1x3xLower",
			"905-335-8808"
		]
	},
	{
		"_id" : ObjectId("57870a13e40ebb0d6b299813"),
		"Undefined" : [
			"Burlington",
			"Mountainside",
			"Halton",
			"475-10-R",
			"2016",
			"Detached",
			"Bungalow",
			"70 x 120 Feet",
			"1x4xUpper, 1x3xLower",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("57870a13e40ebb0d6b299814"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-14-N",
			"2016",
			"Detached",
			"Bungalow",
			"42.65 x 109.91 Feet",
			"1x4xGround, 1x2xGround, 1x3xBsmt",
			"905-844-2022"
		]
	},
	{
		"_id" : ObjectId("57870a13e40ebb0d6b299815"),
		"Undefined" : [
			"Burlington",
			"Headon",
			"Halton",
			"2015",
			"Detached",
			"Bungalow",
			"50 x 100 Feet",
			"1x3xMain, 1x4xBsmt",
			"800-567-6257"
		]
	},
	{
		"_id" : ObjectId("57870a13e40ebb0d6b299816"),
		"Undefined" : [
			"Burlington",
			"Rose",
			"Halton",
			"469-14-N",
			"2016",
			"Detached",
			"2-Storey",
			"59.71 x 110.96 Feet",
			"1x2xMain, 2x4x2nd, 1x3xBsmt",
			"12",
			"4 Pc Bath",
			"905-845-9180"
		]
	},
	{
		"_id" : ObjectId("57870a13e40ebb0d6b299817"),
		"Undefined" : [
			"Burlington",
			"Orchard",
			"Halton",
			"470-18-P",
			"2016",
			"Detached",
			"2-Storey",
			"50 x 120 Feet",
			"1x2xMain, 2x4x2nd, 1x5x2nd, 1x4xBsmt",
			"905-297-7777"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999d5"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-19-M",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-286-5888"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999d6"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"866-336-9637"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999d7"),
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
		"_id" : ObjectId("57870b14e40ebb0d6b2999d8"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-218-9898"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999da"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-19-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-467-5050"
		]
	},
	{
		"_id" : ObjectId("57870b14e40ebb0d6b2999db"),
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
		"_id" : ObjectId("57870b14e40ebb0d6b2999de"),
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
		"_id" : ObjectId("57870b15e40ebb0d6b2999e1"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"2016",
			"Condo Apt",
			"2-Storey",
			"1x4xUpper, 1x2xLower",
			"416-483-8000"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e2"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-17-T",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x3, 1x4",
			"905-471-1181"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e3"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-20-R",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-922-5533"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e4"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"120-19-R",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-928-6833"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e5"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"120-18-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"416-444-7653"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e8"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x3xMain",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999e9"),
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
		"_id" : ObjectId("57870b15e40ebb0d6b2999ea"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-20-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"416-494-7653"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999eb"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"647-347-8055"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999ed"),
		"Undefined" : [
			"Toronto C11",
			"Flemingdon Park",
			"Toronto",
			"116-26-L",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x4",
			"416-686-1500"
		]
	},
	{
		"_id" : ObjectId("57870b15e40ebb0d6b2999ee"),
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
		"_id" : ObjectId("57870b15e40ebb0d6b2999ef"),
		"Undefined" : [
			"Toronto C01",
			"Niagara",
			"Toronto",
			"120-17-T",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x3xFlat",
			"905-477-1818"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f1"),
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
		"_id" : ObjectId("57870b16e40ebb0d6b2999f2"),
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
		"_id" : ObjectId("57870b16e40ebb0d6b2999f3"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-698-2090"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f4"),
		"Undefined" : [
			"Toronto C01",
			"Little Portugal",
			"Toronto",
			"119-15-S",
			"2015",
			"Condo Apt",
			"Loft",
			"1x4xMain, 1x2xMain",
			"416-203-8838"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f5"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-270-2000"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f6"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant West",
			"Toronto",
			"115-20-L",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"905-889-2200"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f7"),
		"Undefined" : [
			"Toronto C01",
			"University",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-764-7111"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999f8"),
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
		"_id" : ObjectId("57870b16e40ebb0d6b2999f9"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-491-4002"
		]
	},
	{
		"_id" : ObjectId("57870b16e40ebb0d6b2999fa"),
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
		"_id" : ObjectId("57870b16e40ebb0d6b2999fb"),
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
		"_id" : ObjectId("57870b16e40ebb0d6b2999fc"),
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
		"_id" : ObjectId("57870b16e40ebb0d6b2999fe"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"905-940-8999"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b2999ff"),
		"Undefined" : [
			"Toronto C08",
			"Waterfront Communities C8",
			"Toronto",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain, 1x2xMain",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b299a01"),
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
		"_id" : ObjectId("57870b17e40ebb0d6b299a02"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-18-P",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x3",
			"416-487-5131"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b299a03"),
		"Undefined" : [
			"Toronto C01",
			"Waterfront Communities C1",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4, 1x3",
			"416-203-6636"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b299a04"),
		"Undefined" : [
			"Toronto C08",
			"Church-Yonge Corridor",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xMain, 1x4xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b299a05"),
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
		"_id" : ObjectId("57870b17e40ebb0d6b299a06"),
		"Undefined" : [
			"Toronto C10",
			"Mount Pleasant East",
			"Toronto",
			"115-21-M",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4, 1x3, 1x2",
			"416-960-9995"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b299a07"),
		"Undefined" : [
			"Toronto C01",
			"Bay Street Corridor",
			"Toronto",
			"120-19-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x2xMain, 1x3xMain, 1x5xMain",
			"416-925-9191"
		]
	},
	{
		"_id" : ObjectId("57870b17e40ebb0d6b299a08"),
		"Undefined" : [
			"Toronto C02",
			"Annex",
			"Toronto",
			"115-19-Q",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x6, 1x3, 1x2",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a1e"),
		"Undefined" : [
			"Toronto C04",
			"Englemount-Lawrence",
			"Toronto",
			"109-17-G",
			"2016",
			"Co-Op Apt",
			"Apartment",
			"1x4xMain",
			"416-769-1616"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a20"),
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
		"_id" : ObjectId("57870b25e40ebb0d6b299a21"),
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
		"_id" : ObjectId("57870b25e40ebb0d6b299a24"),
		"Undefined" : [
			"Toronto C07",
			"Newtonbrook West",
			"Toronto",
			"103-20-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-883-4922"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a26"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-E",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a27"),
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
		"_id" : ObjectId("57870b25e40ebb0d6b299a28"),
		"Undefined" : [
			"Toronto C07",
			"Willowdale West",
			"Toronto",
			"103-20-D",
			"2015",
			"Comm Element Condo",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"905-695-7888"
		]
	},
	{
		"_id" : ObjectId("57870b25e40ebb0d6b299a29"),
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
		"_id" : ObjectId("57870b26e40ebb0d6b299a2b"),
		"Undefined" : [
			"Toronto C14",
			"Willowdale East",
			"Toronto",
			"103-21-D",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"647-478-8000"
		]
	},
	{
		"_id" : ObjectId("57870b26e40ebb0d6b299a2c"),
		"Undefined" : [
			"Toronto C15",
			"Henry Farm",
			"Toronto",
			"104-26-E",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x2, 2x4",
			"416-489-2121"
		]
	},
	{
		"_id" : ObjectId("57870b26e40ebb0d6b299a2d"),
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
		"_id" : ObjectId("57870b26e40ebb0d6b299a2e"),
		"Undefined" : [
			"Toronto C15",
			"Hillcrest Village",
			"Toronto",
			"104-26-C",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x5xFlat, 1x4xFlat",
			"416-445-8855"
		]
	},
	{
		"_id" : ObjectId("57870b26e40ebb0d6b299a2f"),
		"Undefined" : [
			"Toronto C13",
			"Banbury-Don Mills",
			"Toronto",
			"109-24-G",
			"2016",
			"Condo Townhouse",
			"2-Storey",
			"1x4x2nd, 1x2x2nd, 1x2xMain",
			"416-441-2888"
		]
	},
	{
		"_id" : ObjectId("57870b26e40ebb0d6b299a30"),
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
		"_id" : ObjectId("57870b2fe40ebb0d6b299a3e"),
		"Undefined" : [
			"Toronto E11",
			"Malvern",
			"Toronto",
			"105-37-D",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xFlat, 1x4xFlat",
			"416-479-3891"
		]
	},
	{
		"_id" : ObjectId("57870b2fe40ebb0d6b299a40"),
		"Undefined" : [
			"Toronto E04",
			"Dorset Park",
			"Toronto",
			"110-31-G",
			"2015",
			"Condo Apt",
			"Multi-Level",
			"1x4",
			"416-321-6969"
		]
	},
	{
		"_id" : ObjectId("57870b2fe40ebb0d6b299a42"),
		"Undefined" : [
			"Toronto E09",
			"Morningside",
			"Toronto",
			"111-38-G",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"416-490-1068"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a44"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"647-351-8811"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a45"),
		"Undefined" : [
			"Toronto E05",
			"L'Amoreaux",
			"Toronto",
			"104-30-C",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4",
			"905-305-1600"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a46"),
		"Undefined" : [
			"Toronto E09",
			"Bendale",
			"Toronto",
			"111-33-G",
			"2016",
			"Condo Apt",
			"Apartment",
			"1x4xFlat",
			"905-764-8688"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a47"),
		"Undefined" : [
			"Toronto E07",
			"Agincourt South-Malvern West",
			"Toronto",
			"2015",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-415-1000"
		]
	},
	{
		"_id" : ObjectId("57870b30e40ebb0d6b299a49"),
		"Undefined" : [
			"Toronto E01",
			"South Riverdale",
			"Toronto",
			"120-22-S",
			"2016",
			"Condo Apt",
			"Loft",
			"1x4",
			"416-637-8000"
		]
	},
	{
		"_id" : ObjectId("57870b3be40ebb0d6b299a58"),
		"Undefined" : [
			"Toronto W05",
			"Humberlea-Pelmo Park W5",
			"Toronto",
			"102-9-E",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"416-489-3434"
		]
	},
	{
		"_id" : ObjectId("57870b3be40ebb0d6b299a59"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xMain",
			"905-895-2882"
		]
	},
	{
		"_id" : ObjectId("57870b3ce40ebb0d6b299a5b"),
		"Undefined" : [
			"Toronto W10",
			"Elms-Old Rexdale",
			"Toronto",
			"102-9-E",
			"2015",
			"Condo Townhouse",
			"3-Storey",
			"1x4x3rd, 1x3x2nd, 1x2xGround",
			"416-800-0812"
		]
	},
	{
		"_id" : ObjectId("57870b3ce40ebb0d6b299a5c"),
		"Undefined" : [
			"Toronto W08",
			"Etobicoke West Mall",
			"Toronto",
			"113-4-P",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4xMain",
			"416-298-8200"
		]
	},
	{
		"_id" : ObjectId("57870b3ce40ebb0d6b299a5d"),
		"Undefined" : [
			"Toronto W10",
			"Mount Olive-Silverstone-Jamestown",
			"Toronto",
			"101-6-B",
			"2016",
			"Condo Apt",
			"Apartment",
			"2x4xFlat",
			"905-857-7653"
		]
	},
	{
		"_id" : ObjectId("57870b3ce40ebb0d6b299a5e"),
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
		"_id" : ObjectId("57870b3ce40ebb0d6b299a5f"),
		"Undefined" : [
			"Toronto W06",
			"Mimico",
			"Toronto",
			"119-10-S",
			"2015",
			"Condo Apt",
			"Apartment",
			"1x4",
			"905-456-1177"
		]
	},
	{
		"_id" : ObjectId("57870b3ce40ebb0d6b299a60"),
		"Undefined" : [
	{