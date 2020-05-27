export const read = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
    method : 'GET',
    headers : {
      Accept : 'application/json',
      'Content-Type' : 'application',
      Authorization : `Bearer ${token}`
    }
  })
  .then(res => {
    return res.json()
  })
  .catch(err => console.log(err))
};

export const remove = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
    method : 'DELETE',
    headers : {
      Accept : 'application/json',
      'Content-Type' : 'application',
      Authorization : `Bearer ${token}`
    }
  })
  .then(res => {
    return res.json()
  })
  .catch(err => console.log(err))
};

export const list = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method : 'GET',
  })
  .then(res => {
    return res.json()
  })
  .catch(err => console.log(err))
};