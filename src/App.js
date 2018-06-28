import React, { Component } from 'react';
import './App.css';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux'
import * as actions from './store/actions';
import UserDetails from './components/UserDetails';
class App extends Component {
  state = {
    empId: '',
    dept: '',
    reset: 0
  }
  componentDidMount = () => {
    this.props.deptList();
  }
  getUserDetailsById = () => {
    if (this.state.empId) {
      this.props.getUserDetails(this.state.empId);
      this.setState({ reset: 0 });
    } else {
      alert('Please select the EmployeeId')
    }
  }

  clearUserDetails = () => {
    this.setState({ dept: '', empId: '', reset: 1 });
    this.props.clearUserDetails();
  }

  onChangedDept = (dept) => {
    this.props.onSelectingDept(dept.key);
    this.setState({ dept: dept.key, reset: 0 });

  }
  onChangedEmpId = (emp) => {
    this.setState({ empId: emp.key, reset: 0 });

  }
  render() {
    console.log(this.props.data);

    return (
      <div className="container" key={this.state.reset}>
        <div className="header-container ">
          <Dropdown
            defaultSelectedKey={this.state.dept}
            placeHolder="Select an Department"
            label="Departments:"
            id="Departments"
            ariaLabel="Basic dropdown example"
            options={this.props.data.deptStore.deptList}
            onChanged={this.onChangedDept}
          />
          <Dropdown key={this.state.dept}
            defaultSelectedKey={this.state.empId}
            placeHolder="Select an Employee"
            label="Employee Id:"
            id="Employee"
            ariaLabel="Basic dropdown example"
            options={this.props.data.empStore.empList}
            style={{ marginLeft: '5px' }}
            onChanged={this.onChangedEmpId}
          />
          <DefaultButton
            primary={true}
            text="GetDetails"
            onClick={this.getUserDetailsById}
            style={{ marginLeft: '5px', marginTop: '28px' }}
          />
          <DefaultButton
            primary={true}
            text="Clear"
            onClick={this.clearUserDetails}
            style={{ marginLeft: '5px', marginTop: '28px' }}
          />
        </div>
        <UserDetails userData={this.props.data.user} />
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    data: store
  }
};
const mapDispatchToProps = dispatch => ({
  deptList: () => {
    dispatch(actions.getDeptList());
  },
  onSelectingDept: (deptId) => {
    dispatch(actions.getEmployeeIDs(deptId));
  },
  getUserDetails: (empId) => {
    dispatch(actions.getUserDetailsById(empId));
  }, clearUserDetails: () => {
    dispatch(actions.clearUserDetails());
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
