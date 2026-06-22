async function getData() {
    try {
        const response = await fetch("https://api.example.com");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
