import { Component } from "react";
import ProfileParent from "./ProfileParent";
class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("Profile ctor is called");
  }
  componentDidMount(){
    console.log('Profile component did mount is called.');
  }
  render() {
    console.log('Profile render is called');
    return <div><ProfileParent name={"asad"}/></div>;
  }
}
export default Profile;
