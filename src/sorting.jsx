import React, { useContext } from "react";
import { Arraycontext, Speedcontext } from "./context/contexts";
import "./App.css";
import Sliderbar from "./components/control.jsx";
import { getMergeSortAnimations } from "./algorithms/mergsort.js";
import { bubble } from "./algorithms/bubblesort.js";
import { demos } from "./algorithms/quicksort.js";
import { insertion } from "./algorithms/insertionSort.js";

export default function Sorting() {
  // const [disable, setdisable] = useContext(Disablecontext);
  const [array, setarray] = useContext(Arraycontext);
  const [speed, setspeed] = useContext(Speedcontext);

  // useEffect(() => {
  //   console.log(disable);
  // }, [disable]);

  function SpeedFunction() {
    return speed;
  }

  let numWidth = Math.floor(window.innerWidth / (array.length * 2));

  let width = `${numWidth}px`;
  let numMargin =
    array.length < 5
      ? 9
      : array.length < 8
      ? 8
      : array.length < 11
      ? 5
      : array.length < 20
      ? 3
      : array.length < 50
      ? 2.5
      : array.length < 100
      ? 2
      : array.length < 130
      ? 2
      : 2;
  const margin = `${numMargin}px`;
  //let newspeed = 5

  let changespeed = SpeedFunction();
  let totallength;
  function mergeSort() {
    let newspeed = changespeed;
    //setdisable(previous => !previous)
    const values = getMergeSortAnimations(array);
    const animations = values[0];
    totallength = values[1];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bars");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "#85cfcb";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * newspeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight / 2.26}px`;
        }, i * newspeed);
      }
    }
    // InProcess(animations.length)
  }

  function bubblesort() {
    let newspeed = changespeed;
    const values = bubble(array);
    totallength = values[1];
    const animations = values[0];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bars");
      const isSwap = animations[i].length !== 4;
      if (isSwap) {
        const [barOneIdx, barTwoIdx, color] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * newspeed);
      } else {
        const [largeHeight, largeIdx, smallHeight, smallIdx] = animations[i];
        setTimeout(() => {
          const smallIdxStyle = arrayBars[largeIdx].style;
          const largeIdxStyle = arrayBars[smallIdx].style;
          largeIdxStyle.height = `${smallHeight / 2.26}px`;
          smallIdxStyle.height = `${largeHeight / 2.26}px`;
        }, i * newspeed);
      }
    } //totallength = animations.length;
  }

  function quicksort() {
    let newspeed = changespeed;
    const values = demos(array);
    const animations = values[0];
    totallength = values[1];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bars");
      if (animations[i].length === 2) {
        const [pivot, color] = animations[i];
        const pivotStyle = arrayBars[pivot].style;
        setTimeout(() => {
          pivotStyle.backgroundColor = color;
        }, i * newspeed);
      } else if (animations[i].length === 3) {
        const [left, right, color] = animations[i];
        const leftStyle = arrayBars[left].style;
        const rightStyle = arrayBars[right].style;
        setTimeout(() => {
          leftStyle.backgroundColor = color;
          rightStyle.backgroundColor = color;
        }, i * newspeed);
      } else {
        const [left, leftIdx, right, rightIdx] = animations[i];
        const leftStyle = arrayBars[leftIdx].style;
        const rightStyle = arrayBars[rightIdx].style;
        setTimeout(() => {
          leftStyle.height = `${left / 2.26}px`;
          rightStyle.height = `${right / 2.26}px`;
        }, i * newspeed);
      }
    }
  }

  function insertionSort() {
    let newspeed = changespeed;
    let values = insertion(array);
    const animations = values[0];
    totallength = values[1];
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bars");
      if (animations[i].length === 3) {
        const [left, right, color] = animations[i];
        const leftStyle = arrayBars[left].style;
        const rightStyle = arrayBars[right].style;
        setTimeout(() => {
          leftStyle.backgroundColor = color;
          rightStyle.backgroundColor = color;
        }, i * newspeed);
      } else {
        const [left, leftIdx, right, rightIdx] = animations[i];
        const leftStyle = arrayBars[leftIdx].style;
        const rightStyle = arrayBars[rightIdx].style;
        setTimeout(() => {
          leftStyle.height = `${left / 2.26}px`;
          rightStyle.height = `${right / 2.26}px`;
        }, i * newspeed);
      }
    }
  }

  function TimeOutLength() {
    return totallength;
  }

  return (
    <div className="All">
      <div className="container">
        {array.map((no, idd) => (
          <div
            className="bars"
            key={idd}
            style={{
              height: `${no / 2.26}px`,
              width: width,
              marginLeft: margin,
              marginRigh: margin,
              backgroundColor: "#85cfcb",
            }}
          ></div>
        ))}
      </div>
      <Sliderbar
        mergesort={mergeSort}
        bubblesort={bubblesort}
        quicksort={quicksort}
        insertionSort={insertionSort}
        TimeOutLength={TimeOutLength}
      />
    </div>
  );
}
