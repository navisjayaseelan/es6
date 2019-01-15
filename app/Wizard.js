function Wizard(name, house, pet) {
	this.name = name;
	this.house = house;
	this.pet = pet;

	this.greet = () => `I'm ${this.name} from ${this.house}`
}
