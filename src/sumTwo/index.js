const twoSum = (list, target) => {

  for (let i = 0; i < list.length; i++) {
    const first = list[i];
    
    for (let j = 0; j < list.length; j++) {
      const second = list[j];
      if (i === j ) continue;

      const sum = first + second;
      if ( sum === target ) {
        return [i, j];
      }
    }
  }
}

export default twoSum;
