"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(shopService) {
        this.shopService = shopService;
        this.product_id = [];
        this.cart_state = [];
        this.price = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.product_id = JSON.parse(localStorage["this.array_id"]);
        this.cart_state = this.product_id;
        this.items = this.shopService.items();
        console.log('item', this.items);
        for (var i = 0; i < this.items.length; i++) {
            this.price.push(this.items[i].price);
        }
    };
    CartComponent.prototype.ngDoCheck = function () {
        localStorage.setItem('state', this.cart_state);
    };
    CartComponent.prototype.changeValue = function (e, product) {
        console.log(product.id, 'id');
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == product.id) {
                var current_price = this.items[i].price * e.target.value;
                this.price[product.id] = current_price;
            }
        }
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
