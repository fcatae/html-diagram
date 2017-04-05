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
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            x: 0,
            y: 0
        };
        return _this;
    }
    App.prototype.onMove = function (x, y) {
        this.setState({
            x: x,
            y: y
        });
    };
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("svg", { height: "95%", width: "95%" },
                React.createElement(Line, { x: this.state.x, y: this.state.y })),
            React.createElement(Server, { onMove: this.onMove.bind(this) }));
    };
    return App;
}(React.Component));
var Server = (function (_super) {
    __extends(Server, _super);
    function Server(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            ini_x: 0,
            ini_y: 0,
            calculated_x: 0,
            calculated_y: 0,
            isFirstClick: true
        };
        return _this;
    }
    Server.prototype.onMouseDown = function (ev) {
        if (this.state.isFirstClick) {
            this.setState({
                ini_x: ev.screenX - this.state.calculated_x,
                ini_y: ev.screenY - this.state.calculated_y,
                isFirstClick: false
            });
        }
    };
    Server.prototype.onMouseMove = function (ev) {
        if (this.state.isFirstClick == false) {
            var position = {
                calculated_x: ev.screenX - this.state.ini_x,
                calculated_y: ev.screenY - this.state.ini_y
            };
            this.setState(position);
            (this.props.onMove) && this.props.onMove(position.calculated_x, position.calculated_y);
        }
    };
    Server.prototype.onMouseLeave = function () {
        this.setState({
            isFirstClick: true
        });
    };
    Server.prototype.onMouseUp = function () {
        this.setState({
            isFirstClick: true
        });
    };
    Server.prototype.render = function () {
        var x = this.state.calculated_x, y = this.state.calculated_y;
        var style = {
            transform: "translate(" + x + "px," + y + "px)"
        };
        var highlight = (this.state.isFirstClick) ? '' : 'highlight';
        return React.createElement("img", { className: highlight, style: style, src: "server.png", draggable: false, onDragStart: function () { return false; }, onMouseDown: this.onMouseDown.bind(this), onMouseMove: this.onMouseMove.bind(this), onMouseLeave: this.onMouseLeave.bind(this), onMouseUp: this.onMouseUp.bind(this) });
    };
    return Server;
}(React.Component));
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        return React.createElement("line", { x1: "0", y1: "0", x2: this.props.x, y2: this.props.y, style: { stroke: 'rgb(255,0,0)', strokeWidth: 2 } });
    };
    return Line;
}(React.Component));
var TrackMouse = (function (_super) {
    __extends(TrackMouse, _super);
    function TrackMouse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            x: -1,
            y: -1
        };
        return _this;
    }
    TrackMouse.prototype.onMouseOver = function (ev) {
        this.setState({
            x: ev.clientX,
            y: ev.clientY
        });
    };
    TrackMouse.prototype.render = function () {
        var x = this.state.x;
        var y = this.state.y;
        return React.createElement("div", { onMouseOver: this.onMouseOver.bind(this) },
            React.createElement("span", null, "X:"),
            React.createElement("span", null, x),
            React.createElement("span", null, ", Y:"),
            React.createElement("span", null, y));
    };
    return TrackMouse;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map