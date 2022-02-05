const removeDuplicate = nums => {
  const nonDuplicate = [... new Set(nums)]
  let counter = nonDuplicate.length

  for (let i = 0; i < counter.length; i++) {
    nums[i] = nonDuplicate[i]      
  } 

  return counter
} 

export default removeDuplicate;