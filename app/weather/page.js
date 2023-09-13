import Link from 'next/link'
import Image from 'next/image'

import { getWeatherData } from '/lib/weather-data'

const Page = async () => {
    const response = await getWeatherData()

    return (
        <>
            <h1>Weather</h1>
            <section>
                <h2>{response.city} ({response.country})</h2>
            </section>
        </>
    )
}

export default Page