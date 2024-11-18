import { Component } from '@angular/core';
import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngAfterViewInit(): void {
    
    gsap.from(".velikost", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });

    gsap.from(".contact-form label", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2, 
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.from(".contact-form input, .contact-form textarea", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      delay: 0.7,
      ease: "power2.out"
    });

    gsap.from(".contact-form button", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      delay: 1,
      ease: "back.out(1.7)"
    });
  }
}
