"use strict";
var usersList = [];
async function getDataBase() {
    try {
        const url = "http://localhost:3000/users";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
async function countUsers() {
    let data = [];
    let count = 0;
    data = await getDataBase();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
    }
    usersList = [];
}
