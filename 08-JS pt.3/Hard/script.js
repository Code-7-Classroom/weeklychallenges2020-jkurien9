var person = (function (personalData) {
    var pii = {
        name: 'Jackie Kurien',
        ssn: '000-00-0000'
    }
    return public = {
        getName: function getName() {
            return pii.name; 
        }
    };

})();
console.log(person.getName());



