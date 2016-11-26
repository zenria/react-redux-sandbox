// hack function that resolves automatically after some time...
function fetchData(){
    return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            resolve("coucou les amis! "+new Date());
        }, Math.random() * 2000 + 1000);
    });
}
export default fetchData;
