var personProto = {
        calculateAge: function() {
                console.log(2020 - this.yearoOfBirth);
        }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearoOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
        name: { value: 'Jane' },
        yearoOfBirth: { value: 1969 },
        job: { value: 'designer' }
});