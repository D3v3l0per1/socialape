import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Scream from "../components/Scream/Scream";
import StaticProfile from "../components/Profile/StaticProfile";

// MUI Stuff
import Grid from "@material-ui/core/Grid";

// Redux Stuff
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    profile: null,
    screamIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;

    if (screamId) this.setState({ screamIdParam: screamId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    const { screamIdParam } = this.state;

    const screamsMarkup = loading ? (
      <p>Loading...</p>
    ) : screams === null ? (
      <p>No screams from this user</p>
    ) : !screamIdParam ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map(scream => {
        if (scream.screamId !== screamIdParam)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );

    return (
      <Grid container spacing={6}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <p>Loading...</p>
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(user);
