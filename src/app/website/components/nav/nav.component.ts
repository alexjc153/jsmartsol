import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  menu:any[] = [
    {
      name: 'Inicio',
      href: '#home',
    },
    {
      name: 'Nosotros',
      href: '#about',
    },
    {
      name: 'Beneficios',
      href: '#benefits',
    },
    {
      name: 'Planes',
      href: '#plans',
    },
    {
      name: 'Contacto',
      href: '#contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  setActive(event: any) {
    const element = event.target;
    const id = element.attributes.id;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  OnScroll($event: any) {
    $event.target.scrollSpy();
  }
}
