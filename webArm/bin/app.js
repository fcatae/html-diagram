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
        return React.createElement("div", null, "Hello World!");
    };
    return App;
}(React.Component));
var Server = (function (_super) {
    __extends(Server, _super);
    function Server() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Server.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("img", { className: "resource-server", src: "images/server.png", alt: "images/server.png" }),
            React.createElement(ServerName, null),
            React.createElement(ServerHardware, null),
            React.createElement(DiskSelector, null));
    };
    return Server;
}(React.Component));
var ServerName = (function (_super) {
    __extends(ServerName, _super);
    function ServerName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerName.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("input", { className: "server-name", placeholder: "computerName", required: true }));
    };
    return ServerName;
}(React.Component));
var ServerHardware = (function (_super) {
    __extends(ServerHardware, _super);
    function ServerHardware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerHardware.prototype.render = function () {
        var models = [
            { id: "FS1", description: "FS1: 1CPU 2GB" },
            { id: "FS2", description: "FS2: 2CPU 4GB" },
            { id: "FS3", description: "FS3: 4CPU 8GB" },
            { id: "FS4", description: "FS4: 8CPU 16GB" },
            { id: "DS1_V2", description: "DS1_V2: 1CPU 3.5GB" },
            { id: "DS2_V2", description: "DS2_V2: 2CPU 7GB" },
            { id: "DS3_V2", description: "DS3_V2: 4CPU 14GB" },
            { id: "DS4_V2", description: "DS4_V2: 8CPU 28GB" }
        ];
        return React.createElement("div", null,
            React.createElement("input", { type: "text", className: "server-hardware", required: true, list: "server-hardware" }),
            React.createElement("datalist", { id: "server-hardware" }, models.map(function (s) { return React.createElement("option", { key: s.id, value: s.id }, s.description); })));
    };
    return ServerHardware;
}(React.Component));
var DiskSelector = (function (_super) {
    __extends(DiskSelector, _super);
    function DiskSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            diskType: 'none'
        };
        _this.render = _this.render.bind(_this);
        _this.onSelectDisk = _this.onSelectDisk.bind(_this);
        _this.onCancelSelection = _this.onCancelSelection.bind(_this);
        return _this;
    }
    DiskSelector.prototype.onSelectDisk = function (ev) {
        var diskType = ev.target.value;
        this.setState({
            diskType: diskType
        });
    };
    DiskSelector.prototype.onCancelSelection = function () {
        this.setState({
            diskType: 'none'
        });
    };
    DiskSelector.prototype.render = function () {
        var _this = this;
        var cancelableOperation = function (title, element) {
            return React.createElement("div", null,
                React.createElement("p", null,
                    title,
                    React.createElement("span", { onClick: _this.onCancelSelection }, "[Cancel]")),
                React.createElement("div", null, element));
        };
        var selectDisk = function (diskType) {
            switch (diskType) {
                case 'image': return cancelableOperation('Image', React.createElement(DiskImage, null));
                case 'customimage': return cancelableOperation('Custom Image', React.createElement(DiskCustomImage, null));
                case 'attachonly': return cancelableOperation('Attach Only', React.createElement(DiskAttachOnly, null));
            }
            return React.createElement("div", null,
                React.createElement("p", null,
                    "Select Disk:",
                    React.createElement("select", { onChange: _this.onSelectDisk },
                        React.createElement("option", { value: "none", default: true }),
                        React.createElement("option", { value: "image" }, "Image"),
                        React.createElement("option", { value: "customimage" }, "Custom Image"),
                        React.createElement("option", { value: "attachonly" }, "Attach Only"))));
        };
        return React.createElement("div", null, selectDisk(this.state.diskType));
    };
    return DiskSelector;
}(React.Component));
var DiskImage = (function (_super) {
    __extends(DiskImage, _super);
    function DiskImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiskImage.prototype.render = function () {
        var available_images = {
            "Windows2008R2": { description: "Windows Server 2008 R2" },
            "Windows2012": { description: "Windows Server 2012" },
            "Windows2016": { description: "Windows Server 2016" },
            "SQLServer2016": { description: "SQL Server 2016" }
        };
        var keys = function (func) { return Object.keys(available_images).map(func); };
        return React.createElement("div", null,
            React.createElement("p", null, "Choose your image"),
            React.createElement("input", { type: "text", required: true, list: "disk-image-list" }),
            React.createElement("datalist", { id: "disk-image-list" }, keys(function (id) {
                return React.createElement("option", { key: id, value: id }, available_images[id].description);
            })));
    };
    return DiskImage;
}(React.Component));
var DiskCustomImage = (function (_super) {
    __extends(DiskCustomImage, _super);
    function DiskCustomImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiskCustomImage.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("input", { type: "text", placeholder: "[https:// URL of custom disk]" }));
    };
    return DiskCustomImage;
}(React.Component));
var DiskAttachOnly = (function (_super) {
    __extends(DiskAttachOnly, _super);
    function DiskAttachOnly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiskAttachOnly.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("input", { type: "text", placeholder: "[https:// URL of disk to be attached]" }));
    };
    return DiskAttachOnly;
}(React.Component));
