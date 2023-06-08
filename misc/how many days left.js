function calculateMonthsRemaining(startDate, currentProgress) {
    // Convert the start date string to a Date object
    const startDateObj = new Date(startDate);
    
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the number of months remaining
    const totalMonths = 100 / currentProgress;
    const elapsedMonths = (currentDate.getFullYear() - startDateObj.getFullYear()) * 12 + (currentDate.getMonth() - startDateObj.getMonth());
    const remainingMonths = Math.round(totalMonths - elapsedMonths);
  
    // Calculate the number of days passed
    const elapsedDays = currentDate.getDate() - startDateObj.getDate();
  
    console.log(`time passed: months  ${elapsedMonths} days ${elapsedDays}`);
    
    return remainingMonths;
  }
  
  // Example usage
  const startDate = '2023-05-20'; // Format: YYYY-MM-DD
  const currentProgress = 33; // Percentage of course completed
  
  const monthsRemaining = calculateMonthsRemaining(startDate, currentProgress);
  console.log('Months remaining:', monthsRemaining);
  