const express = require("express");
const app = express();
const data = require('./employe/employeeDataBase.json')

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).send('Hello everybody!!!');
});

app.get("/employees", (req, res) => {
    if (!data && !data.employees) {
      res.status(404).send(`Employee not found`);
    }
    res.status(200).send(data.employees);
  });

app.get("/employees/:id", function (req, res) {
    const sData = data.employees.find(e => e.id === parseInt(req.params.id));
    if (!sData) {
      res.status(404).send(`No employee ID found`);
    }
        res.status(200).send(sData);
  });

app.post("/employees", function (req, res) {
    const sData = {
      id: data.employees.length + 1,
      name: req.body.name,
      salary: req.body.salary,
      job: req.body.job
    };
    if (!sData) {
      res.status(404).send(`Student could not be added`);
    }require
    data.employees.push(sData);
    res.status(200).send(sData);
  
  });
 
app.put('/employees/:id',(req,res)=>{
  const employee = data.employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) {
    res.status(404).send(`Please try again.`)

  const {error} = validateEmployee(req.body); 
  if (error){
    res.status(400).send(error.details[0].message);
    return;
  }}
  employee.name = req.body.name;
  employee.salary = req.body.salary;
  employee.department = req.body.department;
  res.status(200).send(employee);
});

app.delete('/employees/:id', function(req,res){
    const sData = data.employees.find(function (student) {
        return parseInt(req.params.id) === student.id;
      });
      if (!sData) {
        res.status(404).send(`Student ID could not be found`);
      }
      const index = data.employees.indexOf(sData)
      data.employees.splice(index,1)
      res.send(sData)

})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on localhost:${port}`);
})