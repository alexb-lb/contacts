import React from 'react';
import {connect} from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import {startAddContact} from '../../actions/contacts';

export class AddContactPage extends React.Component {

  // onSubmit = (expense) => {
  //   this.props.startAddExpense(expense);
  //   this.props.history.push('/');
  // };

  render(){
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">

        </div>
      </div>
    )
  }
};

export default AddContactPage;

// const mapDispatchToProps = (dispatch) => ({
//   startAddExpense: (expense) => dispatch(startAddExpense(expense))
// });

// export default connect(undefined, mapDispatchToProps)(AddContact);