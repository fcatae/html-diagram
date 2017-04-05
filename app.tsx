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

interface TrackMouseStates {
    x: number;
    y: number;
}
class TrackMouse extends React.Component<{},TrackMouseStates> {
    constructor(props) {
        super(props);
        this.state = {
            x: -1,
            y: -1
        };
    }

    onMouseOver(ev: React.MouseEvent<HTMLDivElement>) {
        
        this.setState({
            x: ev.clientX,
            y: ev.clientY
        });
        
    }

    render() {
        let x = this.state.x;
        let y = this.state.y;
        
        return <div onMouseOver={this.onMouseOver.bind(this)}>
                <span>X:</span><span>{x}</span><span>, Y:</span><span>{y}</span>
            </div>;
    }
}   

ReactDOM.render(<App/>, document.getElementById('app'));

ReactDOM.render(<Server/>, document.getElementById('srv'));

ReactDOM.render(<TrackMouse/>, document.getElementById('status'));
