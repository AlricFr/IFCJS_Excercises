let objects = [ {
    'name' : 'Wall 2',
    'ifcClass' : 'IfcWall',
    'dimensions' : null
	},
	{
    'name' : 'Column',
    'ifcClass' : 'IfcColumn',
    'dimensions' : null 
	},
	{
    'name' : 'Paving Zahorra ',
    'ifcClass' : 'IfcBuildingElementProxy',
    'dimensions' : null 
	},
	{
    'name' : 'Roof',
    'ifcClass' : 'IfcSlab',
    'dimensions' : null 
	}
];

let lastItem = objects.pop();

lastItem.name = "New Roof";

objects.splice(0, 0, lastItem);

console.log(lastItem);