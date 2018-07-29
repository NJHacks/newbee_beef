class BeefType{
	static constructor(){
		this.RARE = 1;
		this.MEDIUM = 2;
		this.WELDON = 3;
	}

	static randomBeefType(){
		const beefTypeList = [this.RARE, this.MEDIUM, this.WELDON];
		const key = Math.floor(Math.random() * 3);

		return beefTypeList[key];
	}
}

export default BeefType;