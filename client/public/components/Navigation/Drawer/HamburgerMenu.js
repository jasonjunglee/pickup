import React, { Component } from 'react';
import HamburgerIcon from 'material-ui/svg-icons/navigation/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props)
}

  render() {
    return(
    <div id = "HamMenu">
    	<MuiThemeProvider>
    		<HamburgerIcon style={{'width':'50px','height':'50px'}}/>
    	</MuiThemeProvider>
    </div>  
    )
  }
}
