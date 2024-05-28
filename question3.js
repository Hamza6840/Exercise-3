function checkApproval() {
    const grade1 = parseFloat(document.getElementById("grade1").value);
    const grade2 = parseFloat(document.getElementById("grade2").value);
    const absences = parseInt(document.getElementById("absences").value);
  
    const totalClasses = 20;
    const minimumPresence = 0.7;
    const minimumAverageGrade = 6.5;
  
    const averageGrade = (grade1 + grade2) / 2;
    const presencePercentage = (totalClasses - absences) / totalClasses;
  
    let resultMessage;
  
    if (presencePercentage < minimumPresence && averageGrade < minimumAverageGrade) {
      resultMessage = "Failed due to insufficient presence and average grade.";
    } else if (presencePercentage < minimumPresence) {
      resultMessage = "Failed due to insufficient presence.";
    } else if (averageGrade < minimumAverageGrade) {
      resultMessage = "Failed due to insufficient average grade.";
    } else {
      resultMessage = "Congratulations! The student is approved.";
    }
  
    document.getElementById("result").textContent = resultMessage;
  }