import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}</li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    );
  }
}

// this function return the STATE as props (this.props)
function mapStateToProps(state) {
  return {
    books : state.books
  };
}

// this functions returns PROPS available in all the container
// ass this.props.selectBook

// whenever selectBook ACTION is call, this functions is going
// to dispatch it to all the reducers
function mapDispatchToProps(dispatch) {
  // the second selectBook is actually the ACTION imported at the top
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
