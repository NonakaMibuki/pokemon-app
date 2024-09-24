export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url) //データを取得
        .then((res) => res.json()) //JSON形式に変換
        .then((data) => resolve(data)); //JSON形式のデータを返す
    });
}

export const getPokemon = (url) =>{
    return new Promise((resolve,reject) => {
        fetch(url) //データを取得
        .then((res) => res.json()) //JSON形式に変換
        .then((data) => resolve(data)); //JSON形式のデータを返す
    })
};