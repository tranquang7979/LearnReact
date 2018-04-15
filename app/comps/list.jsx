var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');

//var Note = require('./note.jsx');
//var InputDiv = require('./noteform.jsx');
//updated path in webpack.config.js
var Note = require('Note');
var InputDiv = require('NoteForm');
var {toggle} = require('action');

var theList;

//var List = React.createClass({
var List = createReactClass({

    // getInitialState() {
    //     return { mang: [] };
    // },
    // reloadList(data){
    //     this.state = { mang: data };
    // },
    // componentDidMount(){
    //     theList = this;
    //     var that = this;
    //     $.post("/get-notes", function(data){
    //         that.setState({mang: data});
    //     });
    // },
    addNote(){
        var {dispatch} = this.props;
        dispatch(toggle());
    },
    render() {
        return (
            <div className="div-list">
                <div id="div-add"><InputDiv/></div>
                <button onClick={this.addNote}>Add</button>
                {
                    this.props.mang.map(function (value, index) {
                        return <Note key={index} id={index} list={theList}>{value}</Note>
                    })
                }
            </div>
        )
    }
});
module.exports = connect(function(state){
    return {mang: state.mang}
})(List);