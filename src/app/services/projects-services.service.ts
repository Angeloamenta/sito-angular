import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServicesService {

  constructor() { }

  projects = [
  {
      name: 'Palazzo Conti',
      description: 'Sito realizzato per Palazzo Conti situato a scicli, il sito mostra nel dettaglio le camere ed oltre a connettersi al booking permette anche di ordinale la colazione in camera tramite sistema',
      image: '../../assets/img/conti.png',
      link: "https://www.palazzocontiscicli.it/",
      class:'active',
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'ImparAgricoltura',
      description: `Imparagricoltura è un progetto di cooperazione tra imprese agricole,
associazioni e cooperative che operano nel mondo dell’educazione, della formazione e del sociale
nell’intento di raggiungere e fare apprendere, ai soggetti coinvolti direttamente nel partenariato
ed a tutti gli utenti`,
      image: '../../assets/img/impara.png',
      link: "https://www.imparagricoltura.it/",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'About Val di Noto',
      description: 'Sito realizzato per una COMMUNITY che nasce nel digitale per promuovere il Val di Noto diffondendo il suo patrimonio culturale, paesaggistico ed enogastronomico.',
      image: '../../assets/img/about.png',
      link: "https://www.aboutvaldinoto.it/",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'Regenera System',
      description: 'Pagina web realizzata per un’azienda nell’ambito dell’assistenza tecnica in agricoltura, fitoiatria e difesa delle piante, nonché nel settore delle coltivazioni idroponiche fuori suolo, fertirrigazione ed automazione.',
      image: '../../assets/img/regeneras.png',
      link:"https://www.regenerasystem.com/",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'Mast Festival (Old)',
      description: 'Pagina web realizzata seguendo le linee guida per riprodurre una homepage a scopo pubblicitario per un evento musicale a Scicli(RG)',
      image: '../../assets/img/mast-old.png',
      link:"https://mast-old.netlify.app/",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'Clone Spotify',
      description: 'Clone della famosa piattaforma musicale Spotify nel quale è stato implementato Bootstrap ed un design responsive grazie ai suoi breakpoint',
      image: '../../assets/img/spoty.png',
      link: 'https://spoty-web.netlify.app/',
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/6.png" },
      ]
    },
    {
      name: 'Sito Aziendale generico',
      description: "Progetto di metà corso, consiste in una pagina aziendale generica che presenta varie sezione indicative. Ogni sezione è creata dinamicamente tramite cicli javascript in modo da non dover ripetere codice e rendere l'applicazione facile da gestire nel tempo",
      image: '../../assets/img/agency.png',
      link: 'https://project-middle.netlify.app/',
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/3.png" },
        { img: "../../assets/img/6.png" },
      ]
    },
    {
      name: 'ToDoList',
      description: 'Progetto realizzato come primo approccio ad Angular, consiste nella realizzazione di una todolist in grado di creare un lista di cose da fare con nome utente e testo modificabile successivamente. é stato creato un service che contiene le note e gestisce la possibilità di selezionare tutto insieme ed eliminare (solo se presente almeno un elemento)',
      image: '../../assets/img/todolist.png',
      link:"https://cozy-pegasus-1be223.netlify.app",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/6.png" },
        { img: "../../assets/img/4.png" },
      ]
    },
    {
      name: 'Menu Digitale',
      description: 'Menu digitale realizzato per pizzeria della zona, grafica minimalista come da richiesta, consente di muoversi dinamicamente tra i menu senza dover attendere caricamenti delle pagine.',
      image: '../../assets/img/spiaggetta.png',
      link:"https://menu.putiadigitale.it",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'NovaGenetics',
      description: 'Pagina web NovaGenetics nell’ambito dell’assistenza tecnica in agricoltura, toiatria e difesa delle piante, nonché nel settore delle coltivazioni idroponiche fuori suolo, fertirrigazione ed automazione.',
      image: '../../assets/img/novag.png',
      link:"https://www.novagenetics.it/",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/10.png" },
      ]
    },
    {
      name: 'E-commerce Spot',
      description: 'Sito e-commerce realizzato con wordpress in combinazione con il plugin woocommerce. La piattaforma oltre a gestire le vendite online prevede la creazione di gift card da poter spendere presso il negozio online o direttamente in store',
      image: '../../assets/img/spotus.png',
      link:"",
      stack: [
        { img: "../../assets/img/1.png" },
        { img: "../../assets/img/2.png" },
        { img: "../../assets/img/8.png" },
        { img: "../../assets/img/10.png" },
        { img: "../../assets/img/11.png" },

      ]
    }
  ]

  stack =
    [
      { img: "../../assets/img/1.png" },
      { img: "../../assets/img/2.png" },
      { img: "../../assets/img/3.png" },
      { img: "../../assets/img/4.png" },
      { img: "../../assets/img/5.png" },
      { img: "../../assets/img/6.png" },
      { img: "../../assets/img/7.png" },
      { img: "../../assets/img/8.png" },
      { img: "../../assets/img/9.png" },
      { img: "../../assets/img/10.png" },
      { img: "../../assets/img/11.png" },
      { img: "../../assets/img/12.png" },
    ]


  getProjects() {
    return this.projects
  }

  getProject(index:number) {
    return this.projects[index]
  }

  getStack() {
    return this.stack
  }

}
