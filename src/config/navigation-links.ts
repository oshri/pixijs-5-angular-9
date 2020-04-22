import { HomeComponent } from "@nebula-ng/home/home.component";
import { AboutComponent } from "@nebula-ng/about/about.component";
import { ShopCartComponent } from "@nebula/angular-components/shopcart/shopcart.component";
import { DotaComponent } from "@nebula/angular-components/dota/dota.component";
import { PixiAppComponent } from "@nebula-ng/pixi-app/pixi-app.component";

export const NavigationLinks = {
  homepage: {
    text: "Senjutsuki",
    route: {
      path: "",
      component: HomeComponent,
    },
  },
  mainLinks: [
    {
      text: "About Me",
      route: {
        path: "about-me",
        component: AboutComponent,
      },
    },
    {
      text: "Shop",
      route: {
        path: "shop",
        component: ShopCartComponent,
      },
    },
    {
      text: "DoTA Database",
      route: {
        path: "dota",
        component: DotaComponent,
      },
    },
    {
      text: "Asteroids!",
      route: {
        path: "asteroids",
        component: PixiAppComponent,
      },
    },
  ],
};
