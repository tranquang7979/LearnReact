var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');

var {toggle, removeItem} = require('action');

var Note = createReactClass({
//var Note = React.createClass({

    // getInitialState(){
    //     return { IsEdit: false };
    // },
    edit(){
        //this.setState({IsEdit: true});
        var {dispatch} = this.props;
        dispatch(toggle());
    },
    cancel(){
        var {dispatch} = this.props;
        dispatch(toggle());
    },
    submit(){
        var {dispatch, id} = this.props;
        dispatch({type: 'UPDATE_ITEM', index: id, item: this.refs.txt.value});
        dispatch(toggle());

        // var that = this;
        // var {list, id} = this.props;
        // $.post("/save-note", {id: id, note: this.refs.txt.value}, function(data){        
        //     list.setState({mang: data});
        //     that.setState({IsEdit: false});
        // });
    },
    remove(name){
        // var {list} = this.props;
        // $.post("/remove-note", {note: name}, function(data){        
        //     list.setState({mang: data});
        // });
        var {dispatch, id} = this.props;
        dispatch(removeItem(id));
    },
    render() {
        if(this.props.IsEdit){
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
});
module.exports = connect(function(state){
    return {IsEdit: state.isAdding};
})(Note);