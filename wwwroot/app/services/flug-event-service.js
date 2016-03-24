System.register(['rxjs/Subject'], function(exports_1) {
    var Subject_1;
    var FlugEventService;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            FlugEventService = (function () {
                function FlugEventService() {
                    this.flugSelected = new Subject_1.Subject();
                }
                return FlugEventService;
            })();
            exports_1("FlugEventService", FlugEventService);
        }
    }
});
//# sourceMappingURL=flug-event-service.js.map