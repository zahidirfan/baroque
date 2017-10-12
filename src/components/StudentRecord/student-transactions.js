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
          amount : 8500,
          type : 'credit'
        }
      ]
    };
  }

  render(){

    let credits = 0;
    let debits = 0 ;

    function comp(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

    this.state.student_transactions.sort(comp);

    for (var i=0 ; i < this.state.student_transactions.length; i++) {
        if (this.state.student_transactions[i].type === 'credit')  {
          credits = this.state.student_transactions[i].amount + credits;

        } 
        else  {
          debits = this.state.student_transactions[i].amount + debits;
        }  
    }


    function findAmount(amount, type) {
      if (type==='credit') {
        return <td > {amount}</td>;
      } else {
        return <td style ={{color:'red'}}> {amount}</td>;
      }
    }

    function accountFormat(amount){
      return amount >0? 'Rs.' + amount : <span style= {{color:'red'}}>{'Rs. (' + -1*amount + ')' }</span>;
    }


    return (
        <div>
          <h2> Recent Transactions Record </h2>
          <table className="table table-bodered table-striped" style={{overflow:'scroll', height:'350px'}}>
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
             
              <tr className="info"> 
                  <td> Total </td>
                  <td > {accountFormat(credits)} </td>
                  <td> {accountFormat(-1* debits)} </td>
             </tr>
            </tbody>
          </table>
          <h2 align='right'> Balance : {accountFormat(credits-debits)} </h2>
        </div>


      );
  }
}

export default StudentTransactions;