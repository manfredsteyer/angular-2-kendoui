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
    var OrtValidatorAsync;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            OrtValidatorAsync = (function () {
                function OrtValidatorAsync() {
                }
                OrtValidatorAsync.validate = function (control) {
                    return new Promise(function (resolve) {
                        // async, z. B. HTTP-Zugriff
                        setTimeout(function () {
                            if (control.value == 'Graz'
                                || control.value == 'Hamburg'
                                || control.value == 'Frankfurt'
                                || control.value == 'Wien') {
                                resolve({});
                            }
                            resolve({
                                'ort-async': true
                            });
                        }, 3000);
                    });
                };
                OrtValidatorAsync = __decorate([
                    core_1.Directive({
                        selector: 'input[ortAsync]',
                        providers: [core_1.provide(common_1.NG_ASYNC_VALIDATORS, { useValue: OrtValidatorAsync.validate, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrtValidatorAsync);
                return OrtValidatorAsync;
            })();
            exports_1("OrtValidatorAsync", OrtValidatorAsync);
        }
    }
});
//# sourceMappingURL=ort-validator-async.js.map