const TechSupport = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <h4 style={{ textAlign: 'center' }}>
        For any questions/customer support please contact us on whatsApp
      </h4>
      <div>
        <div>
          <i
            style={{ color: 'green' }}
            className='fab fa-whatsapp fa-3x mt-2 mx-1'
          ></i>
          <span
            style={{
              marginLeft: '10px',
              fontSize: '1.3rem',
              fontWeight: 700,
            }}
          >
            054-665-9069
          </span>
        </div>
      </div>
    </div>
  )
}

export default TechSupport
