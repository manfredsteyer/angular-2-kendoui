import {Component } from 'angular2/core';
import { Grid } from '../kendo/grid';
import { OAuthService } from 'app/oauth2/oauth-service';
import { Location } from 'angular2/router';

@Component({
    templateUrl: 'app/flug-grid/flug-grid.html',
    directives: [Grid]
})
export class FlugGrid {

    info = "Willkommen";
    options: any;

    constructor() {
        this.setUpGridOptions();
    } 

    private setUpGridOptions() {
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
        }
    }

}