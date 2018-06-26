import React from "react";
import SearchBar from "./search_bar";

// props:
// title
// icon
// tagline
// color

// default props { color: 'blue' }
// state: { count: number }
// this.state.count
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.nation = "United States";
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  // should be able to
  // increaseCounter = () => {
  increaseCounter() {
    // context! `this`
    // console.log(this);
    // function argument way of setting state
    // this.setState(state => ({ count: state.count + 1 }));

    // does the same thing
    // except it operates on the old state, not the updated state
    this.setState({ count: this.state.count + 1 });

    // this won't work!
    // this.state.count += 1;
  }

  render() {
    let props = this.props;
    return (
      <div className={`ui inverted ${props.color} menu`}>
        <a className="item">
          <h2 className="ui header">
            <i className={`${props.icon} icon`} />
            <div className="content">{props.title}</div>
            <div className="sub header">{props.subtitle}</div>
          </h2>
        </a>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCounter} className="ui button">
          Count Up
        </button>
        <SearchBar
          searchTerm={this.props.searchTerm}
          update={this.props.updateSearchTerm}
        />
      </div>
    );
  }
}

export default Navbar;

// const Navbar = (props = { color: "blue" }) => {
//   console.log(props);
//   return (
//     <div className={`ui inverted ${props.color} menu`}>
//       <a className="item">
//         <h2 className="ui header">
//           <i className={`${props.icon} icon`} />
//           <div className="content">{props.title}</div>
//           <div className="sub header">{props.subtitle}</div>
//         </h2>
//       </a>
//     </div>
//   );
// };
