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
      text1: "Aplicación web tipo e-commerce simulando pequeña empresa familiar.",
      text2: "Te recibe una HomePage, tiene Login, Register y ProductsPage con filtro. Se puede valorar los productos con un rating de estrellas, y la compra se hace en una CartPage a través de Mercado Pago.Cuenta con funcionalidades especiales para admins: su propia RegisterPage privada, CRUD (crear, leer, editar y eliminar) de productos y disponibilidad de todos los usuarios creados con posibilidad de eliminarlos.",
      text3: "-Back-end: servidor desarrollado en JavaScript corrido con Node, se implementó: express, sequelize, jwt, bcrypt, etc. -Front-end: desarrollado en Angular (TypeScript, HTML5, CSS3), implementando: HttpClient, Angular material, Angular routing, Reactive Forms,  etc. -Base de datos: data guardada en BBDD de MySql, conectada a la API de node.",
      repo: "https://github.com/GGuilleGutierrez/FinalProyect_Frontend",
      deploy: null
    },
    {
      id: 2,
      show: false,
      title: "APOD",
      subtitle: "Angular",
      text1: "Aplicación web que renderiza los datos de NASA APOD",
      text2: "Te recibe un banner, en el cual se presenta información útil sobre NASA APOD. Y luego se puede encontrar el componente de navegación para realizar las distintas consultas disponiles a la API de NASA APOD.",
      text3: "-Back-end: consume API pública de NASA. -Front-end: desarrollado en Angular (TypeScript, HTML5, CSS3), implementando: TailwindCSS, HttpClient, Angular material, Angular Animations, Reactive Forms,  etc.",
      repo: "https://github.com/GGuilleGutierrez/NASA-APOD",
      deploy: "https://apod-gg.vercel.app/"
    },
    {
      id: 3,
      show: false,
      title: "Portfolio",
      subtitle: "React",
      text1: "Plantilla de portfolio web",
      text2: "Una SPA que funciona como un portfolio web dinámico. Los datos son traídos de un JSON desde MyJsonServer, que simula una base de datos.",
      text3: "-Front-end: desarrollado en React (JavaScript, HTML5, CSS3) inicializado en Vite, implementando: Peticiones AJAX, etc.",
      repo: "https://github.com/GGuilleGutierrez/Guillermo-Gutierrez-entrega03",
      deploy: "https://gguillegutierrez.github.io/Guillermo-Gutierrez-entrega03/"
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
