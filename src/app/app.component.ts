
import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, inject, OnDestroy, ViewChild } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ThemeService } from "./services/theme.service";
import { DomSanitizer } from "@angular/platform-browser";

import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
    RouterLink,
		HeaderComponent,
		FooterComponent,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnDestroy{

  @ViewChild('snav') sidenav!: MatSidenav;

	title = "womenintech";
	themeService = inject(ThemeService);

  mobileQuery: MediaQueryList;
  submenuShow: boolean = true;

	navItems = [
		{ name: "Software Engineers / Developers", route: "/posts", icon: "developer_board"},
		{ name: "Open Source Maintainers", route: "/posts", icon: "developer_board"},
		{ name: "Open Source Contributors", route: "/posts", icon: "developer_board"},
		{ name: "Data Scientists / Analysts", route: "/posts", icon: "developer_board"},
		{ name: "Network / Systems Administrators", route: "/posts", icon: "developer_board"},
		{ name: "Cybersecurity Specialists", route: "/posts", icon: "developer_board"},
		{ name: "Mentors & Educators", route: "/posts", icon: "developer_board"},
		{ name: "Content Creators", route: "/posts", icon: "developer_board"},
		{ name: "Human-Computer Interaction Experts", route: "/posts", icon: "developer_board"},
		{ name: "Product / Project Managers", route: "/posts", icon: "developer_board"},
		{ name: "Technical Writers", route: "/posts", icon: "developer_board"},
	];

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
		this.iconRegistry.addSvgIcon(
			"angular",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/angular.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular-old",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/angular-old.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular-material",
			this.sanitizer.bypassSecurityTrustResourceUrl(
				"/icons/angular-material.svg"
			)
		);
		this.iconRegistry.addSvgIcon(
			"primeng",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/primeng.svg")
		);
		this.iconRegistry.addSvgIcon(
			"spartan",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/spartan.svg")
		);
		this.iconRegistry.addSvgIcon(
			"github",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/github.svg")
		);
	}

  ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
