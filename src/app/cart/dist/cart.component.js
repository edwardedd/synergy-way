"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
        this.state_array = [];
        this.total_price = 0;
        this.amount = [1];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.product_id = JSON.parse(localStorage["this.array_id"]);
        this.cart_state = this.product_id;
        this.items = this.shopService.items();
        var state = JSON.parse(localStorage.getItem('this.array_id'));
        this.state_array = __spreadArrays(state);
        this.getAmount();
        this.matPrice();
        this.totalPrice();
    };
    CartComponent.prototype.changeValue = function (e, product) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == product.id) {
                if (JSON.parse(localStorage.getItem('amount' + product.id)) === null) {
                    localStorage.setItem('amount' + product.id, JSON.stringify(e.target.value));
                    this.getAmount();
                }
                else {
                    localStorage.setItem('amount' + product.id, JSON.stringify(e.target.value));
                    this.getAmount();
                }
            }
        }
        this.matPrice();
        this.totalPrice();
    };
    CartComponent.prototype.getAmount = function () {
        for (var i = 0; i < this.product_id.length; i++) {
            this.amount[this.product_id[i]] = JSON.parse(localStorage.getItem('amount' + this.product_id[i]));
        }
    };
    CartComponent.prototype.matPrice = function () {
        for (var i = 0; i < this.state_array.length; i++) {
            var amount = JSON.parse(localStorage.getItem('amount' + this.state_array[i]));
            this.price[this.state_array[i]] = +amount * this.items[this.state_array[i] - 1].price;
            this.total_price += this.price[this.state_array[i]];
        }
    };
    CartComponent.prototype.totalPrice = function () {
        var total = 0;
        if (this.state_array.length === 0) {
            this.total_price = 0;
        }
        for (var i = 0; i < this.state_array.length; i++) {
            console.log(this.price[this.state_array[i]]);
            total += this.price[this.state_array[i]];
            this.total_price = total;
        }
    };
    CartComponent.prototype.removeFromCart = function (id) {
        for (var i = 0; i < this.state_array.length; i++) {
            if (id === this.state_array[i]) {
                this.state_array.splice(i, 1);
                localStorage['this.array_id'] = JSON.stringify(this.state_array);
                localStorage.removeItem('amount' + id);
            }
        }
        this.cart_state = this.state_array;
        this.totalPrice();
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
