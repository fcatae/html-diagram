var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null, "Start");
    };
    return App;
}(React.Component));
var Server = (function (_super) {
    __extends(Server, _super);
    function Server() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Server.prototype.render = function () {
        return React.createElement("img", { src: "server.png" });
    };
    return Server;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
ReactDOM.render(React.createElement(Server, null), document.getElementById('srv'));
//# sourceMappingURL=app.js.map