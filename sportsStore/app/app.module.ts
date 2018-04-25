import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGaurd } from "./storeFirst.gaurd";

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot(
            [
                {
                    path: "store", component: StoreComponent,
                    canActivate: [StoreFirstGaurd]
                },
                {
                    path: "cart", component: CartDetailComponent,
                    canActivate: [StoreFirstGaurd]
                },
                {
                    path: "checkout", component: CheckoutComponent,
                    canActivate: [StoreFirstGaurd]
                },
                { path: "**", redirectTo: "/store"}
            ]
        )],
    providers: [StoreFirstGaurd],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}