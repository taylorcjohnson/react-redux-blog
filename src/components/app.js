import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Bloggy McBlogFace"/>
        {this.props.children}
      </div>
    );
  }
}
