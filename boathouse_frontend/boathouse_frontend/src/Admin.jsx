import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './admin.css';

function Header() {
    return (
        <header className="header">
            <h1>Boathouse Admin Dashboard</h1>
        </header>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#customers">Customers</a></li>
                <li><a href="#bookings">Bookings</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </aside>
    );
}

function Chart({ type, title }) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: title,
                data: type === 'bar' ? [12, 19, 3, 5, 2, 3] : [15, 29, 5, 10, 20, 30],
                backgroundColor: type === 'bar' ? 'rgba(75, 192, 192, 0.2)' : undefined,
                borderColor: type === 'bar' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: type !== 'bar',
                tension: type !== 'bar' ? 0.1 : undefined,
            },
        ],
    };

    return type === 'bar' ? (
        <Bar data={data} options={{ scales: { y: { beginAtZero: true } } }} />
    ) : (
        <Line data={data} options={{ scales: { y: { beginAtZero: true } } }} />
    );
}

function Dashboard() {
    return (
        <section id="dashboard">
            <h2>Dashboard</h2>
            <div className="charts">
                <Chart type="bar" title="New Customers" />
                <Chart type="line" title="Bookings" />
            </div>
        </section>
    );
}

function   Admin() {
    return (
        <div className="container">
            <Header />
            <Sidebar />
            <main className="main-content">
                <Dashboard />
            </main>
        </div>
    );
}

export default Admin;
