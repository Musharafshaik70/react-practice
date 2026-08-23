const shows = [
    {
        id: 1,
        title: "The Component Returns",
        time: "10:00 AM",
        hall: "Hall A",
    },
    {
        id: 2,
        title: "Attack of the Re-render",
        time: "12:30 PM",
        hall: "Hall B",
    },
    {
        id: 3,
        title: "Virtual DOM Nights",
        time: "04:00 PM",
        hall: "Hall C",
    },
];

function App() {
    return (
        <>
            <h1>Hello from foundations-02</h1>
            <section>
                {shows.map((show) => (
                    <h3>{show.title}</h3>
                ))}
            </section>
        </>
    );
}

export default App;
