export function convertIntoBase64(file) {
    return new Promise(function (resolve, reject) {
 
 
       const data = new FormData()
       data.append("file", file)
       data.append("upload_preset", "fqlwi7we")
       data.append("cloud_name", "dqijtuy3u")
       fetch("https://api.cloudinary.com/v1_1/dqijtuy3u/image/upload", {
          method: "post",
          body: data
       })
          .then(resp => resp.json())
          .then(data => {
             resolve(data?.secure_url)
          })
          .catch(err => reject(err))
    })
 }
 