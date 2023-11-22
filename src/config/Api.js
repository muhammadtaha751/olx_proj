

async function postAd(title,description,price){
    fetch('http://localhost:4000/ads/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: 'Infinix Hot 8',
          description: 'dslada',
          price: 100
      })
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log('e --->', e))
}
export{
    postAd
}