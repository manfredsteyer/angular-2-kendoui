System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var OrtValidator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            OrtValidator = (function () {
                function OrtValidator() {
                }
                OrtValidator.validate = function (control) {
                    if (control.value == 'Graz'
                        || control.value == 'Hamburg'
                        || control.value == 'Frankfurt'
                        || control.value == 'Berlin'
                        || control.value == 'Wien') {
                        return {};
                    }
                    return {
                        ort: true
                    };
                };
                OrtValidator = __decorate([
                    core_1.Directive({
                        selector: 'input[ort]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useValue: OrtValidator.validate, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrtValidator);
                return OrtValidator;
            })();
            exports_1("OrtValidator", OrtValidator);
        }
    }
});
//# sourceMappingURL=ort-validator.js.map