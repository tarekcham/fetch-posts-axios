import React, { Component } from "react";

export default class Test extends Component {
	state = {
		name: ""
	};

	

	render() {
		
		return (
			<div>
				<p>{this.props.propss}</p> 
				
			</div>
		);
	}
}
