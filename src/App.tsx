import Editron from "./components/Editron/editor";

const App = () => {
    // const demoData = [
    //     {
    //         tag: "h4",
    //         type: "heading",
    //         data: {
    //             html: "I Hear you!",
    //         },
    //         id: "Dk0kBZcbTX",
    //     },
    //     {
    //         tag: "p",
    //         type: "paragraph",
    //         data: {
    //             html: "Something is not Ok",
    //         },
    //         id: "ff6uTIJ8gD",
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
