import Editron from "./components/Editron/editor";
const App = () => {
    const demoData = [
        {
            id: "Random",
            type: "heading",
            tag: "h1",
            data: { text: "Test" },
        },
        {
            id: "Random3",
            type: "paragraph",
            tag: "h1",
            data: { text: "Test" },
        },
        {
            id: "Random2",
            type: "heading",
            tag: "h1",
            data: { text: "Test" },
        },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-200 py-5">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
                <Editron values={demoData} />
            </div>
        </div>
    );
};

export default App;
