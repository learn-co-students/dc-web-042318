import React from "react";
const hog = require("../cherub.png");

class HogTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  getHogImg = () => {
    let sluggedName = this.props.hog.name
      .split(" ")
      .join("_")
      .toLowerCase();
    let imgUrl = require(`../hog-imgs/${sluggedName}.jpg`);
    console.log(imgUrl);
    return imgUrl;
  };

  handleButtonClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { name, specialty } = this.props.hog;
    const weight = this.props.hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props.hog["highest medal achieved"];

    return (
      <div className="ui card eight wide column">
        <div className="image">
          <img src={this.getHogImg()} />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <button onClick={this.handleButtonClick}>
            {this.state.clicked ? "Hide Details" : "More Details"}
          </button>
          {this.state.clicked ? (
            <div className="meta">
              <p>Specialty: {specialty}</p>
              <p>Highest medal achived: {medal}</p>
              <p>
                weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
                Refrigerator with Thru-the-Door Ice and Water:
                {weight}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
