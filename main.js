var chicagoInstitute = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number=3'
//console.log(chicagoInstitute)
fetch(chicagoInstitute)
.then(function(response){
    return response.json()
})  .then(function (data) {

    console.log(data)
    // console.log(data.data[0].date_display)
    // console.log(data.data[0].title)
    // console.log(data.data[0].artist_display)


    var art =  'https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg'
console.log(art)

fetch(art)
.then(function(response2){
return response2.json()
}).then(function(data2){
    
//  console.log(data2.config.iiif_url)
 
})
   
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
    console.log()
$("#image").text("hello")
})
