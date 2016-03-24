System.register(['angular2/core', '../kendo/grid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grid_1;
    var FlugGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            }],
        execute: function() {
            FlugGrid = (function () {
                function FlugGrid() {
                    this.info = "Willkommen";
                    this.setUpGridOptions();
                }
                FlugGrid.prototype.setUpGridOptions = function () {
                    var dataSource = new kendo.data.DataSource({
                        type: "odata-v4",
                        transport: {
                            read: "http://www.angular.at/api/flug/odata",
                            create: {
                                url: "http://www.angular.at/api/flug",
                                type: "post"
                            },
                            update: {
                                url: "http://www.angular.at/api/flug",
                                type: "post"
                            }
                        },
                        error: function (e) {
                            // handle data operation error
                            alert("Status: " + e.status + "; Error message: " + e.errorThrown);
                        },
                        pageSize: 5,
                        serverPaging: true,
                        serverFiltering: true,
                        serverSorting: true,
                        batch: false,
                        schema: {
                            model: {
                                id: "id",
                                fields: {
                                    id: { editable: false, nullable: true },
                                    abflugort: {},
                                    zielort: {},
                                    datum: { type: "date" }
                                }
                            }
                        }
                    });
                    this.options = {
                        dataSource: dataSource,
                        toolbar: ["create"],
                        columns: [
                            { field: "id", title: "id", width: "40px" },
                            { field: "abflugort", title: "Von", width: "200px" },
                            { field: "zielort", title: "Nach", width: "120px" },
                            { field: "datum", title: "Datum", format: "{0:dd.MM.yyyy HH:mm}", width: "120px" },
                            { command: ["edit", "destroy"], title: "&nbsp;", width: "200px" }
                        ],
                        pageable: true,
                        filterable: true,
                        groupable: true,
                        sortable: true,
                        editable: "inline"
                    };
                };
                FlugGrid = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-grid/flug-grid.html',
                        directives: [grid_1.Grid]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlugGrid);
                return FlugGrid;
            })();
            exports_1("FlugGrid", FlugGrid);
        }
    }
});
//# sourceMappingURL=flug-grid.js.map