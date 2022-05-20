import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

export const getAllNotes = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
}

export const createNote = (newObject) => {
  return axios
    .post(baseUrl, newObject)
    .then((response) => response.data)
}

export const updateNote = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data)
}
