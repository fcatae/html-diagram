
interface AppStates {
    x: number,
    y: number
}

class App extends React.Component<{},AppStates> {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    onMove(x: number, y:number) {
        this.setState({
            x: x,
            y: y
        })
    }

    render() {
        return <div>
                    <svg height="210" width="500">
                        <Line x={this.state.x} y={this.state.y} />      
                    </svg>
                    <Server onMove={this.onMove.bind(this)}/>
                </div>;

    }
}

interface ServerStates {
    ini_x: number,
    ini_y: number,
    calculated_x: number,
    calculated_y: number,
    isFirstClick: boolean
}

interface ServerProps {
    onMove?: (x:number,y:number) => void;
}

class Server extends React.Component<ServerProps,ServerStates> {
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
               
               let position = {
                    calculated_x: ev.screenX - this.state.ini_x,
                    calculated_y: ev.screenY - this.state.ini_y
                    };

               this.setState(position);
            
            (this.props.onMove) && this.props.onMove(position.calculated_x, position.calculated_y);
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

interface LineProps {
    x: number,
    y: number
}
class Line extends React.Component<LineProps,{}> {
    render() {
        return <line x1="0" y1="0" x2={this.props.x} y2={this.props.y} style={ {stroke:'rgb(255,0,0)',strokeWidth: 2} } />;
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
