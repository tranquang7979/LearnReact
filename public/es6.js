
class ES6Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalSubject: 10
        }
        this.addSubject = this.addSubject.bind(this);
    }

    addSubject(){
        this.setState({totalSubject: this.state.totalSubject + 1});
    }

    render() {
        return (
            <div>
                <p>Hello ES6! {this.props.txt}</p>
                <p>{this.state.totalSubject}</p>
                <button onClick={this.addSubject}>Add subject</button>
            </div>
        );
    };
}

ES6Page.defaultProps = {
    txt: 'Default value'
}

ReactDOM.render(
    <div>
        <ES6Page/>
        <ES6Page txt='NodeJS'/>
    </div>,
    document.getElementById("root")
);

//--------- class
function Person(name, age){
    this.age = age;
    this.name = name;
}
var person1 = new Person('Steven', 34);
console.log(person1);

// ES6
class PersonES6{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    sayHello(){
        return "Hello " + this.name;
    }
}
class Child extends PersonES6{
    constructor(name, age, hobby){
        super(name, age);
        this.hobby = hobby;
    }
    sayHello(){
        return "Hello " + this.name + "- Hobby: " + this.hobby;
    }
}

var person2 = new PersonES6('Tran Quang', 35);
var child = new Child('Son 1', 1, "Parachute Jump");
console.log(child.sayHello());

