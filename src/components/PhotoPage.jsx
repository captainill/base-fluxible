/**
 *
 * //photo/1?modal=true
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Photo from './Photo.jsx';
import PhotoStore from '../stores/PhotoStore';
import PageActionCreators from '../actions/PageActionCreators';
import Debug from 'debug';

const debug = Debug('-------  PhotoPage.jsx: ');

class PhotoPage extends React.Component {

  static contextTypes = {
    executeAction: React.PropTypes.func.isRequired,
    getStore: React.PropTypes.func.isRequired
  }

  constructor(props, context){
    super(props);

    this.context = context;

    this.handleResize = this.handleResize.bind(this);

    this.state = {
      photo: this.context.getStore(PhotoStore).get(props.photoId)
    }
  }

  componentDidMount(){
    this.context.executeAction(PageActionCreators.pageLoaded);

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount(){
    window.removeEventlistener('resize', this.handleResize);
  }

  handleResize(){
    const photo = React.findDOMNode(this.refs.photo);
    let winHeight = (window.innerHeight > 550) ? 550 : window.innerHeight;

    photo.style.height = winHeight + 'px';
  }

  render() {

    return (
      <div>
        <Photo ref="photo" photo={this.state.photo} key={'photo'}/>
      </div>
    );

  }
};

module.exports = PhotoPage;
