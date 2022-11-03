const Ajax = (method: string, url: string, data: any) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 || xhr.status < 300) {
                    let response = xhr.responseText;
                    try {
                        response = JSON.parse(response)
                    } catch (error) {
                        console.error(error);
                    }
                    resolve(response)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.send(JSON.stringify(data))
    })
}

export default Ajax
