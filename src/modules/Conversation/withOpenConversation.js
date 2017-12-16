import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  openConversation
} from './conversationAction';


const withOpenConversation = (WrappedComponent) => {
 class WithOpenConversation extends Component {
   handleClick =  (conversationId, openConversation) => (e)  => {
    openConversation(conversationId);
   }
   render() {
     const { conversationId, openConversation, ...rest} = this.props;
     return (
       <WrappedComponent onClick={this.handleClick(conversationId, openConversation)} {...rest} />
     );
   }
 };

  const mapDispatchToProps = (dispatch) => ({
    openConversation: (conversationId) => dispatch(openConversation(conversationId))
  });

  return connect(null, mapDispatchToProps)(WithOpenConversation);
};

export default withOpenConversation;
