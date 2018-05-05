import { Component } from "@angular/core";
import { NgForm} from "@angular/common";
import { OrderRepository } from "../model/order.repository";
import { Order} from "../model/order.model";


@Component({
    template: "checkout.component.html",
    moduleId: module.id,
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository,
                public order: Order) {}

    submitOrder(form: NgForm)
    {
        this.submitted = true;
        if (form.valid)
        {
            this.repository.saveOrder(this.order).subscribe(order =>
            {
                this.order.clear()
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }


}