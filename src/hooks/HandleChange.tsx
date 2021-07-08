const HandleChange = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  values: any,
  setValues: any
) => {
  return setValues({ ...values, [e.target.name]: e.target.value })
}

export default HandleChange
