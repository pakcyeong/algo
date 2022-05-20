function solution(nid) {
    var store = nid.toLowerCase(); 
    store = store.replace(/[^a-z\-\_\.0-9]/g,''); 
    for (var i = 0 ; i < nid.length ; i++){
        store = store.replace('..','.');  
    } 
    store = store.startsWith('.') ? store.slice(1) : store ; 
    store = store.endsWith('.') ? store.slice(0, -1) : store ;
    if(store.length == 0) store = store.concat('a');
    if(store.length >= 16) store = store.slice(0, 15);
    else if (store.length <= 2) 
        for(;store.length < 3;)
            store = store.concat(store.slice(-1));
    store = store.startsWith('.') ? store.slice(1) : store ; 
    store = store.endsWith('.') ? store.slice(0, -1) : store ;
    return store ;
}