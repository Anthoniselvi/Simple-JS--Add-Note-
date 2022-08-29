    let myNotes = []

    const inputItem = document.getElementById ("inputItem")
    const submitItem = document.getElementById ("submitItem")
    const ulEl = document.getElementById ("ul-el")

    
    function submitNote() {
        myNotes.push(inputItem.value)
       inputItem.value = ""
       displayNotes()
    }

    
    function displayNotes() {
        let listNotes = ""
        for (let i=0; i<myNotes.length; i++) {
            listNotes += "<li>" + myNotes[i] + "</li>"
        }
        ulEl.innerHTML = listNotes
    }