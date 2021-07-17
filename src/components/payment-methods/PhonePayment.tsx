import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Alert } from '@material-ui/lab'

const PhonePayment = () => {
  return (
    <div style={{ margin: '15px 0' }}>
      <Card style={{ maxWidth: '90%', margin: '0 auto' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <h4>Payment details for Phone payment:</h4>
          <p>ההזמנה התקבלה בהצלחה.</p>
          <p>
            <span>BIT\PAYBOX</span> את התשלום ניתן לבצע דרך{' '}
          </p>
          <p>או דרך כרטיס אשראי בשיחה טלפונית</p>
          <p>מספר לתשלום 054-665-9069</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PhonePayment
