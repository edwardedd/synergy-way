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
        this.disable = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.items = this.shopService.items();
        console.log(this.items);
    };
    // get items() {
    //   return this.shopService.items()
    // }
    ProductListComponent.prototype.addToCard = function (id) {
        if (this.array_id.includes(id)) {
            return;
        }
        else {
            this.array_id.push(id);
            localStorage['this.array_id'] = JSON.stringify(this.array_id);
            console.log(this.array_id);
        }
        // this.disable = true
    };
    ProductListComponent.prototype.removeFromCart = function () {
        console.log('reomve');
    };
    ProductListComponent.prototype.changeValue = function (e) {
        console.log(e.target.value);
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
