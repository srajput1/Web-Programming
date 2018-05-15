
const bcrypt   = require('bcrypt-nodejs');

let users = [
                {
                    _id           :1,
                    username     : "masterdetective123",
                    firstname    : "Sherlock",
                    lastname     : "Holmes",
                    profession   : "Detective",
                    bio          : "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a 'consulting detective' in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
                    password     :  "$2a$06$gluDGG0QVh03V/SdJNsuI.UylVi6ay94vUfULsKrowk7jebHYQHim"
                    },
                    {
                    _id           :2,
                    username     : "lemon",
                    firstname    : "Elizabeth",
                    lastname     : "Lemon",
                    profession   : "Writer",
                    bio          : "Elizabeth Miervaldis 'Liz' Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.",
                    password     : "$2a$06$tU8agdIu7OWgdIdwZ2AmxeGJmOt0BijGWbRms2h9FqkBcV1Ya3PZ."
                    },
                    {
                    _id           :3,
                    username     : "theboywholived",
                    firstname    : "Harry",
                    lastname     : "Potter",
                    profession   : "Student",
                    bio          : "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
                    password     : "$2a$06$7GldyOqbriGM2Z2nHx8jDORPZnGYmUWtoiXGrVAyf2nQ4vvRXCRNm"
                }
            ];


let exportedMethods = {

    getUser: (username, done) => {
        process.nextTick(function() {
            for (var i = 0, len = users.length; i < len; i++) {
                var record = users[i];
                if (record.username === username) {
                    return done(null, record); 
                }
            }
            return done(null, null);
        });
    },
    getUserById: function(id, done) {
        process.nextTick(function() {
            var ID = id-1;
            if (users[ID]) {
                done(null, users[ID]);
            } else {
                done(new Error('User ' + id + ' does not exist'));
            }
        });
    }
}

module.exports = exportedMethods;