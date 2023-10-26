"use strict";

/*Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// Пример использования класса
const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123" */

class Book {
  title;
  author;
  pages;

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(
      `Title: "${this.title}"\nAuthor: ${this.author}\nNumber_of_pages: ${this.pages}\n`
    );
  }
}

const book1 = new Book("Amsterdam", "Ien McQeen", 334);
const book2 = new Book("Thirteenth Fairytale", "Idiana Setterfield", 456);

book1.displayInfo();
book2.displayInfo();

/*Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

// Пример использования класса
const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"*/

class Student {
  name;
  age;
  grade;

  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\n`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Russel Cain", 15, "9th grade");
student2.displayInfo();
