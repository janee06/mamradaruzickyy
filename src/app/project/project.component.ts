import { Component } from '@angular/core';
import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  ngAfterViewInit(): void {
   
    gsap.from("section#projects h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });
  
    
    gsap.from(".carousel-item h3", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2, 
      delay: 0.5,
      ease: "power2.out"
    });
  
   
    gsap.from(".carousel-item p", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.3, 
      delay: 0.8,
      ease: "power2.out"
    });
  }

}
