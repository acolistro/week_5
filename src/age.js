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