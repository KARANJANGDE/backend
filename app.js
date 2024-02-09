const express = require('express')
const mongoose =require("mongoose")
const jwt = require("jsonwebtoken")
const cors = require('cors');
const app = express()

//req.body json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
const PORT = 4000


//Require routes
const adminRoutes=require("./routes/AdminRoutes");
const userRoutes=require("./routes/UserRoutes");
const roleRoutes=require("./routes/RoleRoutes");
const projectRoutes=require("./routes/ProjectRoutes");
const typeRoutes=require("./routes/TypeRoutes");
const equipmentRoutes=require("./routes/EquipmentRoutes");
const taskRoutes=require("./routes/TaskRoutes");
const docRoutes=require("./routes/DocumentRoutes");
const comRoutes=require("./routes/CommunicationRoutes");
const reportRoutes=require("./routes/ReportRoutes");
const statusRoutes=require("./routes/ProjectStatusRoutes");

//user routes
//localhost:4000/api/user
app.use("/api",userRoutes);
app.use("/api2",adminRoutes);
app.use("/api3",roleRoutes);
app.use("/api4",projectRoutes);
app.use("/api5",typeRoutes);
app.use("/api6",equipmentRoutes);
app.use("/api7",taskRoutes);
app.use("/api8",docRoutes);
app.use("/api9",comRoutes);
app.use("/api10",reportRoutes);
app.use("/api11",statusRoutes);


//database connection
const db=mongoose.connect("mongodb://127.0.0.1:27017/glsproject",{
   
});

db.then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log("Err",err);
})

//server creation
app.listen(PORT,()=>{
    console.log(`server is running on port" ${PORT}`);
})