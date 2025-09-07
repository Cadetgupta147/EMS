import Department from '../models/department.js'

const addDepartment = async (req, res) => {
    try {
        const {dep_name, description} = req.body;
        const newDepartment = new Department({
            dep_name : dep_name,
            description
         })
        await newDepartment.save()
        return res.status(200).json({success: true, department: newDepartment})
    } catch (error) {
        console.error("Error adding department:", error);
        return res.status(500).json({success: false, error: error})
    }
}

const getDepartment = async (req,res) => {
    try {
        const department = await Department.find()
        return res.status(200).json({success:true, department})
    } catch (error) {
        return res.status(500).json({success:false, error: error})
    }
}

const editDepartment = async (req,res) => {
    try {
        const {id} = req.params;
        const department = await Department.findById(id)
        return res.status(200).json({success: true, department})
    } catch (error) {
        return res.status(500).json({success:false, error:error})
    }
}

const updateDepartment = async (req,res)=>{
    try {
        const {id} = req.params;
        const {dep_name, description} = req.body
        const updateDep = await Department.findByIdAndUpdate({_id:id}, {dep_name: dep_name, description: description})
        return res.status(200).json({success: true, updateDep})
    } catch (error) {
        return res.status(500).json({success:false, error:error})
    }
    
}

const deleteDepartment = async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteDep = await Department.findByIdAndDelete({_id:id})
        return res.status(200).json({success: true, deleteDep})
    } catch (error) {
        return res.status(500).json({success:false, error:error})
    }
    
}

export {addDepartment, getDepartment, editDepartment, updateDepartment, deleteDepartment}