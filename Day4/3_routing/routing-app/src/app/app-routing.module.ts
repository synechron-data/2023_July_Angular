import { NgModule } from "@angular/core";
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthorRootComponent } from "./authors/components/author-root/author-root.component";
import { ProductsRootComponent } from "./products/components/products-root/products-root.component";
import { ProductNotSelectedComponent } from "./products/components/product-not-selected/product-not-selected.component";
import { ProductDetailsComponent } from "./products/components/product-details/product-details.component";
import { CustomPreloadingStrategy } from "./services/custom-preloading-strategy.service";
import { AdminComponent } from "./components/admin/admin.component";
import { CanActivateAdminGuard } from "./services/guards/can-activate-admin.guard";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'authors', component: AuthorRootComponent },
    {
        path: 'products',
        component: ProductsRootComponent,
        children: [
            { path: '', component: ProductNotSelectedComponent },
            { path: ':id', component: ProductDetailsComponent },
        ]
    },
    {
        path: 'lazy',
        loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
        data: { preload: true, delay: 5000 }
    },
    { 
        path: 'admin', 
        component: AdminComponent,
        canActivate: [CanActivateAdminGuard] 
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    // imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
    // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
    exports: [RouterModule]
})
export class AppRoutingModule { }