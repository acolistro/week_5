export function Age(earthAge) {
    this.earthAge = earthAge;
    this.earthExpect = 75 - earthAge;
    this.mercDiff = 0.24;
    this.venDiff = 0.62;
    this.marsDiff = 1.88;
    this.jupDiff = 11.86;
} 

Age.prototype.posNumCheck = function () {
    if (typeof this.earthAge !== 'number') {
        return "please enter a number";
    } else if (this.earthAge < 0) {
        return "please enter a positive number";    
    } else {
        return true;
    }
}

Age.prototype.toMercury = function () {
    const mercAge = this.earthAge / this.mercDiff;
    this.mercSolar = parseInt(mercAge);
    let mercLeft = this.earthExpect / this.mercDiff;
    this.mercExpect = parseFloat(mercLeft);
}

Age.prototype.toVenus = function () {
    const venAge = this.earthAge / this.venDiff;
    this.venSolar = parseInt(venAge);
    let venLeft = this.venExpect / this.venDiff;
}

Age.prototype.toMars = function () {
    const marsAge = this.earthAge / this.marsDiff;
    this.marsSolar = parseInt(marsAge);
}

Age.prototype.toJupiter = function () {
    const jupAge = this.earthAge / this.jupDiff;
    this.jupSolar = parseInt(jupAge);
}
