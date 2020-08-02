// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
export function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
