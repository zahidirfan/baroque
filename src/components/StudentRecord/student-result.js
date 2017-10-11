import React from 'react';



class StudentResult extends React.Component {
  constructor (props){
    super(props);

    // TODO : This data should come from the database 
    // TODO: Ensure it comes from a webhook

    this.state = { student_id : this.props.student_id, 
      student_result : [
        {
          subject : 'English',
          marks : 85,
          total : 100
        },
        {
          subject : 'Urdu',
          marks : 65,
          total : 100
        },
        {
          subject : 'Mathematics',
          marks : 95,
          total : 100
        },
        {
          subject : 'General Science',
          marks : 77,
          total : 100
        },
        {
          subject : 'Islamiat',
          marks : 55,
          total : 75
        },
        {
          subject : 'Social Studies',
          marks : 65,
          total : 75
        },
      ]
    };
  }

  render(){

    let total_marks = 0;
    let total_marks_obtained = 0;
    let rows =[];
    for (var i=0 ; i < this.state.student_result.length; i++) {
      rows.push('<tr> <td>' +  this.state.student_result[i].subject +' </td> ');
      rows.push('<td> '+ this.state.student_result[i].marks + ' </td> ');
      rows.push(' <td> '+ this.state.student_result[i].total + ' </td> </tr>');

      total_marks_obtained = total_marks_obtained + this.state.student_result[i].marks;
      total_marks = total_marks + this.state.student_result[i].total;
    }

    return (
        <div>
        <h2> Latest Exam Result </h2>
          <table className="table table-bodered table-striped">
            <thead>
                <tr>
                  <th> Subject </th>
                  <th> Marks  Obtained </th>
                  <th> Total Marks </th>
                </tr>
            </thead>
            <tbody align='left'>
              {this.state.student_result.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.subject}</td>
                      <td>{item.marks}</td>
                      <td>{item.total}</td>
                      
                  </tr>
                )
             
             })}
             
              <tr className="info"> 
                
                  <td> Total </td>
                  <td > {total_marks_obtained} </td>
                  <td> {total_marks} </td>
                


             </tr>

            </tbody>
          </table>
        </div>


      );
  }
}

export default StudentResult;