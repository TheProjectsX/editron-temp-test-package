import Editron from "./components/Editron/editor";

const App = () => {
    // const demoData = [
    //     {
    //         tag: "h2",
    //         type: "heading",
    //         data: {
    //             html: "How to write your first Python Code!",
    //         },
    //         id: "VYRxuHYKZr",
    //     },
    //     {
    //         tag: "p",
    //         type: "paragraph",
    //         data: {
    //             html: "Write the basic <b>Hello, World</b>&nbsp;in <b>print </b>function. The most easiest of them all!",
    //         },
    //         id: "e_i2_hVylV",
    //     },
    //     {
    //         tag: "pre",
    //         type: "code",
    //         data: {
    //             code: 'print("Hello, World!")',
    //         },
    //         id: "jNpqOx9ZSf",
    //     },
    //     {
    //         tag: "p",
    //         type: "paragraph",
    //         data: {
    //             html: "Hooray!! Your first python programming!",
    //         },
    //         id: "7fVkDVCvnw",
    //     },
    //     {
    //         id: "uE65TCxDHl",
    //         type: "quote",
    //         tag: "blockquote",
    //         data: {
    //             quote: '"Soemthing is on the way, now!"',
    //         },
    //     },
    //     {
    //         tag: "blockquote",
    //         type: "quote",
    //         data: {
    //             quote: '"sdasdasdas"',
    //             type: "highlighted"
    //         },
    //         id: "PKhR0Eqlbi",
    //     },
    // ];

    const [Editor, save] = Editron({});

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
