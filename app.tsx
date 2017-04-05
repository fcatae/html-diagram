class App extends React.Component<{},{}> {
    render() {
        return <svg height="210" width="500">
                    <Line/>      
                </svg>;

    }
}

class Server extends React.Component<{},{}> {
    render() {
        return <img src="server.png"></img>;
    }
}

class Line extends React.Component<{},{}> {
    render() {
        return <line x1="0" y1="0" x2="200" y2="200" style={ {stroke:'rgb(255,0,0)',strokeWidth: 2} } />;
    }
}
   

ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(<Server/>, document.getElementById('srv'));
