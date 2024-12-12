// Function to generate all dates of the year 2023
function printAllDays() {
    console.log('************************ Print All Days *****************************');
    const startDate = new Date(2023, 0, 1); // January 1, 2023
    const endDate = new Date(2023, 11, 31); // December 31, 2023
  
    let currentDate = startDate;
  
    while (currentDate <= endDate) {
      const day = currentDate.getDate(); // Day of the month
      const month = currentDate.getMonth() + 1; // Month (0-indexed, so +1)
      const year = currentDate.getFullYear(); // Year
  
      console.log(`All Days: ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`);
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  function skip1Alternative() {
    console.log('********************** Skip Alternative 1 Days *****************************');
    const startDate = new Date(2023, 0, 1); // January 1, 2023
    const endDate = new Date(2023, 11, 31); // December 31, 2023
  
    let currentDate = startDate;
    let printDay = true; // Toggle to skip every other day
  
    while (currentDate <= endDate) {
      const day = currentDate.getDate(); // Day of the month
      const month = currentDate.getMonth() + 1; // Month (0-indexed, so +1)
      const year = currentDate.getFullYear(); // Year
  
      if (printDay) {
        console.log(`Skipped 1 Days: ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`);
      }
  
      printDay = !printDay; // Toggle the flag
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  function skip2Alternative() {
    console.log('********************** Skip Alternative 2 Days *****************************');
    const startDate = new Date(2023, 0, 1); // January 1, 2023
    const endDate = new Date(2023, 11, 31); // December 31, 2023
  
    let currentDate = startDate;
    let skipCount = 0; // Counter to skip 2 days after every print
  
    while (currentDate <= endDate) {
      const day = currentDate.getDate(); // Day of the month
      const month = currentDate.getMonth() + 1; // Month (0-indexed, so +1)
      const year = currentDate.getFullYear(); // Year
  
      if (skipCount === 0) {
        console.log(`Skipped 2 Days: ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`);
        skipCount = 2; // Reset skip counter
      } else {
        skipCount--;
      }
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  // Call the functions
  printAllDays();
  skip1Alternative();
  skip2Alternative();
  