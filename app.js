let pronoun = ["the", "our"];
let adj = ["great", "big", "small"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".io", ".us"];

for (let i = 0; i <= pronoun.length - 1; i++) {
  for (let j = 0; j <= adj.length - 1; j++) {
    for (let h = 0; h <= noun.length - 1; h++) {
      for (let x = 0; x <= ext.length - 1; x++) {
        console.log(
          pronoun[i] +
            adj[j] +
            noun[h].slice(0, 4) +
            "." +
            noun[h].slice(4, 6) +
            ext[x]
        );
      }
    }
  }
}

/* for (i = 1; i < noun.length; i++){
    console.log(noun[i].slice(0,4) + "." + noun[i].slice(-2))
} */
