//let demo = []
export function demos(array) {
    const demo = [];
    if (array.length <= 1) return array;

    quick(array, 0, array.length - 1, demo);
    return demo;
  }

 function quick (array,start,end,demo){
    //let demo = []
    if (start >= end) return array
    let index = partition(array,start,end,demo)
        //let demo = values[1]
       // let demoarr = values[1]
                quick(array,start,index-1,demo)
                quick(array,index+1,end,demo)

}

function partition(array,start,end,demo){
    //let demo =[]
    let pivotindex = start;
    let pivot = array[end]
  //  console.log(`pivot = ${array[end]}`)
   // demo.push([end,"green"])
   // demo.push([end,"turquoise"])
    for(let i = start;i < end;i++){
        demo.push([pivotindex,i,"red"])
        demo.push([pivotindex,i,"turquoise"])
        if(array[i]<pivot){
            //demo.push([i,array[i],pivotindex,array[pivotindex]])
                let temp = array[pivotindex]
                array[pivotindex] = array[i]
                array[i] = temp
                //demo.push([array[i],array[index]])
               // console.log(`innerswap = ${[array[i],array[pivotindex]]}`)
                demo.push([array[i],i,array[pivotindex],pivotindex])
               
            pivotindex++
            //demo.push(`index = ${array[index]}`)
            
            //console.log(array)
        }//demo.push(`pivotindex = ${array[pivotindex]}`)
    }
    //demo.push([array[pivotindex],array[end]])
    let temp2 = array[pivotindex]
    array[pivotindex] =array[end]
    array[end] = temp2
   // console.log(`pivotindex = ${array[pivotindex]}`)
    //demo.push(`pivotindex = ${array[pivotindex]}`)
   // demo.push(`swapped= ${[array[index],array[end]]}`)
   // console.log(`swapped= ${[array[pivotindex],array[end]]}`)
    demo.push([array[end],end,array[pivotindex],pivotindex])
    //demo.push([array[pivotindex],pivotindex,array[end],end])


    return pivotindex
}