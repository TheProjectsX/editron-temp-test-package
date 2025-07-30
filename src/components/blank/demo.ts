export const demo = [
    {
        tag: "h2",
        type: "heading",
        data: {
            html: "Building a Simple To-Do List App with HTML, CSS, and JavaScript",
        },
        id: "R19vde7ZOJ",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "Introduction",
        },
        id: "qujf0uilNm",
    },
    {
        tag: "p",
        type: "paragraph",
        data: {
            html: "Creating a to-do list app is a great beginner project to learn the basics of web development. In this article, we'll build a minimal but functional to-do list using HTML, a bit of CSS, and vanilla JavaScript.",
        },
        id: "XI77HDZKbO",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "NUuYwo2iuw",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "Features",
        },
        id: "j0e9P5qE7z",
    },
    {
        tag: "ul",
        type: "list",
        data: {
            values: [
                {
                    html: "Add Tasks",
                },
                {
                    html: "Mark Tasks as completed",
                },
                {
                    html: "Delete Tasks",
                },
            ],
        },
        id: "GqoWlFTXKE",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "NnPosG1scr",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "Tools you Need",
        },
        id: "EUdpOvty4j",
    },
    {
        tag: "ol",
        type: "list",
        data: {
            values: [
                {
                    html: "A modern web browser",
                },
                {
                    html: "A text editor like VS Code",
                },
                {
                    html: "Basic understanding of HTML, CSS, and JS",
                },
            ],
        },
        id: "HrXjjUOtBp",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "ieTsdRgyhq",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "Folder Structure",
        },
        id: "UItKovAFVd",
    },
    {
        tag: "pre",
        type: "code",
        data: {
            code: "/todo-app\n  ├── index.html\n  ├── style.css\n  └── script.js",
        },
        id: "piBKIQqdR1",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "Hl0U7XJz7Q",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "HTML Structure",
        },
        id: "4MZ4o0R9mE",
    },
    {
        tag: "pre",
        type: "code",
        data: {
            code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>To-Do List</title>\n  <link rel="stylesheet" href="style.css" />\n</head>\n<body>\n  <div class="container">\n    <h1>To-Do List</h1>\n    <input type="text" id="taskInput" placeholder="Enter a task..." />\n    <button onclick="addTask()">Add</button>\n    <ul id="taskList"></ul>\n  </div>\n  <script src="script.js"></script>\n</body>\n</html>',
        },
        id: "DWFkMZ-ora",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "vxXK4rgiF_",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "A Developer once said",
        },
        id: "sAS_2oMuxo",
    },
    {
        tag: "blockquote",
        type: "quote",
        data: {
            quote: "The best way to learn is by building. Keep creating, keep failing and keep learning.",
            author: "Unknown Programmer",
            type: "highlighted",
        },
        id: "1gnEJlJ3Z_",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "eZHCrBobit",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "HTML Live Preview with CSS and JS",
        },
        id: "b1j0ri6SAI",
    },
    {
        tag: "pre",
        type: "html-preview",
        data: {
            html: '<div class="preview">\n  <input type="text" id="previewInput" placeholder="Type something..." />\n  <button onclick="alert(\'Hello from preview!\')">Click Me</button>\n</div>',
            mode: "reveal",
            head: "",
            css: "  .preview {\n    font-family: sans-serif;\n    margin: 1em 0;\n  }\n  #previewInput {\n    padding: 0.5em;\n    margin-right: 0.5em;\n  }",
            js: "",
        },
        id: "EWFgPIcZAC",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "iLVu4P2r2Z",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "Task List status Table",
        },
        id: "TdotwhoQBr",
    },
    {
        tag: "table",
        type: "table",
        data: {
            headers: ["Task Name", "Status", "Priority"],
            body: [
                [
                    "Learn HTML",
                    '<table><tbody><tr><td data-start="2583" data-end="2599" data-col-size="sm"></td></tr></tbody></table><table><tbody><tr><td data-col-size="sm" data-start="2599" data-end="2612">✅ Done</td></tr></tbody></table>',
                    "High",
                ],
                [
                    "Style with CSS",
                    '<table><tbody><tr><td data-start="2626" data-end="2642" data-col-size="sm"></td></tr></tbody></table><table><tbody><tr><td data-col-size="sm" data-start="2642" data-end="2655">🕒 Pending</td></tr></tbody></table>',
                    "Medium",
                ],
                ["Write JS", "❌ Not Started", "High"],
            ],
        },
        id: "CFOKbKr2_K",
    },
    {
        tag: "img",
        type: "image",
        data: {
            file: {
                name: "Screenshot (35).jpg",
                src: "https://i.ibb.co/k2t0Fqjr/Screenshot-35.jpg",
                size: 522950,
            },
            type: "free",
        },
        id: "XOrh7Y3-mX",
    },
    {
        tag: "hr",
        type: "divider",
        data: {},
        id: "1xbSxo_zAP",
    },
    {
        tag: "h3",
        type: "heading",
        data: {
            html: "Conclusion",
        },
        id: "iM-hQW5XfB",
    },
    {
        tag: "p",
        type: "paragraph",
        data: {
            html: 'With just a few lines of code, you can build something functional and neat like a to-do list. Keep exploring, adding features like persistence using <code data-start="2887" data-end="2901">localStorage</code>, and maybe even adding drag-and-drop support.',
        },
        id: "xIdw-At61u",
    },
];
