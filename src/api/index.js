
import api from './api'

export const reqSign_get=()=>(
  api.post('/api/sign_get',{},false)
)
