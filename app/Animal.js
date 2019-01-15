class Animal {
	
	constructor(name,height) {
		this.name = name;
		this.height = height;
	}

	hello(){
		console.log(`Hi! I'm ${this.name} from kingdom.`)
	}

}

export default Animal;
