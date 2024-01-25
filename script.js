const htmlCode = document.querySelector('#html-code');
const cssCode = document.querySelector('#css-code');
const jsCode = document.querySelector('#js-code');
const result = document.querySelector('#result');

const htmlEditor = CodeMirror.fromTextArea(htmlCode, {
    mode: 'xml',
    lineNumbers: true,
    theme: 'blackboard'
});

const cssEditor = CodeMirror.fromTextArea(cssCode, {
    mode: 'css',
    lineNumbers: true,
    theme: 'blackboard'
});

const jsEditor = CodeMirror.fromTextArea(jsCode, {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'blackboard'
});

function run() {
    
    localStorage.setItem('html_code', htmlEditor.getValue());
    localStorage.setItem('css_code', cssEditor.getValue());
    localStorage.setItem('js_code', jsEditor.getValue());

    result.contentDocument.body.innerHTML = `
        <style>${localStorage.css_code}</style>
        <div>${localStorage.html_code}</div> 
        <script>${localStorage.js_code}</script>
    `;
}

htmlEditor.on('change', run);
cssEditor.on('change', run);
jsEditor.on('change', run);

htmlEditor.setValue(localStorage.html_code || '');
cssEditor.setValue(localStorage.css_code || '');
jsEditor.setValue(localStorage.js_code || '');

run();
