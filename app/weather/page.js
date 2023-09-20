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
            <table>
                <th>Forecast</th>
                {
                    response.periods.map((period) =>
                        <tr>
                            <td><img src={period.icon} /></td>
                            <td>{period.description}</td>
                            <td>{period.temp}</td>
                            <td>{period.timestamp}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default Page