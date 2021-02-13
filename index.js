function min(...args) {
	return !args.length ? 0 : Math.min(...args)
}

function max(...args) {
	return !args.length ? 0 : Math.max(...args)
}

function avg(...args) {
	return !args.length ? 0 : (Math.max(...args) + Math.min(...args)) / 2
}

