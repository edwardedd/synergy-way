"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(shopService) {
        this.shopService = shopService;
        this.array_id = [];
        this.disable = true;
        this.amount = [];
        this.product_id = [];
        this.blockSetitem = true;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.items = this.shopService.items();
        this.addAmount();
    };
    ProductListComponent.prototype.addToCard = function (id) {
        if (JSON.parse(localStorage.getItem("this.array_id")) === null) {
            this.array_id.push(id);
            localStorage['this.array_id'] = JSON.stringify(this.array_id);
            var getId = JSON.parse(localStorage.getItem("this.array_id"));
        }
        else {
            var getId = JSON.parse(localStorage.getItem("this.array_id"));
            if (getId.includes(id)) {
            }
            else {
                getId.push(id);
                localStorage['this.array_id'] = JSON.stringify(getId);
            }
        }
        this.addAmount();
    };
    ProductListComponent.prototype.changeValue = function (id, e) {
        var amount = e.target.value;
        this.amount[id] = amount;
        localStorage.setItem('amount' + id, JSON.stringify(amount));
    };
    ProductListComponent.prototype.getAmount = function () {
        for (var i = 0; i < this.product_id.length; i++) {
            this.amount[this.product_id[i]] = JSON.parse(localStorage.getItem('amount' + this.product_id[i]));
        }
    };
    ProductListComponent.prototype.addAmount = function () {
        if (localStorage.getItem('this.array_id') === null) {
            return;
        }
        else {
            this.product_id = JSON.parse(localStorage["this.array_id"]);
            for (var i = 0; i < this.product_id.length; i++) {
                if (JSON.parse(localStorage.getItem("amount" + this.product_id[i])) === null) {
                    localStorage.setItem('amount' + this.product_id[i], JSON.stringify(1));
                    this.amount[this.product_id[i]] = 1;
                }
                else {
                    this.amount[this.product_id[i]] = JSON.parse(localStorage.getItem('amount' + this.product_id[i]));
                }
            }
        }
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
