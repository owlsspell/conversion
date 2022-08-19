import axios from "axios";

const link = "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/Users?pageSize=9&"

export const getUserList = (offset) => axios.get(link + (offset ? `offset=${offset}` : ""), {
  headers: {
    "Authorization": "Bearer key4v56MUqVr9sNJv"
  }
})
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  })


