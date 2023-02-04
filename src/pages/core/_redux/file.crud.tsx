import axios from "axios"

export const FILE_URL = `${process.env.REACT_APP_API}files`

export function uploadFile(data: any){
  return axios.post(`${FILE_URL}`,data,{
    headers:{"Content-Type": "multipart/form-data"}
  });
}

