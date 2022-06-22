export const filterRating = (array,star) => {

    if(star === null){
        return array;
    }else{
        return array.filter(mov => mov.vote_average < (star*2) && mov.vote_average >= ((star*2)-2))
    }

}
