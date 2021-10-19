"use strict";
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b,
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }

// Задача 1

function buttonTask1() {
	let elem = document.getElementById("task-1");
	elem.innerHTML = "Ку-ку! А я <b>Жирный</b>";
}

// Задача 2
function buttonTask2() {
	let elem = document.getElementById("task-2");
	elem.outerHTML = "<h3>Абзац превратился в H3</3>";
}

// Задача 3

function buttonTask3() {
	let elem = document.querySelector("#task-3");
	elem.outerHTML = `<h3>${elem.innerHTML}</h3>`;
}

// Задача 4

function buttonTask4() {
	let myInput1 = +document.querySelector(".task-4-1").value;
	let myInput2 = +document.querySelector(".task-4-2").value;
	let out = document.querySelector(".out");
	out.innerHTML = myInput1 + myInput2;
}

// Задача 5

function func() {
	let elems = document.getElementsByTagName("p");
	for (let i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i;
	}
}
