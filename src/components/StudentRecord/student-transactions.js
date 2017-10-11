import React from 'react';



class StudentTransactions extends React.Component {
  constructor (props){
    super(props);

    // TODO : This data should come from the database 

    this.state = { student_id : this.props.student_id, 
      student_transactions : [
        {
          date : '1-Oct-2016',
          fee_category : 'Tuition',
          amount : 8500,
          type : 'debit'
        },
        {
          date : '15-Oct-2016',
          fee_category : 'Payment',
          amount : 8185,
          type : 'credit'
        },
        {
          date : '1-Oct-2016',
          fee_category : 'Dhobi',
          amount : 805,
          type : 'debit'
        },
        {
          date : '1-Oct-2016',
          fee_category : 'Tuition',
          amount : 85,
          type : 'debit'
        },
        {
          date : '1-November-2016',
          fee_category : 'Tuition',
          amount : 8500,
          type : 'debit'
        },
        {
          date : '1-November-2016',
          fee_category : 'Stationery',
          amount : 565,
          type : 'debit'
        },
        {
          date : '15-November-2016',
          fee_category : 'Payment',
          amount : 85,
          type : 'credit'
        }
      ]
    };
  }

  render(){

    let balance = 0;
    let credits = 0;
    let debits = 0 ;

    function comp(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

    this.state.student_transactions.sort(comp);

    for (var i=0 ; i < this.state.student_transactions.length; i++) {
        if (this.state.student_transactions[i].status === 'credit')  {
          credits = this.state.student_transactions[i].amount + credits;

        } 
        else  {
          debits = this.state.student_transactions[i].amount + debits;
        }  
    }

    balance = credits - debits;

    function findAmount(amount, type) {
      if (type==='credit') {
        return <td > {amount}</td>;
      } else {
        return <td class='red'> {amount}</td>;
      }
    }


    return (
        <div>
          <table className="table table-bodered table-striped">
            <thead>
                <tr>
                  <th> Date </th>
                  <th> Category </th>
                  <th> Amount </th>
                </tr>
            </thead>
            <tbody align='left'>
              {this.state.student_transactions.map(function(item, key) {
             
               return (
                
                  <tr>
                      <td>{item.date}</td> 
                      <td> {item.fee_category} </td>
                      { findAmount(item.amount, item.type)}
                       
                  </tr>
                  
                )
             
             })}
             
              <tr class="info"> 
                
                  <td> Total </td>
                  <td > {credits} </td>
                  <td> {debits} </td>
             </tr>

            </tbody>
          </table>
        </div>


      );
  }
}

export default StudentTransactions;