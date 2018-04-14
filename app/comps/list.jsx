var React = require('react');
var ReactDOM = require('react-dom');
var Note = require('./note.jsx');
var InputDiv = require('./noteform.jsx');
var createReactClass = require('create-react-class');
var theList;

function addNote(){
    ReactDOM.render(<InputDiv list={theList}/>, document.getElementById("div-add"));
}

//var List = React.createClass({
var List = createReactClass({

    getInitialState() {
        return { mang: [] };
    },
    reloadList(data){
        this.state = { mang: data };
    },
    componentDidMount(){
        theList = this;
        var that = this;
        $.post("/get-notes", function(data){
            that.setState({mang: data});
        });
    },
    render() {
        return (
            <div className="div-list">
                <div id="div-add"></div>
                <button onClick={addNote}>Add</button>
                {
                    this.state.mang.map(function (value, index) {
                        return <Note key={index} id={index} list={theList}>{value}</Note>
                    })
                }
            </div>
        )
    }
});
module.exports = List;