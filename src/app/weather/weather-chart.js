"use client"

import '../globals.css';
import styles from '../page.module.css';

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const options = { maintainAspectRatio: false }

function WeatherChart({ data }) {
    return (
        <div className={styles.chart}>
            <Line options={options} data={data} height={null} width={null} />
        </div>
    )
}

export default WeatherChart