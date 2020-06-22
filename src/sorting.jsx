import React, { useState } from "react";
import "./App.css";
import { getMergeSortAnimations } from "./algorithms/mergsort.js";
import { bubble } from "./algorithms/bubblesort.js";
import { demos } from "./algorithms/quicksort.js";
import { insertion } from "./algorithms/insertionSort.js";

export default function Sorting() {
  
  const [array, setarray] = useState(() => {
    return [];
  });
  //const [val,setval] = useState(0)

  const total = 50;
  // This is the main color of the array bars.
  const PRIMARY_COLOR = "turquoise";

  // This is the color of array bars that are being compared throughout the animations.
  const SECONDARY_COLOR = "red";

  function reset() {
    let newarray = [];
    for (let i = 0; i <= total; i++) {
      newarray.push(randomNo(5, 1000));
    }
    setarray(newarray);
    // setval(arr.length)
    //console.log(array);
  }

  //console.log(arry)

  const numWidth = Math.floor(window.innerWidth / (array.length * 3));
  const width = `${numWidth}px`;
  const numMargin =
    array.length < 5
      ? 10
      : array.length < 8
      ? 8
      : array.length < 11
      ? 6
      : array.length < 20
      ? 4
      : array.length < 50
      ? 3.5
      : array.length < 100
      ? 3
      : array.length < 130
      ? 2.5
      : 2;
  const margin = `${numMargin}px`;

  //let animations = getMergeSortAnimations(array);
     function mergeSort() {
       const animations = getMergeSortAnimations(array);
       console.log(animations.length)
       for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
         const isColorChange = i % 3 !== 2;
         if (isColorChange) {
           const [barOneIdx, barTwoIdx] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           const barTwoStyle = arrayBars[barTwoIdx].style;
           const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
           setTimeout(() => {
             barOneStyle.backgroundColor = color;
             barTwoStyle.backgroundColor = color;
           }, i * 4);
         } else {
           setTimeout(() => {
             const [barOneIdx, newHeight] = animations[i];
             const barOneStyle = arrayBars[barOneIdx].style;
             barOneStyle.height = `${newHeight/2.5}px`;
           }, i * 4);
         }
       }
     }

     function bubblesort() {
      const animations = bubble(array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('bars');
        const isSwap = animations[i].length !== 4;
       if (isSwap) {
          const [barOneIdx, barTwoIdx,color] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color
            barTwoStyle.backgroundColor = color
          }, i * 2);
        } else {
          const [largeHeight,largeIdx,smallHeight,smallIdx] = animations[i];
          setTimeout(() => {
            const smallIdxStyle = arrayBars[largeIdx].style;
            const largeIdxStyle = arrayBars[smallIdx].style;
            largeIdxStyle.height = `${smallHeight/2}px`;
            smallIdxStyle.height = `${largeHeight/2}px`;
          }, i * 2);
        }
      
      }
    }

    function quicksort(){
      const animations = demos(array);
      console.log(animations.length)
      for (let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName('bars');
        if(animations[i].length === 2){
            const [pivot,color] = animations[i]
            const pivotStyle = arrayBars[pivot].style
            setTimeout(() => {
                pivotStyle.backgroundColor = color
            }, i * 2);
            
        }else if (animations[i].length === 3){
          const [left,right,color] = animations[i]
          const leftStyle = arrayBars[left].style
          const rightStyle = arrayBars[right].style
          setTimeout(() => {
             leftStyle.backgroundColor = color
             rightStyle.backgroundColor = color
        }, i * 2);
        }else{
          const [left,leftIdx,right,rightIdx] = animations[i];
            const leftStyle = arrayBars[leftIdx].style
            const rightStyle = arrayBars[rightIdx].style
            setTimeout(() => {
            leftStyle.height = `${left/2}px`; 
            rightStyle.height = `${right/2}px`; 
          }, i * 2);
        }
      }
    }

    function insertionSort(){
      let animations = insertion(array)
      for(let i =0 ; i < animations.length ;i++){
        const arrayBars = document.getElementsByClassName('bars')
        if(animations[i].length === 3){
          const [left,right,color] = animations[i]
          const leftStyle = arrayBars[left].style
          const rightStyle = arrayBars[right].style
          setTimeout(() => {
             leftStyle.backgroundColor = color
             rightStyle.backgroundColor = color
        }, i * 2);
        }else{
          const [left,leftIdx,right,rightIdx] = animations[i];
          const leftStyle = arrayBars[leftIdx].style
          const rightStyle = arrayBars[rightIdx].style
          setTimeout(() => {
          leftStyle.height = `${left/2}px`; 
          rightStyle.height = `${right/2}px`; 
        }, i * 2);
        }

      }

    }

  return (
    <div>
      <div className="container">
        <div className = 'barwrapper'>
        {array.map((no, idd) => (
          <div
            className="bars"
            key={idd}
            style={{
              height: `${no / 2.5}px`,
              width: width,
              marginLeft: margin,
              marginRigh: margin,
              backgroundColor: PRIMARY_COLOR,
            }}
          ></div>
        ))}
        </div>
      </div>
      <div className = 'buttoncontainer'>
        <button onClick={reset} style = {{ color:'white'}}>click</button>
        <button onClick={mergeSort} style = {{ color:'white'}}>mergeSort</button>
        <button onClick={bubblesort} style = {{ color:'white'}}>bubblesort</button>
        <button onClick={quicksort} style = {{ color:'white'}}>quicksort</button>
        <button onClick={insertionSort} style = {{ color:'white'}}>insertionSort</button>
        </div>
    </div>
  );
}
function randomNo(a, b) {
  return Math.floor(Math.random() * b) + a;
}


