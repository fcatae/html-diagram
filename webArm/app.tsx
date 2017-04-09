class App extends React.Component<{},{}> {
   render() {
       return <div>Hello World!</div>;
   }
}

class Server extends React.Component<{},{}> {
   render() {
       return <div>
            <img className="resource-server" src="images/server.png" alt="images/server.png"/>
            <ServerName/>
            <ServerHardware/>
            <DiskSelector/>
        </div>;
   }
}

class ServerName extends React.Component<{},{}> {
   render() {
       return <div><input className="server-name" placeholder="computerName" required /></div>;
   }
}

class ServerHardware extends React.Component<{},{}> {
   render() {
       let models = [ 
                        { id:"FS1", description:"FS1: 1CPU 2GB" },
                        { id:"FS2", description:"FS2: 2CPU 4GB" },
                        { id:"FS3", description:"FS3: 4CPU 8GB" },
                        { id:"FS4", description:"FS4: 8CPU 16GB" },
                        { id:"DS1_V2", description:"DS1_V2: 1CPU 3.5GB" },
                        { id:"DS2_V2", description:"DS2_V2: 2CPU 7GB" },
                        { id:"DS3_V2", description:"DS3_V2: 4CPU 14GB" },
                        { id:"DS4_V2", description:"DS4_V2: 8CPU 28GB" }
                ];

       return <div>
                    <input type="text" className="server-hardware" required list="server-hardware"/>
                    <datalist id="server-hardware">
                        { models.map( s => <option key={s.id} value={s.id}>{s.description}</option>) }
                    </datalist>
              </div>;
   }
}

type DiskSelectionType = 'none' | 'image' | 'customimage' | 'attachonly';

class DiskSelector extends React.Component<{},{diskType: DiskSelectionType}> {
    constructor(props) {
        super(props);
        this.state = {
            diskType: 'none'
        };
        this.render = this.render.bind(this);
        this.onSelectDisk = this.onSelectDisk.bind(this)
        this.onCancelSelection = this.onCancelSelection.bind(this)        
    }

    onSelectDisk(ev: React.ChangeEvent<HTMLSelectElement>) {
        
        let diskType = ev.target.value as DiskSelectionType;

        this.setState({
            diskType: diskType
        })      
    }

    onCancelSelection() {
        this.setState({
            diskType: 'none'
        })            
    }

    render() {

        let cancelableOperation = (title, element) => {

                return <div>
                    <p>{title}<span onClick={this.onCancelSelection}>[Cancel]</span></p>
                    <div>{element}</div>                    
                </div>
        };

        let selectDisk = (diskType: DiskSelectionType) => {
                switch(diskType) {                
                    case 'image':           return cancelableOperation('Image', <DiskImage/>);
                    case 'customimage':     return cancelableOperation('Custom Image', <DiskCustomImage/>);
                    case 'attachonly':      return cancelableOperation('Attach Only', <DiskAttachOnly/>);
                }

                return <div><p>Select Disk: 
                            <select onChange={this.onSelectDisk}>
                            <option value="none" default></option>
                            <option value="image">Image</option>
                            <option value="customimage">Custom Image</option>
                            <option value="attachonly">Attach Only</option>
                            </select>
                        </p>
                        </div>
        }

        return <div>{selectDisk(this.state.diskType)}</div>;
    }
}

class DiskImage extends React.Component<{},{}> {
   render() {
       let available_images = {
                                "Windows2008R2": { description:"Windows Server 2008 R2" },
                                "Windows2012": { description:"Windows Server 2012" },
                                "Windows2016": { description:"Windows Server 2016" },
                                "SQLServer2016": { description:"SQL Server 2016" }
                              };  

       let keys = func => Object.keys(available_images).map( func );

       return <div>
                    <p>Choose your image</p>
                    <input type="text" required list="disk-image-list"/>
                    <datalist id="disk-image-list"> 
                        { keys( id => 
                        <option key={id} value={id}>{available_images[id].description}</option>) 
                        }
                    </datalist>
              </div>;
   }
}

class DiskCustomImage extends React.Component<{},{}> {
   render() {
       return <div><input type="text" placeholder="[https:// URL of custom disk]"/></div>;
   }
}

class DiskAttachOnly extends React.Component<{},{}> {
   render() {
       return <div><input type="text" placeholder="[https:// URL of disk to be attached]"/></div>;
   }
}

