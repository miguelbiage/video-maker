function start(){
    const content = {}
    content.searchTerm = askAndReturnSearch()

    function askAndReturnSearch(){
        return 'Term Example'
    }
    console.log(content)
}
start()