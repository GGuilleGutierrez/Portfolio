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
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    const element = this.elementRef.nativeElement.querySelector('.technologies' || '.technologiesmobile')

      if (!element) {
        return;
      }

      const elementTop = element.offsetTop;

      if (scrollTop > elementTop - windowHeight * 0.8) {
        this.showSection = true;
      }
    }
  }
