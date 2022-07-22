let DB =  require('./common/databaseConnection.ts');

class Mapper {
  addBlog(data){
    return new Promise(async (resolve, reject) => {
      try{
        const serviceObj = (new DB());
        const pool = await serviceObj.getDatabaseReference();
        const query = 'INSERT INTO blogs (nickName, title, content, creationDate) VALUES (?, ?, ?, ?)';
        const values = [data.nickName, data.title, data.content, data.creationDate];
        await pool.query(query, values, async function(err, results, fields) {
          if(err){
            return resolve({
              status: 0,
              error: err,
              data: null
            });
          }else{
            return resolve({
              status: 1,
              error: null,
              data: results
            });
          }
        });
      }catch(ex){
          return resolve({
              status: 0,
              error: ex,
              data: null
          });
      }
    });
  }

  listingBlogs(data) {
    return new Promise(async (resolve, reject) => {
      try{
        const serviceObj = (new DB());
        const pool = await serviceObj.getDatabaseReference();
        const query = 'SELECT id, title, nickName, creationDate FROM blogs ORDER BY id DESC  LIMIT ' + data.skip + ', 20';
        const values = [data.skip];
        await pool.query(query, values, async function(err, results, fields) {
          if(err){
            return resolve({
              status: 0,
              error: err,
              data: null
            });
          }else{
            return resolve({
              status: 1,
              error: null,
              data: results
            });
          }
        });
      }catch(ex){
          return resolve({
              status: 0,
              error: ex,
              data: null
          });
      }
    });
  }

  getBlogContent(data){
    return new Promise(async (resolve, reject) => {
      try{
        const serviceObj = (new DB());
        const pool = await serviceObj.getDatabaseReference();
        const query = 'SELECT content FROM blogs WHERE id = ?';
        const values = [data.blogId];
        await pool.query(query, values, async function(err, results, fields) {
          if(err){
            return resolve({
              status: 0,
              error: err,
              data: null
            });
          }else{
            return resolve({
              status: 1,
              error: null,
              data: results
            });
          }
        });
      }catch(ex){
          return resolve({
              status: 0,
              error: ex,
              data: null
          });
      }
    });
  }

  listingAllComment(data){
    return new Promise(async (resolve, reject) => {
      try{
        const serviceObj = (new DB());
        const pool = await serviceObj.getDatabaseReference();
        const query = 'SELECT * FROM comment WHERE blogId = ?';
        const values = [data.blogId];
        await pool.query(query, values, async function(err, results, fields) {
          if(err){
            return resolve({
              status: 0,
              error: err,
              data: null
            });
          }else{
            return resolve({
              status: 1,
              error: null,
              data: results
            });
          }
        });
      }catch(ex){
          return resolve({
              status: 0,
              error: ex,
              data: null
          });
      }
    });
  }

  listingCommentOnComment(data){
    return new Promise(async (resolve, reject) => {
      try{
        const serviceObj = (new DB());
        const pool = await serviceObj.getDatabaseReference();
        const query = 'SELECT * FROM comment WHERE commentId = ?';
        const values = [data.commentId];
        await pool.query(query, values, async function(err, results, fields) {
          if(err){
            return resolve({
              status: 0,
              error: err,
              data: null
            });
          }else{
            return resolve({
              status: 1,
              error: null,
              data: results
            });
          }
        });
      }catch(ex){
          return resolve({
              status: 0,
              error: ex,
              data: null
          });
      }
    });
  }
}
module.exports = Mapper;