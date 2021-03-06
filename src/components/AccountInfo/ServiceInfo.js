import React, {Component} from 'react'
import {connect} from 'react-redux'
import ToggleButton from 'react-toggle-button'
import {setUserInfo, getUser} from '../../ducks/productReducer'
import {Link} from 'react-router-dom'


class ServiceInfo extends Component{
  constructor(){
    super()

    this.state = {
      first: "",
      last: '',
      address: '',
      zip: '',
      state: '',
      email: "",
      phone: '',
      message: false,
    }
  }

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    let{first, last, address, zip, state, email, phone, message} = this.state;
    return(
      <div>
        <input onChange={e => this.setState({first: e.target.value})} placeholder={this.props.user.first_name ? this.props.user.first_name : 'First Name'}></input>
        <input onChange={e => this.setState({last: e.target.value})} placeholder={this.props.user.last_name ? this.props.user.last_name : 'Last Name'}></input>
        <input onChange={e => this.setState({address: e.target.value})} placeholder={this.props.user.address ? this.props.user.address : 'Address'}></input>
        <input onChange={e => this.setState({zip: e.target.value})} placeholder={this.props.user.zip ? this.props.user.zip : 'Zip Code'}></input>
        <input onChange={e => this.setState({state: e.target.value})} placeholder={this.props.user.state ? this.props.user.state : 'State (TX, CA, ETC.'}></input>
        <input onChange={e => this.setState({email: e.target.value})} placeholder={this.props.user.email ? this.props.user.email : 'Email'}></input>
        <input onChange={e => this.setState({phone: e.target.value})} placeholder={this.props.user.phone ? this.props.user.phone : 'Phone number'}></input>
        <ToggleButton inactiveLabel={'No'} activeLabel={'Yes'} value={ this.state.message || false } onToggle={(value) => {this.setState({message: !value})}}/>
        <Link to='/confirmservice'><button onClick={() => this.props.setUserInfo(this.props.user.authid ,first, last, address, zip, state, email, phone, message)}>Submit</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {setUserInfo, getUser})(ServiceInfo)

{/* <form>
<ul class="form-style-1">
    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" />&nbsp;<input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
        <label>Subject</label>
        <select name="field4" class="field-select">
        <option value="Advertise">Advertise</option>
        <option value="Partnership">Partnership</option>
        <option value="General Question">General</option>
        </select>
    </li>
    <li>
        <label>Your Message <span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>  */}