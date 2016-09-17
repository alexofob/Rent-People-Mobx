import React, { PropTypes } from 'react';
import { observable , action } from 'mobx';
import { observer } from 'mobx-react';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import MdPerson from 'react-icons/lib/md/person';
import AuthMenu from '../AuthMenu';


@observer
class AuthNav extends React.Component {
  @observable open = false; 
  @observable anchorEl = null; 

  @action handleMouseOver = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.open = true;
    this.anchorEl = event.currentTarget;

  };

  @action handleRequestClose = () => this.open = false;
  

  render() {
    const { firstName, handleLogout } = this.props;
    return (
      <div>
        <FlatButton
          onMouseOver={this.handleMouseOver}
          label={firstName}
          labelStyle={{textTransform: 'capitalize'}}
          labelPosition="before"
          icon={<MdPerson />}
        />
        <Popover
          open={this.open}
          anchorEl={this.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          autoCloseWhenOffScreen
        >
          <AuthMenu
            logout={handleLogout}
          />
        </Popover>
      </div>
      );
  }
}


AuthNav.propTypes = {
  firstName: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default AuthNav;
