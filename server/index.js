const path = require('path');
const app = require('express')();
const express = require('express');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connection = require('./src/connection');

app.use(express.static(path.join(__dirname, 'viewer/build')));

app.get('/view/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/viewer/build/index.html'));
});

module.exports = ({ onUser, publicURL }) => {
  connection({ io, publicURL });
  return server;
};
