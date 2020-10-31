import React from "react";
import { connect } from "react-redux";
const App = () => <h2> App </h2>;

const mapStateToProps = (state) => {
  return {
    number: state
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    plus: num=> { dispatch: "PLUS",playload:{ num: num}};
  },
    minus: num=> { dispatch: "MINUS",playload:{ num: num}};
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
