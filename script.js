"use strict";
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('src'));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в
//атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее
//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll("a");
// for (let i = 0; i < elems.length; i++) {
// 	elems[i].addEventListener("mouseover", func);
// }
// function func() {
// 	this.innerHTML = this.innerHTML + "(" + this.href + ")";
// 	this.removeEventListener("mouseover", func);
// }
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый
//инпут выводит свое value в абзац с id="test"

// let inputs = document.querySelectorAll("input");
// let p = document.querySelector("#test");

// for (let i = 0; i < inputs.length; i++) {
// 	inputs[i].addEventListener("focusout", func);
// }

// function func() {
// 	p.innerHTML = this.value;
// }

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом
//при нажатии на любой из них, но только по первому нажатию. Повторное
//нажатие на инпут не должно вызывать реакции.

// let inputs = document.querySelectorAll("input");

// for (let i = 0; i < inputs.length; i++) {
// 	inputs[i].addEventListener("click", func);
// }

// function func() {
// 	alert(this.value);
// 	this.removeEventListener("click", func);
// }
// Даны абзацы с числами. По нажатию на абзац в нем должен появится
//квадрат числа, которое он содержит.

let p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
	p[i].addEventListener("click", func);
}

function func() {
	this.innerHTML = (+this.innerText) ** 2;
}
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли
//свое содержимое на правильное количество символов. Сколько символов
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито
//правильное количество, то граница инпута становится зеленой, если
//неправильное - красной.

// let inputs = document.getElementsByTagName("input");

// for (let i = 0; i < inputs.length; i++) {
// 	inputs[i].addEventListener("focusout", func);
// }

// function func() {
// 	if (+this.getAttribute("data-length") === +this.value.length) {
// 		this.style.borderColor = "green";
// 	} else {
// 		this.style.borderColor = "red";
// 	}
// }
