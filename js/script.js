//Create the Moon, Lander and Rover as separate objects using whatever approach you feel comfortable using.
//Give the objects the methods to perform the tasks outlined below.

//'Land' as a concept simply means the element is appended to the other element.


// The Lander can land on the Moon
// The Lander will land in a random position on the Moon
// The Rover can disembark the Lander
// The Rover will disembark initially at the Landers position
// The Rover can move around the Moon





var moon = new Moon('#moon'),
	lander = new Lander('#lander');

lander.land(moon);

