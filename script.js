let human = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 17,
}

let human2 = {...human}

human2.age = 20
human2.name = 'Artyom'


console.log(human, human2);
