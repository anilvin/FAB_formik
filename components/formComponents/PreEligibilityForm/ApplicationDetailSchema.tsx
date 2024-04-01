import * as yup from 'yup';

const validationSchema = yup.object({
  businessIncome: yup.number().min(300000).required('please enter your Business income'),
  netProfit: yup.number().min(300000).required('please enter your Net Profit'),
  rentalIncome: yup.number().min(200000).required('please enter your Rental Income'),
  tenor: yup.number().max(180).required('please enter tenor in month'),
  currentCompanyTernover: yup.number().required('Please enter your Last Name'),
});
export default validationSchema;
