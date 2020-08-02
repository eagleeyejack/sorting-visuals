import React, { useEffect, useState } from "react"

import { randomIntFromInterval } from "../utils/randomIntFromIntervals"
import { getMergeSortAnimations } from "../algorithms/mergeSort"

const NUMBER_OF_ARRAY_BARS = 250
const ANIMATION_SPEED_MS = 3
const PRIMARY_COLOR = "#61dafb"
const SECONDARY_COLOR = "red"

const SortingAlgorithm = () => {
	const [array, setArray] = useState<any[]>([])

	const resetArray = () => {
		const newArray: any = []
		for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
			newArray.push(randomIntFromInterval(5, 730))
		}
		setArray(newArray)
	}

	const mergeSort = () => {
		const animations = getMergeSortAnimations(array)
		for (let i = 0; i < animations.length; i++) {
			const arrayBars: any = document.getElementsByClassName("array-bar")
			const isColorChange = i % 3 !== 2
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i]
				const barOneStyle = arrayBars[barOneIdx].style
				const barTwoStyle = arrayBars[barTwoIdx].style

				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR

				setTimeout(() => {
					barOneStyle.backgroundColor = color
					barTwoStyle.backgroundColor = color
				}, i * ANIMATION_SPEED_MS)
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i]
					const barOneStyle = arrayBars[barOneIdx].style
					barOneStyle.height = `${newHeight}px`
				}, i * ANIMATION_SPEED_MS)
			}
		}
	}

	const quickSort = () => {
		// We leave it as an exercise to the viewer of this code to implement this method.
	}

	const heapSort = () => {
		// We leave it as an exercise to the viewer of this code to implement this method.
	}

	const bubbleSort = () => {
		// We leave it as an exercise to the viewer of this code to implement this method.
	}

	useEffect(() => {
		resetArray()
	}, [])

	return (
		<div className="App">
			<div className="array-container">
				{array?.map((value, index) => (
					<div
						className="array-bar"
						key={index}
						style={{
							backgroundColor: PRIMARY_COLOR,
							height: `${value}px`
						}}></div>
				))}
			</div>
			<div className="button-container">
				<button className="button" onClick={() => mergeSort()}>
					Merge Sort
				</button>
				<button className="button" onClick={() => quickSort()}>
					Quick Sort
				</button>
				<button className="button" onClick={() => heapSort()}>
					Heap Sort
				</button>
				<button className="button" onClick={() => bubbleSort()}>
					Bubble Sort
				</button>
				<button className="button" onClick={() => resetArray()}>
					Reset Array
				</button>
			</div>
		</div>
	)
}

export default SortingAlgorithm
