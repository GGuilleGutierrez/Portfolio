import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  showSection = false;

  constructor(private elementRef: ElementRef) {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  checkScroll() {
    const containerElement = this.elementRef.nativeElement.querySelector('.technologies', '.technologiesmobile');

    if (!containerElement) {
      return;
    }

    const containerHeight = containerElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > containerHeight * 0.1) {
      this.showSection = true;
    }
  }
}
