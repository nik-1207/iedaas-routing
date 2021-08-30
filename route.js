function Route(name, htmlName, defaultRoute) {
    try {
        if (!name || !htmlName) {
            throw "missing params"
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.log(e)
    }
}
Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    constructor: function(name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    },
    isActive: function(hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}