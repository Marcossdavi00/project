const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)


db.defaults({ posts: [], albuns: [], todos: [] })
  .write()

db.get("albuns")
.push ( {  id : 31 ,
           title : "quam dolor", 
           body: " quisquam amet "
          } )  
.write ();

db.get("albuns")
.push ( {  id : 32 ,
           title : " natus consectetur", 
           body: " omnis\nveniam e expedita sit quos voluptas"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 33 ,
           title : "ab rerum non rerum consequatur ut ea unde", 
           body: " vel debitis et magnam"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 34 ,
           title : " atque nihil", 
           body: "molestiae nemo velit ut aut id quo"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 35 ,
           title : " repellendus praesentium", 
           body: "maiores magni mollitia accusamus ea nisi voluptate dicta"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 36 ,
           title : " magnam atque repellat", 
           body: "dolores impedit harum fugiat vitae"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 37 ,
           title : " ut velit", 
           body: "mnon doloremque neque beatae\nsed aut voluptas totam sit illum"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 38 ,
           title : "nesciunt ", 
           body: "quo doloremque cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
          } )  
.write ();

db.get("posts")
.push ( {  id : 39 ,
           title : "velit quia", 
           body: "voluptas voluptatem\nincidunt ea est distinctio odio"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 40 ,
           title : " rerum iure ut enim", 
           body: " qui incidunt\nut animi commodi"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 41 ,
           title : "repudiandae  rem in temporibus et", 
           body: "amet eius quis ta provident perspiciatis quia"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 42 ,
           title : "et vel ut", 
           body: "qui cons adipisci atque\nquaerat voluptatem adipisci repudiandae"
          } )  
.write ();

db.get("albuns")
.push ( {  id : 43 ,
           title : "incidunt  sequi", 
           body: "repellat  distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
          } )  
.write ();

db.get("albuns")
.push ( {  id: 44,
           title: "dolores ut placeat",
           body: "tenetur tempore officiis sequi cumque quod"
} )  
.write ();

db.get("albuns")
.push ( {   id: 45,
             title: " sunt neque et consequatur",
             body: "eos harum cupiditate ae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
             } )  
.write ();

db.get("albuns")
.push ( {   id: 46,
            title: " harum",
             body: "max aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
          } )  
.write ();

db.get("albuns")
.push ( {  id: 47,
           title: "i expedita",
          body: "vero et ea\nnumqua aut enim officiis in quam qui"
          } )  
.write ();

db.get("albuns")
.push ( {   id: 48,
           title: " dolor atque maxime aut cum",
           body: "quia nec fugit aut id quia\nratione optio eos iusto veniam iure"
          } )  
.write ();

db.get("albuns")
.push ( {  id: 49,
           title: "itaque est fugit",
           body: "asperiores fuga aut\nvoluptas sapiente vel "
          } )  
.write ();

db.get("albuns")
.push ( {  id: 50,
           title: "tempora assumenda error",
           body: "quas\nvoluptatem voluptatem iure quasi maxime voluptas nam"
          } )  
.write ();

db.get("posts")
.push ( {  id : 31 ,
           title : "quam dolor", 
           body: " quisquam amet "
          } )  
.write ();

db.get("posts")
.push ( {  id : 32 ,
           title : " natus consectetur", 
           body: " omnis\nveniam e expedita sit quos voluptas"
          } )  
.write ();

db.get("posts")
.push ( {  id : 33 ,
           title : "ab rerum non rerum consequatur ut ea unde", 
           body: " vel debitis et magnam"
          } )  
.write ();

db.get("posts")
.push ( {  id : 34 ,
           title : " atque nihil", 
           body: "molestiae nemo velit ut aut id quo"
          } )  
.write ();

db.get("posts")
.push ( {  id : 35 ,
           title : " repellendus praesentium", 
           body: "maiores magni mollitia accusamus ea nisi voluptate dicta"
          } )  
.write ();

db.get("posts")
.push ( {  id : 36 ,
           title : " magnam atque repellat", 
           body: "dolores impedit harum fugiat vitae"
          } )  
.write ();

db.get("posts")
.push ( {  id : 37 ,
           title : " ut velit", 
           body: "mnon doloremque neque beatae\nsed aut voluptas totam sit illum"
          } )  
.write ();

db.get("posts")
.push ( {  id : 38 ,
           title : "nesciunt ", 
           body: "quo doloremque cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
          } )  
.write ();

db.get("posts")
.push ( {  id : 39 ,
           title : "velit quia", 
           body: "voluptas voluptatem\nincidunt ea est distinctio odio"
          } )  
.write ();

db.get("posts")
.push ( {  id : 40 ,
           title : " rerum iure ut enim", 
           body: " qui incidunt\nut animi commodi"
          } )  
.write ();

db.get("posts")
.push ( {  id : 41 ,
           title : "repudiandae  rem in temporibus et", 
           body: "amet eius quis ta provident perspiciatis quia"
          } )  
.write ();

db.get("posts")
.push ( {  id : 42 ,
           title : "et vel ut", 
           body: "qui cons adipisci atque\nquaerat voluptatem adipisci repudiandae"
          } )  
.write ();

db.get("posts")
.push ( {  id : 43 ,
           title : "incidunt  sequi", 
           body: "repellat  distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
          } )  
.write ();

db.get("posts")
.push ( {  id: 44,
           title: "dolores ut placeat",
           body: "tenetur tempore officiis sequi cumque quod"
} )  
.write ();

db.get("posts")
.push ( {   id: 45,
             title: " sunt neque et consequatur",
             body: "eos harum cupiditate ae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
             } )  
.write ();

db.get("posts")
.push ( {   id: 46,
            title: " harum",
             body: "max aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
          } )  
.write ();

db.get("posts")
.push ( {  id: 47,
           title: "i expedita",
          body: "vero et ea\nnumqua aut enim officiis in quam qui"
          } )  
.write ();

db.get("posts")
.push ( {   id: 48,
           title: " dolor atque maxime aut cum",
           body: "quia nec fugit aut id quia\nratione optio eos iusto veniam iure"
          } )  
.write ();

db.get("posts")
.push ( {  id: 49,
           title: "itaque est fugit",
           body: "asperiores fuga aut\nvoluptas sapiente vel "
          } )  
.write ();

db.get("posts")
.push ( {  id: 50,
           title: "tempora assumenda error",
           body: "quas\nvoluptatem voluptatem iure quasi maxime voluptas nam"
          } )  
.write ();


