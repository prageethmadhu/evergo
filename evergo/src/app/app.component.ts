import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app123';
  shouldStick;
  shouldStick2;
  constructor(router: Router) {

    router.events.subscribe(s => {
    
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        }); }
        }
      }
    });

  }
  onHideMenu(): void {

    console.log('you have clicked me');
  }
  ngOnInit() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 100) {
          this.shouldStick = true;
          this.shouldStick2 = true;

      } else {
          this.shouldStick = false;
          this.shouldStick2 = false;

      }
  });

  }
  scrollMe():void{
    debugger;
    console.log('you have scroll me');
  }
}
