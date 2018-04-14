var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var InputDiv = createReactClass({
//var InputDiv = React.createClass({

    save(){
        var theList = this.props.list;
        //list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
        $.post("/add-note", {note: this.refs.txt.value}, function(data){
            theList.setState({mang: data});
        });
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    },
    render() {
        return (
            <div>
                <input type='text' ref='txt' placeholder='Enter your note' />
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
});
module.exports = InputDiv