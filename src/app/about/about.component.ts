import { Component } from '@angular/core';
import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngAfterViewInit(): void {
    
    gsap.from(".about-title", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out"
    });

   
    gsap.from(".about-block", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3, 
      delay: 0.5  
    });

    
    gsap.from(".contact-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out",
      delay: 1.2  
    });
  }
}
