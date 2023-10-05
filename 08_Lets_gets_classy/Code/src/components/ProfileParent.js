import { Component } from "react";
class ProfileParent extends Component {
  constructor(props) {
    super(props);
    console.log("ProfileParent ctor is called with "+this.name);
    this.state = {
      age: 30,
      name:'ali'
    };
  }
  componentDidMount() {
    console.log("ProfileParent component did mount is called.");
    // this.setState({
    //     name:'az'
    // });
    if(false)
    this.inter = setInterval(() => {
        this.setState({
            age:this.state.age + 1
        });
        console.log('age is',this.state.age);
    }, 1000);
    
  }
  componentDidUpdate(previousprop,previousstate) {
    debugger
    console.log(previousprop);
    console.log(previousstate);
    if (this.state.name != previousstate.name) {
        console.log("ProfileParent component did update is called.");
    }
  }
  componentWillUnmount(){
  //  console.log('ProfileParent unmount');
    clearInterval(this.inter);
  }
  render() {
    const {name} = this.props;
    console.log("ProfileParent render is called");
    return <div>Name:{this.state.name}{this.state.age}</div>;
  }
}
export default ProfileParent;
