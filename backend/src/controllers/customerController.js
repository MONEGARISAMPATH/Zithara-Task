
const {Customer}=require('../../models');
const {Op} = require("sequelize");

const getAllCustomers=async(req,res)=>{
    const {page,pageSize}=req.query;
    const offset = page * parseInt(pageSize) - parseInt(pageSize);
    
    try{
        const customers=await Customer.findAll({
            limit:parseInt(pageSize),
            offset:offset
        });
        const totalCount=await Customer.count();
        if(customers){
            return res.status(200).json({success:true,data:customers,message:"Successfully Fetched the Customers details",totalCount:totalCount});
        }
        return res.status(200).json({success:false,message:"No Customers found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error"});
    }
}

const getCustomerById=async(req,res)=>{
    try{
        const customer=await Customer.findByPk(req.params.id);
        if(customer){
            return res.status(200).json({success:true,data:customer,message:"Successfully Fetched the Customer details"});
        }
        return res.status(404).json({success:false,message:"No Customer found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});


    }
}

const createCustomer=async(req,res)=>{
    try{
        const customer=await Customer.create(req.body);
        if(customer){
            return res.status(201).json({success:true,data:customer,message:"Successfully Created the Customer"});
        }
        return res.status(400).json({success:false,message:"Failed to create the Customer"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

const updateCustomer=async(req,res)=>{
    try{
        const customer=await Customer.findByPk(req.params.id);
        if(customer){
            await customer.update(req.body);
            return res.status(200).json({success:true,data:customer,message:"Successfully Updated the Customer"});
        }
        return res.status(404).json({success:false,message:"No Customer found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

const deleteCustomer=async(req,res)=>{
    try{
        const customer=await Customer.findByPk(req.params.id);
        if(customer){
            await Customer.destroy({
                where:{
                    id:req.params.id
                }
            });
            return res.status(200).json({success:true,message:"Successfully Deleted the Customer"});
        }
        return res.status(404).json({success:false,message:"No Customer found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

const getCustomerByName=async(req,res)=>{
    try{
        const customer=await Customer.findOne({
            where:{
                name:req.params.name
            }
        });
        if(customer){
            return res.status(200).json({success:true,data:customer,message:"Successfully Fetched the Customer details"});
        }
        return res.status(404).json({success:false,message:"No Customer found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

const getCustomersByLocation=async(req,res)=>{
    try{
        const customers=await Customer.findAll({
            where:{
                location:req.params.location
            }
        });
        if(customers){
            return res.status(200).json({success:true,data:customers,message:"Successfully Fetched the Customers details"});
        }
        return res.status(404).json({success:false,message:"No Customers found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

const getCustomersBySearchParams=async(req,res)=>{
    try{
        const customers=await Customer.findAll({
            where:{
                [Op.or]:[
                    {
                        name:{
                            [Op.like]:`%${req.params.query}%`
                        }
                    },
                    {
                        location:{
                            [Op.like]: `%${ req.params.query}%`
                        }
                    }
                ]
            }
        });
        if(customers.length>0){
            return res.status(200).json({success:true,data:customers,message:"Successfully Fetched the Customers details"});
        }
        return res.status(200).json({success:false,message:"No Customers found"});
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
}


module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomerByName,
    getCustomersByLocation,
    getCustomersBySearchParams
}