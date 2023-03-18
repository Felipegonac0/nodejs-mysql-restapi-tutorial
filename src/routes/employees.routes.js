import { Router } from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees) //Envía con express un metodo GET al servidor *Falta aprender esto 

router.get('/employees/:id', getEmployee) //Envío con un parametro


router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)


export default router