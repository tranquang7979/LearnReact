
// global function
function getUserInformation(username){
    console.log(username);
}

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            TotalGame: this.props.totalGame,
            Birds: [{
                Name: 'Bird1',
                Start: 1
            },{
                Name: 'Bird2',
                Start: 2
            },{
                Name: 'Bird3',
                Start: 3
            }]
        };
    }

    // props
    getUserInfo = (username) => {
        getUserInformation(this.props.children);
    }

    // props
    login = () => {
        alert(this.props.children);
    }

    // state
    addGame = () => {
        /*var next = this.state.TotalGame;//console.log(next++);
        next++;
        this.setState({TotalGame: next});*/

        this.state.TotalGame = parseInt(this.state.TotalGame) + 1;
        this.setState(this.state);
    }
    
    render(){        
        return (
            <div>
                <h1>This is Header {this.props.title}</h1>                
                <p>{this.props.children}</p>
                <div>Total game: {this.state.TotalGame}</div>
                <button onClick={this.login}>Login</button><br/>
                <button onClick={this.getUserInfo}>Get User Information</button><br/>
                <button onClick={()=>{getUserInformation(this.props.children);}}>Get User Information (Arrow function)</button><br/>
                <button onClick={this.addGame}>Add More Game</button><br/>
                <TopMenu/>

                <InputTag/>

                <AngryBird data={this.state.Birds[2]}/>

                render html from string                
                {
                    this.state.Birds.map(function(value, index){
                        return <AngryBird data={value} key={index}/>
                    })
                }                
            </div>
        );            
    }
}

// set interval
class AngryBird extends React.Component{
    constructor(props){
        super(props);
        this.state = {ImgNumber: 1};
    }

    changeImage = () => {
        this.setState({ImgNumber: parseInt(this.state.ImgNumber)%6 + 1})
    }

    componentDidMount(){
        if(this.props.data != null)
            this.state.ImgNumber = this.props.data.Start;
        setInterval(this.changeImage, 500);
    }

    render(){
        return (
            <div>
                <h1>{this.props.data.Name}</h1>
                <img src={"images/a" + this.state.ImgNumber + ".png"} />
            </div>
        );
    }
}

// reference value
class InputTag extends React.Component{

    constructor(props){
        super(props);
        this.state = {CurrentNumber: 0};
    }

    show = () => {
        var text = this.refs.txt.value;
        console.log(text);
        var select = this.refs.sl.value;
        console.log(select);
    }

    addNumber = () => {
        this.state.CurrentNumber = parseInt(this.state.CurrentNumber) + 1;
        this.setState(this.state);
    }

    render(){
        return (
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Show</button><br/>

                <button onClick={this.addNumber}>Count {this.state.CurrentNumber} </button>
            </div>
        );
    }
}

class TopMenu extends React.Component{
    render(){
        return (
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        );
    }
}

class MainPage extends React.Component{
    render(){
        return (
            <Header title="EzSports" totalGame="10">This is children</Header>
        );
    }
}

ReactDOM.render(
    <MainPage />,
    document.getElementById("root")
);