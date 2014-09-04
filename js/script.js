// Model the Moon, Lander and Rover as separate objects
// The Lander can land on the Moon
// The Lander will land in a random position on the Moon
// The Rover can disembark the Lander
// The Rover will disembark initially at the Landers position
// The Rover can move around the Moon





var moon = new Moon('#moon'),
	lander = new Lander('#lander');

lander.land(moon);

