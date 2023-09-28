import '../globals.css';
import styles from '../page.module.css';

import Link from 'next/link';

import WeatherChart from './weather-chart';
import { getWeatherData } from '/lib/weather-data';

const Page = async () => {
    const response = await getWeatherData()
    const labels = response.periods.map((period) => period.timestamp)
    const datasets = [
        {
            label: 'Temperatures',
            data: response.periods.map((period) => period.temp),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]

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
            <WeatherChart data={{ labels, datasets }} />
        </main>
    )
}

export default Page