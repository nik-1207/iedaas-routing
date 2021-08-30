function Router(routes) {
    try {
        if (!routes) {
            throw "Invalid Routes";
        }
        this.constructor(routes);
        this.init();

    } catch (e) {
        console.log(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function(routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function() {
        (function(scope, r) {
            window.addEventListener('hashchange', function(e) {
                scope.hasChanged(scope, r);
            });
        })(this, this.routes);
        this.hasChanged(this, this.routes)
    },
    hasChanged: function(scope, r) {
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if (route.isActive(window.location.hash.substr(1))) {
                    scope.gotoRoute(route.htmlName)
                }
            }

        }
    },
    gotoRoute: function(htmlName) {
        (function(scope) {
            var url = "views/" + htmlName;
            xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText
                }
            };
            xhttp.send();
        })(this)
    }
};