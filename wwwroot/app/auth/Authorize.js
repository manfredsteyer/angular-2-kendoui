System.register(['angular2/router', 'app/oauth2/oauth-service', '../home/home'], function(exports_1) {
    var router_1, oauth_service_1, home_1;
    function Authorize() {
        return router_1.CanActivate(function (next, prev) {
            var oauthService = new oauth_service_1.OAuthService();
            if (!oauthService.hasValidAccessToken()) {
                next.componentType = home_1.Home;
                next.urlParams = ["login=true"];
            }
            return true;
        });
    }
    exports_1("Authorize", Authorize);
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=authorize.js.map