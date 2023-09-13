export async function getWeatherData() {
    const response = await fetch('http://127.0.0.1:5000/weather')
    return response.json()
}