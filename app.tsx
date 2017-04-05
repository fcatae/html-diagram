class App extends React.Component<{},{}> {
    render() {
        return <div>Start</div>;
    }
}

class Server extends React.Component<{},{}> {
    render() {
        return <img src="server.png"></img>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(<Server/>, document.getElementById('srv'));
