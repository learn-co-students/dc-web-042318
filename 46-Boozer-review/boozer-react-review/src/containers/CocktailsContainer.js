import React from "react";
import CocktailsList from "../components/CocktailsList";
import CocktailDetails from "../components/CocktailDetails";
import CocktailForm from "../components/CocktailForm";
import SearchBar from "../components/SearchBar";
import { Grid, Segment } from "semantic-ui-react";

class CocktailsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cocktails: [],
      clickedCocktail: null,
      searchTerm: ""
    };
  }
  handleSearchTerm = e => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm }, this.filterCocktails);
  };

  filterCocktails = () => {
    if (this.state.searchTerm) {
      return this.state.cocktails.filter(cocktail => {
        return cocktail.name.toLowerCase().includes(this.state.searchTerm);
      });
    } else {
      return this.state.cocktails;
    }
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(res => res.json())
      .then(json => this.setState({ cocktails: json }));
  };

  setClickedCocktail = cocktailId => {
    fetch(`http://localhost:3000/api/v1/cocktails/${cocktailId}`)
      .then(res => res.json())
      .then(json => this.setState({ clickedCocktail: json }));
  };

  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Column width={6}>
          <Segment>
            <SearchBar
              value={this.state.searchTerm}
              handleInputChange={this.handleSearchTerm}
            />
          </Segment>
        </Grid.Column>
        <Grid.Row stretch>
          <Grid.Column width={4}>
            <Segment style={{ height: "95vh", overflowY: "scroll" }}>
              <CocktailsList
                handleClick={this.setClickedCocktail}
                cocktails={this.filterCocktails()}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            {this.state.clickedCocktail ? (
              <Segment>
                <CocktailDetails cocktail={this.state.clickedCocktail} />
              </Segment>
            ) : null}
            <Segment>
              <CocktailForm /> {/* save this for last */}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CocktailsContainer;

// return (
//   <Grid columns={2} divided>
//     <Grid.Row stretch>
//       <Grid.Column width={4}>
//         <Segment>
//           <CocktailsList
//             handleClick={this.handleLiClick}
//             cocktails={this.state.cocktails}
//           />
//         </Segment>
//       </Grid.Column>
//       <Grid.Column width={12}>
//         {this.state.clickedCocktail ? (
//           <Segment>
//             <CocktailDetails cocktail={this.state.clickedCocktail} />
//           </Segment>
//         ) : null}
//         <Segment>
//           <CocktailForm />
//         </Segment>
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// );
