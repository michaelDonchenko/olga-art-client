import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const BankTransfer = () => {
  return (
    <div style={{ margin: '15px 0' }}>
      <Card style={{ maxWidth: '90%', margin: '0 auto' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <p>ההזמנה התקבלה בהצלחה.</p>
          <h4>Payment details for bank transfer:</h4>
          <p>בנק מזרחי טפחות - 20</p>
          <p>סניף ברק - 576</p>
          <p>חשבון 261176</p>
          <p>אולגה דונצ'נקו</p>

          <hr></hr>

          <p>
            Send us a payment screenshot on whatsApp to this number{' '}
            <span style={{ fontWeight: 700 }}>054-665-9069</span>, in order to
            make sure we know the payment is done.
          </p>

          <p>
            Once the admin recive your payment your order status will be changed
            to paid.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default BankTransfer
