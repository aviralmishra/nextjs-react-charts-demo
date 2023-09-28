import '../globals.css'
import styles from '../page.module.css'

import Link from 'next/link'
import Image from 'next/image'

import { getWeatherData } from '/lib/weather-data'

const Page = async () => {
    const response = await getWeatherData()

    return (
        <main className={styles.main}>
            <Link href="/">Home</Link>
            <h2>{response.city} ({response.country})</h2>
            <table>
                <tbody>
                    {
                        response.periods.map((period) =>
                            <tr key={period.timestamp}>
                                <td><img src={period.icon} /></td>
                                <td>{period.description}</td>
                                <td>{period.temp}</td>
                                <td>{period.timestamp}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Page