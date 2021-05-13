;
(function () {
    function shwoFullName(person) {
        return person.firstName + '-' + person.lastName;
    }
    var person = {
        firstName: 'peter',
        lastName: 'raven',
    };
    console.log(shwoFullName(person));
})();
