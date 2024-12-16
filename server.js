const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const PORT = process.env.PORT || 3000;


const app = express();

//books routes
app.use("/books", bookRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});