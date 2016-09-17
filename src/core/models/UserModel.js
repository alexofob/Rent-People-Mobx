import { observable  } from 'mobx';

class User {

  @observable firstName;
  @observable lastName;
  @observable email;

}

export default User;
