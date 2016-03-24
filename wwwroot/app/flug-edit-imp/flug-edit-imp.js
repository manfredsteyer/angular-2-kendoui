System.register(['angular2/core', 'angular2/router', '../services/flug-service', 'angular2/common', '../validation/ort-validator', '../validation/ort-validator-async'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_service_1, common_1, ort_validator_1, ort_validator_async_1;
    var FlugEditImp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ort_validator_1_1) {
                ort_validator_1 = ort_validator_1_1;
            },
            function (ort_validator_async_1_1) {
                ort_validator_async_1 = ort_validator_async_1_1;
            }],
        execute: function() {
            FlugEditImp = (function () {
                function FlugEditImp(params, fb, flugService) {
                    var _this = this;
                    this.flugService = flugService;
                    this.activate = true;
                    this.exitWarning = {
                        show: false,
                        resolve: null
                    };
                    this.info = "Flug-Edit";
                    this.id = parseInt(params.get('id'));
                    this.form = fb.group({
                        abflugort: [
                            'XY',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(30),
                                ort_validator_1.OrtValidator.validate
                            ]),
                            common_1.Validators.composeAsync([
                                ort_validator_async_1.OrtValidatorAsync.validate
                            ])
                        ],
                        zielort: [''],
                        datum: [''],
                        id: ['']
                    });
                    var form = this.form;
                    this.flugService
                        .load(this.id)
                        .subscribe(function (flug) {
                        _this.setForm(flug);
                        _this.message = "Flug wurde erfolgreich geladen!";
                    }, function (err) {
                        console.error(err);
                        _this.message = "Fehler beim Laden!";
                    });
                }
                FlugEditImp.prototype.setFormValue = function (key, value) {
                    var c = this.form.controls[key];
                    if (c) {
                        c.updateValue(value);
                    }
                };
                FlugEditImp.prototype.setForm = function (model) {
                    for (var key in model) {
                        var value = model[key];
                        this.setFormValue(key, value);
                    }
                };
                FlugEditImp.prototype.save = function (f) {
                    var _this = this;
                    var x;
                    /*
                    this.activate = false;
                    setTimeout(() => {
                        this.activate = true;
                    }, 0);
                    */
                    var flug = this.form.value;
                    this.flugService
                        .save(flug)
                        .subscribe(function (flug) {
                        _this.setForm(flug);
                        _this.message = "Flug wurde gespeichert!";
                    }, function (err) {
                        console.error("Fehler beim Speichern!");
                        console.error(err); // <-- Http-Response mit Fehler!
                        _this.message = err.text(); // <-- Text aus Payload
                    });
                };
                FlugEditImp.prototype.routerCanDeactivate = function (next, prev) {
                    var _this = this;
                    this.exitWarning.show = true;
                    return new Promise(function (resolve) {
                        _this.exitWarning.resolve = resolve;
                    }).then(function (decision) {
                        _this.exitWarning.show = false;
                        return decision;
                    });
                };
                FlugEditImp.prototype.routerOnActivate = function (next, prev) {
                    console.debug("routerOnActivate");
                };
                FlugEditImp.prototype.routerOnDeactivate = function (next, prev) {
                    console.debug("routerOnDeactivate");
                };
                FlugEditImp = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-edit-imp/flug-edit-imp.html'
                    }),
                    router_1.CanActivate(function (next, prev) {
                        console.debug("CanActivate");
                        return true;
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, common_1.FormBuilder, flug_service_1.FlugService])
                ], FlugEditImp);
                return FlugEditImp;
            })();
            exports_1("FlugEditImp", FlugEditImp);
        }
    }
});
//# sourceMappingURL=flug-edit-imp.js.map