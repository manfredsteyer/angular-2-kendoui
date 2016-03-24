System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FlugCard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            <!-- Template -->
            <div *ngFor="#f of fluege">
               <flug-card [item]="f"
                       [selectedItem]="selectedFlug"
                       (selectedItemChange)="selectedFlug = $event">
               </flug-card>
            </div>
            */
            FlugCard = (function () {
                function FlugCard() {
                    this.selectedItemChange = new core_1.EventEmitter();
                }
                FlugCard.prototype.ngOnInit = function () {
                    console.debug("ngOnInit");
                };
                FlugCard.prototype.ngOnChanges = function () {
                    console.debug("ngOnChanges");
                };
                FlugCard.prototype.ngOnDestroy = function () {
                    console.debug("ngOnDestroy");
                };
                FlugCard.prototype.select = function () {
                    this.selectedItemChange.next(this.flug);
                };
                __decorate([
                    core_1.Input('item'), 
                    __metadata('design:type', Object)
                ], FlugCard.prototype, "flug", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FlugCard.prototype, "selectedItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FlugCard.prototype, "selectedItemChange", void 0);
                FlugCard = __decorate([
                    core_1.Component({
                        selector: 'flug-card',
                        templateUrl: 'app/flug-card/flug-card.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlugCard);
                return FlugCard;
            })();
            exports_1("FlugCard", FlugCard);
        }
    }
});
//# sourceMappingURL=flug-card.js.map