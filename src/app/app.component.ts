import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'womenintech';
  themeService = inject(ThemeService);

  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('angular', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/angular.svg'));
    this.iconRegistry.addSvgIcon('angular-old', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/angular-old.svg'));
    this.iconRegistry.addSvgIcon('angular-material', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/angular-material.svg'));
    this.iconRegistry.addSvgIcon('primeng', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/primeng.svg'));
    this.iconRegistry.addSvgIcon('spartan', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/spartan.svg'));
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/icons/github.svg'));
  }
}
