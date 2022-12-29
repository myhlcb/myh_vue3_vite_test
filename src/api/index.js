import axios from '../utils/request';

export function login(data) {
  return axios({
    method: 'post',
    url: '/login',
    data,
  }).catch(err=>{
    console.log(err,333333)
  })
}
