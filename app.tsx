class App extends React.Component<{},{}> {
    render() {
        return <svg height="210" width="500">
                    <Line/>      
                </svg>;

    }
}

interface ServerStates {
    ini_x: number,
    ini_y: number,
    calculated_x: number,
    calculated_y: number,
    isFirstClick: boolean
}

class Server extends React.Component<{},ServerStates> {
    constructor(props) {
        super(props);
        this.state = {
            ini_x: 0,
            ini_y: 0,
            calculated_x: 0,
            calculated_y: 0,
            isFirstClick: true
        };
    }

    onMouseDown(ev: React.MouseEvent<HTMLDivElement>) {

        if( this.state.isFirstClick ) {
            this.setState({
                ini_x: ev.screenX - this.state.calculated_x,
                ini_y: ev.screenY - this.state.calculated_y,
                isFirstClick: false
            });
        }

    }

    onMouseMove(ev: React.MouseEvent<HTMLDivElement>) {

        if( this.state.isFirstClick == false ) {
               this.setState({
                calculated_x: ev.screenX - this.state.ini_x,
                calculated_y: ev.screenY - this.state.ini_y
            });         
        }
    }

    onMouseUp() {
        this.setState({
            isFirstClick: true
        });
    }

    render() {
        let x=this.state.calculated_x, y=this.state.calculated_y;
        let style = {
            transform: `translate(${x}px,${y}px)`
        };
        let highlight = (this.state.isFirstClick) ? '' : 'highlight';

        return <img className={highlight} style={style} src="server.png" 
                    draggable={false} onDragStart={()=>false}
                    onMouseDown={this.onMouseDown.bind(this)}
                    onMouseMove={this.onMouseMove.bind(this)}
                    onMouseUp={this.onMouseUp.bind(this)}
                    />;
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
