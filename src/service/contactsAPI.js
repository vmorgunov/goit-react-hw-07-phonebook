import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContacts(id, name, number) {
  const contact = {
    id,
    name,
    number,
  };
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
