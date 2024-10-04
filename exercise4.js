


document.getElementById("showDataButton").addEventListener("click", function() {
    const data = `
    <div>
    This is DOM Manipulation
    </div>
    `;
    const dataContainer = document.getElementById("showData");
    dataContainer.innerHTML = data;
});