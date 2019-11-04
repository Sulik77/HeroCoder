const JsQuestion = require('../questionJS');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HeroCoder', { useNewUrlParser: true });


const questionsJS = [
    {
        question: "Что выведет alert?",
        code: `
        let arr = [1, 2, 3];
        arr.something = 5;
        alert(arr.something); // ?` ,

        variants: ["5","undefined","Будет ошибка."],
        trueVariants: ["5"]
    },
    {
        question: "Внимательно посмотрите на синтаксис этого кода. Что он выведет?",
        code: `let f = function(x) {
              alert(x)
                }
             (function() {
                 f(1)
                     }())` ,
        variants: ["Никакого результата.","Выведет 1.","Выведет undefined.","Будет ошибка."],
        trueVariants: ["Будет ошибка."]
    },
    {
        question: `Объявлена функция:         
                 function F() {}
             Верно ли, что F instanceof Function?`,
        variants: ["Да.","Нет."],
        trueVariants: ["Да."]
    },
    {
        question: `Что такое ECMAScript?` ,
        variants: ["Новый язык программирования.","Переработанная реализация Javascript.","Спецификация языка Javascript."],
        trueVariants: ["Спецификация языка Javascript."]
    },
    {
        question: `После выполнения этого кода – в каких объектах из списка содержится свойство name?`,
        code: `
                    function User() { } 
                    let vasya = new User();
                    vasya.__proto__.name = "Vasya";` ,


        variants: ["vasya.__proto__","vasya.prototype","User.__proto__","User.prototype"],
        trueVariants: ["User.prototype","vasya.__proto__"]
    },
    {
        question: `Какие варианты вызова try..catch являются синтаксически верными в JavaScript?` ,
        variants: ["try { ... } без catch/finally.","try { ... } catch { ... }","try { ... } finally { ... }","try { ... } catch { ... } finally { ... }","В JavaScript не поддерживается try..catch."],
        trueVariants: ["try { ... } catch { ... }","try { ... } finally { ... }","try { ... } catch { ... } finally { ... }"]
    },
    {
        question: `Чему равно a + b + c?`,
        code: `
                    let a = 1;
                    let b = { toString() {return '1'} };
                    let c = 1;` ,


        variants: ["11[object Object]","2[object Object]","111","3"],
        trueVariants: ["111"]
    },
    {
        question: `Что выведет alert?`,
        code:`
                     let str = "Hello";
                     str.something = 5;
                    alert(str.something); // ?` ,

        variants: ["5","undefined","Будет ошибка."],
        trueVariants: ["Будет ошибка."]
    },
    {
        question: `Что выведет этот код?`,
        code:`
                    alert( +"Infinity" );` ,

        variants: ["Infinity","NaN","0","Будет ошибка."],
        trueVariants: ["Infinity"]
    },
    {
        question: "Язык JavaScript является подвидом языка Java – верно?" ,
        variants: ["Да.","Нет.","Наоборот, Java – подвид JavaScript."],
        trueVariants: ["Нет."]
    },
    {
        question: "Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов ?" ,
        variants: ["let f = function(a,b) { return a+b }",`let f = new Function("a,b", "return a+b")`,`let f = new Function("a", "b", "return a+b")
        `,`let f = (a, b) => a + b`,"let f = (a, b) => { a + b }"],
        trueVariants: ["let f = function(a,b) { return a+b }",`let f = new Function("a,b", "return a+b")`,`let f = new Function("a", "b", "return a+b")
        `,`let f = (a, b) => a + b`]
    },
    {
        question: "Какие из этих вариантов задают массив из элементов «a», «b»?" ,
        variants: [`let a = new Array("a","b")`,`let a = { "a", "b" }`,`let a = ( "a", "b" )`,`let a = [ "a", "b" ]`,`let a = "a,b".split(",")`],
        trueVariants: [`let a = new Array("a","b")`,`let a = [ "a", "b" ]`,`let a = "a,b".split(",")`]
    },
    {
        question: "Чему равно 0 || 1 && 2 || 3 ?" ,
        variants: ["0","1","2","3","true","false"],
        trueVariants: ["2"]
    },
    {
        question: `Чему равно такое выражение?`,
        code: `
                     [] + false - null + true` ,


        variants: ["0","NaN","undefined","1"],
        trueVariants: ["NaN"]
    },
    {
        question: "Что делает оператор **?" ,
        variants: ["Возводит в степень.","Умножает число само на себя.","Нет такого оператора."],
        trueVariants: ["Возводит в степень."]
    },
    {
        question: `Какое будет выведено значение?`,
        code:`
                         let x = 5;
                         alert( x++ );` ,


        variants: ["5","6","Другое."],
        trueVariants: ["5"]
    },
    {
        question: `Есть ли разница между выражениями?`,
        code:`
                         !!( a && b )

                         (a && b)` ,

        variants: ["Да.","Нет.","В первом выражении ошибка, что еще за «!!» ??"],
        trueVariants: ["Да."]
    },
    {
        question: "Что получится, если сложить true + false?" ,
        variants: [`"truefalse"`,"instanceof","constructor","parent","new","Все имеют специальное использование."],
        trueVariants: ["parent"]
    },
    {
        question: `Что выведет этот код?`,
        code:`
                            f.call(f);
                            function f() {
                            alert( this );
                          }`,
        variants: [`[object Object]`,"код функции f.","ошибка: слишком глубокая рекурсия.","ошибка: переменная f не определена.","другое."],
        trueVariants: ["код функции f."]
    },
]


JsQuestion.insertMany(questionsJS).then(() => {
    mongoose.connection.close();
}); 