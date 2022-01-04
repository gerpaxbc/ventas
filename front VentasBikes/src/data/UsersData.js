import axios from 'axios'

export const UsersRepository = () => {
  return {
    setUsers: (data) => {
      return axios.post('http://localhost:4000/users', data)
    },
    updateUser: (data, id) => {
      return axios.put(`http://localhost:4000/users/${id}`, data)
    },
    deleteUser: (id) => {
      return axios.delete(`http://localhost:4000/users/${id}`)
    }
  }
}
