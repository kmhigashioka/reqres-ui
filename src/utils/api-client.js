const apiURL = process.env.REACT_APP_API_URL

async function client(endpoint) {
  const config = {
    method: 'GET',
  }

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
