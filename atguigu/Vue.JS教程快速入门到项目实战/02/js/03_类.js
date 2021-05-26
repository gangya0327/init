;
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.fullName + '-' + this.lastName;
        }
        return Person;
    }());
    function showFullName(person) {
        return person.lastName + '-' + person.lastName;
    }
    var person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
