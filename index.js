const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

const getIss = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
}

getIss();