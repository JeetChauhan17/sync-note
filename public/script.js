window.onload = function() {
    const converter = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdownArea = document.getElementById('markdown');

    var prevMdVal;
    

    pad.addEventListener('keydown', (e)=>{
        if(e.keyCode == 9){
            var start =  this.selectionStart
            var end =  this.selectionEnd

            var target = e.target
            var value = target.value

            target.value = value.substring(0, start)
                + "\t"
                + value.substring(end);

            this.selectionStart = this.selectionEnd = start+1

            e.preventDefault()
        }
    })



    const convertTextAreaToMarkdown = function(){
        const markdownText = pad.value;
        prevMdVal = markdownText
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };


    const didChangeOccur = function() {
        if(prevMdVal != pad.value){
            return true
        }
        return false
    }

    setInterval(() => {
        if(didChangeOccur()){
            convertTextAreaToMarkdown()
        }
    }, 1000);




    pad.addEventListener('input', convertTextAreaToMarkdown);

    sharejs.open(document.location.pathname, 'text', (err,doc)=>{
        doc.attach_textarea(pad)
        convertTextAreaToMarkdown()
    })



    if(document.location.pathname > 1){
        const docName = document.location.pathname.substring(1)

        sharejs.open(docName, 'text', (err, doc)=>{
            doc.attach_textarea(pad)
            convertTextAreaToMarkdown()
        })
    }
    convertTextAreaToMarkdown()
};