$(document).ready(()=>{
    $('#searchform').on('submit',(e)=>{
        let searchtext=$('#searchtext ').val();
        getMovie(searchtext);
        e.preventDefault();
    });
});
function getMovie(searchtext){
    axios.get('http://www.omdbapi.com?s='+searchtext+ '&apikey=9be27fce')
    .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output ='';
        $.each(movies, (index,movie) => {
            output += `
            <div class="flex-container">
            <div class="flex-item">
            <img src="${movie.Poster}" >
            <h4 style="Yellow;margin-bottom:10px;width:300px;">${movie.Title}</h4>
            <a onclick="movieSelected('${movie.imdbID}')" class="btn" href="#">Movie Detail</a>
            </div>
            </div>
            `;
            
        });
        $('#movies').html(output);

    })
    .catch((err)=>{
    console.log(err);
    });
}


  
$(document).ready(function(){
    $(".toggle").on("click",function(){
      $('.ul').slideToggle(500);
       });
       })
	
