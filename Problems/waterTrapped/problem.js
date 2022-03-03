waterTrap = () =>
	{
		let total = 0;// variable for total water trapped

		for(let i = 1; i < n - 1; i++)// loop to iterate over array
		{
			// Find maximum element on its left
			let left = arr[i];
			for(let j = 0; j < i; j++)//to iterate on left of element
			{
				left = Math.max(left, arr[j]);// gives max element on the left of element at i
			}

			// Find maximum element on its right
			let right = arr[i];
			for(let j = i + 1; j < n; j++)// to iterate right on element
			{
				right = Math.max(right, arr[j]);// gives max element on the right of element at i
			}
			total += Math.min(left, right) - arr[i];// adding min of left and right to total that is max amount of water it can hold
		}
		return total;// returns total
	}
	
	let arr = [ 2, 0, 2]; // input array 
	let n = arr.length;// length of array

	console.log(waterTrap(arr));// passing array to calculate max water 