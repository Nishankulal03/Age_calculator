function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please select your date of birth!");
        return;
    }

    const dobDate = new Date(dob);
    const now = new Date();
    const age = now.getFullYear() - dobDate.getFullYear();
    const monthDifference = now.getMonth() - dobDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}
