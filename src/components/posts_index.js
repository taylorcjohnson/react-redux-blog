import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

//export default connect(null, mapDispatchToProps)(PostsIndex);
export default connect(null, { fetchPosts: fetchPosts })(PostsIndex); // refactor replaces mapDispatchToProps function
export default connect(null, { fetchPosts })(PostsIndex); // refactor again with ES6 syntax
