import React from 'react';

class StudentPicture extends React.Component {
	render (){ return (
		<img src={this.props.image} size='fit' alt=""/>
		);
	}
}

export default StudentPicture;