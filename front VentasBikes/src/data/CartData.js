import axios from 'axios'

export const CartRepository = () => {
  return {
    getCart: (email) => {
        return axios.get(`http://localhost:4000/cart/${email}`, {
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(response => {
            return response.data
          })
    },
    deleteProduct: (id) => {
      return axios.delete(`http://localhost:4000/cart/${id}`)
    }
    
  }
}