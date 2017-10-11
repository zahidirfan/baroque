import React from 'react';

class StudentProfile extends React.Component {
	constructor(props){
		super(props);

		// TODO : This should come from the database call 
		this.state = {
			name : 'Apple Smith',
			class : 'Five',
			address: '333 , Beverly Hills, 90210, California'
		};
	}
	render (){ return (
			<div align='left'>
				<h2> Student Profile </h2>
				<b>Name    : </b> {this.state.name} <br/>
				<b>Class   : </b> {this.state.class} <br/>
				<b>Address : </b> {this.state.address} <br/>
			</div>
		);
	}
}

export default StudentProfile;