import Editron from "./components/Editron/editor";

const App = () => {
    // const demoData = [
    //     {
    //         id: "Random",
    //         type: "heading",
    //         tag: "h1",
    //         data: { text: "Test" },
    //     },
    //     {
    //         id: "Random3",
    //         type: "paragraph",
    //         tag: "p",
    //         data: { text: "Test" },
    //     },
    //     {
    //         id: "Random2",
    //         type: "heading",
    //         tag: "h1",
    //         data: { text: "Test" },
    //     },
    // ];

    const [Editor, save] = Editron();

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-200 py-5">
            <div className="bg-white rounded-2xl max-w-2xl w-full px-8 py-6 mb-5">
                <Editor />
            </div>

            <button
                className="px-6 py-2.5 rounded-lg bg-[dodgerBlue] text-white"
                onClick={() => console.log(save())}
            >
                Save
            </button>
        </div>
    );
};

export default App;
