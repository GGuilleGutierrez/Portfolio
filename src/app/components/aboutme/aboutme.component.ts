import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {

  showSection = false;

  constructor(private elementRef: ElementRef) {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  checkScroll() {
    const containerElement = this.elementRef.nativeElement.querySelector('.description', '.photo');

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
