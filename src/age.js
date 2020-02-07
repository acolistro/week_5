export function Age(earthAge) {
    this.earthAge = earthAge;
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
    const mercAge = this.earthAge / 0.24;
    return mercAge;
}

Age.prototype.toVenus = function () {
    const venAge = this.earthAge / 0.62;
    return venAge;
}

Age.prototype.toMars = function () {
    const marsAge = this.earthAge / 1.88;
    return marsAge;
}

Age.prototype.toJupiter = function () {
    const jupiterAge = this.earthAge / 11.86;
    return jupiterAge;
}