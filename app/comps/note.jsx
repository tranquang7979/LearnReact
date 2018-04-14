var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Note = createReactClass({
//var Note = React.createClass({

    getInitialState(){
        return { IsEdit: false };
    },
    edit(){
        this.setState({IsEdit: true});
    },
    cancel(){
        this.setState({IsEdit: false});
    },
    submit(){
        var that = this;
        $.post("/save-note", {id: this.props.id, note: this.refs.txt.value}, function(data){        
            this.props.list.setState({mang: data});
            that.setState({IsEdit: false});
        });
    },
    remove(name){
        var that = this;
        $.post("/remove-note", {note: name}, function(data){        
            list.setState({mang: data});
        });
    },
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
});
module.exports = Note;