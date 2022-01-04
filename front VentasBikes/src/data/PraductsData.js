import axios from 'axios'

export const ProductsRepository = (categoria) => {
  return {
    getProducts: (categoria) => {
      return axios.get(`http://localhost:4000/products/${categoria}`, {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {
          return response.data
        })
    },
    getProductId: (id) => {
      return axios.get(`http://localhost:4000/products/id/${id}`, {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {
          return [response.data]
        })
    },
    setProducts: (data) => {
      return axios.post('http://localhost:4000/products', data)
    },
    updateProduct: (data, id) => {
      return axios.put(`http://localhost:4000/products/${id}`, data)
    },
    deleteProduct: (id) => {
      return axios.delete(`http://localhost:4000/products/${id}`)
    }
  }
}
