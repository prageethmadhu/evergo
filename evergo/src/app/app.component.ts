import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app123';
  shouldStick;
  shouldStick2;

  onHideMenu(): void {
    debugger;
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
