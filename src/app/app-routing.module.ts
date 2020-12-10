import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ShoppingitemDetailComponent } from "./shoppingitem-detail/shoppingitem-detail.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  { path: "home/singleItem", component: ShoppingitemDetailComponent },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [ShoppingitemDetailComponent]; Om jag hade haft fler routes att exportera härifrån
