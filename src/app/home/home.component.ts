import { Component } from '@angular/core';
import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit(): void {
    
    gsap.from(".welcome-text h1", {
      opacity: 0,
      y: 50,   
      duration: 1.5,  
      ease: "power4.out",  
      delay: 0.2  
    });

    
    gsap.from(".image-container img", {
      opacity: 0,
      x: 1,  
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5  
    });
  }
}
