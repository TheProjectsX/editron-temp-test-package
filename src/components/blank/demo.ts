export const demo = {
    "blocks": [
        {
            "type": "heading",
            "data": {
                "tag": "h2",
                "html": "Building a Simple To-Do List App with HTML, CSS, and JavaScript"
            },
            "id": "R19vde7ZOJ"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "Introduction",
                "flagged": true
            },
            "id": "qujf0uilNm"
        },
        {
            "type": "paragraph",
            "data": {
                "tag": "p",
                "html": "Creating a to-do list app is a great beginner project to learn the basics of web development. In this article, we'll build a minimal but functional to-do list using HTML, a bit of CSS, and vanilla JavaScript."
            },
            "id": "XI77HDZKbO"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "NUuYwo2iuw"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "Features"
            },
            "id": "j0e9P5qE7z"
        },
        {
            "type": "list",
            "data": {
                "tag": "ul",
                "values": [
                    {
                        "html": "Add Tasks"
                    },
                    {
                        "html": "Mark Tasks as completed"
                    },
                    {
                        "html": "Delete Tasks"
                    }
                ]
            },
            "id": "GqoWlFTXKE"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "NnPosG1scr"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "Tools you Need"
            },
            "id": "EUdpOvty4j"
        },
        {
            "type": "list",
            "data": {
                "tag": "ol",
                "values": [
                    {
                        "html": "A modern web browser"
                    },
                    {
                        "html": "A text editor like VS Code"
                    },
                    {
                        "html": "Basic understanding of HTML, CSS, and JS"
                    }
                ]
            },
            "id": "HrXjjUOtBp"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "ieTsdRgyhq"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "Folder Structure"
            },
            "id": "UItKovAFVd"
        },
        {
            "type": "code",
            "data": {
                "tag": "pre",
                "code": "/todo-app\n  ├── index.html\n  ├── style.css\n  └── script.js",
                "label": ""
            },
            "id": "piBKIQqdR1"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "Hl0U7XJz7Q"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "HTML Structure",
                "flagged": true
            },
            "id": "4MZ4o0R9mE"
        },
        {
            "type": "code",
            "data": {
                "tag": "pre",
                "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>To-Do List</title>\n  <link rel=\"stylesheet\" href=\"style.css\" />\n</head>\n<body>\n  <div class=\"container\">\n    <h1>To-Do List</h1>\n    <input type=\"text\" id=\"taskInput\" placeholder=\"Enter a task...\" />\n    <button onclick=\"addTask()\">Add</button>\n    <ul id=\"taskList\"></ul>\n  </div>\n  <script src=\"script.js\"></script>\n</body>\n</html>",
                "label": "index.html"
            },
            "id": "DWFkMZ-ora"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "vxXK4rgiF_"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "A Developer once said"
            },
            "id": "sAS_2oMuxo"
        },
        {
            "type": "quote",
            "data": {
                "tag": "blockquote",
                "quote": "The best way to learn is by building. Keep creating, keep failing and keep learning.",
                "author": "Unknown Programmer",
                "type": "highlighted"
            },
            "id": "1gnEJlJ3Z_"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "eZHCrBobit"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "HTML Live Preview with CSS and JS"
            },
            "id": "b1j0ri6SAI"
        },
        {
            "type": "html-preview",
            "data": {
                "tag": "pre",
                "html": "<div class=\"preview\">\n  <input type=\"text\" id=\"previewInput\" placeholder=\"Type something...\" />\n  <button onclick=\"alert('Hello from preview!')\">Click Me</button>\n</div>",
                "mode": "reveal",
                "head": "",
                "css": "  .preview {\n    font-family: sans-serif;\n    margin: 1em 0;\n  }\n  #previewInput {\n    padding: 0.5em;\n    margin-right: 0.5em;\n  }",
                "js": ""
            },
            "id": "EWFgPIcZAC"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "iLVu4P2r2Z"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "Task List status Table"
            },
            "id": "TdotwhoQBr"
        },
        {
            "type": "table",
            "data": {
                "tag": "table",
                "style": {
                    "textAlign": "center"
                },
                "headers": [
                    "Task Name",
                    "Status",
                    "Priority"
                ],
                "body": [
                    [
                        "Learn HTML",
                        "✅ Done",
                        "High"
                    ],
                    [
                        "Style with CSS",
                        "🕒 Pending",
                        "Medium"
                    ],
                    [
                        "Write JS",
                        "❌ Not Started",
                        "High"
                    ]
                ]
            },
            "id": "CFOKbKr2_K"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h2",
                "html": "Alexia Midgar from <i>The Eminence in Shadow</i>",
                "flagged": true
            },
            "id": "ifu6jNx5n6"
        },
        {
            "type": "image",
            "data": {
                "tag": "img",
                "file": {
                    "name": "Screenshot (35).jpg",
                    "src": "https://i.ibb.co.com/7xJXPy0C/alexia-midgar-teis-2.png",
                    "size": 522950
                },
                "type": "free"
            },
            "id": "XOrh7Y3-mX"
        },
        {
            "type": "divider",
            "data": {
                "tag": "hr"
            },
            "id": "1xbSxo_zAP"
        },
        {
            "type": "heading",
            "data": {
                "tag": "h3",
                "html": "Conclusion",
                "flagged": true
            },
            "id": "iM-hQW5XfB"
        },
        {
            "type": "paragraph",
            "data": {
                "tag": "p",
                "html": "With just a few lines of code, you can build something functional and neat like a to-do list. Keep exploring, adding features like persistence using <code data-start=\"2887\" data-end=\"2901\">localStorage</code>, and maybe even adding drag-and-drop support."
            },
            "id": "xIdw-At61u"
        }
    ],
    "tableOfContents": [
        {
            "label": "Introduction",
            "id": "qujf0uilNm"
        },
        {
            "label": "HTML Structure",
            "id": "4MZ4o0R9mE"
        },
        {
            "label": "Alexia Midgar from The Eminence in Shadow",
            "id": "ifu6jNx5n6"
        },
        {
            "label": "Conclusion",
            "id": "iM-hQW5XfB"
        }
    ]
}
