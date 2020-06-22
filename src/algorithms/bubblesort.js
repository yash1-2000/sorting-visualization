export function bubble(array){
    let demo = [];
        for(let i = 0;i<array.length;i++){
            for(let j=0;j<array.length-1-i;j++){
             //console.log(j)
           //  console.log(array[j])
               demo.push([j,j+1,"red"])
               demo.push([j,j+1,"turquoise"])
            // demo.push([array[j],array[j+1]])
                if (array[j]>=array[j+1]){
                    let temp = array[j]
                    array[j] = array[j+1]
                    array[j+1] = temp
                   // console.log(array)
                   //demo.push('swap')
                  //  demo.push([j,j+1])
                  demo.push([array[j+1],j+1,array[j],j]) 
                }
            }
        }
        return demo
    }