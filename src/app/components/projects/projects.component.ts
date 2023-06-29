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
      repo: "https://github.com/GGuilleGutierrez/FinalProyect_Frontend",
      deploy: ""
    },
    {
      id: 2,
      show: false,
      title: "APOD",
      subtitle: "Angular",
      video: "https://www.canva.com/design/DAFnO8CpzO4/hY9OvuBQ2AhpMoC8psnaaQ/edit?utm_content=DAFnO8CpzO4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      text1: "Aplicación web que renderiza los datos de NASA APOD",
      text2: "Te recibe un banner, en el cual se presenta información útil sobre NASA APOD. Y luego se puede encontrar el componente de navegación para realizar las distintas consultas disponiles a la API de NASA APOD.",
      text3: "-Back-end: consume API pública de NASA. -Front-end: desarrollado en Angular (TypeScript, HTML5, CSS3), implementando: TailwindCSS, HttpClient, Angular material, Angular Animations, Reactive Forms,  etc.",
      repo: "https://github.com/GGuilleGutierrez/NASA-APOD",
      deploy: "https://apod-gg.vercel.app/"
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
