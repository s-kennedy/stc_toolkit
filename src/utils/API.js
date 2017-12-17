import { api } from './init'

export function savePage(pageId, data, token){
  const url = `/pages/${pageId}`;
  console.log('token in savePage', token)
  return api.put(url, data, { headers: { 'Authorization': 'Bearer ' + token } })
    .then((res) => {
      if (res.status === 200) {
        console.log('Page saved!') // Trigger redeploy
        console.log(res.data)
      } else {
        console.log('There was an error saving your page')
        console.log(res)
      }
    })
   .catch((err) => console.log(err)) // Handle errors
}
