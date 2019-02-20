import axios from 'axios'
const baseUrl = '/api/temperatures'

const getData = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addData = async data => {
  const response = await axios.post(baseUrl, data)
  return response.data
}

export default { getData, addData }
