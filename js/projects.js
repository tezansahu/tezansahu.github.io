let cur_proj_lev = 0
let max_proj_lev = 1

function showMore(){
    if(cur_proj_lev == 0){
        document.getElementById("projects-more-1").style.display = "block";
    }

    cur_proj_lev += 1;

    if(cur_proj_lev == max_proj_lev){
        document.getElementById("show-more").style.display = "none";
    }
}