import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  cards = [
    {
      id: 1,
      show: false,
      title: "E-commerce",
      subtitle: "Node.js / Angular / MySql",
      video: "https://www.canva.com/design/DAFlE0MvKMI/ohGutFzz6sYKEijGx9GYOQ/watch?utm_content=DAFlE0MvKMI&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel",
      text1: "Aplicación web tipo e-commerce simulando pequeña empresa familiar.",
      text2: "Te recibe una HomePage, tiene Login, Register y ProductsPage con filtro. Se puede valorar los productos con un rating de estrellas, y la compra se hace en una CartPage a través de Mercado Pago.Cuenta con funcionalidades especiales para admins: su propia RegisterPage privada, CRUD (crear, leer, editar y eliminar) de productos y disponibilidad de todos los usuarios creados con posibilidad de eliminarlos.",
      text3: "-Back-end: servidor desarrollado en JavaScript corrido con Node, se implementó: express, sequelize, jwt, bcrypt, etc. -Front-end: desarrollado en Angular (TypeScript, HTML5, CSS3), implementando: HttpClient, Angular material, Angular routing, Reactive Forms,  etc. -Base de datos: data guardada en BBDD de MySql, conectada a la API de node.",
      repo: "https://github.com/GGuilleGutierrez/FinalProyect_Frontend"
    }
  ]

  constructor(private elementRef: ElementRef) {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  checkScroll() {
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    this.cards.forEach((card) => {
      const cardElement = this.elementRef.nativeElement.querySelector(`.card:nth-child(${card.id})`);

      if (!cardElement) {
        return;
      }

      const cardTop = cardElement.offsetTop;

      if (scrollTop > cardTop - windowHeight * 0.8) {
        card.show = true;
      }
    });
  }
}
