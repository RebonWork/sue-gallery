export async function deleteSingleImage(publicID) {
  const deleteCover = await fetch(`${process.env.NEXTAUTH_URL}/api/upload`, {
    method: "DELETE",
    body: JSON.stringify(publicID),
  });
}
export async function deleteSingleImageClient(publicID) {
  const deleteCover = await fetch("/api/upload", {
    method: "DELETE",
    body: JSON.stringify(publicID),
  });
}
export async function uploadSingleImageClient(image) {
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
    
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

  const base64 = await convertBase64(image)
  const res = await fetch("/api/upload", {
    method: "POST",
    body: JSON.stringify(base64),
  }).then(async (response) => await response.json());
  return res
}



export async function convertBase64 (file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
    
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


