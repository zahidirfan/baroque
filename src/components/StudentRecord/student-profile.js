import React from 'react';
import axios from 'axios';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import student_picture from '../App/student.jpg';

const url_students  = '/api/students';



class StudentProfile extends React.Component {
	constructor(props){
		super(props);

	 	axios.get(url_students)
		    .then((res) => {    	
		    	setTimeout(() => {
		    				this.setState({data: res.data})
		    				console.log("From constructor");	
							console.log(this.state.data);
		                 }, 
		                 2000)
		    }) 


		 this.handleSelectChange = this.handleSelectChange.bind(this);
	 
		// TODO : This should come from the database call 
		this.state = {
			name : 'Apple Smith',
			class : 'Five',
			address: '333 , Beverly Hills, 90210, California',
			picture: '../App/student.jpg'
		};
	}


	handleSelectChange(value){
    		//this.setState( {userInput : document.getElementById("student_selection").value});
    		console.log("Selection Changed to : " + value.value);
    		this.setState({
    			name : this.state.data[value.value].name,
    			class : this.state.data[value.value].class,
    			address : this.state.data[value.value].Address
    		});
  	}



	
	render (){ 
			if (!this.state.data) return (
					<div>
						<h2> Student Profile </h2> 
						<p>Loading...</p>
					</div>
					);


			 var options = [];
			this.state.data.map (function (student) {
					options.push({ 
							value : student.id,
							label : student.name
						})

				});

			return ( 
				<div align='left'>
					<h2> Student Profile </h2>
					<Select
							  name="student_selection"
							  value="Please select a value"
							  options={options}
							  onChange={this.handleSelectChange}
					/>

					<div className="col-sm-3">
	          			<img src={student_picture} size='fit' alt=""/>
	        		</div>
        		 	
        		 	<div className="col-sm-3">
    		 		
						<b>Name    : </b> {this.state.name} <br/>
						<b>Class   : </b> {this.state.class} <br/>
						<b>Address : </b> {this.state.address} <br/>
        		</div>
			</div>
		);
	}
}

export default StudentProfile;