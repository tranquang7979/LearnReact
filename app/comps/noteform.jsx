var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');

var {toggle, addItem} = require('action');

var InputDiv = createReactClass({
//var InputDiv = React.createClass({

    save(){
        //list.setState({mang: list.state.mang.concat(this.refs.txt.value)});

        var {dispatch} = this.props;
        var item = this.refs.txt.value;
        dispatch(addItem(item));
        //dispatch(toggle);
        
        // var theList = this.props.list;
        // $.post("/add-note", {note: this.refs.txt.value}, function(data){
        //     theList.setState({mang: data});
        // });
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    },
    render() {
        if(this.props.IsEdit){
            return (<div></div>);
        }
        else{
            return (
                <div>
                    <input type='text' ref='txt' placeholder='Enter your note' />
                    <button onClick={this.save}>Save</button>
                </div>
            );
        }
    }
});
module.exports = connect(function(state){
    return {IsEdit: state.isAdding, mang: state.mang}
})(InputDiv);