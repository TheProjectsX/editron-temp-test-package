// import Editor from "./components/Editron/editor";
import Renderer from "./components/Editron/renderer";

const App = () => {
    // const [Component, save] = Editor({
    //     defaultBlock: "paragraph",
    //     values: [
    //         {
    //             id: "LBDLHHJ3uk",
    //             type: "paragraph",
    //             tag: "p",
    //             data: {
    //                 html: "I am testing this right now",
    //             },
    //         },
    //     ],
    //     config: {
    //         uploadImage(file) {
    //             return new Promise((resolve) =>
    //                 setTimeout(() => resolve("test"), 500)
    //             );
    //         },
    //     },
    // });
    const blocks = [
        {
            id: "LBDLHHJ3uk",
            type: "paragraph",
            tag: "p",
            data: {
                html: "I am<u> testing</u> <b>this rig</b>ht now",
                style: {},
            },
        },
        {
            id: "LBDLHHJ3ui",
            type: "code",
            tag: "pre",
            data: {
                code: `print("Hello, World!")`,
                style: {},
            },
        },
    ];

    const [Component] = Renderer();

    // return (
    //     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-200 py-5">
    //         <div className="bg-white rounded-2xl max-w-2xl w-full px-8 py-6 mb-5">
    //             <Component />
    //         </div>

    //         <button
    //             className="px-6 py-2.5 rounded-lg bg-[dodgerBlue] text-white"
    //             onClick={async () => console.log(await save())}
    //         >
    //             Save
    //         </button>
    //     </div>
    // );

    return (
        <div className="px-4 py-2 space-y-5">
            <Component blocks={blocks} />
        </div>
    );
};

export default App;
