function shuffleWord(arr){
    const Arr = arr.split('');
    for(let i = Arr.length -1; i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        [Arr[i] ,Arr[j]] = [Arr[j] , Arr[i]]
    }
    return Arr ;
}
export default  shuffleWord ;