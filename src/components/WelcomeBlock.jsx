import React from "react";
import {connect} from 'react-redux';

const WelcomeBlock = (props) => (
  <section>
    <h2>Hello there</h2>
    {
      props.detailNeeded && <h3 style={{color: 'red'}}>I give you full data access</h3>
    }
  </section>
)

// OLD WAY OF CALLING REDUX STATE
const mapStateToProps = (state) => {
  return {
    detailNeeded: state.detailNeeded
  }
};

export default connect(mapStateToProps)(WelcomeBlock);
