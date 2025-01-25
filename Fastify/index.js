const fastify = require('fastify');
const app = fastify();

app.get('/', function (request, reply) {
    reply.send('First route');
  });
  

app.get('/about', function (request, reply) {
  reply.send('About page');
});
  
app.get('/user/:id', function (request, reply) {
  const id = request.params.id;
  reply.send(`User ID is: ${id}`);
});

app.listen({ port: 3000 }, function(err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on:', address);
});
