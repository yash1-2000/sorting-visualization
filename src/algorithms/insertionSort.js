export function insertion(array){

    let demo = []

    for(let i = 1 ; i < array.length ; i++){

        for(let j = i ; j > 0 ; j--){
            if(array[j] < array[j-1]){
                [array[j],array[j-1]] = [array[j-1],array[j]]
                demo.push([j,j-1,'red'])
                demo.push([j,j-1,'turquoise'])
                demo.push([array[j-1],j-1,array[j],j])

            }else{
                break;
            }
        }

    }
    return demo
}