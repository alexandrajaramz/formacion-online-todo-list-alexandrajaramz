'use strict';

const addBtn = document.querySelector('.add-btn');
const newCardSection = document.querySelector('.new-card');
const newTaskInput = document.querySelector('.new-task__input');
const newTaskBtn = document.querySelector('.new-task__btn');
const taskList = document.querySelector('.card__list');

function showNewTask() {
  newCardSection.classList.toggle('hidden');
}

function writeNewTask() {
  const newTaskName = newTaskInput.value;
  taskList.innerHTML += `<li>${newTaskName}</li>`;
  newCardSection.classList.toggle('hidden');
}

addBtn.addEventListener('click', showNewTask);
newTaskBtn.addEventListener('click', writeNewTask);
