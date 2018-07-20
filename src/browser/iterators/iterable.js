//объект Users итерируемый,
// так как он реализует метод Symbol.iterator

class Users{
    constructor(users){
        this.users = users;
    }

    //символьное свойство Symbol.iterator
    // хранит соответствующий метод

    [Symbol.iterator](){
        let i = 0;
        let users = this.users;

        //этот возвращаемый объект называется итератором

        return {
            next(){
                if (i<users.length) {
                    return { done: false, value: users[i++] };
                }

                return { done: true };
            },
        };
    }
}

// allUsers называют итерируемым объектом
const allUsers = new Users([
    { name: 'raja' },
    { name: 'john' },
    { name: 'matt' },
]);

// allUsersIterator называют итератором
const allUsersIterator = allUsers[Symbol.iterator]();

// Метод next возвращает следующее значение из набора данных
console.log(allUsersIterator.next());
// => { done: false, value: { name: 'raja' } }
console.log(allUsersIterator.next());
// => { done: false, value: { name: 'john' } }
console.log(allUsersIterator.next());
// => { done: false, value: { name: 'matt' } }

//Использование цикла for-of
for(const u of allUsers){
    console.log(u.name);
}
// здесь выводятся имена пользователей: raja, john, matt

//Использование оператора расширения
console.log([...allUsers]);
// здесь выводится массив объектов пользователей