var chicagoInstitute = 'https://api.artic.edu/api/v1/artworks/51349/?fields=id,title,artist_display,date_display,main_reference_number=10'
//console.log(chicagoInstitute)
fetch(chicagoInstitute)
.then(function(response){
    return response.json()
})  .then(function (data) {

    console.log(data)
    console.log(data.config.iiif_url)

    // console.log(data.data[0].date_display)
    // console.log(data.data[0].title)
    // console.log(data.data[0].artist_display)
    var iiifUrl = data.config.iiif_url
var image_id = data.data.id
console.log(image_id)






     var art =  'https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id'
// console.log(art)

// fetch(art)
//  .then(function(response2){
//  return response2.json()
//  }).then(function(data2){
//   console.log(data2.config.iiif_url)
 
//  })
   
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    
    $('#imagre').append('<div>hello</div>');
$("#image").text("hello")
})
