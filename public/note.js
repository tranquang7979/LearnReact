
var list;

function addNote(){
    ReactDOM.render(<InputDiv/>, document.getElementById("div-add"));
}

class Note extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            IsEdit: false
        };
    }

    edit = () => {
        this.setState({IsEdit: true});
    }

    cancel = () => {
        this.setState({IsEdit: false});
    }

    submit = () => {
        var that = this;
        $.post("/save-note", {id: this.props.id, note: this.refs.txt.value}, function(data){        
            list.setState({mang: data});
            that.setState({IsEdit: false});
        });
    }

    remove = (name) => {
        var that = this;
        $.post("/remove-note", {note: name}, function(data){        
            list.setState({mang: data});
        });
    }

    render() {
        if(this.state.IsEdit){
            return (
                <div className="div-note">
                    <input type='text' defaultValue={this.props.children} ref='txt'/>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={this.cancel}>Cancel</button>
                    <button onClick={this.submit}>Save</button>
                </div>
            );
        }
        else{
            return (
                <div className="div-note">
                    {this.props.children}
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>{this.remove(this.props.children);}}>Remove</button>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        }
    }
}

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mang: [] };
        list = this;
    }

    reloadList = (data) => {
        this.state = { mang: data };
    }

    componentDidMount(){
        var that = this;
        $.post("/get-notes", function(data){
            that.setState({mang: data});
        });
    }

    render() {
        return (
            <div className="div-list">
                <div id="div-add"></div>
                <button onClick={addNote}>Add</button>
                {
                    this.state.mang.map(function (value, index) {
                        return <Note key={index} id={index}>{value}</Note>
                    })
                }
            </div>
        );
    }
}

class InputDiv extends React.Component {

    save = () => {
        //list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
        $.post("/add-note", {note: this.refs.txt.value}, function(data){
            list.setState({mang: data});
        });
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    }

    render() {
        return (
            <div>
                <input type='text' ref='txt' placeholder='Enter your note' />
                <button onClick={this.save}>Save</button>
            </div>
        );
    };
}

ReactDOM.render(
    <List />,
    document.getElementById("root")
);